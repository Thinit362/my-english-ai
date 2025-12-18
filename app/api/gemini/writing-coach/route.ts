import { NextResponse } from "next/server";

type Rubric = {
  taskFulfillment: number; // 0-10
  organization: number; // 0-10
  grammarVocabulary: number; // 0-10
  coherence: number; // 0-10
};

export async function POST(req: Request) {
  try {
    const { studentText, unit, topic, pageTitle, exerciseTitle, cues } =
      await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing GEMINI_API_KEY" }, { status: 500 });
    }

    // JSON schema instructions (simple + robust)
    const guardrails = `
You are an English writing teacher for Vietnamese grade-10 students.

IMPORTANT RULES:
- Do NOT write a full paragraph for the student.
- Do NOT rewrite the whole text.
- Give feedback + minimal corrections.
- Provide at most 1-2 improved example sentences.
- Keep student's ideas.

You MUST output ONLY valid JSON in the following format (no markdown, no extra text):

{
  "rubric": {
    "taskFulfillment": 0-10,
    "organization": 0-10,
    "grammarVocabulary": 0-10,
    "coherence": 0-10
  },
  "feedbackText": "Teacher-like feedback in plain text. Must include:
  1) Overall feedback (2-4 lines)
  2) Key issues (bullets, max 6)
  3) Suggested improved sentences (max 2)
  4) Next-step tips (bullets, max 4)"
}

If studentText is empty, set all rubric scores to 0 and feedbackText should suggest a brief outline and vocabulary tips, but still keep the format.
`;

    const payload = `
UNIT: ${unit}
TOPIC: ${topic ?? ""}
PAGE: ${pageTitle ?? ""}
TASK: ${exerciseTitle ?? ""}
CUES:
${Array.isArray(cues) ? cues.map((c: string, i: number) => `${i + 1}. ${c}`).join("\n") : ""}

STUDENT WRITING:
${studentText ?? ""}
`;

    const body = {
      contents: [
        {
          role: "user",
          parts: [{ text: guardrails + "\n\n" + payload }],
        },
      ],
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 900,
      },
    };

    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    if (!resp.ok) {
      const detail = await resp.text();
      return NextResponse.json({ error: "Gemini API error", detail }, { status: 500 });
    }

    const data = await resp.json();
    const raw =
      data?.candidates?.[0]?.content?.parts?.map((p: any) => p.text).join("") ?? "";

    // Parse JSON safely
    const parsed = safeJsonParse(raw);
    if (!parsed) {
      return NextResponse.json(
        { error: "Invalid JSON from Gemini", raw },
        { status: 500 }
      );
    }

    const rubric = normalizeRubric(parsed.rubric);
    const feedbackText = String(parsed.feedbackText ?? "").trim();

    return NextResponse.json({ rubric, feedbackText });
  } catch (e: any) {
    return NextResponse.json(
      { error: "Server error", detail: String(e?.message ?? e) },
      { status: 500 }
    );
  }
}

function safeJsonParse(text: string) {
  try {
    // some models may add leading/trailing whitespace
    return JSON.parse(text.trim());
  } catch {
    return null;
  }
}

function clamp0to10(n: any) {
  const x = Number(n);
  if (!Number.isFinite(x)) return 0;
  return Math.max(0, Math.min(10, Math.round(x)));
}

function normalizeRubric(r: any): Rubric {
  return {
    taskFulfillment: clamp0to10(r?.taskFulfillment),
    organization: clamp0to10(r?.organization),
    grammarVocabulary: clamp0to10(r?.grammarVocabulary),
    coherence: clamp0to10(r?.coherence),
  };
}

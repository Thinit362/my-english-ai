// app/api/gemini/writing-coach/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function OPTIONS() {
  return NextResponse.json({ ok: true });
}

type Rubric = {
  taskFulfillment: number; // 0-10
  organization: number; // 0-10
  grammarVocabulary: number; // 0-10
  coherence: number; // 0-10
};

export async function POST(req: Request) {
  const apiKey =
    process.env.GOOGLE_GEMINI_API_KEY ||
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.NEXT_PUBLIC_GEMINI_API_KEY ||
    "";

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Missing GOOGLE_GEMINI_API_KEY (hoặc GEMINI_API_KEY/GOOGLE_API_KEY/NEXT_PUBLIC_GEMINI_API_KEY).",
      },
      { status: 500 }
    );
  }

  try {
    const body = await req.json().catch(() => ({}));

    const studentText =
      typeof body?.studentText === "string" ? body.studentText : "";
    const unit = body?.unit ?? "";
    const topic = typeof body?.topic === "string" ? body.topic : "";
    const pageTitle = typeof body?.pageTitle === "string" ? body.pageTitle : "";
    const exerciseTitle =
      typeof body?.exerciseTitle === "string" ? body.exerciseTitle : "";
    const cues: string[] = Array.isArray(body?.cues)
      ? body.cues.filter((x: any) => typeof x === "string")
      : [];

    if (!topic && !exerciseTitle && cues.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: missing topic/exerciseTitle/cues context." },
        { status: 400 }
      );
    }

    const guardrails = `
You are an English writing teacher for Vietnamese grade-10 students.

IMPORTANT RULES (DO NOT BREAK):
- Do NOT write a full paragraph for the student.
- Do NOT rewrite the whole text.
- Point out mistakes and explain briefly.
- Provide at most 1-2 improved example sentences (NOT a full paragraph).
- Give improvement tips based on Topic sentence / Supporting sentences / Concluding sentence.

Return ONLY valid JSON (no markdown, no extra text) with this exact shape:
{
  "rubric": {
    "taskFulfillment": 0-10,
    "organization": 0-10,
    "grammarVocabulary": 0-10,
    "coherence": 0-10
  },
  "feedbackText": "..."
}

If studentText is empty:
- All rubric scores = 0
- feedbackText guides outline + vocabulary, still with Topic/Supporting/Concluding tips.
`.trim();

    const payload = `
UNIT: ${unit}
TOPIC: ${topic}
PAGE: ${pageTitle}
TASK: ${exerciseTitle}

CUES:
${cues.map((c, i) => `${i + 1}. ${c}`).join("\n")}

STUDENT WRITING:
${studentText}
`.trim();

    const prompt = `${guardrails}\n\n${payload}`;

    const genAI = new GoogleGenerativeAI(apiKey);

    // ✅ cố ép JSON (nếu SDK/version hỗ trợ)
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.3,
        maxOutputTokens: 900,
        responseMimeType: "application/json",
      },
    });

    const raw1 = await callText(model, prompt);

    // 1) parse lần 1
    let parsed = safeJsonParse(raw1);

    // 2) nếu fail → reprompt 1 lần để “format lại JSON”
    let raw2 = "";
    if (!parsed) {
      raw2 = await repromptToJson(model, raw1);
      parsed = safeJsonParse(raw2);
    }

    // 3) nếu vẫn fail → trả fallback (để UI không chết)
    if (!parsed) {
      const fallback = buildFallback(studentText);
      return NextResponse.json({
        rubric: fallback.rubric,
        feedbackText: fallback.feedbackText,
        model: "gemini-2.5-flash",
        debug: {
          note: "Gemini did not return valid JSON; fallback generated.",
          raw1,
          raw2,
        },
      });
    }

    const rubric = normalizeRubric(parsed.rubric);
    const feedbackText = String(parsed.feedbackText ?? "").trim();

    return NextResponse.json({
      rubric,
      feedbackText:
        feedbackText || "Gemini returned empty feedback. Please try again.",
      model: "gemini-2.5-flash",
      // bật debug nếu bạn muốn xem raw khi cần:
      // debug: { raw1, raw2 }
    });
  } catch (err: any) {
    console.error("[/api/gemini/writing-coach] error:", err);
    return NextResponse.json(
      { error: err?.message || "Gemini error" },
      { status: 500 }
    );
  }
}

/* =========================
 * Helpers
 * ========================= */

async function callText(model: any, prompt: string) {
  const result = await model.generateContent(prompt);
  return (
    (typeof result?.response?.text === "function" ? result.response.text() : "") ||
    ""
  );
}

async function repromptToJson(model: any, raw: string) {
  const reprompt = `
Convert the content below into ONLY valid JSON with this exact format:
{
  "rubric": {
    "taskFulfillment": 0-10,
    "organization": 0-10,
    "grammarVocabulary": 0-10,
    "coherence": 0-10
  },
  "feedbackText": "..."
}

Rules:
- Output ONLY JSON (no markdown).
- Keep teacher tone.
- Do NOT write a full paragraph.
- Suggest at most 1-2 improved sentences.

CONTENT:
${raw}
`.trim();

  return await callText(model, reprompt);
}

function safeJsonParse(text: string) {
  const s = String(text || "").trim();
  if (!s) return null;

  // remove code fences
  const noFence = s.replace(/```json\s*/gi, "").replace(/```\s*/g, "").trim();

  // try direct parse
  try {
    return JSON.parse(removeTrailingCommas(noFence));
  } catch {}

  // extract first { ... } block
  const start = noFence.indexOf("{");
  const end = noFence.lastIndexOf("}");
  if (start >= 0 && end > start) {
    const candidate = noFence.slice(start, end + 1);
    try {
      return JSON.parse(removeTrailingCommas(candidate));
    } catch {}
  }

  return null;
}

function removeTrailingCommas(jsonLike: string) {
  return jsonLike.replace(/,\s*}/g, "}").replace(/,\s*]/g, "]");
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

function buildFallback(studentText: string) {
  const hasText = studentText.trim().length > 0;

  return {
    rubric: {
      taskFulfillment: hasText ? 4 : 0,
      organization: hasText ? 4 : 0,
      grammarVocabulary: hasText ? 4 : 0,
      coherence: hasText ? 4 : 0,
    },
    feedbackText: hasText
      ? [
          "Overall feedback:",
          "- I can see your effort. Your paragraph has ideas, but needs clearer structure and some grammar fixes.",
          "",
          "Key issues (examples):",
          "- Check subject–verb agreement (e.g., 'My parents works' → 'My parents work').",
          "- Watch verb forms after like/enjoy/hate + V-ing.",
          "- Use linking words (first, then, besides, therefore) to make sentences connect.",
          "",
          "Suggested improved sentences (max 2):",
          "- In my family, household chores are shared among all members.",
          "- I usually wash the dishes after dinner because it helps my parents rest.",
          "",
          "Next-step tips (Topic/Supporting/Concluding):",
          "- Topic: Write 1 clear opening sentence that states how chores are divided.",
          "- Supporting: Add 4–6 sentences with specific chores for each person + reasons.",
          "- Concluding: End with 1 sentence about fairness or family teamwork.",
        ].join("\n")
      : [
          "Overall feedback:",
          "- You haven’t written anything yet. Let’s start with a simple plan.",
          "",
          "Next-step tips (Topic/Supporting/Concluding):",
          "- Topic: Write 1 sentence to introduce your family and the idea of sharing chores.",
          "- Supporting: Write 5–7 sentences describing who does which chores (parents/siblings/you).",
          "- Concluding: Write 1 sentence to say if the division is fair and how you feel about it.",
          "",
          "Suggested starters (choose 1–2, not a full paragraph):",
          "- In my family, there are ___ people, and we share household chores.",
          "- I think housework is (fairly / not fairly) divided because ____.",
        ].join("\n"),
  };
}

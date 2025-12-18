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
  // ✅ Đọc key giống hệt /api/gemini/chat để khỏi lệch env
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

    const studentText = typeof body?.studentText === "string" ? body.studentText : "";
    const unit = body?.unit ?? "";
    const topic = typeof body?.topic === "string" ? body.topic : "";
    const pageTitle = typeof body?.pageTitle === "string" ? body.pageTitle : "";
    const exerciseTitle =
      typeof body?.exerciseTitle === "string" ? body.exerciseTitle : "";
    const cues: string[] = Array.isArray(body?.cues) ? body.cues : [];

    // Guard: vẫn cho phép empty text (GV hướng dẫn outline), nhưng phải có context
    if (!topic && !exerciseTitle && cues.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: missing topic/exerciseTitle/cues context." },
        { status: 400 }
      );
    }

    const guardrails = `
You are an English writing teacher for Vietnamese grade-10 students.

IMPORTANT RULES:
- Do NOT write a full paragraph for the student.
- Do NOT rewrite the whole text.
- Point out mistakes and explain briefly.
- Provide at most 1-2 improved example sentences (not a full paragraph).
- Give improvement tips based on Topic sentence / Supporting sentences / Concluding sentence.

You MUST output ONLY valid JSON (no markdown, no extra text) in this format:

{
  "rubric": {
    "taskFulfillment": 0-10,
    "organization": 0-10,
    "grammarVocabulary": 0-10,
    "coherence": 0-10
  },
  "feedbackText": "Teacher-like feedback in plain text. Must include:
  1) Overall feedback (2-4 lines)
  2) Key issues (bullets, max 6) with short explanations
  3) Suggested improved sentences (max 2)
  4) Next-step tips (bullets, max 4) focusing on Topic/Supporting/Concluding"
}

If studentText is empty:
- Set all rubric scores to 0
- feedbackText should guide outline and vocabulary suggestions, but still follow the same sections.
`;

    const payload = `
UNIT: ${unit}
TOPIC: ${topic}
PAGE: ${pageTitle}
TASK: ${exerciseTitle}

CUES:
${cues.map((c, i) => `${i + 1}. ${c}`).join("\n")}

STUDENT WRITING:
${studentText}
`;

    // ✅ dùng model giống chat route (ổn định)
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // gọi bằng chuỗi để tránh lỗi type role/parts
    const result = await model.generateContent(guardrails + "\n\n" + payload);
    const raw =
      (typeof result?.response?.text === "function" ? result.response.text() : "") ||
      "";

    const parsed = safeJsonParse(raw);
    if (!parsed) {
      return NextResponse.json(
        { error: "Invalid JSON from Gemini", raw },
        { status: 500 }
      );
    }

    const rubric = normalizeRubric(parsed.rubric);
    const feedbackText = String(parsed.feedbackText ?? "").trim();

    return NextResponse.json({ rubric, feedbackText, model: "gemini-2.5-flash" });
  } catch (err: any) {
    console.error("[/api/gemini/writing-coach] error:", err);
    return NextResponse.json(
      { error: err?.message || "Gemini error" },
      { status: 500 }
    );
  }
}

function safeJsonParse(text: string) {
  try {
    return JSON.parse(String(text).trim());
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

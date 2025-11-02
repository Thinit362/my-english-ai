// app/api/gemini/chat/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function OPTIONS() {
  // Cho preflight (nếu có) để tránh 405
  return NextResponse.json({ ok: true });
}

export async function POST(req: Request) {
  const apiKey = process.env.GOOGLE_GEMINI_API_KEY || "";
  if (!apiKey) {
    return NextResponse.json({ error: "Missing GOOGLE_GEMINI_API_KEY" }, { status: 500 });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const pageKey = body?.pageKey ?? "advisor";
    const unit = Number(body?.unit ?? 1);

    // Chấp nhận nhiều kiểu payload: prompt / message / messages[]
    let prompt: string | undefined =
      (typeof body?.prompt === "string" && body.prompt) ||
      (typeof body?.message === "string" && body.message) ||
      undefined;

    if (!prompt && Array.isArray(body?.messages)) {
      const lastUser = [...body.messages].reverse().find((m: any) => m?.role === "user" && m?.content);
      prompt = lastUser?.content;
    }

    if (!prompt || !prompt.trim()) {
      return NextResponse.json(
        { error: 'Invalid "prompt": must be a non-empty string.' },
        { status: 400 }
      );
    }

    const sys =
      `Bạn là trợ lý học Tiếng Anh THPT. Bối cảnh: pageKey=${pageKey}, unit=${unit}. ` +
      `Ưu tiên câu trả lời ngắn gọn, có ví dụ/bài tập cụ thể khi phù hợp.`;

    // ✅ Gọi bằng chuỗi để tránh lỗi type với {role, parts}
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const finalPrompt = `${sys}\n\nCâu hỏi: ${prompt}`;
    const r = await model.generateContent(finalPrompt);

    const text = (typeof r?.response?.text === "function" ? r.response.text() : "") || "";
    return NextResponse.json({ answer: text || "(Không có phản hồi từ Gemini)" });
  } catch (err: any) {
    console.error("[/api/gemini/chat] error:", err);
    return NextResponse.json({ error: err?.message || "Gemini error" }, { status: 500 });
  }
}

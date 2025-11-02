// app/api/gemini/chat/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// (tuỳ chọn) nếu bạn dùng src/ cấu trúc, đường dẫn là: src/app/api/gemini/chat/route.ts

export const runtime = "nodejs";               // hoặc "edge" nếu bạn muốn Edge runtime
export const dynamic = "force-dynamic";        // tránh bị static hoá trên Vercel

export async function OPTIONS() {
  // Phòng trường hợp có preflight; trả 200 để không dính 405
  return NextResponse.json({ ok: true });
}

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY || "";
  if (!apiKey) {
    return NextResponse.json({ error: "Missing GEMINI_API_KEY" }, { status: 500 });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const pageKey = body?.pageKey ?? "advisor";
    const unit = Number(body?.unit ?? 1);

    // Hỗ trợ cả prompt/message/messages
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

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const sys =
      `Bạn là trợ lý học Tiếng Anh THPT. bối cảnh: pageKey=${pageKey}, unit=${unit}. ` +
      `Ưu tiên câu trả lời ngắn gọn và có ví dụ/bài tập.`;

    const r = await model.generateContent([
      { role: "user", parts: [{ text: `${sys}\n\nCâu hỏi: ${prompt}` }] },
    ]);

    const text =
      r?.response?.text?.() ||
      r?.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "";

    return NextResponse.json({ answer: text || "(Không có phản hồi từ Gemini)" });
  } catch (err: any) {
    console.error("[/api/gemini/chat] error:", err);
    return NextResponse.json(
      { error: err?.message || "Gemini error" },
      { status: 500 }
    );
  }
}

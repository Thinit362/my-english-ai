// app/api/gemini/chat/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function OPTIONS() {
  // cho preflight (nếu có) → tránh 405
  return NextResponse.json({ ok: true });
}

export async function POST(req: Request) {
  // 🔑 Đọc đúng biến môi trường bạn đang dùng
  const apiKey =
    process.env.GOOGLE_GEMINI_API_KEY || // <-- tên bạn đang đặt
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.NEXT_PUBLIC_GEMINI_API_KEY ||
    "";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing GOOGLE_GEMINI_API_KEY (hoặc GEMINI_API_KEY/GOOGLE_API_KEY/NEXT_PUBLIC_GEMINI_API_KEY)." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json().catch(() => ({}));

    // nhận prompt (và fallback các trường khác nếu bạn đổi client sau này)
    let prompt: string | undefined =
      (typeof body?.prompt === "string" && body.prompt) ||
      (typeof body?.message === "string" && body.message) ||
      undefined;

    if (!prompt || !prompt.trim()) {
      return NextResponse.json(
        { error: 'Invalid "prompt": must be a non-empty string.' },
        { status: 400 }
      );
    }

    // ✅ Gemini 1.5 Flash
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // gọi bằng chuỗi để tránh lỗi type {role, parts}
    const result = await model.generateContent(prompt);
    const text =
      (typeof result?.response?.text === "function" ? result.response.text() : "") || "";

    return NextResponse.json({
      answer: text || "(Không có phản hồi từ Gemini)",
      model: "gemini-2.5-flash",
    });
  } catch (err: any) {
    console.error("[/api/gemini/chat] error:", err);
    return NextResponse.json({ error: err?.message || "Gemini error" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// (Tuỳ chọn) cho phép override qua .env.local: GEMINI_MODEL=gemini-2.5-flash
const MODEL = process.env.GEMINI_MODEL?.trim() || "gemini-2.5-flash";

export async function POST(req: NextRequest) {
  try {
    const { pageKey, unit, message } = await req.json();

    const apiKey = process.env.GOOGLE_GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GOOGLE_GEMINI_API_KEY (add it in .env.local & Vercel Project Settings)" },
        { status: 500 }
      );
    }
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Missing 'message' in request body" }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: MODEL });

    const systemPrompt = `Bạn là trợ lý học Tiếng Anh THPT (Gemini).
Namespace: ${pageKey}/unit${unit}.
Trả lời ngắn gọn, rõ ràng, dễ hiểu; có ví dụ/bài tập khi phù hợp; ưu tiên tiếng Việt.`;

    const result = await model.generateContent([systemPrompt, message]);
    const text = result.response.text();

    return NextResponse.json({ answer: text, model: MODEL });
  } catch (err: any) {
    console.error("🔥 Gemini 2.5 Flash error:", err?.message || err);
    return NextResponse.json(
      { error: "Server error calling Gemini 2.5 Flash. Check model access & API key." },
      { status: 500 }
    );
  }
}

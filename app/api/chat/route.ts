import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "edge"; // dùng Node runtime để đọc env, ổn định trên Vercel

export async function POST(req: NextRequest) {
  try {
    const { prompt, pageKey, units } = await req.json();

    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing GOOGLE_API_KEY" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Bạn có thể tuỳ biến "context" theo lớp/unit
    const context =
      `You are an English learning assistant for Vietnamese high-school students. ` +
      `Book: ${pageKey || "unknown"}, Units: ${(units || []).join(", ") || "N/A"}. ` +
      `Answer briefly and clearly, add examples when helpful.`;

    const result = await model.generateContent([
      context,
      String(prompt || "")
  ]);
    const text = result.response.text() || "";
    return NextResponse.json({ text });
  } catch (err: any) {
    console.error("Gemini API error:", err?.message || err);
    return NextResponse.json(
      { error: "Gemini API call failed" },
      { status: 500 }
    );
  }
}

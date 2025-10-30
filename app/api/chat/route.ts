import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * API handler cho Gemini Chat – chạy ổn định trên local & Vercel.
 * Model: gemini-2.5-flash
 */
export async function POST(req: NextRequest) {
  try {
    const { pageKey, unit, message } = await req.json();

    // 🔑 Lấy API Key từ biến môi trường
    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error("❌ Thiếu GOOGLE_GEMINI_API_KEY trong .env.local hoặc Vercel Environment Variables");
      return NextResponse.json(
        { error: "Thiếu API key Gemini. Vui lòng thêm GOOGLE_GEMINI_API_KEY trong .env.local và Vercel." },
        { status: 500 }
      );
    }

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Thiếu nội dung message trong body request." }, { status: 400 });
    }

    // 🔗 Khởi tạo Gemini 2.5 Flash
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // 🧠 Prompt hệ thống để hướng dẫn cách phản hồi
    const systemPrompt = `
Bạn là trợ lý học tiếng Anh THPT (Gemini Assistant).
Namespace: ${pageKey}/unit${unit}.
Hướng dẫn: Giải thích ngắn gọn, dễ hiểu, có ví dụ minh họa thực tế.
Nếu học sinh hỏi về kỹ năng (nghe, nói, đọc, viết, ngữ pháp, từ vựng), hãy gợi ý hoạt động luyện tập cụ thể.
Trả lời bằng tiếng Việt thân thiện, dễ hiểu.
    `;

    // 💬 Gọi model sinh phản hồi
    const result = await model.generateContent([systemPrompt, message]);
    const text = result.response.text();

    // ✅ Trả dữ liệu cho frontend (GeminiChat.tsx)
    return NextResponse.json({
      answer: text || "(Không có phản hồi từ Gemini 2.5 Flash)",
      model: "gemini-2.5-flash",
    });
  } catch (err: any) {
    console.error("🔥 Lỗi gọi Gemini 2.5 Flash:", err?.message || err);
    return NextResponse.json(
      { error: "Lỗi server khi xử lý yêu cầu Gemini 2.5 Flash." },
      { status: 500 }
    );
  }
}
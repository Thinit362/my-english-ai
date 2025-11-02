// app/api/chat/route.ts
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    // 1) Đọc body và kiểm tra
    const body = await req.json().catch(() => ({}));
    const prompt: string = body?.prompt ?? '';
    const model: string = body?.model ?? 'gemini-2.5-flash';
    const system: string | undefined = body?.system; // nếu muốn truyền system riêng

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Missing GEMINI_API_KEY (check Vercel → Settings → Environment Variables)' },
        { status: 500 }
      );
    }
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'Invalid "prompt" (must be a non-empty string)' }, { status: 400 });
    }

    // 2) Khởi tạo Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const gemini = genAI.getGenerativeModel({ model });

    // 3) Ghép system + prompt (nếu có system)
    const finalPrompt = system ? `${system}\n\n${prompt}` : prompt;

    // 4) Gọi model
    const result = await gemini.generateContent(finalPrompt);
    const text = result?.response?.text?.() ?? '';

    // 5) Trả về JSON cho FE (FlashBox đọc các field này)
    return NextResponse.json({ output: text });
  } catch (err: any) {
    // In log server để debug trong Vercel Logs
    console.error('Gemini API Error:', err);
    // Một số lỗi SDK có dạng { status: 400, message: ... }
    const status = Number(err?.status) || 500;
    const message = err?.message || 'Unknown error';
    return NextResponse.json({ error: message }, { status });
  }
}

// (tuỳ chọn) GET để kiểm tra nhanh API sống
export async function GET() {
  return NextResponse.json({ ok: true, model: 'gemini-2.5-flash' });
}

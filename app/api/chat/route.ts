// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// (Tuỳ chọn) tăng timeout cho Vercel Function nếu cần:
// export const maxDuration = 30;

function jsonError(message: string, status = 500, extra: Record<string, any> = {}) {
  // Không log secret; chỉ log server-side
  console.error('[API /api/chat] Error:', { status, message, ...extra });
  return NextResponse.json({ error: message, status }, { status });
}

export async function GET() {
  const hasKey = !!process.env.GEMINI_API_KEY;
  return NextResponse.json({
    ok: true,
    hasKey,
    defaultModel: 'gemini-1.5-flash',
    note: 'POST { prompt, model? } to get a response.'
  });
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return jsonError(
        'Missing GEMINI_API_KEY (set it in Vercel → Project → Settings → Environment Variables, then redeploy).',
        500
      );
    }

    let body: any = {};
    try {
      body = await req.json();
    } catch {
      return jsonError('Invalid JSON body.', 400);
    }

    const prompt = (body?.prompt ?? '').toString().trim();
    const modelFromClient = (body?.model ?? '').toString().trim();

    if (!prompt) {
      return jsonError('Invalid "prompt": must be a non-empty string.', 400);
    }

    // Model an toàn mặc định; FE vẫn có thể override
    const modelId =
      modelFromClient ||
      'gemini-1.5-flash'; // dùng model ổn định; nếu muốn 2.5, pass từ FE: model:"gemini-2.5-flash"

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: modelId });

    const result = await model.generateContent(prompt);
    const text = result?.response?.text?.() ?? '';

    return NextResponse.json({ output: text, model: modelId });
  } catch (err: any) {
    // Chuẩn hoá lỗi trả về
    const status = Number(err?.status || err?.statusCode) || 500;
    const message =
      err?.message ||
      err?.toString?.() ||
      'Unknown server error (check Vercel Logs for stack trace).';

    return jsonError(message, status, {
      name: err?.name,
      cause: err?.cause,
    });
  }
}

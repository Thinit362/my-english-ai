// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const DEFAULT_MODEL = 'gemini-2.5-flash';

function jerr(message: string, status = 500, extra?: any) {
  console.error('[API /api/chat] Error:', { status, message, extra });
  return NextResponse.json({ error: message, status }, { status });
}

function getApiKey() {
  return (
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_GEMINI_API_KEY ||
    process.env.NEXT_PUBLIC_GEMINI_API_KEY ||
    ''
  );
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    hasKey: !!getApiKey(),
    defaultModel: DEFAULT_MODEL,
    note: 'POST { prompt, model? } to get a response.',
  });
}

export async function POST(req: NextRequest) {
  try {
    const apiKey = getApiKey();
    if (!apiKey) return jerr('Missing Gemini API key in env (GEMINI_API_KEY or GOOGLE_GEMINI_API_KEY).', 500);

    let body: any = {};
    try { body = await req.json(); } catch { return jerr('Invalid JSON body.', 400); }

    const prompt = (body?.prompt ?? '').toString().trim();
    const modelId = (body?.model ?? DEFAULT_MODEL).toString().trim() || DEFAULT_MODEL;
    if (!prompt) return jerr('Invalid "prompt": must be a non-empty string.', 400);

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: modelId });

    const result = await model.generateContent(prompt);
    const text = result?.response?.text?.() ?? '';

    return NextResponse.json({ output: text, model: modelId });
  } catch (err: any) {
    const status = Number(err?.status || err?.statusCode) || 500;
    const message = err?.message || 'Unknown server error.';
    return jerr(message, status, { name: err?.name, cause: err?.cause });
  }
}

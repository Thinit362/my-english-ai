// app/gemini/ingest/route.ts
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';            // BẮT BUỘC: chạy Serverless Node, không phải Edge
export const dynamic = 'force-dynamic';     // Tránh bị static hóa
export const preferredRegion = 'iad1';      // Tùy chọn: gần log Vercel bạn đưa
// export const maxDuration = 60;           // Tùy chọn cho tác vụ PDF lớn

// Util: cắt text thành các đoạn nhỏ (để hiển thị/nhét vào LLM)
function chunkText(text: string, chunkSize = 2000, overlap = 200) {
  const out: { idx: number; start: number; end: number; text: string }[] = [];
  let i = 0, start = 0;
  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    out.push({ idx: i++, start, end, text: text.slice(start, end) });
    start = end - overlap;
    if (start < 0) start = 0;
    if (start >= text.length) break;
  }
  return out;
}

export async function POST(req: Request) {
  try {
    // import động, chỉ load khi chạy trên server
    const pdfParse = (await import('pdf-parse')).default;

    const form = await req.formData();
    const files = form.getAll('file') as File[];
    if (!files.length) {
      return NextResponse.json({ ok: false, error: 'No file provided' }, { status: 400 });
    }

    // Cho phép nhiều file, parse tuần tự (đơn giản, ít tốn RAM)
    const results: any[] = [];
    for (const f of files) {
      if (f.type !== 'application/pdf' && !f.name?.toLowerCase().endsWith('.pdf')) {
        results.push({ name: f.name, ok: false, error: 'Unsupported file type (PDF only)' });
        continue;
      }

      const ab = await f.arrayBuffer();
      const buf = Buffer.from(ab);

      const parsed = await pdfParse(buf); // { text, numpages, info, metadata, version }
      const rawText = (parsed.text || '').replace(/\u0000/g, '').trim(); // sạch null chars

      // Cắt nhỏ để client/LLM dùng dễ hơn
      const chunks = chunkText(rawText, 2200, 200);

      results.push({
        ok: true,
        name: f.name,
        numPages: parsed.numpages ?? null,
        info: parsed.info ?? null,
        metadata: parsed.metadata ? String(parsed.metadata) : null,
        bytes: buf.byteLength,
        preview: rawText.slice(0, 800), // xem nhanh
        chunks,                          // mảng {idx,start,end,text}
      });
    }

    return NextResponse.json({ ok: true, results });
  } catch (err: any) {
    console.error('INGEST_ERROR', err);
    return NextResponse.json({ ok: false, error: err?.message ?? 'Unknown error' }, { status: 500 });
  }
}

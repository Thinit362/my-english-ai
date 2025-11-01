import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const pdfParse = (await import('pdf-parse')).default; // import động

  const form = await req.formData();
  const file = form.get('file') as File | null;
  if (!file) return NextResponse.json({ ok:false, error:'No file' }, { status:400 });

  const buf = Buffer.from(await file.arrayBuffer());
  const parsed = await pdfParse(buf);
  return NextResponse.json({
    ok:true,
    numPages: parsed.numpages ?? null,
    textPreview: (parsed.text || '').slice(0, 800)
  });
}

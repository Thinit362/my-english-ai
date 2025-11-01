// app/gemini/ingest/route.ts
import { NextRequest, NextResponse } from "next/server";
import pdfParse from "pdf-parse";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

    const buf = Buffer.from(await file.arrayBuffer());
    const pdf = await pdfParse(buf);
    const text = (pdf.text || "").replace(/\u0000/g, "").trim();
    if (!text) return NextResponse.json({ error: "Empty PDF text" }, { status: 400 });

    // Cắt theo heading viết hoa/ngắn dòng, rồi chia nhỏ theo ~8000 ký tự để an toàn token
    const sections = text.split(/\n(?=[A-ZĐƠƯÂÊÔ][^\n]{0,80}\n)/g);
    const lessons: { id: string; title: string; content: string }[] = [];
    let c = 0;
    for (const s of sections) {
      const title = s.split("\n")[0]?.trim().slice(0, 80) || `Bài ${c + 1}`;
      const parts = s.match(/[\s\S]{1,8000}/g) || [s];
      for (const part of parts) {
        lessons.push({
          id: `L${Date.now()}_${c++}`,
          title,
          content: part.trim(),
        });
      }
    }

    return NextResponse.json({ lessons });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Parse error" }, { status: 500 });
  }
}

// app/api/gemini/chat/route.ts
import { NextResponse } from "next/server";
import { chatSend } from "@/lib/gemini";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { prompt, system, history } = await req.json();
    const out = await chatSend({ prompt, system, history });
    return NextResponse.json(out);
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Gemini error" }, { status: 500 });
  }
}

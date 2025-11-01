// app/gemini/grade/route.ts
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";

export const runtime = "nodejs";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const Body = z.object({
  skill: z.enum(["reading", "writing", "listening"]),
  lessonContent: z.string().min(10),
  studentAnswer: z.string().min(1),
  rubric: z.array(z.string()).optional()
});

export async function POST(req: NextRequest) {
  try {
    const parsed = Body.parse(await req.json());
    const { skill, lessonContent, studentAnswer, rubric } = parsed;

    const defaultRubric: Record<string, string[]> = {
      reading: ["Ý chính", "Chi tiết hỗ trợ", "Suy luận", "Bằng chứng trích dẫn"],
      writing: ["Ngữ pháp", "Từ vựng", "Mạch lạc", "Bố cục", "Bám đề"],
      listening: ["Ý chính", "Từ khóa", "Suy luận", "Thông tin chi tiết/số liệu"]
    };
    const useRubric = rubric ?? defaultRubric[skill];

    const system = `
Bạn là giám khảo. Trả về JSON:
{
  "score": 0-10,
  "criteria": [{"name": string, "score": 0-10, "feedback": string}],
  "overall": string,
  "next_steps": [string]
}
- Chấm dựa trên TÀI LIỆU BÀI HỌC.
- Ngắn gọn, có ví dụ sửa mẫu.
`;

    const res = await model.generateContent({
      systemInstruction: { role: "system", parts: [{ text: system }] },
      contents: [{
        role: "user",
        parts: [{
          text:
`KỸ NĂNG: ${skill}
TIÊU CHÍ: ${useRubric.join(", ")}

TÀI LIỆU BÀI HỌC:
${lessonContent}

BÀI LÀM HỌC SINH:
${studentAnswer}`
        }]
      }]
    });

    let data: any;
    const raw = res.response.text();
    try { data = JSON.parse(raw); }
    catch { data = { raw }; }

    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Grade error" }, { status: 400 });
  }
}

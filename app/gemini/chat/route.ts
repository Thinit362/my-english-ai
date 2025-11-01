import { NextRequest } from "next/server";

export const runtime = "nodejs"; // bắt buộc để dùng stream

// Hàm stream phản hồi từ Gemini 2.5 Flash
export async function POST(req: NextRequest) {
  try {
    const { prompt, systemPrompt, context } = await req.json();

    // 🧠 Xây dựng nội dung gửi tới Gemini API
    const model = "gemini-2.5-flash";
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response("Missing GEMINI_API_KEY", { status: 500 });
    }

    const body = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text:
                (systemPrompt ? `Hệ thống: ${systemPrompt}\n\n` : "") +
                (context ? `Ngữ cảnh: ${context}\n\n` : "") +
                prompt,
            },
          ],
        },
      ],
      generationConfig: { temperature: 0.7 },
      safetySettings: [],
    };

    // 🔥 Gọi Gemini API ở chế độ stream
    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!resp.ok || !resp.body) {
      const errText = await resp.text();
      throw new Error(`Gemini API error: ${resp.status} ${errText}`);
    }

    // 🧩 Tạo stream trả về từng chunk để UI hiển thị dần
    const stream = new ReadableStream({
      async start(controller) {
        const decoder = new TextDecoder("utf-8");
        const reader = resp.body!.getReader();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });

          // Gemini stream gửi JSON lines → tách từng dòng theo newline
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";

          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              const data = JSON.parse(line);
              const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
              if (text) controller.enqueue(text);
            } catch {
              // bỏ qua dòng lỗi
            }
          }
        }

        // phần cuối
        if (buffer.trim()) {
          try {
            const data = JSON.parse(buffer);
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) controller.enqueue(text);
          } catch {}
        }

        controller.close();
      },
    });

    // 🚀 Trả về streaming response
    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err: any) {
    console.error("Chat route error:", err);
    return new Response(`Error: ${err.message}`, { status: 500 });
  }
}

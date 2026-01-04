// app/api/tts/route.ts
// TTS đã được chuyển hoàn toàn sang Web Speech API (client-side).
// Route này KHÔNG còn gọi Google Cloud TTS nữa, chỉ trả JSON thông tin/config.

export const runtime = "nodejs";

type TtsBody = {
  text?: string;
  lang?: string;       // "en-US", "en-GB", "vi-VN" ...
  rate?: number;       // 0.1..10 (Web Speech: default = 1)
  pitch?: number;      // 0..2   (Web Speech: default = 1)
  voiceName?: string;  // tên voice cụ thể nếu bạn muốn chọn
};

function j(status: number, payload: any) {
  return new Response(JSON.stringify(payload, null, 2), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// GET /api/tts
// Dùng để kiểm tra nhanh trạng thái, không synth audio.
export async function GET(_req: Request) {
  return j(200, {
    ok: true,
    mode: "web-tts",
    note:
      "TTS hiện chạy bằng Web Speech API (speechSynthesis) trên trình duyệt, không dùng Google Cloud nữa.",
    hint: {
      usage:
        "Gọi window.speechSynthesis trên client để phát text. Endpoint này chỉ còn dùng cho debug/log nếu bạn cần.",
      clientExample:
        "await speak('Hello!', { lang: 'en-US', rate: 1, pitch: 1 });",
    },
  });
}

// POST /api/tts
// Trước đây trả về audio/mp3 từ Google TTS.
// Giờ chỉ echo lại config để bạn log hoặc xử lý thêm server-side nếu muốn.
// TTS thực sự phải được thực hiện ở client.
export async function POST(req: Request) {
  let body: TtsBody;
  try {
    body = (await req.json()) as TtsBody;
  } catch {
    return j(400, { error: "Invalid JSON body" });
  }

  const text = (body.text || "").trim();
  if (!text) return j(400, { error: 'Missing "text"' });

  const lang = body.lang || "en-US";
  const rate = typeof body.rate === "number" ? body.rate : 1.0;
  const pitch = typeof body.pitch === "number" ? body.pitch : 1.0;
  const voiceName = body.voiceName || null;

  // Đây chỉ là payload mô tả, không synth âm thanh.
  return j(200, {
    ok: true,
    mode: "web-tts",
    text,
    lang,
    rate,
    pitch,
    voiceName,
    hint:
      "Âm thanh không được tạo ở server nữa. Hãy dùng window.speechSynthesis trên client để phát giọng nói.",
  });
}

export const runtime = 'nodejs';

type TtsBody = { text: string };

export async function POST(req: Request) {
  const { TextToSpeechClient } = await import('@google-cloud/text-to-speech');

  const client = new TextToSpeechClient({
    credentials: {
      project_id: process.env.GCP_PROJECT_ID,
      client_email: process.env.GCP_CLIENT_EMAIL,
      private_key: process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
  });

  try {
    const { text } = (await req.json()) as TtsBody;
    if (!text?.trim()) {
      return new Response(JSON.stringify({ error: 'Missing text' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const [resp] = await client.synthesizeSpeech({
      input: { text: text.trim() },
      voice: { languageCode: 'en-US', name: 'en-US-Wavenet-D' },
      audioConfig: { audioEncoding: 'MP3', speakingRate: 1.0 },
    });

    // 1) Chuẩn hoá dữ liệu âm thanh về Uint8Array
    // resp.audioContent có thể là string base64 hoặc Uint8Array
    const raw = resp.audioContent as Uint8Array | string;
    const u8: Uint8Array =
      typeof raw === 'string'
        ? Uint8Array.from(Buffer.from(raw, 'base64')) // chỉ dùng Buffer để decode base64
        : raw;

    // 2) Tạo ArrayBuffer "thật" (tránh SharedArrayBuffer)
    const ab = u8.buffer.slice(u8.byteOffset, u8.byteOffset + u8.byteLength) as ArrayBuffer;

    // 3) Trả về body là ArrayBuffer (BodyInit hợp lệ, không còn lỗi type)
    return new Response(ab, {
      headers: { 'Content-Type': 'audio/mpeg' },
    });
  } catch (err: any) {
    console.error('TTS Error:', err);
    return new Response(JSON.stringify({ error: err?.message || 'TTS failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

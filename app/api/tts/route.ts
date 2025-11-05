// app/api/tts/route.ts
export const runtime = 'nodejs';

type TtsBody = {
  text?: string;
  voice?: string;          // ví dụ: 'en-US-Wavenet-D'
  languageCode?: string;   // ví dụ: 'en-US'
  rate?: number;           // speakingRate 0.25..4.0
  pitch?: number;          // -20..20
};

function jsonError(status: number, message: string, extra?: any) {
  return new Response(JSON.stringify({ error: message, ...extra }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req: Request) {
  // 1) Kiểm tra ENV trước khi khởi tạo client (tránh 500 mù)
  const project_id = process.env.GCP_PROJECT_ID;
  const client_email = process.env.GCP_CLIENT_EMAIL;
  const raw_key = process.env.GCP_PRIVATE_KEY;

  if (!project_id || !client_email || !raw_key) {
    return jsonError(500, 'Missing GCP credentials', {
      GCP_PROJECT_ID: !!project_id,
      GCP_CLIENT_EMAIL: !!client_email,
      GCP_PRIVATE_KEY: !!raw_key,
    });
  }

  // 2) Parse body
  let body: TtsBody;
  try {
    body = (await req.json()) as TtsBody;
  } catch {
    return jsonError(400, 'Invalid JSON body');
  }
  const text = (body.text || '').trim();
  if (!text) return jsonError(400, 'Missing "text"');

  // 3) Import và tạo client (Node runtime)
  const { TextToSpeechClient } = await import('@google-cloud/text-to-speech');
  const client = new TextToSpeechClient({
    credentials: {
      project_id,
      client_email,
      private_key: raw_key.replace(/\\n/g, '\n'),
    },
  });

  // 4) Tham số TTS
  const languageCode = body.languageCode || 'en-US';
  const voiceName = body.voice || 'en-US-Wavenet-D';
  const speakingRate = typeof body.rate === 'number' ? body.rate : 1.0;
  const pitch = typeof body.pitch === 'number' ? body.pitch : 0;

  try {
    const [resp] = await client.synthesizeSpeech({
      input: { text },
      voice: { languageCode, name: voiceName },
      audioConfig: { audioEncoding: 'MP3', speakingRate, pitch },
    });

    // Chuẩn hoá về ArrayBuffer
    const raw = resp.audioContent as Uint8Array | string;
    const u8 =
      typeof raw === 'string'
        ? Uint8Array.from(Buffer.from(raw, 'base64'))
        : raw;
    const ab = u8.buffer.slice(u8.byteOffset, u8.byteOffset + u8.byteLength) as ArrayBuffer;

    return new Response(ab, { headers: { 'Content-Type': 'audio/mpeg' } });
  } catch (err: any) {
    // Trả lỗi chi tiết để bạn nhìn thấy ngay trong Network → Response
    console.error('TTS Error:', err);
    return jsonError(500, err?.message || 'TTS failed', {
      code: err?.code,
      statusDetails: err?.statusDetails,
      details: err?.details,
    });
  }
}

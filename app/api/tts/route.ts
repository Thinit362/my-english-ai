// app/api/tts/route.ts
export const runtime = "nodejs";

type TtsBody = {
  text?: string;
  voice?: string;          // "en-US-Wavenet-D" ...
  languageCode?: string;   // "en-US", "vi-VN" ...
  rate?: number;           // 0.25..4.0
  pitch?: number;          // -20..20
};

function j(status: number, payload: any) {
  return new Response(JSON.stringify(payload, null, 2), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// ✅ GET /api/tts -> chẩn đoán nhanh
export async function GET() {
  return j(200, {
    ok: true,
    env: {
      GCP_PROJECT_ID: !!process.env.GCP_PROJECT_ID,
      GCP_CLIENT_EMAIL: !!process.env.GCP_CLIENT_EMAIL,
      GCP_PRIVATE_KEY: !!process.env.GCP_PRIVATE_KEY,
    },
    hint:
      "If any env is false, set it in Vercel Settings > Environment Variables and redeploy.",
  });
}

export async function POST(req: Request) {
  const project_id = process.env.GCP_PROJECT_ID;
  const client_email = process.env.GCP_CLIENT_EMAIL;
  const raw_key = process.env.GCP_PRIVATE_KEY;

  if (!project_id || !client_email || !raw_key) {
    return j(500, {
      error: "Missing GCP credentials",
      GCP_PROJECT_ID: !!project_id,
      GCP_CLIENT_EMAIL: !!client_email,
      GCP_PRIVATE_KEY: !!raw_key,
    });
  }

  let body: TtsBody;
  try {
    body = (await req.json()) as TtsBody;
  } catch {
    return j(400, { error: "Invalid JSON body" });
  }

  const text = (body.text || "").trim();
  if (!text) return j(400, { error: 'Missing "text"' });

  // Tham số TTS
  const languageCode = body.languageCode || "en-US";
  const name = body.voice || "en-US-Wavenet-D";
  const speakingRate = typeof body.rate === "number" ? body.rate : 1.0;
  const pitch = typeof body.pitch === "number" ? body.pitch : 0;

  try {
    const { TextToSpeechClient } = await import("@google-cloud/text-to-speech");
    const client = new TextToSpeechClient({
      credentials: {
        project_id,
        client_email,
        private_key: raw_key.replace(/\\n/g, "\n"),
      },
    });

    const [resp] = await client.synthesizeSpeech({
      input: { text },
      voice: { languageCode, name },
      audioConfig: { audioEncoding: "MP3", speakingRate, pitch },
    });

    const raw = resp.audioContent as Uint8Array | string;
    const u8 =
      typeof raw === "string"
        ? Uint8Array.from(Buffer.from(raw, "base64"))
        : raw;
    const ab = u8.buffer.slice(u8.byteOffset, u8.byteOffset + u8.byteLength) as ArrayBuffer;

    return new Response(ab, { headers: { "Content-Type": "audio/mpeg" } });
  } catch (err: any) {
    console.error("TTS Error:", err);
    // Trả về lỗi chi tiết cho tab Network > Response
    return j(500, {
      error: err?.message || "TTS failed",
      code: err?.code,
      statusDetails: err?.statusDetails,
      details: err?.details,
      hint:
        "Common causes: API not enabled, wrong service account, invalid PRIVATE_KEY newlines, billing/quota.",
    });
  }
}

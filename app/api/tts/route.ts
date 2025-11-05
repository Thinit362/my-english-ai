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

async function makeClient() {
  const project_id = process.env.GCP_PROJECT_ID;
  const client_email = process.env.GCP_CLIENT_EMAIL;
  const raw_key = process.env.GCP_PRIVATE_KEY;

  if (!project_id || !client_email || !raw_key) {
    throw Object.assign(new Error("Missing GCP credentials"), {
      meta: {
        GCP_PROJECT_ID: !!project_id,
        GCP_CLIENT_EMAIL: !!client_email,
        GCP_PRIVATE_KEY: !!raw_key,
      },
    });
  }
  const { TextToSpeechClient } = await import("@google-cloud/text-to-speech");
  return new TextToSpeechClient({
    credentials: {
      project_id,
      client_email,
      private_key: raw_key.replace(/\\n/g, "\n"),
    },
  });
}

// GET /api/tts or /api/tts?selftest=1
export async function GET(req: Request) {
  const url = new URL(req.url);
  const selftest = url.searchParams.get("selftest");

  if (!selftest) {
    return j(200, {
      ok: true,
      env: {
        GCP_PROJECT_ID: !!process.env.GCP_PROJECT_ID,
        GCP_CLIENT_EMAIL: !!process.env.GCP_CLIENT_EMAIL,
        GCP_PRIVATE_KEY: !!process.env.GCP_PRIVATE_KEY,
      },
      hint:
        "Add ?selftest=1 to run a real synthesize check and see detailed errors if any.",
    });
  }

  try {
    const client = await makeClient();
    const [resp] = await client.synthesizeSpeech({
      input: { text: "ping" },
      voice: { languageCode: "en-US", name: "en-US-Wavenet-D" },
      audioConfig: { audioEncoding: "MP3", speakingRate: 1.0, pitch: 0 },
    });
    const ok = !!resp.audioContent;
    return j(ok ? 200 : 500, {
      selftest: true,
      ok,
      note: ok
        ? "TTS synthesize succeeded. POST /api/tts should work."
        : "TTS synthesize returned empty audioContent.",
    });
  } catch (err: any) {
    console.error("TTS Selftest Error:", err);
    return j(500, {
      selftest: true,
      error: err?.message || "Selftest failed",
      code: err?.code,
      statusDetails: err?.statusDetails,
      details: err?.details,
      hint:
        "If code=PERMISSION_DENIED -> enable API / fix IAM. If INVALID_ARGUMENT -> wrong voice/language. If UNAUTHENTICATED/invalid_grant -> bad key format. If RESOURCE_EXHAUSTED -> quota/billing.",
    });
  }
}

export async function POST(req: Request) {
  let body: TtsBody;
  try {
    body = (await req.json()) as TtsBody;
  } catch {
    return j(400, { error: "Invalid JSON body" });
  }
  const text = (body.text || "").trim();
  if (!text) return j(400, { error: 'Missing "text"' });

  try {
    const client = await makeClient();

    const languageCode = body.languageCode || "en-US";
    const name = body.voice || "en-US-Wavenet-D";
    const speakingRate = typeof body.rate === "number" ? body.rate : 1.0;
    const pitch = typeof body.pitch === "number" ? body.pitch : 0;

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
    return j(500, {
      error: err?.message || "TTS failed",
      code: err?.code,
      statusDetails: err?.statusDetails,
      details: err?.details,
      hint:
        "Common causes: Text-to-Speech API not enabled, service account lacks permission, PRIVATE_KEY newline format, wrong project, or quota/billing.",
    });
  }
}

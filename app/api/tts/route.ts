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

    const [response] = await client.synthesizeSpeech({
      input: { text: text.trim() },
      voice: { languageCode: 'en-US', name: 'en-US-Wavenet-D' },
      audioConfig: { audioEncoding: 'MP3', speakingRate: 1.0 },
    });

    return new Response(response.audioContent as Buffer, {
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

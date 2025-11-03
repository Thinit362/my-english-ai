export const runtime = 'nodejs';

export async function POST(req: Request) {
  const { SpeechClient } = await import('@google-cloud/speech');
  const client = new SpeechClient({
    credentials: {
      project_id: process.env.GCP_PROJECT_ID,
      client_email: process.env.GCP_CLIENT_EMAIL,
      private_key: process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
  });

  try {
    const formData = await req.formData();
    const file = formData.get('audio') as File | null;
    const lang = (formData.get('lang') as string) || 'en-US';

    if (!file) {
      return new Response(JSON.stringify({ error: 'Missing audio' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const buf = Buffer.from(await file.arrayBuffer());

    const [resp] = await client.recognize({
      audio: { content: buf.toString('base64') },
      config: {
        encoding: 'WEBM_OPUS',
        sampleRateHertz: 48000,
        languageCode: lang,
        enableWordTimeOffsets: true,
        enableWordConfidence: true,
      },
    });

    const alt = resp.results?.[0]?.alternatives?.[0];
    const transcript = alt?.transcript ?? '';
    const confidence = alt?.confidence ?? 0;

    return new Response(
      JSON.stringify({ transcript, confidence }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    console.error('STT Error:', err);
    return new Response(JSON.stringify({ error: err?.message || 'STT failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

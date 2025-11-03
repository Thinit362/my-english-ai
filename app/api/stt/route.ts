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
    const form = await req.formData();
    const file = form.get('audio') as File | null;
    const lang = (form.get('lang') as string) || 'en-US';
    const expected = (form.get('expected') as string) || '';
    const hints = ((form.get('hints') as string) || '')
      .split('|')
      .map(s => s.trim())
      .filter(Boolean); // ví dụ: "Trung|heroes|hospital"

    if (!file) {
      return new Response(JSON.stringify({ error: 'Missing audio' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const buf = Buffer.from(await file.arrayBuffer());

    const [resp] = await client.recognize({
      audio: { content: buf.toString('base64') },
      config: {
        // Khớp MediaRecorder
        encoding: 'WEBM_OPUS',
        sampleRateHertz: 48000,

        // Ngôn ngữ chính + các accent dự phòng
        languageCode: lang,
        alternativeLanguageCodes: ['en-GB', 'en-AU', 'en-US'],

        // Bật dấu câu & confidence theo từ
        enableAutomaticPunctuation: true,
        enableWordTimeOffsets: true,
        enableWordConfidence: true,

        // Cho phép trả nhiều phương án để bạn tự chấm
        maxAlternatives: 3,

        // Model gợi ý (tốt cho tiếng nói tự nhiên)
        useEnhanced: true,          // dùng model enhanced nếu có
        model: 'video',             // 'video' ổn cho mic/đàm thoại; có thể thử 'default' hoặc 'phone_call'

        // Gợi ý từ khoá (tên riêng/thuật ngữ) → kéo xác suất đúng lên
        speechContexts: hints.length ? [{ phrases: hints, boost: 15 }] : undefined,
      },
    });

    const result = resp.results?.[0];
    const alt0 = result?.alternatives?.[0];

    const payload = {
      transcript: alt0?.transcript ?? '',
      confidence: alt0?.confidence ?? 0,
      alternatives: result?.alternatives?.map(a => ({ transcript: a?.transcript ?? '', confidence: a?.confidence ?? 0 })) ?? [],
      words: alt0?.words?.map(w => ({
        word: w.word ?? '',
        start: Number(w.startTime?.seconds ?? 0) + (w.startTime?.nanos ?? 0) / 1e9,
        end:   Number(w.endTime?.seconds ?? 0)   + (w.endTime?.nanos ?? 0) / 1e9,
        confidence: w.confidence ?? undefined,
      })) ?? []
    };

    return new Response(JSON.stringify(payload), { headers: { 'Content-Type': 'application/json' } });
  } catch (e: any) {
    console.error('STT Error:', e);
    return new Response(JSON.stringify({ error: e?.message || 'STT failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

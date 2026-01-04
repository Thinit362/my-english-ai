// app/api/stt/route.ts
// STT đã được chuyển sang Web Speech API (client-side).
// Route này KHÔNG còn gọi Google Cloud Speech nữa.
// Client dùng window.SpeechRecognition / webkitSpeechRecognition để nhận diện giọng nói
// (chọn lang 'en-US' hoặc accent tiếng Anh phù hợp để có chất lượng tự nhiên nhất)
// và gửi transcript (text) lên đây nếu cần server xử lý / chấm điểm.

export const runtime = 'nodejs';

type WordInfo = {
  word: string;
  start?: number;      // giây (optional, nếu client có tracking thời gian)
  end?: number;        // giây
  confidence?: number; // optional
};

type Alternative = {
  transcript: string;
  confidence?: number;
};

type STTBody = {
  transcript?: string;          // kết quả STT cuối cùng từ client
  lang?: string;                // 'en-US', 'en-GB'..., để log/ghi nhận
  alternatives?: Alternative[]; // nếu client có nhiều phương án
  words?: WordInfo[];           // nếu client có tách theo từ
  expected?: string;            // câu/đoạn mong đợi để chấm điểm
};

/** Chuẩn hoá string để so sánh "expected" với "transcript" */
function normalizeText(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '') // bỏ dấu nếu có
    .replace(/[^a-z0-9\s']/g, ' ')   // bỏ ký tự lạ, giữ chữ số/chữ/cách
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Tính điểm tương đồng rất đơn giản giữa expected & actual:
 * - dựa trên số lượng từ expected xuất hiện trong actual
 * - trả về số trong khoảng 0..1
 */
function simpleWordOverlapScore(expected: string, actual: string): number {
  const e = normalizeText(expected);
  const a = normalizeText(actual);
  if (!e || !a) return 0;

  const eTokens = e.split(' ');
  const aTokens = a.split(' ');
  const aSet = new Set(aTokens);

  let match = 0;
  for (const t of eTokens) {
    if (aSet.has(t)) match++;
  }

  return eTokens.length ? match / eTokens.length : 0;
}

function j(status: number, payload: any) {
  return new Response(JSON.stringify(payload, null, 2), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

// (Tuỳ chọn) Có thể bổ sung GET nếu muốn test nhanh, nhưng ở đây giữ giống file gốc: chỉ export POST.

export async function POST(req: Request) {
  let body: STTBody;
  try {
    body = (await req.json()) as STTBody;
  } catch {
    return j(400, { error: 'Invalid JSON body. Expecting STT result from client.' });
  }

  const transcript = (body.transcript || '').trim();
  if (!transcript) {
    return j(400, { error: 'Missing "transcript" from client STT.' });
  }

  const lang = body.lang || 'en-US'; // gợi ý: dùng en-US trên client để bắt tiếng Anh tự nhiên nhất
  const alternatives = body.alternatives && body.alternatives.length
    ? body.alternatives
    : [{ transcript, confidence: 1 }];

  const words = body.words || [];
  const expected = (body.expected || '').trim();

  // Nếu có expected thì chấm điểm sơ bộ
  let score: number | undefined;
  if (expected) {
    score = simpleWordOverlapScore(expected, transcript);
  }

  const payload = {
    transcript,
    lang,
    confidence: alternatives[0]?.confidence ?? 1,
    alternatives,
    words,
    expected: expected || undefined,
    score, // 0..1 nếu có expected
    hint:
      'STT được thực hiện ở client bằng Web Speech API. Hãy chắc chắn client đang dùng SpeechRecognition với lang="en-US" hoặc accent tiếng Anh phù hợp.',
  };

  return j(200, payload);
}

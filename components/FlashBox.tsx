'use client';

import { useRef, useState } from 'react';

type Lang = 'vi' | 'en';

type FlashBoxProps = {
  grade: 10 | 11 | 12;
  lang: Lang;
  title: string;
  endpoint?: string;
  model?: string;
  aiStyle?: {
    concise?: boolean;           // ép ngắn gọn
    maxWords?: number;           // giới hạn số từ
    pronunciationTips?: boolean; // mẹo phát âm (cho panel VI)
  };
  tts?: {
    enabled?: boolean;           // CHỈ dùng cho EN
    allowStop?: boolean;
    forceVietnameseVoice?: boolean;
    viVoiceHint?: string;
    enVoiceHint?: string;
    voice?: string;              // ví dụ 'en-US-Wavenet-F'
    rate?: number;
    pitch?: number;
  };
};

export default function FlashBox({
  grade,
  lang,
  title,
  endpoint = '/api/chat',
  model = 'gemini-2.5-flash',
  aiStyle,
  tts,
}: FlashBoxProps) {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [busy, setBusy] = useState(false);
  const [listening, setListening] = useState(false);

  // ====== STATE cho GCP TTS (EN only) ======
  const queueRef = useRef<string[]>([]);
  const playingRef = useRef(false);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const stopTokenRef = useRef(0);

  const langName = lang === 'vi' ? 'tiếng Việt' : 'English';

  // ------- Guard-rail prompt cho VI & EN (ép ngắn gọn) -------
  function buildPrompt(userText: string) {
    const concise = !!aiStyle?.concise;
    const max = aiStyle?.maxWords ?? (lang === 'vi' ? 80 : 120); // EN cho phép dài hơn chút
    const isEN = lang === 'en';

    if (!concise) return userText;

    if (lang === 'vi') {
      const wantPron = !!aiStyle?.pronunciationTips;
      const viGuard = [
        `Hãy trả lời bằng TIẾNG VIỆT, RẤT NGẮN GỌN (<= ${max} từ), ưu tiên gạch đầu dòng.`,
        `Tập trung vào học Tiếng Anh THPT hiệu quả (từ vựng/ngữ pháp/nghe-nói/đọc-viết).`,
        wantPron ? `Thêm 1–2 mẹo phát âm: ghi IPA /.../ và đánh dấu trọng âm (ví dụ: pho'to /ˈfəʊ.təʊ/).` : ``,
        `Không dùng tiêu đề lớn hay đoạn văn dài.`,
      ].filter(Boolean).join('\n');
      return `${viGuard}\n\nCâu hỏi của người dùng: ${userText}`;
    }

    // English: concise, bullets, anti-essay
    const enGuard = [
      `Reply in clear, concise ENGLISH (<= ${max} words).`,
      `Prefer SHORT bullet points; avoid long paragraphs and headings.`,
      `Focus on ACTIONABLE steps for a Vietnamese high-school learner.`,
      `If the question is broad (e.g., "how to learn English"), return EXACTLY 5 bullets, one sentence each.`,
      `No markdown headings like ###; simple bullets are fine.`,
    ].join('\n');
    return `${enGuard}\n\nUser question: ${userText}`;
  }

  async function callGemini(prompt: string) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, model }),
    });
    if (!res.ok) throw new Error(`API ${res.status}`);
    const data = await res.json();
    return data.output || data.answer || data.text || data.result || '';
  }

  // ------------------ Submit text ------------------
  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    const q = input.trim();
    if (!q || busy) return;
    setBusy(true);
    setResponse('');
    try {
      const sys =
        lang === 'vi'
          ? `Bạn là trợ lý học tập cho chương trình Tiếng Anh lớp ${grade}.`
          : `You are a helpful tutor for English Grade ${grade}.`;
      const prompt = buildPrompt(`${sys}\n\n${q}`);
      const text = await callGemini(prompt);
      setResponse(text || (lang === 'vi' ? 'Chưa có phản hồi.' : 'No response.'));
    } catch (err: any) {
      setResponse((lang === 'vi' ? 'Lỗi: ' : 'Error: ') + (err?.message || 'Unknown'));
    } finally {
      setBusy(false);
    }
  }

  // ------------------ Voice input (Web Speech for mic) ------------------
  async function handleVoice() {
    const SR: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      alert(lang === 'vi' ? 'Trình duyệt không hỗ trợ micro.' : 'Micro is not supported.');
      return;
    }
    const r = new SR();
    r.lang = lang === 'vi' ? (tts?.viVoiceHint || 'vi-VN') : (tts?.enVoiceHint || 'en-US');
    r.interimResults = false;
    r.maxAlternatives = 1;

    r.onresult = async (e: any) => {
      const transcript = e.results[0][0].transcript || '';
      setInput(transcript);
      setListening(false);
      try {
        setBusy(true);
        const sys =
          lang === 'vi'
            ? `Bạn là trợ lý học tập cho chương trình Tiếng Anh lớp ${grade}.`
            : `You are a helpful tutor for English Grade ${grade}.`;
        const built = buildPrompt(`${sys}\n\n${transcript}`);
        const text = await callGemini(built);
        setResponse(text);
        if (lang === 'en') speak(text); // KHÔNG speak cho VI
      } catch (err: any) {
        setResponse((lang === 'vi' ? 'Lỗi: ' : 'Error: ') + (err?.message || 'Unknown'));
      } finally {
        setBusy(false);
      }
    };

    r.onerror = () => setListening(false);
    r.onend = () => setListening(false);

    if (listening) {
      r.stop();
      setListening(false);
    } else {
      r.start();
      setListening(true);
    }
  }

  // ------------------ GCP TTS helpers (EN only) ------------------
  function sanitizeForSpeech(text: string) {
    let s = text;
    s = s.replace(/[*_~`>#-]{1,}/g, ' ').replace(/\s{2,}/g, ' ').trim(); // bỏ markdown
    s = s.replace(/\/[^\/]{1,40}\//g, ''); // bỏ IPA /.../
    s = s.replace(/\[[^\]]{1,40}\]/g, ''); // bỏ IPA [...]
    s = s.replace(/•/g, '• ').replace(/\s{2,}/g, ' ').trim();
    return s;
  }

  function splitSentences(text: string): string[] {
    return text.split(/(?<=[\.\!\?\…])\s+/).map(t => t.trim()).filter(Boolean);
  }

  function defaultVoice(): string {
    if (tts?.voice) return tts.voice;
    return 'en-US-Wavenet-F'; // mặc định EN (đổi D nếu muốn nam)
  }

  async function synthOnce(sentence: string) {
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: sentence,
        voice: defaultVoice(),
        rate: tts?.rate ?? 1.0,
        pitch: tts?.pitch ?? 1.0,
      }),
    });
    if (!res.ok) throw new Error(`TTS ${res.status}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    await new Promise<void>((resolve, reject) => {
      const audio = new Audio(url);
      currentAudioRef.current = audio;
      audio.onended = () => { URL.revokeObjectURL(url); resolve(); };
      audio.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Audio error')); };
      audio.play().catch(reject);
    });
  }

  function stopSpeak() {
    stopTokenRef.current++;
    queueRef.current = [];
    playingRef.current = false;
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.src = '';
      currentAudioRef.current = null;
    }
  }

  async function speak(text: string) {
    if (lang !== 'en' || !tts?.enabled || !text) return; // KHÔNG speak cho VI
    stopSpeak();

    const cleaned = sanitizeForSpeech(text);
    queueRef.current = splitSentences(cleaned);
    if (queueRef.current.length === 0) queueRef.current = [cleaned];

    const token = stopTokenRef.current;
    playingRef.current = true;

    while (playingRef.current && queueRef.current.length) {
      if (token !== stopTokenRef.current) break;
      const sentence = queueRef.current.shift()!;
      try { await synthOnce(sentence); }
      catch (e) { console.error('TTS play error:', e); }
    }
    playingRef.current = false;
  }

  function replay() {
    if (lang === 'en' && response) speak(response);
  }

  // ------------------ UI (thêm padding + prose-lite) ------------------
  return (
    <div className="flex flex-col h-full box">
      {/* Header */}
      <div className="box-header">
        <h3 className="font-semibold">{title}</h3>
        <div className="box-actions flex gap-2">
          {/* Chỉ EN mới có Replay/Stop */}
          {lang === 'en' && response && tts?.enabled && (
            <>
              <button
                onClick={replay}
                className="text-xs px-3 py-1.5 rounded-md border bg-white hover:bg-gray-50"
                title="Replay"
              >
                🔁 Replay
              </button>
              {tts?.allowStop && (
                <button
                  onClick={stopSpeak}
                  className="text-xs px-3 py-1.5 rounded-md border bg-white hover:bg-gray-50"
                  title="Stop speaking"
                >
                  ⏹️ Stop
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Nội dung phản hồi */}
      <div className="flex-1 overflow-y-auto box-body">
        {busy ? (
          <div className="text-sm opacity-70">
            {lang === 'vi' ? 'Đang xử lý…' : 'Processing…'}
          </div>
        ) : response ? (
          <div className="rounded-xl border border-gray-200 bg-white px-5 py-4">
            <div className="prose-lite whitespace-pre-wrap">{response}</div>
          </div>
        ) : (
          <p className="text-sm opacity-60">
            {lang === 'vi' ? `Hỏi trợ lý bằng ${langName}…` : `Ask in ${langName}…`}
          </p>
        )}
      </div>

      {/* Ô nhập */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={lang === 'vi' ? 'Nhập câu hỏi…' : 'Type your question…'}
            className="flex-1 rounded-xl border px-4 py-3 text-sm"
            disabled={busy}
          />

          {/* Ẩn nút Nói cho VI */}
          {lang !== 'vi' && (
            <button
              type="button"
              onClick={handleVoice}
              className={`rounded-xl px-3 py-3 border text-sm ${listening ? 'bg-red-50 border-red-200' : 'bg-gray-50 hover:bg-gray-100'}`}
              title="Tap to speak"
              disabled={busy}
            >
              {listening ? '🎙️ Listening' : '🎤 Speak'}
            </button>
          )}

          <button
            type="submit"
            className="rounded-xl bg-[var(--navy)] hover:opacity-90 text-white px-4 py-3 text-sm disabled:opacity-60"
            disabled={busy}
            title={lang === 'vi' ? 'Gửi' : 'Send'}
          >
            {lang === 'vi' ? 'Gửi' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}

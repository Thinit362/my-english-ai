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
    concise?: boolean;
    maxWords?: number;
    pronunciationTips?: boolean;
  };
  tts?: {
    enabled?: boolean;
    allowStop?: boolean;

    // hint cũ
    forceVietnameseVoice?: boolean;
    viVoiceHint?: string;
    enVoiceHint?: string;

    // hint chung cho Web TTS
    engine?: 'web-speech';
    useClientSpeech?: boolean;
    lang?: string;   // 'en-US', 'vi-VN'...
    voice?: string;  // tên voice nếu muốn
    rate?: number;   // Web Speech rate (0.1–10, mặc định 1)
    pitch?: number;  // Web Speech pitch (0–2 là chuẩn). Nếu bạn truyền [-20..20] thì mình map lại.
  };
};

/* ================= Web TTS helpers (speechSynthesis) ================= */

type WebTTSConfig = {
  lang?: string;
  rate?: number;
  pitch?: number;
  voiceHint?: string;
};

function pickBestVoice(
  voices: SpeechSynthesisVoice[],
  lang = 'en-US',
  voiceHint?: string,
) {
  let candidates = voices.filter(
    v =>
      v.lang === lang ||
      v.lang.toLowerCase().startsWith(lang.split('-')[0].toLowerCase() + '-'),
  );

  if (!candidates.length) {
    candidates = voices.filter(v => v.lang.toLowerCase().startsWith('en-'));
  }
  if (!candidates.length) return null;

  if (voiceHint) {
    const byName = candidates.find(
      v => v.name === voiceHint || v.name.includes(voiceHint),
    );
    if (byName) return byName;
  }

  const priority = candidates.find(v =>
    /natural|neural|premium/i.test(v.name),
  );
  return priority ?? candidates[0];
}

function speakWithWebTTS(
  text: string,
  cfg: WebTTSConfig,
  onStart?: () => void,
  onEnd?: () => void,
) {
  if (typeof window === 'undefined') return;
  if (!('speechSynthesis' in window)) {
    console.warn('speechSynthesis not supported');
    return;
  }

  const synth = window.speechSynthesis;
  const { lang = 'en-US', rate = 1, pitch = 1, voiceHint } = cfg;

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = rate;
  utter.pitch = pitch;

  const assignVoice = () => {
    const voices = synth.getVoices();
    if (!voices.length) return;
    const best = pickBestVoice(voices, lang, voiceHint);
    if (best) utter.voice = best;
  };

  assignVoice();

  utter.onstart = () => onStart?.();
  utter.onend = () => onEnd?.();
  utter.onerror = () => onEnd?.();

  if (!utter.voice && typeof synth.onvoiceschanged !== 'undefined') {
    const handler = () => {
      assignVoice();
      synth.speak(utter);
      synth.onvoiceschanged = null;
    };
    synth.onvoiceschanged = handler;
  } else {
    synth.speak(utter);
  }
}

function stopWebTTS() {
  if (typeof window === 'undefined') return;
  window.speechSynthesis?.cancel();
}

/* ================= Component ================= */

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
  const [speaking, setSpeaking] = useState(false);

  const langName = lang === 'vi' ? 'tiếng Việt' : 'English';

  /* ---------------- Guard-rail prompt ---------------- */
  function buildPrompt(userText: string) {
    const concise = !!aiStyle?.concise;
    const max = aiStyle?.maxWords ?? (lang === 'vi' ? 80 : 120);
    if (!concise) return userText;

    if (lang === 'vi') {
      const wantPron = !!aiStyle?.pronunciationTips;
      const viGuard = [
        `Hãy trả lời bằng TIẾNG VIỆT, RẤT NGẮN GỌN (<= ${max} từ), ưu tiên gạch đầu dòng.`,
        `Tập trung vào học Tiếng Anh THPT hiệu quả (từ vựng/ngữ pháp/nghe-nói/đọc-viết).`,
        wantPron ? `Thêm 1–2 mẹo phát âm: ghi IPA /.../ và đánh dấu trọng âm.` : ``,
        `Không dùng tiêu đề lớn hay đoạn văn dài.`,
      ]
        .filter(Boolean)
        .join('\n');
      return `${viGuard}\n\nCâu hỏi của người dùng: ${userText}`;
    }

    const enGuard = [
      `Reply in clear, concise ENGLISH (<= ${max} words).`,
      `Prefer SHORT bullet points; avoid long paragraphs and headings.`,
      `Focus on ACTIONABLE steps for a Vietnamese high-school learner.`,
      `If the question is broad, return EXACTLY 5 bullets, one sentence each.`,
      `No markdown headings.`,
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

  /* ---------------- Submit text ---------------- */
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

      // ✅ Với English panel, tự đọc bằng Web TTS
      if (lang === 'en' && tts?.enabled && text) {
        speak(text);
      }
    } catch (err: any) {
      setResponse(
        (lang === 'vi' ? 'Lỗi: ' : 'Error: ') + (err?.message || 'Unknown'),
      );
    } finally {
      setBusy(false);
    }
  }

  /* ---------------- Voice input (Web Speech STT) ---------------- */
  async function handleVoice() {
    const SR: any =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SR) {
      alert(
        lang === 'vi'
          ? 'Trình duyệt không hỗ trợ micro.'
          : 'Micro is not supported.',
      );
      return;
    }
    const r = new SR();
    r.lang =
      lang === 'vi'
        ? tts?.viVoiceHint || 'vi-VN'
        : tts?.enVoiceHint || 'en-US';
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
        if (lang === 'en' && tts?.enabled) speak(text); // đọc bằng Web TTS
      } catch (err: any) {
        setResponse(
          (lang === 'vi' ? 'Lỗi: ' : 'Error: ') + (err?.message || 'Unknown'),
        );
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

  /* ---------------- Helpers cho TTS Web ---------------- */

  function sanitizeForSpeech(text: string) {
    let s = text;
    s = s.replace(/[*_~`>#-]{1,}/g, ' ').replace(/\s{2,}/g, ' ').trim();
    s = s.replace(/\/[^\/]{1,40}\//g, ''); // remove IPA /.../
    s = s.replace(/\[[^\]]{1,40}\]/g, ''); // remove [ ... ]
    s = s.replace(/•/g, '• ').replace(/\s{2,}/g, ' ').trim();
    return s;
  }

  function speak(text: string) {
    if (!tts?.enabled || !text) return;
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.warn('Web Speech TTS not supported');
      return;
    }

    const cleaned = sanitizeForSpeech(text);

    // Ngôn ngữ ưu tiên:
    const speechLang =
      tts.lang ||
      (lang === 'vi'
        ? tts.viVoiceHint || 'vi-VN'
        : tts.enVoiceHint || 'en-US');

    const rate = typeof tts.rate === 'number' ? tts.rate : 1;

    // pitch: nếu trong [0,2] thì dùng trực tiếp; nếu ngoài phạm vi, coi như [-20..20] và map lại
    let pitch = typeof tts.pitch === 'number' ? tts.pitch : 1;
    if (pitch < 0 || pitch > 2) {
      const p = tts.pitch ?? 0;
      const mapped = 1 + p / 20; // -20 ->0, 0->1, 20->2
      pitch = Math.max(0, Math.min(2, mapped));
    }

    const voiceHint = tts.voice || (lang === 'vi' ? tts.viVoiceHint : tts.enVoiceHint);

    speakWithWebTTS(
      cleaned,
      {
        lang: speechLang,
        rate,
        pitch,
        voiceHint,
      },
      () => setSpeaking(true),
      () => setSpeaking(false),
    );
  }

  function stopSpeak() {
    stopWebTTS();
    setSpeaking(false);
  }

  function replay() {
    if (response && tts?.enabled) speak(response);
  }

  /* ---------------- UI ---------------- */
  return (
    <div className="flex flex-col h-full box">
      <div className="box-header">
        <h3 className="font-semibold">{title}</h3>
        <div className="box-actions flex gap-2">
          {/* Cho English (hoặc bạn có thể bỏ điều kiện lang === 'en' nếu muốn cả tiếng Việt đọc) */}
          {lang === 'en' && response && tts?.enabled && (
            <>
              <button
                onClick={replay}
                className="text-xs px-3 py-1.5 rounded-md border bg-white hover:bg-gray-50"
                title="Replay"
              >
                {speaking ? '🔁 Replay' : '🔁 Replay'}
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
            {lang === 'vi'
              ? `Hỏi trợ lý bằng ${langName}…`
              : `Ask in ${langName}…`}
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={lang === 'vi' ? 'Nhập câu hỏi…' : 'Type your question…'}
            className="flex-1 rounded-xl border px-4 py-3 text-sm"
            disabled={busy}
          />

          {lang !== 'vi' && (
            <button
              type="button"
              onClick={handleVoice}
              className={`rounded-xl px-3 py-3 border text-sm ${
                listening
                  ? 'bg-red-50 border-red-200'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
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

'use client';

import { useRef, useState, useEffect } from 'react';

type Lang = 'vi' | 'en';

type FlashBoxProps = {
  grade: 10 | 11 | 12;
  lang: Lang;
  title: string;
  endpoint?: string; // ví dụ: '/api/chat'
  model?: string;    // ví dụ: 'gemini-2.5-flash'
  aiStyle?: {
    concise?: boolean;           // ép ngắn gọn
    maxWords?: number;           // giới hạn số từ
    pronunciationTips?: boolean; // thêm mẹo phát âm (IPA + trọng âm)
  };
  tts?: {
    enabled?: boolean;                     // bật TTS
    allowStop?: boolean;                   // hiển thị nút Dừng
    // ❗ Mới: ép panel VI luôn dùng giọng Việt (không tự chuyển EN)
    forceVietnameseVoice?: boolean;        // default: true nếu lang='vi'
    // Gợi ý giọng:
    viVoiceHint?: string;                  // 'vi-VN'
    enVoiceHint?: string;                  // 'en-US'
    rate?: number;                         // tốc độ đọc
    pitch?: number;                        // cao độ
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

  const recognitionRef = useRef<any>(null);

  // ==== TTS STATE ====
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const queueRef = useRef<SpeechSynthesisUtterance[]>([]);
  const isSpeakingRef = useRef(false);

  const langName = lang === 'vi' ? 'tiếng Việt' : 'English';

  // ------------------ Helpers ------------------

  // Tạo prompt: với panel VI thì ép ngắn gọn + mẹo phát âm
  function buildPrompt(userText: string) {
    if (lang !== 'vi' || !aiStyle?.concise) return userText;

    const max = aiStyle.maxWords ?? 80;
    const wantPron = !!aiStyle.pronunciationTips;

    const viGuardRail = [
      `Hãy trả lời bằng TIẾNG VIỆT, rất ngắn gọn (<= ${max} từ), ưu tiên gạch đầu dòng.`,
      `Tập trung vào học Tiếng Anh THPT hiệu quả (từ vựng/ngữ pháp/nghe-nói/đọc-viết).`,
      wantPron ? `Thêm 1–2 mẹo phát âm: ghi IPA /.../ và đánh dấu trọng âm (ví dụ: pho'to /ˈfəʊ.təʊ/).` : ``,
      `Không lan man.`,
    ].filter(Boolean).join('\n');

    return `${viGuardRail}\n\nCâu hỏi của người dùng: ${userText}`;
  }

  async function callGemini(prompt: string) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Route /api/chat của bạn nhận { prompt, model }
      body: JSON.stringify({ prompt, model }),
    });
    if (!res.ok) throw new Error(`API ${res.status}`);
    const data = await res.json();
    // /api/chat trả { output }, fallback cho các route khác nếu bạn dùng chung
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

  // ------------------ Voice input (ASR) ------------------

  async function handleVoice() {
    const SR: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      alert(lang === 'vi' ? 'Trình duyệt không hỗ trợ micro.' : 'Micro is not supported.');
      return;
    }
    if (!recognitionRef.current) {
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
          speak(text); // auto speak khi nhận kết quả từ giọng nói
        } catch (err: any) {
          setResponse((lang === 'vi' ? 'Lỗi: ' : 'Error: ') + (err?.message || 'Unknown'));
        } finally {
          setBusy(false);
        }
      };

      r.onerror = () => setListening(false);
      r.onend = () => setListening(false);
      recognitionRef.current = r;
    }

    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.start();
      setListening(true);
    }
  }

  // ------------------ TTS IMPROVED (FORCE VIETNAMESE) ------------------

  // Load voices một lần (Chrome cần onvoiceschanged)
  useEffect(() => {
    if (!tts?.enabled) return;
    const synth = window.speechSynthesis;
    if (!synth) return;

    function loadVoices() {
      const v = synth.getVoices();
      if (v && v.length) {
        voicesRef.current = v;
      }
    }

    loadVoices();
    const handler = () => loadVoices();
    synth.onvoiceschanged = handler;

    // Warm up
    const timer = setTimeout(() => synth.getVoices(), 200);
    return () => {
      clearTimeout(timer);
      if (synth.onvoiceschanged === handler) synth.onvoiceschanged = null as any;
    };
  }, [tts?.enabled]);

  function sanitizeForSpeech(text: string) {
    let s = text;

    // Bỏ markdown cơ bản
    s = s.replace(/[*_~`>#-]{1,}/g, ' ').replace(/\s{2,}/g, ' ').trim();

    // Bỏ IPA giữa /.../ hoặc [...], ví dụ /ˈfəʊ.təʊ/
    s = s.replace(/\/[^\/]{1,40}\//g, '');
    s = s.replace(/\[[^\]]{1,40}\]/g, '');

    // Một số ký hiệu
    s = s.replace(/•/g, '• ').replace(/\s{2,}/g, ' ').trim();

    return s;
  }

  function splitSentences(text: string): string[] {
    // Tách câu theo dấu kết thúc, giữ đơn giản
    return text
      .split(/(?<=[\.\!\?\…])\s+/)
      .map((t) => t.trim())
      .filter(Boolean);
  }

  // ❗ Ưu tiên các voice Việt nữ chất lượng
  function pickVietnameseVoice(): SpeechSynthesisVoice | null {
    const voices = voicesRef.current || [];
    if (!voices.length) return null;

    const preferredByName = [
      // Microsoft Natural female Vietnamese (Edge/Windows thường có)
      'Microsoft HoaiMy Online (Natural) - Vietnamese (Vietnam)',
      'Microsoft An Online (Natural) - Vietnamese (Vietnam)',
      'Microsoft Vi Online (Natural) - Vietnamese (Vietnam)',
      // Google Vietnamese (thường là female)
      'Google Vietnamese',
    ];

    // 1) match theo tên ưa thích
    const byName = voices.find(v => preferredByName.some(n => v.name?.toLowerCase() === n.toLowerCase()));
    if (byName) return byName;

    // 2) match theo hint 'vi-VN'
    const hint = (tts?.viVoiceHint || 'vi-VN').toLowerCase();
    const byHint = voices.find(v => v.lang?.toLowerCase().startsWith(hint));
    if (byHint) return byHint;

    // 3) prefix 'vi'
    const byPrefix = voices.find(v => v.lang?.toLowerCase().startsWith('vi'));
    if (byPrefix) return byPrefix;

    // 4) fallback
    return voices[0] || null;
  }

  function enqueueSpeak(u: SpeechSynthesisUtterance) {
    queueRef.current.push(u);
    if (!isSpeakingRef.current) {
      playNext();
    }
  }

  function playNext() {
    const synth = window.speechSynthesis;
    if (!synth) return;

    const next = queueRef.current.shift();
    if (!next) {
      isSpeakingRef.current = false;
      return;
    }
    isSpeakingRef.current = true;

    next.onend = () => {
      // chèn khoảng nghỉ ngắn giữa câu
      setTimeout(() => playNext(), 120);
    };
    next.onerror = () => {
      setTimeout(() => playNext(), 120);
    };

    synth.speak(next);
  }

  function speak(text: string) {
    if (!tts?.enabled || !text) return;
    const synth = window.speechSynthesis;
    if (!synth) return;

    // dừng & xoá hàng đợi cũ
    synth.cancel();
    queueRef.current = [];
    isSpeakingRef.current = false;

    const cleaned = sanitizeForSpeech(text);
    const parts = splitSentences(cleaned);

    // ❗ Nếu panel VI và forceVietnameseVoice (default true) → luôn dùng vi-VN
    const forceVI = lang === 'vi' ? (tts?.forceVietnameseVoice ?? true) : false;
    const viVoice = forceVI ? pickVietnameseVoice() : null;

    for (const sentence of parts) {
      const u = new SpeechSynthesisUtterance(sentence);

      if (forceVI && viVoice) {
        u.voice = viVoice;
        u.lang = viVoice.lang || 'vi-VN';
        u.rate = tts?.rate ?? 0.92;   // chậm nhẹ cho tự nhiên
        u.pitch = tts?.pitch ?? 1.05; // hơi cao một chút, cảm giác nữ tính hơn
      } else {
        // Panel EN hoặc bạn muốn tự chọn giọng khác
        const voices = voicesRef.current;
        const en = voices.find(v => v.lang?.toLowerCase().startsWith((tts?.enVoiceHint || 'en-US').toLowerCase()))
               || voices.find(v => v.lang?.toLowerCase().startsWith('en'))
               || voices[0];
        if (en) u.voice = en;
        u.lang = u.voice?.lang || (lang === 'en' ? 'en-US' : 'vi-VN');
        u.rate = tts?.rate ?? (lang === 'en' ? 1.0 : 0.95);
        u.pitch = tts?.pitch ?? 1.0;
      }

      enqueueSpeak(u);
    }
  }

  function stopSpeak() {
    if (!tts?.enabled) return;
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    queueRef.current = [];
    isSpeakingRef.current = false;
  }

  function replay() {
    if (response) speak(response);
  }

  // ------------------ UI ------------------

  return (
    <div className="flex flex-col h-full rounded-2xl border border-gray-200 bg-white">
      {/* Header */}
      <div className="px-4 py-3 border-b flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex gap-2">
          {response && tts?.enabled && (
            <>
              <button
                onClick={replay}
                className="text-xs px-3 py-1.5 rounded-md border bg-white hover:bg-gray-50"
                title={lang === 'vi' ? 'Nghe lại' : 'Replay'}
              >
                🔁 {lang === 'vi' ? 'Nghe lại' : 'Replay'}
              </button>
              {tts?.allowStop && (
                <button
                  onClick={stopSpeak}
                  className="text-xs px-3 py-1.5 rounded-md border bg-white hover:bg-gray-50"
                  title={lang === 'vi' ? 'Dừng nói' : 'Stop speaking'}
                >
                  ⏹️ {lang === 'vi' ? 'Dừng' : 'Stop'}
                </button>
              )}
            </>
          )}
        </div>
      </div>

      {/* Nội dung phản hồi — padding thoáng, dễ đọc */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        {busy ? (
          <div className="text-sm opacity-70">
            {lang === 'vi' ? 'Đang xử lý…' : 'Processing…'}
          </div>
        ) : response ? (
          <p className="whitespace-pre-wrap text-sm leading-relaxed">{response}</p>
        ) : (
          <p className="text-sm opacity-60">
            {lang === 'vi' ? `Hỏi trợ lý bằng ${langName}…` : `Ask in ${langName}…`}
          </p>
        )}
      </div>

      {/* Ô nhập */}
      <form onSubmit={handleSubmit} className="p-3 border-t">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={lang === 'vi' ? 'Nhập câu hỏi…' : 'Type your question…'}
            className="flex-1 rounded-xl border px-4 py-2 text-sm"
            disabled={busy}
          />
          <button
            type="button"
            onClick={handleVoice}
            className={`rounded-xl px-3 py-2 border text-sm ${listening ? 'bg-red-50 border-red-200' : 'bg-gray-50 hover:bg-gray-100'}`}
            title={lang === 'vi' ? 'Nhấn để nói' : 'Tap to speak'}
            disabled={busy}
          >
            {listening ? '🎙️ Đang nghe' : '🎤 Nói'}
          </button>
          <button
            type="submit"
            className="rounded-xl bg-[var(--navy)] hover:opacity-90 text-white px-4 py-2 text-sm disabled:opacity-60"
            disabled={busy}
            title={lang === 'vi' ? 'Gửi' : 'Send'}
          >
            Gửi
          </button>
        </div>
      </form>
    </div>
  );
}

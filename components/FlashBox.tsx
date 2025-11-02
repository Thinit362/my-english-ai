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
    concise?: boolean;          // ép ngắn gọn
    maxWords?: number;          // giới hạn số từ
    pronunciationTips?: boolean;// thêm mẹo phát âm (IPA + trọng âm)
  };
  tts?: {
    enabled?: boolean;                    // bật TTS
    allowStop?: boolean;                  // hiển thị nút Dừng
    preferEnglishVoiceForExamples?: boolean; // panel VI: đoạn EN đọc bằng en-US
    viVoiceHint?: string;                 // gợi ý giọng Việt (vd: 'vi-VN')
    enVoiceHint?: string;                 // gợi ý giọng Anh (vd: 'en-US')
    rate?: number;                        // tốc độ đọc
    pitch?: number;                       // cao độ
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
  const ttsUtterRef = useRef<SpeechSynthesisUtterance | null>(null);

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

  // ------------------ TTS ------------------

  function speak(text: string) {
    if (!tts?.enabled || !text) return;
    const synth = window.speechSynthesis;
    if (!synth) return;

    // dừng bất kỳ phát nào đang chạy
    synth.cancel();

    const u = new SpeechSynthesisUtterance(text);

    // Chọn voice: với panel VI nếu text có tiếng Anh, ưu tiên en-US
    const hasLatin = /[A-Za-z]/.test(text);
    const wantsEN = (lang === 'vi' && tts?.preferEnglishVoiceForExamples && hasLatin) || lang === 'en';

    const voices = synth.getVoices();
    const hint = wantsEN ? (tts?.enVoiceHint || 'en-US') : (tts?.viVoiceHint || 'vi-VN');
    const pick =
      (hint && voices.find((v) => v.lang?.toLowerCase().startsWith(hint.toLowerCase()))) ||
      voices.find((v) => wantsEN ? v.lang?.startsWith('en') : v.lang?.startsWith('vi')) ||
      voices[0];

    if (pick) u.voice = pick;
    u.lang = pick?.lang || (wantsEN ? 'en-US' : 'vi-VN');
    u.rate = tts?.rate ?? 1.0;
    u.pitch = tts?.pitch ?? 1.0;

    ttsUtterRef.current = u;
    synth.speak(u);
  }

  function stopSpeak() {
    if (!tts?.enabled) return;
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    ttsUtterRef.current = null;
  }

  function replay() {
    if (response) speak(response);
  }

  // Một số trình duyệt cần load voices trước
  useEffect(() => {
    if (!tts?.enabled) return;
    const synth = window.speechSynthesis;
    if (!synth) return;
    // trigger load voices
    const timer = setTimeout(() => {
      synth.getVoices();
    }, 200);
    return () => clearTimeout(timer);
  }, [tts?.enabled]);

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

      {/* Nội dung phản hồi — thêm padding để không sát mép */}
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

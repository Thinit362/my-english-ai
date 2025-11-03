'use client';

import { useRef, useState } from 'react';

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
    enabled?: boolean;           // bật TTS
    allowStop?: boolean;         // hiển thị nút Dừng
    // Hints cũ (để tương thích), vẫn dùng nếu bạn chưa đặt voice cụ thể
    forceVietnameseVoice?: boolean;
    viVoiceHint?: string;        // 'vi-VN'
    enVoiceHint?: string;        // 'en-US'

    // --- MỚI: tham số điều khiển GCP TTS ---
    voice?: string;              // ví dụ 'en-US-Wavenet-D' | 'vi-VN-Wavenet-D'
    rate?: number;               // speakingRate (mặc định 1.0)
    pitch?: number;              // pitch semitones (mặc định 0.0)
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

  // ====== STATE cho GCP TTS (hàng đợi phát) ======
  const queueRef = useRef<string[]>([]);
  const playingRef = useRef(false);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const stopTokenRef = useRef(0);

  const langName = lang === 'vi' ? 'tiếng Việt' : 'English';

  // ------- Helpers: prompt ép ngắn gọn + mẹo phát âm (panel VI) -------
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
        speak(text); // phát bằng GCP TTS
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

  // ------------------ GCP TTS helpers ------------------
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

  // chọn voice mặc định nếu bạn chưa truyền tts.voice
  function defaultVoice(): string {
    if (tts?.voice) return tts.voice;
    if (lang === 'vi') return 'vi-VN-Wavenet-D';  // có thể đổi A/B/C/D
    return 'en-US-Wavenet-D';                     // đổi '...-F' nếu muốn nữ
  }

  async function synthOnce(sentence: string) {
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: sentence,
        voice: defaultVoice(),
        rate: tts?.rate ?? (lang === 'vi' ? 0.92 : 1.0),
        pitch: tts?.pitch ?? (lang === 'vi' ? 1.05 : 1.0),
      }),
    });
    if (!res.ok) throw new Error(`TTS ${res.status}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    // phát
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
    if (!tts?.enabled || !text) return;
    stopSpeak(); // clear cũ

    const cleaned = sanitizeForSpeech(text);
    queueRef.current = splitSentences(cleaned);
    if (queueRef.current.length === 0) queueRef.current = [cleaned];

    const token = stopTokenRef.current;
    playingRef.current = true;

    while (playingRef.current && queueRef.current.length) {
      // nếu đã bấm dừng giữa chừng
      if (token !== stopTokenRef.current) break;

      const sentence = queueRef.current.shift()!;
      try {
        await synthOnce(sentence);
      } catch (e) {
        console.error('TTS play error:', e);
      }
    }

    playingRef.current = false;
  }

  function replay() {
    if (response) speak(response);
  }

  // ------------------ UI ------------------
  return (
    <div className="flex flex-col h-full rounded-2xl border border-gray-200 bg-white">
      {/* Header */}
      <div className="px-5 py-3 border-b flex items-center justify-between">
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

      {/* Nội dung phản hồi */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        {busy ? (
          <div className="text-sm opacity-70">
            {lang === 'vi' ? 'Đang xử lý…' : 'Processing…'}
          </div>
        ) : response ? (
          <div className="rounded-xl border border-gray-200 bg-white px-4 py-3">
            <p className="whitespace-pre-wrap text-sm leading-relaxed">{response}</p>
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
          <button
            type="button"
            onClick={handleVoice}
            className={`rounded-xl px-3 py-3 border text-sm ${listening ? 'bg-red-50 border-red-200' : 'bg-gray-50 hover:bg-gray-100'}`}
            title={lang === 'vi' ? 'Nhấn để nói' : 'Tap to speak'}
            disabled={busy}
          >
            {listening ? '🎙️ Đang nghe' : '🎤 Nói'}
          </button>
          <button
            type="submit"
            className="rounded-xl bg-[var(--navy)] hover:opacity-90 text-white px-4 py-3 text-sm disabled:opacity-60"
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

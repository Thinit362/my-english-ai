// components/FlashChat.tsx
'use client';
import { useEffect, useRef, useState } from 'react';

type Role = 'user' | 'assistant';
type Msg = { role: Role; content: string };

export default function FlashChat({
  grade,
  lang,
  endpoint = '/api/chat',
  model, // tùy chọn: nếu backend của bạn cho phép nhận model, truyền 'gemini-2.5-flash'
  systemPrompt,
  title,
}: {
  grade: 10 | 11 | 12;
  lang: 'vi' | 'en';
  endpoint?: string;
  model?: string;
  systemPrompt?: string;
  title?: string;
}) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [listening, setListening] = useState(false);

  // TTS
  const speech = useRef<SpeechSynthesis | null>(null);
  useEffect(() => {
    speech.current = typeof window !== 'undefined' ? window.speechSynthesis : null;
  }, []);
  const speak = (text: string) => {
    if (!speech.current) return;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === 'vi' ? 'vi-VN' : 'en-US';
    speech.current.cancel();
    speech.current.speak(u);
  };

  // STT
  const startSTT = () => {
    const SR: any = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SR) return;
    const r = new SR();
    r.lang = lang === 'vi' ? 'vi-VN' : 'en-US';
    r.interimResults = false;
    r.maxAlternatives = 1;
    r.onresult = (e: any) => setInput(e.results[0][0].transcript);
    r.onend = () => setListening(false);
    setListening(true);
    r.start();
  };

  const send = async () => {
    const text = input.trim();
    if (!text || busy) return;
    const next = [...messages, { role: 'user' as const, content: text }];
    setMessages(next);
    setInput('');
    setBusy(true);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model, // nếu backend hỗ trợ, nó sẽ dùng; nếu không thì bỏ qua
          systemInstruction:
            systemPrompt ??
            `You are a helpful tutor for English grade ${grade}. Answer in ${
              lang === 'vi' ? 'Vietnamese' : 'English'
            }.`,
          messages: next,
        }),
      });
      const data = await res.json();
      const reply: string =
        data?.text ||
        data?.output ||
        data?.message ||
        (lang === 'vi' ? 'Xin lỗi, chưa có phản hồi.' : 'Sorry, no response.');
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
      speak(reply);
    } catch (e: any) {
      const msg = lang === 'vi' ? 'Có lỗi mạng, thử lại nhé.' : 'Network error, please retry.';
      setMessages((m) => [...m, { role: 'assistant', content: msg }]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex flex-col h-full rounded-2xl border border-gray-200">
      <div className="px-4 py-3 border-b flex items-center justify-between">
        <h3 className="font-semibold">{title ?? (lang === 'vi' ? 'Trợ lý (Tiếng Việt)' : 'Assistant (English)')}</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={startSTT}
            className={`text-sm px-3 py-1.5 rounded-md border ${
              listening ? 'bg-red-50 border-red-300' : 'bg-gray-50'
            }`}
            title={lang === 'vi' ? 'Nhấn để nói' : 'Click to speak'}
          >
            🎤 {listening ? (lang === 'vi' ? 'Đang nghe…' : 'Listening…') : (lang === 'vi' ? 'Nói' : 'Speak')}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-xl px-3 py-2 ${
              m.role === 'user' ? 'bg-blue-50 ml-auto' : 'bg-gray-50'
            }`}
          >
            <p className="whitespace-pre-wrap text-sm">{m.content}</p>
          </div>
        ))}
      </div>

      <div className="p-3 border-t">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder={lang === 'vi' ? 'Nhập câu hỏi…' : 'Type your question…'}
            className="flex-1 rounded-xl border px-3 py-2 text-sm"
            disabled={busy}
          />
          <button
            onClick={send}
            disabled={busy}
            className="rounded-xl bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 disabled:opacity-60"
          >
            {lang === 'vi' ? 'Gửi' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}

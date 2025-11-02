'use client';

import { useRef, useState } from 'react';
import { Mic, Send, Volume2 } from 'lucide-react';

type Lang = 'vi' | 'en';

export default function FlashBox({
  grade,
  lang,
  title,
  endpoint = '/api/chat',
  model = 'gemini-2.5-flash',
}: {
  grade: 10 | 11 | 12;
  lang: Lang;
  title: string;
  endpoint?: string;
  model?: string;
}) {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [busy, setBusy] = useState(false);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<any>(null);

  const langName = lang === 'vi' ? 'tiếng Việt' : 'English';
  const ttsLang = lang === 'vi' ? 'vi-VN' : 'en-US';

  async function callGemini(prompt: string) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Giữ schema đơn giản để hợp với route.ts hiện tại của bạn
      body: JSON.stringify({ prompt, model }),
    });
    if (!res.ok) throw new Error(`API ${res.status}`);
    const data = await res.json();
    return data.output || data.text || data.result || '';
  }

  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    const q = input.trim();
    if (!q || busy) return;
    setBusy(true);
    setResponse('');
    try {
      const sys =
        lang === 'vi'
          ? `Bạn là trợ lý học tập cho chương trình Tiếng Anh lớp ${grade}. Trả lời bằng tiếng Việt, ngắn gọn, có ví dụ.`
          : `You are a helpful tutor for English Grade ${grade}. Answer in English, concise, with examples.`;
      const text = await callGemini(`${sys}\n\nUser: ${q}`);
      setResponse(text || (lang === 'vi' ? 'Chưa có phản hồi.' : 'No response.'));
      // 👉 Gõ text thì chỉ hiển thị, KHÔNG phát tiếng
    } catch (err: any) {
      setResponse((lang === 'vi' ? 'Lỗi: ' : 'Error: ') + err.message);
    } finally {
      setBusy(false);
    }
  }

  function speak(t: string) {
    const synth = window.speechSynthesis;
    if (!synth || !t) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(t);
    u.lang = ttsLang;
    synth.speak(u);
  }

  function replay() {
    if (response) speak(response);
  }

  async function handleVoice() {
    const SR: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      alert(lang === 'vi' ? 'Trình duyệt không hỗ trợ micro.' : 'Micro is not supported.');
      return;
    }
    if (!recognitionRef.current) {
      const r = new SR();
      r.lang = ttsLang;
      r.interimResults = false;
      r.maxAlternatives = 1;
      r.onresult = async (e: any) => {
        const transcript = e.results[0][0].transcript || '';
        setInput(transcript);
        setListening(false);
        // 🎤 Voice → gọi Gemini rồi PHÁT ÂM + hiển thị text
        try {
          setBusy(true);
          const sys =
            lang === 'vi'
              ? `Bạn là trợ lý học tập cho chương trình Tiếng Anh lớp ${grade}. Trả lời bằng tiếng Việt, ngắn gọn, có ví dụ.`
              : `You are a helpful tutor for English Grade ${grade}. Answer in English, concise, with examples.`;
          const text = await callGemini(`${sys}\n\nUser (voice): ${transcript}`);
          setResponse(text);
          speak(text); // 🔊 phát tiếng
        } catch (err: any) {
          setResponse((lang === 'vi' ? 'Lỗi: ' : 'Error: ') + err.message);
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

  return (
    <div className="flex flex-col h-full rounded-2xl border border-gray-200 bg-white">
      <div className="px-4 py-3 border-b flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        {response && (
          <button
            onClick={replay}
            className="text-xs px-3 py-1.5 rounded-md border hover:bg-gray-50 flex items-center gap-1"
            title={lang === 'vi' ? 'Nghe lại' : 'Replay'}
          >
            <Volume2 size={16} /> {lang === 'vi' ? 'Nghe lại' : 'Replay'}
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {busy ? (
          <div className="text-sm opacity-70">{lang === 'vi' ? 'Đang xử lý…' : 'Processing…'}</div>
        ) : response ? (
          <p className="whitespace-pre-wrap text-sm">{response}</p>
        ) : (
          <p className="text-sm opacity-60">{lang === 'vi' ? `Hỏi trợ lý bằng ${langName}…` : `Ask in ${langName}…`}</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-3 border-t">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={lang === 'vi' ? 'Nhập câu hỏi…' : 'Type your question…'}
            className="flex-1 rounded-xl border px-3 py-2 text-sm"
            disabled={busy}
          />
          <button
            type="button"
            onClick={handleVoice}
            className={`rounded-xl px-3 py-2 border text-sm ${
              listening ? 'bg-red-50 border-red-200' : 'bg-gray-50 hover:bg-gray-100'
            }`}
            title={lang === 'vi' ? 'Nhấn để nói' : 'Tap to speak'}
            disabled={busy}
          >
            <Mic className={listening ? 'text-red-500' : 'text-gray-700'} size={18} />
          </button>
          <button
            type="submit"
            className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm disabled:opacity-60"
            disabled={busy}
            title={lang === 'vi' ? 'Gửi' : 'Send'}
          >
            <Send size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}

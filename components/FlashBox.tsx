'use client';

import { useRef, useState } from 'react';
import { Mic, Send, Volume2, Square } from 'lucide-react';

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
  const ttsUtterRef = useRef<SpeechSynthesisUtterance | null>(null);

  const langName = lang === 'vi' ? 'tiếng Việt' : 'English';
  const ttsLang = lang === 'vi' ? 'vi-VN' : 'en-US';

  // ------------------ GỌI API GEMINI ------------------
  async function callGemini(prompt: string) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, model }),
    });
    if (!res.ok) throw new Error(`API ${res.status}`);
    const data = await res.json();
    return data.output || data.text || data.result || data.answer || '';
  }

  // ------------------ GỬI VĂN BẢN ------------------
  async function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    const q = input.trim();
    if (!q || busy) return;
    setBusy(true);
    setResponse('');
    try {
      const sys =
        lang === 'vi'
          ? `Bạn là trợ lý học tập cho chương trình Tiếng Anh lớp ${grade}. 
             Trả lời NGẮN GỌN (dưới 80 từ) bằng tiếng Việt, có ví dụ nhỏ nếu cần, 
             và thêm 1-2 mẹo phát âm (IPA + trọng âm) cho từ/cụm quan trọng.`
          : `You are a helpful tutor for English Grade ${grade}. 
             Answer concisely in English with small examples if helpful.`;

      const text = await callGemini(`${sys}\n\nUser: ${q}`);
      setResponse(text || (lang === 'vi' ? 'Chưa có phản hồi.' : 'No response.'));
    } catch (err: any) {
      setResponse((lang === 'vi' ? 'Lỗi: ' : 'Error: ') + err.message);
    } finally {
      setBusy(false);
    }
  }

  // ------------------ TTS ------------------
  function speak(t: string) {
    const synth = window.speechSynthesis;
    if (!synth || !t) return;

    // dừng phát cũ
    synth.cancel();
    const utter = new SpeechSynthesisUtterance(t);

    // tự phát hiện text tiếng Anh trong phần tiếng Việt để chọn giọng chuẩn
    const isEnglishText = /[A-Za-z]/.test(t);
    utter.lang = isEnglishText ? 'en-US' : ttsLang;
    utter.rate = 1.0;
    utter.pitch = 1.0;

    // lưu để dừng sau này
    ttsUtterRef.current = utter;
    synth.speak(utter);
  }

  function stopSpeak() {
    const synth = window.speechSynthesis;
    if (!synth) return;
    synth.cancel();
    ttsUtterRef.current = null;
  }

  function replay() {
    if (response) speak(response);
  }

  // ------------------ GIỌNG NÓI ------------------
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
        try {
          setBusy(true);
          const sys =
            lang === 'vi'
              ? `Bạn là trợ lý học tập cho chương trình Tiếng Anh lớp ${grade}. 
                 Trả lời NGẮN GỌN (dưới 80 từ) bằng tiếng Việt, 
                 và thêm mẹo phát âm (IPA + trọng âm) cho từ chính.`
              : `You are a helpful tutor for English Grade ${grade}. 
                 Answer concisely in English with small examples.`;
          const text = await callGemini(`${sys}\n\nUser (voice): ${transcript}`);
          setResponse(text);
          speak(text);
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

  // ------------------ GIAO DIỆN ------------------
  return (
    <div className="flex flex-col h-full rounded-2xl border border-gray-200 bg-white">
      {/* Header */}
      <div className="px-4 py-3 border-b flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex gap-2">
          {response && (
            <>
              <button
                onClick={replay}
                className="text-xs px-3 py-1.5 rounded-md border hover:bg-gray-50 flex items-center gap-1"
                title={lang === 'vi' ? 'Nghe lại' : 'Replay'}
              >
                <Volume2 size={16} /> {lang === 'vi' ? 'Nghe lại' : 'Replay'}
              </button>
              <button
                onClick={stopSpeak}
                className="text-xs px-3 py-1.5 rounded-md border hover:bg-gray-50 flex items-center gap-1"
                title={lang === 'vi' ? 'Dừng nói' : 'Stop speaking'}
              >
                <Square size={14} /> {lang === 'vi' ? 'Dừng' : 'Stop'}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Nội dung phản hồi */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        {busy ? (
          <div className="text-sm opacity-70">{lang === 'vi' ? 'Đang xử lý…' : 'Processing…'}</div>
        ) : response ? (
          <p className="whitespace-pre-wrap text-sm leading-relaxed">{response}</p>
        ) : (
          <p className="text-sm opacity-60">{lang === 'vi' ? `Hỏi trợ lý bằng ${langName}…` : `Ask in ${langName}…`}</p>
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

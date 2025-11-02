'use client';
import { useState, useRef } from 'react';
import { Mic, Send, Volume2 } from 'lucide-react';

export default function DualLessonAssistant({ grade }: { grade: number }) {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  // ❌ (fix) không dùng kiểu SpeechRecognition để tránh lỗi TS khi build
  const recognitionRef = useRef<any>(null);

  // gọi Gemini (text → text)
  const callGeminiText = async (prompt: string): Promise<string> => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        model: 'gemini-2.5-flash',
        stream: false,
      }),
    });
    const data = await res.json();
    return data.output || data.text || data.result || '';
  };

  // gọi Gemini (text → voice)
  const callGeminiAudio = async (prompt: string) => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          model: 'gemini-2.5-flash',
          audio: true,
        }),
      });
      const data = await res.json();
      const text = data.output || data.text || 'Không có phản hồi từ Gemini.';
      setResponse(text);

      // TTS
      const synth = window.speechSynthesis;
      if (synth) {
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US'; // đổi 'vi-VN' nếu muốn trả lời bằng tiếng Việt
        synth.cancel();
        synth.speak(u);
      }
    } catch {
      setResponse('⚠️ Lỗi khi phát âm thanh.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;
    setIsLoading(true);
    setResponse('');
    try {
      const text = await callGeminiText(`Tư vấn học tiếng Anh ${grade}: ${input}`);
      setResponse(text);
    } catch (err: any) {
      setResponse('⚠️ Lỗi kết nối Gemini: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVoice = () => {
    // lấy constructor từ window để an toàn khi build
    const SR: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      alert('Trình duyệt không hỗ trợ nhận diện giọng nói.');
      return;
    }

    if (!recognitionRef.current) {
      const r = new SR();
      r.lang = 'vi-VN';
      r.interimResults = false;
      r.maxAlternatives = 1;

      r.onresult = async (e: any) => {
        const transcript = e.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
        await callGeminiAudio(`Tư vấn học tiếng Anh ${grade}: ${transcript}`);
      };
      r.onerror = () => setIsListening(false);
      r.onend = () => setIsListening(false);

      recognitionRef.current = r;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const replayVoice = () => {
    if (!response) return;
    const synth = window.speechSynthesis;
    if (!synth) return;
    const u = new SpeechSynthesisUtterance(response);
    u.lang = 'en-US';
    synth.cancel();
    synth.speak(u);
  };

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        🤖 Trợ lý học tập tiếng Anh {grade}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập câu hỏi hoặc nhấn micro để nói..."
          className="flex-1 focus:outline-none bg-transparent"
        />
        <button
          type="button"
          onClick={handleVoice}
          className={`p-2 rounded-full ${isListening ? 'bg-red-100' : 'hover:bg-gray-100'}`}
          title="Nhấn để nói"
        >
          <Mic className={isListening ? 'text-red-500' : 'text-gray-500'} />
        </button>
        <button
          type="submit"
          className="p-2 rounded-full hover:bg-blue-100"
          title="Gửi"
          disabled={isLoading}
        >
          <Send className="text-blue-500" />
        </button>
      </form>

      <div className="mt-6 bg-sky-50 border border-sky-200 rounded-2xl p-4 min-h-[120px] whitespace-pre-line relative">
        {isLoading ? '⏳ Đang xử lý câu hỏi của bạn...' : response || '💬 Chưa có phản hồi.'}
        {response && (
          <button
            onClick={replayVoice}
            className="absolute bottom-3 right-3 p-2 rounded-full bg-white shadow hover:bg-gray-100"
            title="Nghe lại phản hồi"
          >
            <Volume2 className="text-blue-600" size={20} />
          </button>
        )}
      </div>
    </section>
  );
}

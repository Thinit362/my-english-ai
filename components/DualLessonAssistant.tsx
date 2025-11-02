'use client';
import { useState, useRef } from 'react';
import { Mic, Send, Volume2 } from 'lucide-react';

export default function DualLessonAssistant({ grade }: { grade: number }) {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Gọi Gemini API (text -> text)
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

  // Gọi Gemini API (text -> speech)
  const callGeminiAudio = async (prompt: string) => {
    try {
      setIsLoading(true);
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          model: 'gemini-2.5-flash',
          audio: true, // bật chế độ trả về âm thanh
        }),
      });
      const data = await res.json();
      const text = data.output || data.text || 'Không có phản hồi từ Gemini.';
      setResponse(text);

      // Text-to-Speech
      const synth = window.speechSynthesis;
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'en-US'; // có thể thay bằng 'vi-VN' nếu muốn phản hồi tiếng Việt
      synth.speak(utter);
    } catch (err) {
      setResponse('⚠️ Lỗi khi phát âm thanh.');
    } finally {
      setIsLoading(false);
    }
  };

  // Khi người dùng gửi văn bản
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

  // Khi người dùng nói (Voice input)
  const handleVoice = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Trình duyệt không hỗ trợ nhận diện giọng nói.');
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = 'vi-VN';
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = async (e: any) => {
        const transcript = e.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
        await callGeminiAudio(`Tư vấn học tiếng Anh ${grade}: ${transcript}`);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // Cho phép người dùng bấm để nghe lại phản hồi
  const replayVoice = () => {
    if (!response) return;
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(response);
    utter.lang = 'en-US';
    synth.speak(utter);
  };

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 border-t border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        🤖 Trợ lý học tập tiếng Anh {grade}
      </h2>

      {/* Khu nhập */}
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

      {/* Khu phản hồi */}
      <div className="mt-6 bg-sky-50 border border-sky-200 rounded-2xl p-4 min-h-[120px] whitespace-pre-line relative">
        {isLoading
          ? '⏳ Đang xử lý câu hỏi của bạn...'
          : response || '💬 Chưa có phản hồi.'}

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

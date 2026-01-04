'use client';

import FlashBox from './FlashBox'; // giữ nguyên

type Grade = 10 | 11 | 12;

interface DualLessonAssistantProps {
  grade: Grade;
  endpoint?: string;
  model?: string;
  heading?: string;
  subnote?: string;
}

// Padding 2px cho chữ trong hộp trò chuyện & phản hồi
const CHAT_TEXT_PADDING_PX = 2;

/**
 * Thiết lập TTS cho trình duyệt (Web Speech API).
 * Không còn dùng Google Cloud TTS nữa.
 *
 * Gợi ý cho FlashBox:
 * - engine: 'web-speech'  → dùng window.speechSynthesis
 * - useClientSpeech: true → TTS chạy hoàn toàn trên client
 */
const baseTtsWeb = {
  enabled: true,
  allowStop: true,
  engine: 'web-speech',      // <-- đánh dấu dùng Web Speech API
  useClientSpeech: true,     // <-- TTS chạy trên client
  // Các gợi ý xử lý text trước khi đọc:
  normalize: {
    stripEmoji: true,
    collapseWhitespace: true,
    punctuationPauses: true,
  },
};

const aiStyleTTS = {
  concise: true,
  maxWords: 80,
  pronunciationTips: true,
  sentenceBreaks: true,
};

export default function DualLessonAssistant(props: DualLessonAssistantProps) {
  const {
    grade,
    endpoint = '/api/chat',
    model = 'gemini-2.5-flash',
    heading = 'Trợ lý học tập',
    subnote = '* Nhấn 🎤 để nói (STT dùng Web Speech API). Trợ lý sẽ trả lời bằng giọng nói (TTS trên trình duyệt) + hiển thị chữ.',
  } = props;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">{heading}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Panel Tiếng Việt — dùng Web Speech API với lang vi-VN (nếu trình duyệt hỗ trợ) */}
        <div className="flashbox rounded-xl border border-gray-200 p-2">
          <FlashBox
            grade={grade}
            lang="vi"
            title="Trợ lý (Tiếng Việt)"
            endpoint={endpoint}
            model={model}
            aiStyle={aiStyleTTS}
            tts={{
              ...baseTtsWeb,
              /**
               * Các field dưới đây là "hint" cho Web TTS:
               * - lang: mã ngôn ngữ mong muốn
               * - voice: tên/nhóm voice (tuỳ FlashBox map sang speechSynthesis)
               * - rate, pitch: tương ứng rate/pitch của SpeechSynthesisUtterance
               */
              lang: 'vi-VN',
              voice: 'vi-VN',   // gợi ý chung cho tiếng Việt
              rate: 1.0,
              pitch: 1.0,

              // Hints cũ nếu FlashBox vẫn check:
              forceVietnameseVoice: true,
              viVoiceHint: 'vi-VN',
            } as any}
          />
        </div>

        {/* Panel English — Web TTS với tiếng Anh tự nhiên nhất có thể (en-US) */}
        <div className="flashbox rounded-xl border border-gray-200 p-2">
          <FlashBox
            grade={grade}
            lang="en"
            title="Assistant (English)"
            endpoint={endpoint}
            model={model}
            aiStyle={aiStyleTTS}
            tts={{
              ...baseTtsWeb,
              /**
               * Mặc định dùng en-US để bắt tiếng Anh "tự nhiên" phổ biến.
               * Ở phía FlashBox, bạn có thể chọn voice có tên chứa "Natural/Neural"
               * từ speechSynthesis.getVoices() nếu có.
               */
              lang: 'en-US',
              voice: 'en-US',         // hint chung cho tiếng Anh Mỹ
              rate: 1.0,
              pitch: 1.0,

              // Hints cũ (fallback) nếu FlashBox đang check:
              enVoiceHint: 'en-US',
              preferNativeEnglishVoice: true,
            } as any}
          />
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-3">{subnote}</p>

      {/* 
        Scoped style: thêm padding 2px cho text trong chat UIs.
      */}
      <style jsx>{`
        :global(.flashbox) .message,
        :global(.flashbox) .assistant,
        :global(.flashbox) .user,
        :global(.flashbox) .bubble,
        :global(.flashbox) .content,
        :global(.flashbox) .ai,
        :global(.flashbox) .gemini,
        :global(.flashbox) .text {
          padding: ${CHAT_TEXT_PADDING_PX}px;
        }
      `}</style>
    </section>
  );
}

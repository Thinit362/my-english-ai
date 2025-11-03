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

// Padding 2px cho chữ trong hộp trò chuyện & phản hồi Gemini
const CHAT_TEXT_PADDING_PX = 2;

// Thiết lập tối ưu cho Cloud TTS (GCP)
const baseTtsCloud = {
  enabled: true,
  allowStop: true,
  // Cloud TTS
  ssml: true,
  sampleRateHertz: 24000,
  audioEncoding: 'MP3',
  effectsProfileId: ['headphone-class-device', 'handset-class-device'],
  // Tránh nuốt âm đầu/cuối
  leadingSilenceMs: 60,
  trailingSilenceMs: 120,
  // Gợi ý xử lý text trước TTS (tuỳ FlashBox có dùng không)
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
    subnote = '* Nhập văn bản để nhận phản hồi bằng chữ. Nhấn 🎤 để nói và trợ lý sẽ trả lời bằng giọng nói + hiển thị chữ.',
  } = props;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">{heading}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Panel Tiếng Việt — ép giọng GCP vi-VN */}
        <div className="flashbox rounded-xl border border-gray-200 p-2">
          <FlashBox
            grade={grade}
            lang="vi"
            title="Trợ lý (Tiếng Việt)"
            endpoint={endpoint}
            model={model}
            aiStyle={aiStyleTTS}
            tts={{
              ...baseTtsCloud,
              // === GCP TTS options ===
              voice: 'vi-VN-Wavenet-D', // có thể đổi A/B/C/D
              rate: 0.92,               // speakingRate
              pitch: 1.05,              // pitch
              // -----------------------
              // Hints cũ (fallback nếu FlashBox đang check):
              forceVietnameseVoice: true,
              viVoiceHint: 'vi-VN',
            } as any}
          />
        </div>

        {/* Panel English — ép giọng GCP en-US */}
        <div className="flashbox rounded-xl border border-gray-200 p-2">
          <FlashBox
            grade={grade}
            lang="en"
            title="Assistant (English)"
            endpoint={endpoint}
            model={model}
            aiStyle={aiStyleTTS}
            tts={{
              ...baseTtsCloud,
              // === GCP TTS options ===
              voice: 'en-US-Wavenet-D', // hoặc 'en-US-Wavenet-F' (giọng nữ)
              rate: 1.0,
              pitch: 1.0,
              // -----------------------
              // Hint cũ (fallback nếu FlashBox đang check):
              enVoiceHint: 'en-US',
            } as any}
          />
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-3">{subnote}</p>

      {/* 
        Scoped style: thêm padding 2px cho text trong chat UIs.
        Bạn có thể xoá khối này khi FlashBox áp dụng padding nội bộ.
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

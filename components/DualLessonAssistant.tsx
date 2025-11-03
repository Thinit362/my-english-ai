'use client';

import FlashBox from './FlashBox'; // giữ nguyên

// Padding 2px cho chữ trong hộp trò chuyện & phản hồi Gemini
// \nLưu ý: Nếu FlashBox đã hỗ trợ prop chuyên biệt cho bubble/text, bạn có thể
// map trực tiếp ở phía trong FlashBox. Ở đây mình truyền "uiHints" an toàn,
// để không phá vỡ type của FlashBox (ép any) và vẫn cho phép tiêu thụ tuỳ chọn.
const CHAT_TEXT_PADDING_PX = 2;
const uiHints = {
  textPaddingPx: CHAT_TEXT_PADDING_PX, // gợi ý chung cho padding chữ trong chat
  bubblePaddingPx: CHAT_TEXT_PADDING_PX, // nếu FlashBox hỗ trợ bubble-level padding
  aiResponsePaddingPx: CHAT_TEXT_PADDING_PX, // padding riêng cho phản hồi Gemini/AI
} as any;

// Thiết lập tối ưu cho Cloud TTS (GCP):
// - dùng giọng Wavenet, sampleRate phù hợp, SSML bật sẵn
// - thêm effectsProfileId để cải thiện chất lượng trên tai nghe/điện thoại
// - rate/pitch ở biên an toàn, có silence padding nhẹ để tránh cắt chữ đầu/cuối
const baseTtsCloud = {
  enabled: true,
  allowStop: true,
  // Tuỳ chọn Cloud TTS
  ssml: true,
  sampleRateHertz: 24000,
  audioEncoding: 'MP3',
  effectsProfileId: ['headphone-class-device', 'handset-class-device'],
  // Tránh hiện tượng nuốt âm đầu/cuối câu trên một số thiết bị
  leadingSilenceMs: 60,
  trailingSilenceMs: 120,
  // Gợi ý xử lý nội dung text trước khi TTS
  normalize: {
    stripEmoji: true,
    collapseWhitespace: true,
    punctuationPauses: true,
  },
} as const;

// AI style tối ưu cho TTS: ngắn gọn, ngắt câu rõ ràng
const aiStyleTTS = { concise: true, maxWords: 80, pronunciationTips: true, sentenceBreaks: true } as const;

type Grade = 10 | 11 | 12;

export default function DualLessonAssistant({
  grade,
  endpoint = '/api/chat',
  model = 'gemini-2.5-flash',
  heading = 'Trợ lý học tập',
  subnote = '* Nhập văn bản để nhận phản hồi bằng chữ. Nhấn để nói và trợ lý sẽ trả lời bằng giọng nói + hiển thị chữ.',
}: {
  grade: Grade;
  endpoint?: string;
  model?: string;
  heading?: string;
  subnote?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">{heading}</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Panel Tiếng Việt — ép giọng GCP vi-VN */}
        <div className="rounded-xl border border-gray-200 p-2">
          <FlashBox
            grade={grade}
            lang="vi"
            title="Trợ lý (Tiếng Việt)"
            endpoint={endpoint}
            model={model}
            aiStyle={aiStyleTTS}
            // Hints UI để FlashBox áp dụng padding 2px cho chữ trong chat & phản hồi Gemini
            uiHints={uiHints as any}
            tts={{
              ...baseTtsCloud,
              // === GCP TTS options ===
              voice: 'vi-VN-Wavenet-D', // có thể đổi A/B/C/D
              rate: 0.92, // speakingRate (0.8–1.2 an toàn)
              pitch: 1.05, // (-20.0–20.0 semitones), dùng biên nhẹ
              // -----------------------

              // Giữ key cũ làm HINT (fallback nếu FlashBox chưa sửa kịp):
              forceVietnameseVoice: true,
              viVoiceHint: 'vi-VN',
            } as any}
          />
        </div>

        {/* Panel English — ép giọng GCP en-US */}
        <div className="rounded-xl border border-gray-200 p-2">
          <FlashBox
            grade={grade}
            lang="en"
            title="Assistant (English)"
            endpoint={endpoint}
            model={model}
            aiStyle={aiStyleTTS}
            uiHints={uiHints as any}
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
        Scoped style fallback: nếu FlashBox KHÔNG tiêu thụ uiHints,
        các selector dưới sẽ thêm padding 2px cho text thường gặp trong chat UIs.
        Bạn có thể xoá khối này khi FlashBox áp dụng uiHints nội bộ.
      */}
      <style jsx>{`
        :global(.flashbox) .message, /* generic */
        :global(.flashbox) .assistant,
        :global(.flashbox) .user,
        :global(.flashbox) .bubble,
        :global(.flashbox) .content,
        :global(.flashbox) .ai,
        :global(.flashbox) .gemini,
        :global(.flashbox) .text { padding: ${CHAT_TEXT_PADDING_PX}px; }
      `}</style>
    </section>
  );
}

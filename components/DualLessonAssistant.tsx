'use client';

import FlashBox from './FlashBox'; // giữ nguyên

type Grade = 10 | 11 | 12;

export default function DualLessonAssistant({
  grade,
  endpoint = '/api/chat',
  model = 'gemini-2.5-flash',
  heading = 'Trợ lý học tập',
  subnote = '* Nhập văn bản để nhận phản hồi bằng chữ. Nhấn 🎤 để nói và trợ lý sẽ trả lời bằng giọng nói + hiển thị chữ.',
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
        <FlashBox
          grade={grade}
          lang="vi"
          title="Trợ lý (Tiếng Việt)"
          endpoint={endpoint}
          model={model}
          aiStyle={{ concise: true, maxWords: 80, pronunciationTips: true }}
          tts={{
            enabled: true,
            allowStop: true,

            // === GCP TTS options ===
            voice: 'vi-VN-Wavenet-D', // ← giọng Google Cloud (có thể đổi A/B/C/D)
            rate: 0.92,               // speakingRate
            pitch: 1.05,              // pitch (nếu bạn có dùng ở client)
            // -----------------------

            // Giữ key cũ làm HINT (nếu FlashBox chưa sửa kịp):
            forceVietnameseVoice: true,
            viVoiceHint: 'vi-VN',
          }}
        />

        {/* Panel English — ép giọng GCP en-US */}
        <FlashBox
          grade={grade}
          lang="en"
          title="Assistant (English)"
          endpoint={endpoint}
          model={model}
          tts={{
            enabled: true,
            allowStop: true,

            // === GCP TTS options ===
            voice: 'en-US-Wavenet-D', // đổi sang 'en-US-Wavenet-F' nếu bạn muốn giọng nữ
            rate: 1.0,
            pitch: 1.0,
            // -----------------------

            // Hint cũ (fallback nếu FlashBox đang check):
            enVoiceHint: 'en-US',
          }}
        />
      </div>

      <p className="text-xs text-gray-500 mt-3">{subnote}</p>
    </section>
  );
}

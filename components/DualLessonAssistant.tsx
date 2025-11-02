'use client';

import FlashBox from './FlashBox'; // ✅ đảm bảo file tên đúng y chang: FlashBox.tsx (chữ F & B viết hoa)

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
        {/* Panel Tiếng Việt: ngắn gọn + mẹo phát âm + ÉP GIỌNG VIỆT */}
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
            forceVietnameseVoice: true, // ✅ thay cho thuộc tính cũ
            viVoiceHint: 'vi-VN',
            rate: 0.92,
            pitch: 1.05,
          }}
        />

        {/* Panel English */}
        <FlashBox
          grade={grade}
          lang="en"
          title="Assistant (English)"
          endpoint={endpoint}
          model={model}
          tts={{
            enabled: true,
            allowStop: true,
            enVoiceHint: 'en-US',
            rate: 1.0,
            pitch: 1.0,
          }}
        />
      </div>

      <p className="text-xs text-gray-500 mt-3">{subnote}</p>
    </section>
  );
}

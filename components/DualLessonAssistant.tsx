// components/DualLessonAssistant.tsx
'use client';
import FlashChat from './FlashChat';

export default function DualLessonAssistant({
  grade,
  endpoint = '/api/chat',
  model, // ví dụ: 'gemini-2.5-flash' nếu backend của bạn nhận
}: {
  grade: 10 | 11 | 12;
  endpoint?: string;
  model?: string;
}) {
  const viSystem = `Bạn là trợ lý học tập cho chương trình Tiếng Anh lớp ${grade}.
Trả lời bằng tiếng Việt, ngắn gọn, có ví dụ, gợi ý luyện từ vựng/ngữ pháp/nghe-nói theo từng Unit/Review. Ưu tiên Gemini Flash 2.5.`;
  const enSystem = `You are a study tutor for English grade ${grade}.
Answer concisely in English with examples and practice for each Unit/Review. Prefer Gemini Flash 2.5 style answers.`;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Trợ lý học tập</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <FlashChat
          grade={grade}
          lang="vi"
          endpoint={endpoint}
          model={model}
          systemPrompt={viSystem}
          title="Trợ lý (Tiếng Việt)"
        />
        <FlashChat
          grade={grade}
          lang="en"
          endpoint={endpoint}
          model={model}
          systemPrompt={enSystem}
          title="Assistant (English)"
        />
      </div>
      <p className="text-xs text-gray-500 mt-3">* Dùng micro 🎤 để nói trực tiếp (Chrome hỗ trợ tốt).</p>
    </section>
  );
}

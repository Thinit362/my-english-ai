'use client';

import FlashBox from './FlashBox';

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

      {/* Lưới 2 cột: trái = VI, phải = EN */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Cột Tiếng Việt */}
        <FlashBox
          grade={grade}
          lang="vi"
          title="Trợ lý (Tiếng Việt)"
          endpoint={endpoint}
          model={model}
        />

        {/* Cột English */}
        <FlashBox
          grade={grade}
          lang="en"
          title="Assistant (English)"
          endpoint={endpoint}
          model={model}
        />
      </div>

      {/* Ghi chú nhỏ */}
      <p className="text-xs text-gray-500 mt-3">{subnote}</p>
    </section>
  );
}

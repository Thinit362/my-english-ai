// app/english-10/unit/[unit]/grammar-2/page.tsx

import { notFound } from "next/navigation";
import {
  EN10_GRAMMAR,
  findGrammarByUnit,
} from "@/content/english10.grammar";
import TTSPlay from "@/components/TTSPlay";

type Params = { unit: string };

// Chỉ generate những unit có grammar2
export function generateStaticParams() {
  return EN10_GRAMMAR
    .filter((g) => !!g.grammar2)
    .map((g) => ({ unit: String(g.unit) }));
}

// SEO title cho Grammar 2
export async function generateMetadata({ params }: { params: Params }) {
  const unitNumber = Number(params.unit);
  const g = findGrammarByUnit(unitNumber);

  if (!g || !g.grammar2) return {};
  return {
    title: `Unit ${unitNumber} - Grammar 2: ${g.grammar2.title}`,
  };
}

export default function Grammar2Page({ params }: { params: Params }) {
  const unitNumber = Number(params.unit);

  if (Number.isNaN(unitNumber)) notFound();

  const grammarUnit = findGrammarByUnit(unitNumber);
  if (!grammarUnit || !grammarUnit.grammar2) notFound();

  const block = grammarUnit.grammar2;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Tiêu đề Unit */}
      <h1 className="text-3xl font-bold mb-2 text-slate-900">
        Unit {unitNumber} – Grammar 2
      </h1>

      {/* Tiêu đề bài ngữ pháp */}
      <h2 className="text-2xl font-semibold text-orange-600">
        {block.title}
      </h2>

      {/* Thẻ bài ngữ pháp: gồm giải thích + ví dụ + TTS */}
      <div className="rounded-2xl border border-orange-200 bg-white shadow-sm p-4 md:p-6 space-y-4">
        {/* Giải thích (tiếng Việt) – dạng HTML có style giống Grammar 1 */}
        <div
          className="text-sm leading-relaxed space-y-3"
          dangerouslySetInnerHTML={{ __html: block.viExplain }}
        />

        {/* Đường kẻ nhẹ ngăn giữa giải thích & ví dụ */}
        {block.examples.length > 0 && (
          <div className="border-t border-dashed border-orange-200 pt-3" />
        )}

        {/* Các câu ví dụ + nút Play TTS nằm NGAY TRONG thẻ bài */}
        <div className="space-y-2">
          {block.examples.map((ex, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-3 rounded-lg bg-orange-50/60 border border-orange-100 px-3 py-2"
            >
              <div className="flex-1">
                <p className="font-medium text-blue-700 text-[0.95rem]">
                  {ex.en}
                </p>
                {ex.vi && (
                  <p className="text-gray-600 italic text-xs mt-1">
                    {ex.vi}
                  </p>
                )}
              </div>

              {/* Nút play TTS ngay cạnh câu tiếng Anh */}
              <div className="shrink-0 mt-1">
                <TTSPlay text={ex.en} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

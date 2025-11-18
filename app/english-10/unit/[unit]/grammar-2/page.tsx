// app/english-10/unit/[unit]/grammar-2/page.tsx

import { notFound } from "next/navigation";
import {
  EN10_GRAMMAR,
  findGrammarByUnit,
} from "@/content/english10.grammar";
import TTSPlay from "@/components/TTSPlay";

type Params = {
  unit: string;
};

/**
 * Build sẵn các đường dẫn:
 * /english-10/unit/1/grammar-2 ... /english-10/unit/10/grammar-2
 * nhưng CHỈ cho những unit có grammar2.
 */
export function generateStaticParams() {
  return EN10_GRAMMAR
    .filter((g) => !!g.grammar2)
    .map((g) => ({ unit: String(g.unit) }));
}

/**
 * SEO title cho từng bài Grammar 2
 */
export async function generateMetadata({ params }: { params: Params }) {
  const unitNumber = Number(params.unit);
  const g = findGrammarByUnit(unitNumber);

  if (!g || !g.grammar2) return {};
  return {
    title: `Unit ${unitNumber} - Grammar 2: ${g.grammar2.title}`,
  };
}

/**
 * Trang hiển thị Grammar 2 cho từng Unit
 */
export default function Grammar2Page({ params }: { params: Params }) {
  const unitNumber = Number(params.unit);

  if (Number.isNaN(unitNumber)) {
    notFound();
  }

  const grammarUnit = findGrammarByUnit(unitNumber);

  if (!grammarUnit || !grammarUnit.grammar2) {
    notFound();
  }

  const block = grammarUnit!.grammar2!;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold mb-2">
        Unit {unitNumber} – Grammar 2
      </h1>

      {/* Tiêu đề ngữ pháp */}
      <h2 className="text-2xl font-semibold text-blue-600">
        {block.title}
      </h2>

      {/* Giải thích ngữ pháp (tiếng Việt) – giữ xuống dòng từ viExplain */}
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <p className="whitespace-pre-line text-sm leading-relaxed">
          {block.viExplain}
        </p>
      </div>

      {/* Danh sách ví dụ + nút Play TTS */}
      <section className="space-y-3">
        <h3 className="text-xl font-semibold">Ví dụ</h3>

        {block.examples.map((ex, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-3 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="font-medium">{ex.en}</p>
              {/* Nút tam giác phát âm dùng Cloud TTS qua TTSPlay */}
              <TTSPlay text={ex.en} />
            </div>
            {ex.vi && (
              <p className="text-gray-600 italic mt-1">{ex.vi}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

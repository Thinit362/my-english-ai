// app/english-10/unit/[unit]/grammar-1/page.tsx

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
 * /english-10/unit/1/grammar-1 ... /english-10/unit/10/grammar-1
 * chỉ cho những unit thật sự có grammar1.
 */
export function generateStaticParams() {
  return EN10_GRAMMAR
    .filter((g) => !!g.grammar1)
    .map((g) => ({ unit: String(g.unit) }));
}

/**
 * SEO title cho từng bài Grammar 1
 */
export async function generateMetadata({ params }: { params: Params }) {
  const unitNumber = Number(params.unit);
  const g = findGrammarByUnit(unitNumber);

  if (!g || !g.grammar1) return {};
  return {
    title: `Unit ${unitNumber} - Grammar 1: ${g.grammar1.title}`,
  };
}

/**
 * Trang hiển thị Grammar 1 cho từng Unit
 */
export default function Grammar1Page({ params }: { params: Params }) {
  const unitNumber = Number(params.unit);

  if (Number.isNaN(unitNumber)) {
    notFound();
  }

  const grammarUnit = findGrammarByUnit(unitNumber);

  if (!grammarUnit || !grammarUnit.grammar1) {
    notFound();
  }

  const block = grammarUnit!.grammar1;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold mb-2">
        Unit {unitNumber} – Grammar 1
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
        <div key={index} className="bg-white border rounded-lg p-3 shadow-sm">
       <div className="flex items-start justify-between gap-3">
        <p className="font-medium text-blue-700">{ex.en}</p>
        <TTSPlay text={ex.en} />
      </div>
      {ex.vi && <p className="text-gray-600 italic mt-1">{ex.vi}</p>}
      </div>
        ))}
      </section>
    </div>
  );
}

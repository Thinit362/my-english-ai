// components/GrammarLesson.tsx
"use client";

import { GrammarBlock } from "@/content/english10.grammar";
import TTSPlay from "@/components/TTSPlay";

type Props = {
  unit: number;
  block: GrammarBlock;
};

export default function GrammarLesson({ unit, block }: Props) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold mb-2">
        Unit {unit} – Grammar 1
      </h1>

      <h2 className="text-2xl font-semibold text-blue-600">
        {block.title}
      </h2>

      {/* Giải thích – giữ xuống dòng từ viExplain */}
      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <p className="whitespace-pre-line text-sm leading-relaxed">
          {block.viExplain}
        </p>
      </div>

      <section className="space-y-3">
        <h3 className="text-xl font-semibold">Ví dụ</h3>

        {block.examples.map((ex, idx) => (
          <div
            key={idx}
            className="bg-white border rounded-lg p-3 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="font-medium">{ex.en}</p>
              {/* Nút play dùng Cloud TTS qua TTSPlay */}
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

"use client";

import { useState } from "react";
import { getSpeakingByUnit } from "@/content/practice/speaking/loader";
import type {
  SpeakingLesson,
  SpeakingExercisePage,
  SpeakingQuestion,
  SpeakingTheoryBlock,
} from "@/content/practice/speaking/types";
import TTSPlay from "@/components/TTSPlay";

export default function SpeakingPracticePage({ unit }: { unit: number }) {
  const lesson = getSpeakingByUnit(unit) as SpeakingLesson | undefined;

  const [pageIndex, setPageIndex] = useState(0);
  const [showSamples, setShowSamples] = useState<Record<string, boolean>>({});
  const [expandedTheory, setExpandedTheory] = useState<Record<string, boolean>>(
    {}
  );

  if (!lesson) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        Chưa có dữ liệu luyện nói cho Unit này.
      </div>
    );
  }

  const page: SpeakingExercisePage = lesson.exercises[pageIndex];

  const toggleSample = (id: string) => {
    setShowSamples((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleTheory = (id: string) => {
    setExpandedTheory((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      {/* HEADER */}
      <section className="relative rounded-2xl overflow-hidden shadow-lg border border-emerald-300">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/speaking-bg.jpg')" }}
        />
        <div className="relative bg-white/80 backdrop-blur px-6 py-6 space-y-4">
          <div className="text-sm font-semibold text-gray-600">
            Luyện nói · <span className="text-emerald-700">{lesson.topicVi}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            {lesson.titleEn}
          </h1>

          {(lesson.descriptionEn || lesson.descriptionVi) && (
            <p className="text-sm text-center text-gray-700">
              {lesson.descriptionEn}
              {lesson.descriptionVi && (
                <>
                  <br />
                  <span className="italic text-gray-500">
                    {lesson.descriptionVi}
                  </span>
                </>
              )}
            </p>
          )}
        </div>
      </section>

      {/* THEORY */}
      {lesson.theory && (
        <section className="bg-white rounded-2xl shadow border p-6 space-y-4">
          <h2 className="text-lg font-semibold">Lý thuyết cần nhớ</h2>

          {lesson.theory.map((block: SpeakingTheoryBlock) => {
            const open = expandedTheory[block.id] ?? true;
            return (
              <div
                key={block.id}
                className="border rounded-xl bg-emerald-50/60"
              >
                <button
                  onClick={() => toggleTheory(block.id)}
                  className="w-full px-4 py-3 flex justify-between font-semibold"
                >
                  {block.title}
                  <span className="text-xs">{open ? "Ẩn" : "Hiện"}</span>
                </button>

                {open && (
                  <div className="px-4 pb-4 space-y-2 text-sm">
                    {block.contentEn && <p>{block.contentEn}</p>}
                    {block.contentVi && (
                      <p className="italic text-gray-600">
                        {block.contentVi}
                      </p>
                    )}
                    {block.items && (
                      <ul className="list-disc pl-5">
                        {block.items.map((i) => (
                          <li key={i.en}>
                            <b>{i.en}</b>
                            {i.vi && ` – ${i.vi}`}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      )}

      {/* PRACTICE */}
      <section className="bg-white rounded-2xl shadow border p-6 space-y-6">
        <h2 className="text-lg font-semibold">{page.title}</h2>
        <p className="text-sm text-gray-700">
          {page.instructionEn}
          {page.instructionVi && (
            <>
              <br />
              <i>{page.instructionVi}</i>
            </>
          )}
        </p>

        <div className="space-y-5">
          {page.questions.map((q: SpeakingQuestion, idx) => {
            const expected = q.sampleAnswerEn || q.promptEn;
            const open = showSamples[q.id];

            return (
              <div key={q.id} className="border rounded-lg p-4 bg-gray-50">
                <p className="font-medium">
                  {idx + 1}. {q.promptEn}
                </p>

                <TTSPlay
                  text={expected}
                  expectedText={expected}
                  enableRecord
                  compact
                />

                {q.promptVi && (
                  <p className="text-xs italic text-gray-600">{q.promptVi}</p>
                )}

                {q.structureHighlight && (
                  <p className="text-xs mt-1 bg-amber-100 inline-block px-3 py-1 rounded-full">
                    ✏ {q.structureHighlight}
                  </p>
                )}

                {(q.sampleAnswerEn || q.sampleAnswerVi) && (
                  <div className="mt-2">
                    <button
                      onClick={() => toggleSample(q.id)}
                      className="text-xs underline"
                    >
                      {open ? "Ẩn câu mẫu" : "Xem câu mẫu"}
                    </button>

                    {open && (
                      <div className="mt-2 text-sm bg-white border rounded p-2">
                        {q.sampleAnswerEn && <p>{q.sampleAnswerEn}</p>}
                        {q.sampleAnswerVi && (
                          <p className="italic text-gray-600">
                            {q.sampleAnswerVi}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-between pt-3 border-t">
          <button
            disabled={pageIndex === 0}
            onClick={() => setPageIndex((i) => i - 1)}
          >
            ⬅ Trang trước
          </button>
          <button
            disabled={pageIndex === lesson.exercises.length - 1}
            onClick={() => setPageIndex((i) => i + 1)}
          >
            Trang sau ➜
          </button>
        </div>
      </section>
    </div>
  );
}

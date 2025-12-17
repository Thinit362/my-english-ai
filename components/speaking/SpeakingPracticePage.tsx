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

  // Cho phép truyền vào youtubeId hoặc full URL
  const buildYoutubeEmbed = (youtube: string) => {
    const match =
      youtube.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/) || [];
    const id = match[1] || youtube;
    return `https://www.youtube.com/embed/${id}`;
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      {/* ========== HEADER / THÔNG TIN BÀI NÓI ========== */}
      <section className="relative rounded-2xl overflow-hidden shadow-lg border border-emerald-300">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/speaking-bg.jpg')",
          }}
        />
        <div className="relative bg-white/80 backdrop-blur px-6 py-6 space-y-4">
          <div className="text-sm font-semibold text-gray-600 mb-1">
            Luyện nói · Chủ đề:{" "}
            <span className="text-emerald-700">{lesson.topicVi}</span>
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

          <p className="text-xs md:text-sm text-center text-gray-600">
            Gợi ý: Bấm nút loa để nghe mẫu, sau đó bấm micro để ghi âm và xem điểm
            phần trăm.
          </p>
        </div>
      </section>

      {/* ========== PHẦN LÝ THUYẾT NÓI ========== */}
      {lesson.theory && lesson.theory.length > 0 && (
        <section className="bg-white rounded-2xl shadow border border-gray-200 p-6 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">
              1. Lý thuyết & cấu trúc nói cần nhớ
            </h2>
            <span className="text-xs text-gray-500">
              {lesson.theory.length} khối nội dung
            </span>
          </div>

          <div className="space-y-3">
            {lesson.theory.map((block: SpeakingTheoryBlock) => {
              const isOpen = expandedTheory[block.id] ?? true;
              return (
                <div
                  key={block.id}
                  className="border border-emerald-200 rounded-xl bg-emerald-50/60"
                >
                  <button
                    type="button"
                    onClick={() => toggleTheory(block.id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left"
                  >
                    <span className="font-semibold text-emerald-800">
                      {block.title}
                    </span>
                    <span className="text-xs text-emerald-700">
                      {isOpen ? "Ẩn" : "Hiện"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 space-y-2 text-sm text-gray-800">
                      {block.contentEn && <p>{block.contentEn}</p>}
                      {block.contentVi && (
                        <p className="italic text-gray-600">
                          {block.contentVi}
                        </p>
                      )}

                      {block.items && block.items.length > 0 && (
                        <ul className="list-disc pl-5 space-y-1">
                          {block.items.map((it) => (
                            <li key={it.en}>
                              <span className="font-medium">{it.en}</span>
                              {it.vi && (
                                <span className="text-gray-600"> – {it.vi}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ========== VIDEO YOUTUBE (NHÚNG TRƯỚC B. THỰC HÀNH) ========== */}
      {lesson.youtubeId && (
        <section className="bg-white rounded-2xl shadow border border-gray-200 p-6 space-y-4">
          <h2 className="text-lg font-semibold">Video tình huống</h2>

          <div className="aspect-video w-full rounded-xl overflow-hidden shadow border border-gray-200 bg-black">
            <iframe
              src={buildYoutubeEmbed(lesson.youtubeId)}
              title="YouTube video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      )}

      {/* ========== PHẦN THỰC HÀNH NÓI ========== */}
      <section className="bg-white rounded-2xl shadow border border-gray-200 p-6 space-y-6">
        {/* Tiêu đề & hướng dẫn trang hiện tại */}
        <div>
          <div className="flex items-center justify-between gap-3 mb-2">
            <h2 className="text-lg font-semibold">
              2. Luyện nói – {page.title}
            </h2>
            <span className="text-xs text-gray-500">
              Trang {pageIndex + 1} / {lesson.exercises.length}
            </span>
          </div>

          <p className="text-sm text-gray-800">
            {page.instructionEn}
            {page.instructionVi && (
              <>
                <br />
                <span className="italic text-gray-500">
                  {page.instructionVi}
                </span>
              </>
            )}
          </p>
        </div>

        {/* Danh sách câu hỏi luyện nói */}
        <div className="space-y-5">
          {page.questions.map((q: SpeakingQuestion, idx) => {
            const isOpen = !!showSamples[q.id];
            const expected = q.sampleAnswerEn || q.promptEn;

            return (
              <div
                key={q.id}
                className="rounded-lg border border-gray-200 p-3 bg-gray-50"
              >
                <div className="flex items-start gap-2">
                  <span className="mt-[2px] font-semibold text-gray-700">
                    {idx + 1}.
                  </span>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-gray-900">{q.promptEn}</p>

                      <TTSPlay
                        text={expected}
                        expectedText={expected}
                        voice={q.voice}
                        enableRecord
                        languageCode="en-US"
                        compact
                        ariaLabel="Nghe mẫu & luyện nói câu này"
                      />
                    </div>

                    {q.promptVi && (
                      <p className="text-xs text-gray-600 italic">
                        {q.promptVi}
                      </p>
                    )}

                    {q.structureHighlight && (
                      <p className="inline-block rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs text-amber-800 font-semibold">
                        ✏ Gợi ý cấu trúc: {q.structureHighlight}
                      </p>
                    )}

                    {(q.tipEn || q.tipVi) && (
                      <div className="mt-1 text-xs text-gray-700 bg-white rounded border border-dashed border-gray-300 px-3 py-2">
                        {q.tipEn && <p>{q.tipEn}</p>}
                        {q.tipVi && (
                          <p className="italic text-gray-500">{q.tipVi}</p>
                        )}
                      </div>
                    )}

                    {(q.sampleAnswerEn || q.sampleAnswerVi) && (
                      <div className="mt-2">
                        <button
                          type="button"
                          onClick={() => toggleSample(q.id)}
                          className="px-3 py-1 rounded border text-xs bg-white hover:bg-gray-50"
                        >
                          {isOpen ? "Ẩn câu mẫu" : "Xem gợi ý câu mẫu"}
                        </button>

                        {isOpen && (
                          <div className="mt-2 text-sm bg-white rounded border border-gray-200 px-3 py-2">
                            {q.sampleAnswerEn && (
                              <p className="text-gray-900">
                                <span className="font-semibold">Sample:</span>{" "}
                                {q.sampleAnswerEn}
                              </p>
                            )}
                            {q.sampleAnswerVi && (
                              <p className="text-xs italic text-gray-600 mt-1">
                                {q.sampleAnswerVi}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Điều khiển chuyển trang */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-gray-200">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPageIndex((i) => Math.max(0, i - 1))}
              disabled={pageIndex === 0}
              className="px-4 py-2 rounded border text-sm bg-gray-50 hover:bg-gray-100 disabled:opacity-40"
            >
              ⬅ Trang trước
            </button>
            <button
              type="button"
              onClick={() =>
                setPageIndex((i) =>
                  Math.min(lesson.exercises.length - 1, i + 1)
                )
              }
              disabled={pageIndex === lesson.exercises.length - 1}
              className="px-4 py-2 rounded border text-sm bg-gray-50 hover:bg-gray-100 disabled:opacity-40"
            >
              Trang sau ➜
            </button>
          </div>

          <p className="text-[11px] text-gray-500">
            Hãy luyện nói nhiều lần mỗi câu, rồi mở câu mẫu để so sánh cách diễn đạt.
          </p>
        </div>
      </section>
    </div>
  );
}

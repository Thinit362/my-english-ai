"use client";

import { useState } from "react";
import { getReadingByUnit } from "@/content/practice/reading/loader";
import type {
  ReadingLesson,
  ReadingExercisePage,
  ReadingQuestion,
} from "@/content/practice/reading/types";

/* ===========================================================
   Component chính: dùng cho tất cả Unit
   props: unit (1,2,3,...)
   =========================================================== */
export default function ReadingExamPage({ unit }: { unit: number }) {
  const lesson = getReadingByUnit(unit) as ReadingLesson | undefined;

  // trạng thái làm bài của bài luyện đọc
  const [pageIndex, setPageIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  // dịch tiếng Việt
  const [enableVn, setEnableVn] = useState(false);
  const [activePara, setActivePara] = useState<number | null>(null);

  if (!lesson) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        Chưa có dữ liệu luyện đọc cho Unit này.
      </div>
    );
  }

  const page: ReadingExercisePage = lesson.exercises[pageIndex];

  const handleChangeAnswer = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const resetAll = () => {
    setAnswers({});
    setSubmitted(false);
    setShowAnswers(false);
    setEnableVn(false);
    setActivePara(null);
    setPageIndex(0);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowAnswers(true); // sau khi nộp cho phép xem đáp án luôn
  };

  const toggleVn = () => {
    if (!submitted) return; // chỉ cho dịch sau khi làm xong
    setEnableVn((v) => !v);
    if (!enableVn) setActivePara(null);
  };

  const isCorrect = (id: string) => {
    const user = (answers[id] || "").trim().toLowerCase();
    const correct = (page.answers[id] || "").trim().toLowerCase();
    return user === correct && correct !== "";
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      {/* ========== PHẦN BÀI ĐỌC ========== */}
      <section className="relative rounded-2xl overflow-hidden shadow-lg border border-yellow-300">
        {/* nền ảnh phía sau */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/reading-bg.jpg')", // Bạn đặt đúng đường dẫn ảnh ở đây
          }}
        />
        {/* overlay làm mờ + nội dung */}
        <div className="relative bg-white/80 backdrop-blur px-6 py-6">
          <div className="text-sm font-semibold text-gray-600 mb-1">
            Luyện đọc · Chủ đề:{" "}
            <span className="text-sky-700">{lesson.topicVi}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
            {lesson.titleEn}
          </h1>

          {/* nút bật dịch tiếng Việt (chỉ sau khi nộp bài) */}
          <div className="flex justify-center mb-4 gap-3">
            <button
              type="button"
              onClick={toggleVn}
              disabled={!submitted}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                submitted
                  ? enableVn
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-orange-600 border-orange-400"
                  : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
              }`}
            >
              {enableVn ? "Tắt chế độ dịch" : "Bật dịch tiếng Việt (sau khi làm xong)"}
            </button>
          </div>

          {/* đoạn văn – click để xem popup dịch khi enableVn = true */}
          <div className="space-y-4 text-[15px] leading-relaxed text-gray-900">
            {lesson.passage.map((para, idx) => {
              const isActive = enableVn && activePara === idx;
              return (
                <div key={idx} className="relative">
                  <p
                    className={`cursor-pointer rounded px-2 py-1 hover:bg-yellow-50 ${
                      enableVn
                        ? "border border-dashed border-transparent hover:border-yellow-400"
                        : ""
                    }`}
                    onClick={() => {
                      if (!enableVn) return;
                      setActivePara((cur) => (cur === idx ? null : idx));
                    }}
                    title={enableVn ? "Nhấn để xem/ẩn bản dịch đoạn này" : undefined}
                  >
                    {para}
                  </p>

                  {isActive && (
                    <div className="mt-2 max-w-full md:max-w-[90%] lg:max-w-[80%] text-sm italic text-gray-800 bg-white/95 border border-yellow-300 rounded-lg shadow p-3">
                      {lesson.translation[idx]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== PHẦN BÀI TẬP ========== */}
      <section className="bg-white rounded-2xl shadow border border-gray-200 p-6 space-y-6">
        {/* Tiêu đề & hướng dẫn */}
        <div>
          <div className="flex items-center justify-between gap-3 mb-2">
            <h2 className="text-lg font-semibold">{page.title}</h2>
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

        {/* Danh sách câu hỏi */}
        <div className="space-y-5">
          {page.questions.map((q: ReadingQuestion, idx) => {
            const userAnswer = answers[q.id] || "";
            const correctAnswer = page.answers[q.id];
            const correct = submitted && showAnswers && isCorrect(q.id);

            const mainText =
              q.type === "drag"
                ? q.blankText
                : q.question ?? "";

            return (
              <div
                key={q.id}
                className="rounded-lg border border-gray-200 p-3 bg-gray-50"
              >
                <div className="flex items-start gap-2">
                  <span className="mt-[2px] font-semibold text-gray-700">
                    {idx + 1}.
                  </span>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium text-gray-900">{mainText}</p>
                    {q.viHint && (
                      <p className="text-xs text-gray-500 italic">
                        {q.viHint}
                      </p>
                    )}

                    {/* ====== DRAG & DROP ====== */}
                    {q.type === "drag" && (
                      <div className="mt-2 space-y-3">
                        {/* Ô điền đáp án (drop zone) */}
                        <div
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => {
                            e.preventDefault();
                            if (submitted) return;
                            const value = e.dataTransfer.getData("text/plain");
                            if (value) {
                              handleChangeAnswer(q.id, value);
                            }
                          }}
                          className="min-h-[40px] flex items-center justify-center rounded border-2 border-dashed border-amber-400 bg-white px-3 py-2 text-sm text-gray-700"
                        >
                          {userAnswer ? (
                            <span className="font-semibold text-amber-700">
                              {userAnswer}
                            </span>
                          ) : (
                            <span className="text-gray-400">
                              Kéo từ bên dưới vào đây hoặc bấm để chọn
                            </span>
                          )}
                        </div>

                        {/* Ngân hàng từ kéo thả */}
                        <div className="flex flex-wrap gap-2">
                          {q.options.map((opt) => {
                            const isSelected = userAnswer === opt;
                            return (
                              <div
                                key={opt}
                                draggable={!submitted}
                                onDragStart={(e) => {
                                  if (submitted) return;
                                  e.dataTransfer.setData("text/plain", opt);
                                }}
                                onClick={() => {
                                  if (submitted) return;
                                  handleChangeAnswer(q.id, opt);
                                }}
                                className={`cursor-pointer select-none rounded-full border px-3 py-1 text-xs md:text-sm ${
                                  isSelected
                                    ? "bg-amber-500 text-white border-amber-500"
                                    : "bg-white text-gray-800 border-gray-300 hover:bg-amber-50"
                                }`}
                              >
                                {opt}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* ====== INPUT ====== */}
                    {q.type === "input" && (
                      <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) =>
                          handleChangeAnswer(q.id, e.target.value)
                        }
                        disabled={submitted}
                        className="mt-2 w-full rounded border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                      />
                    )}

                    {/* ====== MCQ ====== */}
                    {q.type === "mcq" && (
                      <div className="mt-2 space-y-1">
                        {q.options.map((opt) => (
                          <label
                            key={opt}
                            className="flex items-center gap-2 text-sm text-gray-800"
                          >
                            <input
                              type="radio"
                              name={q.id}
                              disabled={submitted}
                              checked={userAnswer === opt}
                              onChange={() =>
                                handleChangeAnswer(q.id, opt)
                              }
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    )}

                    {/* Đáp án & giải thích (sau khi Submit + showAnswers = true) */}
                    {submitted && showAnswers && (
                      <div className="mt-2 text-sm">
                        <p
                          className={
                            correct ? "text-green-600" : "text-red-600"
                          }
                        >
                          Đáp án đúng:{" "}
                          <span className="font-semibold">
                            {correctAnswer}
                          </span>
                        </p>
                        {page.explanations?.[q.id] && (
                          <p className="italic text-gray-600">
                            {page.explanations[q.id]}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nút điều khiển */}
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

          <div className="flex gap-2">
            {!submitted ? (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-5 py-2 rounded bg-green-600 hover:bg-green-700 text-white text-sm font-semibold"
              >
                Submit
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setShowAnswers((v) => !v)}
                  className="px-4 py-2 rounded border text-sm bg-white hover:bg-gray-50"
                >
                  {showAnswers ? "Ẩn đáp án" : "Hiện đáp án"}
                </button>
                <button
                  type="button"
                  onClick={resetAll}
                  className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white text-sm"
                >
                  Làm lại
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

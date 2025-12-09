"use client";

import { useState } from "react";
import { getListeningByUnit } from "@/content/practice/listening/loader";
import type {
  ListeningLesson,
  ListeningExercisePage,
  ListeningQuestion,
} from "@/content/practice/listening/types";

/* ===========================================================
   Component luyện NGHE – dùng cho tất cả Unit
   Mỗi ListeningExercisePage = 1 TRANG (tối đa 10 câu)
   Mỗi trang có Submit/Làm lại riêng
   =========================================================== */
export default function ListeningExamPage({ unit }: { unit: number }) {
  const lesson = getListeningByUnit(unit) as ListeningLesson | undefined;

  // trang hiện tại
  const [pageIndex, setPageIndex] = useState(0);
  // đáp án của tất cả câu (id câu -> value)
  const [answers, setAnswers] = useState<Record<string, string>>({});
  // trạng thái submit / showAnswers THEO TRANG
  const [submittedPages, setSubmittedPages] = useState<Record<number, boolean>>(
    {}
  );
  const [showAnswersPages, setShowAnswersPages] = useState<
    Record<number, boolean>
  >({});

  if (!lesson) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        Chưa có dữ liệu luyện nghe cho Unit này.
      </div>
    );
  }

  const page: ListeningExercisePage = lesson.exercises[pageIndex];
  const submittedCurrent = !!submittedPages[pageIndex];
  const showAnswersCurrent = !!showAnswersPages[pageIndex];

  const handleChangeAnswer = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  // reset TOÀN BỘ bài (nếu bạn muốn giữ 1 nút "Làm lại tất cả")
  const resetAll = () => {
    setAnswers({});
    setSubmittedPages({});
    setShowAnswersPages({});
    setPageIndex(0);
  };

  // nộp bài cho TRANG HIỆN TẠI
  const handleSubmitCurrentPage = () => {
    setSubmittedPages((prev) => ({ ...prev, [pageIndex]: true }));
    setShowAnswersPages((prev) => ({ ...prev, [pageIndex]: true }));
  };

  // làm lại TRANG HIỆN TẠI (xóa đáp án của 10 câu trên trang đó)
  const resetCurrentPage = () => {
    const newAnswers = { ...answers };
    page.questions.forEach((q) => {
      delete newAnswers[q.id];
    });
    setAnswers(newAnswers);
    setSubmittedPages((prev) => ({ ...prev, [pageIndex]: false }));
    setShowAnswersPages((prev) => ({ ...prev, [pageIndex]: false }));
  };

  const isCorrect = (id: string) => {
    const user = (answers[id] || "").trim().toLowerCase();
    const correct = (page.answers[id] || "").trim().toLowerCase();
    return user === correct && correct !== "";
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
      {/* ========== PHẦN VIDEO NGHE ========== */}
      <section className="relative rounded-2xl overflow-hidden shadow-lg border border-sky-300">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/listening-bg.jpg')",
          }}
        />
        <div className="relative bg-white/80 backdrop-blur px-6 py-6 space-y-4">
          <div className="text-sm font-semibold text-gray-600 mb-1">
            Luyện nghe · Chủ đề:{" "}
            <span className="text-sky-700">{lesson.topicVi}</span>
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

          <div className="mt-4 aspect-video w-full rounded-xl overflow-hidden shadow border border-gray-200 bg-black">
            <iframe
              src={buildYoutubeEmbed(lesson.youtubeId)}
              title="Listening video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ========== PHẦN BÀI TẬP (10 CÂU / TRANG) ========== */}
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

        {/* Danh sách câu hỏi – bạn cho tối đa 10 câu trong page.questions */}
        <div className="space-y-5">
          {page.questions.map((q: ListeningQuestion, idx) => {
            const userAnswer = answers[q.id] || "";
            const correctAnswer = page.answers[q.id];
            const correct =
              submittedCurrent && showAnswersCurrent && isCorrect(q.id);

            const mainText =
              q.type === "drag" ? q.blankText : q.question ?? "";

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
                    {q.type === "drag" && q.options && (
                      <div className="mt-2 space-y-3">
                        <div
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => {
                            e.preventDefault();
                            if (submittedCurrent) return;
                            const value =
                              e.dataTransfer.getData("text/plain");
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

                        <div className="flex flex-wrap gap-2">
                          {q.options.map((opt) => {
                            const isSelected = userAnswer === opt;
                            return (
                              <div
                                key={opt}
                                draggable={!submittedCurrent}
                                onDragStart={(e) => {
                                  if (submittedCurrent) return;
                                  e.dataTransfer.setData(
                                    "text/plain",
                                    opt
                                  );
                                }}
                                onClick={() => {
                                  if (submittedCurrent) return;
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
                        disabled={submittedCurrent}
                        className="mt-2 w-full rounded border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                      />
                    )}

                    {/* ====== MCQ ====== */}
                    {q.type === "mcq" && q.options && (
                      <div className="mt-2 space-y-1">
                        {q.options.map((opt) => (
                          <label
                            key={opt}
                            className="flex items-center gap-2 text-sm text-gray-800"
                          >
                            <input
                              type="radio"
                              name={q.id}
                              disabled={submittedCurrent}
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

                    {/* Đáp án & giải thích của TRANG HIỆN TẠI */}
                    {submittedCurrent && showAnswersCurrent && (
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

        {/* Nút điều khiển TRANG + Submit/Làm lại cho TRANG HIỆN TẠI */}
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
            {!submittedCurrent ? (
              <button
                type="button"
                onClick={handleSubmitCurrentPage}
                className="px-5 py-2 rounded bg-green-600 hover:bg-green-700 text-white text-sm font-semibold"
              >
                Kiểm tra trang này
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setShowAnswersPages((prev) => ({
                      ...prev,
                      [pageIndex]: !prev[pageIndex],
                    }))
                  }
                  className="px-4 py-2 rounded border text-sm bg-white hover:bg-gray-50"
                >
                  {showAnswersCurrent ? "Ẩn đáp án" : "Hiện đáp án"}
                </button>
                <button
                  type="button"
                  onClick={resetCurrentPage}
                  className="px-4 py-2 rounded bg-red-500 hover:bg-red-600 text-white text-sm"
                >
                  Làm lại trang này
                </button>
              </>
            )}
          </div>
        </div>

        {/* (Tùy chọn) nút resetAll nếu bạn muốn đặt đâu đó */}
        {/* <button onClick={resetAll}>Làm lại tất cả</button> */}
      </section>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { getWritingByUnit } from "@/content/practice/writing/loader";
import type {
  WritingLesson,
  WritingExercisePage,
  WritingTheoryBlock,
  WritingExercise,
  MCQExercise,
  DragBlankExercise,
} from "@/content/practice/writing/types";

type Props = { unit: number };

export default function WritingPracticePage({ unit }: Props) {
  const lesson = getWritingByUnit(unit) as WritingLesson | undefined;

  const [pageIndex, setPageIndex] = useState(0);
  const [expandedTheory, setExpandedTheory] = useState<Record<string, boolean>>(
    {}
  );

  // state cho Practice
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, string>>({});
  const [dragAnswers, setDragAnswers] = useState<
    Record<string, Record<string, string>>
  >({});
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({}); // exerciseId -> submitted?

  if (!lesson) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        Chưa có dữ liệu luyện viết cho Unit này.
      </div>
    );
  }

  const page: WritingExercisePage = lesson.exercises[pageIndex];

  const toggleTheory = (id: string) => {
    setExpandedTheory((prev) => ({ ...prev, [id]: !(prev[id] ?? true) }));
  };

  const resetExercise = (exerciseId: string) => {
    setSubmitted((prev) => ({ ...prev, [exerciseId]: false }));
    // reset theo type
    const ex = page.exercises.find((e) => e.id === exerciseId);
    if (!ex) return;

    if (ex.type === "mcq") {
      // xóa đáp án các câu thuộc exercise này
      setMcqAnswers((prev) => {
        const copy = { ...prev };
        ex.questions.forEach((q) => delete copy[q.id]);
        return copy;
      });
    }

    if (ex.type === "drag_blank") {
      setDragAnswers((prev) => {
        const copy = { ...prev };
        delete copy[exerciseId];
        return copy;
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      {/* ========== HEADER / THÔNG TIN BÀI VIẾT ========== */}
      <section className="relative rounded-2xl overflow-hidden shadow-lg border border-sky-300">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/writing-bg.jpg')" }}
        />
        <div className="relative bg-white/80 backdrop-blur px-6 py-6 space-y-4">
          <div className="text-sm font-semibold text-gray-600 mb-1">
            Luyện viết · Chủ đề:{" "}
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

          <p className="text-xs md:text-sm text-center text-gray-600">
            Gợi ý: Đọc lý thuyết → làm bài tập → bấm “Chấm điểm” để xem đáp án đúng.
          </p>
        </div>
      </section>

      {/* ========== PHẦN LÝ THUYẾT VIẾT ========== */}
      {lesson.theory && lesson.theory.length > 0 && (
        <section className="bg-white rounded-2xl shadow border border-gray-200 p-6 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">
              1. Lý thuyết & cấu trúc viết cần nhớ
            </h2>
            <span className="text-xs text-gray-500">
              {lesson.theory.length} khối nội dung
            </span>
          </div>

          <div className="space-y-3">
            {lesson.theory.map((block: WritingTheoryBlock) => {
              const isOpen = expandedTheory[block.id] ?? true;
              return (
                <div
                  key={block.id}
                  className="border border-sky-200 rounded-xl bg-sky-50/60"
                >
                  <button
                    type="button"
                    onClick={() => toggleTheory(block.id)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left"
                  >
                    <span className="font-semibold text-sky-800">
                      {block.title}
                    </span>
                    <span className="text-xs text-sky-700">
                      {isOpen ? "Ẩn" : "Hiện"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 space-y-2 text-sm text-gray-800">
                      {block.contentEn && <p>{block.contentEn}</p>}
                      {block.contentVi && (
                        <p className="italic text-gray-600">{block.contentVi}</p>
                      )}

                      {block.quoteEn && (
                        <div className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm leading-relaxed">
                          <span className="font-semibold">Ví dụ:</span>{" "}
                          {block.quoteEn}
                        </div>
                      )}

                      {block.items && block.items.length > 0 && (
                        <ul className="list-disc pl-5 space-y-1">
                          {block.items.map((it, idx) => (
                            <li key={idx}>
                              <span className="font-medium">{it.en}</span>
                              {it.vi && (
                                <span className="text-gray-600"> – {it.vi}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}

                      {block.table && (
                        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                          <table className="min-w-full text-sm">
                            <thead className="bg-gray-50">
                              <tr>
                                {block.table.headers.map((h) => (
                                  <th
                                    key={h}
                                    className="text-left px-4 py-2 font-semibold text-gray-700 border-b"
                                  >
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {block.table.rows.map((row, rIdx) => (
                                <tr key={rIdx} className="border-b">
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className="px-4 py-2">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* ========== PHẦN THỰC HÀNH VIẾT ========== */}
      <section className="bg-white rounded-2xl shadow border border-gray-200 p-6 space-y-6">
        {/* Tiêu đề & hướng dẫn trang hiện tại */}
        <div>
          <div className="flex items-center justify-between gap-3 mb-2">
            <h2 className="text-lg font-semibold">2. Luyện viết – {page.title}</h2>
            <span className="text-xs text-gray-500">
              Trang {pageIndex + 1} / {lesson.exercises.length}
            </span>
          </div>

          <p className="text-sm text-gray-800">
            {page.instructionEn}
            {page.instructionVi && (
              <>
                <br />
                <span className="italic text-gray-500">{page.instructionVi}</span>
              </>
            )}
          </p>
        </div>

        {/* Danh sách bài tập trong trang */}
        <div className="space-y-5">
          {page.exercises.map((ex, idx) => {
            const isSubmitted = submitted[ex.id] ?? false;

            return (
              <div
                key={ex.id}
                className="rounded-lg border border-gray-200 p-4 bg-gray-50 space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-gray-700">
                      {idx + 1}. {ex.title}
                    </div>
                    {ex.description && (
                      <div className="text-xs text-gray-600 mt-1 italic">
                        {ex.description}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => resetExercise(ex.id)}
                      className="px-3 py-1 rounded border text-xs bg-white hover:bg-gray-50"
                    >
                      Làm lại
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setSubmitted((prev) => ({ ...prev, [ex.id]: true }))
                      }
                      className="px-3 py-1 rounded border text-xs bg-white hover:bg-gray-50"
                    >
                      Chấm điểm
                    </button>
                  </div>
                </div>

                {ex.type === "mcq" ? (
                  <MCQBlock
                    exercise={ex}
                    answers={mcqAnswers}
                    setAnswers={setMcqAnswers}
                    submitted={isSubmitted}
                  />
                ) : (
                  <DragBlankBlock
                    exercise={ex}
                    answers={dragAnswers[ex.id] ?? {}}
                    setAnswers={(next) =>
                      setDragAnswers((prev) => ({ ...prev, [ex.id]: next }))
                    }
                    submitted={isSubmitted}
                  />
                )}
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
                setPageIndex((i) => Math.min(lesson.exercises.length - 1, i + 1))
              }
              disabled={pageIndex === lesson.exercises.length - 1}
              className="px-4 py-2 rounded border text-sm bg-gray-50 hover:bg-gray-100 disabled:opacity-40"
            >
              Trang sau ➜
            </button>
          </div>

          <p className="text-[11px] text-gray-500">
            Làm xong hãy bấm “Chấm điểm” để xem đáp án và giải thích.
          </p>
        </div>
      </section>
    </div>
  );
}

/* =========================
 * MCQ BLOCK
 * ========================= */
function MCQBlock({
  exercise,
  answers,
  setAnswers,
  submitted,
}: {
  exercise: MCQExercise;
  answers: Record<string, string>;
  setAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  submitted: boolean;
}) {
  const score = useMemo(() => {
    let correct = 0;
    for (const q of exercise.questions) {
      if (answers[q.id] && answers[q.id] === q.correctOptionId) correct++;
    }
    return { correct, total: exercise.questions.length };
  }, [answers, exercise.questions]);

  return (
    <div className="space-y-4">
      {submitted && (
        <div className="text-xs text-gray-700">
          Kết quả:{" "}
          <span className="font-semibold">
            {score.correct}/{score.total}
          </span>
        </div>
      )}

      <div className="space-y-4">
        {exercise.questions.map((q, qIdx) => {
          const chosen = answers[q.id];
          const isCorrect = submitted && chosen === q.correctOptionId;
          const isWrong = submitted && chosen && chosen !== q.correctOptionId;

          return (
            <div key={q.id} className="rounded-lg border border-gray-200 bg-white p-3">
              <div className="flex items-start gap-2">
                <span className="mt-[2px] font-semibold text-gray-700">
                  {qIdx + 1}.
                </span>
                <div className="flex-1 space-y-2">
                  <p className="font-medium text-gray-900">{q.prompt}</p>

                  <div className="space-y-2">
                    {q.options.map((op) => {
                      const checked = chosen === op.id;
                      const showCorrect = submitted && op.id === q.correctOptionId;
                      const showWrongPick =
                        submitted && checked && op.id !== q.correctOptionId;

                      const base =
                        "flex items-start gap-2 rounded border px-3 py-2 text-sm cursor-pointer";
                      const cls = [
                        base,
                        "bg-white hover:bg-gray-50 border-gray-200",
                        checked ? "ring-1 ring-gray-300" : "",
                        showCorrect ? "border-emerald-300 bg-emerald-50/60" : "",
                        showWrongPick ? "border-rose-300 bg-rose-50/60" : "",
                      ].join(" ");

                      return (
                        <label key={op.id} className={cls}>
                          <input
                            type="radio"
                            name={q.id}
                            checked={checked}
                            onChange={() =>
                              setAnswers((prev) => ({ ...prev, [q.id]: op.id }))
                            }
                            className="mt-1"
                          />
                          <span className="text-gray-900">
                            <span className="font-semibold">{op.id}.</span>{" "}
                            {op.text}
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  {submitted && (
                    <div className="text-xs">
                      {isCorrect ? (
                        <div className="text-emerald-700 font-semibold">✅ Đúng</div>
                      ) : isWrong ? (
                        <div className="text-rose-700 font-semibold">
                          ❌ Sai — Đáp án đúng: {q.correctOptionId}
                        </div>
                      ) : (
                        <div className="text-amber-700 font-semibold">
                          ⚠️ Bạn chưa chọn đáp án
                        </div>
                      )}

                      {q.explanation && (
                        <div className="mt-1 text-gray-600 italic">
                          {q.explanation}
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
    </div>
  );
}

/* =========================
 * DRAG & DROP FILL BLANK BLOCK
 * ========================= */
function DragBlankBlock({
  exercise,
  answers,
  setAnswers,
  submitted,
}: {
  exercise: DragBlankExercise;
  answers: Record<string, string>; // blankId -> word
  setAnswers: (next: Record<string, string>) => void;
  submitted: boolean;
}) {
  const usedWords = useMemo(() => new Set(Object.values(answers)), [answers]);

  const totalBlanks = Object.keys(exercise.correctAnswers).length;
  const correctCount = useMemo(() => {
    let ok = 0;
    for (const blankId of Object.keys(exercise.correctAnswers)) {
      if (answers[blankId] && answers[blankId] === exercise.correctAnswers[blankId])
        ok++;
    }
    return ok;
  }, [answers, exercise.correctAnswers]);

  const onDropWord = (blankId: string, word: string) => {
    setAnswers({ ...answers, [blankId]: word });
  };

  const removeWord = (blankId: string) => {
    const copy = { ...answers };
    delete copy[blankId];
    setAnswers(copy);
  };

  return (
    <div className="space-y-3">
      {submitted && (
        <div className="text-xs text-gray-700">
          Kết quả:{" "}
          <span className="font-semibold">
            {correctCount}/{totalBlanks}
          </span>
        </div>
      )}

      {/* Sentence with blanks */}
      <div className="rounded-lg border border-gray-200 bg-white p-3 text-sm leading-relaxed">
        {exercise.sentenceParts.map((part, idx) => {
          if (typeof part === "string") return <span key={idx}>{part}</span>;

          const blankId = part.blankId;
          const filled = answers[blankId];
          const correct = exercise.correctAnswers[blankId];

          const showCorrect = submitted && filled && filled === correct;
          const showWrong = submitted && filled && filled !== correct;

          const cls = [
            "inline-flex items-center justify-center mx-1 px-3 py-1 rounded-full border text-xs select-none",
            filled ? "bg-gray-50 border-gray-300 cursor-pointer" : "bg-white border-dashed border-gray-400",
            showCorrect ? "bg-emerald-50 border-emerald-300" : "",
            showWrong ? "bg-rose-50 border-rose-300" : "",
          ].join(" ");

          return (
            <span
              key={idx}
              className={cls}
              title={filled ? "Bấm để xóa" : "Kéo từ vào đây"}
              onClick={() => (filled ? removeWord(blankId) : undefined)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const word = e.dataTransfer.getData("text/plain");
                if (word) onDropWord(blankId, word);
              }}
            >
              {filled ?? "______"}
            </span>
          );
        })}
      </div>

      {/* Word bank */}
      <div className="flex flex-wrap gap-2">
        {exercise.wordBank.map((w) => {
          const disabled = usedWords.has(w);
          return (
            <span
              key={w}
              draggable={!disabled}
              onDragStart={(e) => e.dataTransfer.setData("text/plain", w)}
              className={[
                "px-3 py-1 rounded-full border text-xs bg-white",
                disabled ? "opacity-40 cursor-not-allowed" : "cursor-grab hover:bg-gray-50",
              ].join(" ")}
              title={disabled ? "Đã dùng" : "Kéo thả"}
            >
              {w}
            </span>
          );
        })}
      </div>

      {submitted && (
        <div className="text-xs space-y-1">
          {Object.keys(exercise.correctAnswers).map((blankId) => {
            const filled = answers[blankId];
            const correct = exercise.correctAnswers[blankId];
            const ok = filled === correct;

            return (
              <div
                key={blankId}
                className={ok ? "text-emerald-700" : "text-rose-700"}
              >
                {ok ? "✅" : "❌"} Ô {blankId}:{" "}
                <span className="font-semibold">
                  {filled ? filled : "(chưa điền)"}
                </span>{" "}
                → Đúng: <span className="font-semibold">{correct}</span>
              </div>
            );
          })}

          {exercise.explanation && (
            <div className="text-gray-600 italic mt-1">{exercise.explanation}</div>
          )}
        </div>
      )}
    </div>
  );
}

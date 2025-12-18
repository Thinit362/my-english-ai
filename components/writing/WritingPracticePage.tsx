"use client";

import React, { useMemo, useState } from "react";
import { getWritingByUnit } from "@/content/practice/writing/loader";
import type {
  WritingLesson,
  WritingExercisePage,
  WritingTheoryBlock,
  WritingPromptExercise,
  WritingExercise,
} from "@/content/practice/writing/types";

type Props = { unit: number };

type Rubric = {
  taskFulfillment: number; // 0-10
  organization: number; // 0-10
  grammarVocabulary: number; // 0-10
  coherence: number; // 0-10
};

function isWritingPrompt(ex: WritingExercise): ex is WritingPromptExercise {
  return ex.type === "writing_prompt";
}

export default function WritingPracticePage({ unit }: Props) {
  const lesson = getWritingByUnit(unit) as WritingLesson | undefined;

  const [expandedTheory, setExpandedTheory] = useState<Record<string, boolean>>(
    {}
  );

  // Ở trang “Luyện viết” kiểu này: ưu tiên lấy bài writing_prompt đầu tiên trong unit
  const firstPrompt = useMemo(() => {
    const all = lesson?.exercises?.flatMap((p) => p.exercises) ?? [];
    return all.find(isWritingPrompt);
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        Chưa có dữ liệu luyện viết cho Unit này.
      </div>
    );
  }

  const toggleTheory = (id: string) => {
    setExpandedTheory((prev) => ({ ...prev, [id]: !(prev[id] ?? true) }));
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      {/* ========== HEADER ========== */}
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
            Quy trình: Đọc lý thuyết → Viết bài → Dùng “Giáo viên AI” để nhận góp ý
            (không viết hộ) → chỉnh sửa và viết lại.
          </p>
        </div>
      </section>

      {/* ========== 1. LÝ THUYẾT ========== */}
      {lesson.theory && lesson.theory.length > 0 && (
        <section className="bg-white rounded-2xl shadow border border-gray-200 p-6 space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">
              1. Lý thuyết & cấu trúc viết theo chủ đề
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

      {/* ========== 2. LUYỆN VIẾT + GEMINI ========== */}
      <section className="bg-white rounded-2xl shadow border border-gray-200 p-6 space-y-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">2. Luyện viết</h2>
            <p className="text-sm text-gray-700 mt-1">
              Viết theo đúng chủ đề Unit. Sau đó dùng “Giáo viên AI Gemini” để nhận
              nhận xét theo cấu trúc đoạn văn (Topic/Supporting/Concluding).
            </p>
          </div>
          <div className="text-[11px] text-gray-500 text-right">
            AI chỉ gợi ý & sửa tối thiểu<br />
            (không viết hộ)
          </div>
        </div>

        {!firstPrompt ? (
          <div className="text-sm text-gray-700">
            Unit này chưa có bài luyện viết dạng Writing Prompt.
          </div>
        ) : (
          <WritingPromptWithGemini
            unit={unit}
            lessonTitleEn={lesson.titleEn}
            lessonTopicVi={lesson.topicVi}
            exercise={firstPrompt}
          />
        )}
      </section>
    </div>
  );
}

/* =========================
 * Writing Prompt + Gemini Coach + Rubric
 * ========================= */
function WritingPromptWithGemini({
  unit,
  lessonTitleEn,
  lessonTopicVi,
  exercise,
}: {
  unit: number;
  lessonTitleEn: string;
  lessonTopicVi: string;
  exercise: WritingPromptExercise;
}) {
  const writingKey = buildWritingStorageKey(unit, exercise.id);
  const feedbackKey = buildGeminiFeedbackKey(unit, exercise.id);
  const rubricKey = buildGeminiRubricKey(unit, exercise.id);

  const [text, setText] = useState<string>(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem(writingKey) ?? "";
  });

  const [aiLoading, setAiLoading] = useState(false);
  const [aiFeedback, setAiFeedback] = useState<string>(() => {
    if (typeof window === "undefined") return "";
    return localStorage.getItem(feedbackKey) ?? "";
  });

  const [aiRubric, setAiRubric] = useState<Rubric | null>(() => {
    if (typeof window === "undefined") return null;
    const saved = localStorage.getItem(rubricKey);
    return saved ? (JSON.parse(saved) as Rubric) : null;
  });

  const sentenceCount = useMemo(() => countSentences(text), [text]);
  const min = exercise.minSentences;
  const max = exercise.maxSentences;

  const inRange =
    (min ? sentenceCount >= min : true) && (max ? sentenceCount <= max : true);

  const saveWriting = () => {
    if (typeof window === "undefined") return;
    localStorage.setItem(writingKey, text);
  };

  const clearAll = () => {
    setText("");
    setAiFeedback("");
    setAiRubric(null);
    if (typeof window === "undefined") return;
    localStorage.removeItem(writingKey);
    localStorage.removeItem(feedbackKey);
    localStorage.removeItem(rubricKey);
  };

  const saveFeedback = (val: string) => {
    setAiFeedback(val);
    if (typeof window === "undefined") return;
    if (!val) localStorage.removeItem(feedbackKey);
    else localStorage.setItem(feedbackKey, val);
  };

  const saveRubric = (r: Rubric | null) => {
    setAiRubric(r);
    if (typeof window === "undefined") return;
    if (!r) localStorage.removeItem(rubricKey);
    else localStorage.setItem(rubricKey, JSON.stringify(r));
  };

  async function getGeminiTeacherFeedback() {
    setAiLoading(true);
    saveFeedback("");
    saveRubric(null);

    try {
      const res = await fetch("/api/gemini/writing-coach", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          unit,
          topic: `${lessonTitleEn} • ${lessonTopicVi}`,
          pageTitle: "Writing Practice",
          exerciseTitle: exercise.title,
          cues: exercise.cues,
          studentText: text,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Gemini error");

      saveRubric(data.rubric ?? null);
      saveFeedback(data.feedbackText || "");
    } catch (err: any) {
      saveFeedback(`❌ Lỗi: ${err?.message ?? String(err)}`);
    } finally {
      setAiLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      {/* Title + controls */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-gray-800">
            {exercise.title}
          </div>
          {exercise.description && (
            <div className="text-xs text-gray-600 mt-1 italic">
              {exercise.description}
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={clearAll}
            className="px-3 py-1 rounded border text-xs bg-white hover:bg-gray-50"
          >
            Làm lại
          </button>
          <button
            type="button"
            onClick={saveWriting}
            className="px-3 py-1 rounded border text-xs bg-white hover:bg-gray-50"
          >
            Lưu bài
          </button>
        </div>
      </div>

      {/* Sentence counter */}
      <div className="text-xs text-gray-700">
        Số câu:{" "}
        <span className="font-semibold">
          {sentenceCount}
          {min ? ` / tối thiểu ${min}` : ""}
          {max ? ` (tối đa ${max})` : ""}
        </span>
        <span
          className={[
            "ml-2 font-semibold",
            inRange ? "text-emerald-700" : "text-rose-700",
          ].join(" ")}
        >
          {inRange ? "(Đạt yêu cầu)" : "(Chưa đạt yêu cầu)"}
        </span>
      </div>

      {/* Textarea */}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={saveWriting}
        placeholder="Write your paragraph here..."
        className="w-full min-h-[200px] rounded-xl border border-gray-200 bg-white p-3 text-sm outline-none focus:ring-1 focus:ring-sky-300"
      />

      {/* Cues */}
      <div className="rounded-xl border border-gray-200 bg-white p-3">
        <div className="text-sm font-semibold text-gray-800 mb-2">
          Câu hỏi gợi ý (Cues)
        </div>

        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
          {exercise.cues.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>

        {exercise.noteVi && (
          <div className="mt-3 text-xs text-gray-600 italic">{exercise.noteVi}</div>
        )}

        <div className="mt-3 text-xs text-gray-700">
          <div className="font-semibold mb-1">Checklist đoạn văn:</div>
          <ul className="list-disc pl-5 space-y-1">
            <li><b>Topic sentence</b>: mở đoạn, giới thiệu chủ đề & ý chính.</li>
            <li><b>Supporting sentences</b>: ví dụ/chi tiết làm rõ ý.</li>
            <li><b>Concluding sentence</b>: khái quát lại / diễn đạt lại ý.</li>
          </ul>
        </div>
      </div>

      {/* Gemini Teacher */}
      <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-4 space-y-3">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-semibold text-sky-900">
            👩‍🏫 Giáo viên AI Gemini – kiểm tra & góp ý
          </div>
          <div className="text-[11px] text-gray-600 text-right">
            Không viết hộ · Gợi ý tối đa 1–2 câu
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={getGeminiTeacherFeedback}
            disabled={aiLoading || text.trim().length === 0}
            className="px-3 py-2 rounded-lg border text-xs bg-white hover:bg-gray-50 disabled:opacity-50"
            title={text.trim().length === 0 ? "Bạn hãy viết vài câu trước" : ""}
          >
            {aiLoading ? "Đang chấm & góp ý..." : "GV AI kiểm tra & gợi ý"}
          </button>

          <button
            type="button"
            onClick={() => {
              saveFeedback("");
              saveRubric(null);
            }}
            className="px-3 py-2 rounded-lg border text-xs bg-white hover:bg-gray-50"
          >
            Xóa góp ý
          </button>
        </div>

        {aiRubric && <RubricMini rubric={aiRubric} />}

        {aiFeedback ? (
          <div className="rounded-lg border border-gray-200 bg-white p-3 text-sm whitespace-pre-wrap leading-relaxed">
            {aiFeedback}
          </div>
        ) : (
          <div className="text-xs text-gray-600">
            Viết xong bài → bấm “GV AI kiểm tra & gợi ý”.
            Gemini sẽ chấm rubric (4 tiêu chí) + chỉ lỗi + giải thích + gợi ý 1–2 câu
            chuẩn hơn + hướng dẫn theo Topic/Supporting/Concluding.
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================
 * Rubric Mini UI
 * ========================= */
function RubricMini({ rubric }: { rubric: Rubric }) {
  const rows = [
    { key: "taskFulfillment", label: "Task fulfillment" },
    { key: "organization", label: "Organization" },
    { key: "grammarVocabulary", label: "Grammar & Vocabulary" },
    { key: "coherence", label: "Coherence" },
  ] as const;

  const total =
    rubric.taskFulfillment +
    rubric.organization +
    rubric.grammarVocabulary +
    rubric.coherence;

  const avg = Math.round((total / 4) * 10) / 10; // x.y /10

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 space-y-3">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-gray-800">Rubric mini</div>
        <div className="text-xs text-gray-600">
          Trung bình: <span className="font-semibold">{avg}/10</span>
        </div>
      </div>

      <div className="space-y-2">
        {rows.map((r) => {
          const score = rubric[r.key];
          const pct = Math.max(0, Math.min(100, score * 10));

          return (
            <div key={r.key} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-700 font-medium">{r.label}</span>
                <span className="text-gray-700">
                  <span className="font-semibold">{score}</span>/10
                </span>
              </div>

              <div className="w-full h-2 rounded-full bg-gray-100 border border-gray-200 overflow-hidden">
                <div className="h-full bg-sky-400" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-[11px] text-gray-500">
        * Rubric giúp tự đánh giá. AI không viết hộ, chỉ gợi ý & sửa tối thiểu.
      </div>
    </div>
  );
}

/* =========================
 * Helpers
 * ========================= */
function buildWritingStorageKey(unit: number, exerciseId: string) {
  return `writing_u${unit}_${exerciseId}`;
}
function buildGeminiFeedbackKey(unit: number, exerciseId: string) {
  return `writing_u${unit}_${exerciseId}_gemini_feedback`;
}
function buildGeminiRubricKey(unit: number, exerciseId: string) {
  return `writing_u${unit}_${exerciseId}_gemini_rubric`;
}

function countSentences(text: string) {
  const cleaned = text.trim();
  if (!cleaned) return 0;

  // đếm câu tương đối theo dấu . ! ?
  const parts = cleaned
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);

  return parts.length;
}

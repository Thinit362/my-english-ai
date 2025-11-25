// components/VocabularyPracticeList.tsx
"use client";

import React from "react";

export type VocabExerciseMeta = {
  id: string;
  title: string;          // "Bài tập 1"
  description: string;    // "Hãy nghe và nối từ với nghĩa..."
  iconSrc?: string;       // đường dẫn icon (nếu có)
  views?: number;
  doneCount?: number;     // số bạn đã làm (placeholder)
  isDone?: boolean;       // sau này dùng để hiển thị điểm
};

interface Props {
  unitTitle: string;           // "Unit 1: Family life"
  sectionTitle: string;        // "Thực hành từ vựng 1"
  exercises: VocabExerciseMeta[];
  onExerciseClick?: (ex: VocabExerciseMeta) => void;
}

const VocabularyPracticeList: React.FC<Props> = ({
  unitTitle,
  sectionTitle,
  exercises,
  onExerciseClick,
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* breadcrumb / tiêu đề */}
      <div className="mb-4 text-sm text-slate-600">
        <span className="font-semibold">Tiếng Anh 10</span> &nbsp;/&nbsp;
        <span>{unitTitle}</span> &nbsp;/&nbsp;
        <span className="text-slate-800 font-semibold">{sectionTitle}</span>
      </div>

      <h1 className="text-2xl font-bold text-slate-800 mb-4">
        {sectionTitle}
      </h1>

      <div className="space-y-4">
        {exercises.map((ex) => (
          <div
            key={ex.id}
            className="flex items-stretch rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            {/* ICON bên trái */}
            <div className="w-32 flex items-center justify-center bg-amber-100">
              {ex.iconSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={ex.iconSrc}
                  alt=""
                  className="w-24 h-24 object-contain"
                />
              ) : (
                <span className="text-3xl">🔤</span>
              )}
            </div>

            {/* Thông tin bài tập */}
            <div className="flex-1 px-4 py-3">
              <button
                type="button"
                className="text-lg font-semibold text-sky-700 hover:underline"
                onClick={() => onExerciseClick && onExerciseClick(ex)}
              >
                {ex.title}
              </button>
              <p className="text-sm text-slate-600 mt-1">{ex.description}</p>

              <div className="flex items-center gap-4 mt-3 text-xs text-slate-400">
                {typeof ex.views === "number" && (
                  <span>👁 {ex.views}</span>
                )}
                {typeof ex.doneCount === "number" && (
                  <span>💬 {ex.doneCount}</span>
                )}
              </div>
            </div>

            {/* Cột trạng thái bên phải */}
            <div className="w-56 border-l border-slate-200 flex items-center justify-center px-4">
              {ex.isDone ? (
                <div className="text-right text-sm">
                  <div>Thời gian làm bài: 45 giây</div>
                  <div>
                    Điểm: <span className="font-bold text-emerald-600">8/8</span>
                  </div>
                </div>
              ) : (
                <div className="text-right text-sm text-rose-600 font-semibold">
                  Bạn chưa làm bài này
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabularyPracticeList;

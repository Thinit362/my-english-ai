// components/PracticePage.tsx
"use client";

import React, { useState } from "react";
import { PracticeTask } from "@/content/practice/types";
import { renderGame } from "@/components/PracticeGameRenderer";

interface Props {
  unit: number;
  sectionKey: string;      // "vocabulary-1" | "grammar-1" | "pronunciation"
  sectionTitle: string;    // "Thực hành phát âm"
  tasks: PracticeTask[];
}

const PracticePage: React.FC<Props> = ({
  unit,
  sectionKey,
  sectionTitle,
  tasks,
}) => {
  const [activeId, setActiveId] = useState<string>(tasks[0].id);
  const active = tasks.find((t) => t.id === activeId) ?? tasks[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-2">
        Tiếng Anh 10 – Unit {unit}
      </h1>
      <h2 className="text-xl font-semibold text-orange-600 mb-4">
        {sectionTitle}
      </h2>

      {/* Danh sách Bài tập 1, 2, 3... */}
      <div className="space-y-3 mb-6">
        {tasks.map((task) => (
          <button
            key={task.id}
            onClick={() => setActiveId(task.id)}
            className={`w-full flex items-center justify-between rounded-xl border px-4 py-3 text-left shadow-sm bg-white
            ${
              activeId === task.id
                ? "border-orange-500"
                : "border-slate-200"
            }`}
          >
            <div>
              <div className="font-semibold text-blue-600">{task.title}</div>
              {task.description && (
                <p className="text-sm text-slate-500">{task.description}</p>
              )}
            </div>
            <span className="text-xs text-slate-400">
              {activeId === task.id ? "Đang làm" : "Chưa làm"}
            </span>
          </button>
        ))}
      </div>

      {/* Vùng làm bài – chỗ này sẽ dùng lại các game cũ + popup chấm điểm */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        {renderGame(active)}
      </div>
    </div>
  );
};

export default PracticePage;

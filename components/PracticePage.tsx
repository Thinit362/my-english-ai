"use client";

import React, { useState } from "react";
import { PracticeTask } from "@/content/practice/types";
import PracticeGameRenderer from "@/components/PracticeGameRenderer";

interface Props {
  unit: number;
  sectionTitle: string;
  tasks: PracticeTask[];
}

const PracticePage: React.FC<Props> = ({ unit, sectionTitle, tasks }) => {
  const [activeId, setActiveId] = useState<string | undefined>(
    tasks[0]?.id
  );
  const activeTask =
    tasks.find((t) => t.id === activeId) || tasks[0] || null;

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
            type="button"
            onClick={() => setActiveId(task.id)}
            className={`w-full flex items-center justify-between rounded-xl border px-4 py-3 text-left shadow-sm bg-white ${
              activeId === task.id
                ? "border-orange-500"
                : "border-slate-200"
            }`}
          >
            <div>
              <div className="font-semibold text-sky-700">
                {task.title}
              </div>
              {task.description && (
                <p className="text-sm text-slate-500">
                  {task.description}
                </p>
              )}
            </div>
            <span className="text-xs text-slate-400">
              {activeId === task.id ? "Đang làm" : ""}
            </span>
          </button>
        ))}
      </div>

      {/* Vùng làm bài */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        {activeTask ? (
          <PracticeGameRenderer task={activeTask} />
        ) : (
          <p>Chưa có bài tập nào.</p>
        )}
      </div>
    </div>
  );
};

export default PracticePage;

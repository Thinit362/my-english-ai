"use client";

import React, { useState } from "react";

export interface MultipleChoiceItem {
  id: string;
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correct: "A" | "B" | "C" | "D";
  explanation?: string;
}

export interface MultipleChoiceDataset {
  id: string;
  title: string;
  instructionsEn?: string;
  instructionsVi?: string;
  items: MultipleChoiceItem[];
}

interface Props {
  dataset: MultipleChoiceDataset;
}

const MultipleChoiceGame: React.FC<Props> = ({ dataset }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleSelect = (id: string, choice: "A" | "B" | "C" | "D") => {
    setAnswers((prev) => ({ ...prev, [id]: choice }));
  };

  const handleSubmit = () => {
    let correctCount = 0;
    dataset.items.forEach((item) => {
      if (answers[item.id] === item.correct) correctCount++;
    });
    setScore(correctCount);
    setChecked(true);
  };

  const handleReset = () => {
    setAnswers({});
    setChecked(false);
    setScore(null);
  };

  const getOptionClass = (
    item: MultipleChoiceItem,
    selected: string | undefined,
    opt: "A" | "B" | "C" | "D"
  ) => {
    if (!checked) return "";
    if (item.correct === opt) return "text-green-700 font-semibold";
    if (selected === opt && item.correct !== opt)
      return "text-red-600 font-semibold";
    return "";
  };

  const getOptionText = (item: MultipleChoiceItem, opt: "A" | "B" | "C" | "D") =>
    opt === "A"
      ? item.optionA
      : opt === "B"
      ? item.optionB
      : opt === "C"
      ? item.optionC
      : item.optionD;

  return (
    <div className="rounded-2xl border border-amber-200 bg-[#fff7e6] p-4 md:p-6">
      {/* Tiêu đề */}
      <h2 className="font-semibold text-xl mb-3 text-slate-900">
        {dataset.title}
      </h2>

      {/* Hướng dẫn */}
      {(dataset.instructionsEn || dataset.instructionsVi) && (
        <div className="mb-4 rounded-md bg-white/70 px-4 py-3 border border-amber-100 text-base">
          {dataset.instructionsEn && (
            <p className="text-blue-700 font-semibold">{dataset.instructionsEn}</p>
          )}
          {dataset.instructionsVi && (
            <p className="text-orange-800 italic mt-1">{dataset.instructionsVi}</p>
          )}
        </div>
      )}

      {/* Danh sách câu hỏi */}
      <div className="space-y-4">
        {dataset.items.map((item, index) => {
          const selected = answers[item.id];

          return (
            <div
              key={item.id}
              className="rounded-lg border border-amber-200 bg-white px-4 py-3 shadow-sm"
            >
              {/* Số thứ tự + câu hỏi cùng một dòng */}
              <div className="flex items-center gap-3 mb-2">
                <div className="min-w-[36px] h-9 flex items-center justify-center rounded-md bg-amber-400 text-white font-bold text-base shadow">
                  {index + 1}.
                </div>

                <p className="flex-1 text-base text-slate-900 leading-relaxed">
                  {item.question}
                </p>
              </div>

              {/* Đáp án 2 cột */}
              <div className="mt-1 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 text-base">
                {(["A", "B", "C", "D"] as const).map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={item.id}
                      value={opt}
                      checked={selected === opt}
                      onChange={() => handleSelect(item.id, opt)}
                      className="mt-[2px]"
                    />
                    <span
                      className={getOptionClass(item, selected, opt)}
                    >
                      {opt}. {getOptionText(item, opt)}
                    </span>
                  </label>
                ))}
              </div>

              {/* Giải thích */}
              {checked && item.explanation && (
                <p className="mt-2 text-sm text-slate-700 italic">
                  {item.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
        <button
          type="button"
          onClick={handleSubmit}
          className="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold text-base"
        >
          Submit
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-base font-medium"
        >
          Làm lại
        </button>

        {score !== null && (
          <p className="text-base font-semibold text-slate-900">
            Kết quả:{" "}
            <span className="text-green-700">
              {score}/{dataset.items.length}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default MultipleChoiceGame;

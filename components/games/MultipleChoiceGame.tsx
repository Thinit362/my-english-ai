"use client";

import React, { useState } from "react";

export interface MultipleChoiceItem {
  id: string;
  question: string;          // câu hỏi / câu có chỗ trống
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correct: "A" | "B" | "C" | "D";
  explanation?: string;      // giải thích hiện sau khi chấm
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

  const optionClass = (
    item: MultipleChoiceItem,
    selected: string | undefined,
    opt: "A" | "B" | "C" | "D"
  ) => {
    if (!checked) return "";
    if (item.correct === opt) return "text-green-600 font-semibold";
    if (selected === opt && item.correct !== opt)
      return "text-red-600 font-semibold";
    return "";
  };

  return (
    <div className="rounded-xl border border-amber-200 bg-orange-50 p-4 md:p-6">
      <h2 className="font-semibold text-lg mb-2">{dataset.title}</h2>

      {(dataset.instructionsEn || dataset.instructionsVi) && (
        <div className="text-sm text-slate-700 mb-4">
          {dataset.instructionsEn && (
            <p className="font-semibold text-blue-700">
              {dataset.instructionsEn}
            </p>
          )}
          {dataset.instructionsVi && (
            <p className="italic text-orange-700">
              {dataset.instructionsVi}
            </p>
          )}
        </div>
      )}

      {dataset.items.map((item, index) => {
        const selected = answers[item.id];

        return (
          <div
            key={item.id}
            className="mb-4 p-3 rounded-lg bg-white shadow-sm border border-slate-200"
          >
            {/* STT */}
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 flex items-center justify-center bg-amber-200 rounded font-semibold">
                {index + 1}.
              </span>
            </div>

            {/* Câu hỏi */}
            <p className="mb-2 text-sm text-slate-800 whitespace-pre-line">
              {item.question}
            </p>

            {/* Các lựa chọn */}
            <div className="space-y-1 text-sm">
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
                  />
                  <span
                    className={optionClass(item, selected, opt)}
                  >
                    {opt}.{" "}
                    {opt === "A"
                      ? item.optionA
                      : opt === "B"
                      ? item.optionB
                      : opt === "C"
                      ? item.optionC
                      : item.optionD}
                  </span>
                </label>
              ))}
            </div>

            {/* Lời giải – hiện sau khi Submit */}
            {checked && item.explanation && (
              <p className="mt-2 text-xs text-slate-700 italic">
                {item.explanation}
              </p>
            )}
          </div>
        );
      })}

      {/* Nút Submit / Làm lại / Kết quả */}
      <div className="mt-4 flex flex-col md:flex-row gap-3 items-center">
        <button
          type="button"
          onClick={handleSubmit}
          className="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold"
        >
          Submit
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-medium"
        >
          Làm lại
        </button>

        {score !== null && (
          <p className="ml-0 md:ml-4 text-sm font-semibold text-slate-800">
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

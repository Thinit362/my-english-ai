"use client";

import React, { useState } from "react";

interface ListenChooseItem {
  id: string;
  audio: string;    // link file audio
  question: string; // câu hỏi
  optionA: string;
  optionB: string;
  correct: "A" | "B";
}

export interface ListenChooseDataset {
  id: string;
  title: string;
  items: ListenChooseItem[];
}

interface Props {
  dataset: ListenChooseDataset;
}

const ListenChooseGame: React.FC<Props> = ({ dataset }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleSelect = (id: string, choice: string) => {
    setAnswers((prev) => ({ ...prev, [id]: choice }));
  };

  const handleSubmit = () => {
    let correct = 0;

    dataset.items.forEach((item) => {
      if (answers[item.id] === item.correct) correct++;
    });

    setScore(correct);
    setChecked(true);
  };

  const handleReset = () => {
    setAnswers({});
    setChecked(false);
    setScore(null);
  };

  return (
    <div className="rounded-xl border border-amber-200 bg-orange-50 p-4 md:p-6">
      <h2 className="font-semibold text-lg mb-4">{dataset.title}</h2>

      {dataset.items.map((item, index) => {
        const selected = answers[item.id];
        const isCorrect = checked && selected === item.correct;

        return (
          <div key={item.id} className="mb-4 p-3 rounded-lg bg-white shadow">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 flex items-center justify-center bg-amber-200 rounded font-semibold">
                {index + 1}.
              </span>
              <audio controls src={item.audio} className="h-8" />
            </div>

            <p className="mb-2">{item.question}</p>

            <div className="space-y-1">
              {/* Option A */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={item.id}
                  value="A"
                  checked={selected === "A"}
                  onChange={() => handleSelect(item.id, "A")}
                />
                <span
                  className={`${
                    checked
                      ? item.correct === "A"
                        ? "text-green-600 font-semibold"
                        : selected === "A"
                        ? "text-red-600 font-semibold"
                        : ""
                      : ""
                  }`}
                >
                  A. {item.optionA}
                </span>
              </label>

              {/* Option B */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={item.id}
                  value="B"
                  checked={selected === "B"}
                  onChange={() => handleSelect(item.id, "B")}
                />
                <span
                  className={`${
                    checked
                      ? item.correct === "B"
                        ? "text-green-600 font-semibold"
                        : selected === "B"
                        ? "text-red-600 font-semibold"
                        : ""
                      : ""
                  }`}
                >
                  B. {item.optionB}
                </span>
              </label>
            </div>
          </div>
        );
      })}

      <div className="mt-4 flex gap-3">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold"
        >
          Submit
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-lg bg-slate-200"
        >
          Làm lại
        </button>

        {score !== null && (
          <p className="ml-3 font-semibold text-slate-700">
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

export default ListenChooseGame;

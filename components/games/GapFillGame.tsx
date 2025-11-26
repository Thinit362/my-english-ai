"use client";

import React, { useMemo, useState } from "react";

interface Props {
  datasetId: string;
}

/** ===== Kiểu dataset dùng chung cho mọi bài gap-fill ===== */

export interface GapFillItem {
  id: string;
  // Câu có ký hiệu ___ là chỗ trống
  sentence: string;
  // Đáp án đúng (hoặc nhiều đáp án)
  answers: string[]; // luôn lưu dạng chữ thường, không khoảng trắng thừa
}

export interface GapFillDataset {
  id: string;
  title: string;
  instructionsEn?: string;
  instructionsVi?: string;
  // list động từ / cụm từ cho sẵn phía trên
  givenWords: string[];
  items: GapFillItem[];
}

/**
 * Tạm thời: chưa import dữ liệu thật, nên DATASETS rỗng.
 * Sau này bạn chỉ cần:
 *   import { en10u1g1ex4 } from "@/content/practice/gapFill/en10.u1.g1.ex4";
 *   const DATASETS: Record<string, GapFillDataset> = {
 *     "en10.u1.g1.ex4": en10u1g1ex4,
 *   };
 */
const DATASETS: Record<string, GapFillDataset> = {};

const GapFillGame: React.FC<Props> = ({ datasetId }) => {
  const dataset = DATASETS[datasetId];

  // Nếu chưa cấu hình dataset → báo nhẹ để build không lỗi
  if (!dataset) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-orange-50 p-4">
        <p className="font-semibold text-slate-800 mb-1">
          Chưa cấu hình dữ liệu cho bài tập này.
        </p>
        <p className="text-sm text-slate-600">
          Hãy tạo file dataset và map vào <code>DATASETS</code> trong
          <code>GapFillGame.tsx</code>.
        </p>
      </div>
    );
  }

  // state lưu câu trả lời người học
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const normalisedAnswers = useMemo(() => {
    const map: Record<string, string[]> = {};
    dataset.items.forEach((item) => {
      map[item.id] = item.answers.map((a) => a.trim().toLowerCase());
    });
    return map;
  }, [dataset.items]);

  const handleChange = (itemId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [itemId]: value }));
  };

  const handleSubmit = () => {
    let correct = 0;

    dataset.items.forEach((item) => {
      const userRaw = answers[item.id] ?? "";
      const user = userRaw.trim().toLowerCase();
      if (!user) return;

      const valid = normalisedAnswers[item.id] || [];
      if (valid.includes(user)) correct++;
    });

    setScore(correct);
    setChecked(true);
  };

  const handleReset = () => {
    setAnswers({});
    setChecked(false);
    setScore(null);
  };

  const getItemStatus = (item: GapFillItem) => {
    if (!checked) return "normal" as const;
    const user = (answers[item.id] ?? "").trim().toLowerCase();
    if (!user) return "normal" as const;
    const valid = normalisedAnswers[item.id] || [];
    return valid.includes(user) ? ("correct" as const) : ("incorrect" as const);
  };

  return (
    <div className="rounded-2xl border border-amber-200 bg-orange-50 p-4 md:p-6">
      <h2 className="font-semibold text-lg mb-2">{dataset.title}</h2>

      {(dataset.instructionsEn || dataset.instructionsVi) && (
        <div className="text-sm text-slate-700 mb-4">
          {dataset.instructionsEn && (
            <p className="font-semibold text-blue-700">
              {dataset.instructionsEn}
            </p>
          )}
          {dataset.instructionsVi && (
            <p className="italic text-orange-700">{dataset.instructionsVi}</p>
          )}
        </div>
      )}

      {/* Dòng động từ cho sẵn */}
      <div className="flex flex-wrap gap-2 mb-4">
        {dataset.givenWords.map((w) => (
          <span
            key={w}
            className="px-3 py-1 rounded-full border border-slate-300 bg-white text-sm shadow-sm"
          >
            {w}
          </span>
        ))}
      </div>

      {/* Danh sách câu */}
      <div className="space-y-3">
        {dataset.items.map((item, index) => {
          const status = getItemStatus(item);
          const parts = item.sentence.split("___");
          const value = answers[item.id] ?? "";

          let inputClass =
            "border-b border-slate-400 px-2 py-0.5 min-w-[120px] outline-none bg-transparent";
          if (status === "correct") {
            inputClass += " border-emerald-500 text-emerald-700 font-semibold";
          } else if (status === "incorrect") {
            inputClass += " border-red-500 text-red-700 font-semibold";
          }

          return (
            <div
              key={item.id}
              className="flex items-start gap-2 text-sm text-slate-800"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-amber-200 rounded-md font-semibold">
                {index + 1}.
              </div>
              <div className="flex-1">
                <p>
                  {parts[0]}
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(item.id, e.target.value)}
                    className={inputClass}
                  />
                  {parts[1] ?? ""}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Nút Submit / Làm lại + điểm */}
      <div className="mt-6 flex flex-col md:flex-row items-center gap-3">
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

export default GapFillGame;

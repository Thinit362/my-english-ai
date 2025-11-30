"use client";

import React, { useMemo, useState } from "react";
import {
  en10u1v2ex1,
  DragFillDataset,
} from "@/content/practice/dragFill/en10.u1.v2.ex1";

interface Props {
  datasetId: string;
}

// Map id -> dataset
const DATASETS: Record<string, DragFillDataset> = {
  "en10.u1.v2.ex1": en10u1v2ex1,
};

type SlotState = {
  itemId: string;
  phrase: string | null;
};

const DragFillGame: React.FC<Props> = ({ datasetId }) => {
  const dataset = DATASETS[datasetId];

  const [slots, setSlots] = useState<SlotState[]>(
    dataset ? dataset.items.map((it) => ({ itemId: it.id, phrase: null })) : []
  );
  const [selectedPhrase, setSelectedPhrase] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const usedPhrases = useMemo(
    () => new Set(slots.map((s) => s.phrase).filter(Boolean) as string[]),
    [slots]
  );

  if (!dataset) {
    return <p>Chưa có dữ liệu cho bài tập này.</p>;
  }

  const handlePhraseClick = (phrase: string) => {
    setSelectedPhrase((prev) => (prev === phrase ? null : phrase));
  };

  const handleSlotClick = (itemId: string) => {
    if (!selectedPhrase) return;

    setSlots((prev) =>
      prev.map((s) =>
        s.itemId === itemId ? { ...s, phrase: selectedPhrase } : s
      )
    );
    setSelectedPhrase(null);
  };

  const handleSubmit = () => {
    let correct = 0;
    dataset.items.forEach((item) => {
      const slot = slots.find((s) => s.itemId === item.id);
      if (slot && slot.phrase === item.answer) correct++;
    });
    setScore(correct);
    setChecked(true);
  };

  const handleReset = () => {
    setSlots((prev) => prev.map((s) => ({ ...s, phrase: null })));
    setSelectedPhrase(null);
    setChecked(false);
    setScore(null);
  };

  const getSlotStatus = (itemId: string) => {
    if (!checked) return "normal" as const;
    const item = dataset.items.find((i) => i.id === itemId);
    const slot = slots.find((s) => s.itemId === itemId);
    if (!item || !slot || !slot.phrase) return "normal" as const;
    return slot.phrase === item.answer ? "correct" : "incorrect";
  };

  return (
    <div className="rounded-2xl border border-amber-200 bg-orange-50 p-4 md:p-6">
      <h2 className="font-semibold text-lg mb-2">{dataset.title}</h2>

      {dataset.instructionsEn || dataset.instructionsVi ? (
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
      ) : null}

      {/* cụm từ cho sẵn */}
      <div className="mb-4">
        <p className="text-sm text-slate-700 mb-2">
          (Chọn cụm từ rồi bấm vào ô trống để điền.)
        </p>
        <div className="flex flex-wrap gap-2">
          {dataset.phrases.map((ph) => {
            const isUsed = usedPhrases.has(ph);
            const isSelected = selectedPhrase === ph;
            let className =
              "px-3 py-1.5 rounded-full border text-sm cursor-pointer transition bg-white border-amber-300 shadow-sm";

            if (isSelected) {
              className += " bg-orange-500 text-white border-orange-500";
            } else if (isUsed) {
              className += " bg-slate-100 text-slate-400 border-slate-200";
            }

            return (
              <button
                key={ph}
                type="button"
                className={className}
                onClick={() => handlePhraseClick(ph)}
              >
                {ph}
              </button>
            );
          })}
        </div>
      </div>

      {/* các câu */}
      <div className="space-y-3">
        {dataset.items.map((item, index) => {
          const slot = slots.find((s) => s.itemId === item.id);
          const status = getSlotStatus(item.id);

          let slotClass =
            "inline-block min-w-[160px] px-2 py-1 border border-dashed rounded bg-white text-sm cursor-pointer text-center align-middle";

          if (status === "correct") {
            slotClass =
              "inline-block min-w-[160px] px-2 py-1 rounded bg-emerald-100 border border-emerald-500 text-emerald-800 text-sm cursor-default text-center align-middle";
          } else if (status === "incorrect") {
            slotClass =
              "inline-block min-w-[160px] px-2 py-1 rounded bg-red-100 border border-red-500 text-red-800 text-sm cursor-pointer text-center align-middle";
          }

          const parts = item.sentence.split("___");

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
                  <button
                    type="button"
                    className={slotClass}
                    onClick={() => handleSlotClick(item.id)}
                  >
                    {slot?.phrase ?? " ? "}
                  </button>
                  {parts[1] ?? ""}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* nút submit / reset */}
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

export default DragFillGame;

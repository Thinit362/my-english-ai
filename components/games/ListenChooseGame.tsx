"use client";

import React, { useState } from "react";

interface ListenChooseItem {
  id: string;
  question: string; // câu hiển thị (có thể có hoặc không có ______)
  optionA: string;
  optionB: string;
  correct: "A" | "B";
}

interface ListenChooseDataset {
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
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleSelect = (id: string, choice: "A" | "B") => {
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

  // 🔊 GOOGLE TTS – Unit 1: đọc cả câu + từ; Unit 2,3: chỉ đọc từ đúng
  const playAudio = async (item: ListenChooseItem) => {
    try {
      setLoadingId(item.id);

      // 1) Từ đúng
      const correctWord =
        item.correct === "A" ? item.optionA : item.optionB;

      // 2) Quyết định text cần đọc:
      //    - Nếu câu có "______" (Unit 1) -> thay bằng từ đúng => đọc CẢ CÂU
      //    - Nếu không (Unit 2,3)         -> chỉ đọc MỖI TỪ đúng
      let textToSpeak: string;

      if (item.question.includes("______")) {
        // Unit 1 style
        textToSpeak = item.question.replace("______", correctWord);
      } else {
        // Unit 2,3 style
        textToSpeak = correctWord;
      }

      textToSpeak = textToSpeak.replace(/\s+/g, " ").trim();
      if (!textToSpeak) {
        console.error("No text to speak");
        setLoadingId(null);
        return;
      }

      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: textToSpeak,
          languageCode: "en-US",
          voice: "en-US-Wavenet-D",
        }),
      });

      if (!res.ok) {
        console.error("TTS error");
        setLoadingId(null);
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.play();
      audio.onended = () => URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Play error:", err);
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="rounded-xl border border-amber-200 bg-orange-50 p-4 md:p-6">
      <h2 className="font-semibold text-lg mb-4">{dataset.title}</h2>

      {dataset.items.map((item, index) => {
        const selected = answers[item.id];
        return (
          <div
            key={item.id}
            className="mb-4 p-3 rounded-lg bg-white shadow-sm border border-slate-200"
          >
            {/* Số thứ tự + nút nghe */}
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-8 flex items-center justify-center bg-amber-200 rounded font-semibold">
                {index + 1}.
              </span>

              <button
                type="button"
                onClick={() => playAudio(item)}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
                disabled={loadingId === item.id}
              >
                {loadingId === item.id ? "Đang phát..." : "🔊 Nghe"}
              </button>
            </div>

            {/* Câu hỏi */}
            <p className="mb-2 text-sm text-slate-800">{item.question}</p>

            {/* Lựa chọn A / B */}
            <div className="space-y-1 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={item.id}
                  value="A"
                  checked={selected === "A"}
                  onChange={() => handleSelect(item.id, "A")}
                />
                <span
                  className={
                    checked && item.correct === "A"
                      ? "text-green-600 font-semibold"
                      : checked && selected === "A" && item.correct !== "A"
                      ? "text-red-600 font-semibold"
                      : ""
                  }
                >
                  A. {item.optionA}
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={item.id}
                  value="B"
                  checked={selected === "B"}
                  onChange={() => handleSelect(item.id, "B")}
                />
                <span
                  className={
                    checked && item.correct === "B"
                      ? "text-green-600 font-semibold"
                      : checked && selected === "B" && item.correct !== "B"
                      ? "text-red-600 font-semibold"
                      : ""
                  }
                >
                  B. {item.optionB}
                </span>
              </label>
            </div>
          </div>
        );
      })}

      <div className="mt-4 flex flex-col md:flex-row gap-3 items-center">
        <button
          type="button"
          onClick={handleSubmit}
          className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold"
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

export default ListenChooseGame;

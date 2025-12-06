"use client";

import React, { useState } from "react";

interface ListenChooseItem {
  id: string;
  question: string; // câu hiển thị (có thể có hoặc không có ______)
  optionA: string;
  optionB: string;
  optionC?: string; // dùng cho bài có 3 lựa chọn (Unit 6)
  correct: "A" | "B" | "C";
  word?: string; // từ cần phát âm (word stress,…)
  explanation?: string; // lời giải thích hiển thị sau khi chấm
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

  const handleSelect = (id: string, choice: "A" | "B" | "C") => {
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

  // 🔊 TTS dùng Web Speech API (giọng nữ, Anh Mỹ, đọc chậm & rõ hơn)
  const playAudio = (item: ListenChooseItem) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      console.error("Trình duyệt không hỗ trợ SpeechSynthesis");
      return;
    }

    setLoadingId(item.id);

    // 1) Lấy từ đúng từ A/B/C
    let correctWord = "";
    if (item.correct === "A") correctWord = item.optionA;
    else if (item.correct === "B") correctWord = item.optionB;
    else if (item.correct === "C" && item.optionC) correctWord = item.optionC;

    // 2) Xác định text cần đọc
    let textToSpeak = "";

    // ✅ Sửa ở đây: bắt mọi cụm gạch dưới liên tiếp (_ , __ , ______ , …)
    const hasBlank = /_+/.test(item.question);

    if (hasBlank) {
      const wordToInsert = item.word || correctWord;
      if (wordToInsert) {
        // Thay TẤT CẢ các cụm gạch dưới bằng từ cần điền
        textToSpeak = item.question.replace(/_+/g, wordToInsert);
      } else {
        // Nếu không có từ nào để chèn, bỏ luôn gạch dưới cho sạch
        textToSpeak = item.question.replace(/_+/g, "");
      }
    } else if (item.word) {
      // Câu không có "______" nhưng có word → đọc từ (dùng cho bài kiểu word stress)
      textToSpeak = item.word;
    } else {
      // fallback cuối cùng: đọc từ đúng theo đáp án A/B/C
      textToSpeak = correctWord;
    }

    textToSpeak = textToSpeak.replace(/\s+/g, " ").trim();
    if (!textToSpeak) {
      console.error("No text to speak");
      setLoadingId(null);
      return;
    }

    // 3) Gọi Web Speech API với cấu hình giọng & tốc độ mới
    const synth = window.speechSynthesis;
    synth.cancel(); // dừng mọi giọng đang đọc

    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    // 👉 Cố định ngôn ngữ: Anh Mỹ
    utterance.lang = "en-US";

    // 👉 Đọc chậm & rõ hơn
    utterance.rate = 0.8;   // chậm lại cho học sinh nghe rõ
    utterance.pitch = 1.0;  // cao độ bình thường
    utterance.volume = 1.0; // âm lượng tối đa

    // 👉 Chọn giọng nữ Anh Mỹ nếu có
    try {
      const voices = synth.getVoices();

      const preferredVoiceNames = [
        "Google US English",
        "Google US English Female",
        "Microsoft Aria Online (Natural) - English (United States)",
        "Microsoft Jenny Online (Natural) - English (United States)",
        "Microsoft Zira Desktop - English (United States)",
      ];

      let selectedVoice =
        voices.find((v) => preferredVoiceNames.includes(v.name)) ||
        voices.find(
          (v) => v.lang === "en-US" && v.name.toLowerCase().includes("female")
        ) ||
        voices.find((v) => v.lang === "en-US") ||
        null;

      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
    } catch (e) {
      console.warn("Không lấy được danh sách voice, dùng voice mặc định.", e);
    }

    utterance.onend = () => {
      setLoadingId(null);
    };
    utterance.onerror = (e) => {
      console.error("Speech error:", e);
      setLoadingId(null);
    };

    synth.speak(utterance);
  };

  return (
    <div className="rounded-xl border border-amber-200 bg-orange-50 p-4 md:p-6">
      <h2 className="font-semibold text-lg mb-4">{dataset.title}</h2>

      {dataset.items.map((item, index) => {
        const selected = answers[item.id];

        const optionClass = (opt: "A" | "B" | "C") => {
          if (!checked) return "";
          if (item.correct === opt) return "text-green-600 font-semibold";
          if (selected === opt && item.correct !== opt)
            return "text-red-600 font-semibold";
          return "";
        };

        return (
          <div
            key={item.id}
            className="mb-4 p-3 rounded-lg bg-white shadow-sm border border-slate-200"
          >
            {/* STT + Nút nghe */}
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

            {/* Lựa chọn A / B / C */}
            <div className="space-y-1 text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={item.id}
                  value="A"
                  checked={selected === "A"}
                  onChange={() => handleSelect(item.id, "A")}
                />
                <span className={optionClass("A")}>A. {item.optionA}</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={item.id}
                  value="B"
                  checked={selected === "B"}
                  onChange={() => handleSelect(item.id, "B")}
                />
                <span className={optionClass("B")}>B. {item.optionB}</span>
              </label>

              {item.optionC && (
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name={item.id}
                    value="C"
                    checked={selected === "C"}
                    onChange={() => handleSelect(item.id, "C")}
                  />
                  <span className={optionClass("C")}>C. {item.optionC}</span>
                </label>
              )}
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

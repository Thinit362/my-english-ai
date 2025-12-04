"use client";

import React, { useMemo, useState } from "react";
import {
  u1V1Ex1Data,
  VocabTriple,
} from "@/content/practice/vocab/en10.u1.v1.ex1";
import { u3V2Ex2Data } from "@/content/practice/vocab/en10.u3.v2.ex2";

interface Props {
  datasetId: string; // nhận id để chọn bộ dữ liệu
}

// Map datasetId -> dữ liệu (sau này có thể thêm nhiều bộ khác)
const DATASETS: Record<string, VocabTriple[]> = {
  "en10.u1.v1.ex1": u1V1Ex1Data,
  "en10.u3.v2.ex2": u3V2Ex2Data,
};

type CardKind = "audio" | "meaning" | "type";

type Card = {
  id: string;
  kind: CardKind;
  wordId?: string;    // dùng cho audio + meaning
  label?: string;     // text hiển thị
  typeLabel?: string; // dùng cho card loại từ
};

const FlashAudioMatchGame: React.FC<Props> = ({ datasetId }) => {
  const words = DATASETS[datasetId] || [];

  // Lấy danh sách loại từ duy nhất (Verb phrase, Verb, Noun phrase, ...)
  const typeLabels = useMemo(
    () => Array.from(new Set(words.map((w) => w.typeLabel))),
    [words]
  );

  // Tạo bộ thẻ:
  //  - mỗi từ: 1 audio + 1 meaning
  //  - mỗi loại từ: 1 card type dùng chung
  const cards: Card[] = useMemo(() => {
    const base: Card[] = [];

    words.forEach((w) => {
      base.push(
        { id: `${w.id}-audio`, kind: "audio", wordId: w.id },
        {
          id: `${w.id}-meaning`,
          kind: "meaning",
          wordId: w.id,
          label: w.vi,
        }
      );
    });

    typeLabels.forEach((t, idx) => {
      base.push({
        id: `type-${idx}`,
        kind: "type",
        typeLabel: t,
        label: t,
      });
    });

    // Xáo trộn
    return base
      .map((c) => ({ ...c, sortKey: Math.random() }))
      .sort((a, b) => a.sortKey - b.sortKey)
      .map(({ sortKey, ...rest }) => rest);
  }, [words, typeLabels]);

  const [selected, setSelected] = useState<Card[]>([]);
  const [errorIds, setErrorIds] = useState<Set<string>>(new Set());
  const [message, setMessage] = useState<string>("");
  const [passedWordIds, setPassedWordIds] = useState<Set<string>>(new Set());

  const passedCount = passedWordIds.size;

  const handleCardClick = (card: Card) => {
    // Ô thuộc về từ đã qua → nghĩa không cho bấm nữa
    if (card.kind === "meaning" && card.wordId && passedWordIds.has(card.wordId)) {
      return;
    }

    setMessage("");

    // 1. Ô audio: chỉ phát âm, không tính chọn
    if (card.kind === "audio" && card.wordId) {
      const word = words.find((w) => w.id === card.wordId);
      if (word && typeof window !== "undefined") {
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(word.audioText || word.en);
        utt.lang = "en-US";
        window.speechSynthesis.speak(utt);
      }
      return;
    }

    // 2. Nghĩa / Loại từ → dùng để ghép cặp
    let next = [...selected, card];

    // Chỉ giữ tối đa 2 ô được chọn (nghĩa + loại từ)
    if (next.length > 2) {
      next = [card];
    }

    setSelected(next);

    if (next.length === 2) {
      checkPair(next);
    }
  };

  const playErrorSound = () => {
    if (typeof window === "undefined") return;
    try {
      const utt = new SpeechSynthesisUtterance("Try again");
      utt.lang = "en-US";
      window.speechSynthesis.speak(utt);
    } catch {
      // bỏ qua nếu không hỗ trợ
    }
  };

  const checkPair = (pair: Card[]) => {
    const kinds = new Set(pair.map((c) => c.kind));
    const hasMeaning = kinds.has("meaning");
    const hasType = kinds.has("type");

    if (!hasMeaning || !hasType) {
      // phải là 1 nghĩa + 1 loại
      setErrorIds(new Set(pair.map((c) => c.id)));
      setMessage("❌ Bạn cần chọn 1 ô nghĩa và 1 ô từ loại.");
      playErrorSound();
      setTimeout(() => {
        setErrorIds(new Set());
        setSelected([]);
      }, 700);
      return;
    }

    const meaningCard = pair.find((c) => c.kind === "meaning");
    const typeCard = pair.find((c) => c.kind === "type");

    if (!meaningCard || !typeCard || !meaningCard.wordId) {
      return;
    }

    const word = words.find((w) => w.id === meaningCard.wordId);
    const correctTypeLabel = word?.typeLabel;

    if (word && correctTypeLabel && typeCard.typeLabel === correctTypeLabel) {
      // ✅ ĐÚNG: nghĩa thuộc từ X và loại từ cũng khớp
      setMessage("✅ Tuyệt lắm! Bạn đã ghép đúng.");
      setPassedWordIds((prev) => new Set(prev).add(word.id));
      setSelected([]);
    } else {
      // ❌ SAI
      setErrorIds(new Set(pair.map((c) => c.id)));
      setMessage("❌ Chưa đúng. Hãy thử lại.");
      playErrorSound();
      setTimeout(() => {
        setErrorIds(new Set());
        setSelected([]);
      }, 700);
    }
  };

  const isSelected = (card: Card) =>
    selected.some((c) => c.id === card.id);

  if (!words.length) {
    return <p>Chưa có dữ liệu cho bài tập này.</p>;
  }

  return (
    <div className="rounded-2xl border border-amber-200 bg-orange-50 p-4 md:p-6">
      <h2 className="font-semibold text-lg mb-2">
        Bài tập 1: Hãy nghe và nối từ với nghĩa và từ loại tương ứng.
      </h2>

      <div className="text-sm text-slate-700 mb-4">
        <p className="font-semibold mb-1">Trong bài này, bạn phải chọn 3 ô:</p>
        <ol className="list-decimal list-inside space-y-0.5">
          <li>Ô đầu là một ô có biểu tượng loa 🔊 để nghe từ.</li>
          <li>Tiếp theo là ô chứa nghĩa tiếng Việt của từ bạn vừa nghe.</li>
          <li>Cuối cùng là một ô chứa loại từ (Verb, Verb phrase, Noun phrase,…).</li>
        </ol>
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-4">
        {/* Lưới thẻ bên trái */}
        <div className="flex-1">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {cards.map((card) => {
              const isError = errorIds.has(card.id);
              const isSolvedWord =
                card.wordId && passedWordIds.has(card.wordId);

              const base =
                "h-24 md:h-28 rounded-xl border flex items-center justify-center text-center px-2 text-sm cursor-pointer transition shadow-sm";

              let className = base + " bg-white border-amber-300";

              if (card.kind === "audio") {
                className +=
                  " bg-sky-50 border-sky-300 text-sky-700 text-2xl font-bold";
                if (isSolvedWord) {
                  className += " opacity-60";
                }
              }

              if (card.kind === "meaning") {
                if (isSolvedWord) {
                  className +=
                    " bg-emerald-100 border-emerald-500 text-emerald-800 cursor-default";
                }
              }

              if (card.kind === "type") {
                className += " bg-violet-50 border-violet-300";
              }

              if (isSelected(card)) {
                className += " ring-2 ring-orange-400 ring-offset-2";
              }

              if (isError) {
                className +=
                  " bg-red-100 border-red-500 text-red-800 animate-pulse";
              }

              const disabled =
                card.kind === "meaning" && card.wordId
                  ? passedWordIds.has(card.wordId)
                  : false;

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => handleCardClick(card)}
                  disabled={disabled}
                  className={className}
                >
                  {card.kind === "audio" ? (
                    <span role="img" aria-label="speaker">
                      🔊
                    </span>
                  ) : (
                    <span>{card.label}</span>
                  )}
                </button>
              );
            })}
          </div>

          {message && (
            <p className="mt-3 text-sm font-medium">
              {message}
            </p>
          )}
        </div>

        {/* Cột bên phải: Passed words */}
        <div className="w-full md:w-56 lg:w-64">
          <div className="border border-green-500 bg-white rounded-xl p-3 flex flex-col h-full">
            <div className="text-center mb-2">
              <p className="font-bold text-green-700">Passed words</p>
              <p className="text-xl font-extrabold text-red-600">
                {passedCount}/{words.length}
              </p>
            </div>

            <div className="flex-1 border-t border-slate-200 pt-2 text-xs space-y-1 overflow-auto">
              {words
                .filter((w) => passedWordIds.has(w.id))
                .map((w) => (
                  <div
                    key={w.id}
                    className="flex items-start gap-1 text-slate-700"
                  >
                    <span className="mt-[2px] text-emerald-500">✔</span>
                    <span>
                      <span className="font-semibold">{w.en}</span>
                      <span className="block text-[11px] text-slate-500">
                        {w.vi}
                      </span>
                    </span>
                  </div>
                ))}

              {passedCount === 0 && (
                <p className="text-slate-400 italic">
                  Chưa có từ nào được hoàn thành.
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  alert(
                    "Chức năng lưu từ vựng sẽ được bổ sung sau. Hiện tại bạn có thể chụp màn hình hoặc ghi chép lại các từ đã qua."
                  );
                }
              }}
              className="mt-3 w-full rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-1.5"
            >
              Save passed words
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashAudioMatchGame;

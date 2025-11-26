"use client";

import React, { useMemo, useState } from "react";
import {
  u1V1Ex1Data,
  VocabTriple,
} from "@/content/practice/vocab/en10.u1.v1.ex1";

interface Props {
  datasetId: string; // nhận id để chọn bộ dữ liệu
}

// Map datasetId -> dữ liệu (sau này có thể thêm nhiều bộ khác)
const DATASETS: Record<string, VocabTriple[]> = {
  "en10.u1.v1.ex1": u1V1Ex1Data,
};

type CardKind = "audio" | "meaning" | "type";

type Card = {
  id: string;
  wordId: string;
  kind: CardKind;
  label?: string;
};

const FlashAudioMatchGame: React.FC<Props> = ({ datasetId }) => {
  const words = DATASETS[datasetId] || [];

  // Tạo bộ thẻ (3 thẻ / 1 từ) và xáo trộn
  const cards: Card[] = useMemo(() => {
    const base: Card[] = [];
    words.forEach((w) => {
      base.push(
        { id: `${w.id}-audio`, wordId: w.id, kind: "audio" },
        { id: `${w.id}-meaning`, wordId: w.id, kind: "meaning", label: w.vi },
        {
          id: `${w.id}-type`,
          wordId: w.id,
          kind: "type",
          label: w.typeLabel,
        }
      );
    });

    return base
      .map((c) => ({ ...c, sortKey: Math.random() }))
      .sort((a, b) => a.sortKey - b.sortKey)
      .map(({ sortKey, ...rest }) => rest);
  }, [words]);

  const [selected, setSelected] = useState<Card[]>([]);
  const [correctIds, setCorrectIds] = useState<Set<string>>(new Set());
  const [errorIds, setErrorIds] = useState<Set<string>>(new Set());
  const [message, setMessage] = useState<string>("");

  // Tính số từ đã hoàn thành + danh sách để hiển thị bên phải
  const passedWordIds = useMemo(() => {
    const ids = new Set<string>();
    words.forEach((w) => {
      const audioId = `${w.id}-audio`;
      const meaningId = `${w.id}-meaning`;
      const typeId = `${w.id}-type`;
      if (
        correctIds.has(audioId) &&
        correctIds.has(meaningId) &&
        correctIds.has(typeId)
      ) {
        ids.add(w.id);
      }
    });
    return ids;
  }, [words, correctIds]);

  const passedCount = passedWordIds.size;

  const handleCardClick = (card: Card) => {
    if (correctIds.has(card.id)) return; // đã đúng thì không cho bấm nữa

    setMessage("");

    // Ô audio: phát âm
    if (card.kind === "audio") {
      const word = words.find((w) => w.id === card.wordId);
      if (word && typeof window !== "undefined") {
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(word.audioText || word.en);
        utt.lang = "en-US";
        window.speechSynthesis.speak(utt);
      }
      return;
    }

    // Chọn nghĩa / từ loại
    let next = [...selected, card];
    if (next.length > 3) next = [card];

    setSelected(next);

    if (next.length === 3) {
      checkTriple(next);
    }
  };

  const playErrorSound = () => {
    if (typeof window === "undefined") return;
    try {
      // dùng TTS nói "Try again" cho đơn giản
      const utt = new SpeechSynthesisUtterance("Try again");
      utt.lang = "en-US";
      window.speechSynthesis.speak(utt);
    } catch {
      // bỏ qua nếu không hỗ trợ
    }
  };

  const checkTriple = (triple: Card[]) => {
    const [a, b, c] = triple;
    const sameWord =
      a.wordId === b.wordId && b.wordId === c.wordId && a.wordId === c.wordId;
    const kinds = new Set(triple.map((t) => t.kind));
    const hasMeaning = kinds.has("meaning");
    const hasType = kinds.has("type");

    if (sameWord && hasMeaning && hasType && kinds.size === 2) {
      // ĐÚNG
      setMessage("✅ Tuyệt vời! Bạn đã ghép đúng 1 từ.");
      setCorrectIds((prev) => {
        const next = new Set(prev);
        triple.forEach((c) => next.add(c.id));
        return next;
      });
      setSelected([]);
    } else {
      // SAI
      setMessage("❌ Chưa đúng. Hãy thử lại.");
      setErrorIds(new Set(triple.map((t) => t.id)));
      playErrorSound();

      setTimeout(() => {
        setErrorIds(new Set());
        setSelected([]);
      }, 700);
    }
  };

  const isSelected = (card: Card) => selected.some((c) => c.id === card.id);

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
          <li>Ô đầu là 1 ô có hình loa bất kỳ để nghe từ.</li>
          <li>Tiếp theo là ô chứa nghĩa của từ bạn vừa nghe được.</li>
          <li>
            Cuối cùng là 1 ô chứa từ loại (danh từ, tính từ, động từ, …) của từ
            đã nghe.
          </li>
        </ol>
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-4">
        {/* Lưới thẻ bên trái */}
        <div className="flex-1">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {cards.map((card) => {
              const disabled = correctIds.has(card.id);
              const isError = errorIds.has(card.id);
              const base =
                "h-24 md:h-28 rounded-xl border flex items-center justify-center text-center px-2 text-sm cursor-pointer transition shadow-sm";

              let className = base + " bg-white border-amber-300";

              if (card.kind === "audio") {
                className +=
                  " bg-sky-50 border-sky-300 text-sky-700 text-2xl font-bold";
              }

              if (isSelected(card)) {
                className += " ring-2 ring-orange-400 ring-offset-2";
              }

              if (disabled) {
                className +=
                  " bg-emerald-100 border-emerald-500 text-emerald-800 cursor-default";
              }

              if (isError) {
                className +=
                  " bg-red-100 border-red-500 text-red-800 animate-pulse";
              }

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

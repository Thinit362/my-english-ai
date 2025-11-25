// components/games/FlashAudioMatchGame.tsx
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
  const [message, setMessage] = useState<string>("");

  const passedCount = useMemo(() => {
    const wordIds = new Set<string>();
    cards.forEach((c) => {
      if (correctIds.has(c.id)) {
        wordIds.add(c.wordId);
      }
    });
    return wordIds.size;
  }, [cards, correctIds]);

  const handleCardClick = (card: Card) => {
    if (correctIds.has(card.id)) return;

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

    let next = [...selected, card];
    if (next.length > 3) next = [card];

    setSelected(next);

    if (next.length === 3) {
      checkTriple(next);
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
      setMessage("✅ Tuyệt vời! Bạn đã ghép đúng 1 từ.");
      setCorrectIds((prev) => {
        const next = new Set(prev);
        triple.forEach((c) => next.add(c.id));
        return next;
      });
      setSelected([]);
    } else {
      setMessage("❌ Chưa đúng. Hãy thử lại.");
      setTimeout(() => setSelected([]), 800);
    }
  };

  const isSelected = (card: Card) =>
    selected.some((c) => c.id === card.id);

  if (!words.length) {
    return <p>Chưa có dữ liệu cho bài tập này.</p>;
  }

  return (
    <div>
      <p className="font-semibold mb-2">
        Bài tập 1: Hãy nghe và nối từ với nghĩa và từ loại tương ứng.
      </p>
      <p className="text-sm text-slate-600 mb-3">
        1) Bấm vào ô có biểu tượng loa 🔊 để nghe từ. <br />
        2) Chọn 1 ô nghĩa tiếng Việt phù hợp. <br />
        3) Chọn thêm 1 ô chứa từ loại của từ đó.
      </p>

      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-green-600">
          Passed words: {passedCount}/{words.length}
        </span>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
        {cards.map((card) => {
          const disabled = correctIds.has(card.id);
          let className =
            "h-24 md:h-28 rounded-xl border flex items-center justify-center text-center px-2 text-sm cursor-pointer transition bg-white border-slate-300";

          if (card.kind === "audio") className += " bg-sky-50";
          if (isSelected(card)) className += " ring-2 ring-orange-400";
          if (disabled) className += " opacity-40 cursor-default";

          return (
            <button
              key={card.id}
              type="button"
              onClick={() => handleCardClick(card)}
              disabled={disabled}
              className={className}
            >
              {card.kind === "audio" ? (
                <span className="text-2xl">🔊</span>
              ) : (
                <span>{card.label}</span>
              )}
            </button>
          );
        })}
      </div>

      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
};

export default FlashAudioMatchGame;

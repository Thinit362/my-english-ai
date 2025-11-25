// components/games/FlashAudioMatchGame.tsx
"use client";

import React, { useMemo, useState } from "react";
import { VocabTriple } from "@/content/practice/vocab/en10.u1.v1.ex1";
// nếu bạn có TTSPlay thì import vào:
// import TTSPlay from "@/components/TTSPlay";

type CardKind = "audio" | "meaning" | "type";

type Card = {
  id: string;        // id card, unique
  wordId: string;    // id của từ (để ghép bộ)
  kind: CardKind;
  label?: string;    // nội dung cho ô meaning / type
};

interface Props {
  words: VocabTriple[];
}

const FlashAudioMatchGame: React.FC<Props> = ({ words }) => {
  // tạo board 3*n ô: mỗi từ có 1 ô audio, 1 ô nghĩa, 1 ô từ loại
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
    // trộn ngẫu nhiên
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
      if (correctIds.has(c.id)) wordIds.add(c.wordId);
    });
    return wordIds.size;
  }, [cards, correctIds]);

  const handleCardClick = (card: Card) => {
    if (correctIds.has(card.id)) return; // đã làm đúng rồi, không cho chọn nữa

    setMessage("");

    // nếu là ô audio thì chỉ phát tiếng, không lưu vào selection
    if (card.kind === "audio") {
      const word = words.find((w) => w.id === card.wordId);
      // nếu có TTSPlay, bạn có thể tách ra component riêng.
      if (word) {
        // tạm demo: phát bằng SpeechSynthesis, bạn có thể thay bằng TTSPlay
        if (typeof window !== "undefined") {
          window.speechSynthesis.cancel();
          const utt = new SpeechSynthesisUtterance(word.en);
          utt.lang = "en-US";
          window.speechSynthesis.speak(utt);
        }
      }
      // đồng thời vẫn cho phép audio là 1 ô trong bộ 3 nếu bạn muốn,
      // nếu không muốn thì return tại đây.
      return;
    }

    // thêm card vào selection
    let next = [...selected, card];
    // chỉ giữ tối đa 2 ô nghĩa + type
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
    const correctKinds =
      kinds.has("meaning") && kinds.has("type") && kinds.size === 2;
    // ở đây mình cho bộ đúng là: 1 ô meaning + 1 ô type,
    // nếu bạn muốn bắt buộc thêm 1 ô audio thì chỉnh kinds cho phù hợp.

    if (sameWord && correctKinds) {
      setMessage("✅ Tuyệt vời! Bạn đã ghép đúng 1 từ.");
      setCorrectIds((prev) => {
        const next = new Set(prev);
        triple.forEach((c) => next.add(c.id));
        return next;
      });
      setSelected([]);
    } else {
      setMessage("❌ Chưa đúng. Hãy thử lại với bộ 3 khác.");
      // xoá selection sau 1 chút thời gian
      setTimeout(() => setSelected([]), 800);
    }
  };

  const isSelected = (card: Card) => selected.some((c) => c.id === card.id);

  return (
    <div>
      <p className="font-semibold mb-2">
        Bài tập 1: Hãy nghe và nối từ với nghĩa và từ loại tương ứng.
      </p>
      <p className="text-sm text-slate-600 mb-3">
        1) Bấm vào biểu tượng loa để nghe từ. <br />
        2) Chọn ô chứa nghĩa tiếng Việt. <br />
        3) Chọn thêm ô chứa từ loại (noun phrase, verb phrase, …) của từ đó.
      </p>

      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-green-600">
          Passed words: {passedCount}/{words.length}
        </span>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
        {cards.map((card) => {
          const disabled = correctIds.has(card.id);
          const baseStyle =
            "h-24 md:h-28 rounded-xl border flex items-center justify-center text-center px-2 text-sm cursor-pointer transition";
          let className = baseStyle + " bg-white border-slate-300";

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

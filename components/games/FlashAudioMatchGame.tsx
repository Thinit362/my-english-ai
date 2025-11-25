"use client";

import React, { useEffect, useState } from "react";
import { VocabTriple } from "@/content/practice/datasets/vocab.types";
import { loadDataset } from "@/content/practice/loader";

interface Props {
  datasetId: string; // 🟢 BẮT BUỘC phải có để fix lỗi
}

const FlashAudioMatchGame: React.FC<Props> = ({ datasetId }) => {
  const [words, setWords] = useState<VocabTriple[]>([]);

  useEffect(() => {
    const data = loadDataset(datasetId);
    if (data && Array.isArray(data)) {
      setWords(data);
    }
  }, [datasetId]);

  if (!words.length) {
    return <div>Không tải được dữ liệu bài tập.</div>;
  }

  return (
    <div>
      <h2 className="font-semibold text-lg mb-4">Flash Audio Match</h2>
      <p className="text-sm text-slate-500 mb-4">
        Nghe và chọn đúng nghĩa + từ loại.
      </p>

      {/* TODO: Game UI hoàn chỉnh */}
      <pre className="p-3 bg-slate-100 rounded-xl text-xs">
        {JSON.stringify(words, null, 2)}
      </pre>
    </div>
  );
};

export default FlashAudioMatchGame;

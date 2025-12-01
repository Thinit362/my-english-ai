// components/PracticeGameRenderer.tsx
"use client";

import React from "react";
import { PracticeTask } from "@/content/practice/types";
import FlashAudioMatchGame from "@/components/games/FlashAudioMatchGame";
import DragFillGame from "@/components/games/DragFillGame";
import GapFillGame from "@/components/games/GapFillGame"; // ✅ IMPORT MỚI
import ListenChooseGame from "@/components/games/ListenChooseGame";
import { LISTEN_CHOOSE_DATASETS } from "@/content/practice/listenChoose/datasets";
import { VOCAB_DATASETS } from "@/content/practice/vocab/datasets";
import RecordCompareGame from "./games/RecordCompareGame";

interface Props {
  task: PracticeTask;
}

const PracticeGameRenderer: React.FC<Props> = ({ task }) => {
  if (!task) {
    return (
      <div className="p-4 text-red-600">
        ❌ Không tải được bài tập. Vui lòng thử lại.
      </div>
    );
  }

  switch (task.gameType) {
    case "flash-audio-match":
      return <FlashAudioMatchGame datasetId={task.datasetId} />;

    case "drag-fill":
      return <DragFillGame datasetId={task.datasetId} />;

    case "gap-fill":
      return <GapFillGame datasetId={task.datasetId} />; 
    case "listen-choose":
      return (
        <ListenChooseGame
        dataset={LISTEN_CHOOSE_DATASETS[task.datasetId]}
        />
    );
    case "record-compare": {
  const ds = VOCAB_DATASETS[task.datasetId];
  if (!ds) {
    return (
      <p className="text-sm text-red-600">
        Không tìm thấy dữ liệu cho {task.datasetId}
      </p>
    );
  }
  return <RecordCompareGame dataset={ds} />;
}

    default:
      return (
        <div className="p-4 text-slate-600">
          <p className="font-semibold">
            ⚠ Dạng bài <code>{task.gameType}</code> chưa được hỗ trợ.
          </p>
          <p>Bạn hãy kiểm tra lại gameType trong dữ liệu của bài tập.</p>
        </div>
      );
  }
};

export default PracticeGameRenderer;

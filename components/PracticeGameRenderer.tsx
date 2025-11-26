// components/PracticeGameRenderer.tsx
"use client";

import React from "react";
import { PracticeTask } from "@/content/practice/types";
import FlashAudioMatchGame from "@/components/games/FlashAudioMatchGame";

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
      return <FlashAudioMatchGame datasetId={task.datasetId} />
    case "drag-fill":
      return <DragFillGame datasetId={task.datasetId} />;
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

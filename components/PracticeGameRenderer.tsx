// components/PracticeGameRenderer.tsx
"use client";

import React from "react";
import { PracticeTask } from "@/content/practice/types";
import FlashAudioMatchGame from "@/components/games/FlashAudioMatchGame";

interface Props {
  task: PracticeTask;
}

const PracticeGameRenderer: React.FC<Props> = ({ task }) => {
  switch (task.gameType) {
    case "flash-audio-match":
      return <FlashAudioMatchGame datasetId={task.datasetId} />;

    default:
      return (
        <div>
          Dạng bài <code>{task.gameType}</code> hiện chưa được hỗ trợ.
        </div>
      );
  }
};

export default PracticeGameRenderer;

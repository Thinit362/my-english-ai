// content/practice/loader.ts
import { PracticeTask, SectionKey } from "./types";

export function loadPracticeTasks(
  unit: number,
  sectionKey: SectionKey
): PracticeTask[] {
  const tasks: PracticeTask[] = [];

  // Unit 1 — Vocabulary-1 — Bài 1: Flash Audio Match
  if (unit === 1 && sectionKey === "vocabulary-1") {
    tasks.push({
      id: "ex1",
      title: "Bài tập 1",
      description: "Nghe và nối từ với nghĩa và từ loại tương ứng.",
      gameType: "flash-audio-match",
      datasetId: "en10.u1.v1.ex1",
    });
  }

  return tasks;
}

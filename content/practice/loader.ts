// content/practice/loader.ts
import { PracticeTask, SectionKey } from "./types";

// HÀM CHÍNH: dùng cho toàn bộ hệ thống
export function getPracticeTasks(
  unit: number,
  sectionKey: SectionKey
): PracticeTask[] {
  const tasks: PracticeTask[] = [];

  // Unit 1 — Vocabulary 1 — Bài tập 1 (flash card)
  if (unit === 1 && sectionKey === "vocabulary-1") {
    tasks.push({
      id: "u1-v1-ex1",
      title: "Bài tập 1",
      description: "Nghe và nối từ với nghĩa và từ loại tương ứng.",
      gameType: "flash-audio-match",
      datasetId: "en10.u1.v1.ex1",
    });
  }

  // Sau này bạn chỉ việc thêm else-if cho các unit / section khác
  // if (unit === 1 && sectionKey === "vocabulary-2") { ... }
  // if (unit === 2 && sectionKey === "grammar-1") { ... }

  return tasks;
}

// Alias để nếu chỗ nào lỡ dùng loadPracticeTasks vẫn không lỗi
export const loadPracticeTasks = getPracticeTasks;

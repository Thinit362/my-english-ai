// content/practice/loader.ts
import { PracticeTask, SectionKey } from "./types";

/**
 * Mỗi task trong ALL_TASKS mang theo unit + section
 * để PracticePage lọc theo đường dẫn /unit/[unit]/[practiceSlug]
 */
type TaskConfig = PracticeTask & {
  unit: number;
  section: SectionKey;
};

// =====================
// DANH SÁCH TẤT CẢ BÀI TẬP
// =====================
const ALL_TASKS: TaskConfig[] = [
  // -----------------------------
  // UNIT 1 — VOCABULARY 1 — Bài 1
  // -----------------------------
  {
    id: "u1-v1-ex1",
    unit: 1,
    section: "vocabulary-1",
    title: "Bài tập 1",
    description: "Nghe và nối từ với nghĩa và từ loại tương ứng.",
    gameType: "flash-audio-match",
    datasetId: "en10.u1.v1.ex1",
  },

  // -----------------------------
  // UNIT 1 — VOCABULARY 2 — Bài 1
  // -----------------------------
  {
    id: "u1-v2-ex1",
    unit: 1,
    section: "vocabulary-2",
    title: "Bài tập 1: Hoàn thành câu với các cụm từ cho sẵn",
    description:
      "Chọn cụm từ và điền vào chỗ trống. Có 2 cụm từ không cần dùng.",
    gameType: "drag-fill",
    datasetId: "en10.u1.v2.ex1",
  },

  // -----------------------------
  // UNIT 1 — GRAMMAR 1 — Bài 4
  // -----------------------------
  {
    id: "u1-g1-ex4",
    unit: 1,
    section: "grammar-1",
    title: "Bài tập 4: Điền vào chỗ trống dạng đúng của động từ",
    description:
      "Hiện tại đơn & hiện tại tiếp diễn. Có thể dùng một động từ hai lần.",
    gameType: "gap-fill",
    datasetId: "en10.u1.g1.ex4",
  },
];
if (unit === 1 && sectionKey === "pronunciation") {
  return [
    {
      id: "u1-p1-ex1",
      title: "Bài tập 1: Nghe và chọn đáp án đúng",
      description: "Nghe audio và chọn đáp án A/B vào chỗ trống.",
      gameType: "listen-choose",
      datasetId: "en10.u1.p1.ex1",
    },
  ];
}

// =====================
// HÀM CHÍNH
// =====================
export function getPracticeTasks(
  unit: number,
  section: SectionKey
): PracticeTask[] {
  return ALL_TASKS.filter((t) => t.unit === unit && t.section === section);
}

// alias an toàn
export const loadPracticeTasks = getPracticeTasks;

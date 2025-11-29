import { PracticeTask, SectionKey } from "./types";

export function getPracticeTasks(
  unit: number,
  sectionKey: SectionKey
): PracticeTask[] {
  const tasks: PracticeTask[] = [];

  // Unit 1 – Vocabulary 1
  if (unit === 1 && sectionKey === "vocabulary-1") {
    tasks.push({
      id: "u1-v1-ex1",
      title: "Bài tập 1",
      description: "Nghe và nối từ với nghĩa và từ loại tương ứng.",
      gameType: "flash-audio-match",
      datasetId: "en10.u1.v1.ex1",
    });
  }

  // Unit 1 – Vocabulary 2 (drag-fill)
  if (unit === 1 && sectionKey === "vocabulary-2") {
    tasks.push({
      id: "u1-v2-ex1",
      title: "Bài tập 1: Hoàn thành câu với các cụm từ cho sẵn",
      description:
        "Chọn cụm từ và điền vào chỗ trống. Có 2 cụm từ không cần dùng.",
      gameType: "drag-fill",
      datasetId: "en10.u1.v2.ex1",
    });
  }

  // Unit 1 – Grammar 1 (gap-fill thì hiện tại đơn / tiếp diễn)
  if (unit === 1 && sectionKey === "grammar-1") {
    tasks.push({
      id: "u1-g1-ex4",
      title: "Bài tập 4: Điền vào chỗ trống dạng đúng của động từ",
      description:
        "Hiện tại đơn & hiện tại tiếp diễn. Có thể dùng một động từ hai lần.",
      gameType: "gap-fill",
      datasetId: "en10.u1.g1.ex4",
    });
  }

  // Unit 1 – Pronunciation (listen-choose)
  if (unit === 1 && sectionKey === "pronunciation") {
    tasks.push({
      id: "u1-p1-ex1",
      title: "Bài tập 1: Nghe và chọn đáp án đúng",
      description: "Nghe audio và chọn A/B để điền vào chỗ trống.",
      gameType: "listen-choose",
      datasetId: "en10.u1.p1.ex1",
    });
  }

  return tasks;
}

export const loadPracticeTasks = getPracticeTasks;

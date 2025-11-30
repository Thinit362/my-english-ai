import { PracticeTask, SectionKey } from "./types";

export function getPracticeTasks(
  unit: number,
  sectionKey: SectionKey
): PracticeTask[] {
  const tasks: PracticeTask[] = [];

  // TỪ VỰNG 1 – mọi unit (miễn là có dataset en10.u{unit}.v1.ex1)
  if (sectionKey === "vocabulary-1") {
    tasks.push({
      id: `u${unit}-v1-ex1`,
      title: "Bài tập 1",
      description: "Nghe và nối từ với nghĩa và từ loại tương ứng.",
      gameType: "flash-audio-match",
      datasetId: `en10.u${unit}.v1.ex1`,
    });
  }

  // TỪ VỰNG 2 – mọi unit (drag-fill)
  if (sectionKey === "vocabulary-2") {
    tasks.push({
      id: `u${unit}-v2-ex1`,
      title: "Bài tập 1: Hoàn thành câu với các cụm từ cho sẵn",
      description:
        "Chọn cụm từ và điền vào chỗ trống. Có 2 cụm từ không cần dùng.",
      gameType: "drag-fill",
      datasetId: `en10.u${unit}.v2.ex1`,
    });
  }

  // NGỮ PHÁP 1 – mọi unit (gap-fill)
  if (sectionKey === "grammar-1") {
    tasks.push({
      id: `u${unit}-g1-ex4`,
      title: "Bài tập 4: Điền vào chỗ trống dạng đúng của động từ",
      description:
        "Hiện tại đơn & hiện tại tiếp diễn. Có thể dùng một động từ hai lần.",
      gameType: "gap-fill",
      datasetId: `en10.u${unit}.g1.ex4`,
    });
  }

  // PHÁT ÂM – mọi unit (listen-choose / word-stress, v.v.)
  if (sectionKey === "pronunciation") {
    tasks.push({
      id: `u${unit}-p1-ex1`,
      title: "Bài tập 1: Nghe và chọn đáp án đúng",
      description: "Nghe và chọn A/B theo yêu cầu của bài tập.",
      gameType: "listen-choose",
      datasetId: `en10.u${unit}.p1.ex1`,
    });
  }

  return tasks;
}

export const loadPracticeTasks = getPracticeTasks;

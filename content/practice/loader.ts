import { PracticeTask, SectionKey } from "./types";

export function getPracticeTasks(
  unit: number,
  sectionKey: SectionKey
): PracticeTask[] {
  const tasks: PracticeTask[] = [];

  // =======================
  // UNIT 1 – đã có đủ dữ liệu
  // =======================

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

  // Unit 1 – Grammar 1
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

  // Unit 1 – Pronunciation
  if (unit === 1 && sectionKey === "pronunciation") {
    tasks.push({
      id: "u1-p1-ex1",
      title: "Bài tập 1: Nghe và chọn đáp án đúng",
      description: "Nghe audio và chọn A/B để điền vào chỗ trống.",
      gameType: "listen-choose",
      datasetId: "en10.u1.p1.ex1",
    });
  }

  // =======================
  // THÊM UNIT 2 & 3 – PHÁT ÂM
  // (chỉ thêm những phần chắc chắn đã có dataset)
  // =======================

  // Unit 2 – Pronunciation (/kl/, /pl/, /gr/, /pr/)
  if (unit === 2 && sectionKey === "pronunciation") {
    tasks.push({
      id: "u2-p1-ex1",
      title: "Bài tập 1: Nghe và chọn từ bạn nghe thấy",
      description:
        "Nghe và chọn từ có phụ âm đầu đúng (/kl/, /pl/, /gr/, /pr/).",
      gameType: "listen-choose",
      datasetId: "en10.u2.p1.ex1",
    });
  }

  // Unit 3 – Pronunciation (word stress)
  if (unit === 3 && sectionKey === "pronunciation") {
    tasks.push({
      id: "u3-p1-ex1",
      title: "Bài tập 1: Nghe và chọn trọng âm đúng của từ",
      description: "Nghe từ và chọn đáp án có trọng âm đúng.",
      gameType: "listen-choose",
      datasetId: "en10.u3.p1.ex1",
    });
  }

  // Các unit khác (4–10) tạm thời chưa đăng ký
  // Khi bạn tạo xong dataset en10.u4.p1.ex1,... ta sẽ thêm điều kiện tương tự.

  return tasks;
}

export const loadPracticeTasks = getPracticeTasks;

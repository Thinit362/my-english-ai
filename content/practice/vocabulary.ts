// content/practice/vocabulary.ts
import { PracticeTask } from "./types";

export const vocabularyPractice: PracticeTask[] = [
  {
    id: "u1-v1-ex1",
    unit: 1,
    section: "vocabulary-1",
    title: "Bài tập 1",
    description:
      "Hãy nghe và nối từ với nghĩa và từ loại tương ứng.",
    gameType: "flash-audio-match",
    datasetId: "en10.u1.v1.ex1",
  },

  // Sau này bạn thêm tiếp các bài khác:
  // {
  //   id: "u1-v1-ex2",
  //   unit: 1,
  //   section: "vocabulary-1",
  //   title: "Bài tập 2",
  //   description: "Nối hai cột để tạo thành cụm từ đúng.",
  //   gameType: "coming-soon",
  //   datasetId: "en10.u1.v1.ex2",
  // },
];

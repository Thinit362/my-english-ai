// content/practice/dragFill/en10.u4.g1.ex1.ts
import { DragFillDataset } from "@/components/games/DragFillGame";

export const en10u4g1ex1: DragFillDataset = {
  id: "en10.u4.g1.ex1",
  title:
    "Unit 4 – Grammar 1 – Bài 1: Chọn when / while để hoàn thành câu.",
  instructionsEn:
    "Complete the sentences with the correct conjunction: when or while.",
  instructionsVi:
    "Hoàn thành các câu sau bằng cách chọn liên từ when hoặc while cho đúng nghĩa (quá khứ đơn & quá khứ tiếp diễn).",

  // Không cần phrases, game sẽ tự lấy từ answer.
  // Thêm 2 cụm 'nhiễu' để xuất hiện ở phần gợi ý.
  extraPhrases: ["because", "and"],

  items: [
    {
      id: "s1",
      sentence:
        "___ we were cleaning the street, it started to rain heavily.",
      answer: "While",
    },
    {
      id: "s2",
      sentence:
        "I was talking to a volunteer ___ my phone rang.",
      answer: "when",
    },
    {
      id: "s3",
      sentence:
        "___ he was giving out leaflets, many people stopped to ask for more information.",
      answer: "While",
    },
    {
      id: "s4",
      sentence:
        "The children were playing in the community centre ___ the lights went out.",
      answer: "when",
    },
    {
      id: "s5",
      sentence:
        "___ the volunteers were painting the walls, some local people brought them drinks.",
      answer: "While",
    },
    {
      id: "s6",
      sentence:
        "We were collecting old clothes ___ we found an expensive watch in a pocket.",
      answer: "when",
    },
    {
      id: "s7",
      sentence:
        "___ I was walking to the soup kitchen, I met my English teacher.",
      answer: "While",
    },
    {
      id: "s8",
      sentence:
        "He was helping an old man cross the road ___ a car suddenly appeared.",
      answer: "when",
    },
  ],
};

export default en10u4g1ex1;

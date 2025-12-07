// content/practice/dragFill/en10.u7.g1.ex1.ts
import { DragFillDataset } from "@/components/games/DragFillGame";

export const en10u7g1ex1: DragFillDataset = {
  id: "en10.u7.g1.ex1",
  title:
    "Unit 7 – Grammar 1 – Bài 1: So sánh hơn & so sánh nhất với các quốc gia / tổ chức",
  instructionsEn:
    "Complete the sentences with the phrases given (comparative or superlative forms).",
  instructionsVi:
    "Hoàn thành câu bằng cách chọn các cụm so sánh hơn hoặc so sánh nhất cho sẵn.",
  // 2 cụm gây nhiễu ngoài đáp án
  extraPhrases: ["the most dangerous", "more crowded than"],
  items: [
    {
      id: "s1",
      sentence:
        "The Mekong is one of ___ rivers in Southeast Asia.",
      answer: "the longest",
    },
    {
      id: "s2",
      sentence:
        "Viet Nam is ___ some other countries in the region.",
      answer: "more populous than",
    },
    {
      id: "s3",
      sentence:
        "Ha Noi is ___ many towns in Viet Nam.",
      answer: "bigger than",
    },
    {
      id: "s4",
      sentence:
        "The United Nations is one of ___ international organisations in the world.",
      answer: "the most important",
    },
    {
      id: "s5",
      sentence:
        "Some small charities are much ___ big international organisations.",
      answer: "smaller than",
    },
    {
      id: "s6",
      sentence:
        "New technology makes today’s hospitals ___ they were in the past.",
      answer: "more developed than",
    },
    {
      id: "s7",
      sentence:
        "UNICEF is one of ___ organisations supporting children.",
      answer: "the most famous",
    },
    {
      id: "s8",
      sentence:
        "The World Bank is ___ financial organisations working with Viet Nam.",
      answer: "one of the biggest",
    },
    {
      id: "s9",
      sentence:
        "Mount Fansipan is ___ mountain in Viet Nam.",
      answer: "the highest",
    },
    {
      id: "s10",
      sentence:
        "The Mekong Delta is ___ rice-growing areas in our country.",
      answer: "one of the largest",
    },
  ],
};

export default en10u7g1ex1;

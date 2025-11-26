// content/practice/dragFill/en10.u1.v2.ex1.ts
import { DragFillDataset } from "@/components/games/DragFillGame";

export const en10u1v2ex1: DragFillDataset = {
  id: "en10.u1.v2.ex1",
  title: "Bài tập 1: Hoàn thành các câu sau sử dụng các cụm từ cho sẵn.",
  instructionsEn:
    "Complete the following sentences using the given phrases. There are two phrases that you don't need.",
  instructionsVi:
    "(Hoàn thành các câu sau sử dụng các cụm từ cho sẵn. Có hai cụm từ không cần dùng đến.)",

  // Danh sách cụm từ – dùng chung cho các câu
  phrases: [
    "bathing the baby",
    "watering the houseplants",
    "put out the garbage",
    "mop the house",
    "doing the laundry",
    "doing the cooking",
    "do the washing-up",
    "folding the clothes",
    "doing the shopping",
    "feeding the cats",
  ],

  // Các câu – dùng "___" tại vị trí ô trống
  items: [
    {
      id: "s1",
      sentence:
        "My mother is not ___ because we are eating out today.",
      answer: "doing the cooking",
    },
    {
      id: "s2",
      sentence:
        "My grandfather is not ___ . He'd better stay home since he's sick.",
      answer: "doing the shopping",
    },
    {
      id: "s3",
      sentence:
        "She is visiting her grandparents in the countryside tomorrow, so she is ___ and packing her stuff.",
      answer: "watering the houseplants",
    },
    {
      id: "s4",
      sentence: "It's wet in the living room. My brother is ___ .",
      answer: "mop the house",
    },
    {
      id: "s5",
      sentence:
        "Susan would like to have a washing machine. She's tired of ___ every day.",
      answer: "doing the laundry",
    },
    {
      id: "s6",
      sentence:
        "Sometimes, guests are expected to help ___ after parties.",
      answer: "do the washing-up",
    },
    {
      id: "s7",
      sentence:
        "It smells awful in the kitchen. Don't you ___ ?",
      answer: "put out the garbage",
    },
    {
      id: "s8",
      sentence:
        "It's dirty in your house. Why don't you ___ ?",
      answer: "mop the house",
    },
  ],
};

export default en10u1v2ex1;

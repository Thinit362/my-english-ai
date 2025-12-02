//content/practice/dragFill/en10.u2.v2.ex1.ts
import { DragFillDataset } from "@/components/games/DragFillGame";

export const en10u2v2ex1: DragFillDataset = {
  id: "en10.u2.v2.ex1",
  title: "Bài tập 1: Hoàn thành các câu sau sử dụng các từ/cụm từ cho sẵn.",
  instructionsEn:
    "Complete the following sentences using the given words. There are two words that you don't need.",
  instructionsVi:
    "(Hoàn thành các câu sau sử dụng các từ/cụm từ cho sẵn. Có hai từ không cần dùng đến.)",

  // 10 từ gốc + 2 từ thừa (để bài giống Unit 1)
  phrases: [
    "adopt",
    "appliance",
    "atmosphere",
    "awareness",
    "carbon footprint",
    "chemical",
    "eco-friendly",
    "emission",
    "litter",
    "sustainable",
    // 2 từ thừa
    "organic",
    "public transport",
  ],

  items: [
    {
      id: "s1",
      sentence: "We should ___ new habits to protect the environment.",
      answer: "adopt",
    },
    {
      id: "s2",
      sentence:
        "This modern ___ helps us save a lot of electricity in the kitchen.",
      answer: "appliance",
    },
    {
      id: "s3",
      sentence:
        "Air pollution has a serious impact on the Earth's ___.",
      answer: "atmosphere",
    },
    {
      id: "s4",
      sentence:
        "The campaign aims to raise students’ ___ of climate change.",
      answer: "awareness",
    },
    {
      id: "s5",
      sentence:
        "Using bikes instead of cars can reduce your ___.",
      answer: "carbon footprint",
    },
    {
      id: "s6",
      sentence:
        "Farmers should limit the use of harmful ___ in agriculture.",
      answer: "chemical",
    },
    {
      id: "s7",
      sentence:
        "We should choose ___ products to help protect the environment.",
      answer: "eco-friendly",
    },
    {
      id: "s8",
      sentence:
        "Many factories still cause air pollution because of excessive gas ___.",
      answer: "emission",
    },
    {
      id: "s9",
      sentence:
        "You must not throw ___ on the beach. It harms marine animals.",
      answer: "litter",
    },
    {
      id: "s10",
      sentence:
        "We need to find ___ solutions that do not harm the environment.",
      answer: "sustainable",
    },
  ],
};

export default en10u2v2ex1;

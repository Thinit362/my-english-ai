// content/practice/listenChoose/en10.u10.g1.ex1.ts

import { ListenChooseDataset } from "@/components/games/ListenChooseGame";

export const en10u10g1ex1: ListenChooseDataset = {
  id: "en10.u10.g1.ex1",
  title:
    "Unit 10 – Grammar 1 – Bài 1: Conditional sentences type 1 (Choose the best answer)",
  hideAudio: true, // ❗ Ngữ pháp nên ẩn loa
  items: [
    {
      id: "q1",
      question: "If she ________ hard, she will pass the exam.",
      optionA: "work",
      optionB: "will work",
      optionC: "works",
      correct: "C",
    },
    {
      id: "q2",
      question: "If it rains, we ________ the match.",
      optionA: "cancelled",
      optionB: "will cancel",
      optionC: "would cancel",
      correct: "B",
    },
    {
      id: "q3",
      question: "If she ________ late, we ________ without her.",
      optionA: "is – will go",
      optionB: "will be – go",
      optionC: "will be – will go",
      correct: "A",
    },
    {
      id: "q4",
      question: "If you ________, I ________ the police.",
      optionA: "don't go – will call",
      optionB: "won't go – call",
      optionC: "won't go – will call",
      correct: "A",
    },
    {
      id: "q5",
      question: "Nobody ________ if you ________ a mistake.",
      optionA: "notices – will make",
      optionB: "will notice – makes",
      optionC: "will notice – make",
      correct: "C",
    },
    {
      id: "q6",
      question: "What ________ if you miss the plane?",
      optionA: "are you doing",
      optionB: "will you do",
      optionC: "would you do",
      correct: "B",
    },
    {
      id: "q7",
      question: "You ________ the bus if you ________.",
      optionA: "will miss – don't hurry",
      optionB: "won't miss – don't hurry",
      optionC: "miss – won't hurry",
      correct: "A",
    },
    {
      id: "q8",
      question: "If I ________ hungry, I ________ something to eat.",
      optionA: "was – will get",
      optionB: "am – will get",
      optionC: "will be – get",
      correct: "B",
    },
  ],
};

export default en10u10g1ex1;

// content/practice/dragFill/en10.u3.g1.ex1.ts
import { DragFillDataset } from "@/components/games/DragFillGame";

export const en10u3g1ex1: DragFillDataset = {
  id: "en10.u3.g1.ex1",
  title: "Unit 3 – Grammar 1 – Bài 1: Hoàn thành câu ghép với and / but / or / so.",
  instructionsEn:
    "Complete the compound sentences with the correct conjunction: and, but, or, or so.",
  instructionsVi:
    "Hoàn thành các câu ghép sau bằng cách chọn liên từ and, but, or hoặc so.",
  // cụm từ để kéo thả (có 1–2 từ thừa cho học sinh suy nghĩ)
  phrases: ["and", "but", "or", "so", "and", "but", "or", "so"],
  items: [
    {
      id: "s1",
      sentence: "I am a jazz fan, ___ my favourite style is from the late 1960s.",
      answer: "and",
    },
    {
      id: "s2",
      sentence:
        "Jackson wants to go to the music festival on Saturday, ___ he has a maths exam on that day.",
      answer: "but",
    },
    {
      id: "s3",
      sentence:
        "You can book the tickets online, ___ you can buy them at the stadium ticket office.",
      answer: "or",
    },
    {
      id: "s4",
      sentence:
        "The concert didn’t happen, ___ we stayed at home and watched a film instead.",
      answer: "so",
    },
    {
      id: "s5",
      sentence:
        "She is a talented singer, ___ many people admire her voice.",
      answer: "so",
    },
    {
      id: "s6",
      sentence:
        "He was very tired, ___ he still went to the outdoor music show.",
      answer: "but",
    },
    {
      id: "s7",
      sentence:
        "You must hurry up, ___ you will miss the bus to the concert.",
      answer: "or",
    },
    {
      id: "s8",
      sentence:
        "He plays the guitar very well, ___ he cannot sing in front of a big audience.",
      answer: "but",
    },
  ],
};

export default en10u3g1ex1;

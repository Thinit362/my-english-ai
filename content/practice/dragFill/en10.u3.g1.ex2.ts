// content/practice/dragFill/en10.u3.g1.ex2.ts
import { DragFillDataset } from "@/components/games/DragFillGame";

export const en10u3g1ex2: DragFillDataset = {
  id: "en10.u3.g1.ex2",
  title:
    "Unit 3 – Grammar 1 – Bài 2: Luyện tập câu ghép với các liên từ FANBOYS.",
  instructionsEn:
    "Complete the compound sentences with the correct coordinating conjunction (FANBOYS).",
  instructionsVi:
    "Hoàn thành các câu ghép sau bằng cách chọn liên từ kết hợp thích hợp (FANBOYS).",
  phrases: ["for", "and", "nor", "but", "or", "yet", "so"],
  items: [
    {
      id: "s1",
      sentence: "She loves pop music, ___ her brother prefers rock.",
      answer: "but",
    },
    {
      id: "s2",
      sentence:
        "He didn’t call me, ___ did he send me any messages about the show.",
      answer: "nor",
    },
    {
      id: "s3",
      sentence:
        "The show was cancelled, ___ the tickets will be refunded next week.",
      answer: "so",
    },
    {
      id: "s4",
      sentence:
        "They turned down the volume, ___ the baby was sleeping in the next room.",
      answer: "for",
    },
    {
      id: "s5",
      sentence:
        "The band is very young, ___ they already have a lot of experience on stage.",
      answer: "yet",
    },
    {
      id: "s6",
      sentence:
        "You can stay at home, ___ you can come with us to the music festival.",
      answer: "or",
    },
    {
      id: "s7",
      sentence:
        "She practises the piano every day, ___ she wants to become a professional musician.",
      answer: "for",
    },
    {
      id: "s8",
      sentence:
        "The tickets are cheap, ___ the seats are not very comfortable.",
      answer: "but",
    },
  ],
};

export default en10u3g1ex2;

// content/practice/dragFill/en10.u3.g2.ex1.ts
import { DragFillDataset } from "@/components/games/DragFillGame";

export const en10u3g2ex1: DragFillDataset = {
  id: "en10.u3.g2.ex1",
  title:
    "Unit 3 – Grammar 2 – Bài 1: Thực hành các cấu trúc với to-infinitives",
  instructionsEn:
    "Complete the sentences using the correct to-infinitive structures: enough to, whether to, It’s + adj + to V, and be about to.",
  instructionsVi:
    "Hoàn thành các câu sau bằng cách kéo thả cụm ‘enough to’, ‘whether to’, ‘to’ (trong cấu trúc It’s + adj + to V) và ‘about to’ vào chỗ trống.",
  // Các cụm để kéo thả (có lặp lại để học sinh có lựa chọn)
  phrases: [
    "enough to",
    "enough to",
    "whether to",
    "whether to",
    "to",
    "to",
    "about to",
    "about to",
    "enable to",
  ],
  items: [
    // enough to V
    {
      id: "s1",
      sentence:
        "He is tall ______ reach the microphone without standing on the stage box.",
      // He is tall enough to reach...
      answer: "enough to",
    },
    {
      id: "s2",
      sentence:
        "The music was loud ______ wake up the whole neighbourhood.",
      // loud enough to wake up...
      answer: "enough to",
    },

    // whether to V
    {
      id: "s3",
      sentence:
        "I can’t decide ______ join the school band or focus on my exams.",
      // decide whether to join...
      answer: "whether to",
    },
    {
      id: "s4",
      sentence:
        "She is wondering ______ buy a ticket for the rock concert.",
      // wondering whether to buy...
      answer: "whether to",
    },

    // It’s + adj + to V  → chỗ trống là 'to'
    {
      id: "s5",
      sentence:
        "It’s difficult ______ learn all the lyrics in just one day.",
      // It’s difficult to learn...
      answer: "to",
    },
    {
      id: "s6",
      sentence:
        "It’s important ______ warm up your voice before you sing.",
      // It’s important to warm up...
      answer: "to",
    },

    // be about to V
    {
      id: "s7",
      sentence:
        "The show is ______ start. Please turn off your mobile phones.",
      // is about to start
      answer: "about to",
    },
    {
      id: "s8",
      sentence:
        "The band is ______ perform their final song of the night.",
      // is about to perform...
      answer: "about to",
    },
  ],
};

export default en10u3g2ex1;

// content/practice/multipleChoice/en10.u10.g1.mc1.ts
import { MultipleChoiceDataset } from "@/components/games/MultipleChoiceGame";

export const en10u10g1mc1: MultipleChoiceDataset = {
  id: "en10.u10.g1.mc1",
  title: "Unit 10 – Grammar 1 – Bài 2: Conditional sentences type 1 & 2",
  instructionsEn: "Choose the best answer A, B, C or D to complete each sentence.",
  instructionsVi:
    "Chọn đáp án A, B, C hoặc D để hoàn thành câu điều kiện loại 1 hoặc loại 2.",
  items: [
    {
      id: "q1",
      question: "If I meet him tomorrow, I ________ him about the project.",
      optionA: "tell",
      optionB: "will tell",
      optionC: "told",
      optionD: "would tell",
      correct: "B",
      explanation:
        "Câu điều kiện loại 1 (If + hiện tại đơn, will + V) → will tell."
    },
    {
      id: "q2",
      question:
        "If she had more free time, she ________ volunteering at the local shelter.",
      optionA: "will start",
      optionB: "would start",
      optionC: "starts",
      optionD: "started",
      correct: "B",
      explanation:
        "Giả định không có thật ở hiện tại → loại 2: If + past simple, would + V → would start."
    },
    {
      id: "q3",
      question: "If it ________ sunny this weekend, we will go hiking.",
      optionA: "is",
      optionB: "will be",
      optionC: "was",
      optionD: "would be",
      correct: "A",
      explanation:
        "Loại 1: mệnh đề If dùng hiện tại đơn → is."
    },
    {
      id: "q4",
      question: "If I were you, I ________ for that scholarship.",
      optionA: "will apply",
      optionB: "applied",
      optionC: "would apply",
      optionD: "apply",
      correct: "C",
      explanation:
        "Cấu trúc cố định loại 2: If I were you, I would + V → would apply."
    },
    {
      id: "q5",
      question: "They will miss the train if they ________ now.",
      optionA: "don't leave",
      optionB: "won't leave",
      optionC: "didn't leave",
      optionD: "wouldn't leave",
      correct: "A",
      explanation:
        "Mệnh đề If của loại 1 dùng hiện tại đơn → don't leave."
    },
    {
      id: "q6",
      question:
        "If we ________ enough money, we would buy a new laptop.",
      optionA: "have",
      optionB: "had",
      optionC: "will have",
      optionD: "would have",
      correct: "B",
      explanation:
        "Loại 2: If + past simple, would + V → If we had enough money, we would buy..."
    },
    {
      id: "q7",
      question:
        "If he doesn’t recycle plastic bottles, there ________ more waste.",
      optionA: "will be",
      optionB: "is",
      optionC: "would be",
      optionD: "was",
      correct: "A",
      explanation:
        "Kết quả có thật trong tương lai → loại 1: will be."
    },
    {
      id: "q8",
      question: "Students will get better marks if they ________ regularly.",
      optionA: "would revise",
      optionB: "revised",
      optionC: "revise",
      optionD: "will revise",
      correct: "C",
      explanation:
        "Mệnh đề If của loại 1 dùng hiện tại đơn → revise."
    },
  ],
};

export default en10u10g1mc1;

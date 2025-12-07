// content/practice/multipleChoice/en10.u5.g1.mc1.ts
import { MultipleChoiceDataset } from "@/components/games/MultipleChoiceGame";

export const en10u5g1mc1: MultipleChoiceDataset = {
  id: "en10.u5.g1.mc1",
  title:
    "Unit 5 – Grammar 1 – Bài tập Multiple Choice: Present Perfect",
  instructionsEn:
    "Choose the best answer A, B, C or D to complete each sentence.",
  instructionsVi:
    "Chọn phương án A, B, C hoặc D để hoàn thành mỗi câu với thì hiện tại hoàn thành.",
  items: [
    {
      id: "q1",
      question:
        "My mother ________ tidied up my room. It looks neat now.",
      optionA: "have",
      optionB: "has",
      optionC: "has been",
      optionD: "have been",
      correct: "B",
      explanation:
        "Chủ ngữ “my mother” (số ít) → dùng “has + Vp.p.” → has tidied up.",
    },
    {
      id: "q2",
      question:
        "We ________ in this city for ten years.",
      optionA: "lived",
      optionB: "have lived",
      optionC: "has lived",
      optionD: "are living",
      correct: "B",
      explanation:
        "Hành động bắt đầu trong quá khứ và kéo dài đến hiện tại → hiện tại hoàn thành: have lived.",
    },
    {
      id: "q3",
      question:
        "He ________ his homework yet.",
      optionA: "has finished",
      optionB: "haven’t finished",
      optionC: "hasn’t finished",
      optionD: "didn’t finish",
      correct: "C",
      explanation:
        "Câu phủ định với “yet” → has not / hasn’t + Vp.p. → hasn’t finished.",
    },
    {
      id: "q4",
      question:
        "______ you ever ________ a 3D printer?",
      optionA: "Did / use",
      optionB: "Have / used",
      optionC: "Has / used",
      optionD: "Do / use",
      correct: "B",
      explanation:
        "Câu hỏi hiện tại hoàn thành với “ever” → Have you ever used ...?",
    },
    {
      id: "q5",
      question:
        "My sister has already ________ a new laptop.",
      optionA: "buys",
      optionB: "bought",
      optionC: "buying",
      optionD: "to buy",
      correct: "B",
      explanation:
        "Sau “has already” là Vp.p. → bought.",
    },
    {
      id: "q6",
      question:
        "They ________ this invention three times.",
      optionA: "have tested",
      optionB: "tested",
      optionC: "has tested",
      optionD: "are testing",
      correct: "A",
      explanation:
        "Hành động lặp lại nhiều lần đến hiện tại → have tested (present perfect).",
    },
    {
      id: "q7",
      question:
        "I ________ just ________ the instruction manual.",
      optionA: "have / read",
      optionB: "has / read",
      optionC: "have / reading",
      optionD: "am / reading",
      correct: "A",
      explanation:
        "Hiện tại hoàn thành với “just” → have just read.",
    },
    {
      id: "q8",
      question:
        "She ________ never ________ artificial intelligence before.",
      optionA: "has / studied",
      optionB: "have / studied",
      optionC: "has / studying",
      optionD: "was / studying",
      correct: "A",
      explanation:
        "She → has; cấu trúc “has never + Vp.p.” → has never studied.",
    },
    {
      id: "q9",
      question:
        "We haven’t seen each other ________ last summer.",
      optionA: "since",
      optionB: "for",
      optionC: "from",
      optionD: "in",
      correct: "A",
      explanation:
        "“Last summer” là mốc thời gian → dùng since.",
    },
    {
      id: "q10",
      question:
        "He has worked for this company ________ 2019.",
      optionA: "since",
      optionB: "for",
      optionC: "in",
      optionD: "from",
      correct: "A",
      explanation:
        "“2019” là mốc thời gian cụ thể → since 2019.",
    },
  ],
};

export default en10u5g1mc1;

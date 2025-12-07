// content/practice/dragFill/en10.u8.g1.ex1.ts
import { DragFillDataset } from "@/components/games/DragFillGame";

export const en10u8g1ex1: DragFillDataset = {
  id: "en10.u8.g1.ex1",
  title:
    "Unit 8 – Grammar 1 – Bài 1: Hoàn thành câu với các mệnh đề quan hệ cho sẵn",
  instructionsEn:
    "Complete the sentences with the phrases given (relative clauses).",
  instructionsVi:
    "Hoàn thành các câu sau bằng cách chọn mệnh đề quan hệ thích hợp trong ô phía trên.",
  // 2 cụm gây nhiễu ngoài đáp án
  extraPhrases: ["who moved to Australia last year", "which was closed last month"],
  items: [
    {
      id: "s1",
      sentence: "The boy ___ often helps me with my homework.",
      answer: "who lives next door",
    },
    {
      id: "s2",
      sentence: "Ha Long Bay, ___, attracts millions of tourists every year.",
      answer: "which is in Quang Ninh Province",
    },
    {
      id: "s3",
      sentence:
        "This is the teacher ___ gave us a talk about environmental protection.",
      answer: "who gave us a talk yesterday",
    },
    {
      id: "s4",
      sentence:
        "The car ___ belongs to my uncle. He drives it to work every day.",
      answer: "which is parked in front of the house",
    },
    {
      id: "s5",
      sentence:
        "I’ll never forget the day ___ we first met at secondary school.",
      answer: "when",
    },
    {
      id: "s6",
      sentence:
        "Lan, ___, is going to represent our class in the contest.",
      answer: "who is very good at English",
    },
    {
      id: "s7",
      sentence:
        "This is the village ___ my grandparents were born.",
      answer: "where",
    },
    {
      id: "s8",
      sentence:
        "The woman ___ is talking to the head teacher is my aunt.",
      answer: "who",
    },
    {
      id: "s9",
      sentence:
        "That’s the organisation ___ supports students from poor families.",
      answer: "which",
    },
    {
      id: "s10",
      sentence:
        "Phong’s father, ___, often joins charity activities in our town.",
      answer: "who is a doctor",
    },
  ],
};

export default en10u8g1ex1;

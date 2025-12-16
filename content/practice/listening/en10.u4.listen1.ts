// content/practice/listening/en10.u4.listen1.ts
import type { ListeningLesson } from "./types";

const en10_u4_listen1: ListeningLesson = {
  id: "en10.u4.listen1",
  unit: 4,
  skill: "listening",
  topicVi: "Làm tình nguyện và từ thiện",
  titleEn: "Volunteering and Charity",
  youtubeId: "OQXYr6T4BIY",
  descriptionEn:
    "Listen to two short talks about volunteering experiences and future plans.",
  descriptionVi:
    "Nghe hai đoạn nói ngắn về trải nghiệm làm tình nguyện và dự định trong tương lai.",

  exercises: [
    // ================= PAGE 1: MCQ – Katherine =================
    {
      id: "page1",
      title: "Listening – Part 1",
      instructionEn:
        "Listen to the first video and choose the best answer (A, B or C).",
      instructionVi:
        "Nghe video thứ nhất và chọn đáp án đúng (A, B hoặc C).",

      questions: [
        {
          id: "u4_p1_q1",
          type: "mcq",
          question:
            "What did Katherine do on her volunteer trip?",
          options: [
            "A. She taught English.",
            "B. She taught Maths.",
            "C. She helped plant trees.",
          ],
        },
        {
          id: "u4_p1_q2",
          type: "mcq",
          question:
            "How did Katherine feel at the beginning of the trip?",
          options: [
            "A. She felt quite nervous.",
            "B. She felt very excited.",
            "C. She felt helpful.",
          ],
        },
        {
          id: "u4_p1_q3",
          type: "mcq",
          question:
            "What does Katherine say about harvesting crops?",
          options: [
            "A. It was quite easy.",
            "B. She couldn’t help much.",
            "C. She liked harvesting crops.",
          ],
        },
        {
          id: "u4_p1_q4",
          type: "mcq",
          question:
            "How did Katherine know about the volunteer work?",
          options: [
            "A. From her father.",
            "B. From her cousin.",
            "C. From a friend of her father.",
          ],
        },
        {
          id: "u4_p1_q5",
          type: "mcq",
          question:
            "What does Katherine say about volunteer activities?",
          options: [
            "A. They can be time-consuming.",
            "B. They are mainly carried out in summer.",
            "C. They enhance your chance of getting a scholarship.",
          ],
        },
      ],

      answers: {
        u4_p1_q1: "A. She taught English.",
        u4_p1_q2: "A. She felt quite nervous.",
        u4_p1_q3: "C. She liked harvesting crops.",
        u4_p1_q4: "C. From a friend of her father.",
        u4_p1_q5: "C. They enhance your chance of getting a scholarship.",
      },

      explanations: {
        u4_p1_q1:
          "Katherine nói cô tham gia dạy tiếng Anh trong chuyến đi tình nguyện.",
        u4_p1_q2:
          "Cô cho biết lúc đầu cảm thấy khá lo lắng (quite nervous).",
        u4_p1_q3:
          "Katherine nói rằng cô thích việc thu hoạch mùa màng.",
        u4_p1_q4:
          "Cô biết đến công việc tình nguyện qua một người bạn của bố.",
        u4_p1_q5:
          "Katherine cho rằng hoạt động tình nguyện giúp tăng cơ hội nhận học bổng.",
      },
    },

    // ================= PAGE 2: MCQ – Adam + Tổng hợp =================
    {
      id: "page2",
      title: "Listening – Part 2",
      instructionEn:
        "Listen to the second video and choose the correct answer.",
      instructionVi:
        "Nghe video thứ hai và chọn đáp án đúng.",

      questions: [
        {
          id: "u4_p2_q1",
          type: "mcq",
          question:
            "What does Adam want to do?",
          options: [
            "A. He wants to do volunteer work.",
            "B. He wants to travel to Mexico.",
            "C. He wants to study abroad.",
          ],
        },
        {
          id: "u4_p2_q2",

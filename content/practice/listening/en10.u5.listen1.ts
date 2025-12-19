// content/practice/listening/en10.u5.listen1.ts
import type { ListeningLesson } from "./types";

const en10_u5_listen1: ListeningLesson = {
  id: "en10.u5.listen1",
  unit: 5,
  skill: "listening",
  topicVi: "Phát minh và công nghệ",
  titleEn: "An Innovative Alarm Clock",
  youtubeId: "V5PHqw2YBu8",
  descriptionEn:
    "Listen to an interview with the inventor of a creative alarm clock called Clocky.",
  descriptionVi:
    "Nghe cuộc phỏng vấn với nhà phát minh của chiếc đồng hồ báo thức sáng tạo mang tên Clocky.",

  exercises: [
    // ================= PAGE 1: MCQ =================
    {
      id: "page1",
      title: "Listening – Part 1",
      instructionEn:
        "Listen to the interview and choose the best answer (A, B, C or D).",
      instructionVi:
        "Nghe bài phỏng vấn và chọn đáp án đúng (A, B, C hoặc D).",

      questions: [
        {
          id: "u5_p1_q1",
          type: "mcq",
          question:
            "Who is Gar Nanda?",
          options: [
            "A. A TV host",
            "B. A university lecturer",
            "C. The inventor of Clocky",
            "D. A technology reporter",
          ],
        },
        {
          id: "u5_p1_q2",
          type: "mcq",
          question:
            "When did Gar Nanda start designing things?",
          options: [
            "A. When he was in high school",
            "B. After he started his company",
            "C. When he was a university student",
            "D. After Clocky was launched",
          ],
        },
        {
          id: "u5_p1_q3",
          type: "mcq",
          question:
            "What inspired Gar Nanda to start his company?",
          options: [
            "A. His teachers’ advice",
            "B. Market research",
            "C. Things missing in everyday life",
            "D. Modern technology",
          ],
        },
        {
          id: "u5_p1_q4",
          type: "mcq",
          question:
            "What happens if you press the snooze button on Clocky?",
          options: [
            "A. It stops ringing",
            "B. It turns off automatically",
            "C. It keeps ringing and runs away",
            "D. It changes the alarm sound",
          ],
        },
        {
          id: "u5_p1_q5",
          type: "mcq",
          question:
            "What is special about Clocky?",
          options: [
            "A. It plays music",
            "B. It runs away to wake you up",
            "C. It can talk",
            "D. It connects to the Internet",
          ],
        },
        {
          id: "u5_p1_q6",
          type: "mcq",
          question:
            "Why did Gar Nanda think the alarm clock needed improving?",
          options: [
            "A. It was too expensive",
            "B. It was too noisy",
            "C. He was often late for class",
            "D. It broke easily",
          ],
        },
        {
          id: "u5_p1_q7",
          type: "mcq",
          question:
            "How does Gar Nanda describe Clocky?",
          options: [
            "A. Complicated but useful",
            "B. Cheap and popular",
            "C. Fun and practical",
            "D. Modern and stylish",
          ],
        },
        {
          id: "u5_p1_q8",
          type: "mcq",
          question:
            "When was Clocky launched?",
          options: [
            "A. During the summer holidays",
            "B. Around Christmas and New Year",
            "C. At the beginning of the school year",
            "D. In the middle of the year",
          ],
        },
        {
          id: "u5_p1_q9",
          type: "mcq",
          question:
            "How did people react to Clocky?",
          options: [
            "A. They disliked it",
            "B. They were confused",
            "C. They gave positive feedback",
            "D. They ignored it",
          ],
        },
        {
          id: "u5_p1_q10",
          type: "mcq",
          question:
            "Where can people buy Clocky?",
          options: [
            "A. Only in retail stores",
            "B. Only on Amazon",
            "C. On websites and in retail stores",
            "D. Only from the inventor",
          ],
        },
      ],

      answers: {
        u5_p1_q1: "C. The inventor of Clocky",
        u5_p1_q2: "C. When he was a university student",
        u5_p1_q3: "C. Things missing in everyday life",
        u5_p1_q4: "C. It keeps ringing and runs away",
        u5_p1_q5: "B. It runs away to wake you up",
        u5_p1_q6: "C. He was often late for class",
        u5_p1_q7: "C. Fun and practical",
        u5_p1_q8: "B. Around Christmas and New Year",
        u5_p1_q9: "C. They gave positive feedback",
        u5_p1_q10: "C. On websites and in retail stores",
      },
    },

    // ================= PAGE 2: Input + Drag =================
    {
      id: "page2",
      title: "Listening – Part 2",
      instructionEn:
        "Listen again and complete the sentences. For questions 7–10, drag the correct word into each blank.",
      instructionVi:
        "Nghe lại và hoàn thành câu. Với câu 7–10, kéo từ đúng vào chỗ trống.",

      questions: [
        {
          id: "u5_p2_q1",
          type: "input",
          question:
            "Gar Nanda started designing things when he was a university ________.",
          viHint: "sinh viên",
        },
        {
          id: "u5_p2_q2",
          type: "input",
          question:
            "Clocky inspired Gar Nanda to start his ________.",
          viHint: "công ty",
        },
        {
          id: "u5_p2_q3",
          type: "input",
          question:
            "Clocky will run around in ________ directions in the room.",
          viHint: "ngẫu nhiên",
        },
        {
          id: "u5_p2_q4",
          type: "input",
          question:
            "Clocky forces users to get out of bed and ________ it.",
          viHint: "tìm nó",
        },
        {
          id: "u5_p2_q5",
          type: "input",
          question:
            "Clocky received a lot of positive ________ after being launched.",
          viHint: "phản hồi",
        },
        {
          id: "u5_p2_q6",
          type: "input",
          question:
            "People can buy Clocky online or at ________ stores.",
          viHint: "cửa hàng bán lẻ",
        },
        {
          id: "u5_p2_q7",
          type: "drag",
          blankText:
            "Clocky was invented to solve the problem of hitting the ________ button.",
          options: ["snooze", "power", "reset", "volume"],
        },
        {
          id: "u5_p2_q8",
          type: "drag",
          blankText:
            "Gar Nanda describes his ideas as extraordinary but ________.",
          options: ["practical", "expensive", "complex", "dangerous"],
        },
        {
          id: "u5_p2_q9",
          type: "drag",
          blankText:
            "The interview is broadcast on the ________ Channel.",
          options: ["Discovery", "History", "Music", "Education"],
        },
        {
          id: "u5_p2_q10",
          type: "drag",
          blankText:
            "Jack Steven plans to buy Clocky for his ________.",
          options: ["son", "daughter", "friend", "brother"],
        },
      ],

      answers: {
        u5_p2_q1: "student",
        u5_p2_q2: "company",
        u5_p2_q3: "random",
        u5_p2_q4: "find",
        u5_p2_q5: "feedback",
        u5_p2_q6: "retail",
        u5_p2_q7: "snooze",
        u5_p2_q8: "practical",
        u5_p2_q9: "Discovery",
        u5_p2_q10: "son",
      },
    },
  ],
};

export default en10_u5_listen1;

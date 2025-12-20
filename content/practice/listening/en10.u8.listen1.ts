// content/practice/listening/en10.u8.listen1.ts
import type { ListeningLesson } from "./types";

const en10_u8_listen1: ListeningLesson = {
  id: "en10.u8.listen1",
  unit: 8,
  skill: "listening",
  topicVi: "Học trực tuyến và phương pháp học tiếng Anh mới",
  titleEn: "New Ways to Learn English Online",
  youtubeId: "NtpRZZzvGPI",
  descriptionEn:
    "Listen to a talk and interviews about online English learning methods on AI English C3.",
  descriptionVi:
    "Nghe bài nói và chia sẻ về phương pháp học tiếng Anh trực tuyến trên AI English C3.",

  exercises: [
    // ================= PAGE 1: MCQ =================
    {
      id: "page1",
      title: "Listening – Part 1",
      instructionEn:
        "Listen to the talk and interviews, then choose the best answer (A, B, C or D).",
      instructionVi:
        "Nghe bài nói và phần phỏng vấn, sau đó chọn đáp án đúng (A, B, C hoặc D).",

      questions: [
        {
          id: "u8_p1_q1",
          type: "mcq",
          question:
            "Where is this AI English lesson from?",
          options: [
            "A. A TV channel",
            "B. AI English C3 Learning Channel",
            "C. A radio station",
            "D. A school classroom",
          ],
        },
        {
          id: "u8_p1_q2",
          type: "mcq",
          question:
            "What is the main topic discussed?",
          options: [
            "A. Traditional classroom learning",
            "B. Online tools and methods to learn English",
            "C. English grammar rules",
            "D. Famous English songs",
          ],
        },
        {
          id: "u8_p1_q3",
          type: "mcq",
          question:
            "According to the speaker, digital technology has made learning English ________.",
          options: [
            "A. harder and more complicated",
            "B. easier and more convenient",
            "C. useless",
            "D. expensive",
          ],
        },
        {
          id: "u8_p1_q4",
          type: "mcq",
          question:
            "Online platforms allow students to study English ________.",
          options: [
            "A. only in class",
            "B. only with a teacher",
            "C. anytime and anywhere",
            "D. only at school",
          ],
        },
        {
          id: "u8_p1_q5",
          type: "mcq",
          question:
            "One effective tool for learning English online is watching ________.",
          options: [
            "A. movies without subtitles",
            "B. cartoons for kids",
            "C. educational videos with subtitles",
            "D. news reports",
          ],
        },
        {
          id: "u8_p1_q6",
          type: "mcq",
          question:
            "Emma uses the AI English C3 website to do all of the following EXCEPT ________.",
          options: [
            "A. watch listening videos",
            "B. play interactive games",
            "C. practice grammar only",
            "D. participate in speaking practice",
          ],
        },
        {
          id: "u8_p1_q7",
          type: "mcq",
          question:
            "Emma finds interactive lessons most useful because she can ________.",
          options: [
            "A. memorize rule lists",
            "B. practice English actively",
            "C. take long breaks",
            "D. read textbooks only",
          ],
        },
        {
          id: "u8_p1_q8",
          type: "mcq",
          question:
            "Lucas often watches native speaker interviews to improve his ________.",
          options: [
            "A. writing",
            "B. pronunciation",
            "C. math skills",
            "D. history knowledge",
          ],
        },
        {
          id: "u8_p1_q9",
          type: "mcq",
          question:
            "What kind of feedback does Lucas receive on the website?",
          options: [
            "A. Instant feedback",
            "B. Feedback from friends",
            "C. No feedback",
            "D. Monthly feedback",
          ],
        },
        {
          id: "u8_p1_q10",
          type: "mcq",
          question:
            "What advice does Lucas give to other learners?",
          options: [
            "A. Study only textbooks",
            "B. Don’t be afraid to make mistakes",
            "C. Avoid online resources",
            "D. Learn only with friends",
          ],
        },
      ],

      answers: {
        u8_p1_q1: "B. AI English C3 Learning Channel",
        u8_p1_q2:
          "B. Online tools and methods to learn English",
        u8_p1_q3: "B. easier and more convenient",
        u8_p1_q4: "C. anytime and anywhere",
        u8_p1_q5:
          "C. educational videos with subtitles",
        u8_p1_q6:
          "C. practice grammar only",
        u8_p1_q7:
          "B. practice English actively",
        u8_p1_q8: "B. pronunciation",
        u8_p1_q9: "A. Instant feedback",
        u8_p1_q10:
          "B. Don’t be afraid to make mistakes",
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
          id: "u8_p2_q1",
          type: "input",
          question:
            "Online platforms allow students to study English ________ and ________.",
          viHint: "hai từ, có ‘any’",
        },
        {
          id: "u8_p2_q2",
          type: "input",
          question:
            "Emma uses the website to revise new words by playing ________ games.",
          viHint: "từ chỉ trò chơi",
        },
        {
          id: "u8_p2_q3",
          type: "input",
          question:
            "Emma joins speaking practice using the built-in ________ features.",
          viHint: "tính năng để nói chuyện",
        },
        {
          id: "u8_p2_q4",
          type: "input",
          question:
            "Lucas records his own voice to check his ________.",
          viHint: "kỹ năng giao tiếp nói",
        },
        {
          id: "u8_p2_q5",
          type: "input",
          question:
            "Lucas watches native speaker ________ to improve his listening.",
          viHint: "loại nội dung",
        },
        {
          id: "u8_p2_q6",
          type: "input",
          question:
            "Lucas says instant feedback helps him correct ________ right away.",
          viHint: "từ chỉ lỗi",
        },
        {
          id: "u8_p2_q7",
          type: "drag",
          blankText:
            "Emma finds learning through real ________ and interactive lessons most useful.",
          options: ["conversations", "songs", "stories", "lectures"],
        },
        {
          id: "u8_p2_q8",
          type: "drag",
          blankText:
            "One effective method for learning English online is watching videos with ________.",
          options: ["subtitles", "music", "ads", "scores"],
        },
        {
          id: "u8_p2_q9",
          type: "drag",
          blankText:
            "Lucas encourages learners to practice ________ every day.",
          options: ["English", "math", "history", "science"],
        },
        {
          id: "u8_p2_q10",
          type: "drag",
          blankText:
            "He recommends learners to use online ________ to improve.",
          options: ["resources", "computers", "games", "notes"],
        },
      ],

      answers: {
        u8_p2_q1: "anytime anywhere",
        u8_p2_q2: "interactive",
        u8_p2_q3: "chat",
        u8_p2_q4: "pronunciation",
        u8_p2_q5: "interviews",
        u8_p2_q6: "mistakes",
        u8_p2_q7: "conversations",
        u8_p2_q8: "subtitles",
        u8_p2_q9: "English",
        u8_p2_q10: "resources",
      },
    },
  ],
};

export default en10_u8_listen1;

// content/practice/listening/en10.u3.listen1.ts
import type { ListeningLesson } from "./types";

const en10_u3_listen1: ListeningLesson = {
  id: "en10.u3.listen1",
  unit: 3,
  skill: "listening",
  topicVi: "Âm nhạc và sở thích cá nhân",
  titleEn: "Talking about Music",
  youtubeId: "HzGRDkBjLFM",
  descriptionEn:
    "Listen to a conversation between two students talking about their favourite music and a famous singer.",
  descriptionVi:
    "Nghe cuộc trò chuyện giữa hai học sinh về âm nhạc yêu thích và một ca sĩ nổi tiếng.",

  exercises: [
    // ================= PAGE 1: MCQ =================
    {
      id: "page1",
      title: "Listening – Part 1",
      instructionEn:
        "Listen to the conversation and choose the best answer (A, B, C or D).",
      instructionVi:
        "Nghe đoạn hội thoại và chọn đáp án đúng (A, B, C hoặc D).",

      questions: [
        {
          id: "u3_p1_q1",
          type: "mcq",
          question:
            "What song is Nam listening to at the beginning of the conversation?",
          options: [
            "A. Europe’s Skies",
            "B. Fairytale",
            "C. Funny Little World",
            "D. Roll with the Wind",
          ],
        },
        {
          id: "u3_p1_q2",
          type: "mcq",
          question:
            "Who is Alexander Rybak?",
          options: [
            "A. A famous violinist",
            "B. A Belarusian singer and composer",
            "C. A pop music producer",
            "D. A rock musician",
          ],
        },
        {
          id: "u3_p1_q3",
          type: "mcq",
          question:
            "What achievement of Alexander is mentioned?",
          options: [
            "A. He released many albums",
            "B. He won a national music award",
            "C. He won the Eurovision Song Contest in 2009",
            "D. He composed classical music",
          ],
        },
        {
          id: "u3_p1_q4",
          type: "mcq",
          question:
            "Which musical instrument does Alexander play especially well?",
          options: [
            "A. Piano",
            "B. Guitar",
            "C. Violin",
            "D. Drums",
          ],
        },
        {
          id: "u3_p1_q5",
          type: "mcq",
          question:
            "What makes Alexander special according to Nam?",
          options: [
            "A. He can sing in many languages",
            "B. He writes inspirational lyrics",
            "C. He can sing while playing the violin",
            "D. He performs rock music",
          ],
        },
        {
          id: "u3_p1_q6",
          type: "mcq",
          question:
            "Which song is mentioned as one of Alexander’s most popular singles?",
          options: [
            "A. Fairytale",
            "B. Funny Little World",
            "C. Roll with the Wind",
            "D. Europe’s Skies",
          ],
        },
        {
          id: "u3_p1_q7",
          type: "mcq",
          question:
            "How does Mai feel about Alexander’s songs?",
          options: [
            "A. She finds them boring",
            "B. She thinks they are loud",
            "C. She finds them lovely and inspirational",
            "D. She dislikes pop music",
          ],
        },
        {
          id: "u3_p1_q8",
          type: "mcq",
          question:
            "What kind of music does Mai usually like?",
          options: [
            "A. Pop",
            "B. Classical",
            "C. Rap and rock",
            "D. Folk",
          ],
        },
        {
          id: "u3_p1_q9",
          type: "mcq",
          question:
            "What does Mai say about pop music?",
          options: [
            "A. It is boring",
            "B. It is fascinating",
            "C. It is old-fashioned",
            "D. It is noisy",
          ],
        },
        {
          id: "u3_p1_q10",
          type: "mcq",
          question:
            "What does Nam promise to do at the end of the conversation?",
          options: [
            "A. Buy a new album",
            "B. Recommend more songs",
            "C. Lend Mai his debut album",
            "D. Go to a concert with Mai",
          ],
        },
      ],

      answers: {
        u3_p1_q1: "B. Fairytale",
        u3_p1_q2: "B. A Belarusian singer and composer",
        u3_p1_q3: "C. He won the Eurovision Song Contest in 2009",
        u3_p1_q4: "C. Violin",
        u3_p1_q5: "C. He can sing while playing the violin",
        u3_p1_q6: "D. Europe’s Skies",
        u3_p1_q7: "C. She finds them lovely and inspirational",
        u3_p1_q8: "C. Rap and rock",
        u3_p1_q9: "B. It is fascinating",
        u3_p1_q10: "C. Lend Mai his debut album",
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
          id: "u3_p2_q1",
          type: "input",
          question:
            "Alexander Rybak is a famous singer and ________.",
          viHint: "nghề nghiệp liên quan đến sáng tác",
        },
        {
          id: "u3_p2_q2",
          type: "input",
          question:
            "He can play several musical instruments ________.",
          viHint: "một trạng từ",
        },
        {
          id: "u3_p2_q3",
          type: "input",
          question:
            "The violin is the instrument he plays especially ________.",
          viHint: "một trạng từ",
        },
        {
          id: "u3_p2_q4",
          type: "input",
          question:
            "His songs are described as lovely and ________.",
          viHint: "tính từ mang nghĩa truyền cảm hứng",
        },
        {
          id: "u3_p2_q5",
          type: "input",
          question:
            "“Europe’s Skies” is one of Alexander’s most popular ________.",
          viHint: "danh từ chỉ bài hát đơn",
        },
        {
          id: "u3_p2_q6",
          type: "input",
          question:
            "Mai still listens to Alexander’s ________ album.",
          viHint: "album đầu tiên",
        },
        {
          id: "u3_p2_q7",
          type: "drag",
          blankText:
            "Mai usually loves listening to ________ and rock music.",
          options: ["rap", "pop", "folk", "classical"],
        },
        {
          id: "u3_p2_q8",
          type: "drag",
          blankText:
            "Some pop songs are ________, according to Mai.",
          options: ["fascinating", "boring", "noisy", "old"],
        },
        {
          id: "u3_p2_q9",
          type: "drag",
          blankText:
            "Nam will lend Mai the album after ________ tomorrow.",
          options: ["class", "school", "lunch", "practice"],
        },
        {
          id: "u3_p2_q10",
          type: "drag",
          blankText:
            "The conversation mainly focuses on music and personal ________.",
          options: ["taste", "career", "history", "education"],
        },
      ],

      answers: {
        u3_p2_q1: "composer",
        u3_p2_q2: "skillfully",
        u3_p2_q3: "well",
        u3_p2_q4: "inspirational",
        u3_p2_q5: "singles",
        u3_p2_q6: "debut",
        u3_p2_q7: "rap",
        u3_p2_q8: "fascinating",
        u3_p2_q9: "class",
        u3_p2_q10: "taste",
      },
    },
  ],
};

export default en10_u3_listen1;

// content/practice/listening/en10.u9.listen1.ts
import type { ListeningLesson } from "./types";

const en10_u9_listen1: ListeningLesson = {
  id: "en10.u9.listen1",
  unit: 9,
  skill: "listening",
  topicVi: "Ô nhiễm môi trường và bảo vệ môi trường",
  titleEn: "Environmental Pollution and Protection",
  youtubeId: "gsLaoMUp1Mg",
  descriptionEn:
    "Listen to a conversation about environmental pollution in urban and rural areas.",
  descriptionVi:
    "Nghe cuộc trò chuyện về tình trạng ô nhiễm môi trường ở thành thị và nông thôn.",

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
          id: "u9_p1_q1",
          type: "mcq",
          question:
            "Why couldn’t Steven sleep well last night?",
          options: [
            "A. He was ill",
            "B. The weather was too hot",
            "C. The construction site was too noisy",
            "D. He had too much work",
          ],
        },
        {
          id: "u9_p1_q2",
          type: "mcq",
          question:
            "Where does Steven wish to live?",
          options: [
            "A. In the city centre",
            "B. Near the construction site",
            "C. In a countryside village",
            "D. In another country",
          ],
        },
        {
          id: "u9_p1_q3",
          type: "mcq",
          question:
            "What environmental problems are mentioned in the village?",
          options: [
            "A. Noise and soil pollution",
            "B. Water and air pollution",
            "C. Light and noise pollution",
            "D. Water and soil pollution",
          ],
        },
        {
          id: "u9_p1_q4",
          type: "mcq",
          question:
            "What do the garment factories discharge into the river?",
          options: [
            "A. Clean water",
            "B. Untreated wastewater",
            "C. Agricultural chemicals",
            "D. Household waste",
          ],
        },
        {
          id: "u9_p1_q5",
          type: "mcq",
          question:
            "Why do farmers still use water from the river?",
          options: [
            "A. They prefer river water",
            "B. It is cheaper",
            "C. They have no other choice",
            "D. It helps crops grow faster",
          ],
        },
        {
          id: "u9_p1_q6",
          type: "mcq",
          question:
            "What do the factories also generate?",
          options: [
            "A. Loud noise",
            "B. Toxic gases",
            "C. Solid waste",
            "D. Waste oil",
          ],
        },
        {
          id: "u9_p1_q7",
          type: "mcq",
          question:
            "What action did the villagers take?",
          options: [
            "A. They moved away",
            "B. They protested on the street",
            "C. They sued the factories",
            "D. They closed the factories",
          ],
        },
        {
          id: "u9_p1_q8",
          type: "mcq",
          question:
            "Who will make the final decision about the problem?",
          options: [
            "A. The factory owners",
            "B. The villagers",
            "C. Environmental groups",
            "D. Local authorities",
          ],
        },
        {
          id: "u9_p1_q9",
          type: "mcq",
          question:
            "What may happen if the environment is seriously polluted?",
          options: [
            "A. People may lose their jobs",
            "B. People may suffer from dangerous diseases",
            "C. Crops will grow faster",
            "D. Noise pollution will disappear",
          ],
        },
        {
          id: "u9_p1_q10",
          type: "mcq",
          question:
            "What is the speakers’ final message?",
          options: [
            "A. Environmental problems only happen in cities",
            "B. Development should stop immediately",
            "C. Protecting the environment is urgent",
            "D. Pollution cannot be controlled",
          ],
        },
      ],

      answers: {
        u9_p1_q1: "C. The construction site was too noisy",
        u9_p1_q2: "C. In a countryside village",
        u9_p1_q3: "B. Water and air pollution",
        u9_p1_q4: "B. Untreated wastewater",
        u9_p1_q5: "C. They have no other choice",
        u9_p1_q6: "B. Toxic gases",
        u9_p1_q7: "C. They sued the factories",
        u9_p1_q8: "D. Local authorities",
        u9_p1_q9: "B. People may suffer from dangerous diseases",
        u9_p1_q10: "C. Protecting the environment is urgent",
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
          id: "u9_p2_q1",
          type: "input",
          question:
            "Steven couldn’t sleep well because of the ________ near his apartment.",
          viHint: "công trình xây dựng",
        },
        {
          id: "u9_p2_q2",
          type: "input",
          question:
            "The two most serious problems in the village are water and ________ pollution.",
          viHint: "ô nhiễm không khí",
        },
        {
          id: "u9_p2_q3",
          type: "input",
          question:
            "The factories discharge untreated ________ into the river.",
          viHint: "nước thải",
        },
        {
          id: "u9_p2_q4",
          type: "input",
          question:
            "Farmers use polluted river water for their ________.",
          viHint: "mùa màng",
        },
        {
          id: "u9_p2_q5",
          type: "input",
          question:
            "The villagers are waiting for a decision from the local ________.",
          viHint: "chính quyền",
        },
        {
          id: "u9_p2_q6",
          type: "input",
          question:
            "Environmental pollution may cause dangerous ________.",
          viHint: "bệnh tật",
        },
        {
          id: "u9_p2_q7",
          type: "drag",
          blankText:
            "Factories in the village produce huge amounts of toxic ________.",
          options: ["gases", "liquids", "chemicals", "materials"],
        },
        {
          id: "u9_p2_q8",
          type: "drag",
          blankText:
            "With the pace of development, environmental problems affect ________.",
          options: ["everyone", "only villagers", "only workers", "children only"],
        },
        {
          id: "u9_p2_q9",
          type: "drag",
          blankText:
            "The speakers agree that environmental protection is ________.",
          options: ["urgent", "optional", "impossible", "unnecessary"],
        },
        {
          id: "u9_p2_q10",
          type: "drag",
          blankText:
            "The conversation is mainly about environmental pollution and ________.",
          options: ["protection", "technology", "education", "healthcare"],
        },
      ],

      answers: {
        u9_p2_q1: "construction site",
        u9_p2_q2: "air",
        u9_p2_q3: "wastewater",
        u9_p2_q4: "crops",
        u9_p2_q5: "authorities",
        u9_p2_q6: "diseases",
        u9_p2_q7: "gases",
        u9_p2_q8: "everyone",
        u9_p2_q9: "urgent",
        u9_p2_q10: "protection",
      },
    },
  ],
};

export default en10_u9_listen1;

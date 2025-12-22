import type { WritingLesson } from "./types";

export const writingUnit6: WritingLesson = {
  unit: 6,
  topicVi: "Bà mẹ vừa đi làm vừa chăm lo gia đình",
  titleEn: "Unit 6 – Writing a Paragraph about Working Mothers",
  descriptionEn:
    "Review paragraph structure and practise writing about the advantages of working mothers with guided support.",
  descriptionVi:
    "Ôn tập cách viết đoạn văn và luyện viết đoạn văn về những lợi ích của các bà mẹ vừa đi làm vừa chăm lo gia đình.",

  /* ======================
   * THEORY
   * ====================== */
  theory: [
    {
      id: "review-structure",
      title: "1. Ôn tập cấu trúc đoạn văn",
      contentVi:
        "Một đoạn văn hoàn chỉnh cần có câu chủ đề, các ý bổ trợ và câu kết.",
      table: {
        headers: ["Thành phần", "Nội dung"],
        rows: [
          [
            "Topic sentence",
            "Giới thiệu rõ chủ đề hoặc khía cạnh cụ thể của chủ đề",
          ],
          [
            "Supporting idea 1",
            "First / Firstly / First and foremost, … + 2–3 câu giải thích",
          ],
          [
            "Supporting idea 2",
            "Second / Secondly / In addition / Besides, … + 2–3 câu giải thích",
          ],
          [
            "Supporting idea 3",
            "Third / Finally / Last, … + 2–3 câu giải thích",
          ],
          [
            "Concluding sentence",
            "Khái quát lại ý chính hoặc diễn đạt lại câu chủ đề",
          ],
        ],
      },
    },

    {
      id: "linking-words",
      title: "2. Từ nối thường dùng",
      items: [
        { en: "First, Firstly", vi: "Trước tiên" },
        { en: "Second, Secondly", vi: "Thứ hai" },
        { en: "Finally, Last", vi: "Cuối cùng" },
        { en: "In conclusion, In short, Clearly", vi: "Tóm lại" },
      ],
    },

    {
      id: "sample-paragraph",
      title: "3. Đoạn văn mẫu (tham khảo)",
      quoteEn:
        "Mothers should be greatly encouraged to work outside the home. First, working mothers contribute to household income. They help their husbands pay household expenses and satisfy their children's growing needs. Second, working mothers are good educators for their children. Experiences at work widen their knowledge and help them educate their children better. Finally, working mothers set good examples for their children. Clearly, mothers should be strongly supported to work outside the home.",
      contentVi:
        "Đoạn văn mẫu giúp các em tham khảo cách triển khai ý và sử dụng từ nối. Không chép nguyên văn.",
    },

    {
      id: "analysis",
      title: "4. Phân tích cấu trúc đoạn văn mẫu",
      table: {
        headers: ["Phần", "Ví dụ trong đoạn văn"],
        rows: [
          [
            "Topic sentence",
            "Mothers should be greatly encouraged to work outside the home.",
          ],
          [
            "Supporting idea 1",
            "First, working mothers contribute to household income.",
          ],
          [
            "Supporting idea 2",
            "Second, working mothers are good educators for their children.",
          ],
          [
            "Supporting idea 3",
            "Finally, working mothers set good examples for their children.",
          ],
          [
            "Concluding sentence",
            "Clearly, mothers should be strongly supported to work outside the home.",
          ],
        ],
      },
    },
  ],

  /* ======================
   * PRACTICE
   * ====================== */
  exercises: [
    {
      id: "page-1",
      title: "Write a paragraph about working mothers",
      instructionEn:
        "Write a paragraph (8–10 sentences) about the advantages of working mothers.",
      instructionVi:
        "Viết một đoạn văn (8–10 câu) nói về những lợi ích của các bà mẹ vừa đi làm vừa chăm lo gia đình.",
      exercises: [
        {
          type: "writing_prompt",
          id: "u6-working-mothers",
          title: "Advantages of working mothers",
          description:
            "Use topic sentence, supporting ideas and a concluding sentence. Do not copy the sample.",
          minSentences: 8,
          maxSentences: 10,
          cues: [
            "General opinion about working mothers",
            "First advantage + explanation",
            "Second advantage + explanation",
            "Third advantage + explanation",
            "Overall conclusion",
          ],
          noteVi:
            "Sử dụng từ nối như First, Second, Finally, Clearly để đoạn văn mạch lạc.",
        },
      ],
    },
  ],
};

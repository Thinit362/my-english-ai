import type { WritingLesson } from "./types";

export const writingUnit5: WritingLesson = {
  unit: 5,
  topicVi: "Lợi ích của một phát minh",
  titleEn: "Unit 5 – Writing a Paragraph on the Benefits of an Invention",
  descriptionEn:
    "Learn how to write a well-structured paragraph about the benefits of an invention, then practise writing with guided support.",
  descriptionVi:
    "Học cách viết một đoạn văn trình bày lợi ích của một phát minh, sau đó luyện viết dựa trên gợi ý.",

  /* ======================
   * THEORY
   * ====================== */
  theory: [
    {
      id: "overview",
      title: "1. Viết đoạn văn về lợi ích của một phát minh",
      contentEn:
        "A paragraph on the benefits of an invention explains how that invention is useful in daily life.",
      contentVi:
        "Đoạn văn về lợi ích của một phát minh nhằm giải thích phát minh đó mang lại những ích lợi gì trong cuộc sống.",
    },

    {
      id: "paragraph-structure",
      title: "2. Cấu trúc đoạn văn",
      table: {
        headers: ["Thành phần", "Chức năng"],
        rows: [
          [
            "Topic sentence",
            "Giới thiệu rõ phát minh và khía cạnh lợi ích sẽ trình bày",
          ],
          [
            "Supporting sentences",
            "Giải thích từng lợi ích bằng ví dụ hoặc chi tiết cụ thể",
          ],
          [
            "Concluding sentence",
            "Khái quát lại các lợi ích chính hoặc diễn đạt lại câu chủ đề",
          ],
        ],
      },
    },

    {
      id: "topic-sentence",
      title: "3. Câu chủ đề (Topic sentence)",
      items: [
        {
          en: "… has / offers certain benefits.",
          vi: "… có một số lợi ích nhất định.",
        },
        {
          en: "There are certain benefits of using …",
          vi: "Có một số lợi ích khi sử dụng …",
        },
        {
          en: "A pair of earbuds offers certain benefits.",
          vi: "Một đôi tai nghe mang lại một số lợi ích.",
        },
      ],
    },

    {
      id: "supporting-ideas",
      title: "4. Các ý bổ trợ (Supporting sentences)",
      contentVi:
        "Mỗi ý bổ trợ nên gồm 1 câu nêu ý chính và 2–3 câu giải thích hoặc ví dụ cụ thể.",
      table: {
        headers: ["Ý", "Mẫu câu & Ví dụ"],
        rows: [
          [
            "Ý bổ trợ 1",
            "Firstly, …\nFirstly, a pair of earbuds is small and light, so it is portable.",
          ],
          [
            "Giải thích",
            "Earbuds are not bulky.\nYou can put them in your bag or even in your pocket.",
          ],
          [
            "Ý bổ trợ 2",
            "Secondly, …\nSecondly, earbuds are not costly.",
          ],
          [
            "Giải thích",
            "They are not as expensive as a set of speakers.\nWith about 100,000 VND, you can get a pair.",
          ],
        ],
      },
    },

    {
      id: "concluding-sentence",
      title: "5. Câu kết (Concluding sentence)",
      items: [
        {
          en: "In short, …",
          vi: "Tóm lại, …",
        },
        {
          en: "In conclusion, a pair of earbuds is portable, cheap and private.",
          vi: "Tóm lại, tai nghe dễ mang theo, rẻ và mang tính riêng tư.",
        },
      ],
    },

    {
      id: "sample-paragraph",
      title: "6. Đoạn văn mẫu (tham khảo)",
      quoteEn:
        "Earbuds offer certain benefits that people can enjoy. Firstly, a pair of earbuds is small and light, so it is portable. Earbuds are not bulky. You can put them in your bag or even in your pocket. Secondly, earbuds are not costly. They are not as expensive as a set of speakers. With about 100,000 VND, you can get a pair. Finally, you can use earbuds everywhere without disturbing others. In conclusion, a pair of earbuds is convenient, cheap and private.",
      contentVi:
        "Đoạn văn mẫu giúp các em tham khảo cách triển khai ý và liên kết câu. Không chép nguyên văn.",
    },
  ],

  /* ======================
   * PRACTICE
   * ====================== */
  exercises: [
    {
      id: "page-1",
      title: "Write a paragraph on the benefits of an invention",
      instructionEn:
        "Write a paragraph (8–10 sentences) about the benefits of an invention you know.",
      instructionVi:
        "Viết một đoạn văn (8–10 câu) trình bày lợi ích của một phát minh mà em biết.",
      exercises: [
        {
          type: "writing_prompt",
          id: "u5-writing-benefits",
          title: "Benefits of an invention",
          description:
            "Choose ONE invention (e.g. earbuds, smartphone, washing machine). Do not copy the sample.",
          minSentences: 8,
          maxSentences: 10,
          cues: [
            "Name of the invention",
            "General benefit of the invention",
            "First specific benefit + explanation",
            "Second specific benefit + explanation",
            "Optional additional benefit",
            "Overall conclusion",
          ],
          noteVi:
            "Sử dụng liên từ như firstly, secondly, finally, in conclusion để đoạn văn mạch lạc.",
        },
      ],
    },
  ],
};

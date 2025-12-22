import type { WritingLesson } from "./types";

export const writingUnit7: WritingLesson = {
  unit: 7,
  topicVi: "Lợi ích khi Việt Nam gia nhập các tổ chức quốc tế",
  titleEn:
    "Unit 7 – Writing: Benefits for Viet Nam as a Member of International Organisations",
  descriptionEn:
    "Review paragraph structure and practise writing about the benefits for Viet Nam as a member of international organisations.",
  descriptionVi:
    "Ôn tập cấu trúc đoạn văn và luyện viết về lợi ích khi Việt Nam gia nhập các tổ chức quốc tế.",

  /* ======================
   * THEORY
   * ====================== */
  theory: [
    {
      id: "review-structure",
      title: "1. Ôn tập cấu trúc đoạn văn",
      contentVi:
        "Một đoạn văn gồm câu chủ đề, các ý bổ trợ và câu kết. Mỗi ý bổ trợ nên có câu nêu ý + 2–3 câu giải thích.",
      table: {
        headers: ["Thành phần", "Gợi ý triển khai"],
        rows: [
          [
            "Topic sentence",
            "Giới thiệu rõ chủ đề hoặc khía cạnh cụ thể (nêu số lợi ích nếu có)",
          ],
          [
            "Supporting idea 1",
            "First/Firstly/First and foremost, … + 2–3 câu giải thích/ ví dụ",
          ],
          [
            "Supporting idea 2",
            "Second/Secondly/In addition/Besides, … + 2–3 câu giải thích/ ví dụ",
          ],
          [
            "Supporting idea 3",
            "Third/Finally/Last, … + 2–3 câu giải thích/ ví dụ",
          ],
          [
            "Concluding sentence",
            "In conclusion/In short/Clearly, … (khái quát lại ý chính)",
          ],
        ],
      },
    },

    {
      id: "linking-words",
      title: "2. Từ nối giúp đoạn văn logic",
      items: [
        { en: "Firstly / Secondly / Finally", vi: "Trước hết / Thứ hai / Cuối cùng" },
        { en: "In addition / Besides", vi: "Ngoài ra" },
        { en: "For example / For instance", vi: "Ví dụ" },
        { en: "In conclusion / In short", vi: "Tóm lại" },
      ],
    },

    {
      id: "sample-paragraph",
      title: "3. Đoạn văn mẫu (tham khảo)",
      quoteEn:
        "Viet Nam has gained three main benefits since it joined different international organisations. Firstly, Viet Nam will have a chance to promote its culture and learn more about other cultures all over the world. Various cultural exchanges help visitors gain deeper knowledge about our country, especially about costumes, food, and traditions. Also, Vietnamese people can experience different cultures from other foreign friends. Secondly, participating in international organisations will create more educational opportunities for both Vietnamese and foreign students. These days, Viet Nam’s colleges and universities have accepted international students for studying and exchanging programmes. And of course, greater educational opportunities abroad are now open to Vietnamese students too. Finally, this participation will help increase both local and international tours. Viet Nam recently has become one of the most popular destinations for foreign tourists in the region. It is also easier for Vietnamese people to travel abroad. In conclusion, these benefits of being a member of international organisations will help to promote Viet Nam’s development in all aspects.",
      contentVi:
        "Đoạn mẫu giúp tham khảo cách triển khai ý & dùng từ nối. Không chép nguyên văn.",
    },

    {
      id: "analysis",
      title: "4. Phân tích cấu trúc đoạn văn mẫu",
      table: {
        headers: ["Phần", "Ví dụ trong đoạn văn"],
        rows: [
          [
            "Topic sentence",
            "Viet Nam has gained three main benefits since it joined different international organisations.",
          ],
          [
            "Supporting idea 1",
            "Firstly, Viet Nam will have a chance to promote its culture and learn more about other cultures all over the world.",
          ],
          [
            "Supporting idea 2",
            "Secondly, participating in international organisations will create more educational opportunities for both Vietnamese and foreign students.",
          ],
          [
            "Supporting idea 3",
            "Finally, this participation will help increase both local and international tours.",
          ],
          [
            "Concluding sentence",
            "In conclusion, these benefits ... will help to promote Viet Nam’s development in all aspects.",
          ],
        ],
      },
    },

    {
      id: "topic-ideas-bank",
      title: "5. Ngân hàng ý (gợi ý lợi ích thường gặp)",
      contentVi:
        "Khi viết, bạn có thể chọn 2–3 lợi ích tiêu biểu và giải thích cụ thể.",
      items: [
        {
          en: "Cultural promotion & cultural exchange",
          vi: "Quảng bá văn hoá và giao lưu văn hoá",
        },
        {
          en: "More educational opportunities (exchange programmes, scholarships)",
          vi: "Cơ hội giáo dục (trao đổi, học bổng)",
        },
        {
          en: "Tourism growth (local & international tourism)",
          vi: "Tăng trưởng du lịch (trong nước & quốc tế)",
        },
        {
          en: "Economic cooperation (trade, investment) — optional",
          vi: "Hợp tác kinh tế (thương mại, đầu tư) — có thể thêm",
        },
      ],
    },
  ],

  /* ======================
   * PRACTICE
   * ====================== */
  exercises: [
    {
      id: "page-1",
      title: "Write a paragraph about international organisations",
      instructionEn:
        "Write a paragraph (8–10 sentences) about the benefits for Viet Nam as a member of international organisations.",
      instructionVi:
        "Viết đoạn văn (8–10 câu) về lợi ích khi Việt Nam gia nhập các tổ chức quốc tế.",
      exercises: [
        {
          type: "writing_prompt",
          id: "u7-benefits-international-orgs",
          title: "Benefits for Viet Nam as a member of international organisations",
          description:
            "Use linking words (Firstly/Secondly/Finally/In conclusion). Do not copy the sample.",
          minSentences: 8,
          maxSentences: 10,
          cues: [
            "Topic sentence: introduce the topic (mention 2–3 main benefits)",
            "Benefit 1 (culture) + 2 supporting sentences (example/explanation)",
            "Benefit 2 (education) + 2 supporting sentences (example/explanation)",
            "Benefit 3 (tourism or economy) + 2 supporting sentences",
            "Concluding sentence: summarise the main benefits",
          ],
          noteVi:
            "Gợi ý: mỗi lợi ích nên có 1 câu nêu ý + 1–2 câu giải thích. Tránh liệt kê quá nhiều ý mà không giải thích.",
        },
      ],
    },
  ],
};

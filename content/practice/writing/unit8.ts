import type { WritingLesson } from "./types";

export const writingUnit8: WritingLesson = {
  unit: 8,
  topicVi: "Ưu/nhược điểm của thiết bị điện tử trong học tập",
  titleEn:
    "Unit 8 – Writing: Advantages/Disadvantages of Electronic Devices as Learning Tools",
  descriptionEn:
    "Practise writing a short essay about the advantages or disadvantages of electronic devices in learning.",
  descriptionVi:
    "Luyện viết bài văn ngắn về ưu điểm hoặc nhược điểm của việc sử dụng thiết bị điện tử trong học tập.",

  /* ======================
   * THEORY
   * ====================== */
  theory: [
    {
      id: "overview",
      title: "1. Mục tiêu bài viết",
      contentEn:
        "In this unit, you write a short essay about the advantages OR disadvantages of using electronic devices as learning tools.",
      contentVi:
        "Trong bài này, em viết một bài văn ngắn về ưu điểm HOẶC nhược điểm của thiết bị điện tử trong học tập.",
    },

    {
      id: "essay-structure",
      title: "2. Cấu trúc bài văn ngắn (Short essay structure)",
      table: {
        headers: ["Phần", "Nội dung cần có"],
        rows: [
          [
            "Introduction",
            "Nêu chủ đề + quan điểm (ủng hộ hoặc phản đối) + lý do chung",
          ],
          [
            "Body paragraph 1",
            "Luận điểm 1 + giải thích/ ví dụ",
          ],
          [
            "Body paragraph 2",
            "Luận điểm 2 + giải thích/ ví dụ",
          ],
          [
            "Body paragraph 3",
            "Luận điểm 3 + giải thích/ ví dụ",
          ],
          [
            "Conclusion",
            "Tóm tắt lại quan điểm + khẳng định/ đề xuất",
          ],
        ],
      },
    },

    {
      id: "linking-words",
      title: "3. Từ nối chuyển đoạn (Linking words)",
      items: [
        { en: "First, Firstly", vi: "Trước hết" },
        { en: "In addition, Besides", vi: "Ngoài ra" },
        { en: "Finally", vi: "Cuối cùng" },
        { en: "In short, In conclusion", vi: "Tóm lại" },
      ],
    },

    {
      id: "model-essay",
      title: "4. Bài văn mẫu (Advantages)",
      quoteEn:
        "Electronic devices are increasingly applied in classrooms. Personally, I support the use of these devices in learning because of several advantages they can bring about.\n\nFirst, electronic devices help students learn better. There are many useful learning applications on smartphones, computers or tablets such as dictionary, pronunciation, and recording. These applications allow students to check their effort immediately and learn from the mistakes.\n\nIn addition, students can relax and communicate with their friends at break time. Students relax by listening to music, playing games and chatting with their online friends between lessons. This helps them feel comfortable and excited about the next lesson.\n\nFinally, electronic devices help save time and make students' backpacks lighter. They let students look up information more quickly. They can store huge amounts of data, so students do not have to bring so many textbooks on their back.\n\nIn short, the use of electronic devices in the classroom should be encouraged as they benefit students a lot.",
      contentVi:
        "Bài mẫu để tham khảo ý và cách dùng từ nối. Không chép nguyên văn.",
    },

    {
      id: "key-ideas",
      title: "5. Rút ý chính từ bài mẫu",
      table: {
        headers: ["Nội dung", "Đáp án"],
        rows: [
          [
            "Advantage 1",
            "Electronic devices help students learn better.",
          ],
          [
            "Advantage 2",
            "Students can relax and communicate with friends at break time.",
          ],
          [
            "Advantage 3",
            "Electronic devices save time and make backpacks lighter.",
          ],
          [
            "Linking words",
            "First, In addition, Finally, In short",
          ],
        ],
      },
    },

    {
      id: "writing-tip",
      title: "6. Lưu ý khi viết",
      contentVi:
        "Em chỉ nên chọn 1 hướng: Ưu điểm hoặc Nhược điểm. Mỗi luận điểm cần có giải thích/ ví dụ để tránh liệt kê.",
      items: [
        {
          en: "Choose ONE side: advantages OR disadvantages.",
          vi: "Chọn MỘT hướng: ưu điểm hoặc nhược điểm.",
        },
        {
          en: "Each point needs an explanation or example.",
          vi: "Mỗi ý cần có giải thích hoặc ví dụ.",
        },
        {
          en: "Use clear linking words to connect paragraphs.",
          vi: "Dùng từ nối để chuyển đoạn rõ ràng.",
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
      title: "Write an essay: advantages OR disadvantages",
      instructionEn:
        "Write a short essay (3–4 paragraphs) about the advantages OR disadvantages of electronic devices as learning tools.",
      instructionVi:
        "Viết một bài văn ngắn (3–4 đoạn) về ưu điểm HOẶC nhược điểm của thiết bị điện tử trong học tập.",
      exercises: [
        {
          type: "writing_prompt",
          id: "u8-electronic-devices-essay",
          title: "Electronic devices as learning tools",
          description:
            "Choose ONE side (advantages OR disadvantages). Use linking words and give examples. Do not copy the model.",
          minSentences: 10,
          maxSentences: 14,
          cues: [
            "Introduction: introduce the topic + your opinion (support or oppose)",
            "Body 1: Point 1 + explanation/example",
            "Body 2: Point 2 + explanation/example",
            "Body 3: Point 3 + explanation/example",
            "Conclusion: summarise and restate your opinion",
            "Linking words: First, In addition, Finally, In short",
          ],
          noteVi:
            "Gemini chỉ chấm và góp ý (không viết hộ). Hãy đảm bảo mỗi đoạn có 1 ý chính + 1–2 câu giải thích.",
        },
      ],
    },
  ],
};

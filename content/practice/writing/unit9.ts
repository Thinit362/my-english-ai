import type { WritingLesson } from "./types";

export const writingUnit9: WritingLesson = {
  unit: 9,
  topicVi: "Các vấn đề môi trường và giải pháp bảo vệ môi trường",
  titleEn:
    "Unit 9 – Writing: Environmental Problems and Practical Solutions",
  descriptionEn:
    "Write a paragraph about an environmental problem and give practical advice to protect the environment.",
  descriptionVi:
    "Viết đoạn văn về một vấn đề môi trường và đưa ra những giải pháp, lời khuyên thiết thực để bảo vệ môi trường.",

  /* ======================
   * THEORY
   * ====================== */
  theory: [
    {
      id: "overview",
      title: "1. Mục tiêu bài viết",
      contentEn:
        "In this unit, students learn how to write about an environmental problem and suggest practical solutions.",
      contentVi:
        "Trong bài này, các em học cách viết về một vấn đề môi trường và đề xuất các giải pháp thực tiễn.",
    },

    {
      id: "paragraph-structure",
      title: "2. Cấu trúc đoạn văn",
      table: {
        headers: ["Đoạn", "Nội dung chính"],
        rows: [
          [
            "Paragraph 1",
            "Giới thiệu vấn đề môi trường (khái niệm / nguyên nhân / hậu quả)",
          ],
          [
            "Paragraph 2",
            "Hành động hoặc giải pháp để giải quyết vấn đề",
          ],
          [
            "Paragraph 3",
            "Kết luận: khẳng định tầm quan trọng + kêu gọi hành động",
          ],
        ],
      },
    },

    {
      id: "problem-introduction",
      title: "3. Giới thiệu vấn đề môi trường",
      contentVi:
        "Ở đoạn này, em cần nêu rõ vấn đề môi trường, nguyên nhân và hậu quả.",
      items: [
        {
          en: "Over the past 50 years, the average global temperature has increased rapidly.",
          vi: "Nhiệt độ trung bình toàn cầu đã tăng nhanh trong 50 năm qua.",
        },
        {
          en: "Global warming occurs as a result of CO2 emissions and greenhouse gases.",
          vi: "Nóng lên toàn cầu xảy ra do khí thải CO2 và khí nhà kính.",
        },
        {
          en: "This leads to extreme weather events and natural disasters.",
          vi: "Điều này dẫn đến thời tiết cực đoan và thiên tai.",
        },
      ],
    },

    {
      id: "solutions",
      title: "4. Hành động / giải pháp cho vấn đề",
      table: {
        headers: ["Giải pháp", "Ví dụ / Lợi ích"],
        rows: [
          [
            "Using energy-efficient appliances",
            "Giảm lượng khí CO2 thải ra môi trường",
          ],
          [
            "Reducing water waste",
            "Tiết kiệm năng lượng dùng để xử lý và bơm nước",
          ],
          [
            "Using public transportation",
            "Giảm ô nhiễm không khí và tiêu thụ nhiên liệu",
          ],
        ],
      },
    },

    {
      id: "linking-words",
      title: "5. Từ nối thường dùng",
      items: [
        { en: "In addition / Additionally", vi: "Thêm vào đó" },
        { en: "Moreover / Furthermore", vi: "Hơn nữa" },
        { en: "Besides", vi: "Bên cạnh đó" },
        { en: "Together / In conclusion", vi: "Cuối cùng / Kết luận" },
      ],
    },

    {
      id: "model-paragraph",
      title: "6. Đoạn văn mẫu",
      quoteEn:
        "Global warming has become an undeniable fact in our lives. Over the past 50 years, the average global temperature has increased at the fastest rate in recorded history. This environmental problem causes extreme weather events and natural disasters.\n\nInvesting in energy-efficient appliances is a good way to reduce CO2 emissions. In addition, reducing water waste and using public transportation can also help protect the environment.\n\nTogether, we can make our planet a better place for future generations.",
      contentVi:
        "Bài mẫu để tham khảo cách trình bày và phát triển ý. Không sao chép nguyên văn.",
    },

    {
      id: "writing-tips",
      title: "7. Lưu ý khi viết",
      items: [
        {
          en: "Focus on ONE environmental problem.",
          vi: "Chỉ tập trung vào MỘT vấn đề môi trường.",
        },
        {
          en: "Each solution should be explained clearly.",
          vi: "Mỗi giải pháp cần có giải thích.",
        },
        {
          en: "Use linking words to connect ideas.",
          vi: "Dùng từ nối để liên kết các ý.",
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
      title: "Write about an environmental problem and solutions",
      instructionEn:
        "Write a paragraph about ONE environmental problem and give some practical advice to protect the environment.",
      instructionVi:
        "Viết một đoạn văn về MỘT vấn đề môi trường và đưa ra các giải pháp, lời khuyên thực tế.",
      exercises: [
        {
          type: "writing_prompt",
          id: "u9-environment-problem",
          title: "Environmental problems and solutions",
          description:
            "Choose one environmental problem (e.g. global warming, pollution, waste). Explain the problem and suggest solutions.",
          minSentences: 8,
          maxSentences: 12,
          cues: [
            "Introduce the environmental problem",
            "Explain causes and effects",
            "Give at least 2 practical solutions",
            "Use linking words (In addition, Moreover, Together...)",
            "Conclude by encouraging people to take action",
          ],
          noteVi:
            "Gemini sẽ chấm theo rubric và đưa ra góp ý. Không viết hộ bài cho học sinh.",
        },
      ],
    },
  ],
};

import type { WritingLesson } from "./types";

export const writingUnit3: WritingLesson = {
  unit: 3,
  topicVi: "Tiểu sử nghệ sĩ nổi tiếng",
  titleEn: "Unit 3 – Writing a Brief Biography",
  descriptionEn:
    "Learn how to write a short biography of a famous artist using factual information and a clear structure.",
  descriptionVi:
    "Học cách viết tiểu sử ngắn về một nghệ sĩ nổi tiếng dựa trên hồ sơ thông tin và cấu trúc hợp lý.",

  /* =========================
   * THEORY
   * ========================= */
  theory: [
    {
      id: "what-is-biography",
      title: "1. Thế nào là tiểu sử (Biography)?",
      contentEn:
        "A biography describes a person’s life written by someone else. It focuses on important and outstanding facts.",
      contentVi:
        "Tiểu sử là bài viết mô tả cuộc đời của một người do người khác viết lại, tập trung vào các thông tin quan trọng và nổi bật.",
    },

    {
      id: "how-to-write",
      title: "2. Các bước viết tiểu sử ngắn",
      items: [
        {
          en: "Choose an artist you are interested in.",
          vi: "Chọn một nghệ sĩ mà em quan tâm.",
        },
        {
          en: "Find information from reliable sources (books, newspapers, the Internet).",
          vi: "Tìm thông tin từ các nguồn đáng tin cậy.",
        },
        {
          en: "Select only important and outstanding facts.",
          vi: "Chọn lọc các thông tin quan trọng và nổi bật.",
        },
        {
          en: "Write a short biography (usually 3–4 paragraphs).",
          vi: "Viết tiểu sử ngắn (thường 3–4 đoạn).",
        },
        {
          en: "Read again and correct spelling and grammar mistakes.",
          vi: "Đọc lại và sửa lỗi chính tả, ngữ pháp.",
        },
      ],
    },

    {
      id: "structure-table",
      title: "3. Cấu trúc bài viết tiểu sử",
      table: {
        headers: ["Main parts", "Contents"],
        rows: [
          [
            "Early years",
            "Name, date/place of birth, childhood, early background related to career.",
          ],
          [
            "Typical works",
            "Number of works and/or the most typical works.",
          ],
          [
            "Important achievements",
            "Major achievements and awards in life and career.",
          ],
          [
            "Conclusion",
            "Overall evaluation, influence, date/place of death (if any).",
          ],
        ],
      },
    },

    {
      id: "language-notes",
      title: "4. Lưu ý khi viết",
      items: [
        {
          en: "Arrange events in chronological order.",
          vi: "Sắp xếp các sự kiện theo trình tự thời gian.",
        },
        {
          en: "Use time expressions (when, after, during, in + year).",
          vi: "Sử dụng các cụm từ/mệnh đề chỉ thời gian.",
        },
        {
          en: "Use past tense consistently.",
          vi: "Sử dụng thì quá khứ một cách nhất quán.",
        },
      ],
    },

    {
      id: "fact-file-sample",
      title: "5. Hồ sơ thông tin mẫu (Fact file)",
      quoteEn:
        "Luu Huu Phuoc (1921–1989)\n" +
        "- Early years: Born on September 12, 1921 in Hau Giang (Can Tho).\n" +
        "- Typical works: Bach Dang Giang, Tieng Goi Thanh Nien, Giai Phong Mien Nam.\n" +
        "- Important achievements: Member of the National Assembly, Chairman of the Committee of Culture and Education, received the Ho Chi Minh Prize.\n" +
        "- Conclusion: A prominent cultural figure, died on June 16, 1989 in Ho Chi Minh City.",
    },

    {
      id: "model-biography",
      title: "6. Bài tiểu sử mẫu",
      quoteEn:
        "Luu Huu Phuoc was born on September 12, 1921 in Hau Giang (present Can Tho). He was a noted cultural figure and composer of many patriotic songs. Some of his typical works are Bach Dang Giang, Tieng Goi Thanh Nien, and Giai Phong Mien Nam. He was a member of the National Assembly and received the Ho Chi Minh Prize after his death. Luu Huu Phuoc was one of the most influential cultural figures in Vietnam. He died in 1989 in Ho Chi Minh City.",
    },
  ],

  /* =========================
   * PRACTICE
   * ========================= */
  exercises: [
    {
      id: "page-1",
      title: "Writing a brief biography",
      instructionEn:
        "Read the fact file below. Write a brief biography (8–10 sentences).",
      instructionVi:
        "Đọc hồ sơ thông tin dưới đây và viết một tiểu sử ngắn (8–10 câu).",

      exercises: [
        {
          type: "writing_prompt",
          id: "u3-writing-biography",
          title: "Write a brief biography",
          description:
            "Use the fact file to write a short biography. Do NOT copy the sample.",
          minSentences: 8,
          maxSentences: 10,

          cues: [
            "Who is the artist? When and where was he/she born?",
            "What was his/her childhood or early background?",
            "What are his/her typical works?",
            "What important achievements did he/she have?",
            "How influential was he/she?",
            "When and where did he/she die (if any)?",
          ],

          noteVi:
            "Hãy viết dựa trên hồ sơ thông tin. Giáo viên AI chỉ kiểm tra và gợi ý, không viết hộ.",
        },
      ],
    },
  ],
};

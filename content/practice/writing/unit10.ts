import type { WritingLesson } from "./types";

export const writingUnit10: WritingLesson = {
  unit: 10,
  topicVi: "Viết ấn phẩm quảng cáo du lịch (Travel brochure)",
  titleEn: "Unit 10 – Writing a Travel Brochure",
  descriptionEn:
    "Learn how to write a travel brochure and practise writing an advertisement based on a sample image.",
  descriptionVi:
    "Học cách viết một ấn phẩm quảng cáo du lịch và luyện viết dựa trên hình ảnh mẫu.",

  /* =====================
   * LÝ THUYẾT
   * ===================== */
  theory: [
    {
      id: "brochure-intro",
      title: "1. What is a brochure?",
      contentEn:
        "A brochure is a type of advertisement that provides brief and attractive information about a product, event, or tourist destination.",
      contentVi:
        "Brochure là một dạng ấn phẩm quảng cáo cung cấp thông tin ngắn gọn, hấp dẫn về sản phẩm, sự kiện hoặc địa điểm du lịch.",
    },

    {
      id: "brochure-structure",
      title: "2. Structure of a travel brochure",
      table: {
        headers: ["Part", "Contents", "Examples"],
        rows: [
          [
            "Name of destination",
            "Introduce the tourist destination",
            "Explore Phong Nha – Ke Bang in a day",
          ],
          [
            "Things to see / do",
            "Activities or attractions for visitors",
            "Enjoy the scenery of Phong Nha Cave; Boat trip on Son River",
          ],
          [
            "Trip information",
            "Price, schedule, duration",
            "Price: VND 1,000,000; Tour departs daily at 8.00 a.m.",
          ],
          [
            "Responsible tourism advice",
            "How to protect the environment",
            "Do not litter; Respect local culture",
          ],
          [
            "Pictures",
            "Images of the destination",
            "Photos of caves, rivers, landscapes",
          ],
          [
            "Contact information",
            "How customers can contact the company",
            "Phone number, address, website",
          ],
        ],
      },
    },

    {
      id: "dos-donts",
      title: "3. Dos and Don’ts when writing a brochure",
      table: {
        headers: ["DO", "DON’T"],
        rows: [
          [
            "Use second person pronoun (you)",
            "Write long and complicated sentences",
          ],
          [
            "Use short sentences and bullet points",
            "Design too many details",
          ],
          [
            "Use active voice",
            "Use passive voice too often",
          ],
          [
            "Add customer feedback or quotes",
            "Forget contact information",
          ],
        ],
      },
    },

    {
      id: "sample-analysis",
      title: "4. Sample brochure analysis (Phong Nha – Ke Bang)",
      items: [
        {
          en: "Destination name: Explore Phong Nha – Ke Bang in a day",
        },
        {
          en: "Activities: Boat trip on Son River, explore caves, enjoy natural scenery",
        },
        {
          en: "Trip information: Daily tour, clear schedule, price listed",
        },
        {
          en: "Ecotourism advice: Protect landscape, respect local culture",
        },
        {
          en: "Contact details: Phone number and website provided",
        },
      ],
      contentVi:
        "Một brochure tốt cần đầy đủ thông tin, ngắn gọn, hấp dẫn và hướng trực tiếp tới khách hàng.",
    },
  ],

  /* =====================
   * THỰC HÀNH VIẾT
   * ===================== */
  exercises: [
    {
      id: "page-1",
      title: "Writing a travel brochure",
      instructionEn:
        "Write a short travel brochure based on the given picture and cues.",
      instructionVi:
        "Viết một ấn phẩm quảng cáo du lịch ngắn dựa vào hình ảnh và các gợi ý dưới đây.",
      exercises: [
        {
          type: "writing_prompt",
          id: "u10-writing-brochure",
          title: "Write a travel brochure (8–12 sentences)",
          description:
            "Use the brochure structure. Write short, clear sentences. Do NOT write a long paragraph.",
          minSentences: 8,
          maxSentences: 12,
          cues: [
            "Name of the destination",
            "Things visitors can see or do",
            "Trip information (price, time, schedule)",
            "Advice for responsible tourists",
            "Contact information",
          ],
          noteVi:
            "Không cần viết theo đoạn văn dài. Có thể viết theo gạch đầu dòng hoặc các đoạn ngắn. Giáo viên AI chỉ góp ý, không viết hộ.",
        },
      ],
    },
  ],
};

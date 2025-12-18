// content/practice/writing/unit1.ts
import type { WritingLesson } from "./types";

export const writingUnit1: WritingLesson = {
  unit: 1,
  topicVi: "Cuộc sống gia đình – Chia sẻ việc nhà",
  titleEn: "Unit 1 – Family Life · Writing Practice",
  descriptionEn:
    "Learn how to write a paragraph about household chores using topic sentences, supporting sentences, and concluding sentences. Then write your own paragraph.",
  descriptionVi:
    "Học cách viết một đoạn văn về việc nhà với câu chủ đề – câu bổ trợ – câu kết. Sau đó viết đoạn văn của riêng bạn.",

  /* =========================
   * 1) LÝ THUYẾT
   * ========================= */
  theory: [
    {
      id: "prewriting-what-is-paragraph",
      title: "Pre-writing: Đoạn văn là gì?",
      contentEn:
        "A paragraph is a group of connected sentences about one topic. The sentences flow together to develop the main idea clearly.",
      contentVi:
        "Đoạn văn là sự kết hợp của nhiều câu cùng bàn luận về một chủ đề. Các câu được viết liền mạch để triển khai ý chính rõ ràng.",
    },

    {
      id: "model-paragraph",
      title: "Đoạn văn mẫu (Model paragraph)",
      contentEn:
        "Read the model paragraph below. Notice how it introduces the topic, gives details, and ends with a concluding idea.",
      contentVi:
        "Đọc đoạn văn mẫu dưới đây. Chú ý cách mở đoạn (câu chủ đề), triển khai ý (câu bổ trợ) và kết đoạn (câu kết).",
      quoteEn:
        "I used to be responsible for most, if not all of the household chores, but since I was diagnosed with an illness last June, I have watched my children and husband take over much of my role as a homemaker. My two children have voluntarily done the laundry, washed the dishes and helped a lot in the yard. In addition, they have helped each other with their homework, which really reduces the amount of time I need to spend helping them. My husband is a full-time civil engineer, but he tries to devote all his spare time to taking care of our home and managing the kids. He's also the one who would often come to my bed and ask if I needed anything. As my husband and children work together to do the tasks of a homemaker, the love and teamwork I have seen in my family this year has been remarkable.",
    },

    {
      id: "paragraph-structure-overview",
      title: "Cấu trúc cơ bản của một đoạn văn",
      contentEn:
        "In this unit, we focus on three main parts: Topic sentence → Supporting sentences → Concluding sentence.",
      contentVi:
        "Trong Unit này, ta tập trung 3 phần chính của đoạn văn: Câu chủ đề → Câu bổ trợ → Câu kết.",
      table: {
        headers: ["Main parts (Các phần chính)", "Function (Chức năng)"],
        rows: [
          [
            "Topic sentence (Câu chủ đề)",
            "• Giới thiệu chủ đề (topic) và các khía cạnh/ý chính (controlling ideas) sẽ được bàn luận.\n• Không nên quá chi tiết hoặc quá chung chung.",
          ],
          [
            "Supporting sentences (Câu bổ trợ)",
            "• Đưa chi tiết/ví dụ làm rõ các ý đã nêu trong câu chủ đề.\n• Phân bổ ý cân bằng và hợp lý.",
          ],
          [
            "Concluding sentence (Câu kết)",
            "• Khái quát lại nội dung đã trình bày hoặc diễn đạt lại câu chủ đề bằng từ ngữ khác nhưng nghĩa không đổi.",
          ],
        ],
      },
    },

    {
      id: "identify-parts",
      title: "Gợi ý phân tích đoạn mẫu",
      contentEn:
        "Try to identify the topic sentence, supporting sentences, and concluding sentence in the model paragraph.",
      contentVi:
        "Hãy thử xác định câu chủ đề, các câu bổ trợ và câu kết trong đoạn văn mẫu.",
      items: [
        {
          en: "Topic sentence: The first sentence introduces the topic (household chores) and controlling ideas (children + husband).",
          vi: "Câu chủ đề: Câu đầu tiên nêu chủ đề (việc nhà) và 2 ý chính (con cái + chồng).",
        },
        {
          en: "Supporting sentences: The next sentences give details (laundry, dishes, yard, homework; husband takes care of home/kids/wife).",
          vi: "Câu bổ trợ: Các câu sau đưa chi tiết (giặt đồ, rửa bát, làm vườn, bài tập; chồng chăm nhà/con/vợ).",
        },
        {
          en: "Concluding sentence: The last sentence summarizes the love and teamwork in the family.",
          vi: "Câu kết: Câu cuối khái quát tình yêu và tinh thần hợp tác trong gia đình.",
        },
      ],
    },
  ],

  /* =========================
   * 2) LUYỆN VIẾT (CHỈ WRITING PROMPT)
   * ========================= */
  exercises: [
    {
      id: "u1-writing-page",
      title: "Write a paragraph about doing household chores",
      instructionEn:
        "Write a paragraph (8–10 sentences) about how household chores are divided in your family. Use the cues below and follow the structure: topic sentence → supporting sentences → concluding sentence.",
      instructionVi:
        "Viết một đoạn văn (8–10 câu) về cách phân chia việc nhà trong gia đình em. Dùng câu hỏi gợi ý và viết theo cấu trúc: câu chủ đề → câu bổ trợ → câu kết.",
      exercises: [
        {
          type: "writing_prompt",
          id: "u1-writing-prompt",
          title: "Write a paragraph (8–10 sentences)",
          description:
            "Write about how household chores are divided in your family. Keep your ideas clear and organized.",
          minSentences: 8,
          maxSentences: 10,
          cues: [
            "How many people are there in your family?",
            "Do your parents both work to support your family? / Who is the breadwinner?",
            "Who is the homemaker?",
            "What chores do your parents do?",
            "Do you have quarrels with your brother/sister over chores?",
            "What chores does your brother/sister do?",
            "What chores are you responsible for?",
            "Is everyone happy with the chores they have to do? / Do you think housework is equally split in your family?",
          ],
          noteVi:
            "Hãy vận dụng cấu trúc đoạn văn (câu chủ đề – câu bổ trợ – câu kết) và từ vựng về việc nhà để viết bài.",
        },
      ],
    },
  ],
};

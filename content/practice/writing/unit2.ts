// content/practice/writing/unit2.ts
import type { WritingLesson } from "./types";

export const writingUnit2: WritingLesson = {
  unit: 2,
  topicVi: "Bảo vệ môi trường – Các cách cải thiện môi trường",

  titleEn: "Unit 2 – Writing: Ways to Improve the Environment",
  descriptionEn:
    "Learn how to write a well-structured paragraph about ways to improve the environment, using clear topic sentences, supporting details, and a concluding sentence.",
  descriptionVi:
    "Học cách viết một đoạn văn hoàn chỉnh về các cách cải thiện môi trường, sử dụng câu chủ đề rõ ràng, câu bổ trợ phù hợp và câu kết ngắn gọn.",

  /* ======================
   * THEORY
   * ====================== */
  theory: [
    {
      id: "overview",
      title: "What is the writing task?",
      contentEn:
        "In this unit, you will learn how to write a paragraph about different ways to improve the environment.",
      contentVi:
        "Trong bài học này, các em sẽ học cách viết một đoạn văn nói về các cách cải thiện môi trường.",
    },

    {
      id: "paragraph-structure",
      title: "Basic structure of a paragraph",
      contentEn:
        "A good paragraph usually consists of three main parts.",
      contentVi:
        "Một đoạn văn hoàn chỉnh thường bao gồm ba phần chính.",
      table: {
        headers: ["Main part", "Function"],
        rows: [
          [
            "Topic sentence",
            "Introduces the topic and the main ideas that will be discussed.",
          ],
          [
            "Supporting sentences",
            "Give details, examples, or explanations to support the topic sentence.",
          ],
          [
            "Concluding sentence",
            "Summarises the main ideas or restates the topic using different words.",
          ],
        ],
      },
    },

    {
      id: "topic-sentence",
      title: "Topic sentence – How to start your paragraph",
      contentEn:
        "The topic sentence should clearly introduce the topic and the specific aspect you want to talk about.",
      contentVi:
        "Câu chủ đề cần giới thiệu rõ ràng chủ đề và khía cạnh cụ thể mà em sẽ trình bày.",
      items: [
        {
          en: "There are many ways we can do to improve the environment.",
          vi: "Có nhiều cách chúng ta có thể làm để cải thiện môi trường.",
        },
        {
          en: "Here are some effective ways to protect and improve our environment.",
          vi: "Dưới đây là một số cách hiệu quả để bảo vệ và cải thiện môi trường.",
        },
      ],
      quoteEn:
        "There are a lot of things we can do to improve the environment around us, and here are three of the ways.",
    },

    {
      id: "supporting-sentences",
      title: "Supporting sentences – Developing your ideas",
      contentEn:
        "Supporting sentences explain the ways mentioned in the topic sentence. Each way should be explained with examples or benefits.",
      contentVi:
        "Các câu bổ trợ dùng để giải thích các cách đã nêu trong câu chủ đề. Mỗi cách nên có ví dụ hoặc lợi ích cụ thể.",
      table: {
        headers: ["Action", "Example", "Benefit"],
        rows: [
          [
            "Stop using single-use plastics",
            "Use metal straws or reusable bags",
            "Reduce plastic pollution",
          ],
          [
            "Cut down on waste",
            "Donate old clothes or books",
            "Reduce the amount of rubbish",
          ],
          [
            "Reduce water use",
            "Take short showers",
            "Reduce wastewater pollution",
          ],
          [
            "Use energy-saving appliances",
            "Change to energy-saving light bulbs",
            "Save electricity and reduce greenhouse gases",
          ],
          [
            "Plant more trees",
            "Plant trees around home or school",
            "Clean the air and fight climate change",
          ],
        ],
      },
    },

    {
      id: "linking-words",
      title: "Linking words for better coherence",
      contentEn:
        "Linking words help your paragraph become more logical and coherent.",
      contentVi:
        "Từ nối giúp đoạn văn mạch lạc và chặt chẽ hơn.",
      items: [
        { en: "first / firstly", vi: "đầu tiên" },
        { en: "second / secondly", vi: "thứ hai" },
        { en: "in addition / besides", vi: "ngoài ra" },
        { en: "for example / for instance", vi: "ví dụ" },
        { en: "finally", vi: "cuối cùng" },
        { en: "thereby / by doing this", vi: "qua đó" },
      ],
    },

    {
      id: "concluding-sentence",
      title: "Concluding sentence – Ending your paragraph",
      contentEn:
        "The concluding sentence briefly summarises the paragraph or restates the topic sentence in different words.",
      contentVi:
        "Câu kết dùng để khái quát lại nội dung đoạn văn hoặc diễn đạt lại câu chủ đề bằng cách khác.",
      items: [
        {
          en: "In conclusion, there are many ways to make the environment better, so we should take action now.",
          vi: "Tóm lại, có rất nhiều cách để cải thiện môi trường, vì vậy chúng ta nên hành động ngay.",
        },
      ],
    },
  ],

  /* ======================
   * PRACTICE – WRITING PROMPT
   * ====================== */
  exercises: [
    {
      id: "page-1",
      title: "Write a paragraph about ways to improve the environment",
      instructionEn:
        "Write a paragraph (8–10 sentences) about ways to improve the environment. Use the cues below to guide your writing.",
      instructionVi:
        "Viết một đoạn văn (8–10 câu) về các cách cải thiện môi trường. Sử dụng các câu hỏi gợi ý dưới đây.",
      exercises: [
        {
          type: "writing_prompt",
          id: "u2-writing-task",
          title: "Writing Task (8–10 sentences)",
          description:
            "Your paragraph should include a topic sentence, supporting sentences with examples, and a concluding sentence.",
          minSentences: 8,
          maxSentences: 10,
          cues: [
            "What is the environment problem you want to talk about?",
            "How many ways are you going to mention?",
            "What is the first way to improve the environment?",
            "Can you give an example or benefit of this action?",
            "What is the second way?",
            "What is the third way?",
            "How do these actions help the environment?",
            "What should people do in the future?",
          ],
          noteVi:
            "Hãy chú ý sử dụng từ nối (first, second, in addition, finally...) và đảm bảo đoạn văn có đủ câu chủ đề – câu bổ trợ – câu kết.",
        },
      ],
    },
  ],
};

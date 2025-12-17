// content/practice/writing/unit1.ts
import type { WritingLesson } from "./types";

export const writingUnit1: WritingLesson = {
  unit: 1,
  topicVi: "Cuộc sống gia đình – Chia sẻ việc nhà",
  titleEn: "Unit 1 – Family Life · Writing Practice",
  descriptionEn:
    "Learn the basic structure of a paragraph (topic sentence, supporting sentences, concluding sentence). Then practise with multiple-choice tasks and a guided writing task.",
  descriptionVi:
    "Học cấu trúc đoạn văn (câu chủ đề, câu bổ trợ, câu kết). Sau đó luyện tập trắc nghiệm và bài viết theo câu hỏi gợi ý.",

  /* ======== LÝ THUYẾT ======== */
  theory: [
    {
      id: "u1-overview",
      title: "Luyện viết",
      contentEn: "Write a paragraph about doing household chores.",
      contentVi: "(Viết một đoạn văn về việc làm các công việc nhà.)",
    },
    {
      id: "u1-prewriting",
      title: "Pre-writing",
      contentVi:
        "Để giúp các em có thể viết tốt được một đoạn văn, trong phần này, chúng ta sẽ cùng tìm hiểu thế nào là một đoạn văn và thành phần cơ bản của một đoạn văn gồm những gì.",
    },
    {
      id: "u1-sample",
      title: "Đoạn văn mẫu (Sample paragraph)",
      contentVi: "Trước tiên, các em hãy nhìn vào đoạn văn mẫu dưới đây:",
      quoteEn:
        "I used to be responsible for most, if not all of the household chores, but since I was diagnosed with an illness last June, I have watched my children and husband take over much of my role as a homemaker. My two children have voluntarily done the laundry, washed the dishes and helped a lot in the yard. In addition, they have helped each other with their homework, which really reduces the amount of time I need to spend helping them. My husband is a full-time civil engineer, but he tries to devote all his spare time to taking care of our home and managing the kids. He's also the one who would often come to my bed and ask if I needed anything. As my husband and children work together to do the tasks of a homemaker, the love and teamwork I have seen in my family this year has been remarkable.",
    },
    {
      id: "u1-what-is-paragraph",
      title: "Đoạn văn là gì?",
      contentVi:
        "Đoạn văn là sự kết hợp của nhiều câu văn cùng bàn luận về một chủ đề. Và các câu văn này được viết liền mạch thành một đoạn.",
    },
    {
      id: "u1-topic-sentence",
      title: "Câu chủ đề (Topic sentence)",
      contentVi:
        'Câu đầu tiên trong đoạn văn mẫu đóng vai trò là câu chủ đề (topic sentence) – giới thiệu cho người đọc biết đoạn văn viết về vấn đề gì. Trong đoạn mẫu, vấn đề là "household chores" với hai khía cạnh: "Children do housework" và "Husband does housework".',
    },
    {
      id: "u1-supporting",
      title: "Các câu bổ trợ (Supporting sentences)",
      contentVi:
        "4 câu sau đó là các câu bổ trợ (supporting sentences) để làm rõ ý cho các khía cạnh trong câu chủ đề đầu tiên.",
      items: [
        {
          en: "Children do housework",
          vi: "do the laundry, wash the dishes, help in the yard and help each other with homework",
        },
        {
          en: "Husband does housework",
          vi: "take care of home, manage the kids and take care of his wife",
        },
      ],
    },
    {
      id: "u1-concluding",
      title: "Câu kết (Concluding sentence)",
      contentVi:
        "Câu cuối cùng đóng vai trò là câu kết (concluding sentence) – người viết nhắc lại một cách khái quát nội dung đã trình bày.",
    },
    {
      id: "u1-summary-table",
      title: "Bảng tổng hợp cấu trúc đoạn văn",
      table: {
        headers: ["Main parts (Các phần chính)", "Function (Chức năng)"],
        rows: [
          [
            "Topic sentence (Câu chủ đề)",
            "Giới thiệu chủ đề (topic) và các khía cạnh (controlling ideas) sẽ bàn luận. Câu chủ đề không nên quá chi tiết hoặc quá chung chung.",
          ],
          [
            "Supporting sentences (Câu bổ trợ)",
            "Đưa ra các câu bổ trợ để làm sáng tỏ controlling ideas. Phân bổ các câu bổ trợ cân bằng và hợp lý.",
          ],
          [
            "Concluding sentence (Câu kết)",
            "Khái quát lại nội dung đã trình bày trong đoạn văn hoặc diễn đạt lại câu chủ đề sử dụng từ ngữ khác sao cho nghĩa không đổi.",
          ],
        ],
      },
    },
  ],

  /* ======== BÀI TẬP LUYỆN VIẾT (THEO TRANG) ======== */
  exercises: [
    {
      id: "page-1",
      title: "Practice Exercises (Multiple Choice)",
      instructionEn:
        "Choose the best sentence for each question. Then check your answers.",
      instructionVi:
        "Chọn đáp án đúng cho mỗi câu hỏi, sau đó bấm chấm điểm để kiểm tra.",

      exercises: [
        {
          type: "mcq",
          id: "u1-mcq-concluding",
          title: "I. Choose the best concluding sentence",
          description:
            "Chọn câu kết đoạn phù hợp nhất cho mỗi câu chủ đề. (Câu kết đoạn thường diễn đạt lại ý của câu chủ đề.)",
          questions: [
            {
              id: "u1-c1",
              prompt:
                "Topic sentence 1: Many women are both breadwinners and homemakers of their families.",
              options: [
                {
                  id: "A",
                  text: "A lot of women earn money to support their families while managing their homes.",
                },
                {
                  id: "B",
                  text: "Nowadays women can earn a lot of money to support their families.",
                },
                { id: "C", text: "Men should help women with housework." },
              ],
              correctOptionId: "A",
            },
            {
              id: "u1-c2",
              prompt: "Topic sentence 2: Men build the house and women make it home.",
              options: [
                {
                  id: "A",
                  text: "Both husbands and wives should be responsible for household finances.",
                },
                {
                  id: "B",
                  text: "Women are not successful at the workplace as men do.",
                },
                {
                  id: "C",
                  text: "Though men may earn more money, they are not as good as their wives at homemaking.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "u1-c3",
              prompt: "Topic sentence 3: Chores should be split equally among siblings.",
              options: [
                {
                  id: "A",
                  text: "Children in a family should do the same amount of housework.",
                },
                {
                  id: "B",
                  text: "It's not easy to divide chores equally among brothers and sisters.",
                },
                {
                  id: "C",
                  text: "Boys should do the heavy lifting rather than girls.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "u1-c4",
              prompt:
                "Topic sentence 4: Women are traditionally expected to do more chores in South Korea.",
              options: [
                {
                  id: "A",
                  text: "In South Korea, husbands do not help their wives do housework.",
                },
                {
                  id: "B",
                  text: "Housework is done much less by South Korean husbands than by their wives.",
                },
                { id: "C", text: "South Korean men are the laziest in doing chores." },
              ],
              correctOptionId: "B",
            },
          ],
        },

        {
          type: "mcq",
          id: "u1-mcq-supporting",
          title: "II. Choose the best supporting sentence",
          description:
            "Chọn 1 câu bổ trợ phù hợp nhất cho mỗi câu chủ đề. (Câu bổ trợ phù hợp phải giúp làm sáng tỏ câu chủ đề.)",
          questions: [
            {
              id: "u1-s1",
              prompt: "Topic sentence 1: My father usually shares household chores with my mother.",
              options: [
                {
                  id: "A",
                  text: "He is a busy man but my family usually goes on a picnic on weekends.",
                },
                {
                  id: "B",
                  text: "My brother is strong so he can help do the heavy lifting.",
                },
                {
                  id: "C",
                  text: "My father does not go to work on Sunday so he helps prepare dinners.",
                },
              ],
              correctOptionId: "C",
            },
            {
              id: "u1-s2",
              prompt:
                "Topic sentence 2: In many developing countries, girls have to take responsibility for more chores than boys.",
              options: [
                {
                  id: "A",
                  text: "Many boys and girls do not go to school so they start working early.",
                },
                {
                  id: "B",
                  text:
                    "For example, in India, girls have to cook, take care of their younger siblings and do the laundry while boys can hang out with their friends.",
                },
                {
                  id: "C",
                  text: "For instance, Chinese husbands rarely share housework with their wives.",
                },
              ],
              correctOptionId: "B",
            },
            {
              id: "u1-s3",
              prompt: "Topic sentence 3: Children should help their parents do housework.",
              options: [
                { id: "A", text: "Doing chores teaches children responsibility and skills." },
                { id: "B", text: "Some chores can cause injuries to young children." },
                {
                  id: "C",
                  text: "Some children should not do chores because it can badly affect their studies.",
                },
              ],
              correctOptionId: "A",
            },
            {
              id: "u1-s4",
              prompt: "Topic sentence 4: I think chore is divided equally in my family.",
              options: [
                { id: "A", text: "My father joins hands with my mother in doing chores." },
                {
                  id: "B",
                  text: "My father works hard to earn money and my mother stays at home.",
                },
                {
                  id: "C",
                  text: "My younger brother does not do as much housework as I do.",
                },
              ],
              correctOptionId: "A",
            },
          ],
        },
      ],
    },

    {
      id: "page-2",
      title: "Writing Task (8–10 sentences)",
      instructionEn:
        "Write a paragraph about how household chores are divided in your family. Use the cues below to guide your writing.",
      instructionVi:
        "Viết một đoạn văn về sự phân chia việc nhà trong gia đình em. Dùng các câu hỏi gợi ý để triển khai bài viết.",

      exercises: [
        {
          type: "writing_prompt",
          id: "u1-writing-task",
          title: "Write a paragraph (8–10 sentences)",
          description:
            "Trả lời các câu hỏi gợi ý theo thứ tự để tạo thành một đoạn văn hoàn chỉnh (có topic sentence, supporting sentences, concluding sentence).",
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
            "Is everyone happy with the chores they have to do? / Do you think that housework is equally split in your family?",
          ],
          noteVi:
            "Các em hãy chú ý vận dụng kiến thức phần Pre-writing và các từ vựng đã học để viết bài.",
        },
      ],
    },
  ],
};

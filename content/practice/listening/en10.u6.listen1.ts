// content/practice/listening/en10.u6.listen1.ts
import type { ListeningLesson } from "./types";

const en10_u6_listen1: ListeningLesson = {
  id: "en10.u6.listen1",
  unit: 6,
  skill: "listening",
  topicVi: "Bình đẳng giới trong công việc và giáo dục",
  titleEn: "Gender Equality and Inequality",
  youtubeId: "jmNTb94Um8E",
  descriptionEn:
    "Listen to two conversations about gender equality at work and gender inequality in education.",
  descriptionVi:
    "Nghe hai đoạn hội thoại về bình đẳng giới trong công việc và bất bình đẳng giới trong giáo dục.",

  exercises: [
    // ================= PAGE 1 =================
    {
      id: "page1",
      title: "Listening – Part 1: Gender Equality at Work",
      instructionEn:
        "Listen to the first conversation and choose the best answer.",
      instructionVi:
        "Nghe đoạn hội thoại thứ nhất và chọn đáp án đúng.",

      questions: [
        {
          id: "u6_p1_q1",
          type: "mcq",
          question: "Who is Mr Steven Matthew?",
          options: [
            "A. A teacher",
            "B. A company director",
            "C. A reporter",
            "D. A university student",
          ],
        },
        {
          id: "u6_p1_q2",
          type: "mcq",
          question: "What does Steven think about discrimination at work?",
          options: [
            "A. It is sometimes necessary",
            "B. It should be eliminated",
            "C. It helps productivity",
            "D. It is unavoidable",
          ],
        },
        {
          id: "u6_p1_q3",
          type: "mcq",
          question:
            "According to Steven, women ________ men in certain fields.",
          options: [
            "A. are weaker than",
            "B. are slower than",
            "C. excel more than",
            "D. depend on",
          ],
        },
        {
          id: "u6_p1_q4",
          type: "mcq",
          question: "Does Steven prioritise female staff over male staff?",
          options: [
            "A. Yes, always",
            "B. Yes, sometimes",
            "C. No, he doesn’t",
            "D. He is unsure",
          ],
        },
        {
          id: "u6_p1_q5",
          type: "mcq",
          question:
            "What does gender equality at work mean according to Steven?",
          options: [
            "A. Women should be paid more",
            "B. Women should be prioritised",
            "C. Equal rights regardless of gender",
            "D. Men should work harder",
          ],
        },
        {
          id: "u6_p1_q6",
          type: "mcq",
          question:
            "If a man and a woman produce the same work results, they will get ________.",
          options: [
            "A. different salaries",
            "B. the same salary",
            "C. bonuses only",
            "D. promotions only",
          ],
        },
        {
          id: "u6_p1_q7",
          type: "mcq",
          question:
            "What do employees receive equally at Big One Company?",
          options: [
            "A. Offices",
            "B. Training",
            "C. Holidays",
            "D. Working hours",
          ],
        },
        {
          id: "u6_p1_q8",
          type: "mcq",
          question:
            "What solution does Steven suggest to eliminate discrimination?",
          options: [
            "A. Hiring only women",
            "B. Forming diverse teams",
            "C. Reducing women’s workload",
            "D. Increasing salaries",
          ],
        },
        {
          id: "u6_p1_q9",
          type: "mcq",
          question: "Who is Samantha?",
          options: [
            "A. A student",
            "B. A manager",
            "C. An interviewer",
            "D. A company employee",
          ],
        },
        {
          id: "u6_p1_q10",
          type: "mcq",
          question:
            "Which statement best summarises the conversation?",
          options: [
            "A. Women should lead companies",
            "B. Men and women should compete",
            "C. Gender equality brings equal opportunities",
            "D. Women need special treatment",
          ],
        },
      ],

      answers: {
        u6_p1_q1: "B. A company director",
        u6_p1_q2: "B. It should be eliminated",
        u6_p1_q3: "C. excel more than",
        u6_p1_q4: "C. No, he doesn’t",
        u6_p1_q5: "C. Equal rights regardless of gender",
        u6_p1_q6: "B. the same salary",
        u6_p1_q7: "B. Training",
        u6_p1_q8: "B. Forming diverse teams",
        u6_p1_q9: "C. An interviewer",
        u6_p1_q10: "C. Gender equality brings equal opportunities",
      },

      explanations: {
        u6_p1_q1:
          "Steven Matthew được giới thiệu là director (giám đốc) của Big One Company.",
        u6_p1_q2:
          "Steven nói rõ discrimination at work 'should be eliminated'.",
        u6_p1_q3:
          "Ông khẳng định phụ nữ thậm chí còn 'excel more than men in certain fields'.",
        u6_p1_q4:
          "Steven nói không nên ưu tiên phụ nữ chỉ vì họ là nữ.",
        u6_p1_q5:
          "Bình đẳng giới nghĩa là nam và nữ có quyền như nhau, không phụ thuộc giới tính.",
        u6_p1_q6:
          "Nếu kết quả công việc giống nhau, họ nhận cùng mức lương.",
        u6_p1_q7:
          "Ngoài lương, nhân viên còn được đào tạo bình đẳng.",
        u6_p1_q8:
          "Giải pháp là lập nhóm đa dạng và hợp tác.",
        u6_p1_q9:
          "Samantha là người đặt câu hỏi → vai trò phỏng vấn.",
        u6_p1_q10:
          "Toàn bộ đoạn nói nhấn mạnh cơ hội bình đẳng cho cả nam và nữ.",
      },
    },

    // ================= PAGE 2 =================
    {
      id: "page2",
      title: "Listening – Part 2: Gender Inequality in Education",
      instructionEn:
        "Listen to the second conversation and complete the tasks.",
      instructionVi:
        "Nghe đoạn hội thoại thứ hai và hoàn thành yêu cầu.",

      questions: [
        {
          id: "u6_p2_q1",
          type: "input",
          question:
            "The student has a speaking test about gender ________.",
          viHint: "bất bình đẳng",
        },
        {
          id: "u6_p2_q2",
          type: "input",
          question:
            "Dad suggests talking about gender inequality in ________.",
          viHint: "lĩnh vực",
        },
        {
          id: "u6_p2_q3",
          type: "input",
          question:
            "Grandma completed only ________ secondary school.",
          viHint: "cấp học",
        },
        {
          id: "u6_p2_q4",
          type: "input",
          question:
            "Grandma had to work so her ________ could continue studying.",
          viHint: "anh/em trai",
        },
        {
          id: "u6_p2_q5",
          type: "input",
          question:
            "Many girls in the past had to quit school to support their ________.",
          viHint: "gia đình",
        },
        {
          id: "u6_p2_q6",
          type: "input",
          question:
            "In some areas, girls may have worse study ________ than boys.",
          viHint: "kết quả",
        },
        {
          id: "u6_p2_q7",
          type: "drag",
          blankText:
            "Girls still have to do more ________ than boys in some mountainous areas.",
          options: ["housework", "homework", "sports", "projects"],
        },
        {
          id: "u6_p2_q8",
          type: "drag",
          blankText:
            "They even have to work in the ________ for more hours.",
          options: ["fields", "offices", "factories", "shops"],
        },
        {
          id: "u6_p2_q9",
          type: "drag",
          blankText:
            "This situation badly affects their ________.",
          options: ["studies", "health", "hobbies", "plans"],
        },
        {
          id: "u6_p2_q10",
          type: "drag",
          blankText:
            "Girls are admitted to some university majors in limited numbers, like ________.",
          options: ["firefighting", "music", "law", "literature"],
        },
      ],

      answers: {
        u6_p2_q1: "inequality",
        u6_p2_q2: "education",
        u6_p2_q3: "lower",
        u6_p2_q4: "brother",
        u6_p2_q5: "families",
        u6_p2_q6: "results",
        u6_p2_q7: "housework",
        u6_p2_q8: "fields",
        u6_p2_q9: "studies",
        u6_p2_q10: "firefighting",
      },

      explanations: {
        u6_p2_q1:
          "Chủ đề bài nói là gender inequality.",
        u6_p2_q3:
          "Lower secondary school = cấp THCS.",
        u6_p2_q7:
          "Girls have to do more housework → dẫn đến bất lợi học tập.",
        u6_p2_q10:
          "Firefighting được nhắc như ví dụ ngành học hạn chế nữ.",
      },
    },
  ],
};

export default en10_u6_listen1;

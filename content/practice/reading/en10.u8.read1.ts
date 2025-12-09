import type { ReadingLesson } from "./types";

const en10_u8_read1: ReadingLesson = {
  id: "en10.u8.read1",
  unit: 8,
  skill: "reading",
  topicVi: "Phương pháp học trực tuyến",
  titleEn: "Online learning methods",

  passage: [
    "The Internet has profoundly changed education in many ways. For one, it has offered more opportunities for people of all ages and personalities to learn new things according to their interests. Research has shown that shy students benefit more from online learning than from face-to-face classes. There are study forums where they can raise their voice without the fear of speaking in front of classmates.",
    "Many people are taking online courses because they're more cost-saving and convenient than in-person classes. For example, if you want to take an English course while working, an online course will better suit your schedule. The Internet offers many free English learning websites; some websites are fee-paying but usually have better learning materials specifically designed for different groups of learners.",
    "For those advantages, many schools are redesigning their learning spaces to enable online learning. How should learners prepare themselves for effective online learning? First, they have to learn how to use learning tools so that they can find resources and clearly understand instructions. Second, they need to manage their time seriously. Cyber-learning fails if learners don't spend enough quality time on their learning. Another piece of advice is to find one or more companions, whether among your real-life friends or other online learners. This may motivate you to make progress."
  ],

  translation: [
    "Internet đã làm thay đổi sâu sắc nền giáo dục theo nhiều cách. Trước hết, nó mang lại nhiều cơ hội hơn cho mọi người ở mọi lứa tuổi, mọi tính cách được học những điều mới theo đúng sở thích của mình. Nghiên cứu cho thấy học sinh nhút nhát được lợi nhiều hơn từ việc học trực tuyến so với lớp học trực tiếp. Có những diễn đàn học tập nơi các em có thể cất tiếng nói mà không sợ phải phát biểu trước mặt bạn bè.",
    "Nhiều người tham gia các khóa học trực tuyến vì chúng tiết kiệm chi phí và thuận tiện hơn lớp học trực tiếp. Ví dụ, nếu bạn muốn học một khóa tiếng Anh trong khi vẫn đi làm, khóa học trực tuyến sẽ phù hợp với lịch trình của bạn hơn. Internet cung cấp rất nhiều trang web học tiếng Anh miễn phí; một số trang thu phí nhưng thường có tài liệu học tập chất lượng hơn, được thiết kế riêng cho các nhóm người học khác nhau.",
    "Nhờ những ưu điểm đó, nhiều trường đang thiết kế lại không gian học để hỗ trợ học trực tuyến. Người học nên chuẩn bị gì để việc học trực tuyến hiệu quả? Thứ nhất, họ phải biết cách sử dụng các công cụ học tập để có thể tìm tài nguyên và hiểu rõ hướng dẫn. Thứ hai, họ cần quản lý thời gian nghiêm túc. Học trực tuyến sẽ thất bại nếu người học không dành đủ thời gian chất lượng cho việc học. Một lời khuyên khác là hãy tìm một hoặc vài người bạn đồng hành, có thể là bạn ngoài đời hoặc bạn học online. Điều này có thể tạo động lực giúp bạn tiến bộ."
  ],

  exercises: [
    /* =========================
       PAGE 1 – DRAG & DROP (5 câu)
       ========================= */
    {
      id: "page1",
      title: "Fill in the blanks (Drag & Drop)",
      instructionEn:
        "Drag the correct word from the box into each blank. There are 2 extra words you will NOT use.",
      instructionVi:
        "Kéo từ đúng vào chỗ trống. Có 2 từ gây nhiễu không sử dụng.",

      questions: [
        {
          id: "q1",
          type: "drag",
          blankText:
            "Research has shown that shy students benefit from online learning because they can join study ______.",
          viHint: "diễn đàn học tập",
          options: [
            "forums",         // đúng
            "convenient",     // đúng ở câu khác
            "schedule",       // đúng ở câu khác
            "materials",      // đúng ở câu khác
            "companions",     // đúng ở câu khác
            "tools",          // nhiễu
            "spaces"          // nhiễu
          ]
        },
        {
          id: "q2",
          type: "drag",
          blankText:
            "Online courses are described as more cost-saving and ______ than in-person classes.",
          viHint: "thuận tiện",
          options: [
            "forums",
            "convenient",
            "schedule",
            "materials",
            "companions",
            "tools",
            "spaces"
          ]
        },
        {
          id: "q3",
          type: "drag",
          blankText:
            "If you work and study at the same time, an online course can better suit your ______.",
          viHint: "lịch trình",
          options: [
            "forums",
            "convenient",
            "schedule",
            "materials",
            "companions",
            "tools",
            "spaces"
          ]
        },
        {
          id: "q4",
          type: "drag",
          blankText:
            "Some fee-paying websites usually have better learning ______ for different groups of learners.",
          viHint: "tài liệu học tập",
          options: [
            "forums",
            "convenient",
            "schedule",
            "materials",
            "companions",
            "tools",
            "spaces"
          ]
        },
        {
          id: "q5",
          type: "drag",
          blankText:
            "Finding one or more ______ can motivate you to make progress in online learning.",
          viHint: "bạn đồng hành",
          options: [
            "forums",
            "convenient",
            "schedule",
            "materials",
            "companions",
            "tools",
            "spaces"
          ]
        }
      ],

      answers: {
        q1: "forums",
        q2: "convenient",
        q3: "schedule",
        q4: "materials",
        q5: "companions"
      },

      explanations: {
        q1: "Đoạn 1: 'There are study forums where they can raise their voice...'.",
        q2: "Đoạn 2: online courses are 'more cost-saving and convenient'.",
        q3: "Đoạn 2: an online course will better suit your schedule.",
        q4: "Đoạn 2: some websites have better learning materials.",
        q5: "Đoạn 3: 'find one or more companions ... This may motivate you to make progress'."
      }
    },

    /* =========================
       PAGE 2 – MCQ (5 câu)
       ========================= */
    {
      id: "page2",
      title: "Reading comprehension",
      instructionEn: "Choose the best answer (A, B, or C).",
      instructionVi: "Chọn đáp án đúng (A, B hoặc C).",

      questions: [
        {
          id: "q6",
          type: "mcq",
          question:
            "Why do shy students benefit more from online learning according to the text?",
          options: [
            "A. Because they don’t need to do homework.",
            "B. Because they can learn without using cameras.",
            "C. Because they can express themselves on forums without fear."
          ]
        },
        {
          id: "q7",
          type: "mcq",
          question:
            "Which of the following is an advantage of online courses mentioned in the passage?",
          options: [
            "A. They are always free for everyone.",
            "B. They are more cost-saving and convenient than in-person classes.",
            "C. They do not require any learning tools."
          ]
        },
        {
          id: "q8",
          type: "mcq",
          question:
            "What is one important requirement for effective online learning?",
          options: [
            "A. Spending enough quality time and managing time seriously.",
            "B. Joining as many courses as possible at the same time.",
            "C. Studying only late at night."
          ]
        },
        {
          id: "q9",
          type: "mcq",
          question:
            "Why are schools redesigning their learning spaces?",
          options: [
            "A. To reduce the number of teachers.",
            "B. To enable and support online learning.",
            "C. To make classrooms smaller."
          ]
        },
        {
          id: "q10",
          type: "mcq",
          question:
            "What can be inferred from the passage about online learning?",
          options: [
            "A. It is only suitable for adults.",
            "B. It offers flexibility but still requires self-discipline.",
            "C. It is less effective than traditional classes."
          ]
        }
      ],

      answers: {
        q6: "C",
        q7: "B",
        q8: "A",
        q9: "B",
        q10: "B"
      },

      explanations: {
        q6: "Đoạn 1: các em có thể 'raise their voice' trên forums mà không sợ nói trước lớp.",
        q7: "Đoạn 2: online courses 'are more cost-saving and convenient'.",
        q8: "Đoạn 3: nếu không quản lý thời gian và dành đủ 'quality time', học trực tuyến sẽ thất bại.",
        q9: "Đoạn 3: schools are redesigning spaces 'to enable online learning'.",
        q10: "Cả bài: online learning linh hoạt, tiết kiệm nhưng đòi hỏi người học tự quản lý và có kỷ luật."
      }
    }
  ]
};

export default en10_u8_read1;

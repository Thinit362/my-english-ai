import type { ReadingLesson } from "./types";

const en10_u4_read1: ReadingLesson = {
  id: "en10.u4.read1",
  unit: 4,
  skill: "reading",
  topicVi: "Trải nghiệm tình nguyện",
  titleEn: "My volunteer experience",
  passage: [
    "Sarah: I spent the month of November 2015 volunteering in South Africa. For the first two weeks, I worked with 2 to 4 kids in grades 1 and 2 on Maths and literacy skills. I guided them and measured their progress so that other volunteers could take on my work after I left. For the last two weeks, I instructed the small kids to do personal hygiene and make toys. I had a lot of fun working with them.",
    "Ray: Working with people living with HIV/AIDS is always emotionally and technically demanding. Before my volunteer trip to Ghana, I got training about HIV/AIDS. I worked with different groups of people. It was very emotional when I visited and played with children with HIV/AIDS in orphanages. I also visited schools, universities and households to give presentations and leaflets about HIV/AIDS. I had never felt so helpful before. I can't wait for my next trips to other African countries.",
    "Katie: My main duty was to provide financial advice for poor households in Kenya. I had to adapt myself immediately to the new weather, new people and new food there. Fortunately, my host family was the most selfless and encouraging people I'd ever known. I lived with three other volunteers, and the host family considered us as their daughters. I loved dinner time when all the family members gathered together and told jokes. Sometimes, I helped the children in the family with their homework. I feel so blessed I've known them in my life."
  ],
  translation: [
    "Sarah: Tôi đã dành tháng 11 năm 2015 để làm tình nguyện tại Nam Phi. Trong hai tuần đầu, tôi làm việc với 2 đến 4 em nhỏ lớp 1 và lớp 2 về Toán và các kỹ năng ngôn ngữ. Tôi hướng dẫn các em và đo lường tiến bộ của các em để những tình nguyện viên khác có thể tiếp tục công việc của tôi sau khi tôi rời đi. Trong hai tuần cuối, tôi hướng dẫn các em nhỏ thực hành vệ sinh cá nhân và làm đồ chơi. Tôi đã có rất nhiều niềm vui khi làm việc với các em.",
    "Ray: Làm việc với những người sống chung với HIV/AIDS luôn đòi hỏi rất nhiều về mặt cảm xúc và chuyên môn. Trước chuyến đi tình nguyện tới Ghana, tôi đã được tập huấn về HIV/AIDS. Tôi đã làm việc với nhiều nhóm người khác nhau. Tôi xúc động nhất là khi đến thăm và chơi với những đứa trẻ nhiễm HIV/AIDS trong các trại trẻ mồ côi. Tôi cũng đến các trường học, trường đại học và các hộ gia đình để thuyết trình và phát tờ rơi về HIV/AIDS. Tôi chưa bao giờ cảm thấy mình hữu ích đến thế. Tôi nóng lòng chờ những chuyến đi tiếp theo đến các nước châu Phi khác.",
    "Katie: Nhiệm vụ chính của tôi là tư vấn tài chính cho các hộ nghèo ở Kenya. Tôi phải thích nghi ngay lập tức với thời tiết mới, con người mới và món ăn mới ở đó. May mắn là gia đình chủ nhà là những người vị tha và động viên nhất mà tôi từng biết. Tôi sống cùng ba tình nguyện viên khác, và gia đình chủ nhà coi chúng tôi như con gái của họ. Tôi rất thích khoảng thời gian bữa tối khi tất cả các thành viên trong gia đình quây quần và kể chuyện cười. Thỉnh thoảng, tôi giúp các em nhỏ trong nhà làm bài tập. Tôi cảm thấy thật may mắn vì đã được biết họ trong cuộc đời mình."
  ],
  exercises: [
    // ========== PAGE 1: Vocabulary (5 câu) ==========
    {
      id: "page1",
      title: "Vocabulary from the text",
      instructionEn:
        "Choose no more than THREE WORDS from the reading text that have the same meaning as the given definition.",
      instructionVi:
        "Chọn không quá 3 từ trong bài đọc có nghĩa tương đương với định nghĩa đưa ra, viết thường, không viết in hoa.",
      questions: [
        {
          id: "q1",
          type: "input",
          question:
            "basic reading and writing skills",
          viHint: "các kỹ năng đọc viết cơ bản"
        },
        {
          id: "q2",
          type: "input",
          question:
            "keeping your body clean to stay healthy",
          viHint: "giữ cơ thể sạch sẽ để khỏe mạnh"
        },
        {
          id: "q3",
          type: "input",
          question:
            "needing a lot of effort and strong feelings",
          viHint: "đòi hỏi nhiều nỗ lực và cảm xúc mạnh"
        },
        {
          id: "q4",
          type: "input",
          question:
            "printed information sheets that are given to many people",
          viHint: "tờ giấy in thông tin được phát cho nhiều người"
        },
        {
          id: "q5",
          type: "input",
          question:
            "people who provide you with a place to live during your stay",
          viHint: "những người cho bạn ở nhờ trong thời gian bạn lưu trú"
        }
      ],
      answers: {
        q1: "literacy skills",        // Sarah
        q2: "personal hygiene",       // Sarah
        q3: "emotionally and technically demanding", // Ray
        q4: "leaflets",               // Ray
        q5: "host family"             // Katie
      },
      explanations: {
        q1: "Sarah làm việc với các em về 'Maths and literacy skills'.",
        q2: "Trong hai tuần cuối, Sarah dạy các em 'do personal hygiene'.",
        q3: "Ray nói: 'Working with people living with HIV/AIDS is always emotionally and technically demanding'.",
        q4: "Ray 'give presentations and leaflets about HIV/AIDS'.",
        q5: "Katie nói về 'my host family' – gia đình chủ nhà cho cô ở cùng."
      }
    },

    // ========== PAGE 2: Reading comprehension (5 câu) ==========
    {
      id: "page2",
      title: "Reading comprehension",
      instructionEn: "Choose the best answer (A, B or C) for each question.",
      instructionVi: "Chọn đáp án đúng (A, B hoặc C) cho mỗi câu hỏi.",
      questions: [
        {
          id: "q6",
          type: "mcq",
          question: "What did Sarah do during the FIRST two weeks in South Africa?",
          options: [
            "A. She taught children about personal hygiene and toys.",
            "B. She worked with young children on Maths and literacy skills.",
            "C. She visited orphanages and played with children."
          ]
        },
        {
          id: "q7",
          type: "mcq",
          question:
            "Why did Sarah measure the children's progress?",
          options: [
            "A. So that other volunteers could continue her work.",
            "B. Because the school asked her to write a report.",
            "C. To decide which children could go to higher grades."
          ]
        },
        {
          id: "q8",
          type: "mcq",
          question:
            "What did Ray do to prepare for his volunteer trip to Ghana?",
          options: [
            "A. He learnt about personal hygiene.",
            "B. He got training about HIV/AIDS.",
            "C. He studied financial advice for households."
          ]
        },
        {
          id: "q9",
          type: "mcq",
          question:
            "Which of the following best describes Katie’s host family?",
          options: [
            "A. Strict and unfriendly.",
            "B. Busy and distant.",
            "C. Selfless, encouraging and loving."
          ]
        },
        {
          id: "q10",
          type: "mcq",
          question:
            "What can be inferred from the reading text?",
          options: [
            "A. Volunteering can be challenging but also very rewarding.",
            "B. All volunteer work is easy and relaxing.",
            "C. Only people in Africa need volunteer help."
          ]
        }
      ],
      answers: {
        q6: "B",
        q7: "A",
        q8: "B",
        q9: "C",
        q10: "A"
      },
      explanations: {
        q6: "Sarah: 'I worked with 2 to 4 kids ... on Maths and literacy skills'.",
        q7: "Cô đo tiến bộ 'so that other volunteers could take on my work after I left'.",
        q8: "Ray: 'Before my volunteer trip to Ghana, I got training about HIV/AIDS'.",
        q9: "Katie mô tả gia đình chủ nhà là 'the most selfless and encouraging people I'd ever known' và coi các tình nguyện viên như con gái.",
        q10: "Cả ba câu chuyện cho thấy làm tình nguyện vất vả nhưng đem lại nhiều niềm vui và ý nghĩa."
      }
    }
  ]
};

export default en10_u4_read1;

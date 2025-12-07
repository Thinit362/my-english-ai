//content/practice/reading/en10.u1.read1.ts
import type { ReadingLesson } from "./types";

const en10_u1_read1: ReadingLesson = {
  id: "en10.u1.read1",
  unit: 1,
  skill: "reading",
  topicVi: "Phân chia công việc gia đình trong hôn nhân",
  titleEn: "Chore division",
  passage: [
    // Paragraph 1
    "While couples without a clear or equal chore division may encounter quarrels over who does what, a recent survey finds the divorce rate among couples sharing chores equally is about fifty per cent higher than those in which wives do more or most of the housework, which can be a slap in the face for gender equality.",
    // Paragraph 2
    "The researchers explain that modern couples organize their marriage and work out the tasks and duties, which may gradually turn their marriage into a business or contractual relationship. The woman may gradually feel less needed or happy and what's worse is that no one would care to help if something is not among their assigned chores. That seems to encourage conflicts rather than conflict resolution skills.",
    // Paragraph 3
    "On the contrary, in families without equal task division women tend to be responsible for more chores than men. While they believe they can exchange their roles for their husbands', many women believe they are most naturally suited for certain tasks. They simply enjoy being involved in their children's activities, which means more chores for them. This group of women also report more marital satisfaction.",
    // Paragraph 4
    "The survey also aimed to find out whether women's were happier if men shared more of the burden. In fact, they find that men report fewer family conflicts and greater well-being while women appear to be largely unmoved. This may be partly because they feel less guilty or simply learn how to have a quiet life."
  ],
  translation: [
    // Dịch từng đoạn – dùng để hiện khi học sinh bật “Xem bản dịch”
    "Mặc dù các cặp vợ chồng không có sự phân chia công việc nhà rõ ràng hay công bằng có thể gặp phải những cuộc cãi vã về việc ai làm gì, một khảo sát gần đây lại cho thấy tỉ lệ ly hôn ở những cặp đôi chia sẻ việc nhà một cách bình đẳng lại cao hơn khoảng năm mươi phần trăm so với những gia đình mà người vợ làm phần lớn hoặc hầu hết việc nhà – điều này có thể được xem là một cái tát vào bình đẳng giới.",
    "Các nhà nghiên cứu giải thích rằng các cặp đôi hiện đại thường sắp xếp cuộc hôn nhân của mình và phân chia các nhiệm vụ, trách nhiệm, điều này dần dần có thể biến hôn nhân của họ thành một mối quan hệ giống như kinh doanh hay mang tính hợp đồng. Người vợ có thể ngày càng cảm thấy mình ít được cần đến hoặc kém hạnh phúc hơn, và tệ hơn nữa là không ai buồn giúp đỡ nếu việc đó không nằm trong phần việc đã được giao của họ. Điều này dường như khuyến khích xung đột hơn là các kỹ năng giải quyết xung đột.",
    "Trái lại, trong những gia đình không có sự phân chia công việc rõ ràng, phụ nữ lại có xu hướng chịu trách nhiệm nhiều việc nhà hơn nam giới. Mặc dù họ tin rằng có thể đổi vai trò với chồng, nhiều phụ nữ tin rằng mình phù hợp một cách tự nhiên với một số công việc nhất định. Họ đơn giản là thích tham gia vào các hoạt động của con cái, điều đó đồng nghĩa với việc họ phải làm nhiều việc nhà hơn. Nhóm phụ nữ này cũng báo cáo mức độ hài lòng hôn nhân cao hơn.",
    "Khảo sát cũng nhằm tìm hiểu liệu phụ nữ có hạnh phúc hơn hay không nếu đàn ông chia sẻ nhiều gánh nặng hơn. Thực tế, người ta thấy rằng đàn ông báo cáo ít xung đột gia đình hơn và có sức khỏe tinh thần tốt hơn trong khi phụ nữ dường như hầu như không bị tác động. Điều này có thể một phần là do họ cảm thấy bớt tội lỗi hơn hoặc đơn giản là đã học cách sống yên ổn."
  ],
  exercises: [
    // ===== PAGE 1: Vocabulary (điền từ, không quá 3 từ) =====
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
          question: "process or result of dividing household responsibilities",
          viHint: "quá trình hay kết quả của việc chia trách nhiệm việc nhà"
        },
        {
          id: "q2",
          type: "input",
          question: "view that requires the same rights, benefits, etc. regardless of sexes",
          viHint: "quan điểm yêu cầu quyền lợi như nhau cho mọi giới"
        },
        {
          id: "q3",
          type: "input",
          question: "tie or bond between people who agree on certain conditions",
          viHint: "mối ràng buộc giữa những người đồng ý theo các điều kiện nhất định"
        },
        {
          id: "q4",
          type: "input",
          question: "ability to solve one's conflicts with other people",
          viHint: "khả năng giải quyết xung đột với người khác"
        },
        {
          id: "q5",
          type: "input",
          question:
            "subjective evaluation of how satisfied people are in their marriage",
          viHint: "đánh giá chủ quan về mức độ hài lòng trong hôn nhân"
        },
        {
          id: "q6",
          type: "input",
          question: "general health and happiness",
          viHint: "sức khỏe và hạnh phúc nói chung"
        }
      ],
      answers: {
        q1: "chore division",
        q2: "gender equality",
        q3: "contractual relationship",
        q4: "conflict resolution skills",
        q5: "marital satisfaction",
        q6: "well-being"
      },
      explanations: {
        q1: "Đoạn 1 nhắc tới 'clear or equal chore division' là sự phân chia việc nhà.",
        q2: "Cụm 'a slap in the face for gender equality' nói về bình đẳng giới.",
        q3: "Trong đoạn 2, hôn nhân có thể trở thành 'a business or contractual relationship'.",
        q4: "Cuối đoạn 2 có cụm 'conflict resolution skills'.",
        q5: "Đoạn 3 nói nhóm phụ nữ này 'report more marital satisfaction'.",
        q6: "Đoạn 4 nêu 'greater well-being' – sức khỏe và hạnh phúc tổng thể."
      }
    },
    // ===== PAGE 2: Reading comprehension (trắc nghiệm) =====
    {
      id: "page2",
      title: "Reading comprehension",
      instructionEn: "Choose the best answer (A, B or C) for each question.",
      instructionVi: "Chọn đáp án đúng (A, B hoặc C) cho mỗi câu hỏi.",
      questions: [
        {
          id: "q7",
          type: "mcq",
          question: "What is the best title for the above reading text?",
          options: [
            "A. The divorce rate among modern families",
            "B. Factors that cause conflicts between husbands and wives",
            "C. The share of chores and marital happiness"
          ]
        },
        {
          id: "q8",
          type: "mcq",
          question: "What may turn marriage into a contractual relationship?",
          options: [
            "A. Too much housework",
            "B. The way couples organize their families and the clear-cut chore division",
            "C. Tasks and duties that are unclearly assigned"
          ]
        },
        {
          id: "q9",
          type: "mcq",
          question: 'What does it mean by "unmoved"?',
          options: ["A. happy", "B. disappointed", "C. unshaken"]
        },
        {
          id: "q10",
          type: "mcq",
          question: "How do men feel when they do more housework than before?",
          options: [
            "A. Happier",
            "B. Sympathetic towards women",
            "C. Reluctant"
          ]
        },
        {
          id: "q11",
          type: "mcq",
          question: "What can be inferred from the reading text?",
          options: [
            "A. Chores themselves do not affect one's marital satisfaction.",
            "B. Household chores should be done by women.",
            "C. There should be equality in everything to gain marital happiness."
          ]
        },
        {
          id: "q12",
          type: "mcq",
          question: 'What does the word "they" in the fourth paragraph mean?',
          options: ["A. Women", "B. Men", "C. Women & men"]
        }
      ],
      // Đáp án đúng bám theo dạng bài trong hình bạn gửi
      answers: {
        q7: "C",
        q8: "B",
        q9: "C",
        q10: "A",
        q11: "C",
        q12: "A"
      },
      explanations: {
        q7: "Toàn bài nói về chia sẻ việc nhà và mức độ hạnh phúc trong hôn nhân → phù hợp nhất với C.",
        q8: "Đoạn 2: khi việc nhà được chia quá rạch ròi như nhiệm vụ trong hợp đồng, hôn nhân trở thành 'contractual relationship'.",
        q9: '"Unmoved" nghĩa là không bị lay chuyển, không thay đổi cảm xúc → gần với "unshaken".',
        q10: "Đoạn 4 cho biết đàn ông báo cáo ít xung đột và có 'greater well-being' → họ hạnh phúc hơn.",
        q11: "Từ bài đọc có thể suy ra muốn hạnh phúc hôn nhân cần có sự bình đẳng và hợp tác trong mọi việc.",
        q12: 'Trong câu cuối, "they feel less guilty..." nói về phụ nữ – những người dường như không bị tác động nhiều → đáp án A.'
      }
    }
  ]
};

export default en10_u1_read1;

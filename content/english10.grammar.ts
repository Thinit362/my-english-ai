// content/english10.grammar.ts
// Grammar content for English 10 – Global Success

export interface GrammarExample {
  en: string;
  vi: string;
}

export interface GrammarPoint {
  title: string;
  explanation: string;
  examples: GrammarExample[];
}

export interface GrammarUnit {
  unit: number;
  name: string;
  points: GrammarPoint[];
}

export const english10Grammar: GrammarUnit[] = [
  {
    unit: 1,
    name: "Family Life",
    points: [
      {
        title: "Present Simple",
        explanation:
          "Thì hiện tại đơn dùng để nói về thói quen, sự thật, lịch trình.",
        examples: [
          { en: "I live with my parents.", vi: "Tôi sống với bố mẹ." },
          { en: "My mother cooks dinner every day.", vi: "Mẹ tôi nấu bữa tối mỗi ngày." }
        ]
      },
      {
        title: "Adverbs of Frequency",
        explanation:
          "Các trạng từ chỉ tần suất dùng với thì hiện tại đơn.",
        examples: [
          { en: "She often does the housework.", vi: "Cô ấy thường làm việc nhà." },
          { en: "I rarely watch TV.", vi: "Tôi hiếm khi xem TV." }
        ]
      }
    ]
  },

  {
    unit: 2,
    name: "Your Body and You",
    points: [
      {
        title: "Imperatives (Câu mệnh lệnh)",
        explanation: "Dùng để đưa ra lời khuyên, chỉ dẫn, yêu cầu.",
        examples: [
          { en: "Eat more vegetables.", vi: "Hãy ăn nhiều rau củ." },
          { en: "Don't skip breakfast.", vi: "Đừng bỏ bữa sáng." }
        ]
      },
      {
        title: "Should / Shouldn't",
        explanation: "Dùng để khuyên nhủ.",
        examples: [
          { en: "You should drink more water.", vi: "Bạn nên uống nhiều nước hơn." },
          { en: "You shouldn't eat too much fast food.", vi: "Bạn không nên ăn quá nhiều đồ ăn nhanh." }
        ]
      }
    ]
  },

  {
    unit: 3,
    name: "Music",
    points: [
      {
        title: "Gerunds (V-ing) as Subjects/Objects",
        explanation:
          "Danh động từ (V-ing) dùng làm chủ ngữ hoặc tân ngữ.",
        examples: [
          { en: "Listening to music is my hobby.", vi: "Nghe nhạc là sở thích của tôi." },
          { en: "I enjoy playing the guitar.", vi: "Tôi thích chơi guitar." }
        ]
      }
    ]
  },

  {
    unit: 4,
    name: "For a Better Community",
    points: [
      {
        title: "Modal verbs: Can/Can't, Could",
        explanation:
          "Dùng để diễn tả khả năng, xin phép hoặc đề nghị.",
        examples: [
          { en: "You can volunteer at the shelter.", vi: "Bạn có thể tình nguyện tại nơi trú ẩn." },
          { en: "Could you help me?", vi: "Bạn có thể giúp tôi không?" }
        ]
      }
    ]
  },

  {
    unit: 5,
    name: "Inventions",
    points: [
      {
        title: "Passive Voice (Present Simple)",
        explanation:
          "Dùng để nhấn mạnh hành động, không quan tâm người thực hiện.",
        examples: [
          { en: "The telephone is used worldwide.", vi: "Điện thoại được sử dụng trên toàn thế giới." },
          { en: "This machine is made in Japan.", vi: "Chiếc máy này được sản xuất tại Nhật Bản." }
        ]
      }
    ]
  },

  {
    unit: 6,
    name: "Gender Equality",
    points: [
      {
        title: "Comparative and Superlative Adjectives",
        explanation:
          "So sánh hơn và so sánh nhất.",
        examples: [
          { en: "Boys are sometimes stronger than girls.", vi: "Con trai đôi khi khỏe hơn con gái." },
          { en: "She is the most hardworking student.", vi: "Cô ấy là học sinh chăm chỉ nhất." }
        ]
      }
    ]
  },

  {
    unit: 7,
    name: "Cultural Diversity",
    points: [
      {
        title: "Articles (a/an/the)",
        explanation:
          "Mạo từ xác định và không xác định.",
        examples: [
          { en: "A wedding is an important event.", vi: "Một lễ cưới là một sự kiện quan trọng." },
          { en: "The bride looks beautiful.", vi: "Cô dâu trông rất xinh đẹp." }
        ]
      }
    ]
  },

  {
    unit: 8,
    name: "New Ways to Learn",
    points: [
      {
        title: "Used to + V",
        explanation:
          "Diễn tả thói quen trong quá khứ không còn nữa.",
        examples: [
          { en: "I used to read printed books.", vi: "Tôi đã từng đọc sách giấy." },
          { en: "Students used to learn without technology.", vi: "Học sinh đã từng học mà không có công nghệ." }
        ]
      }
    ]
  },

  {
    unit: 9,
    name: "Choosing a Career",
    points: [
      {
        title: "Reported Speech – Statements",
        explanation:
          "Tường thuật lại lời nói.",
        examples: [
          { en: "She said she wanted to be a doctor.", vi: "Cô ấy nói rằng cô ấy muốn trở thành bác sĩ." },
          { en: "He said he liked his job.", vi: "Anh ấy nói anh ấy thích công việc của anh ấy." }
        ]
      }
    ]
  },

  {
    unit: 10,
    name: "Ecotourism",
    points: [
      {
        title: "Relative Clauses (who/which/that)",
        explanation:
          "Mệnh đề quan hệ dùng để cung cấp thông tin thêm.",
        examples: [
          { en: "Tourists who love nature will enjoy ecotourism.",
            vi: "Khách du lịch yêu thiên nhiên sẽ thích du lịch sinh thái." },
          { en: "A place that protects the environment is worth visiting.",
            vi: "Một nơi bảo vệ môi trường rất đáng để tham quan." }
        ]
      }
    ]
  }
];

// content/practice/speaking/unit2.ts
import type { SpeakingLesson } from "./types";

export const speakingUnit2: SpeakingLesson = {
  unit: 2,
  topicVi: "Các cách để sống xanh",
  titleEn: "Unit 2 – Ways to Live Green · Speaking Practice",
  descriptionEn:
    "Practise giving advice with should/shouldn’t and explaining reasons for actions that help protect the environment.",
  descriptionVi:
    "Luyện nói cách đưa ra lời khuyên với should/shouldn’t và giải thích lý do cho những việc làm giúp bảo vệ môi trường.",

  /* ================= LÝ THUYẾT ================= */
  theory: [
    {
      id: "advice-should",
      title: "Đưa ra lời khuyên với should / shouldn’t",
      contentEn:
        "We use should or shouldn’t + bare infinitive to give advice about what is a good or bad idea.",
      contentVi:
        "Dùng should hoặc shouldn’t + động từ nguyên thể để đưa ra lời khuyên về điều nên hay không nên làm.",
      items: [
        {
          en: "We should bring reusable bags when we go shopping.",
          vi: "Chúng ta nên mang túi có thể tái sử dụng khi đi mua sắm.",
        },
        {
          en: "We shouldn’t leave electrical devices on when we don’t use them.",
          vi: "Chúng ta không nên để các thiết bị điện bật khi không dùng đến.",
        },
        {
          en: "We should use public transport or ride a bike instead of driving a car.",
          vi: "Chúng ta nên dùng phương tiện công cộng hoặc đi xe đạp thay vì lái ô tô.",
        },
      ],
    },
    {
      id: "reason-linkers",
      title: "Giải thích lý do cho lời khuyên",
      contentEn:
        "After each piece of advice, we often give a reason using so that, because, as or since.",
      contentVi:
        "Sau mỗi lời khuyên, ta thường nêu lý do bằng các từ so that, because, as, since.",
      items: [
        {
          en: "We should bring reusable bags when shopping so that we can reduce plastic waste.",
          vi: "Chúng ta nên mang túi tái sử dụng khi mua sắm để giảm rác thải nhựa.",
        },
        {
          en: "We shouldn’t leave our lights on because this wastes electricity.",
          vi: "Chúng ta không nên để đèn bật vì điều đó lãng phí điện.",
        },
      ],
    },
    {
      id: "second-sentence",
      title: "Dùng câu tiếp theo để nêu kết quả",
      contentEn:
        "Sometimes we can use another sentence after the advice to show the result or benefit.",
      contentVi:
        "Đôi khi ta dùng một câu riêng ngay sau lời khuyên để nêu kết quả hoặc lợi ích.",
      items: [
        {
          en: "We should walk or ride a bike more. This helps reduce greenhouse gas emissions.",
          vi: "Chúng ta nên đi bộ hoặc đạp xe nhiều hơn. Điều này giúp giảm lượng khí thải nhà kính.",
        },
      ],
    },
  ],

  /* ================= BÀI TẬP NÓI ================= */
  exercises: [
    {
      id: "page-1",
      title: "Giving advice about living green",
      instructionEn:
        "Answer the questions about what people should or shouldn’t do to live a greener life. Listen and then record your own answer.",
      instructionVi:
        "Trả lời các câu hỏi về những việc mọi người nên hoặc không nên làm để sống xanh hơn. Nghe mẫu rồi ghi âm câu trả lời của bạn.",
      questions: [
        {
          id: "u2-q1",
          promptEn:
            "What should students do at school to save energy and protect the environment?",
          promptVi:
            "Học sinh nên làm gì ở trường để tiết kiệm năng lượng và bảo vệ môi trường?",
          tipEn: "Use should + V and give one or two reasons.",
          tipVi:
            "Dùng should + V và đưa ra một hoặc hai lý do.",
          structureHighlight: "Students should + V + because/so that...",
          sampleAnswerEn:
            "Students should turn off the lights and fans when they leave the classroom so that we can save electricity.",
          sampleAnswerVi:
            "Học sinh nên tắt đèn và quạt khi ra khỏi lớp để tiết kiệm điện.",
        },
        {
          id: "u2-q2",
          promptEn:
            "What shouldn’t people do when they go shopping if they want to live green?",
          promptVi:
            "Nếu muốn sống xanh, mọi người không nên làm gì khi đi mua sắm?",
          tipEn:
            "You can mention plastic bags or unnecessary packaging.",
          tipVi: "Bạn có thể nhắc đến túi nilon hoặc bao bì không cần thiết.",
          structureHighlight: "People shouldn’t + V because...",
          sampleAnswerEn:
            "People shouldn’t ask for many plastic bags because they create a lot of waste.",
          sampleAnswerVi:
            "Mọi người không nên xin quá nhiều túi nilon vì chúng tạo ra rất nhiều rác.",
        },
        {
          id: "u2-q3",
          promptEn:
            "What should we do at home to reduce the amount of rubbish we produce?",
          promptVi:
            "Chúng ta nên làm gì ở nhà để giảm lượng rác thải tạo ra?",
          tipEn:
            "Think about recycling, reusing and separating your rubbish.",
          tipVi:
            "Hãy nghĩ đến việc tái chế, tái sử dụng và phân loại rác.",
          structureHighlight: "We should + V so that / to + V...",
          sampleAnswerEn:
            "We should separate our rubbish and recycle paper, glass and plastic so that less waste goes to landfill.",
          sampleAnswerVi:
            "Chúng ta nên phân loại rác và tái chế giấy, thủy tinh, nhựa để ít rác bị chôn lấp hơn.",
        },
        {
          id: "u2-q4",
          promptEn:
            "What small green habit do you practise every day?",
          promptVi: "Một thói quen sống xanh nhỏ mà bạn thực hiện mỗi ngày là gì?",
          tipEn:
            "Begin with: One small green habit I have is..., then explain why.",
          tipVi:
            "Bắt đầu: One small green habit I have is..., sau đó giải thích lý do.",
          structureHighlight: "One small green habit I have is + V-ing",
          sampleAnswerEn:
            "One small green habit I have is bringing my own water bottle, because I don’t want to buy plastic bottles.",
          sampleAnswerVi:
            "Một thói quen sống xanh nhỏ của tôi là mang theo chai nước riêng vì tôi không muốn mua chai nhựa.",
        },
      ],
    },

    {
      id: "page-2",
      title: "Nam’s talk about living green",
      instructionEn:
        "Listen to Nam’s short talk about ways to live green. Then record each sentence and compare it with the model.",
      instructionVi:
        "Nghe bài nói ngắn của Nam về các cách sống xanh. Sau đó ghi âm từng câu và so sánh với bài mẫu.",
      questions: [
        {
          id: "u2-q5",
          promptEn:
            "Hello, I’m Nam. I’d like to share some things we should and shouldn’t do to live a greener life.",
          promptVi:
            "Xin chào, mình là Nam. Mình muốn chia sẻ vài điều chúng ta nên và không nên làm để sống xanh hơn.",
          sampleAnswerEn:
            "Hello, I’m Nam. I’d like to share some things we should and shouldn’t do to live a greener life.",
          sampleAnswerVi:
            "Xin chào, mình là Nam. Mình muốn chia sẻ vài điều chúng ta nên và không nên làm để sống xanh hơn.",
        },
        {
          id: "u2-q6",
          promptEn:
            "First, we should plant more trees because they can absorb carbon dioxide and help slow down global warming.",
          promptVi:
            "Đầu tiên, chúng ta nên trồng nhiều cây hơn vì cây có thể hấp thụ khí CO₂ và giúp làm chậm quá trình nóng lên toàn cầu.",
          sampleAnswerEn:
            "First, we should plant more trees because they can absorb carbon dioxide and help slow down global warming.",
          sampleAnswerVi:
            "Đầu tiên, chúng ta nên trồng nhiều cây hơn vì cây có thể hấp thụ khí CO₂ và giúp làm chậm quá trình nóng lên toàn cầu.",
        },
        {
          id: "u2-q7",
          promptEn:
            "Second, we shouldn’t throw rubbish in the street as this makes the streets dirty and harms the environment.",
          promptVi:
            "Thứ hai, chúng ta không nên vứt rác ra đường vì việc đó làm đường phố bẩn và gây hại cho môi trường.",
          sampleAnswerEn:
            "Second, we shouldn’t throw rubbish in the street as this makes the streets dirty and harms the environment.",
          sampleAnswerVi:
            "Thứ hai, chúng ta không nên vứt rác ra đường vì việc đó làm đường phố bẩn và gây hại cho môi trường.",
        },
        {
          id: "u2-q8",
          promptEn:
            "We should take shorter showers instead of long baths so that we can save more water.",
          promptVi:
            "Chúng ta nên tắm vòi sen trong thời gian ngắn thay vì ngâm bồn lâu để tiết kiệm nước.",
          sampleAnswerEn:
            "We should take shorter showers instead of long baths so that we can save more water.",
          sampleAnswerVi:
            "Chúng ta nên tắm vòi sen trong thời gian ngắn thay vì ngâm bồn lâu để tiết kiệm nước.",
        },
        {
          id: "u2-q9",
          promptEn:
            "We shouldn’t buy too many plastic bottles. This will reduce the amount of waste we create.",
          promptVi:
            "Chúng ta không nên mua quá nhiều chai nhựa. Điều đó sẽ giảm lượng rác thải chúng ta tạo ra.",
          sampleAnswerEn:
            "We shouldn’t buy too many plastic bottles. This will reduce the amount of waste we create.",
          sampleAnswerVi:
            "Chúng ta không nên mua quá nhiều chai nhựa. Điều đó sẽ giảm lượng rác thải chúng ta tạo ra.",
        },
        {
          id: "u2-q10",
          promptEn:
            "Living a green life is possible for everyone. With small daily actions, we can all make a big difference.",
          promptVi:
            "Sống xanh là điều mà ai cũng có thể làm được. Với những hành động nhỏ hằng ngày, tất cả chúng ta đều có thể tạo nên sự khác biệt lớn.",
          sampleAnswerEn:
            "Living a green life is possible for everyone. With small daily actions, we can all make a big difference.",
          sampleAnswerVi:
            "Sống xanh là điều mà ai cũng có thể làm được. Với những hành động nhỏ hằng ngày, tất cả chúng ta đều có thể tạo nên sự khác biệt lớn.",
        },
      ],
    },
  ],
};

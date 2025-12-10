// content/practice/speaking/unit1.ts
import type { SpeakingLesson } from "./types";

export const speakingUnit1: SpeakingLesson = {
  unit: 1,
  topicVi: "Cuộc sống gia đình – Chia sẻ việc nhà",
  titleEn: "Unit 1 – Family Life · Speaking Practice",
  descriptionEn:
    "Review useful structures to talk about housework, likes/dislikes and giving reasons. Then practise speaking with guided questions.",
  descriptionVi:
    "Ôn lại cấu trúc nói về việc nhà, diễn tả thích/không thích và đưa ra lý do. Sau đó luyện nói với các câu hỏi gợi ý.",

  /* ======== LÝ THUYẾT ======== */
  theory: [
    {
      id: "like-ing",
      title: "Diễn tả sở thích với V-ing",
      contentEn:
        "Use like, love, enjoy, fancy, adore + V-ing / noun to talk about things you like.",
      contentVi:
        "Dùng like, love, enjoy, fancy, adore + V-ing / danh từ để diễn tả điều bạn thích.",
      items: [
        { en: "I enjoy doing the cooking.", vi: "Tôi thích nấu ăn." },
        {
          en: "My brother doesn’t like washing the dishes.",
          vi: "Em trai tôi không thích rửa bát.",
        },
      ],
    },
    {
      id: "dont-like",
      title: "Diễn tả không thích",
      contentEn:
        "Use don’t / doesn’t like, hate, can’t stand + V-ing to talk about things you don’t like.",
      contentVi:
        "Dùng don’t / doesn’t like, hate, can’t stand + V-ing để nói về điều bạn không thích.",
      items: [
        {
          en: "I don’t like cleaning the bathroom.",
          vi: "Tôi không thích lau dọn nhà tắm.",
        },
        {
          en: "She hates taking out the rubbish.",
          vi: "Cô ấy ghét đổ rác.",
        },
      ],
    },
    {
      id: "because",
      title: "Đưa ra lý do với because",
      contentEn:
        "Use because + clause to give reasons for your likes and dislikes.",
      contentVi:
        "Dùng because + mệnh đề để đưa ra lý do cho việc thích/không thích.",
      items: [
        {
          en: "I like doing the shopping because I can choose fresh food.",
          vi: "Tôi thích đi mua sắm vì tôi có thể chọn đồ tươi.",
        },
        {
          en: "I don’t like ironing because it is boring.",
          vi: "Tôi không thích là quần áo vì việc đó nhàm chán.",
        },
      ],
    },
  ],

  /* ======== BÀI TẬP LUYỆN NÓI ======== */
  exercises: [
    {
      id: "page-1",
      title: "Talking about who does what at home",
      instructionEn:
        "Answer the questions about housework in your family. Listen, then record your own answer.",
      instructionVi:
        "Trả lời các câu hỏi về việc nhà trong gia đình bạn. Nghe mẫu, sau đó ghi âm câu trả lời của riêng bạn.",
      questions: [
        {
          id: "q1",
          promptEn: "Who usually does the cooking in your family?",
          promptVi: "Ai thường nấu ăn trong gia đình bạn?",
          tipEn: "Begin with: In my family, my mother/father/I usually...",
          tipVi: "Có thể bắt đầu: In my family, my mother/father/I usually...",
          structureHighlight: "S + usually + do the cooking",
          sampleAnswerEn:
            "In my family, my mother usually does the cooking because she enjoys preparing meals for us.",
          sampleAnswerVi:
            "Trong gia đình tôi, mẹ tôi thường nấu ăn vì mẹ thích chuẩn bị bữa ăn cho cả nhà.",
        },
        {
          id: "q2",
          promptEn: "Who does the washing-up after meals?",
          promptVi: "Ai rửa bát sau bữa ăn?",
          tipEn:
            "You can say: My father and I share the washing-up after dinner.",
          tipVi: "Bạn có thể nói: My father and I share the washing-up after dinner.",
          structureHighlight: "share + N / V-ing",
          sampleAnswerEn:
            "My father and I share the washing-up after dinner, so it doesn’t take too much time.",
          sampleAnswerVi:
            "Bố tôi và tôi cùng rửa bát sau bữa tối nên cũng không mất nhiều thời gian.",
        },
        {
          id: "q3",
          promptEn:
            "Which household chore do you like doing most? Why?",
          promptVi:
            "Bạn thích làm công việc nhà nào nhất? Tại sao?",
          tipEn: "Use: I like/love/enjoy + V-ing because...",
          tipVi: "Dùng: I like/love/enjoy + V-ing because...",
          structureHighlight: "I enjoy + V-ing because...",
          sampleAnswerEn:
            "I enjoy watering the plants because it helps me relax after school.",
          sampleAnswerVi:
            "Tôi thích tưới cây vì việc đó giúp tôi thư giãn sau giờ học.",
        },
        {
          id: "q4",
          promptEn:
            "Which household chore do you dislike doing? Why?",
          promptVi:
            "Bạn không thích làm công việc nhà nào? Tại sao?",
          tipEn: "Use: I don’t like / I hate + V-ing because...",
          tipVi: "Dùng: I don’t like / I hate + V-ing because...",
          structureHighlight: "I don’t like + V-ing because...",
          sampleAnswerEn:
            "I don’t like cleaning the bathroom because it is dirty and tiring.",
          sampleAnswerVi:
            "Tôi không thích lau dọn nhà tắm vì bẩn và rất mệt.",
        },
      ],
    },
    {
      id: "page-2",
      title: "Giving opinions about sharing housework",
      instructionEn:
        "Give your opinion about sharing housework in the family.",
      instructionVi:
        "Nêu ý kiến của bạn về việc chia sẻ việc nhà trong gia đình.",
      questions: [
        {
          id: "q5",
          promptEn: "Do you think children should help with housework?",
          promptVi: "Bạn có nghĩ rằng trẻ em nên giúp làm việc nhà không?",
          tipEn: "Begin with: Yes, I do. / No, I don’t. Then give a reason.",
          tipVi: "Bắt đầu: Yes, I do. / No, I don’t. Sau đó đưa ra lý do.",
          structureHighlight: "I think + S + should + V...",
          sampleAnswerEn:
            "Yes, I do. I think children should help with housework because it teaches them responsibility.",
          sampleAnswerVi:
            "Có. Tôi nghĩ trẻ em nên giúp làm việc nhà vì điều đó dạy các em tính trách nhiệm.",
        },
        {
          id: "q6",
          promptEn:
            "How does sharing housework make family life better?",
          promptVi:
            "Việc chia sẻ việc nhà giúp cuộc sống gia đình tốt hơn như thế nào?",
          tipEn:
            "Use: It makes + object + adjective. Example: It makes our family closer.",
          tipVi:
            "Dùng: It makes + tân ngữ + tính từ. Ví dụ: It makes our family closer.",
          structureHighlight: "It makes + our family + adj",
          sampleAnswerEn:
            "Sharing housework makes our family closer because we spend more time together.",
          sampleAnswerVi:
            "Chia sẻ việc nhà giúp gia đình tôi gắn bó hơn vì chúng tôi dành nhiều thời gian bên nhau.",
        },
      ],
    },
  ],
};

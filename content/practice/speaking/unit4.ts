// content/practice/speaking/unit4.ts
import type { SpeakingLesson } from "./types";

export const speakingUnit4: SpeakingLesson = {
  unit: 4,
  topicVi: "Thảo luận về phát triển cộng đồng",
  titleEn: "Unit 4 – Discussion on Community Development",
  descriptionEn:
    "Practise asking for opinions and agreeing or disagreeing when discussing plans for community development.",
  descriptionVi:
    "Luyện cách hỏi ý kiến, đồng tình và không đồng tình khi thảo luận về các kế hoạch phát triển cộng đồng.",

  /* ===================== A. LÝ THUYẾT ===================== */
  theory: [
    {
      id: "ask-opinions",
      title: "How to ask for opinions – Cách hỏi ý kiến",
      contentEn:
        "Use these expressions to ask other people what they think in a discussion.",
      contentVi:
        "Sử dụng các cấu trúc sau để hỏi ý kiến người khác khi thảo luận.",
      items: [
        {
          en: "What do you think about + noun / V-ing?",
          en: "What do you think about building a new school in this area?",
        },
        {
          en: "What’s your idea / opinion about + noun / V-ing?",
          en: "What’s your opinion about raising funds for poor children?",
        },
        {
          en: "How do you feel about + noun / V-ing?",
          en: "How do you feel about giving food and clothes to homeless people?",
        },
        {
          en: "Do you have any thoughts on + noun / V-ing?",
          en: "Do you have any thoughts on training young people for jobs?",
        },
        {
          en: "Why do you think so?",
          vi: "Tại sao bạn nghĩ vậy?",
        },
        {
          en: "What makes you think so?",
          vi: "Điều gì khiến bạn nghĩ như vậy?",
        },
      ],
    },
    {
      id: "agree",
      title: "How to agree with an opinion – Cách thể hiện đồng tình",
      contentEn:
        "These phrases help you show that you share the same opinion with someone.",
      contentVi:
        "Một số câu hay dùng để thể hiện sự đồng tình với ý kiến của người khác.",
      items: [
        { en: "I agree with you.", vi: "Mình đồng ý với bạn." },
        { en: "You’re right.", vi: "Bạn nói đúng." },
        { en: "I think so too.", vi: "Mình cũng nghĩ vậy." },
        { en: "That’s a good idea.", vi: "Đó là một ý kiến hay." },
        { en: "I share your opinion.", vi: "Mình cùng quan điểm với bạn." },
      ],
    },
    {
      id: "disagree",
      title: "How to disagree with an opinion – Cách không đồng tình",
      contentEn:
        "Use these expressions to disagree politely when you have a different idea.",
      contentVi:
        "Dùng các câu sau để thể hiện sự không đồng tình một cách lịch sự.",
      items: [
        { en: "I don’t think so.", vi: "Mình không nghĩ vậy." },
        { en: "I’m afraid I disagree.", vi: "Mình e là không đồng ý." },
        {
          en: "You may be right, but I can’t agree with you.",
          vi: "Có thể bạn đúng, nhưng mình không thể đồng ý với bạn.",
        },
        {
          en: "I’m not sure about that.",
          vi: "Mình không chắc về điều đó.",
        },
      ],
    },
  ],

  /* ===================== B. THỰC HÀNH ===================== */
  exercises: [
    /* ---------- TASK 2: các câu mẫu để nghe + ghi âm ---------- */
    {
      id: "u4-task2",
      title: "Task 2 – Listen to the sentences and record to compare",
      instructionEn:
        "Listen to the following sentences and then record your own voice to compare with the model.",
      instructionVi:
        "Hãy nghe các câu dưới đây, sau đó thu âm để so sánh với bài mẫu.",
      questions: [
        {
          id: "u4-q1",
          promptEn:
            "In my opinion, building essential facilities such as schools and parks is the top priority because it can improve the quality of life for many people.",
          promptVi:
            "Theo ý kiến của mình, xây dựng các cơ sở thiết yếu như trường học và công viên là ưu tiên hàng đầu vì có thể nâng cao chất lượng cuộc sống cho nhiều người.",
          sampleAnswerEn:
            "In my opinion, building essential facilities such as schools and parks is the top priority because it can improve the quality of life for many people.",
          sampleAnswerVi:
            "Theo ý kiến của mình, xây dựng các cơ sở thiết yếu như trường học và công viên là ưu tiên hàng đầu vì có thể nâng cao chất lượng cuộc sống cho nhiều người.",
        },
        {
          id: "u4-q2",
          promptEn:
            "You may be right, but I can’t agree with you. I think providing job training for young people is the most urgent task.",
          promptVi:
            "Có thể bạn đúng, nhưng mình không thể đồng ý. Mình nghĩ việc đào tạo nghề cho người trẻ là nhiệm vụ cấp bách nhất.",
          sampleAnswerEn:
            "You may be right, but I can’t agree with you. I think providing job training for young people is the most urgent task.",
          sampleAnswerVi:
            "Có thể bạn đúng, nhưng mình không thể đồng ý. Mình nghĩ việc đào tạo nghề cho người trẻ là nhiệm vụ cấp bách nhất.",
        },
        {
          id: "u4-q3",
          promptEn:
            "This will help them find better jobs and support their families.",
          promptVi:
            "Điều đó sẽ giúp họ tìm được công việc tốt hơn và có thể chu cấp cho gia đình.",
          sampleAnswerEn:
            "This will help them find better jobs and support their families.",
          sampleAnswerVi:
            "Điều đó sẽ giúp họ tìm được công việc tốt hơn và có thể chu cấp cho gia đình.",
        },
        {
          id: "u4-q4",
          promptEn:
            "You’re right. If young people earn higher incomes, their lives will be improved.",
          promptVi:
            "Bạn nói đúng. Nếu người trẻ kiếm được thu nhập cao hơn, cuộc sống của họ sẽ tốt hơn.",
          sampleAnswerEn:
            "You’re right. If young people earn higher incomes, their lives will be improved.",
          sampleAnswerVi:
            "Bạn nói đúng. Nếu người trẻ kiếm được thu nhập cao hơn, cuộc sống của họ sẽ tốt hơn.",
        },
        {
          id: "u4-q5",
          promptEn:
            "Our top priority is protecting the environment and encouraging healthy lifestyles.",
          promptVi:
            "Ưu tiên hàng đầu của chúng ta là bảo vệ môi trường và khuyến khích lối sống lành mạnh.",
          sampleAnswerEn:
            "Our top priority is protecting the environment and encouraging healthy lifestyles.",
          sampleAnswerVi:
            "Ưu tiên hàng đầu của chúng ta là bảo vệ môi trường và khuyến khích lối sống lành mạnh.",
        },
        {
          id: "u4-q6",
          promptEn:
            "The second most urgent thing to do is to give young people more training for jobs.",
          promptVi:
            "Việc cấp bách thứ hai là cung cấp thêm các khóa đào tạo nghề cho người trẻ.",
          sampleAnswerEn:
            "The second most urgent thing to do is to give young people more training for jobs.",
          sampleAnswerVi:
            "Việc cấp bách thứ hai là cung cấp thêm các khóa đào tạo nghề cho người trẻ.",
        },
        {
          id: "u4-q7",
          promptEn:
            "We also consider building essential facilities to be the third most important priority.",
          promptVi:
            "Chúng ta cũng xem việc xây dựng các cơ sở thiết yếu là ưu tiên quan trọng thứ ba.",
          sampleAnswerEn:
            "We also consider building essential facilities to be the third most important priority.",
          sampleAnswerVi:
            "Chúng ta cũng xem việc xây dựng các cơ sở thiết yếu là ưu tiên quan trọng thứ ba.",
        },
      ],
    },

    /* ---------- TASK 3: gợi ý HS tự thảo luận ---------- */
    {
      id: "u4-task3",
      title: "Task 3 – Discuss your own ideas about community development",
      instructionEn:
        "Work with a partner or practise by yourself. Use the expressions you have learned to ask for opinions and agree or disagree.",
      instructionVi:
        "Luyện tập theo cặp hoặc tự luyện. Sử dụng các cấu trúc đã học để hỏi ý kiến và thể hiện sự đồng tình hoặc không đồng tình.",
      questions: [
        {
          id: "u4-q8",
          promptEn:
            "What do you think is the most important project for your community now?",
          promptVi:
            "Theo bạn, dự án quan trọng nhất cho cộng đồng của bạn hiện nay là gì?",
          tipEn: "Begin with: In my opinion, … because …",
        },
        {
          id: "u4-q9",
          promptEn:
            "How do you feel about raising money to support poor families in your area?",
          promptVi:
            "Bạn cảm thấy thế nào về việc gây quỹ giúp các gia đình nghèo trong khu vực?",
        },
        {
          id: "u4-q10",
          promptEn:
            "Do you agree that protecting the environment should be the top priority? Why or why not?",
          promptVi:
            "Bạn có đồng ý rằng bảo vệ môi trường nên là ưu tiên hàng đầu không? Tại sao có hoặc tại sao không?",
        },
        {
          id: "u4-q11",
          promptEn:
            "Use one sentence to disagree politely with your friend’s idea.",
          promptVi:
            "Hãy dùng một câu để không đồng tình một cách lịch sự với ý kiến của bạn mình.",
          tipEn: "Use: I’m afraid I disagree, or You may be right, but…",
        },
      ],
    },
  ],
};

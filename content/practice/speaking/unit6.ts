import type { SpeakingLesson } from "./types";

export const speakingUnit6: SpeakingLesson = {
  unit: 6,
  topicVi: "Bình đẳng giới trong cơ hội nghề nghiệp",
  titleEn: "Unit 6 – Talk about equal job opportunities",
  descriptionEn:
    "Use useful expressions to discuss gender equality and give opinions about equal job opportunities for men and women.",
  descriptionVi:
    "Vận dụng các cấu trúc để thảo luận về bình đẳng giới và đưa ý kiến về sự công bằng trong cơ hội nghề nghiệp giữa nam và nữ.",

  /* ===================== A. NỘI DUNG CHÍNH ===================== */
  theory: [
    {
      id: "review-opinions",
      title: "1. Asking for and giving opinions",
      contentEn:
        "We reuse the structures from previous units to ask for opinions and to agree or disagree in a discussion.",
      contentVi:
        "Ôn lại các cấu trúc đã học để hỏi ý kiến và thể hiện sự đồng tình / không đồng tình khi thảo luận.",
      items: [
        {
          en: "What do you think about equal job opportunities for men and women?",
          vi: "Bạn nghĩ gì về sự bình đẳng trong cơ hội nghề nghiệp giữa nam và nữ?",
        },
        {
          en: "What’s your opinion about women doing the same jobs as men?",
          vi: "Bạn có ý kiến gì về việc phụ nữ làm những công việc giống nam giới?",
        },
        {
          en: "How do you feel about men staying at home to take care of children?",
          vi: "Bạn cảm thấy thế nào về việc nam giới ở nhà chăm sóc con?",
        },
        {
          en: "Do you have any thoughts on discrimination at the workplace?",
          vi: "Bạn có suy nghĩ gì về sự phân biệt đối xử ở nơi làm việc?",
        },
        {
          en: "Why do you think so?",
          vi: "Tại sao bạn lại nghĩ như vậy?",
        },
      ],
    },
    {
      id: "agree",
      title: "2. Agreeing or disagreeing with an opinion",
      contentEn:
        "Use these phrases to show that you agree or disagree politely when you talk about gender equality.",
      contentVi:
        "Dùng các câu sau để thể hiện sự đồng tình hoặc không đồng tình một cách lịch sự khi nói về bình đẳng giới.",
      items: [
        { en: "I agree with that idea.", vi: "Mình đồng ý với ý kiến đó." },
        { en: "You’re right.", vi: "Bạn nói đúng." },
        { en: "I think so too.", vi: "Mình cũng nghĩ như vậy." },
        { en: "I don’t think so.", vi: "Mình không nghĩ vậy." },
        { en: "I’m afraid I disagree.", vi: "Mình e là mình không đồng ý." },
        {
          en: "You may be right, but I can’t agree with you.",
          vi: "Có thể bạn đúng, nhưng mình không thể đồng ý với bạn.",
        },
      ],
    },
    {
      id: "reasons",
      title: "3. Giving reasons",
      contentEn:
        "After you agree or disagree, give at least one clear reason to support your opinion.",
      contentVi:
        "Sau khi đồng tình hoặc không đồng tình, hãy nêu ít nhất một lý do rõ ràng để giải thích quan điểm của mình.",
      items: [
        {
          en: "Because women can work as effectively as men.",
          vi: "Vì phụ nữ có thể làm việc hiệu quả như nam giới.",
        },
        {
          en: "Because both men and women should share family responsibilities.",
          vi: "Vì cả nam và nữ đều nên chia sẻ trách nhiệm gia đình.",
        },
        {
          en: "Because everyone deserves equal access to education and jobs.",
          vi: "Vì mọi người đều xứng đáng có quyền tiếp cận giáo dục và việc làm như nhau.",
        },
      ],
    },
  ],

  /* ===================== B. THỰC HÀNH ===================== */
  exercises: [
    /* ---------- TASK 1: 6 quan điểm để HS nói agree/disagree + reason ---------- */
    {
      id: "u6-task1",
      title: "Task 1 – Give your opinion and reason",
      instructionEn:
        "Read the following opinions about men and women. Say whether you agree or disagree with each one and give at least one reason.",
      instructionVi:
        "Đọc các quan điểm dưới đây về nam giới và phụ nữ. Hãy cho biết bạn đồng tình hay không và nêu ít nhất một lý do cho ý kiến của mình.",
      questions: [
        {
          id: "u6-q1",
          promptEn: "Men are better athletes than women.",
          promptVi: "Nam giới là những vận động viên giỏi hơn phụ nữ.",
          tipEn: "Do you agree or disagree? Explain why.",
        },
        {
          id: "u6-q2",
          promptEn: "A woman’s natural role is to be a caregiver.",
          promptVi: "Vai trò tự nhiên của phụ nữ là người chăm sóc gia đình.",
          tipEn: "Say if you agree or not, then give one reason.",
        },
        {
          id: "u6-q3",
          promptEn:
            "Men are traditional decision-makers and the main breadwinners.",
          promptVi:
            "Nam giới là người ra quyết định truyền thống và là trụ cột kinh tế chính.",
        },
        {
          id: "u6-q4",
          promptEn: "Women are more hard-working than men.",
          promptVi: "Phụ nữ chăm chỉ hơn nam giới.",
        },
        {
          id: "u6-q5",
          promptEn: "Women are more talkative than men.",
          promptVi: "Phụ nữ nói nhiều hơn nam giới.",
        },
        {
          id: "u6-q6",
          promptEn: "Men are not as good with children as women.",
          promptVi: "Nam giới không giỏi chăm sóc trẻ em bằng phụ nữ.",
        },
      ],
    },

    /* ---------- TASK 2: câu luyện nói có TTS (loa + mic) ---------- */
    {
      id: "u6-task2",
      title: "Task 2 – Listen and record to compare",
      instructionEn:
        "Listen to the following sentences about equal job opportunities and then record your own voice to compare.",
      instructionVi:
        "Hãy nghe các câu dưới đây về sự công bằng trong cơ hội nghề nghiệp, sau đó thu âm để so sánh.",
      questions: [
        {
          id: "u6-q7",
          promptEn: "Women can perform just as well as men at work.",
          promptVi: "Phụ nữ có thể làm việc tốt như nam giới.",
          sampleAnswerEn: "Women can perform just as well as men at work.",
          sampleAnswerVi: "Phụ nữ có thể làm việc tốt như nam giới.",
        },
        {
          id: "u6-q8",
          promptEn: "I believe women can do any jobs that men can do.",
          promptVi: "Mình tin rằng phụ nữ có thể làm bất kỳ công việc nào mà nam giới làm.",
          sampleAnswerEn: "I believe women can do any jobs that men can do.",
          sampleAnswerVi:
            "Mình tin rằng phụ nữ có thể làm bất kỳ công việc nào mà nam giới làm.",
        },
        {
          id: "u6-q9",
          promptEn: "All children should be allowed to go to school.",
          promptVi: "Tất cả trẻ em đều nên được đến trường.",
          sampleAnswerEn: "All children should be allowed to go to school.",
          sampleAnswerVi: "Tất cả trẻ em đều nên được đến trường.",
        },
        {
          id: "u6-q10",
          promptEn:
            "Women often work more hours but earn less money than men do.",
          promptVi:
            "Phụ nữ thường làm việc nhiều giờ hơn nhưng kiếm được ít tiền hơn nam giới.",
          sampleAnswerEn:
            "Women often work more hours but earn less money than men do.",
          sampleAnswerVi:
            "Phụ nữ thường làm việc nhiều giờ hơn nhưng kiếm được ít tiền hơn nam giới.",
        },
        {
          id: "u6-q11",
          promptEn:
            "There shouldn’t be any discrimination against women in the workplace.",
          promptVi:
            "Không nên có bất kỳ sự phân biệt đối xử nào với phụ nữ tại nơi làm việc.",
          sampleAnswerEn:
            "There shouldn’t be any discrimination against women in the workplace.",
          sampleAnswerVi:
            "Không nên có bất kỳ sự phân biệt đối xử nào với phụ nữ tại nơi làm việc.",
        },
        {
          id: "u6-q12",
          promptEn:
            "I think we should change our beliefs about traditional roles of men and women.",
          promptVi:
            "Mình nghĩ chúng ta nên thay đổi quan niệm về vai trò truyền thống của nam và nữ.",
          sampleAnswerEn:
            "I think we should change our beliefs about traditional roles of men and women.",
          sampleAnswerVi:
            "Mình nghĩ chúng ta nên thay đổi quan niệm về vai trò truyền thống của nam và nữ.",
        },
        {
          id: "u6-q13",
          promptEn:
            "She actively works to protect teenagers and women and to prevent crimes.",
          promptVi:
            "Cô ấy tích cực làm việc để bảo vệ thanh thiếu niên và phụ nữ, đồng thời ngăn ngừa tội phạm.",
          sampleAnswerEn:
            "She actively works to protect teenagers and women and to prevent crimes.",
          sampleAnswerVi:
            "Cô ấy tích cực làm việc để bảo vệ thanh thiếu niên và phụ nữ, đồng thời ngăn ngừa tội phạm.",
        },
        {
          id: "u6-q14",
          promptEn:
            "Many married women go to work to help their husbands meet their children’s needs.",
          promptVi:
            "Nhiều phụ nữ đã kết hôn đi làm để giúp chồng đáp ứng các nhu cầu của con cái.",
          sampleAnswerEn:
            "Many married women go to work to help their husbands meet their children’s needs.",
          sampleAnswerVi:
            "Nhiều phụ nữ đã kết hôn đi làm để giúp chồng đáp ứng các nhu cầu của con cái.",
        },
      ],
    },
  ],
};

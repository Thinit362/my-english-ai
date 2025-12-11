import type { SpeakingLesson } from "./types";

export const speakingUnit3: SpeakingLesson = {
  unit: 3,
  topicVi: "Thuyết trình về chương trình truyền hình",
  titleEn: "Personal Presentation About TV Shows",

  /* ===== A. LÝ THUYẾT – giữ nguyên dạng bảng ===== */
  theory: [
    {
      title: "Opening – Mở đầu bài thuyết trình",
      items: [
        "Hello everyone. / Good morning everyone.",
        "My name is …",
        "I am … from class/group …",
      ],
    },
    {
      title: "Body – Nội dung chính",
      items: [
        "I’m going to talk about a TV show named …",
        "It’s a singing competition / reality show / game show.",
        "It is broadcast from … to … on …",
        "There are … contestants.",
        "First,… After that,… Finally,…",
        "The winner will receive …",
      ],
    },
    {
      title: "Ending – Kết thúc",
      items: [
        "That’s all for today. Thank you for your attention.",
        "Well, that’s all from me. Thank you very much.",
      ],
    },
  ],

  /* =====================================================
      B. THỰC HÀNH – TASK 2 GIỐNG Y HỆ THỐNG ĐÃ LÀM
     ===================================================== */
  practice: [
    {
      id: "task2",
      title: "Task 2: Listen and record to compare",
      instructionVi:
        "Dưới đây là bài thu âm của Pete trích từ đoạn phim tình huống. Em hãy thu âm theo bài mẫu này để so sánh nhé.",

      /** 
       * Mỗi item = 1 câu + nút TTSPlay (play + record)
       * text = câu mẫu
       * enableRecord = true → bật luyện nói & chấm điểm
       */
      items: [
        { id: 1, text: "Hello everyone! My name is Pete.", enableRecord: true },
        {
          id: 2,
          text: "Today I'm going to talk about my TV show named Be your idol.",
          enableRecord: true,
        },
        {
          id: 3,
          text: "It is from 8:00 to 9:00 on Friday evenings.",
          enableRecord: true,
        },
        {
          id: 4,
          text: "There are three adult contestants. Each contestant will choose an idol.",
          enableRecord: true,
        },
        {
          id: 5,
          text: "After that, each contestant tries to perform to be the most similar to the idol's clothes, voice, and gestures.",
          enableRecord: true,
        },
        {
          id: 6,
          text: "After finishing, the candidates will hear comments from the judges.",
          enableRecord: true,
        },
        {
          id: 7,
          text: "Finally, the participant who gets the highest number of votes from the audience will be the winner and receive 25 million dong.",
          enableRecord: true,
        },
        {
          id: 8,
          text: "That's an imaginary show I have introduced to you. Thank you for your attention.",
          enableRecord: true,
        },
      ],
    },

    /* ===== TASK 3 ===== */
    {
      id: "task3",
      title: "Task 3: Prepare your own presentation",
      instructionVi:
        "Dựa vào những kiến thức đã học, em hãy chuẩn bị một bài thuyết trình về một chương trình truyền hình mà em yêu thích hoặc tưởng tượng ra.",

      /** 
       * Task 3: học sinh tự nói → chỉ cần gợi ý, không có mẫu
       */
      items: [
        {
          id: 9,
          text: "Introduce yourself and name the TV show you want to talk about.",
          enableRecord: true,
        },
        {
          id: 10,
          text: "Describe the type of show and when it is broadcast.",
          enableRecord: true,
        },
        {
          id: 11,
          text: "Explain the rules or what happens in the show.",
          enableRecord: true,
        },
        {
          id: 12,
          text: "Describe the prize for the winner.",
          enableRecord: true,
        },
        {
          id: 13,
          text: "Finish your presentation politely.",
          enableRecord: true,
        },
      ],
    },
  ],
};

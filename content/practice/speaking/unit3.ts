import type { SpeakingLesson } from "./types";

export const speakingUnit3: SpeakingLesson = {
  unit: 3,
  topicVi: "Thuyết trình về chương trình truyền hình",
  titleEn: "Unit 3 – Personal Presentation about TV Shows",
  descriptionEn:
    "Learn how to structure a personal presentation about a TV show and practise speaking using a clear opening, body and ending.",
  descriptionVi:
    "Học cách xây dựng một bài thuyết trình cá nhân về chương trình truyền hình với phần mở đầu, nội dung và kết thúc rõ ràng.",

  /* ===================== A. LÝ THUYẾT ===================== */
  theory: [
    {
      id: "opening",
      title: "Opening – Mở đầu bài thuyết trình",
      contentEn:
        "Introduce yourself and greet the audience before you talk about the TV show.",
      contentVi:
        "Giới thiệu bản thân và chào khán giả trước khi nói về chương trình truyền hình.",
      items: [
        {
          en: "Hello everyone. / Good morning everyone.",
          vi: "Xin chào mọi người. / Chào buổi sáng mọi người.",
        },
        { en: "My name is …", vi: "Tôi tên là …" },
        {
          en: "I am … from class/group …",
          vi: "Tôi là … đến từ lớp/nhóm …",
        },
      ],
    },
    {
      id: "body",
      title: "Body – Nội dung chính",
      contentEn:
        "Give information about the show: its name, type, time, rules and prize.",
      contentVi:
        "Cung cấp thông tin về chương trình: tên, thể loại, thời gian phát sóng, luật chơi và giải thưởng.",
      items: [
        {
          en: "I’m going to talk about a TV show called …",
          vi: "Tôi sẽ nói về một chương trình truyền hình có tên là …",
        },
        {
          en: "It’s a singing competition / a reality show / a game show.",
          vi: "Đó là một cuộc thi hát / chương trình thực tế / trò chơi truyền hình.",
        },
        {
          en: "It is broadcast from 8:00 to 9:00 on Friday evenings.",
          vi: "Chương trình được phát sóng từ 8 giờ đến 9 giờ tối thứ Sáu.",
        },
        {
          en: "There are three contestants. Each contestant chooses an idol.",
          vi: "Có ba thí sinh. Mỗi thí sinh chọn một thần tượng.",
        },
        {
          en: "First,… After that,… Finally,…",
          vi: "Đầu tiên,… Sau đó,… Cuối cùng,…",
        },
        {
          en: "The winner will receive a special prize.",
          vi: "Người chiến thắng sẽ nhận được một giải thưởng đặc biệt.",
        },
      ],
    },
    {
      id: "ending",
      title: "Ending – Kết thúc bài thuyết trình",
      contentEn:
        "Finish your presentation politely and thank the audience.",
      contentVi:
        "Kết thúc bài thuyết trình một cách lịch sự và cảm ơn người nghe.",
      items: [
        {
          en: "That’s all for my presentation. Thank you for listening.",
          vi: "Đó là toàn bộ bài thuyết trình của tôi. Cảm ơn mọi người đã lắng nghe.",
        },
        {
          en: "Thank you for your attention.",
          vi: "Cảm ơn mọi người đã chú ý theo dõi.",
        },
      ],
    },
  ],

  /* ===================== B. THỰC HÀNH ===================== */
  exercises: [
    /* ---------- TASK 2: bài thuyết trình mẫu của Pete ---------- */
    {
      id: "u3-task2",
      title: "Task 2 – Listen to Pete’s presentation and repeat",
      instructionEn:
        "Listen to each sentence from Pete’s presentation about his TV show, then record your own voice to compare.",
      instructionVi:
        "Nghe từng câu trong bài thuyết trình của Pete về chương trình truyền hình của bạn ấy, sau đó thu âm lại để so sánh.",
      questions: [
        {
          id: "u3-q1",
          promptEn: "Hello everyone! My name is Pete.",
          promptVi: "Xin chào mọi người! Mình là Pete.",
          sampleAnswerEn: "Hello everyone! My name is Pete.",
          sampleAnswerVi: "Xin chào mọi người! Mình là Pete.",
        },
        {
          id: "u3-q2",
          promptEn:
            "Today I’m going to talk about my TV show named Be your idol.",
          promptVi:
            "Hôm nay mình sẽ nói về chương trình truyền hình của mình có tên là Be your idol.",
          sampleAnswerEn:
            "Today I’m going to talk about my TV show named Be your idol.",
          sampleAnswerVi:
            "Hôm nay mình sẽ nói về chương trình truyền hình của mình có tên là Be your idol.",
        },
        {
          id: "u3-q3",
          promptEn: "It is from 8:00 to 9:00 on Friday evenings.",
          promptVi:
            "Chương trình phát sóng từ 8 giờ đến 9 giờ tối thứ Sáu.",
          sampleAnswerEn: "It is from 8:00 to 9:00 on Friday evenings.",
          sampleAnswerVi:
            "Chương trình phát sóng từ 8 giờ đến 9 giờ tối thứ Sáu.",
        },
        {
          id: "u3-q4",
          promptEn:
            "There are three adult contestants. Each contestant will choose an idol.",
          promptVi:
            "Có ba thí sinh là người lớn. Mỗi thí sinh sẽ chọn một thần tượng.",
          sampleAnswerEn:
            "There are three adult contestants. Each contestant will choose an idol.",
          sampleAnswerVi:
            "Có ba thí sinh là người lớn. Mỗi thí sinh sẽ chọn một thần tượng.",
        },
        {
          id: "u3-q5",
          promptEn:
            "After that, each contestant tries to perform to be the most similar to the idol’s clothes, voice and gestures.",
          promptVi:
            "Sau đó, mỗi thí sinh cố gắng biểu diễn sao cho giống nhất với trang phục, giọng nói và cử chỉ của thần tượng.",
          sampleAnswerEn:
            "After that, each contestant tries to perform to be the most similar to the idol’s clothes, voice and gestures.",
          sampleAnswerVi:
            "Sau đó, mỗi thí sinh cố gắng biểu diễn sao cho giống nhất với trang phục, giọng nói và cử chỉ của thần tượng.",
        },
        {
          id: "u3-q6",
          promptEn:
            "After finishing, the candidates will hear comments from the judges.",
          promptVi:
            "Sau khi biểu diễn xong, các thí sinh sẽ nghe nhận xét từ ban giám khảo.",
          sampleAnswerEn:
            "After finishing, the candidates will hear comments from the judges.",
          sampleAnswerVi:
            "Sau khi biểu diễn xong, các thí sinh sẽ nghe nhận xét từ ban giám khảo.",
        },
        {
          id: "u3-q7",
          promptEn:
            "Finally, the participant who gets the highest number of votes from the audience will be the winner and receive twenty-five million dong.",
          promptVi:
            "Cuối cùng, thí sinh nhận được nhiều phiếu bầu nhất từ khán giả sẽ là người chiến thắng và nhận 25 triệu đồng.",
          sampleAnswerEn:
            "Finally, the participant who gets the highest number of votes from the audience will be the winner and receive twenty-five million dong.",
          sampleAnswerVi:
            "Cuối cùng, thí sinh nhận được nhiều phiếu bầu nhất từ khán giả sẽ là người chiến thắng và nhận 25 triệu đồng.",
        },
        {
          id: "u3-q8",
          promptEn:
            "That’s an imaginary show I have introduced to you. Thank you for your attention.",
          promptVi:
            "Đó là chương trình do mình tưởng tượng và vừa giới thiệu với các bạn. Cảm ơn các bạn đã lắng nghe.",
          sampleAnswerEn:
            "That’s an imaginary show I have introduced to you. Thank you for your attention.",
          sampleAnswerVi:
            "Đó là chương trình do mình tưởng tượng và vừa giới thiệu với các bạn. Cảm ơn các bạn đã lắng nghe.",
        },
      ],
    },

    /* ---------- TASK 3: gợi ý HS tự thuyết trình ---------- */
    {
      id: "u3-task3",
      title: "Task 3 – Prepare your own presentation about a TV show",
      instructionEn:
        "Use the outline you have learned to prepare a short presentation about a TV show you like or imagine.",
      instructionVi:
        "Dựa vào dàn ý đã học để chuẩn bị một bài thuyết trình ngắn về chương trình truyền hình mà bạn yêu thích hoặc tưởng tượng.",
      questions: [
        {
          id: "u3-q9",
          promptEn:
            "Introduce yourself and say which TV show you are going to talk about.",
          promptVi:
            "Giới thiệu bản thân và nêu tên chương trình truyền hình bạn sẽ nói tới.",
          tipEn: "Use: Hello everyone, my name is…, I’m going to talk about…",
        },
        {
          id: "u3-q10",
          promptEn:
            "Describe the type of show and when it is broadcast.",
          promptVi:
            "Mô tả thể loại chương trình và thời gian phát sóng.",
        },
        {
          id: "u3-q11",
          promptEn:
            "Explain the main rules or what happens in the show.",
          promptVi: "Giải thích luật chơi hoặc nội dung chính của chương trình.",
        },
        {
          id: "u3-q12",
          promptEn: "Talk about the prize for the winner.",
          promptVi: "Nói về giải thưởng dành cho người chiến thắng.",
        },
        {
          id: "u3-q13",
          promptEn: "End your presentation politely and thank the audience.",
          promptVi: "Kết thúc bài thuyết trình và cảm ơn người nghe.",
          tipEn:
            "Use: That’s all for my presentation. Thank you for listening.",
        },
      ],
    },
  ],
};

// content/practice/speaking/unit3.ts
import type { SpeakingLesson } from "./types";

export const speakingUnit3: SpeakingLesson = {
  unit: 3,
  topicVi: "Thuyết trình về chương trình truyền hình",
  titleEn: "Unit 3 – Personal Presentation about TV Shows",
  descriptionEn:
    "Learn how to structure a personal presentation about a TV show and practise speaking using clear organization.",
  descriptionVi:
    "Học cách trình bày một bài thuyết trình cá nhân về chương trình truyền hình với bố cục rõ ràng và tự tin.",

  /* ===================== A. THEORY ===================== */
  theory: [
    {
      id: "opening",
      title: "Opening – Mở đầu bài thuyết trình",
      contentEn:
        "Introduce yourself and greet the audience before starting your presentation.",
      contentVi:
        "Giới thiệu bản thân và chào khán giả trước khi bắt đầu phần thuyết trình.",
      items: [
        { en: "Hello everyone / Good morning everyone.", vi: "Xin chào mọi người." },
        { en: "My name is …", vi: "Tôi tên là …" },
        { en: "I am … from class/group …", vi: "Tôi đến từ lớp/nhóm …" },
      ],
    },

    {
      id: "body",
      title: "Body – Nội dung chính của bài thuyết trình",
      contentEn:
        "Present key information about the TV show: name, type, schedule, rules, and prize.",
      contentVi:
        "Trình bày các thông tin chính về chương trình: tên, thể loại, thời gian phát sóng, luật chơi, và giải thưởng.",
      items: [
        { en: "I’m going to talk about a TV show called…", vi: "Tôi sẽ nói về một chương trình có tên…" },
        { en: "It’s a singing competition / a reality show / a game show.", vi: "Đó là một cuộc thi hát / chương trình thực tế / trò chơi." },
        { en: "It is broadcast from … to … on …", vi: "Chương trình được phát sóng từ … đến … vào …" },
        { en: "There are … contestants.", vi: "Có … người chơi." },
        { en: "First,… / After that,… / Finally,…", vi: "Đầu tiên,… / Sau đó,… / Cuối cùng,…" },
        { en: "The winner will receive …", vi: "Người chiến thắng sẽ nhận…" },
      ],
    },

    {
      id: "ending",
      title: "Ending – Kết thúc bài thuyết trình",
      contentEn:
        "Close your presentation politely and thank the audience.",
      contentVi:
        "Kết thúc bài thuyết trình và cảm ơn người nghe.",
      items: [
        { en: "That’s all for my presentation. Thank you for listening.", vi: "Đó là toàn bộ phần trình bày của tôi. Cảm ơn các bạn đã lắng nghe." },
        { en: "Thank you for your attention.", vi: "Cảm ơn mọi người đã theo dõi." },
      ],
    },
  ],

  /* ===================== B. PRACTICE ===================== */
  exercises: [
    {
      id: "page-1",
      title: "Task 2 – Listen and repeat Pete’s presentation",
      instructionEn:
        "Listen to the model presentation and then record your own version to compare.",
      instructionVi:
        "Nghe bài thuyết trình mẫu rồi thu âm lại phần của bạn để so sánh.",
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
            "Today I’m going to introduce a TV show that I created called Star of the Stage.",
          promptVi:
            "Hôm nay mình sẽ giới thiệu một chương trình truyền hình do mình tưởng tượng có tên là Star of the Stage.",
          sampleAnswerEn:
            "Today I’m going to introduce a TV show that I created called Star of the Stage.",
          sampleAnswerVi:
            "Hôm nay mình sẽ giới thiệu một chương trình truyền hình do mình tưởng tượng có tên là Star of the Stage.",
        },
        {
          id: "u3-q3",
          promptEn:
            "It is broadcast from 8:00 to 9:00 on Friday evenings.",
          promptVi:
            "Chương trình được phát sóng từ 8 giờ đến 9 giờ tối thứ Sáu.",
          sampleAnswerEn:
            "It is broadcast from 8:00 to 9:00 on Friday evenings.",
          sampleAnswerVi:
            "Chương trình được phát sóng từ 8 giờ đến 9 giờ tối thứ Sáu.",
        },
        {
          id: "u3-q4",
          promptEn:
            "There are three contestants and each contestant chooses their favorite celebrity to imitate.",
          promptVi:
            "Có ba thí sinh và mỗi người sẽ chọn một thần tượng để hóa thân.",
          sampleAnswerEn:
            "There are three contestants and each contestant chooses their favorite celebrity to imitate.",
          sampleAnswerVi:
            "Có ba thí sinh và mỗi người sẽ chọn một thần tượng để hóa thân.",
        },
        {
          id: "u3-q5",
          promptEn:
            "Then they perform to match the idol’s voice, clothing style, and gestures.",
          promptVi:
            "Sau đó họ biểu diễn sao cho giống phong cách giọng hát, trang phục và cử chỉ của thần tượng.",
          sampleAnswerEn:
            "Then they perform to match the idol’s voice, clothing style, and gestures.",
          sampleAnswerVi:
            "Sau đó họ biểu diễn sao cho giống phong cách giọng hát, trang phục và cử chỉ của thần tượng.",
        },
        {
          id: "u3-q6",
          promptEn:
            "After performing, they receive comments from a panel of judges.",
          promptVi:
            "Sau phần biểu diễn, họ nhận nhận xét từ ban giám khảo.",
          sampleAnswerEn:
            "After performing, they receive comments from a panel of judges.",
          sampleAnswerVi:
            "Sau phần biểu diễn, họ nhận nhận xét từ ban giám khảo.",
        },
        {
          id: "u3-q7",
          promptEn:
            "Finally, the contestant who gets the most votes from the audience becomes the winner and receives a prize of 25 million dong.",
          promptVi:
            "Cuối cùng, thí sinh nhận được nhiều bình chọn nhất sẽ chiến thắng và nhận giải thưởng 25 triệu đồng.",
          sampleAnswerEn:
            "Finally, the contestant who gets the most votes from the audience becomes the winner and receives a prize of 25 million dong.",
          sampleAnswerVi:
            "Cuối cùng, thí sinh nhận được nhiều bình chọn nhất sẽ chiến thắng và nhận giải thưởng 25 triệu đồng.",
        },
        {
          id: "u3-q8",
          promptEn:
            "That’s the show I wanted to share with you. Thank you for listening.",
          promptVi:
            "Đó là chương trình mình muốn chia sẻ với mọi người. Cảm ơn đã lắng nghe.",
          sampleAnswerEn:
            "That’s the show I wanted to share with you. Thank you for listening.",
          sampleAnswerVi:
            "Đó là chương trình mình muốn chia sẻ với mọi người. Cảm ơn đã lắng nghe.",
        },
      ],
    },

    {
      id: "page-2",
      title: "Task 3 – Prepare your own presentation",
      instructionEn:
        "Using the structure you have learned, prepare and practise your own short presentation about a TV show you enjoy or imagine.",
      instructionVi:
        "Dựa vào cấu trúc đã học, hãy chuẩn bị và luyện tập bài thuyết trình của riêng bạn về một chương trình truyền hình mà bạn yêu thích hoặc tưởng tượng.",
      questions: [
        {
          id: "u3-q9",
          promptEn:
            "Start your presentation: introduce yourself and your TV show.",
          promptVi:
            "Bắt đầu bài thuyết trình: giới thiệu bản thân và chương trình bạn chọn.",
          tipEn:
            "Use: Hello everyone, my name is… Today I’m going to talk about…",
        },
        {
          id: "u3-q10",
          promptEn:
            "Describe the type of show and when it is broadcast.",
          promptVi:
            "Mô tả thể loại chương trình và thời gian phát sóng.",
          tipEn: "Use: It is a … show. It is broadcast from…",
        },
        {
          id: "u3-q11",
          promptEn:
            "Explain the rules or how the show works.",
          promptVi:
            "Giải thích luật chơi hoặc cách chương trình diễn ra.",
        },
        {
          id: "u3-q12",
          promptEn: "Describe the prize for the winner.",
          promptVi: "Mô tả giải thưởng cho người chiến thắng.",
        },
        {
          id: "u3-q13",
          promptEn: "End your presentation politely.",
          promptVi: "Kết thúc bài thuyết trình một cách lịch sự.",
          tipEn: "Use: That’s all for my presentation. Thank you for listening.",
        },
      ],
    },
  ],
};

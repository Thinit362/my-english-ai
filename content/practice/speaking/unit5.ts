import type { SpeakingLesson } from "./types";

export const speakingUnit5: SpeakingLesson = {
  unit: 5,
  topicVi: "Nói về các phát minh",
  titleEn: "Unit 5 – Talking about inventions",
  descriptionEn:
    "Practise describing inventions, including their characteristics, uses, and benefits.",
  descriptionVi:
    "Luyện mô tả các phát minh: đặc điểm, mục đích sử dụng và lợi ích.",

  /* ===================== A. LÝ THUYẾT ===================== */
  theory: [
    {
      id: "invention-name",
      title: "1. Talking about the name of an invention",
      contentEn:
        "Useful expressions to introduce or ask about an invention.",
      contentVi:
        "Một số cấu trúc hữu ích để giới thiệu hoặc hỏi về tên phát minh.",
      items: [
        { en: "What's that machine?", vi: "Cái máy kia là gì?" },
        {
          en: "It's a 3-D printer / an e-book reader.",
          vi: "Nó là máy in 3D / máy đọc sách điện tử.",
        },
        {
          en: "What do you think is the greatest invention in …?",
          vi: "Bạn nghĩ phát minh vĩ đại nhất trong lĩnh vực … là gì?",
        },
        { en: "I think it's …", vi: "Tớ nghĩ đó là …" },
      ],
    },
    {
      id: "characteristics",
      title: "2. Describing characteristics",
      contentEn: "Use adjectives to talk about features of an invention.",
      contentVi: "Dùng tính từ để mô tả đặc điểm của phát minh.",
      items: [
        { en: "It's small and light.", vi: "Nó nhỏ và nhẹ." },
        {
          en: "A 3-D printer is bigger and heavier than a normal printer.",
          vi: "Máy in 3D lớn và nặng hơn máy in thường.",
        },
      ],
    },
    {
      id: "use",
      title: "3. Describing uses",
      contentEn:
        "Ask and answer about the functions or purposes of an invention.",
      contentVi: "Hỏi và trả lời về chức năng, mục đích sử dụng của phát minh.",
      items: [
        {
          en: "What is it used for?",
          vi: "Nó được sử dụng để làm gì?",
        },
        {
          en: "It’s used for V-ing / N.",
          vi: "Nó được dùng cho việc …",
        },
        {
          en: "People use it to + V.",
          vi: "Người ta dùng nó để …",
        },
        {
          en: "Why do people use it?",
          vi: "Tại sao người ta lại dùng nó?",
        },
      ],
    },
    {
      id: "benefits",
      title: "4. Talking about benefits",
      contentEn: "Describe advantages and positive points of an invention.",
      contentVi: "Mô tả ưu điểm và lợi ích của phát minh.",
      items: [
        {
          en: "It's economical. You can buy it for only …",
          vi: "Nó tiết kiệm. Bạn có thể mua nó chỉ với …",
        },
        {
          en: "It's convenient and easy to use.",
          vi: "Nó tiện lợi và dễ dùng.",
        },
      ],
    },
  ],

    /* ===================== B. THỰC HÀNH ===================== */
  exercises: [
    {
      id: "u5-task3",
      title: "Task 3 – Listen and record the following sentences",
      instructionEn:
        "Listen to the sentences below, then record your voice to compare with the model.",
      instructionVi:
        "Hãy nghe các câu dưới đây, sau đó thu âm để so sánh với bài mẫu.",
      questions: [
        {
          id: "u5-q1",
          promptEn: "It’s small and portable.",
          promptVi: "Nó nhỏ và dễ mang theo.",
          sampleAnswerEn: "It’s small and portable.",
          sampleAnswerVi: "Nó nhỏ và dễ mang theo.",
        },
        {
          id: "u5-q2",
          promptEn: "It’s bigger and heavier than a normal printer.",
          promptVi: "Nó to hơn và nặng hơn một máy in bình thường.",
          sampleAnswerEn: "It’s bigger and heavier than a normal printer.",
          sampleAnswerVi: "Nó to hơn và nặng hơn một máy in bình thường.",
        },
        {
          id: "u5-q3",
          promptEn: "What do people use it for?",
          promptVi: "Người ta dùng nó để làm gì?",
          sampleAnswerEn: "What do people use it for?",
          sampleAnswerVi: "Người ta dùng nó để làm gì?",
        },
        {
          id: "u5-q4",
          promptEn: "A USB stick is used to store data.",
          promptVi: "USB được dùng để lưu trữ dữ liệu.",
          sampleAnswerEn: "A USB stick is used to store data.",
          sampleAnswerVi: "USB được dùng để lưu trữ dữ liệu.",
        },
        {
          id: "u5-q5",
          promptEn:
            "People can use a portable solar charger for charging mobile devices.",
          promptVi:
            "Người ta có thể dùng bộ sạc năng lượng mặt trời để sạc thiết bị di động.",
          sampleAnswerEn:
            "People can use a portable solar charger for charging mobile devices.",
          sampleAnswerVi:
            "Người ta có thể dùng bộ sạc năng lượng mặt trời để sạc thiết bị di động.",
        },
        {
          id: "u5-q6",
          promptEn:
            "It is not costly. You can buy a USB stick for about 100,000 VND.",
          promptVi:
            "Nó không đắt. Bạn có thể mua một chiếc USB khoảng 100 nghìn đồng.",
          sampleAnswerEn:
            "It is not costly. You can buy a USB stick for about 100,000 VND.",
          sampleAnswerVi:
            "Nó không đắt. Bạn có thể mua một chiếc USB khoảng 100 nghìn đồng.",
        },
        {
          id: "u5-q7",
          promptEn: "A solar charger is environmentally friendly.",
          promptVi: "Bộ sạc năng lượng mặt trời thân thiện với môi trường.",
          sampleAnswerEn: "A solar charger is environmentally friendly.",
          sampleAnswerVi: "Bộ sạc năng lượng mặt trời thân thiện với môi trường.",
        },
        {
          id: "u5-q8",
          promptEn:
            "A 3-D printer is used for producing solid objects similar to the originals.",
          promptVi:
            "Máy in 3D được dùng để tạo các vật thể rắn giống như bản gốc.",
          sampleAnswerEn:
            "A 3-D printer is used for producing solid objects similar to the originals.",
          sampleAnswerVi:
            "Máy in 3D được dùng để tạo các vật thể rắn giống như bản gốc.",
        },
      ],
    },
  ],
};

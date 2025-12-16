import type { SpeakingLesson } from "./types";

export const speakingUnit10: SpeakingLesson = {
  unit: 10,
  topicVi: "Hoạt động khi đi du lịch sinh thái",
  titleEn: "Unit 10 – Talking about what tourists can do on an eco tour",
  descriptionVi:
    "Luyện nói về các hoạt động trong chuyến du lịch sinh thái và cách trở thành một du khách có trách nhiệm với môi trường.",

  /* =========================
     A. LÝ THUYẾT
     ========================= */
  theory: [
    {
      id: "u10-overview",
      title: "Key information in an eco tour",
      contentVi:
        "Khi nói về một chuyến du lịch sinh thái, các em có thể đề cập đến những thông tin sau:",
      items: [
        {
          en: "Where to go",
          vi: "Địa điểm du lịch",
        },
        {
          en: "When to go",
          vi: "Thời điểm thích hợp để đi",
        },
        {
          en: "Where to visit",
          vi: "Những địa danh cần tham quan",
        },
        {
          en: "What to do",
          vi: "Những hoạt động có thể làm",
        },
        {
          en: "How to be an ecotourist",
          vi: "Cách trở thành du khách thân thiện với môi trường",
        },
      ],
    },
    {
      id: "u10-advice",
      title: "Giving suggestions and advice",
      contentVi:
        "Mary đã sử dụng nhiều cấu trúc để đưa ra gợi ý và lời khuyên trong chuyến du lịch sinh thái.",
      items: [
        { en: "If I were you, I would…", vi: "Nếu tớ là cậu, tớ sẽ…" },
        { en: "I suggest that you should…", vi: "Tớ gợi ý là cậu nên…" },
        { en: "You should…", vi: "Cậu nên…" },
        { en: "It is not recommended to…", vi: "Không nên…" },
        { en: "You had better…", vi: "Cậu nên…" },
        { en: "… is highly recommended.", vi: "… rất nên làm." },
        { en: "You can’t miss…", vi: "Cậu không thể bỏ lỡ…" },
      ],
    },
  ],

  /* =========================
     B. THỰC HÀNH LUYỆN NÓI
     ========================= */
  exercises: [
    {
      id: "u10-task2",
      title: "Task 2 – Listen and record to compare",
      instructionEn:
        "Listen to the following sentences and record your voice to compare with the model.",
      instructionVi:
        "Nghe các câu dưới đây, sau đó thu âm để so sánh với bài mẫu.",

      questions: [
        {
          id: "u10-s1",
          promptEn:
            "I went on an eco tour to Phong Nha - Ke Bang National Park.",
          promptVi:
            "Tôi đã đi du lịch sinh thái tới Vườn quốc gia Phong Nha - Kẻ Bàng.",
          sampleAnswerEn:
            "I went on an eco tour to Phong Nha - Ke Bang National Park.",
        },
        {
          id: "u10-s2",
          promptEn:
            "The best time to visit this place is from February to August.",
          promptVi:
            "Thời điểm tốt nhất để tham quan nơi này là từ tháng Hai đến tháng Tám.",
          sampleAnswerEn:
            "The best time to visit this place is from February to August.",
        },
        {
          id: "u10-s3",
          promptEn:
            "Tourists can visit the famous Paradise Cave and the Wildlife Rescue Centre.",
          promptVi:
            "Du khách có thể tham quan động Thiên Đường và Trung tâm Cứu hộ Động vật Hoang dã.",
          sampleAnswerEn:
            "Tourists can visit the famous Paradise Cave and the Wildlife Rescue Centre.",
        },
        {
          id: "u10-s4",
          promptEn:
            "There are many interesting activities such as mountain trekking and kayaking on the river.",
          promptVi:
            "Có nhiều hoạt động thú vị như leo núi và chèo thuyền kayak trên sông.",
          sampleAnswerEn:
            "There are many interesting activities such as mountain trekking and kayaking on the river.",
        },
        {
          id: "u10-s5",
          promptEn:
            "You can’t miss a visit to the remote ethnic minority village of Ban Doong.",
          promptVi:
            "Bạn không thể bỏ lỡ chuyến thăm làng Bản Đoòng của đồng bào dân tộc thiểu số.",
          sampleAnswerEn:
            "You can’t miss a visit to the remote ethnic minority village of Ban Doong.",
        },
        {
          id: "u10-s6",
          promptEn:
            "If I were you, I would not feed wild animals without permission.",
          promptVi:
            "Nếu tôi là bạn, tôi sẽ không cho động vật hoang dã ăn khi chưa được phép.",
          sampleAnswerEn:
            "If I were you, I would not feed wild animals without permission.",
          structureHighlight: "If I were you, I would…",
        },
        {
          id: "u10-s7",
          promptEn:
            "Tourists should keep the environment clean by not littering.",
          promptVi:
            "Du khách nên giữ môi trường sạch sẽ bằng cách không xả rác.",
          sampleAnswerEn:
            "Tourists should keep the environment clean by not littering.",
          structureHighlight: "You should…",
        },
      ],
    },

    {
      id: "u10-task3",
      title: "Task 3 – Free speaking",
      instructionEn:
        "Prepare a short talk about an eco tour you have been on or would like to take.",
      instructionVi:
        "Chuẩn bị một bài nói ngắn về một chuyến du lịch sinh thái mà em đã đi hoặc muốn đi.",

      questions: [
        {
          id: "u10-free-1",
          promptEn:
            "Talk about an eco tour you like. Mention where to go, what to do and how to be an ecotourist.",
          promptVi:
            "Nói về một chuyến du lịch sinh thái mà em yêu thích. Đề cập đến địa điểm, hoạt động và cách trở thành du khách thân thiện với môi trường.",
          tipEn:
            "You can start with: I would like to talk about an eco tour to…",
          tipVi:
            "Em có thể bắt đầu bằng: I would like to talk about an eco tour to…",
        },
      ],
    },
  ],
};

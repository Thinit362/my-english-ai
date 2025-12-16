import type { SpeakingLesson } from "./types";

export const speakingUnit7: SpeakingLesson = {
  unit: 7,
  topicVi: "Giới thiệu về một tổ chức quốc tế",
  titleEn: "Unit 7 – Introduce an international organisation",
  descriptionEn:
    "Learn how to introduce an international organisation and practise speaking using guided questions.",
  descriptionVi:
    "Học cách giới thiệu về một tổ chức quốc tế và luyện nói thông qua các câu hỏi gợi ý.",

  /* ===================== A. NỘI DUNG CHÍNH ===================== */
  theory: [
    {
      id: "main-info",
      title: "1. Main information to include",
      contentEn:
        "To give a complete introduction of an international organisation, you should mention the following information.",
      contentVi:
        "Để giới thiệu đầy đủ về một tổ chức quốc tế, em cần đề cập đến các thông tin sau.",
      items: [
        {
          en: "What is the name of the organisation?",
          vi: "Tên của tổ chức quốc tế là gì?",
        },
        {
          en: "When and where was it formed?",
          vi: "Tổ chức được thành lập khi nào và ở đâu?",
        },
        {
          en: "How many member countries does it have? Is Viet Nam a member?",
          vi: "Tổ chức có bao nhiêu quốc gia thành viên? Việt Nam có phải là thành viên không?",
        },
        {
          en: "What are its aims?",
          vi: "Mục tiêu của tổ chức là gì?",
        },
        {
          en: "What are its current activities or projects?",
          vi: "Các hoạt động hoặc dự án hiện tại của tổ chức là gì?",
        },
        {
          en: "What has it done to help Viet Nam?",
          vi: "Tổ chức đã làm gì để giúp đỡ Việt Nam?",
        },
      ],
    },
  ],

  /* ===================== B. THỰC HÀNH ===================== */
  exercises: [
    /* ---------- TASK 1: NÓI THEO GỢI Ý (thay cho kéo thả) ---------- */
    {
      id: "u7-task1",
      title: "Task 1 – Talk about UNICEF and UNDP programmes",
      instructionEn:
        "Read the dialogue below and practise speaking by answering the questions in complete sentences.",
      instructionVi:
        "Đọc đoạn hội thoại dưới đây và luyện nói bằng cách trả lời các câu hỏi bằng câu hoàn chỉnh.",
      questions: [
        {
          id: "u7-q1",
          promptEn:
            "What is the name of the UNICEF programme for disadvantaged young people?",
          promptVi:
            "Tên của chương trình UNICEF dành cho thanh thiếu niên khó khăn là gì?",
          sampleAnswerEn:
            "It is Education for Disadvantaged Young People.",
        },
        {
          id: "u7-q2",
          promptEn:
            "What does this UNICEF programme focus on?",
          promptVi:
            "Chương trình UNICEF này tập trung vào điều gì?",
          sampleAnswerEn:
            "It focuses on helping disadvantaged teenagers continue their education and giving career advice.",
        },
        {
          id: "u7-q3",
          promptEn:
            "What is the name of the UNDP project mentioned?",
          promptVi:
            "Tên của dự án UNDP được nhắc tới là gì?",
          sampleAnswerEn:
            "It is the Poverty Reduction project.",
        },
        {
          id: "u7-q4",
          promptEn:
            "What does the UNDP project focus on?",
          promptVi:
            "Dự án UNDP tập trung vào điều gì?",
          sampleAnswerEn:
            "It focuses on reducing poverty and developing the economy in disadvantaged areas.",
        },
      ],
    },

    /* ---------- TASK 2: LISTEN & RECORD (GIỐNG SCREENSHOT) ---------- */
    {
      id: "u7-task2",
      title: "Task 2 – Listen and record to compare",
      instructionEn:
        "Listen to the following sentences about international organisations and then record your voice to compare.",
      instructionVi:
        "Hãy nghe các câu dưới đây nói về các tổ chức quốc tế, sau đó thu âm để so sánh.",
      questions: [
        {
          id: "u7-q5",
          promptEn:
            "As a member of various international organisations, Viet Nam can develop relations with other countries in the international community.",
          sampleAnswerEn:
            "As a member of various international organisations, Viet Nam can develop relations with other countries in the international community.",
        },
        {
          id: "u7-q6",
          promptEn:
            "Our country aims to work closely with these organisations to achieve their goals.",
          sampleAnswerEn:
            "Our country aims to work closely with these organisations to achieve their goals.",
        },
        {
          id: "u7-q7",
          promptEn:
            "As Viet Nam commits to developing its economy, it welcomes foreign investors.",
          sampleAnswerEn:
            "As Viet Nam commits to developing its economy, it welcomes foreign investors.",
        },
        {
          id: "u7-q8",
          promptEn:
            "Viet Nam also creates good conditions for both international and local businesses.",
          sampleAnswerEn:
            "Viet Nam also creates good conditions for both international and local businesses.",
        },
        {
          id: "u7-q9",
          promptEn:
            "This will help promote our economic growth.",
          sampleAnswerEn:
            "This will help promote our economic growth.",
        },
      ],
    },
  ],
};

// content/practice/listening/en10.u10.listen1.ts
import type { ListeningLesson } from "./types";

const en10_u10_listen1: ListeningLesson = {
  id: "en10.u10.listen1",
  unit: 10,
  skill: "listening",
  topicVi: "Du lịch sinh thái ở Việt Nam và trên thế giới",
  titleEn: "Ecotourism in Viet Nam and the World",
  youtubeId: "-vuzjfLuBlU",
  descriptionEn:
    "Listen to a talk and interviews about ecotourism in Viet Nam and other countries.",
  descriptionVi:
    "Nghe bài nói và các cuộc phỏng vấn về du lịch sinh thái ở Việt Nam và trên thế giới.",

  exercises: [
    // ================= PAGE 1: MCQ =================
    {
      id: "page1",
      title: "Listening – Part 1",
      instructionEn:
        "Listen to the talk and choose the best answer (A, B, C or D).",
      instructionVi:
        "Nghe bài nói và chọn đáp án đúng (A, B, C hoặc D).",

      questions: [
        {
          id: "u10_p1_q1",
          type: "mcq",
          question:
            "Who is the speaker in the first part of the talk?",
          options: [
            "A. A news reporter",
            "B. A tour guide",
            "C. A representative of a travel agency",
            "D. A local resident",
          ],
        },
        {
          id: "u10_p1_q2",
          type: "mcq",
          question:
            "What is Viet Nam well known for?",
          options: [
            "A. Modern cities",
            "B. Abundant natural resources and beautiful landscapes",
            "C. Industrial zones",
            "D. Historical wars",
          ],
        },
        {
          id: "u10_p1_q3",
          type: "mcq",
          question:
            "Which place is a favourite destination in central Viet Nam?",
          options: [
            "A. Tien Giang",
            "B. Phong Nha – Ke Bang",
            "C. Hoi An Ancient City",
            "D. Hanoi",
          ],
        },
        {
          id: "u10_p1_q4",
          type: "mcq",
          question:
            "What makes Hoi An suitable for families?",
          options: [
            "A. Modern entertainment",
            "B. Cheap hotels",
            "C. Peaceful and calm atmosphere",
            "D. Adventure activities",
          ],
        },
        {
          id: "u10_p1_q5",
          type: "mcq",
          question:
            "What environmental action was Hoi An the first to do?",
          options: [
            "A. Ban plastic bottles",
            "B. Introduce electric cars",
            "C. Host car-free days",
            "D. Close craft villages",
          ],
        },
        {
          id: "u10_p1_q6",
          type: "mcq",
          question:
            "What programme did Hoi An launch to protect the environment?",
          options: [
            "A. Green Energy Programme",
            "B. 3Rs programme",
            "C. Clean River Project",
            "D. Wildlife Protection Plan",
          ],
        },
        {
          id: "u10_p1_q7",
          type: "mcq",
          question:
            "Which national park is suitable for seeing wild animals?",
          options: [
            "A. Cuc Phuong National Park",
            "B. Yok Don National Park",
            "C. Phong Nha – Ke Bang National Park",
            "D. Cat Ba National Park",
          ],
        },
        {
          id: "u10_p1_q8",
          type: "mcq",
          question:
            "What can tourists do in Phong Nha – Ke Bang?",
          options: [
            "A. Only visit caves",
            "B. Camp and enjoy local food",
            "C. Go shopping",
            "D. Attend festivals",
          ],
        },
        {
          id: "u10_p1_q9",
          type: "mcq",
          question:
            "Which region is Tien Giang located in?",
          options: [
            "A. Central Highlands",
            "B. Northern mountains",
            "C. Mekong Delta",
            "D. Central Coast",
          ],
        },
        {
          id: "u10_p1_q10",
          type: "mcq",
          question:
            "What is the main aim of promoting ecotourism in Viet Nam?",
          options: [
            "A. To attract luxury tourists",
            "B. To protect the environment and develop tourism sustainably",
            "C. To replace traditional tourism",
            "D. To increase ticket prices",
          ],
        },
      ],

      answers: {
        u10_p1_q1: "C. A representative of a travel agency",
        u10_p1_q2: "B. Abundant natural resources and beautiful landscapes",
        u10_p1_q3: "C. Hoi An Ancient City",
        u10_p1_q4: "C. Peaceful and calm atmosphere",
        u10_p1_q5: "C. Host car-free days",
        u10_p1_q6: "B. 3Rs programme",
        u10_p1_q7: "C. Phong Nha – Ke Bang National Park",
        u10_p1_q8: "B. Camp and enjoy local food",
        u10_p1_q9: "C. Mekong Delta",
        u10_p1_q10:
          "B. To protect the environment and develop tourism sustainably",
      },
    },

    // ================= PAGE 2: Input + Drag =================
    {
      id: "page2",
      title: "Listening – Part 2",
      instructionEn:
        "Listen again and complete the sentences. For questions 7–10, drag the correct word into each blank.",
      instructionVi:
        "Nghe lại và hoàn thành câu. Với câu 7–10, kéo từ đúng vào chỗ trống.",

      questions: [
        {
          id: "u10_p2_q1",
          type: "input",
          question:
            "Hoi An receives more than ________ million tourists each year.",
          viHint: "một con số",
        },
        {
          id: "u10_p2_q2",
          type: "input",
          question:
            "Hoi An developed ecotourism in surrounding ________ villages.",
          viHint: "làng nghề",
        },
        {
          id: "u10_p2_q3",
          type: "input",
          question:
            "Phong Nha – Ke Bang is located in Quang ________ Province.",
          viHint: "tên tỉnh",
        },
        {
          id: "u10_p2_q4",
          type: "input",
          question:
            "Tourists can see monkeys and ________ in the wild.",
          viHint: "một loài động vật",
        },
        {
          id: "u10_p2_q5",
          type: "input",
          question:
            "Tien Giang is in the Mekong ________ region.",
          viHint: "vùng",
        },
        {
          id: "u10_p2_q6",
          type: "input",
          question:
            "Ecotourism helps protect the environment and support ________ communities.",
          viHint: "địa phương",
        },
        {
          id: "u10_p2_q7",
          type: "drag",
          blankText:
            "The 3Rs programme stands for reduce, reuse, and ________.",
          options: ["recycle", "repair", "replace", "renew"],
        },
        {
          id: "u10_p2_q8",
          type: "drag",
          blankText:
            "Jack travelled to the Amazon rainforest with his ________.",
          options: ["girlfriend", "family", "friends", "children"],
        },
        {
          id: "u10_p2_q9",
          type: "drag",
          blankText:
            "Amy went on a safari in ________.",
          options: ["Kenya", "India", "Australia", "Brazil"],
        },
        {
          id: "u10_p2_q10",
          type: "drag",
          blankText:
            "Ecotourism helps educate children about environmental ________.",
          options: ["protection", "pollution", "tourism", "development"],
        },
      ],

      answers: {
        u10_p2_q1: "two",
        u10_p2_q2: "craft",
        u10_p2_q3: "Binh",
        u10_p2_q4: "porcupines",
        u10_p2_q5: "Delta",
        u10_p2_q6: "local",
        u10_p2_q7: "recycle",
        u10_p2_q8: "girlfriend",
        u10_p2_q9: "Kenya",
        u10_p2_q10: "protection",
      },
    },
  ],
};

export default en10_u10_listen1;

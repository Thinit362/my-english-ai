// content/practice/listening/en10.u2.listen1.ts
import type { ListeningLesson } from "./types";

const en10_u2_listen1: ListeningLesson = {
  id: "en10.u2.listen1",
  unit: 2,
  skill: "listening",
  topicVi: "Bảo vệ môi trường – Nói không với ống hút nhựa",
  titleEn: "Say No to Plastic Straws",
  youtubeId: "jDuG_IIt2bM",
  descriptionEn:
    "Listen to a young environmental activist talking about why we should stop using plastic straws.",
  descriptionVi:
    "Nghe một nhà hoạt động môi trường trẻ nói về lý do vì sao chúng ta nên ngừng sử dụng ống hút nhựa.",

  exercises: [
    // ================= PAGE 1: Multiple Choice =================
    {
      id: "page1",
      title: "Listening – Part 1",
      instructionEn:
        "Listen to the talk and choose the best answer (A, B, C or D).",
      instructionVi:
        "Nghe bài nói và chọn đáp án đúng (A, B, C hoặc D).",

      questions: [
        {
          id: "u2_p1_q1",
          type: "mcq",
          question:
            "What is the main purpose of Molly Steer’s talk?",
          options: [
            "A. To introduce a new environmental project",
            "B. To explain how plastic straws are made",
            "C. To persuade people to stop using plastic straws",
            "D. To describe life in the ocean",
          ],
        },
        {
          id: "u2_p1_q2",
          type: "mcq",
          question:
            "Why are plastic straws dangerous to ocean animals?",
          options: [
            "A. Animals get trapped in them",
            "B. Animals mistake them for food",
            "C. They pollute drinking water",
            "D. They make the ocean warmer",
          ],
        },
        {
          id: "u2_p1_q3",
          type: "mcq",
          question:
            "According to the speaker, most plastic straws are ________.",
          options: [
            "A. expensive",
            "B. recyclable",
            "C. unnecessary",
            "D. reusable",
          ],
        },
        {
          id: "u2_p1_q4",
          type: "mcq",
          question:
            "How long do people usually use a plastic straw?",
          options: [
            "A. For a few seconds",
            "B. For a few minutes",
            "C. For several hours",
            "D. For a whole day",
          ],
        },
        {
          id: "u2_p1_q5",
          type: "mcq",
          question:
            "What surprising fact does Molly mention about plastic straws?",
          options: [
            "A. They can be reused many times",
            "B. They are made from recycled plastic",
            "C. The first plastic straw ever used still exists",
            "D. They dissolve quickly in water",
          ],
        },
        {
          id: "u2_p1_q6",
          type: "mcq",
          question:
            "What campaign did Molly start?",
          options: [
            "A. Stop Plastic Now",
            "B. Straw No More",
            "C. Plastic-Free Ocean",
            "D. Save the Turtles",
          ],
        },
        {
          id: "u2_p1_q7",
          type: "mcq",
          question:
            "What is Molly’s message about living without straws?",
          options: [
            "A. It is difficult and inconvenient",
            "B. It requires special equipment",
            "C. It is simple if you decide to stop",
            "D. Only adults can do it",
          ],
        },
        {
          id: "u2_p1_q8",
          type: "mcq",
          question:
            "Who has Molly convinced to stop using plastic straws?",
          options: [
            "A. Only schools",
            "B. Only restaurants",
            "C. Schools and many businesses",
            "D. Only cafés and bars",
          ],
        },
        {
          id: "u2_p1_q9",
          type: "mcq",
          question:
            "What happens to many plastic straws if people keep using them?",
          options: [
            "A. They are recycled",
            "B. They end up in landfill or the ocean",
            "C. They disappear naturally",
            "D. They are reused by animals",
          ],
        },
        {
          id: "u2_p1_q10",
          type: "mcq",
          question:
            "What does Molly hope to achieve in the future?",
          options: [
            "A. To remove plastic straws from Australia and the world",
            "B. To create more recycling factories",
            "C. To invent new plastic products",
            "D. To clean all oceans herself",
          ],
        },
      ],

      answers: {
        u2_p1_q1: "C. To persuade people to stop using plastic straws",
        u2_p1_q2: "B. Animals mistake them for food",
        u2_p1_q3: "C. unnecessary",
        u2_p1_q4: "B. For a few minutes",
        u2_p1_q5: "C. The first plastic straw ever used still exists",
        u2_p1_q6: "B. Straw No More",
        u2_p1_q7: "C. It is simple if you decide to stop",
        u2_p1_q8: "C. Schools and many businesses",
        u2_p1_q9: "B. They end up in landfill or the ocean",
        u2_p1_q10: "A. To remove plastic straws from Australia and the world",
      },
    },

    // ================= PAGE 2: Input + Drag =================
    {
      id: "page2",
      title: "Listening – Part 2",
      instructionEn:
        "Listen again and complete the sentences. For questions 7–10, drag the correct word into each blank.",
      instructionVi:
        "Nghe lại và hoàn thành câu. Với câu 7–10, kéo từ thích hợp vào chỗ trống.",

      questions: [
        {
          id: "u2_p2_q1",
          type: "input",
          question:
            "Plastic straws cause serious problems for the ________ in the ocean.",
          viHint: "môi trường",
        },
        {
          id: "u2_p2_q2",
          type: "input",
          question:
            "Many animals mistake plastic straws for ________.",
          viHint: "thức ăn",
        },
        {
          id: "u2_p2_q3",
          type: "input",
          question:
            "Most plastic straws are used for only a few ________.",
          viHint: "đơn vị thời gian rất ngắn",
        },
        {
          id: "u2_p2_q4",
          type: "input",
          question:
            "Molly started campaigning to end ________ plastic straws.",
          viHint: "loại ống hút chỉ dùng một lần",
        },
        {
          id: "u2_p2_q5",
          type: "input",
          question:
            "More than 100 ________ have joined Molly’s campaign.",
          viHint: "trường học",
        },
        {
          id: "u2_p2_q6",
          type: "input",
          question:
            "Millions of plastic straws will not end up in the ocean or ________.",
          viHint: "bãi rác",
        },
        {
          id: "u2_p2_q7",
          type: "drag",
          blankText:
            "Molly wants to protect the environment and ________ from plastic pollution.",
          options: ["animals", "people", "cities", "factories"],
        },
        {
          id: "u2_p2_q8",
          type: "drag",
          blankText:
            "Living without plastic straws is really ________.",
          options: ["simple", "expensive", "dangerous", "impossible"],
        },
        {
          id: "u2_p2_q9",
          type: "drag",
          blankText:
            "People only need to make the ________ to stop using straws.",
          options: ["decision", "machine", "rule", "plan"],
        },
        {
          id: "u2_p2_q10",
          type: "drag",
          blankText:
            "Molly hopes plastic straws will one day disappear from the ________.",
          options: ["world", "schools", "shops", "homes"],
        },
      ],

      answers: {
        u2_p2_q1: "environment",
        u2_p2_q2: "food",
        u2_p2_q3: "minutes",
        u2_p2_q4: "single-use",
        u2_p2_q5: "schools",
        u2_p2_q6: "landfill",
        u2_p2_q7: "animals",
        u2_p2_q8: "simple",
        u2_p2_q9: "decision",
        u2_p2_q10: "world",
      },
    },
  ],
};

export default en10_u2_listen1;

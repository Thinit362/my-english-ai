// content/practice/listening/en10.u1.listen1.ts
import type { ListeningLesson } from "./types";

const en10_u1_listen1: ListeningLesson = {
  id: "en10.u1.listen1",
  unit: 1,
  skill: "listening",
  topicVi: "Chia sẻ việc nhà trong gia đình",
  titleEn: "Sharing Household Chores",
  youtubeId: "EvKffOwukoc",
  descriptionEn:
    "Listen to a family talking about how they share household chores.",
  descriptionVi:
    "Nghe một gia đình nói chuyện về cách họ chia sẻ việc nhà.",

  exercises: [
    // ========= PAGE 1: Multiple Choice (10 câu) =========
    {
      id: "page1",
      title: "Listening – Part 1",
      instructionEn:
        "Listen to the recording and choose the best answer (A, B, C or D) for each question.",
      instructionVi:
        "Nghe và chọn đáp án đúng (A, B, C hoặc D) cho mỗi câu hỏi.",
      questions: [
        {
          id: "u1_p1_q1",
          type: "mcq",
          question:
            "What is the main topic of the family’s discussion?",
          options: [
            "A. How to save money",
            "B. Sharing household chores",
            "C. Planning a holiday",
            "D. Helping children with homework",
          ],
        },
        {
          id: "u1_p1_q2",
          type: "mcq",
          question:
            "Why are the parents worried at the beginning of the recording?",
          options: [
            "A. The house is always messy.",
            "B. Nobody wants to cook.",
            "C. They argue about who does which chores.",
            "D. The children watch too much TV.",
          ],
        },
        {
          id: "u1_p1_q3",
          type: "mcq",
          question:
            "Who first suggests that everyone in the family should share the chores?",
          options: [
            "A. The mother",
            "B. The father",
            "C. The daughter",
            "D. The son",
          ],
        },
        {
          id: "u1_p1_q4",
          type: "mcq",
          question:
            "According to the father, doing chores together can help the family ________.",
          options: [
            "A. save more money",
            "B. have more free time",
            "C. become closer and happier",
            "D. work faster",
          ],
        },
        {
          id: "u1_p1_q5",
          type: "mcq",
          question:
            "What chore does the mother say she is most tired of doing alone?",
          options: [
            "A. Washing the dishes",
            "B. Cooking dinner",
            "C. Shopping for food",
            "D. Doing the laundry",
          ],
        },
        {
          id: "u1_p1_q6",
          type: "mcq",
          question:
            "What does the daughter agree to help with?",
          options: [
            "A. Cleaning the bathroom",
            "B. Washing the dishes after dinner",
            "C. Cooking breakfast every morning",
            "D. Ironing the clothes",
          ],
        },
        {
          id: "u1_p1_q7",
          type: "mcq",
          question:
            "What chores does the son mention he already does?",
          options: [
            "A. Feeding the pets and taking out the rubbish",
            "B. Vacuuming the living room and cleaning windows",
            "C. Making his bed and cooking lunch",
            "D. Watering the plants and washing the car",
          ],
        },
        {
          id: "u1_p1_q8",
          type: "mcq",
          question:
            "When do they decide is the best time to do most of the chores together?",
          options: [
            "A. Early in the morning",
            "B. In the afternoon after school",
            "C. In the evening after dinner",
            "D. On Sunday morning only",
          ],
        },
        {
          id: "u1_p1_q9",
          type: "mcq",
          question:
            "What is one reason the mother gives for children doing chores?",
          options: [
            "A. They can earn more pocket money.",
            "B. They will become more responsible.",
            "C. They will have more time to play.",
            "D. They will sleep earlier.",
          ],
        },
        {
          id: "u1_p1_q10",
          type: "mcq",
          question:
            "What do they finally decide to make at the end of the discussion?",
          options: [
            "A. A shopping list",
            "B. A family timetable",
            "C. A weekly chore schedule",
            "D. A list of house rules",
          ],
        },
      ],
      answers: {
        u1_p1_q1: "B. Sharing household chores",
        u1_p1_q2: "C. They argue about who does which chores.",
        u1_p1_q3: "B. The father",
        u1_p1_q4: "C. become closer and happier",
        u1_p1_q5: "D. Doing the laundry",
        u1_p1_q6: "B. Washing the dishes after dinner",
        u1_p1_q7: "A. Feeding the pets and taking out the rubbish",
        u1_p1_q8: "C. In the evening after dinner",
        u1_p1_q9: "B. They will become more responsible.",
        u1_p1_q10: "C. A weekly chore schedule",
      },
    },

    // ========= PAGE 2: Input + Drag (10 câu) =========
    {
      id: "page2",
      title: "Listening – Part 2",
      instructionEn:
        "Listen again. Complete the sentences with ONE word or a short phrase. For questions 7–10, drag the correct word into each blank.",
      instructionVi:
        "Nghe lại. Hoàn thành câu với MỘT từ hoặc cụm từ ngắn. Với câu 7–10, kéo từ đúng vào chỗ trống.",
      questions: [
        // 1–6: INPUT
        {
          id: "u1_p2_q1",
          type: "input",
          question:
            "The parents want to make housework more ________ between all family members.",
          viHint: "công bằng / bình đẳng hơn giữa các thành viên",
        },
        {
          id: "u1_p2_q2",
          type: "input",
          question:
            "The mother says she is not a ________ and everyone should help.",
          viHint: "từ dùng cho người giúp việc trong nhà",
        },
        {
          id: "u1_p2_q3",
          type: "input",
          question:
            "The father believes that doing chores together can reduce family ________.",
          viHint: "giảm bớt xung đột trong gia đình",
        },
        {
          id: "u1_p2_q4",
          type: "input",
          question:
            "The daughter promises to clear the table and ________ the dishes.",
          viHint: "làm gì với chén bát sau bữa ăn",
        },
        {
          id: "u1_p2_q5",
          type: "input",
          question:
            "The son says he can take out the ________ every evening.",
          viHint: "rác",
        },
        {
          id: "u1_p2_q6",
          type: "input",
          question:
            "At the end, they all agree that sharing chores makes the family more ________.",
          viHint: "gắn bó / hạnh phúc hơn",
        },

        // 7–10: DRAG & DROP (word bank)
        {
          id: "u1_p2_q7",
          type: "drag",
          blankText:
            "On weekdays, the family will do most of the chores after ________.",
          viHint: "sau bữa tối",
          options: ["dinner", "weekends", "Saturday", "school"],
        },
        {
          id: "u1_p2_q8",
          type: "drag",
          blankText:
            "The father usually helps with ________ the floor in the living room.",
          viHint: "quét / lau sàn",
          options: ["sweeping", "shopping", "washing", "ironing"],
        },
        {
          id: "u1_p2_q9",
          type: "drag",
          blankText:
            "The daughter will be responsible for ________ the plants in the garden.",
          viHint: "tưới cây",
          options: ["watering", "feeding", "vacuuming", "dusting"],
        },
        {
          id: "u1_p2_q10",
          type: "drag",
          blankText:
            "The son agrees to ________ his own room once a week.",
          viHint: "dọn / sắp xếp phòng",
          options: ["tidy", "cook", "decorate", "paint"],
        },
      ],
      answers: {
        u1_p2_q1: "fair",
        u1_p2_q2: "servant",
        u1_p2_q3: "conflicts",
        u1_p2_q4: "wash",
        u1_p2_q5: "rubbish",
        u1_p2_q6: "happy",
        u1_p2_q7: "dinner",
        u1_p2_q8: "sweeping",
        u1_p2_q9: "watering",
        u1_p2_q10: "tidy",
      },
      explanations: {
        u1_p2_q1:
          "Ý chính của bài nghe là chia sẻ việc nhà cho công bằng (fair) giữa các thành viên.",
        u1_p2_q2:
          "Người mẹ nhấn mạnh bà không phải là 'servant' – người giúp việc – nên mọi người phải giúp.",
        u1_p2_q3:
          "Làm việc nhà cùng nhau giúp giảm 'conflicts' – xung đột trong gia đình.",
        u1_p2_q4:
          "Clear the table and wash the dishes: dọn bàn và rửa bát đĩa sau bữa ăn.",
        u1_p2_q5:
          "Take out the rubbish = đổ rác / mang rác ra ngoài.",
        u1_p2_q6:
          "Chia sẻ việc nhà khiến gia đình gắn bó và 'happy' hơn.",
        u1_p2_q7:
          "Most chores are done after dinner – sau bữa tối.",
        u1_p2_q8:
          "Help with sweeping the floor – giúp quét sàn phòng khách.",
        u1_p2_q9:
          "Be responsible for watering the plants – tưới cây trong vườn.",
        u1_p2_q10:
          "Tidy his own room – tự dọn phòng của mình mỗi tuần một lần.",
      },
    },
  ],
};

export default en10_u1_listen1;

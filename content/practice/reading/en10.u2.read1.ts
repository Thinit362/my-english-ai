import type { ReadingLesson } from "./types";

const en10_u2_read1: ReadingLesson = {
  id: "en10.u2.read1",
  unit: 2,
  skill: "reading",
  topicVi: "Sống xanh",
  titleEn: "Green living",
  passage: [
    "Green living is an easy way to directly reduce your carbon footprint and overall global emissions. By implementing simple habits like reducing your use of plastic or electricity consumption, you immediately make a difference in pollution – even if you can’t see it.",
    "Green living can also help reduce your energy costs. For instance, when you opt for solar-powered energy instead of electricity – it offsets both the use of your electricity, and your bills at the same time!",
    "Green living will indirectly improve your diet and overall health, as it will increase your consumption of fruits and vegetables. The vitamins and nutrients in fruits and vegetables allow our bodies to maintain our overall health and vital functioning. In a world where fast food has become the norm, most do not consume the amount of fruits and vegetables that they should – and green living can help to encourage better eating habits while also saving the planet.",
    "Green living can create a domino effect. If one person sees how well you’re doing thanks to green living, then they will be inspired to do the same. The fight against climate change is a collective battle, and if we can slowly create change and encourage more sustainable habits – we can strive for a colossal impact and drastically reduce the negative effects of global warming.",
    "Overall, implementing green living is one of the best ways to promote environmental conservation."
  ],
  translation: [
    "Lối sống xanh là một cách dễ dàng để trực tiếp giảm dấu chân carbon và lượng khí thải toàn cầu của bạn. Bằng cách thực hiện những thói quen đơn giản như giảm sử dụng nhựa hoặc lượng điện tiêu thụ, bạn lập tức tạo ra khác biệt đối với ô nhiễm – dù có thể bạn không nhìn thấy.",
    "Sống xanh cũng có thể giúp giảm chi phí năng lượng. Chẳng hạn, khi bạn chọn sử dụng năng lượng mặt trời thay cho điện thông thường, bạn vừa giảm được lượng điện phải dùng, vừa giảm tiền hoá đơn cùng lúc.",
    "Sống xanh sẽ gián tiếp cải thiện chế độ ăn và sức khoẻ tổng thể của bạn, vì nó làm tăng lượng trái cây và rau củ bạn tiêu thụ. Các vitamin và dưỡng chất trong trái cây và rau củ giúp cơ thể duy trì sức khoẻ và các chức năng sống quan trọng. Trong một thế giới mà thức ăn nhanh trở thành điều bình thường, hầu hết mọi người không ăn đủ trái cây và rau – và sống xanh có thể khuyến khích thói quen ăn uống lành mạnh hơn đồng thời vẫn bảo vệ hành tinh.",
    "Sống xanh có thể tạo ra hiệu ứng domino. Nếu một người thấy bạn sống xanh hiệu quả như thế nào, họ sẽ được truyền cảm hứng để làm theo. Cuộc chiến chống biến đổi khí hậu là một trận chiến tập thể, và nếu chúng ta dần dần tạo ra thay đổi và khuyến khích những thói quen bền vững hơn, chúng ta có thể hướng tới một tác động to lớn và giảm mạnh những ảnh hưởng tiêu cực của hiện tượng nóng lên toàn cầu.",
    "Tóm lại, thực hành lối sống xanh là một trong những cách tốt nhất để thúc đẩy việc bảo vệ môi trường."
  ],
  exercises: [
    // ===== PAGE 1: Vocabulary – điền từ, không quá 3 từ =====
    {
      id: "page1",
      title: "Vocabulary from the text",
      instructionEn:
        "Choose no more than THREE WORDS from the reading text that have the same meaning as the given definition.",
      instructionVi:
        "Chọn không quá 3 từ trong bài đọc có nghĩa tương đương với định nghĩa đưa ra, viết thường, không viết in hoa.",
      questions: [
        {
          id: "q1",
          type: "input",
          question: "the total amount of greenhouse gases you produce",
          viHint: "tổng lượng khí nhà kính mà bạn tạo ra"
        },
        {
          id: "q2",
          type: "input",
          question: "small actions or behaviour that you do regularly",
          viHint: "những hành động/thói quen nhỏ bạn làm thường xuyên"
        },
        {
          id: "q3",
          type: "input",
          question:
            "electricity that is produced from the sun’s energy",
          viHint: "nguồn điện được tạo ra từ năng lượng mặt trời"
        },
        {
          id: "q4",
          type: "input",
          question:
            "food that is quick to prepare and often not very healthy",
          viHint: "thức ăn nhanh, thường không lành mạnh"
        },
        {
          id: "q5",
          type: "input",
          question:
            "very large or extremely big (used to describe impact)",
          viHint: "rất lớn, khổng lồ (mô tả mức độ tác động)"
        },
        {
          id: "q6",
          type: "input",
          question:
            "protecting nature and natural resources from damage",
          viHint: "bảo vệ thiên nhiên và tài nguyên khỏi bị tàn phá"
        }
      ],
      answers: {
        q1: "carbon footprint",
        q2: "simple habits",
        q3: "solar-powered energy",
        q4: "fast food",
        q5: "colossal impact",
        q6: "environmental conservation"
      },
      explanations: {
        q1: "Ngay câu đầu nói 'reduce your carbon footprint and overall global emissions'.",
        q2: "Đoạn 1: 'implementing simple habits like reducing your use of plastic...'.",
        q3: "Đoạn 2: 'opt for solar-powered energy instead of electricity'.",
        q4: "Đoạn 3: 'In a world where fast food has become the norm...'.",
        q5: "Đoạn 4: 'we can strive for a colossal impact'.",
        q6: "Đoạn cuối: 'promote environmental conservation'."
      }
    },
    // ===== PAGE 2: Reading comprehension – trắc nghiệm =====
    {
      id: "page2",
      title: "Reading comprehension",
      instructionEn: "Choose the best answer (A, B or C) for each question.",
      instructionVi: "Chọn đáp án đúng (A, B hoặc C) cho mỗi câu hỏi.",
      questions: [
        {
          id: "q7",
          type: "mcq",
          question: "What is the main purpose of green living according to the text?",
          options: [
            "A. To make people buy more fruits and vegetables.",
            "B. To reduce emissions and protect the environment.",
            "C. To replace all sources of electricity with solar power."
          ]
        },
        {
          id: "q8",
          type: "mcq",
          question:
            "Which of the following is mentioned as a DIRECT effect of green living?",
          options: [
            "A. Lower pollution levels.",
            "B. Better eating habits.",
            "C. People feeling more inspired."
          ]
        },
        {
          id: "q9",
          type: "mcq",
          question:
            "How can green living help your personal finances?",
          options: [
            "A. By making you spend less money on fast food.",
            "B. By reducing energy bills when using solar-powered energy.",
            "C. By encouraging you to buy more healthy food."
          ]
        },
        {
          id: "q10",
          type: "mcq",
          question:
            "What problem with modern diets is mentioned in the text?",
          options: [
            "A. People eat too much meat and not enough rice.",
            "B. People are allergic to many kinds of vegetables.",
            "C. People do not eat enough fruits and vegetables."
          ]
        },
        {
          id: "q11",
          type: "mcq",
          question:
            "What does the 'domino effect' of green living refer to?",
          options: [
            "A. One person’s green lifestyle can inspire others to follow.",
            "B. People may feel pressured and stop living green.",
            "C. Climate change will automatically disappear."
          ]
        },
        {
          id: "q12",
          type: "mcq",
          question:
            "Which statement best summarizes the writer’s opinion about green living?",
          options: [
            "A. It is difficult and only governments can do it.",
            "B. It is one of the best ways to support environmental conservation.",
            "C. It is mainly about changing technology, not habits."
          ]
        }
      ],
      answers: {
        q7: "B",
        q8: "A",
        q9: "B",
        q10: "C",
        q11: "A",
        q12: "B"
      },
      explanations: {
        q7: "Cả bài nói về việc giảm khí thải, bảo vệ hành tinh và môi trường → B.",
        q8: "Đoạn 1: nhấn mạnh giảm carbon footprint và ô nhiễm ngay lập tức.",
        q9: "Đoạn 2: dùng năng lượng mặt trời 'offsets both the use of your electricity, and your bills'.",
        q10: "Đoạn 3: 'most do not consume the amount of fruits and vegetables that they should'.",
        q11: "Đoạn 4: nếu một người sống xanh hiệu quả, người khác sẽ 'be inspired to do the same'.",
        q12: "Đoạn cuối: 'implementing green living is one of the best ways to promote environmental conservation'."
      }
    }
  ]
};

export default en10_u2_read1;

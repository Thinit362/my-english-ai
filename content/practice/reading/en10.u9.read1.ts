import type { ReadingLesson } from "./types";

const en10_u9_read1: ReadingLesson = {
  id: "en10.u9.read1",
  unit: 9,
  skill: "reading",
  topicVi: "Nguyên nhân gây nóng lên toàn cầu",
  titleEn: "Causes of global warming",

  passage: [
    "While some are arguing that global warming is a completely natural process and that there's nothing to worry about, most scientists agree that human actions are a major contributing factor.",
    "With each passing year, the Earth's average surface temperature is increasing. This is mainly due to the release of CO2 and other greenhouse gases caused by humans. The greatest amount of greenhouse gas is produced by the burning of fossil fuels such as coal, oil and gas and human daily activities, including operating a motorbike that uses petroleum, cutting down and burning trees, and manufacturing everything we need.",
    "The impacts of global warming are foreseeable. Global warming will cause polar ice melting. When sea levels rise, some animals and plants will lose their habitats and be killed. We will lose certain precious sources of food. In other words, we will be seriously affected if nothing's done to stop global warming. Global warming will also force people in coastal areas to lose their homes. Not worried? Even if you live thousands of kilometers inland, you may still suffer from floods, land erosion, excessive snow or desertification!",
    "While others are arguing about whether humans are the only ones causing global warming, we should take action! Turn off electrical devices you're not using, walk or use your bike if your journey is short, and save water when you take a bath or do the washing. We've all heard the advice given by scientists and environmental groups, but these above are simple things that you don't need to work for NASA or any environmental protection organisations to know what to do."
  ],

  translation: [
    "Trong khi một số người tranh luận rằng nóng lên toàn cầu hoàn toàn là một quá trình tự nhiên và không có gì phải lo lắng, thì hầu hết các nhà khoa học đều đồng ý rằng hành động của con người là một yếu tố góp phần chính.",
    "Theo từng năm trôi qua, nhiệt độ bề mặt trung bình của Trái đất đang tăng lên. Nguyên nhân chủ yếu là do việc con người thải CO2 và các khí nhà kính khác. Lượng khí nhà kính lớn nhất được tạo ra từ việc đốt các nhiên liệu hóa thạch như than đá, dầu mỏ và khí đốt, cũng như các hoạt động hằng ngày của con người, bao gồm đi xe máy sử dụng xăng dầu, chặt và đốt cây, và sản xuất mọi thứ chúng ta cần.",
    "Tác động của hiện tượng nóng lên toàn cầu là có thể dự đoán được. Nóng lên toàn cầu sẽ làm tan băng ở hai cực. Khi mực nước biển dâng lên, một số loài động vật và thực vật sẽ mất môi trường sống và chết đi. Chúng ta sẽ mất đi những nguồn thực phẩm quý giá. Nói cách khác, chúng ta sẽ bị ảnh hưởng nghiêm trọng nếu không làm gì để ngăn chặn hiện tượng này. Nóng lên toàn cầu cũng sẽ buộc những người sống ở vùng ven biển phải mất nhà cửa. Vẫn không lo sao? Ngay cả khi bạn sống cách xa biển hàng nghìn kilômét, bạn vẫn có thể hứng chịu lũ lụt, xói mòn đất, tuyết rơi dày đặc hoặc hoang mạc hóa!",
    "Trong khi người ta vẫn tranh cãi xem liệu con người có phải là nguyên nhân duy nhất gây nóng lên toàn cầu hay không, thì chúng ta nên hành động! Hãy tắt các thiết bị điện khi không sử dụng, đi bộ hoặc đi xe đạp nếu quãng đường ngắn, và tiết kiệm nước khi tắm hoặc giặt giũ. Tất cả chúng ta đều đã nghe những lời khuyên từ các nhà khoa học và các nhóm bảo vệ môi trường, nhưng những việc trên là những điều đơn giản mà bạn không cần phải làm ở NASA hay bất kỳ tổ chức bảo vệ môi trường nào mới biết."
  ],

  exercises: [
    /* =========================
       PAGE 1 – DRAG & DROP (5 câu)
       ========================= */
    {
      id: "page1",
      title: "Fill in the blanks (Drag & Drop)",
      instructionEn:
        "Drag the correct word from the box into each blank. There are 2 extra words you will NOT use.",
      instructionVi:
        "Kéo từ đúng vào chỗ trống. Có 2 từ gây nhiễu không sử dụng.",

      questions: [
        {
          id: "q1",
          type: "drag",
          blankText:
            "The Earth's temperature is mainly increasing because of the release of CO2 and other ______ caused by humans.",
          viHint: "các khí nhà kính",
          options: [
            "greenhouse gases", // đúng
            "fossil fuels",     // đúng (câu khác)
            "habitats",         // đúng (câu khác)
            "desertification",  // đúng (câu khác)
            "floods",           // đúng (câu khác)
            "erosion",          // nhiễu
            "organisations"     // nhiễu
          ]
        },
        {
          id: "q2",
          type: "drag",
          blankText:
            "The greatest amount of greenhouse gas is produced by the burning of ______ such as coal, oil and gas.",
          viHint: "nhiên liệu hóa thạch",
          options: [
            "greenhouse gases",
            "fossil fuels",
            "habitats",
            "desertification",
            "floods",
            "erosion",
            "organisations"
          ]
        },
        {
          id: "q3",
          type: "drag",
          blankText:
            "When sea levels rise, some animals and plants will lose their ______ and be killed.",
          viHint: "môi trường sống",
          options: [
            "greenhouse gases",
            "fossil fuels",
            "habitats",
            "desertification",
            "floods",
            "erosion",
            "organisations"
          ]
        },
        {
          id: "q4",
          type: "drag",
          blankText:
            "Even people living far away from the sea may suffer from ______, land erosion, excessive snow or desertification.",
          viHint: "lũ lụt",
          options: [
            "greenhouse gases",
            "fossil fuels",
            "habitats",
            "desertification",
            "floods",
            "erosion",
            "organisations"
          ]
        },
        {
          id: "q5",
          type: "drag",
          blankText:
            "Some inland areas may face excessive snow or ______ as a result of global warming.",
          viHint: "hiện tượng hoang mạc hóa",
          options: [
            "greenhouse gases",
            "fossil fuels",
            "habitats",
            "desertification",
            "floods",
            "erosion",
            "organisations"
          ]
        }
      ],

      answers: {
        q1: "greenhouse gases",
        q2: "fossil fuels",
        q3: "habitats",
        q4: "floods",
        q5: "desertification"
      },

      explanations: {
        q1: "Đoạn 2: 'the release of CO2 and other greenhouse gases caused by humans'.",
        q2: "Đoạn 2: 'burning of fossil fuels such as coal, oil and gas'.",
        q3: "Đoạn 3: 'some animals and plants will lose their habitats and be killed'.",
        q4: "Đoạn 3: 'you may still suffer from floods, land erosion, excessive snow or desertification'.",
        q5: "Cũng trong đoạn 3: 'excessive snow or desertification'."
      }
    },

    /* =========================
       PAGE 2 – MCQ (5 câu)
       ========================= */
    {
      id: "page2",
      title: "Reading comprehension",
      instructionEn: "Choose the best answer (A, B, or C).",
      instructionVi: "Chọn đáp án đúng (A, B hoặc C).",

      questions: [
        {
          id: "q6",
          type: "mcq",
          question:
            "What do most scientists agree about global warming?",
          options: [
            "A. It is completely natural and nothing to worry about.",
            "B. Human actions are a major contributing factor.",
            "C. It only affects animals, not humans."
          ]
        },
        {
          id: "q7",
          type: "mcq",
          question:
            "Which of the following is mentioned as a major source of greenhouse gases?",
          options: [
            "A. Using solar panels for electricity.",
            "B. Burning fossil fuels and daily human activities.",
            "C. Planting too many trees."
          ]
        },
        {
          id: "q8",
          type: "mcq",
          question:
            "Which consequence of global warming is NOT mentioned in the passage?",
          options: [
            "A. Some plants and animals will lose their habitats.",
            "B. People in coastal areas may lose their homes.",
            "C. People will immediately become healthier."
          ]
        },
        {
          id: "q9",
          type: "mcq",
          question:
            "What is the writer’s attitude towards actions against global warming?",
          options: [
            "A. Only scientists and big organisations can do anything.",
            "B. Everyone can take simple actions in daily life.",
            "C. It is too late to do anything now."
          ]
        },
        {
          id: "q10",
          type: "mcq",
          question:
            "What is the main purpose of the passage?",
          options: [
            "A. To deny that humans cause global warming.",
            "B. To explain causes, impacts of global warming and call for action.",
            "C. To describe life at NASA."
          ]
        }
      ],

      answers: {
        q6: "B",
        q7: "B",
        q8: "C",
        q9: "B",
        q10: "B"
      },

      explanations: {
        q6: "Đoạn 1: 'most scientists agree that human actions are a major contributing factor'.",
        q7: "Đoạn 2: đốt nhiên liệu hóa thạch và các hoạt động thường ngày của con người.",
        q8: "Đoạn 3 chỉ nói mất môi trường sống, mất nguồn thức ăn, mất nhà, lũ lụt… không nói con người trở nên khỏe mạnh hơn.",
        q9: "Đoạn 4: đưa hàng loạt hành động đơn giản ai cũng có thể làm (tắt điện, đi bộ, tiết kiệm nước…).",
        q10: "Toàn bài: trình bày tranh luận, nguyên nhân, hậu quả rồi kêu gọi hành động."
      }
    }
  ]
};

export default en10_u9_read1;

import type { ReadingLesson } from "./types";

const en10_u10_read1: ReadingLesson = {
  id: "en10.u10.read1",
  unit: 10,
  skill: "reading",
  topicVi: "Những lời khuyên dành cho khách du lịch sinh thái",
  titleEn: "Guidelines for ecotourists",

  passage: [
    "Ecotourism is an environmentally responsible form of travel to natural areas which aims to reduce the impact that tourism has on the natural environment, including the flora and fauna of the area. There are a number of guidelines provided for ecotourists when visiting fragile environments.",
    "Before taking a trip to any destination, it is recommended that eco-travellers educate themselves about the places they are visiting by reading guidebooks and travel articles. Tourists should also be aware of local history, culture and customs of the locals before arriving. One way to gain appreciation from local people and enrich the experience is to make the effort to learn enough of the language to be polite, for example: hello, please and thank you. When packing, it is not recommended for visitors to give sweets or cookies to local people in developing countries, instead give them clothes or pens.",
    "During the time staying at the place, it is important that ecotourists be aware of the local customs. Different cultural values including different concepts of time, personal space and communication are other things to keep in mind. For example, in America, using a firm handshake is considered appropriate to greet a stranger; however, in France it is common to kiss someone you greet on both cheeks. Ecotourists are highly recommended to use local transport, guides, hotels, restaurants or markets to benefit the local economy. They should also limit the waste discharged into the air or water by using bicycles instead of cars or motorbikes and not leaving litter or starting fires.",
    "When returning from the trip, visitors should support organizations or societies that follow eco-principles and share their experiences with others in order to increase awareness of environmental issues and the protection of precious species in the area."
  ],

  translation: [
    "Du lịch sinh thái là một hình thức du lịch có trách nhiệm với môi trường tới các khu vực tự nhiên, nhằm giảm bớt tác động mà du lịch gây ra đối với môi trường tự nhiên, bao gồm hệ thực vật và động vật của khu vực đó. Có nhiều hướng dẫn được đưa ra cho khách du lịch sinh thái khi tới thăm những môi trường dễ bị tổn thương.",
    "Trước khi đi tới bất kỳ điểm đến nào, khách du lịch sinh thái được khuyến nghị nên tìm hiểu về nơi mình sẽ đến bằng cách đọc sách hướng dẫn và các bài viết du lịch. Khách du lịch cũng nên biết về lịch sử, văn hoá và phong tục tập quán của người dân địa phương trước khi tới. Một cách để được người dân địa phương trân trọng và làm cho trải nghiệm thêm phong phú là cố gắng học đủ một số câu nói lịch sự bằng ngôn ngữ của họ, ví dụ: xin chào, làm ơn, cảm ơn. Khi chuẩn bị hành lý, không nên tặng kẹo hay bánh cho người dân ở các nước đang phát triển, thay vào đó nên tặng quần áo hoặc bút.",
    "Trong thời gian lưu trú, điều quan trọng là khách du lịch sinh thái phải chú ý tới phong tục địa phương. Những giá trị văn hoá khác nhau, bao gồm khái niệm khác nhau về thời gian, không gian cá nhân và cách giao tiếp là những điều cần ghi nhớ. Ví dụ, ở Mỹ, bắt tay thật chắc được xem là phù hợp khi chào một người lạ; tuy nhiên, ở Pháp, việc hôn lên hai má người được chào là rất phổ biến. Khách du lịch sinh thái được khuyến khích mạnh mẽ sử dụng các phương tiện vận chuyển, hướng dẫn viên, khách sạn, nhà hàng hay chợ địa phương để mang lại lợi ích cho nền kinh tế địa phương. Họ cũng nên hạn chế lượng rác thải ra không khí hoặc nguồn nước bằng cách đi xe đạp thay vì ô tô hay xe máy, và không vứt rác bừa bãi hay đốt lửa.",
    "Khi trở về sau chuyến đi, du khách nên ủng hộ các tổ chức hoặc hội nhóm tuân theo các nguyên tắc sinh thái và chia sẻ trải nghiệm của mình với người khác để nâng cao nhận thức về các vấn đề môi trường và việc bảo vệ những loài quý hiếm trong khu vực."
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
            "________ is a responsible form of travel that aims to reduce the impact of tourism on nature.",
          viHint: "du lịch sinh thái",
          options: [
            "Ecotourism",      // đúng
            "customs",         // đúng câu khác
            "local economy",   // đúng câu khác
            "litter",          // đúng câu khác
            "organizations",   // đúng câu khác
            "cookies",         // nhiễu
            "fires"            // nhiễu
          ]
        },
        {
          id: "q2",
          type: "drag",
          blankText:
            "Tourists should learn about local history, culture and ______ before arriving.",
          viHint: "phong tục tập quán",
          options: [
            "Ecotourism",
            "customs",
            "local economy",
            "litter",
            "organizations",
            "cookies",
            "fires"
          ]
        },
        {
          id: "q3",
          type: "drag",
          blankText:
            "Ecotourists are encouraged to use local services in order to benefit the ______.",
          viHint: "nền kinh tế địa phương",
          options: [
            "Ecotourism",
            "customs",
            "local economy",
            "litter",
            "organizations",
            "cookies",
            "fires"
          ]
        },
        {
          id: "q4",
          type: "drag",
          blankText:
            "They should not leave ______ or start fires when visiting natural areas.",
          viHint: "rác thải",
          options: [
            "Ecotourism",
            "customs",
            "local economy",
            "litter",
            "organizations",
            "cookies",
            "fires"
          ]
        },
        {
          id: "q5",
          type: "drag",
          blankText:
            "After the trip, visitors are advised to support ______ that follow eco-principles.",
          viHint: "các tổ chức / hội nhóm",
          options: [
            "Ecotourism",
            "customs",
            "local economy",
            "litter",
            "organizations",
            "cookies",
            "fires"
          ]
        }
      ],

      answers: {
        q1: "Ecotourism",
        q2: "customs",
        q3: "local economy",
        q4: "litter",
        q5: "organizations"
      },

      explanations: {
        q1: "Câu đầu đoạn 1 định nghĩa Ecotourism.",
        q2: "Đoạn 2: 'local history, culture and customs of the locals'.",
        q3: "Đoạn 3: 'to benefit the local economy'.",
        q4: "Đoạn 3: 'not leaving litter or starting fires'.",
        q5: "Đoạn 4: 'support organizations or societies that follow eco-principles'."
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
            "What is the main aim of ecotourism according to the passage?",
          options: [
            "A. To visit as many countries as possible.",
            "B. To reduce the negative impact of tourism on nature.",
            "C. To make travel cheaper for tourists."
          ]
        },
        {
          id: "q7",
          type: "mcq",
          question:
            "Which of the following is recommended BEFORE an eco-trip?",
          options: [
            "A. Learning about local history, culture and some basic phrases in the local language.",
            "B. Bringing a lot of sweets and cookies for local children.",
            "C. Avoiding reading any guidebooks to keep the trip surprising."
          ]
        },
        {
          id: "q8",
          type: "mcq",
          question:
            "Why are examples of greeting customs in America and France mentioned?",
          options: [
            "A. To show that ecotourists must greet everyone they meet.",
            "B. To illustrate that cultural values and ways of greeting differ between countries.",
            "C. To suggest that American customs are better than French customs."
          ]
        },
        {
          id: "q9",
          type: "mcq",
          question:
            "Which action is NOT recommended for ecotourists during their stay?",
          options: [
            "A. Using local transport and services.",
            "B. Leaving litter or starting fires in natural areas.",
            "C. Using bicycles instead of cars or motorbikes."
          ]
        },
        {
          id: "q10",
          type: "mcq",
          question:
            "What should visitors do AFTER returning from an eco-trip?",
          options: [
            "A. Keep their experiences secret.",
            "B. Only post photos on social media without any message.",
            "C. Support eco-friendly organizations and share experiences to raise awareness."
          ]
        }
      ],

      answers: {
        q6: "B",
        q7: "A",
        q8: "B",
        q9: "B",
        q10: "C"
      },

      explanations: {
        q6: "Đoạn 1: ecotourism aims to reduce the impact that tourism has on the natural environment.",
        q7: "Đoạn 2: nên đọc tài liệu, tìm hiểu lịch sử, văn hoá, phong tục và học vài câu lịch sự.",
        q8: "Đoạn 3: ví dụ Mỹ – Pháp để minh hoạ giá trị văn hoá và cách chào hỏi khác nhau.",
        q9: "Đoạn 3: 'not leaving litter or starting fires' – đây là việc bị phản đối.",
        q10: "Đoạn 4: nên ủng hộ các tổ chức theo nguyên tắc sinh thái và chia sẻ trải nghiệm để nâng cao nhận thức."
      }
    }
  ]
};

export default en10_u10_read1;

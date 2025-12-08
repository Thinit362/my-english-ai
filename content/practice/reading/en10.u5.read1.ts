import type { ReadingLesson } from "./types";

const en10_u5_read1: ReadingLesson = {
  id: "en10.u5.read1",
  unit: 5,
  skill: "reading",
  topicVi: "Sự ra đời của những chiếc gương",
  titleEn: "The birth of mirrors",
  passage: [
    "Nowadays, amid the storming development of high-tech devices such as smartphones or e-book readers, people seem to neglect the existence of certain inventions that date back thousands of years. One of those is the mirror.",
    "People grew a desire to see themselves as they saw their reflections in the surface of water. Around the 600s BC, the first mirrors were made from natural materials such as polished stones. After a while, people started to use bronze, gold and silver to make mirrors. These metals were heavy, so mirrors had very modest sizes. Ruling-class people, especially ladies, used them as a fashionable accessory. Hardly did they go out without a mirror. In the 1st century, the first glass mirrors were invented by the Romans and were made bigger to allow people to look at the whole body. However, not everyone cherished the mirror. Some people were irritated to find themselves ugly looking at the mirror, and there were rumors that what they saw in the mirror were reflections of sins and demons.",
    "Nowadays, despite technological advancement, mirrors still play important roles in various modern-day fields, such as surgery, transport, architecture and so on. In fact, mirrors are utilised in technology and have inspired the inventions of several devices such as cameras or satellites."
  ],
  translation: [
    "Ngày nay, giữa làn sóng phát triển mạnh mẽ của các thiết bị công nghệ cao như điện thoại thông minh hay máy đọc sách điện tử, con người dường như bỏ quên sự tồn tại của một số phát minh đã có từ hàng nghìn năm trước. Một trong số đó là chiếc gương.",
    "Con người nảy sinh mong muốn được nhìn thấy chính mình khi họ thấy hình phản chiếu của mình trên mặt nước. Vào khoảng những năm 600 trước Công nguyên, những chiếc gương đầu tiên được làm từ các vật liệu tự nhiên như đá được mài nhẵn. Một thời gian sau, người ta bắt đầu dùng đồng, vàng và bạc để làm gương. Những kim loại này khá nặng nên gương chỉ có kích cỡ khiêm tốn. Tầng lớp thống trị, đặc biệt là các quý bà, dùng gương như một món phụ kiện thời trang. Họ hầu như không ra khỏi nhà nếu thiếu chiếc gương bên mình. Vào thế kỷ thứ nhất, những chiếc gương thủy tinh đầu tiên được người La Mã phát minh và được làm lớn hơn để mọi người có thể soi được cả cơ thể. Tuy vậy, không phải ai cũng yêu thích gương. Một số người khó chịu khi thấy mình xấu xí trong gương, và đã xuất hiện những lời đồn rằng những gì họ nhìn thấy trong gương là sự phản chiếu của tội lỗi và quỷ dữ.",
    "Ngày nay, dù công nghệ đã phát triển, gương vẫn đóng vai trò quan trọng trong nhiều lĩnh vực hiện đại như phẫu thuật, giao thông, kiến trúc,… Thực tế, gương còn được ứng dụng trong công nghệ và truyền cảm hứng cho sự ra đời của nhiều thiết bị như máy ảnh hay vệ tinh."
  ],
  exercises: [
    // ========= PAGE 1: Vocabulary (5 câu) =========
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
          question:
            "very rapid growth or development of something",
          viHint: "sự phát triển rất nhanh của một thứ gì đó"
        },
        {
          id: "q2",
          type: "input",
          question:
            "modern electronic products such as smartphones or e-book readers",
          viHint: "các sản phẩm điện tử hiện đại như điện thoại thông minh, máy đọc sách"
        },
        {
          id: "q3",
          type: "input",
          question:
            "people who belong to the highest social group in a society",
          viHint: "những người thuộc tầng lớp xã hội cao nhất"
        },
        {
          id: "q4",
          type: "input",
          question:
            "small object that you wear or carry mainly because it is stylish",
          viHint: "món đồ nhỏ mang/đeo vì thời trang"
        },
        {
          id: "q5",
          type: "input",
          question:
            "progress in the use of modern machines and scientific knowledge",
          viHint: "sự tiến bộ trong việc sử dụng máy móc và khoa học hiện đại"
        }
      ],
      answers: {
        q1: "storming development",
        q2: "high-tech devices",
        q3: "ruling-class people",
        q4: "fashionable accessory",
        q5: "technological advancement"
      },
      explanations: {
        q1: "Đoạn 1: 'amid the storming development of high-tech devices...'.",
        q2: "Cũng ở đoạn 1: 'high-tech devices such as smartphones or e-book readers'.",
        q3: "Đoạn 2: 'Ruling-class people, especially ladies...'.",
        q4: "Đoạn 2: gương được dùng 'as a fashionable accessory'.",
        q5: "Đoạn 3: 'despite technological advancement, mirrors still play important roles...'."
      }
    },

    // ========= PAGE 2: Reading comprehension (5 câu) =========
    {
      id: "page2",
      title: "Reading comprehension",
      instructionEn: "Choose the best answer (A, B or C) for each question.",
      instructionVi: "Chọn đáp án đúng (A, B hoặc C) cho mỗi câu hỏi.",
      questions: [
        {
          id: "q6",
          type: "mcq",
          question:
            "What is the MAIN purpose of the text?",
          options: [
            "A. To explain how smartphones and e-book readers work.",
            "B. To describe the history and importance of mirrors.",
            "C. To compare mirrors made of different metals."
          ]
        },
        {
          id: "q7",
          type: "mcq",
          question:
            "Why were early metal mirrors usually small?",
          options: [
            "A. Because metals were expensive and heavy.",
            "B. Because people only wanted to see their faces.",
            "C. Because there was no glass at that time."
          ]
        },
        {
          id: "q8",
          type: "mcq",
          question:
            "How did some people feel when they looked at themselves in the mirror?",
          options: [
            "A. Proud and confident.",
            "B. Irritated and even afraid because of rumors.",
            "C. Bored because mirrors were very common."
          ]
        },
        {
          id: "q9",
          type: "mcq",
          question:
            "Which of the following is NOT mentioned as a modern use of mirrors?",
          options: [
            "A. Surgery.",
            "B. Farming.",
            "C. Transport."
          ]
        },
        {
          id: "q10",
          type: "mcq",
          question:
            "What can be inferred from the reading text?",
          options: [
            "A. Old inventions like mirrors can still be essential in modern technology.",
            "B. Mirrors are less important now because of cameras and satellites.",
            "C. Only rich people benefit from the use of mirrors nowadays."
          ]
        }
      ],
      answers: {
        q6: "B",
        q7: "A",
        q8: "B",
        q9: "B",
        q10: "A"
      },
      explanations: {
        q6: "Cả bài nói về sự ra đời, phát triển và vai trò của gương → B.",
        q7: "Đoạn 2: 'These metals were heavy, so mirrors had very modest sizes.'",
        q8: "Đoạn 2: một số người 'were irritated' và có tin đồn về 'sins and demons'.",
        q9: "Đoạn 3 chỉ nêu 'surgery, transport, architecture...'; không nhắc tới farming.",
        q10: "Đoạn 3: dù công nghệ phát triển, gương vẫn quan trọng và được dùng trong nhiều thiết bị hiện đại như máy ảnh, vệ tinh."
      }
    }
  ]
};

export default en10_u5_read1;

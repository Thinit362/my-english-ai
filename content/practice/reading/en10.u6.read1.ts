import type { ReadingLesson } from "./types";

const en10_u6_read1: ReadingLesson = {
  id: "en10.u6.read1",
  unit: 6,
  skill: "reading",
  topicVi: "Bình đẳng giới",
  titleEn: "A story about gender equality",
  passage: [
    "Sonita Alizadeh was born and grew up in Afghanistan until she was eight when the family fled to Iran because of war. Sonita remembers her childhood of hunger, aerial bombardment and Taliban fighters. In Iran, she couldn't get a formal education because of not having proper identification. She had to clean bathrooms and learnt the basics of how to read and write herself.",
    "Sonita watched music videos on TV to kill her free time and learnt the styles of Iranian rapper Yas and US rapper Eminem. She started to write songs about her life as a refugee, child worker and especially a female. Other songs are about her girl friends with broken spirits after arguing and begging their parents not to sell them. Her songs have empowered her friends to protest against forced marriages which account for 60-80 per cent of Afghan marriages.",
    "Things were all right until they weren't. Sonita's mother asked her to come back to Afghanistan as she needed 7,000 dowry to prepare for Sonita's brother's wedding. Her mother thought she could sell Sonita for a man with 9,000 dowry. Devastated by her mother's wish, Sonita fought by making a music video \"Daughters for Sale\" with the help of an Iranian filmmaker. Thanks to the video, the Strongheart Group contacted her and gave her a scholarship in the US where she now can go to school and remain single."
  ],
  translation: [
    "Sonita Alizadeh sinh ra và lớn lên ở Afghanistan cho đến khi tám tuổi thì gia đình chạy trốn sang Iran vì chiến tranh. Sonita nhớ tuổi thơ với đói khát, những trận ném bom trên không và chiến binh Taliban. Ở Iran, cô không thể nhận được sự giáo dục chính quy vì không có giấy tờ tùy thân phù hợp. Cô phải dọn dẹp nhà vệ sinh và tự học đọc viết.",
    "Sonita xem video âm nhạc trên TV để giết thời gian rảnh và học theo phong cách của rapper người Iran Yas và rapper Mỹ Eminem. Cô bắt đầu viết nhạc về cuộc sống của mình như một người tị nạn, lao động trẻ em và đặc biệt là thân phận phụ nữ. Những bài hát khác nói về các bạn gái của cô – những người có tinh thần suy sụp sau khi cãi vã và van xin cha mẹ đừng bán họ. Âm nhạc của cô đã tiếp thêm sức mạnh cho họ phản đối các cuộc hôn nhân ép buộc – chiếm 60–80% hôn nhân ở Afghanistan.",
    "Mọi chuyện đều ổn cho đến khi không còn ổn nữa. Mẹ Sonita yêu cầu cô trở về Afghanistan vì bà cần 7.000 tiền hồi môn để chuẩn bị cho đám cưới của anh trai cô. Mẹ cô nghĩ bà có thể bán Sonita cho một người đàn ông với 9.000 hồi môn. Sụp đổ trước mong muốn đó, Sonita phản kháng bằng cách làm video âm nhạc \"Daughters for Sale\" với sự giúp đỡ của một nhà làm phim Iran. Nhờ video này, Tổ chức Strongheart đã liên hệ và trao cho cô một học bổng tại Mỹ, nơi cô có thể đi học và sống độc thân."
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

      // Lưu ý: mỗi câu có cùng ngân hàng từ, gồm 5 từ đúng + 2 từ nhiễu
      questions: [
        {
          id: "q1",
          type: "drag",
          blankText:
            "In Iran, Sonita couldn't get a formal education because she didn't have proper ______.",
          viHint: "giấy tờ tùy thân phù hợp",
          options: [
            "identification", // đúng
            "refugee",        // đúng (câu khác)
            "protest",        // đúng (câu khác)
            "dowry",          // đúng (câu khác)
            "filmmaker",      // đúng (câu khác)
            "bombardment",    // nhiễu
            "scholarship"     // nhiễu
          ]
        },
        {
          id: "q2",
          type: "drag",
          blankText:
            "Sonita wrote songs about her life as a ______, a child worker and especially a female.",
          viHint: "người tị nạn",
          options: [
            "identification",
            "refugee",
            "protest",
            "dowry",
            "filmmaker",
            "bombardment",
            "scholarship"
          ]
        },
        {
          id: "q3",
          type: "drag",
          blankText:
            "Her songs empowered her friends to ______ against forced marriages.",
          viHint: "phản đối hôn nhân ép buộc",
          options: [
            "identification",
            "refugee",
            "protest",
            "dowry",
            "filmmaker",
            "bombardment",
            "scholarship"
          ]
        },
        {
          id: "q4",
          type: "drag",
          blankText:
            "Her mother wanted 7,000 ______ to prepare for her son's wedding.",
          viHint: "tiền hồi môn",
          options: [
            "identification",
            "refugee",
            "protest",
            "dowry",
            "filmmaker",
            "bombardment",
            "scholarship"
          ]
        },
        {
          id: "q5",
          type: "drag",
          blankText:
            "An Iranian ______ helped her make the music video \"Daughters for Sale\".",
          viHint: "nhà làm phim",
          options: [
            "identification",
            "refugee",
            "protest",
            "dowry",
            "filmmaker",
            "bombardment",
            "scholarship"
          ]
        }
      ],

      answers: {
        q1: "identification",
        q2: "refugee",
        q3: "protest",
        q4: "dowry",
        q5: "filmmaker"
      },

      explanations: {
        q1: "Đoạn 1: 'because of not having proper identification'.",
        q2: "Đoạn 2: 'her life as a refugee, child worker and especially a female'.",
        q3: "Đoạn 2: 'empowered her friends to protest against forced marriages'.",
        q4: "Đoạn 3: mẹ cô cần '7,000 dowry' cho đám cưới anh trai.",
        q5: "Đoạn 3: video được làm 'with the help of an Iranian filmmaker'."
      }
    },

    /* =========================
       PAGE 2 – READING COMPREHENSION (5 câu MCQ)
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
          question: "Why couldn’t Sonita attend formal school in Iran?",
          viHint: "Lý do cô không được học chính quy ở Iran",
          options: [
            "A. She had to work full-time.",
            "B. She lacked proper identification.",
            "C. Education for girls was banned."
          ]
        },
        {
          id: "q7",
          type: "mcq",
          question:
            "What do Sonita’s songs mainly focus on?",
          options: [
            "A. Her goal to become a famous filmmaker.",
            "B. Her life as a refugee and the issue of forced marriages.",
            "C. The culture of Iran and Afghanistan."
          ]
        },
        {
          id: "q8",
          type: "mcq",
          question:
            "Why did Sonita’s mother want her to return to Afghanistan?",
          options: [
            "A. To continue her education.",
            "B. To help with housework.",
            "C. To be sold for dowry money."
          ]
        },
        {
          id: "q9",
          type: "mcq",
          question:
            "What was the effect of the music video \"Daughters for Sale\"?",
          options: [
            "A. It brought Sonita a scholarship in the US.",
            "B. It made her mother cancel the wedding.",
            "C. It forced the government to change the law."
          ]
        },
        {
          id: "q10",
          type: "mcq",
          question:
            "What can be inferred about Sonita?",
          options: [
            "A. She is brave and uses music to fight injustice.",
            "B. She avoids talking about difficult topics.",
            "C. She prefers to stay silent about her life."
          ]
        }
      ],

      answers: {
        q6: "B",
        q7: "B",
        q8: "C",
        q9: "A",
        q10: "A"
      },

      explanations: {
        q6: "Đoạn 1: cô không có 'proper identification' nên không được học chính quy.",
        q7: "Đoạn 2: nhạc của cô nói về đời sống tị nạn, lao động trẻ em, phụ nữ và phản đối hôn nhân ép buộc.",
        q8: "Đoạn 3: mẹ cô muốn bán Sonita để lấy 9,000 dowry.",
        q9: "Đoạn 3: nhờ video, Strongheart Group cấp học bổng cho cô ở Mỹ.",
        q10: "Cả bài cho thấy cô dũng cảm và dùng âm nhạc đấu tranh cho nữ quyền và bình đẳng giới."
      }
    }
  ]
};

export default en10_u6_read1;

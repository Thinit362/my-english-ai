import { UnitPronunciation } from "../english10.pronunciation";

const u8: UnitPronunciation = {
  unit: 8,
  pages: [
    {
      title: "Sentence Stress (Trọng âm câu)",
      viExplain: `Trọng âm câu là cách chúng ta nhấn mạnh các từ quan trọng trong câu. 
Những từ này được đọc mạnh hơn, to hơn và dài hơn các từ còn lại.

• Content words (từ mang nội dung) thường được đọc nhấn mạnh.  
• Function words (từ chức năng) thường không được nhấn mạnh vì không mang trọng tâm thông tin.`,
      
      tips: [
        "Content words (danh từ, động từ, tính từ, trạng từ...) luôn được nhấn mạnh.",
        "Function words (mạo từ, giới từ, đại từ...) thường đọc nhẹ và lướt nhanh.",
        "Trong luyện nói, hãy xác định từ quan trọng để nhấn mạnh giúp câu rõ nghĩa hơn.",
        "Không phải mọi từ đều được nhấn: chỉ nhấn các từ mang nội dung chính.",
      ],

      items: [
        // ============================================
        // 1. Definition
        // ============================================
        {
          display: "We intend to buy a new house.",
          playText: "We intend to buy a new house.",
          ipa: "",
          vi: "Chúng tôi có ý định mua một căn nhà mới.",
          type: "sentence",
        },

        // ============================================
        // 2. Content Words
        // ============================================

        {
          display: "I bought a car on Tuesday.",
          playText: "I bought a car on Tuesday.",
          ipa: "",
          vi: "Tôi đã mua một chiếc xe hơi vào hôm thứ Ba.",
          type: "sentence",
        },

        // Examples of content words
        {
          display: "Danh từ: house, music, Peter ...",
          playText: "house, music, Peter",
          ipa: "",
          vi: "Danh từ mang nội dung.",
          type: "word",
        },
        {
          display: "Động từ: work, studying, spoke ...",
          playText: "work, studying, spoke",
          ipa: "",
          vi: "Động từ mang nội dung.",
          type: "word",
        },
        {
          display: "Tính từ: nice, wonderful, pretty ...",
          playText: "nice, wonderful, pretty",
          ipa: "",
          vi: "Tính từ mang nội dung.",
          type: "word",
        },
        {
          display: "Trạng từ: never, badly, hopefully ...",
          playText: "never, badly, hopefully",
          ipa: "",
          vi: "Trạng từ mang nội dung.",
          type: "word",
        },
        {
          display: "Trợ động từ phủ định: doesn't, don't, didn't ...",
          playText: "doesn't, don't, didn't",
          ipa: "",
          vi: "Trợ động từ phủ định thường được nhấn.",
          type: "word",
        },
        {
          display: "Đại từ sở hữu: mine, hers, ours ...",
          playText: "mine, hers, ours",
          ipa: "",
          vi: "Đại từ sở hữu mang nghĩa nên thường được nhấn.",
          type: "word",
        },

        // Sentences with content words highlighted (for learners)
        {
          display: "She is studying German at university.",
          playText: "She is studying German at university.",
          ipa: "",
          vi: "Cô ấy đang học tiếng Đức ở trường đại học.",
          type: "sentence",
        },
        {
          display: "He asks me for directions to the park.",
          playText: "He asks me for directions to the park.",
          ipa: "",
          vi: "Anh ta hỏi tôi đường đến công viên.",
          type: "sentence",
        },

        // ============================================
        // 3. Function Words
        // ============================================

        {
          display: "Languages are a bridge between people.",
          playText: "Languages are a bridge between people.",
          ipa: "",
          vi: "Ngôn ngữ là cầu nối giữa con người.",
          type: "sentence",
        },

        // Examples of function words
        {
          display: "Đại từ nhân xưng: he, she, them ...",
          playText: "he, she, them",
          ipa: "",
          vi: "Đại từ nhân xưng thường không được nhấn.",
          type: "word",
        },
        {
          display: "Tính từ sở hữu: his, her, your ...",
          playText: "his, her, your",
          ipa: "",
          vi: "Tính từ sở hữu thường không được nhấn.",
          type: "word",
        },
        {
          display: "Trợ động từ khẳng định: can, have, do ...",
          playText: "can, have, do",
          ipa: "",
          vi: "Trợ động từ dạng khẳng định thường đọc nhẹ.",
          type: "word",
        },
        {
          display: "Giới từ: at, for, of ...",
          playText: "at, for, of",
          ipa: "",
          vi: "Giới từ thường không được nhấn.",
          type: "word",
        },
        {
          display: "Mạo từ: a, an, the ...",
          playText: "a, an, the",
          ipa: "",
          vi: "Mạo từ luôn đọc nhẹ.",
          type: "word",
        },
        {
          display: "Liên từ: and, for, but ...",
          playText: "and, for, but",
          ipa: "",
          vi: "Liên từ không mang nội dung chính nên không nhấn.",
          type: "word",
        },

        // More sentence examples
        {
          display: "She is studying German at university.",
          playText: "She is studying German at university.",
          ipa: "",
          vi: "Cô ấy đang học tiếng Đức ở trường đại học.",
          type: "sentence",
        },
        {
          display: "He asks me for directions to the park.",
          playText: "He asks me for directions to the park.",
          ipa: "",
          vi: "Anh ta hỏi tôi đường đến công viên.",
          type: "sentence",
        },
      ],
    },
  ],
};

export default u8;

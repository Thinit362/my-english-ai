import { UnitPronunciation } from "../english10.pronunciation";

const u10: UnitPronunciation = {
  unit: 10,
  pages: [
    {
      title: "Intonation (Ngữ điệu)",
      viExplain: `Trong bài này, chúng ta học về ngữ điệu khi nói tiếng Anh. 
Ngữ điệu là cách lên giọng hay xuống giọng của người nói ở cuối câu, giúp thể hiện ý nghĩa, thái độ, sự chắc chắn hay phân vân.

• Ngữ điệu **xuống** (falling intonation) thường dùng cho câu trần thuật, câu khẳng định và câu hỏi WH.  
• Ngữ điệu **lên** (rising intonation) thường dùng cho câu hỏi Yes–No và những câu mang hàm ý hỏi, thể hiện sự chưa chắc chắn.`,
      
      tips: [
        "Cuối câu trần thuật và câu hỏi WH: thường dùng **ngữ điệu xuống**.",
        "Cuối câu hỏi Yes–No: thường dùng **ngữ điệu lên**.",
        "Khi muốn tỏ ra chưa chắc chắn hoặc đang hỏi lại để xác nhận, bạn cũng có thể dùng ngữ điệu lên, dù câu không có dấu hỏi.",
        "Ngữ điệu giúp câu nói tự nhiên hơn, vì vậy hãy luyện nghe và bắt chước đường lên – xuống giọng trong hội thoại.",
      ],

      items: [
        // =========================================
        // ĐOẠN HỘI THOẠI MỞ ĐẦU – INTONATION IN CONVERSATION
        // (John Watt & Will Knott)
        // =========================================
        {
          display: "John Watt: Hello, are you there? (rising intonation on “there?”)",
          playText: "Hello, are you there?",
          ipa: "",
          vi: "Xin chào, cậu có đó không?",
          type: "sentence",
        },
        {
          display: "Will Knott: Yes, who’s that? (rising intonation on “that?”)",
          playText: "Yes, who’s that?",
          ipa: "",
          vi: "Vâng, ai đó?",
          type: "sentence",
        },
        {
          display: "John Watt: Watt. (falling intonation)",
          playText: "Watt.",
          ipa: "",
          vi: "Watt.",
          type: "sentence",
        },
        {
          display: "Will Knott: What’s your name? (rising intonation)",
          playText: "What’s your name?",
          ipa: "",
          vi: "Tên cậu là gì?",
          type: "sentence",
        },
        {
          display: "John Watt: Watt’s my name. (falling intonation)",
          playText: "Watt’s my name.",
          ipa: "",
          vi: "Watt là tên của tớ.",
          type: "sentence",
        },
        {
          display: "Will Knott: What? (rising intonation)",
          playText: "What?",
          ipa: "",
          vi: "Gì cơ?",
          type: "sentence",
        },
        {
          display: "John Watt: My name’s John Watt. (falling intonation)",
          playText: "My name’s John Watt.",
          ipa: "",
          vi: "Tên tớ là John Watt.",
          type: "sentence",
        },
        {
          display: "Will Knott: John what? (rising intonation)",
          playText: "John what?",
          ipa: "",
          vi: "John gì cơ?",
          type: "sentence",
        },
        {
          display: "John Watt: That’s right. Are you Jones? (falling on “right.” – rising on “Jones?”)",
          playText: "That’s right. Are you Jones?",
          ipa: "",
          vi: "Đúng rồi. Cậu là Jones à?",
          type: "sentence",
        },
        {
          display: "Will Knott: No, I’m Knott. (falling intonation)",
          playText: "No, I’m Knott.",
          ipa: "",
          vi: "Không, tớ là Knott.",
          type: "sentence",
        },
        {
          display: "John Watt: Well, tell me your name, then. (falling intonation)",
          playText: "Well, tell me your name, then.",
          ipa: "",
          vi: "Thế thì nói tên cậu cho tớ đi.",
          type: "sentence",
        },
        {
          display: "Will Knott: Will Knott. (falling intonation)",
          playText: "Will Knott.",
          ipa: "",
          vi: "Will Knott.",
          type: "sentence",
        },
        {
          display: "John Watt: Why not? (rising intonation)",
          playText: "Why not?",
          ipa: "",
          vi: "Tại sao không?",
          type: "sentence",
        },
        {
          display: "Will Knott: My name’s Knott. (falling intonation)",
          playText: "My name’s Knott.",
          ipa: "",
          vi: "Tên tớ là Knott.",
          type: "sentence",
        },
        {
          display: "John Watt: Not what? (rising intonation)",
          playText: "Not what?",
          ipa: "",
          vi: "Không phải cái gì?",
          type: "sentence",
        },
        {
          display: "Will Knott: Not Watt, Knott. (falling intonation on each clause)",
          playText: "Not Watt, Knott.",
          ipa: "",
          vi: "Không phải Watt, mà là Knott.",
          type: "sentence",
        },

        // =========================================
        // NGỮ ĐIỆU XUỐNG – STATEMENTS & WH-QUESTIONS
        // =========================================
        {
          display: "Vietnam is a member of ASEAN. (falling intonation)",
          playText: "Vietnam is a member of ASEAN.",
          ipa: "",
          vi: "Việt Nam là một thành viên của ASEAN.",
          type: "sentence",
        },
        {
          display: "Hanoi is the capital city of Vietnam. (falling intonation)",
          playText: "Hanoi is the capital city of Vietnam.",
          ipa: "",
          vi: "Hà Nội là thủ đô của Việt Nam.",
          type: "sentence",
        },
        {
          display: "Where is Nam from? (falling intonation – WH-question)",
          playText: "Where is Nam from?",
          ipa: "",
          vi: "Nam từ đâu đến?",
          type: "sentence",
        },
        {
          display: "What is his job? (falling intonation – WH-question)",
          playText: "What is his job?",
          ipa: "",
          vi: "Công việc của cậu ấy là gì?",
          type: "sentence",
        },

        // =========================================
        // NGỮ ĐIỆU LÊN – YES–NO QUESTIONS
        // =========================================
        {
          display: "Do you live in Ha Noi? (rising intonation)",
          playText: "Do you live in Ha Noi?",
          ipa: "",
          vi: "Bạn sống ở Hà Nội à?",
          type: "sentence",
        },
        {
          display: "Is that your teacher? (rising intonation)",
          playText: "Is that your teacher?",
          ipa: "",
          vi: "Đó là giáo viên của bạn à?",
          type: "sentence",
        },

        // =========================================
        // NGỮ ĐIỆU LÊN CHO CÂU MANG HÀM Ý HỎI
        // =========================================
        {
          display:
            "A: She’s the new member in our class. (rising intonation – implying a question)",
          playText: "She’s the new member in our class.",
          ipa: "",
          vi: "Cậu ấy là học sinh mới trong lớp mình đấy.",
          type: "sentence",
        },
        {
          display: "B: Yes. You haven’t met her. (rising intonation on “her.”)",
          playText: "Yes. You haven’t met her.",
          ipa: "",
          vi: "Ừ. Cậu chưa gặp cậu ấy à?",
          type: "sentence",
        },
        {
          display: "A: No. She’s gorgeous. (falling intonation)",
          playText: "No. She’s gorgeous.",
          ipa: "",
          vi: "Chưa. Cậu ấy thật tuyệt.",
          type: "sentence",
        },
      ],
    },
  ],
};

export default u10;

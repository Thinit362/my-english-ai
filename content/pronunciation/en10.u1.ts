import { UnitPronunciation } from "../english10.pronunciation";

const u1: UnitPronunciation = {
  unit: 1,
  pronunciation: {
    title: "Cách phát âm các cụm phụ âm /tr/, /kr/, /br/",
    focus: "Luyện phát âm ba cụm phụ âm đứng đầu từ: /tr/, /kr/ và /br/.",
    viExplain: `Consonant clusters là các nhóm hai hoặc nhiều phụ âm đứng liền nhau mà không có nguyên âm xen giữa.

Các vị trí của cụm phụ âm trong tiếng Anh:
• Đầu từ: freedom, green, promotion  
• Giữa từ: contract, offspring, enclose  
• Cuối từ: collect, pest, adapt

Trong bài học này, các em sẽ được học 3 cụm phụ âm: /tr/, /kr/, /br/.

=======================
🔶 Cách phát âm /tr/
=======================

/tr/ được tạo thành bởi sự kết hợp của âm /t/ và /r/.

Âm /t/: đặt đầu lưỡi ở chân răng trên → giữ hơi → bật mạnh (cảm giác có hơi thoát ra).  
Âm /r/: kéo lưỡi cong nhẹ, cuộn ra sau nhưng KHÔNG chạm vào răng.

Khi ghép /t/ + /r/ → cho ra âm /tr/.`,
    
    tips: [
      "Không thêm nguyên âm trước hoặc sau /tr/.",
      "Giữ hơi ở âm /t/ và chuyển nhanh sang /r/.",
      "Luyện chậm trước, sau đó tăng tốc độ.",
    ],

    items: [
      // ===== Ví dụ từ đơn =====
      { text: "trick", ipa: "trɪk", vi: "trò lừa gạt", highlight: "tr" },
      { text: "track", ipa: "træk", vi: "lối mòn", highlight: "tr" },
      { text: "travel", ipa: "ˈtrævəl", vi: "du lịch", highlight: "tr" },
      { text: "attract", ipa: "əˈtrækt", vi: "thu hút", highlight: "tr" },
      { text: "entrance", ipa: "ˈentrəns", vi: "lối vào", highlight: "tr" },

      // ===== Ví dụ cụm từ =====
      { text: "tree trunk", ipa: "triː trʌŋk", vi: "thân cây", highlight: "tr" },
      { text: "traffic trouble", ipa: "ˈtræfɪk ˈtrʌbəl", vi: "vấn đề giao thông", highlight: "tr" },

      // ===== Ví dụ câu =====
      {
        text: "He got trapped in a traffic jam for hours.",
        ipa: "hiː ɡɒt træpt ɪn ə ˈtræfɪk dʒæm fɔːr aʊərz",
        vi: "Anh ấy bị tắc đường nhiều giờ đồng hồ.",
        type: "sentence",
        highlight: "tr",
      },
      {
        text: "You can trust me as I always tell you the truth.",
        ipa: "juː kæn trʌst miː æz aɪ ˈɔːlweɪz tel juː ðə truːθ",
        vi: "Bạn có thể tin tôi vì tôi luôn nói cho bạn biết sự thật.",
        type: "sentence",
        highlight: "tr",
      },
      {
        text: "The treasure is buried under the tree.",
        ipa: "ðə ˈtrɛʒər ɪz ˈbɛrid ˈʌndər ðə triː",
        vi: "Kho báu được chôn dưới gốc cây.",
        type: "sentence",
        highlight: "tr",
      },

      // ===== So sánh /tr/ và /tʃ/ =====
      { text: "train", ipa: "treɪn", vi: "tàu hỏa", highlight: "tr" },
      { text: "chain", ipa: "tʃeɪn", vi: "chuỗi", highlight: "tʃ" },

      { text: "trees", ipa: "triːz", vi: "những cái cây", highlight: "tr" },
      { text: "cheese", ipa: "tʃiːz", vi: "pho mát", highlight: "tʃ" },

      { text: "treat", ipa: "triːt", vi: "đối xử", highlight: "tr" },
      { text: "cheat", ipa: "tʃiːt", vi: "lừa gạt", highlight: "tʃ" },

      { text: "trip", ipa: "trɪp", vi: "chuyến đi", highlight: "tr" },
      { text: "chip", ipa: "tʃɪp", vi: "khoai tây chiên", highlight: "tʃ" },
    ],
  },
};

export default u1;

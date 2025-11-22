// content/pronunciation/en10.u4.ts
import { UnitPronunciation } from "../english10.pronunciation";

const u4: UnitPronunciation = {
  unit: 4,
  pronunciation: {
    title: "Stress in two-syllable words with derivatives",
    focus: "Trọng âm của những từ có 2 âm tiết có cùng cách viết nhưng khác từ loại",
    viExplain: `
Trong tiếng Anh, một số từ có 2 âm tiết có cùng cách viết nhưng lại khác nhau về từ loại.
Cùng một từ đó có thể làm danh từ, động từ, hoặc tính từ – và vị trí trọng âm sẽ thay đổi theo từ loại.

Ví dụ:
She wants to perfect (1) herself to find a perfect (2) life partner.
Từ perfect (1) là động từ /pəˈfekt/ – hoàn thiện.
Từ perfect (2) là tính từ /ˈpɜːfɪkt/ – hoàn hảo.

Khi từ đóng vai trò danh từ hoặc tính từ, trọng âm **thường rơi vào âm tiết thứ nhất**.
Khi từ đó đóng vai trò động từ, trọng âm **thường chuyển sang âm tiết thứ hai**.
    `.trim(),
    tips: [
      "Luôn xác định từ loại (n., adj., v.) trước rồi mới đặt trọng âm.",
      "Danh từ / tính từ: thường nhấn âm tiết thứ nhất.",
      "Động từ: thường nhấn âm tiết thứ hai.",
      "So sánh cặp phiên âm để thấy vị trí dấu ' thay đổi.",
    ],
    sounds: [
      {
        key: "same-spelling",
        label: "/N-Adj vs V/",
        title:
          "Trọng âm những từ có cùng cách viết nhưng khác nhau về từ loại",
        description:
          "Luyện nghe – so sánh các cặp danh từ/tính từ và động từ 2 âm tiết có cùng cách viết nhưng khác trọng âm.",
        items: [
          // ===== Bảng cặp từ: Noun / Adj  vs Verb =====
          // increase
          {
            text: "increase",
            ipa: "ˈɪnkriːs",
            vi: "n. sự gia tăng",
          },
          {
            text: "increase",
            ipa: "ɪnˈkriːs",
            vi: "v. tăng",
          },

          // decrease
          {
            text: "decrease",
            ipa: "ˈdiːkriːs",
            vi: "n. sự giảm xuống",
          },
          {
            text: "decrease",
            ipa: "dɪˈkriːs",
            vi: "v. làm giảm",
          },

          // import
          {
            text: "import",
            ipa: "ˈɪmpɔːt",
            vi: "n. sự nhập khẩu",
          },
          {
            text: "import",
            ipa: "ɪmˈpɔːt",
            vi: "v. nhập khẩu",
          },

          // export
          {
            text: "export",
            ipa: "ˈekspɔːt",
            vi: "n. sự xuất khẩu",
          },
          {
            text: "export",
            ipa: "ɪkˈspɔːt",
            vi: "v. xuất khẩu",
          },

          // perfect
          {
            text: "perfect",
            ipa: "ˈpɜːfɪkt",
            vi: "adj. hoàn hảo",
          },
          {
            text: "perfect",
            ipa: "pəˈfekt",
            vi: "v. hoàn thiện, làm cho tốt hơn",
          },

          // present
          {
            text: "present",
            ipa: "ˈpreznt",
            vi: "n. món quà",
          },
          {
            text: "present",
            ipa: "prɪˈzent",
            vi: "v. tặng, trình bày",
          },

          // protest
          {
            text: "protest",
            ipa: "ˈprəʊtest",
            vi: "n. sự phản đối, cuộc biểu tình",
          },
          {
            text: "protest",
            ipa: "prəˈtest",
            vi: "v. phản đối, biểu tình",
          },

          // object
          {
            text: "object",
            ipa: "ˈɒbdʒɪkt",
            vi: "n. đồ vật, mục tiêu",
          },
          {
            text: "object",
            ipa: "əbˈdʒekt",
            vi: "v. phản đối",
          },

          // rebel
          {
            text: "rebel",
            ipa: "ˈrebl",
            vi: "n. kẻ nổi loạn",
          },
          {
            text: "rebel",
            ipa: "rɪˈbel",
            vi: "v. nổi loạn",
          },

          // contrast
          {
            text: "contrast",
            ipa: "ˈkɒntrɑːst",
            vi: "n. sự tương phản",
          },
          {
            text: "contrast",
            ipa: "kənˈtrɑːst",
            vi: "v. làm tương phản, đối chiếu",
          },

          // ===== Câu ví dụ có cả hai dạng trong cùng câu =====
          {
            text: "His parents object to his objects in life.",
            ipa: "",
            vi: "Bố mẹ cậu ấy phản đối những mục tiêu của cậu ấy trong cuộc sống.",
            type: "sentence",
          },
          {
            text: "Some teenagers rebel against their parents, they act as rebels.",
            ipa: "",
            vi: "Một số thanh thiếu niên nổi loạn chống đối bố mẹ mình, họ hành xử như những kẻ nổi loạn.",
            type: "sentence",
          },
          {
            text: "The couple will present their thanks after receiving presents from the guests.",
            ipa: "",
            vi: "Cặp đôi sẽ bày tỏ sự cảm ơn sau khi nhận quà từ các vị khách.",
            type: "sentence",
          },
          {
            text: "People increase the prices of roses because of the increase in the demand for them.",
            ipa: "",
            vi: "Người ta tăng giá các loại hoa hồng vì sự gia tăng nhu cầu dành cho chúng.",
            type: "sentence",
          },
        ],
      },
    ],
  },
};

export default u4;

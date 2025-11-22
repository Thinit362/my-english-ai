// content/pronunciation/en10.u4.ts
import { UnitPronunciation } from "../english10.pronunciation";

const u4: UnitPronunciation = {
  unit: 4,
  pages: [
    {
      title:
        "Trọng âm những từ có 2 âm tiết cùng cách viết nhưng khác về từ loại",
      viExplain: `Khi một từ có 2 âm tiết mà đóng vai trò là danh từ và tính từ thì trọng âm vẫn là âm tiết thứ nhất. 
Còn khi từ đó đóng vai trò là động từ thì trọng âm chuyển sang âm tiết thứ 2.
Các em hãy theo dõi bảng dưới đây, nhấn vào biểu tượng loa để nghe và phát âm theo, chú ý đến phần
nhận trọng âm đã được in đậm của các từ có cùng cách viết nhưng khác nhau về từ loại.`,
      items: [
        // Các câu ví dụ sau bảng
        {
          text: "His parents object to his objects in life.",
          ipa: "hɪz ˈpeərənts əbˈdʒekt tə hɪz ˈɒbdʒekts ɪn laɪf",
          vi: "Bố mẹ cậu ấy phản đối những mục tiêu của cậu ấy trong cuộc sống.",
          type: "sentence",
        },
        {
          text: "Some teenagers rebel against their parents, they act as rebels.",
          ipa: "sʌm ˈtiːneɪdʒəz rɪˈbel əˈgeɪnst ðeə ˈpeərənts, ðeɪ ækt æz ˈrebəlz",
          vi: "Một số thanh thiếu niên nổi loạn chống đối bố mẹ mình, họ hành xử như những kẻ nổi loạn.",
          type: "sentence",
        },
        {
          text: "The couple will present their thanks after receiving presents from the guests.",
          ipa: "ðə ˈkʌpl wɪl prɪˈzent ðeə θæŋks ˈɑːftə rɪˈsiːvɪŋ ˈpreznts frəm ðə gests",
          vi: "Cặp đôi sẽ bày tỏ sự cám ơn sau khi nhận quà từ các vị khách.",
          type: "sentence",
        },
        {
          text: "People increase the prices of roses because of the increase in the demand for them.",
          ipa: "ˈpiːpl ɪnˈkriːs ðə ˈpraɪsɪz əv ˈrəʊzɪz bɪˈkɒz əv ði ˈɪnkriːs ɪn ðə dɪˈmɑːnd fə ðem",
          vi: "Người ta tăng giá các loại hoa hồng vì sự gia tăng nhu cầu dành cho chúng.",
          type: "sentence",
        },
      ],

      // ===== BẢNG SO SÁNH =====
      compareTable: {
        leftHeader: "Danh từ / Tính từ",
        rightHeader: "Động từ",
        rows: [
          {
            left: {
              text: "increase (n.)",
              ipa: "/ˈɪŋkriːs/",
              vi: "sự gia tăng",
            },
            right: {
              text: "increase (v.)",
              ipa: "/ɪnˈkriːs/",
              vi: "tăng",
            },
          },
          {
            left: {
              text: "decrease (n.)",
              ipa: "/ˈdiːkriːs/",
              vi: "sự giảm xuống",
            },
            right: {
              text: "decrease (v.)",
              ipa: "/dɪˈkriːs/",
              vi: "làm giảm",
            },
          },
          {
            left: {
              text: "import (n.)",
              ipa: "/ˈɪmpɔːt/",
              vi: "sự nhập khẩu",
            },
            right: {
              text: "import (v.)",
              ipa: "/ɪmˈpɔːt/",
              vi: "nhập khẩu",
            },
          },
          {
            left: {
              text: "export (n.)",
              ipa: "/ˈekspɔːt/",
              vi: "sự xuất khẩu",
            },
            right: {
              text: "export (v.)",
              ipa: "/ɪkˈspɔːt/",
              vi: "xuất khẩu",
            },
          },
          {
            left: {
              text: "perfect (adj.)",
              ipa: "/ˈpɜːfɪkt/",
              vi: "hoàn hảo",
            },
            right: {
              text: "perfect (v.)",
              ipa: "/pəˈfekt/",
              vi: "hoàn thiện, làm cho tốt hơn",
            },
          },
          {
            left: {
              text: "present (n.)",
              ipa: "/ˈpreznt/",
              vi: "món quà",
            },
            right: {
              text: "present (v.)",
              ipa: "/prɪˈzent/",
              vi: "tặng, trình bày",
            },
          },
          {
            left: {
              text: "protest (n.)",
              ipa: "/ˈprəʊtest/",
              vi: "sự phản đối, cuộc biểu tình",
            },
            right: {
              text: "protest (v.)",
              ipa: "/prəˈtest/",
              vi: "phản đối, biểu tình",
            },
          },
          {
            left: {
              text: "object (n.)",
              ipa: "/ˈɒbdʒekt/",
              vi: "đồ vật, mục tiêu",
            },
            right: {
              text: "object (v.)",
              ipa: "/əbˈdʒekt/",
              vi: "phản đối",
            },
          },
          {
            left: {
              text: "rebel (n.)",
              ipa: "/ˈrebəl/",
              vi: "kẻ nổi loạn",
            },
            right: {
              text: "rebel (v.)",
              ipa: "/rɪˈbel/",
              vi: "nổi loạn",
            },
          },
          {
            left: {
              text: "contrast (n.)",
              ipa: "/ˈkɒntrɑːst/",
              vi: "sự tương phản",
            },
            right: {
              text: "contrast (v.)",
              ipa: "/kənˈtrɑːst/",
              vi: "làm tương phản",
            },
          },
        ],
      },
    },
  ],
};

export default u4;

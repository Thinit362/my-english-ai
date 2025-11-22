import { UnitPronunciation } from "../english10.pronunciation";

const u6: UnitPronunciation = {
  unit: 6,
  pages: [
    {
      title: "Stress in three-syllable adjectives and verbs",
      viExplain: `Trong tiếng Anh, nhiều tính từ và động từ có 3 âm tiết tuân theo các quy tắc trọng âm nhất định.

I. TÍNH TỪ 3 ÂM TIẾT
• Kết thúc bằng -ate → trọng âm rơi vào âm tiết đầu tiên.  
• Có hậu tố -ese → trọng âm rơi vào chính âm tiết chứa -ese (thường là âm cuối).  
• Kết thúc bằng các hậu tố -able, -ial, -ible, -ic, -ient, -ous, -ary → trọng âm rơi vào âm tiết đứng ngay trước các hậu tố này.  
• Khi thêm tiền tố (dis-, im-, in-, un- …) hoặc hậu tố -ful, -ing, -ed, trọng âm thường giữ nguyên như từ gốc.

II. ĐỘNG TỪ 3 ÂM TIẾT
• Kết thúc bằng -ate, -ize / -ise, -ify → trọng âm rơi vào âm tiết đầu tiên.  
• Kết thúc bằng -end → trọng âm rơi vào chính âm tiết có -end (âm cuối).  
• Trọng âm rơi vào âm tiết thứ hai nếu âm tiết cuối:
  – chứa nguyên âm ngắn  
  – và kết thúc không quá 1 phụ âm.  
• Khi thêm tiền tố (re-, de-, dis-, en-, un- …) hoặc các hậu tố -ing, -ed, trọng âm của động từ thường không thay đổi.`,

      tips: [
        "Nhìn đuôi từ: -ate, -ize/-ise, -ify, -able, -ic, -ous, -ary… để đoán nhanh vị trí trọng âm.",
        "Hậu tố -ese, -end → thường mang trọng âm chính.",
        "Động từ 3 âm tiết, âm cuối nhẹ (nguyên âm ngắn + 1 phụ âm) → thường nhấn âm thứ 2.",
        "Thêm tiền tố hoặc -ing, -ed đa số không làm đổi trọng âm của từ gốc.",
      ],

      items: [
        // ============================
        // I. ADJECTIVES – RULE 1: -ate → stress 1st syllable
        // ============================
        {
          display: "accurate (adj) /ˈækjərət/ – chính xác",
          playText: "accurate",
          ipa: "ˈækjərət",
          vi: "chính xác",
          type: "word",
        },
        {
          display: "fortunate (adj) /ˈfɔːtʃənət/ – may mắn",
          playText: "fortunate",
          ipa: "ˈfɔːtʃənət",
          vi: "may mắn",
          type: "word",
        },
        {
          display: "temperate (adj) /ˈtempərət/ – ôn hòa",
          playText: "temperate",
          ipa: "ˈtempərət",
          vi: "ôn hòa",
          type: "word",
        },

        // ============================
        // ADJECTIVES – RULE 2: -ese → stress on -ese
        // ============================
        {
          display: "Vietnamese (adj) /ˌviːɛtnəˈmiːz/ – thuộc về Việt Nam",
          playText: "Vietnamese",
          ipa: "ˌviːɛtnəˈmiːz",
          vi: "thuộc về Việt Nam",
          type: "word",
        },
        {
          display: "Portuguese (adj) /ˌpɔːtʃəˈɡiːz/ – thuộc về Bồ Đào Nha",
          playText: "Portuguese",
          ipa: "ˌpɔːtʃəˈɡiːz",
          vi: "thuộc về Bồ Đào Nha",
          type: "word",
        },
        {
          display: "Japanese (adj) /ˌdʒæpəˈniːz/ – thuộc về Nhật Bản",
          playText: "Japanese",
          ipa: "ˌdʒæpəˈniːz",
          vi: "thuộc về Nhật Bản",
          type: "word",
        },

        // ============================
        // ADJECTIVES – RULE 3: -able, -ial, -ible, -ic, -ient, -ous, -ary
        // Stress on syllable before suffix
        // ============================
        {
          display: "notable (adj) /ˈnəʊtəbl/ – đáng chú ý",
          playText: "notable",
          ipa: "ˈnəʊtəbl",
          vi: "đáng chú ý",
          type: "word",
        },
        {
          display: "capable (adj) /ˈkeɪpəbl/ – đủ khả năng",
          playText: "capable",
          ipa: "ˈkeɪpəbl",
          vi: "đủ khả năng",
          type: "word",
        },
        {
          display: "financial (adj) /faɪˈnænʃl/ – thuộc về tài chính",
          playText: "financial",
          ipa: "faɪˈnænʃl",
          vi: "thuộc về tài chính",
          type: "word",
        },
        {
          display: "visible (adj) /ˈvɪzəbl/ – có thể nhìn thấy",
          playText: "visible",
          ipa: "ˈvɪzəbl",
          vi: "có thể nhìn thấy",
          type: "word",
        },
        {
          display: "flexible (adj) /ˈfleksəbl/ – linh hoạt",
          playText: "flexible",
          ipa: "ˈfleksəbl",
          vi: "linh hoạt",
          type: "word",
        },
        {
          display: "terrific (adj) /təˈrɪfɪk/ – tuyệt vời",
          playText: "terrific",
          ipa: "təˈrɪfɪk",
          vi: "tuyệt vời",
          type: "word",
        },
        {
          display: "domestic (adj) /dəˈmestɪk/ – nội địa, trong nước",
          playText: "domestic",
          ipa: "dəˈmestɪk",
          vi: "nội địa, trong nước",
          type: "word",
        },
        {
          display: "sufficient (adj) /səˈfɪʃnt/ – đủ, đầy đủ",
          playText: "sufficient",
          ipa: "səˈfɪʃnt",
          vi: "đủ, đầy đủ",
          type: "word",
        },
        {
          display: "various (adj) /ˈveəriəs/ – đa dạng, nhiều loại",
          playText: "various",
          ipa: "ˈveəriəs",
          vi: "đa dạng, nhiều loại",
          type: "word",
        },
        {
          display: "primary (adj) /ˈpraɪməri/ – cơ bản, chủ yếu",
          playText: "primary",
          ipa: "ˈpraɪməri",
          vi: "cơ bản, chủ yếu",
          type: "word",
        },

        // ============================
        // ADJECTIVES – RULE 4: prefixes & suffixes, stress unchanged
        // ============================
        {
          display: "impolite (adj) /ˌɪmpəˈlaɪt/ – bất lịch sự",
          playText: "impolite",
          ipa: "ˌɪmpəˈlaɪt",
          vi: "bất lịch sự",
          type: "word",
        },
        {
          display: "successful (adj) /səkˈsesfl/ – thành công",
          playText: "successful",
          ipa: "səkˈsesfl",
          vi: "thành công",
          type: "word",
        },
        {
          display: "unequal (adj) /ʌnˈiːkwəl/ – không công bằng",
          playText: "unequal",
          ipa: "ʌnˈiːkwəl",
          vi: "không công bằng",
          type: "word",
        },

        // ============================
        // II. VERBS – RULE 1: -ate, -ize/-ise, -ify → stress 1st syllable
        // ============================
        {
          display: "activate (verb) /ˈæktɪveɪt/ – kích hoạt",
          playText: "activate",
          ipa: "ˈæktɪveɪt",
          vi: "kích hoạt",
          type: "word",
        },
        {
          display: "concentrate (verb) /ˈkɒnsntreɪt/ – tập trung",
          playText: "concentrate",
          ipa: "ˈkɒnsntreɪt",
          vi: "tập trung",
          type: "word",
        },
        {
          display: "classify (verb) /ˈklæsɪfaɪ/ – phân loại",
          playText: "classify",
          ipa: "ˈklæsɪfaɪ",
          vi: "phân loại",
          type: "word",
        },
        {
          display: "terrify (verb) /ˈterɪfaɪ/ – làm cho sợ hãi",
          playText: "terrify",
          ipa: "ˈterɪfaɪ",
          vi: "làm cho sợ hãi",
          type: "word",
        },
        {
          display: "recognize (verb) /ˈrekəɡnaɪz/ – nhận ra",
          playText: "recognize",
          ipa: "ˈrekəɡnaɪz",
          vi: "nhận ra",
          type: "word",
        },
        {
          display: "realize (verb) /ˈrɪəlaɪz/ – nhận ra, hiện thực hóa",
          playText: "realize",
          ipa: "ˈrɪəlaɪz",
          vi: "nhận ra, hiện thực hóa",
          type: "word",
        },

        // ============================
        // VERBS – RULE 2: -end → stress on -end
        // ============================
        {
          display: "apprehend (verb) /ˌæprɪˈhend/ – bắt giữ",
          playText: "apprehend",
          ipa: "ˌæprɪˈhend",
          vi: "bắt giữ",
          type: "word",
        },
        {
          display: "comprehend (verb) /ˌkɒmprɪˈhend/ – hiểu",
          playText: "comprehend",
          ipa: "ˌkɒmprɪˈhend",
          vi: "hiểu",
          type: "word",
        },
        {
          display: "recommend (verb) /ˌrekəˈmend/ – giới thiệu, khuyên",
          playText: "recommend",
          ipa: "ˌrekəˈmend",
          vi: "giới thiệu, khuyên",
          type: "word",
        },
        {
          display: "condescend (verb) /ˌkɒndɪˈsend/ – hạ mình, chiếu cố",
          playText: "condescend",
          ipa: "ˌkɒndɪˈsend",
          vi: "hạ mình, chiếu cố",
          type: "word",
        },

        // ============================
        // VERBS – RULE 3: stress on 2nd syllable
        // ============================
        {
          display: "deliver (verb) /dɪˈlɪvə(r)/ – vận chuyển; giao hàng",
          playText: "deliver",
          ipa: "dɪˈlɪvə",
          vi: "vận chuyển; giao hàng",
          type: "word",
        },
        {
          display: "consider (verb) /kənˈsɪdə(r)/ – cân nhắc",
          playText: "consider",
          ipa: "kənˈsɪdə",
          vi: "cân nhắc",
          type: "word",
        },
        {
          display: "examine (verb) /ɪɡˈzæmɪn/ – kiểm tra, khảo sát",
          playText: "examine",
          ipa: "ɪɡˈzæmɪn",
          vi: "kiểm tra, khảo sát",
          type: "word",
        },
        {
          display: "remember (verb) /rɪˈmembə(r)/ – ghi nhớ",
          playText: "remember",
          ipa: "rɪˈmembə",
          vi: "ghi nhớ",
          type: "word",
        },
        {
          display: "inhabit (verb) /ɪnˈhæbɪt/ – cư trú",
          playText: "inhabit",
          ipa: "ɪnˈhæbɪt",
          vi: "cư trú",
          type: "word",
        },
        {
          display: "establish (verb) /ɪˈstæblɪʃ/ – thành lập",
          playText: "establish",
          ipa: "ɪˈstæblɪʃ",
          vi: "thành lập",
          type: "word",
        },

        // ============================
        // VERBS – RULE 4: prefixes / -ing / -ed keep original stress
        // ============================
        {
          display: "connect (verb) /kəˈnekt/ – kết nối",
          playText: "connect",
          ipa: "kəˈnekt",
          vi: "kết nối",
          type: "word",
        },
        {
          display: "reconnect (verb) /ˌriːkəˈnekt/ – kết nối lại",
          playText: "reconnect",
          ipa: "ˌriːkəˈnekt",
          vi: "kết nối lại",
          type: "word",
        },
        {
          display: "appear (verb) /əˈpɪə(r)/ – xuất hiện",
          playText: "appear",
          ipa: "əˈpɪə",
          vi: "xuất hiện",
          type: "word",
        },
        {
          display: "disappear (verb) /ˌdɪsəˈpɪə(r)/ – biến mất",
          playText: "disappear",
          ipa: "ˌdɪsəˈpɪə",
          vi: "biến mất",
          type: "word",
        },
        {
          display: "follow (verb) /ˈfɒləʊ/ – đi theo",
          playText: "follow",
          ipa: "ˈfɒləʊ",
          vi: "đi theo",
          type: "word",
        },
        {
          display: "following (verb) /ˈfɒləʊɪŋ/ – đi theo; tiếp diễn",
          playText: "following",
          ipa: "ˈfɒləʊɪŋ",
          vi: "đi theo; tiếp diễn",
          type: "word",
        },
        {
          display: "attract (verb) /əˈtrækt/ – thu hút",
          playText: "attract",
          ipa: "əˈtrækt",
          vi: "thu hút",
          type: "word",
        },
        {
          display: "attracted (verb) /əˈtræktɪd/ – thu hút (quá khứ, bị thu hút)",
          playText: "attracted",
          ipa: "əˈtræktɪd",
          vi: "thu hút; bị thu hút (quá khứ)",
          type: "word",
        },

        // ============================
        // EXAMPLE SENTENCES
        // ============================
        {
          display:
            "Vietnamese students are very hardworking and friendly.",
          playText:
            "Vietnamese students are very hardworking and friendly.",
          ipa: "",
          vi: "Học sinh Việt Nam rất chăm chỉ và thân thiện.",
          type: "sentence",
        },
        {
          display:
            "The technician must activate the system before the test.",
          playText:
            "The technician must activate the system before the test.",
          ipa: "",
          vi: "Kỹ thuật viên phải kích hoạt hệ thống trước khi kiểm tra.",
          type: "sentence",
        },
        {
          display:
            "We should consider all the options carefully.",
          playText:
            "We should consider all the options carefully.",
          ipa: "",
          vi: "Chúng ta nên cân nhắc cẩn thận tất cả các lựa chọn.",
          type: "sentence",
        },
        {
          display:
            "She felt very successful after she established her own company.",
          playText:
            "She felt very successful after she established her own company.",
          ipa: "",
          vi: "Cô ấy cảm thấy rất thành công sau khi thành lập công ty riêng của mình.",
          type: "sentence",
        },
      ],
    },
  ],
};

export default u6;

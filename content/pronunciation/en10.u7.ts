import { UnitPronunciation } from "../english10.pronunciation";

const u7: UnitPronunciation = {
  unit: 7,
  pages: [
    {
      title: "Stress in words with more than three syllables",
      viExplain: `Nhiều từ có hơn 3 âm tiết trong tiếng Anh có quy tắc trọng âm dựa vào các hậu tố.

1. Từ hơn 3 âm tiết có trọng âm rơi vào **âm tiết thứ 2 tính từ đuôi kết thúc**  
• Những từ kết thúc bằng: -tion, -ic, -ical, -ial, -ity… → trọng âm chính thường rơi vào **âm tiết đứng thứ hai trước các đuôi này** (thường là âm tiết thứ ba từ cuối).

2. Từ hơn 3 âm tiết có trọng âm rơi vào **âm tiết thứ 3 tính từ đuôi kết thúc**  
• Những từ kết thúc bằng: -gy, -phy, -cy → trọng âm chính thường rơi vào **âm tiết thứ ba trước các đuôi này**.

3. Trọng âm chính (primary stress) & trọng âm phụ (secondary stress)  
• Một số từ dài có cả trọng âm chính /ˈ / và trọng âm phụ /ˌ /.  
• Trọng âm phụ được đọc nhẹ hơn nhưng vẫn cao hơn các âm không mang trọng âm.`,
      tips: [
        "Nhìn hậu tố để đoán nhanh: -tion, -ic, -ical, -ial, -ity → nhấn âm thứ 2 tính từ đuôi.",
        "-gy, -phy, -cy → nhấn âm thứ 3 tính từ đuôi.",
        "Chú ý hai kí hiệu trọng âm: /ˈ / (primary) mạnh hơn /ˌ / (secondary).",
        "Khi tra từ điển, luôn quan sát tất cả dấu trọng âm trong phiên âm IPA.",
      ],

      items: [
        // =========================================
        // RULE 1 – MORE THAN 3 SYLLABLES, STRESS 2ND FROM THE END
        // =========================================

        // -tion
        {
          display: "conservation (noun) /ˌkɒnsəˈveɪʃn/ – sự bảo tồn",
          playText: "conservation",
          ipa: "ˌkɒnsəˈveɪʃn",
          vi: "sự bảo tồn",
          type: "word",
        },
        {
          display: "relaxation (noun) /ˌriːlækˈseɪʃn/ – sự thư giãn",
          playText: "relaxation",
          ipa: "ˌriːlækˈseɪʃn",
          vi: "sự thư giãn",
          type: "word",
        },

        // -ic
        {
          display: "scientific (adj) /ˌsaɪənˈtɪfɪk/ – thuộc về khoa học",
          playText: "scientific",
          ipa: "ˌsaɪənˈtɪfɪk",
          vi: "thuộc về khoa học",
          type: "word",
        },
        {
          display: "economic (adj) /ˌiːkəˈnɒmɪk/ – thuộc kinh tế",
          playText: "economic",
          ipa: "ˌiːkəˈnɒmɪk",
          vi: "thuộc kinh tế",
          type: "word",
        },

        // -ical / -ial
        {
          display: "ecological (adj) /ˌiːkəˈlɒdʒɪkl/ – thuộc sinh thái học",
          playText: "ecological",
          ipa: "ˌiːkəˈlɒdʒɪkl",
          vi: "thuộc sinh thái học",
          type: "word",
        },
        {
          display: "historical (adj) /hɪˈstɒrɪkl/ – thuộc lịch sử",
          playText: "historical",
          ipa: "hɪˈstɒrɪkl",
          vi: "thuộc lịch sử",
          type: "word",
        },
        {
          display: "beneficial (adj) /ˌbenɪˈfɪʃl/ – có lợi",
          playText: "beneficial",
          ipa: "ˌbenɪˈfɪʃl",
          vi: "có lợi",
          type: "word",
        },
        {
          display: "influential (adj) /ˌɪnfluˈenʃl/ – có ảnh hưởng",
          playText: "influential",
          ipa: "ˌɪnfluˈenʃl",
          vi: "có ảnh hưởng",
          type: "word",
        },

        // -ity
        {
          display: "popularity (noun) /ˌpɒpjuˈlærəti/ – sự phổ biến",
          playText: "popularity",
          ipa: "ˌpɒpjuˈlærəti",
          vi: "sự phổ biến",
          type: "word",
        },
        {
          display: "ability (noun) /əˈbɪləti/ – khả năng",
          playText: "ability",
          ipa: "əˈbɪləti",
          vi: "khả năng",
          type: "word",
        },

        // =========================================
        // RULE 2 – MORE THAN 3 SYLLABLES, STRESS 3RD FROM THE END
        // =========================================

        // -gy
        {
          display: "ecology (noun) /iˈkɒlədʒi/ – sinh thái học",
          playText: "ecology",
          ipa: "iˈkɒlədʒi",
          vi: "sinh thái học",
          type: "word",
        },
        {
          display: "biology (noun) /baɪˈɒlədʒi/ – sinh vật học",
          playText: "biology",
          ipa: "baɪˈɒlədʒi",
          vi: "sinh vật học",
          type: "word",
        },

        // -phy
        {
          display: "photography (noun) /fəˈtɒɡrəfi/ – nhiếp ảnh",
          playText: "photography",
          ipa: "fəˈtɒɡrəfi",
          vi: "nhiếp ảnh",
          type: "word",
        },
        {
          display: "geography (noun) /dʒiˈɒɡrəfi/ – địa lý học",
          playText: "geography",
          ipa: "dʒiˈɒɡrəfi",
          vi: "địa lý học",
          type: "word",
        },

        // -cy
        {
          display: "democracy (noun) /dɪˈmɒkrəsi/ – nền dân chủ",
          playText: "democracy",
          ipa: "dɪˈmɒkrəsi",
          vi: "nền dân chủ",
          type: "word",
        },
        {
          display: "deficiency (noun) /dɪˈfɪʃnsi/ – sự thiếu hụt",
          playText: "deficiency",
          ipa: "dɪˈfɪʃnsi",
          vi: "sự thiếu hụt",
          type: "word",
        },

        // =========================================
        // PRIMARY vs SECONDARY STRESS – EXAMPLES
        // =========================================
        {
          display: "opportunity (noun) /ˌɒpəˈtjuːnəti/ – cơ hội",
          playText: "opportunity",
          ipa: "ˌɒpəˈtjuːnəti",
          vi: "cơ hội",
          type: "word",
        },
        {
          display: "preservation (noun) /ˌprezəˈveɪʃn/ – sự bảo tồn",
          playText: "preservation",
          ipa: "ˌprezəˈveɪʃn",
          vi: "sự bảo tồn",
          type: "word",
        },

        // =========================================
        // EXAMPLE SENTENCES
        // =========================================
        {
          display:
            "Conservation of forests is very important for biodiversity.",
          playText:
            "Conservation of forests is very important for biodiversity.",
          ipa: "",
          vi: "Việc bảo tồn rừng rất quan trọng đối với đa dạng sinh học.",
          type: "sentence",
        },
        {
          display:
            "Photography and geography are both popular subjects at school.",
          playText:
            "Photography and geography are both popular subjects at school.",
          ipa: "",
          vi: "Nhiếp ảnh và địa lý đều là những môn học phổ biến ở trường.",
          type: "sentence",
        },
        {
          display:
            "Her ability in scientific research makes her very influential.",
          playText:
            "Her ability in scientific research makes her very influential.",
          ipa: "",
          vi: "Khả năng nghiên cứu khoa học khiến cô ấy trở nên rất có ảnh hưởng.",
          type: "sentence",
        },
        {
          display:
            "We need more opportunities to talk about democracy and ecology.",
          playText:
            "We need more opportunities to talk about democracy and ecology.",
          ipa: "",
          vi: "Chúng ta cần nhiều cơ hội hơn để nói về dân chủ và sinh thái học.",
          type: "sentence",
        },
      ],
    },
  ],
};

export default u7;

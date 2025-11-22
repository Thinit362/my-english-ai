import { UnitPronunciation } from "../english10.pronunciation";

const u1: UnitPronunciation = {
  unit: 1,

  // Tiêu đề + phần giới thiệu chung cho Pronunciation Unit 1
  title: "Cụm phụ âm /tr/, /kr/ và /br/",
  intro: `Luyện phát âm ba cụm phụ âm đầu từ: /tr/, /kr/ và /br/.

Trong tiếng Anh, consonant clusters là những cụm gồm hai hoặc nhiều phụ âm đứng liền nhau mà không có nguyên âm xen giữa. Chúng có thể đứng ở đầu, giữa hoặc cuối từ.

Trong Unit 1, các em sẽ luyện ba cụm phụ âm rất hay gặp là /tr/, /kr/ và /br/.`,

  // Mỗi âm là 1 "trang" (page) trong phần phát âm
  pages: [
    // ====== ÂM /tr/ – PAGE 1 ======
    {
      key: "tr",
      label: "/tr/",
      title: "How to pronounce /tr/ (Cách phát âm âm /tr/)",
      description: `/tr/ được tạo thành nhờ sự kết hợp của hai âm /t/ và /r/.

• Âm /t/: đặt đầu lưỡi ở chân răng trên, phía trong để chặn luồng hơi từ cổ họng đi ra. Sau đó kéo lưỡi xuống và bật hơi ra sẽ được âm /t/. Khi đặt tay trước miệng, em sẽ cảm giác có luồng gió nhẹ bay ra.

• Âm /r/: kéo lưỡi về phía sau, cong đầu lưỡi lên để tạo một khoảng trống ở giữa miệng nhưng lưỡi không chạm vào chân răng trên. Luồng hơi đi qua khoang miệng và đầu lưỡi ra ngoài.

Khi ghép từ âm /t/ sang âm /r/, chúng ta sẽ được âm /tr/.`,
      image: "/images/pronunciation/u1-tr.png", // đổi thành đường dẫn thật nếu có

      items: [
        // Các từ ví dụ
        { text: "trick", ipa: "trɪk", vi: "trò lừa gạt", highlight: "tr" },
        { text: "track", ipa: "træk", vi: "lối mòn", highlight: "tr" },
        { text: "travel", ipa: "ˈtrævl", vi: "du lịch", highlight: "tr" },
        { text: "attract", ipa: "əˈtrækt", vi: "thu hút", highlight: "tr" },
        { text: "entrance", ipa: "ˈentrəns", vi: "lối vào", highlight: "tr" },

        // Các cụm từ ví dụ
        {
          text: "tree trunk",
          ipa: "triː trʌŋk",
          vi: "thân cây",
          highlight: "tr",
        },
        {
          text: "traffic trouble",
          ipa: "ˈtræfɪk ˈtrʌbl",
          vi: "vấn đề giao thông",
          highlight: "tr",
        },
        {
          text: "travelling by train",
          ipa: "ˈtrævlɪŋ baɪ treɪn",
          vi: "du lịch bằng tàu hỏa",
          highlight: "tr",
        },

        // Các câu ví dụ
        {
          text: "He got trapped in a traffic jam for hours.",
          ipa: "hiː gɒt træpt ɪn eɪ ˈtræfɪk dʒæm fɔːr ˈaʊəz",
          vi: "Anh ấy bị tắc đường trong nhiều giờ đồng hồ.",
          type: "sentence",
          highlight: "tr",
        },
        {
          text: "You can trust me as I always tell you the truth.",
          ipa: "juː kæn trʌst miː æz aɪ ˈɔːlweɪz tel juː ðə truːθ",
          vi: "Bạn có thể tin tưởng tôi vì tôi luôn nói cho bạn biết sự thật.",
          type: "sentence",
          highlight: "tr",
        },
        {
          text: "The treasure is buried under the tree.",
          ipa: "ðə ˈtreʒər ɪz ˈberid ˈʌndə ðə triː",
          vi: "Kho báu được chôn vùi dưới gốc cây.",
          type: "sentence",
          highlight: "tr",
        },

        // Các dạng chính tả phổ biến cho /tr/
        { text: "tree", ipa: "triː", vi: "cái cây", highlight: "tr" },
        { text: "attract", ipa: "əˈtrækt", vi: "thu hút", highlight: "tr" },

        // Phân biệt /tr/ và /tʃ/
        { text: "train", ipa: "treɪn", vi: "tàu hỏa", highlight: "tr" },
        { text: "chain", ipa: "tʃeɪn", vi: "chuỗi", highlight: "tʃ" },

        { text: "trees", ipa: "triːz", vi: "những cái cây", highlight: "tr" },
        { text: "cheese", ipa: "tʃiːz", vi: "pho mai", highlight: "tʃ" },

        { text: "treat", ipa: "triːt", vi: "đối xử", highlight: "tr" },
        { text: "cheat", ipa: "tʃiːt", vi: "lừa gạt", highlight: "tʃ" },

        { text: "trip", ipa: "trɪp", vi: "chuyến đi", highlight: "tr" },
        { text: "chip", ipa: "tʃɪp", vi: "khoai tây chiên", highlight: "tʃ" },
      ],
    },

    // ====== ÂM /kr/ – PAGE 2 ======
    {
      key: "kr",
      label: "/kr/",
      title: "How to pronounce /kr/ (Cách phát âm âm /kr/)",
      description: `/kr/ được tạo thành khi chúng ta phát âm âm /k/ nối với âm /r/.

• Âm /k/: nâng phần lưỡi sau lên cao để chặn luồng hơi từ cổ họng đi ra. Sau đó áp lực tăng lên, lưỡi bật xuống và luồng hơi thoát ra, tạo thành âm /k/. Khi chạm tay vào cổ họng, em sẽ thấy thanh quản không rung (âm vô thanh).

• Âm /r/: kéo lưỡi về phía sau, cong đầu lưỡi lên, không chạm vào chân răng trên, luồng hơi đi qua khoang miệng và đầu lưỡi ra ngoài.

Ghép /k/ với /r/ ta được âm /kr/.`,
      image: "/images/pronunciation/u1-kr.png",

      items: [
        // Các từ ví dụ
        {
          text: "creature",
          ipa: "ˈkriːtʃər",
          vi: "sinh vật",
          highlight: "kr",
        },
        { text: "crown", ipa: "kraʊn", vi: "vương miện", highlight: "kr" },
        { text: "krill", ipa: "krɪl", vi: "sinh vật phù du", highlight: "kr" },
        { text: "credit", ipa: "ˈkredɪt", vi: "tín dụng", highlight: "kr" },
        { text: "across", ipa: "əˈkrɒs", vi: "qua", highlight: "kr" },

        // Các cụm từ ví dụ
        {
          text: "a cruel crocodile",
          ipa: "eɪ krʊəl ˈkrɒkədaɪl",
          vi: "một con cá sấu dữ dằn",
          highlight: "kr",
        },
        {
          text: "a crawling creature",
          ipa: "eɪ ˈkrɔːlɪŋ ˈkriːtʃə",
          vi: "một sinh vật đang bò",
          highlight: "kr",
        },
        {
          text: "Christy's crown",
          ipa: "ˈkrɪstiz kraʊn",
          vi: "vương miện của Christy",
          highlight: "kr",
        },

        // Các câu ví dụ
        {
          text: "I'll bring cream cakes to the Christmas party.",
          ipa: "aɪl brɪŋ kriːm keɪks tuː ðə ˈkrɪsməs ˈpɑːti",
          vi: "Tôi sẽ mang bánh kem đến bữa tiệc Giáng Sinh.",
          type: "sentence",
          highlight: "kr",
        },
        {
          text: "She's crazy about ice-cream.",
          ipa: "ʃiːz ˈkreɪzi əˈbaʊt ˈaɪs ˈkriːm",
          vi: "Cô ấy rất thích kem.",
          type: "sentence",
          highlight: "kr",
        },
        {
          text: "When I was crossing the street I saw a baby crying.",
          ipa: "wen aɪ wɒz ˈkrɒsɪŋ ðə striːt aɪ sɔː ə ˈbeɪbi ˈkraɪɪŋ",
          vi: "Khi tôi đang sang đường thì tôi nhìn thấy một đứa trẻ đang khóc.",
          type: "sentence",
          highlight: "kr",
        },

        // Các dạng chính tả phổ biến
        { text: "crazy", ipa: "ˈkreɪzi", vi: "điên cuồng", highlight: "kr" },
        { text: "krill", ipa: "krɪl", vi: "sinh vật phù du", highlight: "kr" },
        {
          text: "Christmas",
          ipa: "ˈkrɪsməs",
          vi: "Giáng Sinh",
          highlight: "kr",
        },
      ],
    },

    // ====== ÂM /br/ – PAGE 3 ======
    {
      key: "br",
      label: "/br/",
      title: "How to pronounce /br/ (Cách phát âm âm /br/)",
      description: `/br/ được tạo thành nhờ sự kết hợp của hai âm /b/ và /r/.

• Âm /b/: đóng hai môi lại để chặn luồng hơi, sau đó mở miệng đẩy hơi từ phía trong ra tạo thành âm /b/. Đây là âm hữu thanh nên khi chạm tay vào cổ họng em sẽ cảm nhận được sự rung của dây thanh.

• Âm /r/: kéo lưỡi về phía sau, cong đầu lưỡi lên, không chạm vào chân răng trên. Luồng hơi đi qua khoang miệng và đầu lưỡi ra ngoài.

Kết hợp từ âm /b/ sang âm /r/ chúng ta được cụm phụ âm /br/.`,
      image: "/images/pronunciation/u1-br.png",

      items: [
        // Các từ ví dụ
        { text: "bright", ipa: "braɪt", vi: "sáng sủa", highlight: "br" },
        { text: "brush", ipa: "brʌʃ", vi: "bàn chải", highlight: "br" },
        { text: "bracket", ipa: "ˈbrækɪt", vi: "ngoặc đơn", highlight: "br" },
        { text: "brain", ipa: "breɪn", vi: "não bộ", highlight: "br" },
        {
          text: "February",
          ipa: "ˈfebruəri",
          vi: "tháng Hai",
          highlight: "br",
        },

        // Các cụm từ ví dụ
        {
          text: "brilliant brain",
          ipa: "ˈbrɪliənt breɪn",
          vi: "đầu óc thông tuệ",
          highlight: "br",
        },
        {
          text: "broken brick",
          ipa: "ˈbrəʊkən brɪk",
          vi: "gạch vỡ",
          highlight: "br",
        },
        {
          text: "a bright February day",
          ipa: "eɪ braɪt ˈfebruəri deɪ",
          vi: "một ngày tháng Hai rực rỡ",
          highlight: "br",
        },

        // Các câu ví dụ
        {
          text: "Her brother is studying abroad.",
          ipa: "hɜː ˈbrʌðər ɪz ˈstʌdiɪŋ əˈbrɔːd",
          vi: "Anh trai của cô ấy đang học ở nước ngoài.",
          type: "sentence",
          highlight: "br",
        },
        {
          text: "Brian bought some brown bread for breakfast.",
          ipa: "ˈbraɪən bɔːt sʌm braʊn bred fɔː ˈbrekfəst",
          vi: "Brian mua bánh mì nâu cho bữa sáng.",
          type: "sentence",
          highlight: "br",
        },
        {
          text: "A brave bridegroom has saved his bride.",
          ipa: "eɪ breɪv ˈbraɪdɡruːm hæz seɪvd hɪz braɪd",
          vi: "Một chú rể can đảm đã cứu sống cô dâu của mình.",
          type: "sentence",
          highlight: "br",
        },

        // Các dạng chính tả phổ biến
        { text: "bright", ipa: "braɪt", vi: "sáng sủa", highlight: "br" },
        {
          text: "abbreviation",
          ipa: "əˌbriːviˈeɪʃn",
          vi: "dạng viết rút gọn",
          highlight: "br",
        },
      ],
    },
  ],
};

export default u1;

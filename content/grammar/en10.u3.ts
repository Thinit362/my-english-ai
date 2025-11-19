import type { UnitGrammar } from "../english10.grammar";

const u3: UnitGrammar = {
  unit: 3,

  /* ======================
   *   GRAMMAR 1 – CÂU GHÉP
   * ====================== */
  grammar1: {
    title: "Compound Sentences (Câu ghép)",
    viExplain: `
<section class="space-y-6">
  <h1 class="text-2xl md:text-3xl font-bold text-center text-orange-600">
    Câu ghép (Compound Sentences)
  </h1>

  <div class="rounded-xl border border-orange-200 bg-orange-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-orange-500 text-white font-bold grid place-items-center">
        I
      </div>
      <h2 class="font-semibold text-slate-800">
        Khái niệm về câu ghép
      </h2>
    </div>

    <p class="text-sm text-slate-700">
      Câu ghép được tạo bởi <b>ít nhất hai mệnh đề độc lập (independent clause)</b>. 
      Các mệnh đề này thường được nối với nhau bằng <b>liên từ kết hợp (coordinating conjunction)</b> 
      và thường có <b>dấu phẩy</b> đứng trước liên từ:
    </p>

    <p class="mt-2 text-sm font-mono bg-white/60 inline-block px-2 py-1 rounded border border-orange-100">
      Independent clause 1, coordinating conjunction + independent clause 2
    </p>
  </div>

  <div class="rounded-xl border border-sky-200 bg-sky-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-sky-500 text-white font-bold grid place-items-center">
        II
      </div>
      <h2 class="font-semibold text-slate-800">
        Liên từ kết hợp trong câu ghép – FANBOYS
      </h2>
    </div>

    <p class="text-sm text-slate-700 mb-3">
      Trong tiếng Anh có 7 liên từ kết hợp: <b>for, and, nor, but, or, yet, so</b>. 
      Ta có thể ghi nhớ bằng cụm từ&nbsp;<b>FANBOYS</b>.
    </p>

    <table class="w-full text-sm text-center border border-sky-200 bg-white">
      <thead class="bg-sky-100/70">
        <tr>
          <th class="border border-sky-200 px-2 py-1">For</th>
          <th class="border border-sky-200 px-2 py-1">And</th>
          <th class="border border-sky-200 px-2 py-1">Nor</th>
          <th class="border border-sky-200 px-2 py-1">But</th>
          <th class="border border-sky-200 px-2 py-1">Or</th>
          <th class="border border-sky-200 px-2 py-1">Yet</th>
          <th class="border border-sky-200 px-2 py-1">So</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-xs text-slate-700">
          <td class="border border-sky-200 px-2 py-1">bởi vì</td>
          <td class="border border-sky-200 px-2 py-1">và</td>
          <td class="border border-sky-200 px-2 py-1">cũng không</td>
          <td class="border border-sky-200 px-2 py-1">nhưng</td>
          <td class="border border-sky-200 px-2 py-1">hoặc là</td>
          <td class="border border-sky-200 px-2 py-1">tuy nhiên</td>
          <td class="border border-sky-200 px-2 py-1">vì thế / cho nên</td>
        </tr>
      </tbody>
    </table>

    <p class="mt-3 text-xs text-slate-600 italic">
      * Lưu ý với <b>nor</b>, mệnh đề phía sau thường dùng <b>đảo ngữ</b>: 
      <code>..., nor + trợ động từ + S</code>.
    </p>
  </div>
</section>
    `,
    examples: [
      {
        en: "He is very handsome, and he speaks English very well.",
        vi: "Anh ấy rất đẹp trai và anh ấy nói tiếng Anh rất hay."
      },
      {
        en: "She is a talented singer, so many people admire her.",
        vi: "Cô ấy là một ca sĩ tài năng nên rất nhiều người hâm mộ cô ấy."
      },
      {
        en: "She likes eating fruits, for they are good for her health.",
        vi: "Cô ấy thích ăn hoa quả vì chúng tốt cho sức khỏe."
      },
      {
        en: "I don't believe his words, for he used to lie to me.",
        vi: "Tôi không tin lời anh ta vì anh ta đã từng nói dối tôi."
      },
      {
        en: "He was tired, and he had a headache.",
        vi: "Anh ấy mệt và anh ấy bị đau đầu."
      },
      {
        en: "American Idol began in 2002, and it quickly gained popularity.",
        vi: "Chương trình Thần tượng Âm nhạc Mỹ bắt đầu năm 2002 và nhanh chóng được yêu thích."
      },
      {
        en: "She was not in the back yard, nor was she in the kitchen.",
        vi: "Cô ấy không ở sân sau, cũng không ở trong bếp."
      },
      {
        en: "This house is big, but that house is bigger.",
        vi: "Căn nhà này to, nhưng căn nhà kia to hơn."
      },
      {
        en: "I like Pop music, but my brother likes Rock.",
        vi: "Tôi thích nhạc Pop, nhưng anh trai tôi thích nhạc Rock."
      },
      {
        en: "You can take a bus, or you can ride a bike to the cinema.",
        vi: "Bạn có thể đi xe buýt, hoặc đi xe đạp đến rạp chiếu phim."
      },
      {
        en: "You have to get up early, or you'll be late for school.",
        vi: "Con phải dậy sớm, nếu không con sẽ đi học muộn."
      },
      {
        en: "She is quiet, yet she is an outgoing girl.",
        vi: "Cô ấy khá trầm tính, nhưng lại là một cô gái hòa đồng."
      },
      {
        en: "She said she wouldn't come, yet I still waited for her.",
        vi: "Cô ấy nói sẽ không đến, nhưng tôi vẫn chờ cô ấy."
      },
      {
        en: "This word is strange, so you can look it up in the dictionary.",
        vi: "Từ này khá lạ nên bạn có thể tra trong từ điển."
      },
      {
        en: "It was raining, so we did not go out.",
        vi: "Trời đang mưa, vì vậy chúng tôi không ra ngoài."
      }
    ]
  },

  /* ===========================================
   *   GRAMMAR 2 – TO-INFINITIVES & BARE INFINITIVES
   * =========================================== */
  grammar2: {
    title: "To-infinitives and Bare infinitives",
    viExplain: `
<section class="space-y-6">
  <h1 class="text-2xl md:text-3xl font-bold text-center text-orange-600">
    To-infinitives and bare infinitives
  </h1>

  <!-- I. TO-INFINITIVES -->
  <div class="rounded-xl border border-orange-200 bg-orange-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-orange-500 text-white font-bold grid place-items-center">
        I
      </div>
      <h2 class="font-semibold text-slate-800">
        To-infinitives
      </h2>
    </div>

    <h3 class="font-semibold text-orange-700 mb-1">
      1. Verbs + to-infinitives
    </h3>
    <p class="text-sm text-slate-700 mb-2">
      Chúng ta sử dụng động từ nguyên thể <b>có to</b> sau một số động từ như trong bảng sau:
    </p>

    <!-- Bảng 1: Verbs + to-infinitives -->
    <div class="overflow-x-auto">
      <table class="min-w-full text-sm text-center border border-orange-200 bg-white">
        <tbody>
          <tr class="bg-orange-50 font-semibold">
            <td class="border border-orange-200 px-3 py-1">agree</td>
            <td class="border border-orange-200 px-3 py-1">begin</td>
            <td class="border border-orange-200 px-3 py-1">decide</td>
            <td class="border border-orange-200 px-3 py-1">determine</td>
          </tr>
          <tr class="text-xs text-orange-700">
            <td class="border border-orange-200 px-2 py-1">đồng ý</td>
            <td class="border border-orange-200 px-2 py-1">bắt đầu</td>
            <td class="border border-orange-200 px-2 py-1">quyết định</td>
            <td class="border border-orange-200 px-2 py-1">quyết tâm</td>
          </tr>

          <tr class="bg-orange-50 font-semibold">
            <td class="border border-orange-200 px-3 py-1">expect</td>
            <td class="border border-orange-200 px-3 py-1">forget</td>
            <td class="border border-orange-200 px-3 py-1">hesitate</td>
            <td class="border border-orange-200 px-3 py-1">hope</td>
          </tr>
          <tr class="text-xs text-orange-700">
            <td class="border border-orange-200 px-2 py-1">mong đợi</td>
            <td class="border border-orange-200 px-2 py-1">quên</td>
            <td class="border border-orange-200 px-2 py-1">do dự</td>
            <td class="border border-orange-200 px-2 py-1">hi vọng</td>
          </tr>

          <tr class="bg-orange-50 font-semibold">
            <td class="border border-orange-200 px-3 py-1">intend</td>
            <td class="border border-orange-200 px-3 py-1">learn</td>
            <td class="border border-orange-200 px-3 py-1">offer</td>
            <td class="border border-orange-200 px-3 py-1">plan</td>
          </tr>
          <tr class="text-xs text-orange-700">
            <td class="border border-orange-200 px-2 py-1">dự định</td>
            <td class="border border-orange-200 px-2 py-1">học</td>
            <td class="border border-orange-200 px-2 py-1">đưa ra đề nghị</td>
            <td class="border border-orange-200 px-2 py-1">lên kế hoạch</td>
          </tr>

          <tr class="bg-orange-50 font-semibold">
            <td class="border border-orange-200 px-3 py-1">prefer</td>
            <td class="border border-orange-200 px-3 py-1">promise</td>
            <td class="border border-orange-200 px-3 py-1">refuse</td>
            <td class="border border-orange-200 px-3 py-1">tend</td>
          </tr>
          <tr class="text-xs text-orange-700">
            <td class="border border-orange-200 px-2 py-1">thích / ưa</td>
            <td class="border border-orange-200 px-2 py-1">hứa</td>
            <td class="border border-orange-200 px-2 py-1">từ chối</td>
            <td class="border border-orange-200 px-2 py-1">có xu hướng</td>
          </tr>

          <tr class="bg-orange-50 font-semibold">
            <td class="border border-orange-200 px-3 py-1">try</td>
            <td class="border border-orange-200 px-3 py-1">seem</td>
            <td class="border border-orange-200 px-3 py-1">want</td>
            <td class="border border-orange-200 px-3 py-1">wish</td>
          </tr>
          <tr class="text-xs text-orange-700">
            <td class="border border-orange-200 px-2 py-1">cố gắng</td>
            <td class="border border-orange-200 px-2 py-1">dường như</td>
            <td class="border border-orange-200 px-2 py-1">muốn</td>
            <td class="border border-orange-200 px-2 py-1">ước</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="mt-5 font-semibold text-orange-700 mb-1">
      2. Verbs + O + to-infinitives
    </h3>
    <p class="text-sm text-slate-700 mb-2">
      Một số động từ đi kèm <b>tân ngữ + to-infinitive</b> như trong bảng sau:
    </p>

    <!-- Bảng 2: Verbs + O + to-infinitives -->
    <div class="overflow-x-auto">
      <table class="min-w-full text-sm text-center border border-orange-200 bg-white">
        <tbody>
          <tr class="bg-orange-100 font-semibold">
            <td class="border border-orange-200 px-3 py-1">advise</td>
            <td class="border border-orange-200 px-3 py-1">allow</td>
            <td class="border border-orange-200 px-3 py-1">ask</td>
            <td class="border border-orange-200 px-3 py-1">cause</td>
          </tr>
          <tr class="text-xs text-green-700">
            <td class="border border-orange-200 px-2 py-1">khuyên</td>
            <td class="border border-orange-200 px-2 py-1">cho phép</td>
            <td class="border border-orange-200 px-2 py-1">yêu cầu</td>
            <td class="border border-orange-200 px-2 py-1">gây ra</td>
          </tr>

          <tr class="bg-orange-100 font-semibold">
            <td class="border border-orange-200 px-3 py-1">convince</td>
            <td class="border border-orange-200 px-3 py-1">encourage</td>
            <td class="border border-orange-200 px-3 py-1">expect</td>
            <td class="border border-orange-200 px-3 py-1">force</td>
          </tr>
          <tr class="text-xs text-green-700">
            <td class="border border-orange-200 px-2 py-1">thuyết phục</td>
            <td class="border border-orange-200 px-2 py-1">khuyến khích</td>
            <td class="border border-orange-200 px-2 py-1">mong đợi</td>
            <td class="border border-orange-200 px-2 py-1">ép buộc</td>
          </tr>

          <tr class="bg-orange-100 font-semibold">
            <td class="border border-orange-200 px-3 py-1">hire</td>
            <td class="border border-orange-200 px-3 py-1">instruct</td>
            <td class="border border-orange-200 px-3 py-1">invite</td>
            <td class="border border-orange-200 px-3 py-1">need</td>
          </tr>
          <tr class="text-xs text-green-700">
            <td class="border border-orange-200 px-2 py-1">thuê</td>
            <td class="border border-orange-200 px-2 py-1">hướng dẫn</td>
            <td class="border border-orange-200 px-2 py-1">mời</td>
            <td class="border border-orange-200 px-2 py-1">cần</td>
          </tr>

          <tr class="bg-orange-100 font-semibold">
            <td class="border border-orange-200 px-3 py-1">persuade</td>
            <td class="border border-orange-200 px-3 py-1">require</td>
            <td class="border border-orange-200 px-3 py-1">teach</td>
            <td class="border border-orange-200 px-3 py-1">want</td>
          </tr>
          <tr class="text-xs text-green-700">
            <td class="border border-orange-200 px-2 py-1">thuyết phục</td>
            <td class="border border-orange-200 px-2 py-1">yêu cầu</td>
            <td class="border border-orange-200 px-2 py-1">dạy</td>
            <td class="border border-orange-200 px-2 py-1">muốn</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="mt-5 font-semibold text-orange-700 mb-1">
      3. Một số cấu trúc với to-infinitives
    </h3>
    <ul class="list-disc pl-5 text-sm text-slate-700 space-y-1">
      <li><b>enough to V</b> – đủ để làm gì</li>
      <li><b>whether to V</b> – liệu có (nên) làm hay không</li>
      <li><b>It's + adj + to V</b> – Thật … khi làm gì</li>
      <li><b>to be about to V</b> – sắp làm gì</li>
    </ul>
  </div>

  <!-- II. BARE INFINITIVES -->
  <div class="rounded-xl border border-sky-200 bg-sky-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-sky-500 text-white font-bold grid place-items-center">
        II
      </div>
      <h2 class="font-semibold text-slate-800">
        Bare infinitives
      </h2>
    </div>

    <h3 class="font-semibold text-sky-700 mb-1">
      1. Verbs + O + bare infinitives
    </h3>
    <p class="text-sm text-slate-700 mb-2">
      Với các động từ dưới đây, ta dùng <b>động từ nguyên thể không to</b> sau tân ngữ:
    </p>

    <!-- Bảng 3: Verbs + O + bare infinitives -->
    <div class="overflow-x-auto">
      <table class="min-w-full text-sm text-center border border-sky-200 bg-white">
        <tbody>
          <tr class="bg-sky-50 font-semibold">
            <td class="border border-sky-200 px-3 py-1">feel</td>
            <td class="border border-sky-200 px-3 py-1">find</td>
            <td class="border border-sky-200 px-3 py-1">have</td>
          </tr>
          <tr class="text-xs text-sky-700">
            <td class="border border-sky-200 px-2 py-1">cảm thấy</td>
            <td class="border border-sky-200 px-2 py-1">nhận thấy</td>
            <td class="border border-sky-200 px-2 py-1">có, nhờ</td>
          </tr>

          <tr class="bg-sky-50 font-semibold">
            <td class="border border-sky-200 px-3 py-1">hear</td>
            <td class="border border-sky-200 px-3 py-1">help</td>
            <td class="border border-sky-200 px-3 py-1">notice</td>
          </tr>
          <tr class="text-xs text-sky-700">
            <td class="border border-sky-200 px-2 py-1">nghe thấy</td>
            <td class="border border-sky-200 px-2 py-1">giúp</td>
            <td class="border border-sky-200 px-2 py-1">để ý thấy</td>
          </tr>

          <tr class="bg-sky-50 font-semibold">
            <td class="border border-sky-200 px-3 py-1">make</td>
            <td class="border border-sky-200 px-3 py-1">let</td>
            <td class="border border-sky-200 px-3 py-1">see</td>
          </tr>
          <tr class="text-xs text-sky-700">
            <td class="border border-sky-200 px-2 py-1">làm cho, khiến</td>
            <td class="border border-sky-200 px-2 py-1">để, cho</td>
            <td class="border border-sky-200 px-2 py-1">nhìn thấy</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="mt-4 font-semibold text-sky-700 mb-1">
      2. Modal verbs + bare infinitives
    </h3>
    <p class="text-sm text-slate-700">
      Sau các <b>động từ khuyết thiếu</b> như <i>can, could, should, may, might, must, will…</i> 
      ta cũng dùng <b>động từ nguyên thể không to</b>.
    </p>
  </div>
</section>
    `,
    examples: [
      // To-infinitive: verbs + to V
      {
        en: "He began to post his homemade videos on the Internet in 2010.",
        vi: "Anh ấy bắt đầu đăng các video tự làm lên mạng vào năm 2010."
      },
      {
        en: "Julia is planning to travel abroad next month.",
        vi: "Julia dự định đi du lịch nước ngoài vào tháng tới."
      },
      {
        en: "Do you want to start early?",
        vi: "Bạn có muốn bắt đầu sớm không?"
      },
      {
        en: "The music band has decided to cancel the performance.",
        vi: "Ban nhạc đã quyết định hủy buổi biểu diễn."
      },

      // Verbs + O + to V
      {
        en: "She invited me to join her birthday party.",
        vi: "Cô ấy mời tôi tham dự bữa tiệc sinh nhật."
      },
      {
        en: "They don't allow me to smoke in this room.",
        vi: "Họ không cho phép tôi hút thuốc trong phòng này."
      },
      {
        en: "His parents expect him to win the singing contest.",
        vi: "Bố mẹ anh ấy mong anh ấy chiến thắng cuộc thi hát."
      },
      {
        en: "My father encourages me to learn to play the piano.",
        vi: "Bố tôi động viên tôi học chơi đàn piano."
      },

      // Cấu trúc với to V
      {
        en: "He is strong enough to lift this bag.",
        vi: "Anh ấy đủ khỏe để nhấc chiếc túi này."
      },
      {
        en: "I don't have enough money to buy the ticket.",
        vi: "Tôi không có đủ tiền để mua vé."
      },
      {
        en: "I don't know whether to phone her or not.",
        vi: "Tôi không biết có nên gọi điện cho cô ấy hay không."
      },
      {
        en: "It's dangerous to ride a motorcycle without a helmet.",
        vi: "Đi xe máy mà không đội mũ bảo hiểm thì rất nguy hiểm."
      },
      {
        en: "They're about to start.",
        vi: "Họ sắp sửa bắt đầu."
      },

      // Bare infinitive: verbs + O + V
      {
        en: "Please let me know the reason why you don't listen to me.",
        vi: "Hãy cho mẹ biết lý do tại sao con không nghe lời."
      },
      {
        en: "This song made all the audiences cry.",
        vi: "Bài hát này khiến tất cả khán giả đều khóc."
      },
      {
        en: "My friend helped me buy Taylor Swift's new CD.",
        vi: "Bạn tôi đã giúp tôi mua đĩa CD mới của Taylor Swift."
      },
      {
        en: "I see the boy in yellow kick the ball.",
        vi: "Tôi thấy cậu bé mặc áo vàng đá quả bóng."
      },
      {
        en: "I'll have Peter fix my electric bike.",
        vi: "Tôi sẽ nhờ Peter sửa chiếc xe điện của tôi."
      },

      // Modal verb + bare infinitive
      {
        en: "You should go to the supermarket to buy more food.",
        vi: "Bạn nên đi siêu thị để mua thêm đồ ăn."
      },
      {
        en: "He could play the piano when he was five.",
        vi: "Anh ấy có thể chơi đàn piano khi mới 5 tuổi."
      }
    ]
  }
};

export default u3;

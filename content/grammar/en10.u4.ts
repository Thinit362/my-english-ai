import type { UnitGrammar } from "../english10.grammar";

const u4: UnitGrammar = {
  unit: 4,

  /* ==========================================
   *   GRAMMAR – PAST SIMPLE & PAST CONTINUOUS
   * ========================================== */
  grammar1: {
    title: "Past Simple & Past Continuous",
    viExplain: `
<section class="space-y-6">
  <h1 class="text-2xl md:text-3xl font-bold text-center text-orange-600">
    Thì Quá khứ đơn & Thì Quá khứ tiếp diễn
  </h1>

  <!-- I. DẠNG THỨC CỦA ĐỘNG TỪ -->
  <div class="rounded-xl border border-orange-200 bg-orange-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-orange-500 text-white font-bold grid place-items-center">
        I
      </div>
      <h2 class="font-semibold text-slate-800">
        Dạng thức của động từ
      </h2>
    </div>

    <!-- 1. Past Simple -->
    <h3 class="font-semibold text-orange-700 mb-1">
      1. Thì Quá khứ đơn (Past Simple)
    </h3>

    <p class="text-sm text-slate-700 mb-1 font-semibold">
      a. Động từ <i>to be</i>
    </p>
    <p class="text-sm text-slate-700 mb-2">
      <b>S + was / were + ...</b><br>
      • <b>was</b> đi với: I, He, She, It, ...<br>
      • <b>were</b> đi với: You, We, They và các chủ ngữ số nhiều khác.
    </p>

    <p class="text-sm text-slate-700 mb-1 font-semibold">
      b. Động từ thường
    </p>
    <p class="text-sm text-slate-700">
      <b>S + V-ed</b> (động từ có quy tắc) hoặc <b>S + V2</b> (động từ bất quy tắc).<br>
      • Động từ có quy tắc: thêm <b>-ed</b> (work → worked, play → played, ...).<br>
      • Động từ bất quy tắc: đổi sang dạng quá khứ đặc biệt (go → went, see → saw, ...).
    </p>

    <p class="mt-2 text-sm font-mono bg-white/60 inline-block px-2 py-1 rounded border border-orange-100">
      He visited some palaces. (visit → visited)
    </p>
    <p class="mt-1 text-sm font-mono bg-white/60 inline-block px-2 py-1 rounded border border-orange-100">
      It began to rain. (begin → began)
    </p>

    <!-- 2. Past Continuous -->
    <h3 class="font-semibold text-orange-700 mt-5 mb-1">
      2. Thì Quá khứ tiếp diễn (Past Continuous)
    </h3>

    <p class="text-sm text-slate-700">
      <b>S + was / were + V-ing + ...</b><br>
      • <b>was</b>: I, He, She, It, ...<br>
      • <b>were</b>: You, We, They và các chủ ngữ số nhiều khác.
    </p>

    <p class="mt-2 text-sm font-mono bg-white/60 inline-block px-2 py-1 rounded border border-orange-100">
      Andy was staying in Paris.
    </p>
    <p class="mt-1 text-sm font-mono bg-white/60 inline-block px-2 py-1 rounded border border-orange-100">
      We were walking in the park.
    </p>
  </div>

  <!-- II. KHÁC BIỆT TRONG CÁCH SỬ DỤNG -->
  <div class="rounded-xl border border-sky-200 bg-sky-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-sky-500 text-white font-bold grid place-items-center">
        II
      </div>
      <h2 class="font-semibold text-slate-800">
        Khác biệt trong các cách sử dụng
      </h2>
    </div>

    <!-- 1. Difference 1 -->
    <h3 class="font-semibold text-sky-700 mb-1">
      1. Tập trung vào <i>kết quả đã xong</i> hay <i>hành động đang diễn ra</i>?
    </h3>

    <ul class="list-disc pl-5 text-sm text-slate-700 space-y-1">
      <li>
        <b>Quá khứ đơn</b>: diễn tả hành động <b>đã hoàn thành</b> tại một thời điểm trong quá khứ.
      </li>
      <li>
        <b>Quá khứ tiếp diễn</b>: nhấn mạnh hành động <b>đang diễn ra</b> tại một thời điểm trong quá khứ.
      </li>
    </ul>

    <div class="mt-2 space-y-1 text-sm">
      <p class="font-mono bg-white px-2 py-1 rounded border border-sky-200">
        I did my homework at 4 p.m. yesterday.
      </p>
      <p class="text-xs text-slate-600">
        → Tớ <b>đã làm xong</b> bài tập lúc 4 giờ chiều hôm qua.
      </p>

      <p class="font-mono bg-white px-2 py-1 rounded border border-sky-200">
        I was doing my homework at 4 p.m. yesterday.
      </p>
      <p class="text-xs text-slate-600">
        → Tớ <b>đang làm</b> bài tập vào lúc 4 giờ chiều hôm qua (chưa nhấn mạnh là xong hay chưa).
      </p>
    </div>

    <div class="mt-3 space-y-1 text-sm">
      <p class="font-mono bg-white px-2 py-1 rounded border border-sky-200">
        My parents got up at 5.30 a.m. yesterday.
      </p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-sky-200">
        My sister and I were sleeping at 5.30 a.m. yesterday.
      </p>
    </div>

    <!-- 2. Difference 2 -->
    <h3 class="font-semibold text-sky-700 mt-5 mb-1">
      2. Chuỗi hành động nối tiếp hay các hành động song song?
    </h3>

    <ul class="list-disc pl-5 text-sm text-slate-700 space-y-1">
      <li>
        <b>Quá khứ đơn</b>: diễn tả <b>một chuỗi hành động</b> xảy ra lần lượt trong quá khứ.
        Thường dùng với <i>and, then</i>.
      </li>
      <li>
        <b>Quá khứ tiếp diễn</b>: diễn tả <b>hai hành động xảy ra đồng thời</b>, thường dùng liên từ
        <b>while</b> (trong khi).
      </li>
    </ul>

    <div class="mt-2 space-y-1 text-sm">
      <p class="font-mono bg-white px-2 py-1 rounded border border-sky-200">
        She came home, opened the window and turned on the TV.
      </p>
      <p class="text-xs text-slate-600">
        → Cô ấy về nhà, mở cửa sổ rồi bật tivi (các hành động nối tiếp).
      </p>

      <p class="font-mono bg-white px-2 py-1 rounded border border-sky-200">
        She was watching TV while her husband was cooking.
      </p>
      <p class="text-xs text-slate-600">
        → Cô ấy đang xem tivi trong khi chồng cô ấy đang nấu cơm (hai hành động cùng lúc).
      </p>
    </div>

    <div class="mt-2 space-y-1 text-sm">
      <p class="font-mono bg-white px-2 py-1 rounded border border-sky-200">
        She came in the room and then looked around for a seat.
      </p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-sky-200">
        He was playing a mobile game while the teacher was speaking.
      </p>
    </div>
  </div>

  <!-- III. KẾT HỢP PAST SIMPLE & PAST CONTINUOUS -->
  <div class="rounded-xl border border-purple-200 bg-purple-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-purple-500 text-white font-bold grid place-items-center">
        III
      </div>
      <h2 class="font-semibold text-slate-800">
        Kết hợp Quá khứ đơn và Quá khứ tiếp diễn
      </h2>
    </div>

    <p class="text-sm text-slate-700 mb-2">
      Dùng <b>when</b> hoặc <b>while</b> để nói về một hành động đang diễn ra thì
      <b>có hành động khác xen vào</b>.
    </p>

    <ul class="list-disc pl-5 text-sm text-slate-700 space-y-1">
      <li>
        Hành động <b>đang diễn ra (dài hơn)</b> → dùng <b>Quá khứ tiếp diễn</b>, đi với <b>while</b> hoặc <b>when</b>.
      </li>
      <li>
        Hành động <b>xen vào (ngắn, xảy ra đột ngột)</b> → dùng <b>Quá khứ đơn</b>, thường đi với <b>when</b>.
      </li>
    </ul>

    <p class="mt-2 text-xs text-slate-600 italic">
      Lưu ý:<br>
      • When/While đứng đầu câu → cần dấu phẩy ngăn cách hai mệnh đề.<br>
      • When/While đứng giữa câu → không cần dấu phẩy.<br>
      • Không dùng <b>when</b> và <b>while</b> cùng lúc trong một câu.
    </p>

    <div class="mt-3 space-y-1 text-sm">
      <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200">
        When the phone rang, we were having dinner.
      </p>
      <p class="text-xs text-slate-600">
        → Khi điện thoại kêu, chúng tôi đang ăn tối.
      </p>

      <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200">
        The phone rang while we were having dinner.
      </p>
      <p class="text-xs text-slate-600">
        → Điện thoại kêu trong khi chúng tôi đang ăn tối.
      </p>
    </div>

    <div class="mt-2 space-y-1 text-sm">
      <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200">
        When the teacher asked me a question, I wasn't listening.
      </p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200">
        We arrived at school while it was raining. / We arrived at school when it was raining.
      </p>
    </div>
  </div>

  <!-- IV. BẢNG ĐỘNG TỪ BẤT QUY TẮC -->
  <div class="rounded-xl border border-green-200 bg-green-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-green-600 text-white font-bold grid place-items-center">
        IV
      </div>
      <h2 class="font-semibold text-slate-800">
        Một số động từ bất quy tắc thường gặp
      </h2>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full text-sm text-center border border-green-200 bg-white">
        <tbody>
          <tr class="bg-green-50 font-semibold">
            <td class="border px-3 py-1">become → became</td>
            <td class="border px-3 py-1">go → went</td>
            <td class="border px-3 py-1">ring → rang</td>
          </tr>
          <tr>
            <td class="border px-3 py-1">bring → brought</td>
            <td class="border px-3 py-1">have → had</td>
            <td class="border px-3 py-1">see → saw</td>
          </tr>
          <tr class="bg-green-50">
            <td class="border px-3 py-1">buy → bought</td>
            <td class="border px-3 py-1">make → made</td>
            <td class="border px-3 py-1">teach → taught</td>
          </tr>
          <tr>
            <td class="border px-3 py-1">do → did</td>
            <td class="border px-3 py-1">meet → met</td>
            <td class="border px-3 py-1">wear → wore</td>
          </tr>
          <tr class="bg-green-50">
            <td class="border px-3 py-1">get → got</td>
            <td class="border px-3 py-1">read → read</td>
            <td class="border px-3 py-1">write → wrote</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
    `,
    examples: [
      // Cấu trúc cơ bản
      { en: "He visited some palaces.", vi: "Cậu ấy đã đi thăm một số lâu đài." },
      { en: "It began to rain.", vi: "Trời đã bắt đầu mưa." },
      { en: "Andy was staying in Paris.", vi: "Andy đang ở Paris." },
      { en: "We were walking in the park.", vi: "Chúng tôi đang đi bộ trong công viên." },

      // Khác biệt 1
      { en: "I did my homework at 4 p.m. yesterday.", vi: "Tớ đã làm xong bài tập lúc 4 giờ chiều hôm qua." },
      { en: "I was doing my homework at 4 p.m. yesterday.", vi: "Tớ đang làm bài tập vào lúc 4 giờ chiều hôm qua." },
      { en: "My parents got up at 5.30 a.m. yesterday.", vi: "Sáng hôm qua bố mẹ tớ dậy lúc 5 giờ 30." },
      { en: "My sister and I were sleeping at 5.30 a.m. yesterday.", vi: "Chị tớ và tớ vẫn đang ngủ lúc 5 giờ 30 sáng qua." },

      // Khác biệt 2
      { en: "She came home, opened the window and turned on the TV.", vi: "Cô ấy về nhà, mở cửa sổ và bật tivi." },
      { en: "She was watching TV while her husband was cooking.", vi: "Cô ấy đang xem tivi trong khi chồng cô ấy đang nấu cơm." },
      { en: "She came in the room and then looked around for a seat.", vi: "Cô ấy vào phòng rồi nhìn quanh để tìm một chỗ ngồi." },
      { en: "He was playing a mobile game while the teacher was speaking.", vi: "Cậu ấy đang chơi game trên điện thoại trong khi cô giáo đang giảng bài." },

      // Kết hợp when / while
      { en: "When the phone rang, we were having dinner.", vi: "Khi điện thoại kêu, chúng tôi đang ăn tối." },
      { en: "The phone rang while we were having dinner.", vi: "Điện thoại kêu trong khi chúng tôi đang ăn tối." },
      { en: "When the teacher asked me a question, I wasn't listening.", vi: "Khi cô giáo hỏi tôi một câu, tôi đã không chú ý lắng nghe." },
      { en: "We arrived at school while it was raining.", vi: "Chúng tôi đến trường trong khi trời đang mưa." },
      { en: "We arrived at school when it was raining.", vi: "Chúng tôi đến trường khi trời đang mưa." }
    ]
  }
};

export default u4;

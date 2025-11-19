// content/grammar/en10.u2.ts
import type { UnitGrammar } from "../english10.grammar";

const u2: UnitGrammar = {
  unit: 2,

  /** ===== Grammar 1: Will vs. Be going to ===== */
  grammar1: {
    title: "Will vs. Be going to (Tương lai đơn & Tương lai gần)",
    viExplain: `
<section class="space-y-6">

  <!-- Tiêu đề lớn -->
  <h1 class="text-2xl md:text-3xl font-bold text-center text-orange-600 uppercase">
    Phân biệt TƯƠNG LAI ĐƠN (WILL) và TƯƠNG LAI GẦN (BE GOING TO)
  </h1>

  <p class="text-sm text-slate-700">
    Trong bài học này, các em ôn lại hai cách diễn đạt tương lai: 
    <b>will</b> (thì tương lai đơn) và <b>be going to</b> (tương lai gần),
    tập trung vào <b>dạng thức</b> và <b>cách dùng</b>.
  </p>

  <!-- Khối I -->
  <div class="rounded-xl border border-orange-200 bg-orange-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-orange-500 text-white font-bold grid place-items-center">
        I
      </div>
      <h2 class="font-semibold text-slate-800">
        Khác biệt trong dạng thức của động từ
      </h2>
    </div>

    <h3 class="font-semibold text-orange-700 mb-1">
      Dạng thức với <i>will</i> và <i>be going to</i>
    </h3>

    <h4 class="font-semibold text-slate-800 underline decoration-orange-400">
      1. Will (Tương lai đơn)
    </h4>
    <p class="text-sm text-slate-700 mb-2">
      Cấu trúc: 
      <code class="bg-white/70 px-1 py-0.5 rounded border border-orange-100">
        S + will + V
      </code>
    </p>

    <h4 class="font-semibold text-slate-800 underline decoration-orange-400">
      2. Be going to (Tương lai gần)
    </h4>
    <p class="text-sm text-slate-700 mb-3">
      Cấu trúc:
      <code class="bg-white/70 px-1 py-0.5 rounded border border-orange-100">
        S + am / is / are + going to + V
      </code>
    </p>

    <p class="font-semibold text-slate-800 mb-1">Ví dụ:</p>
    <p class="text-blue-700 text-sm">She will eat less fast food.</p>
    <p class="text-gray-600 italic text-sm mb-2">
      (Cô ấy sẽ hạn chế ăn đồ ăn nhanh.)
    </p>

    <p class="text-blue-700 text-sm">We are going to try aromatherapy.</p>
    <p class="text-gray-600 italic text-sm">
      (Chúng tôi sẽ thử liệu pháp trị liệu bằng tinh dầu thơm.)
    </p>
  </div>

  <!-- Khối II -->
  <div class="rounded-xl border border-orange-200 bg-white p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-orange-500 text-white font-bold grid place-items-center">
        II
      </div>
      <h2 class="font-semibold text-slate-800">
        Khác biệt trong cách dùng
      </h2>
    </div>

    <h3 class="font-semibold text-slate-800 underline decoration-orange-400">
      1. Will – quyết định tức thời
    </h3>
    <p class="text-sm text-slate-700 mb-2">
      <b>Will</b> dùng cho <b>quyết định đưa ra ngay lúc nói</b>, chưa được chuẩn bị hay lên kế hoạch từ trước.
    </p>

    <h3 class="font-semibold text-slate-800 underline decoration-orange-400">
      2. Be going to – dự định, kế hoạch đã có sẵn
    </h3>
    <p class="text-sm text-slate-700">
      <b>Be going to</b> dùng để diễn tả <b>dự định / kế hoạch đã có sẵn</b> 
      trước thời điểm nói; người nói đã suy nghĩ hoặc chuẩn bị từ trước.
    </p>
  </div>

  <!-- Khối III -->
  <div class="rounded-xl border border-sky-200 bg-sky-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-sky-500 text-white font-bold grid place-items-center">
        III
      </div>
      <h2 class="font-semibold text-slate-800">
        Một số cách sử dụng khác của <i>will</i>
      </h2>
    </div>

    <ul class="list-decimal pl-5 text-sm text-slate-700 space-y-2">
      <li>
        <b>Request (yêu cầu)</b>: 
        dùng <code>Will you + V ... ?</code> để lịch sự yêu cầu ai đó làm gì.
      </li>
      <li>
        <b>Offer (đề nghị giúp đỡ)</b>: 
        người nói chủ động đề nghị giúp đỡ người khác.
      </li>
      <li>
        <b>Promise (lời hứa)</b>: 
        đưa ra lời hứa sẽ (hoặc sẽ không) làm điều gì.
      </li>
      <li>
        <b>Invitation (lời mời)</b>: 
        mời ai đó ăn uống, tham gia hoạt động, v.v.
      </li>
      <li>
        <b>Refusal (từ chối / không sẵn lòng)</b>: 
        dùng dạng phủ định <b>won't</b> để thể hiện sự từ chối hoặc một vật “không chịu” hoạt động.
      </li>
      <li>
        <b>Threat / Warning (đe doạ, cảnh cáo)</b>: 
        cảnh báo hậu quả trong tương lai nếu ai đó không làm hoặc làm một việc nào đó.
      </li>
    </ul>
  </div>
</section>
    `,
    examples: [
      {
        en: "She will eat less fast food.",
        vi: "Cô ấy sẽ hạn chế ăn đồ ăn nhanh.",
      },
      {
        en: "We are going to try aromatherapy.",
        vi: "Chúng tôi sẽ thử liệu pháp trị liệu bằng tinh dầu thơm.",
      },
      {
        en: "Will you show me how to use a computer?",
        vi: "Cháu chỉ cho bác cách sử dụng máy tính được không?",
      },
      {
        en: "Will you help me move this table?",
        vi: "Cậu giúp tớ di chuyển cái bàn này được không?",
      },
      {
        en: "The bags look heavy. I will carry them for you.",
        vi: "Những cái túi đó trông có vẻ nặng. Mình sẽ xách cho cậu.",
      },
      {
        en: "The stadium is far from here. I will drive you there.",
        vi: "Sân vận động khá xa. Tớ sẽ chở cậu đến đó.",
      },
      {
        en: "I promise I will buy you ice-creams if you get an A.",
        vi: "Chị hứa sẽ mua kem cho em nếu em đạt điểm A.",
      },
      {
        en: "I promise I will not tell anyone.",
        vi: "Tớ hứa sẽ không nói với ai đâu.",
      },
      {
        en: "Will you have some cake?",
        vi: "Cậu ăn một ít bánh nhé?",
      },
      {
        en: "Will you come over and have lunch today?",
        vi: "Hôm nay cậu qua nhà tớ ăn trưa nhé?",
      },
      {
        en: "The computer won't start although I've done everything I can.",
        vi: "Cái máy tính không chịu khởi động dù tớ đã làm mọi cách có thể.",
      },
      {
        en: "The baby won't stop crying.",
        vi: "Em bé không chịu nín khóc.",
      },
      {
        en: "Study hard or you will fail the exam.",
        vi: "Học chăm chỉ nếu không con sẽ trượt kỳ thi đấy.",
      },
      {
        en: "Don't tell this to anyone or I'll never see you.",
        vi: "Đừng nói chuyện này với ai, nếu không tớ sẽ không bao giờ nhìn mặt cậu nữa.",
      },
    ],
  },

  /** ===== Grammar 2: Passive Voice in some tenses ===== */
  grammar2: {
    title: "Passive Voice in Some Basic Tenses",
    viExplain: `
<section class="space-y-6">

  <!-- Tiêu đề lớn -->
  <h1 class="text-2xl md:text-3xl font-bold text-center text-orange-600 uppercase">
    Thể bị động ở một số thì cơ bản
  </h1>

  <p class="text-sm text-slate-700">
    Trong bài học này, các em ôn lại cách dùng và công thức của 
    <b>câu bị động (Passive Voice)</b> trong một số thì cơ bản của tiếng Anh.
  </p>

  <!-- I. Cách sử dụng -->
  <div class="rounded-xl border border-orange-200 bg-orange-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-orange-500 text-white font-bold grid place-items-center">
        I
      </div>
      <h2 class="font-semibold text-slate-800">
        Cách sử dụng và ý nghĩa của câu bị động
      </h2>
    </div>

    <h3 class="font-semibold text-slate-800 mb-1">
      1. Nhấn mạnh vào hành động, không phải người thực hiện
    </h3>
    <p class="text-sm text-slate-700 mb-2">
      Câu bị động được dùng khi ta muốn <b>nhấn mạnh vào hành động / kết quả</b>
      hơn là người thực hiện hành động đó.
    </p>

    <h3 class="font-semibold text-slate-800 mb-1">
      2. Khi không rõ (hoặc không quan trọng) người thực hiện
    </h3>
    <p class="text-sm text-slate-700">
      Câu bị động cũng thường dùng khi <b>không biết rõ</b> ai đã thực hiện hành động
      hoặc người thực hiện không quan trọng.
    </p>
  </div>

  <!-- II. Công thức ở các thì cơ bản -->
  <div class="rounded-xl border border-sky-200 bg-sky-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-sky-500 text-white font-bold grid place-items-center">
        II
      </div>
      <h2 class="font-semibold text-slate-800">
        Câu bị động ở một số thì cơ bản
      </h2>
    </div>

    <!-- 1. Present Simple -->
    <div class="mb-4">
      <h3 class="font-semibold text-slate-800">
        2.1. Thì hiện tại đơn (Present Simple)
      </h3>
      <p class="text-sm text-slate-700">
        <b>Câu chủ động:</b> 
        <code>S + V / V(s,es) + O.</code><br />
        <b>Câu bị động:</b> 
        <code>S + am / is / are + V.p.p. (+ by O).</code>
      </p>
    </div>

    <!-- 2. Present Continuous -->
    <div class="mb-4">
      <h3 class="font-semibold text-slate-800">
        2.2. Thì hiện tại tiếp diễn (Present Continuous)
      </h3>
      <p class="text-sm text-slate-700">
        <b>Câu chủ động:</b> 
        <code>S + am / is / are + V-ing + O.</code><br />
        <b>Câu bị động:</b> 
        <code>S + am / is / are + being + V.p.p. (+ by O).</code>
      </p>
    </div>

    <!-- 3. Past Simple -->
    <div class="mb-4">
      <h3 class="font-semibold text-slate-800">
        2.3. Thì quá khứ đơn (Past Simple)
      </h3>
      <p class="text-sm text-slate-700">
        <b>Câu chủ động:</b> 
        <code>S + V(past) + O.</code><br />
        <b>Câu bị động:</b> 
        <code>S + was / were + V.p.p. (+ by O).</code>
      </p>
    </div>

    <!-- 4. Future Simple -->
    <div class="mb-4">
      <h3 class="font-semibold text-slate-800">
        2.4. Thì tương lai đơn (Future Simple)
      </h3>
      <p class="text-sm text-slate-700">
        <b>Câu chủ động:</b> 
        <code>S + will + V + O.</code><br />
        <b>Câu bị động:</b> 
        <code>S + will be + V.p.p. (+ by O).</code>
      </p>
    </div>

    <!-- 5. Be going to -->
    <div class="mb-4">
      <h3 class="font-semibold text-slate-800">
        2.5. Cấu trúc với <i>be going to</i>
      </h3>
      <p class="text-sm text-slate-700">
        <b>Câu chủ động:</b> 
        <code>S + am / is / are + going to + V + O.</code><br />
        <b>Câu bị động:</b> 
        <code>S + am / is / are + going to be + V.p.p. (+ by O).</code>
      </p>
    </div>

    <!-- 6. Present Perfect -->
    <div>
      <h3 class="font-semibold text-slate-800">
        2.6. Thì hiện tại hoàn thành (Present Perfect)
      </h3>
      <p class="text-sm text-slate-700">
        <b>Câu chủ động:</b> 
        <code>S + has / have + V.p.p. + O.</code><br />
        <b>Câu bị động:</b> 
        <code>S + has / have + been + V.p.p. (+ by O).</code>
      </p>
    </div>
  </div>
</section>
    `,
    examples: [
      // Phần I – ví dụ cách dùng
      {
        en: "Daniel will be picked up at the airport by his cousin.",
        vi: "Daniel sẽ được đón ở sân bay bởi người anh họ của cậu ấy.",
      },
      {
        en: "The painting was stolen.",
        vi: "Bức tranh đã bị lấy cắp.",
      },

      // Present Simple
      {
        en: "I do my homework every day.",
        vi: "Tôi làm bài tập về nhà hằng ngày.",
      },
      {
        en: "My homework is done every day.",
        vi: "Bài tập về nhà của tôi được làm hằng ngày.",
      },
      {
        en: "People use acupressure and massage to treat certain ailments.",
        vi: "Người ta sử dụng bấm huyệt và mát-xa để chữa một số bệnh nhất định.",
      },
      {
        en: "Acupressure and massage are used to treat certain ailments.",
        vi: "Bấm huyệt và mát-xa được sử dụng để chữa một số bệnh nhất định.",
      },

      // Present Continuous
      {
        en: "My mother is preparing dinner.",
        vi: "Mẹ tớ đang nấu bữa tối.",
      },
      {
        en: "Dinner is being prepared by my mother.",
        vi: "Bữa tối đang được nấu bởi mẹ tớ.",
      },
      {
        en: "I am making cakes.",
        vi: "Tớ đang làm bánh.",
      },
      {
        en: "Cakes are being made by me.",
        vi: "Bánh đang được làm bởi tớ.",
      },

      // Past Simple
      {
        en: "Someone broke into my house last Saturday.",
        vi: "Có người đã đột nhập vào nhà tớ hôm thứ Bảy vừa rồi.",
      },
      {
        en: "My house was broken into last Saturday.",
        vi: "Nhà tớ bị đột nhập vào hôm thứ Bảy vừa rồi.",
      },
      {
        en: "The teacher told them a funny story.",
        vi: "Cô giáo đã kể cho họ một câu chuyện hài hước.",
      },
      {
        en: "They were told a funny story by the teacher.",
        vi: "Họ đã được kể một câu chuyện hài hước bởi cô giáo.",
      },

      // Future Simple
      {
        en: "His mother will look after him.",
        vi: "Mẹ cậu ấy sẽ chăm sóc cậu ấy.",
      },
      {
        en: "He will be looked after by his mother.",
        vi: "Cậu ấy sẽ được chăm sóc bởi mẹ cậu ấy.",
      },
      {
        en: "They will try aromatherapy.",
        vi: "Họ sẽ thử phương pháp chữa bệnh bằng tinh dầu thơm.",
      },
      {
        en: "Aromatherapy will be tried.",
        vi: "Phương pháp chữa bệnh bằng tinh dầu thơm sẽ được thử.",
      },

      // Be going to
      {
        en: "They are going to improve the health care system.",
        vi: "Họ sẽ nâng cao hiệu quả hệ thống chăm sóc sức khỏe.",
      },
      {
        en: "The health care system is going to be improved.",
        vi: "Hệ thống chăm sóc sức khỏe sẽ được nâng cao.",
      },
      {
        en: "She is going to write a letter.",
        vi: "Cô ấy sẽ viết một bức thư.",
      },
      {
        en: "A letter is going to be written by her.",
        vi: "Một lá thư sẽ được viết bởi cô ấy.",
      },

      // Present Perfect
      {
        en: "They have taken the child to the zoo.",
        vi: "Họ vừa đưa đứa trẻ tới tham quan sở thú.",
      },
      {
        en: "The child has been taken to the zoo.",
        vi: "Đứa trẻ vừa được đưa tới tham quan sở thú.",
      },
      {
        en: "They have just sold out the tickets.",
        vi: "Họ vừa bán hết vé.",
      },
      {
        en: "Tickets have just been sold out.",
        vi: "Vé vừa mới được bán hết.",
      },
    ],
  },
};

export default u2;

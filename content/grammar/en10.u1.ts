// content/grammar/en10.u1.ts
import type { UnitGrammar } from "../english10.grammar";

const u1: UnitGrammar = {
  unit: 1,
  grammar1: {
    title: "Present Simple vs. Present Continuous",
    viExplain: `
<section class="space-y-6">

  <!-- Tiêu đề lớn -->
  <h1 class="text-2xl md:text-3xl font-bold text-center text-orange-600 uppercase">
    So sánh HIỆN TẠI ĐƠN và HIỆN TẠI TIẾP DIỄN
  </h1>

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
      Dạng thức của động từ ở thì hiện tại đơn và hiện tại tiếp diễn
    </h3>

    <h4 class="font-semibold text-slate-800 underline decoration-orange-400">
      Hiện tại đơn:
    </h4>
    <ul class="list-disc pl-6 text-slate-700 text-sm leading-relaxed mb-3">
      <li>Động từ thường (V) giữ nguyên hoặc thêm <b>s/es</b> tùy theo chủ ngữ.</li>
      <li>Động từ <i>to be</i> chia thành <b>am / is / are</b> tùy theo chủ ngữ.</li>
    </ul>

    <h4 class="font-semibold text-slate-800 underline decoration-orange-400">
      Hiện tại tiếp diễn:
    </h4>
    <ul class="list-disc pl-6 text-slate-700 text-sm leading-relaxed mb-3">
      <li>Dạng chung: <b>am / is / are + V-ing</b>.</li>
    </ul>

    <p class="font-semibold text-slate-800 mb-1">Ví dụ:</p>
    <p class="text-blue-700 text-sm">
      She often feeds her baby five times per day.
    </p>
    <p class="text-gray-600 italic text-sm mb-2">
      (Cô ấy thường cho con ăn 5 lần một ngày.)
    </p>

    <p class="text-blue-700 text-sm">
      She is feeding her baby at the moment.
    </p>
    <p class="text-gray-600 italic text-sm">
      (Cô ấy đang cho con ăn lúc này.)
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
      Hiện tại đơn:
    </h3>
    <p class="text-sm text-slate-700 mb-1">
      Diễn tả những hành động <b>thường xuyên xảy ra, có tính lặp đi lặp lại</b>, thói quen hoặc sự thật.
    </p>
    <p class="text-sm text-slate-700 mb-3">
      Dấu hiệu nhận biết: <i>never, sometimes, often, usually, always, once a week, every day, ...</i>
    </p>

    <h3 class="font-semibold text-slate-800 underline decoration-orange-400">
      Hiện tại tiếp diễn:
    </h3>
    <p class="text-sm text-slate-700 mb-1">
      Diễn tả hành động đang xảy ra <b>ngay tại thời điểm nói</b> hoặc xung quanh thời điểm nói.
    </p>
    <p class="text-sm text-slate-700 mb-3">
      Dấu hiệu nhận biết: <i>now, at the moment, at present, ...</i> và các câu mệnh lệnh:
      <i>Be quiet!, Listen!, ...</i>
    </p>

    <p class="font-semibold text-slate-800 mb-1">Ví dụ:</p>
    <p class="text-blue-700 text-sm">
      My younger sister always does the washing-up after meals.
    </p>
    <p class="text-gray-600 italic text-sm mb-2">
      (Em gái tôi luôn rửa bát sau mỗi bữa ăn.)
    </p>

    <p class="text-blue-700 text-sm">
      My younger sister is doing the washing-up now.
    </p>
    <p class="text-gray-600 italic text-sm">
      (Em gái tôi đang rửa bát bây giờ.)
    </p>
  </div>

  <!-- Khối III -->
  <div class="rounded-xl border border-sky-200 bg-sky-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-sky-500 text-white font-bold grid place-items-center">
        III
      </div>
      <h2 class="font-semibold text-slate-800">
        Các nhóm động từ đặc trưng
      </h2>
    </div>

    <h3 class="font-semibold text-slate-800 mb-1">
      1. Động từ thường dùng ở Hiện tại đơn (stative verbs)
    </h3>
    <p class="text-sm text-slate-700 mb-2">
      Diễn tả trạng thái, cảm xúc, sở hữu, nhận thức… thường không dùng ở hiện tại tiếp diễn:
    </p>
    <ul class="list-disc pl-6 text-sm text-slate-700 mb-3">
      <li>Tri giác: <i>feel, hear, see, smell, taste, ...</i></li>
      <li>Nhận thức: <i>agree, believe, know, think (nghĩ rằng), ...</i></li>
      <li>Cảm xúc: <i>like, love, hate, enjoy, dislike, ...</i></li>
      <li>Sở hữu: <i>have, own, belong, include, possess, ...</i></li>
    </ul>

    <p class="text-sm text-slate-700 mb-3">
      Ví dụ: <b>Mary owns an expensive car.</b> (Đúng),  
      <b>Mary is owning an expensive car.</b> (Sai).
    </p>

    <h3 class="font-semibold text-slate-800 mb-1">
      2. Động từ thường dùng ở Hiện tại tiếp diễn
    </h3>
    <p class="text-sm text-slate-700 mb-2">
      Thể hiện sự thay đổi, phát triển, xu hướng:
    </p>
    <ul class="list-disc pl-6 text-sm text-slate-700 mb-3">
      <li><i>get, grow, change, become, improve, increase, begin, ...</i></li>
    </ul>

    <h3 class="font-semibold text-slate-800 mb-1">
      3. Động từ dùng được ở cả hai thì nhưng nghĩa khác nhau
    </h3>
    <p class="text-sm text-slate-700 mb-1">
      Ví dụ: <b>taste, look, weigh, see, have, think, consider, ...</b>
    </p>
    <p class="text-sm text-slate-700">
      Các động từ này ở hiện tại đơn thường chỉ trạng thái;  
      ở hiện tại tiếp diễn thường nhấn mạnh hành động đang diễn ra.
    </p>
  </div>
</section>
    `,
    examples: [
      {
        en: "She often feeds her baby five times per day.",
        vi: "Cô ấy thường cho con ăn 5 lần một ngày.",
      },
      {
        en: "She is feeding her baby at the moment.",
        vi: "Cô ấy đang cho con ăn lúc này.",
      },
      {
        en: "My younger sister always does the washing-up after meals.",
        vi: "Em gái tôi luôn rửa bát sau mỗi bữa ăn.",
      },
      {
        en: "My younger sister is doing the washing-up now.",
        vi: "Em gái tôi đang rửa bát bây giờ.",
      },
      {
        en: "Mary owns an expensive car.",
        vi: "Mary sở hữu một chiếc xe hơi đắt tiền.",
      },
      {
        en: "Bill is getting taller this year.",
        vi: "Năm nay Bill đang dần cao hơn.",
      },
      {
        en: "The soup tastes good.",
        vi: "Món canh này có vị ngon.",
      },
      {
        en: "I am tasting the soup.",
        vi: "Tớ đang nếm món canh này.",
      },
      {
        en: "They look happy together.",
        vi: "Họ trông thật hạnh phúc bên nhau.",
      },
      {
        en: "Why are you looking at me?",
        vi: "Tại sao cậu lại nhìn tớ thế?",
      },
      {
        en: "Laura has a big house.",
        vi: "Laura có một ngôi nhà lớn.",
      },
      {
        en: "Laura is having dinner.",
        vi: "Laura đang ăn tối.",
      },
      {
        en: "I think you're right.",
        vi: "Tớ nghĩ rằng cậu đã đúng.",
      },
      {
        en: "What are you thinking about?",
        vi: "Bạn đang suy nghĩ về điều gì vậy?",
      },
      {
        en: "I consider you my friend.",
        vi: "Tớ xem cậu là bạn.",
      },
      {
        en: "I am considering your advice.",
        vi: "Tớ đang cân nhắc lời khuyên của cậu.",
      },
    ],
  },
};

export default u1;

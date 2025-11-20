// Grammar content for Unit 10: Conditional Sentences Type 1 & 2

import type { UnitGrammar } from "../english10.grammar";

const u10: UnitGrammar = {
  unit: 10,

  /* ======================================================
   *   GRAMMAR 1 – CONDITIONAL SENTENCES TYPE 1 & 2
   * ====================================================== */

  grammar1: {
    title: "Conditional Sentences Type 1 & Type 2",
    viExplain: `
<section class="space-y-6">
  <h1 class="text-2xl md:text-3xl font-bold text-center text-blue-600">
    Câu điều kiện loại 1 & loại 2 (Conditional Sentences Type 1 & 2)
  </h1>

  <!-- I. TYPE 1 INTRO -->
  <div class="rounded-xl border border-blue-200 bg-blue-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-blue-600 text-white font-bold grid place-items-center">I</div>
      <h2 class="font-semibold text-slate-800">Câu điều kiện loại 1 – Type 1</h2>
    </div>

    <h3 class="font-semibold text-blue-700 mb-1">1. Chức năng</h3>
    <p class="text-sm text-slate-700">
      Dùng để diễn tả hành động hoặc sự việc <b>có thật và có thể xảy ra</b> ở hiện tại hoặc tương lai.
    </p>

    <div class="mt-2 text-sm space-y-1">
      <p class="font-mono bg-white px-2 py-1 rounded border border-blue-200">If it rains, we will stay at home.</p>
    </div>

    <h3 class="mt-4 font-semibold text-blue-700 mb-1">2. Cấu trúc</h3>
    <div class="text-sm bg-white px-3 py-2 rounded border border-blue-200 inline-block">
      If + S + V(present simple), S + will/may/might/can + V(inf.)
    </div>

    <div class="mt-3 text-sm space-y-1">
      <p class="font-mono bg-white px-2 py-1 rounded border border-blue-200">If you pass the exam, your parents will be very happy.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-blue-200">If they book early, they may get a discount.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-blue-200">If she finishes her homework, she can hang out with friends.</p>
    </div>
  </div>

  <!-- II. TYPE 2 INTRO -->
  <div class="rounded-xl border border-purple-200 bg-purple-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-purple-600 text-white font-bold grid place-items-center">II</div>
      <h2 class="font-semibold text-slate-800">Câu điều kiện loại 2 – Type 2</h2>
    </div>

    <h3 class="font-semibold text-purple-700 mb-1">1. Chức năng</h3>
    <p class="text-sm text-slate-700">
      Dùng để diễn tả các hành động hoặc sự việc <b>không có thật hoặc khó xảy ra</b> ở hiện tại hoặc tương lai.
    </p>

    <div class="mt-2 text-sm">
      <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200">If I were Superman, I would save the world.</p>
    </div>

    <h3 class="mt-4 font-semibold text-purple-700 mb-1">2. Cấu trúc</h3>
    <div class="text-sm bg-white px-3 py-2 rounded border border-purple-200 inline-block">
      If + S + V(past simple), S + would/could + V(inf.)
    </div>

    <p class="text-xs italic text-slate-600 mt-2">* Lưu ý: Động từ "to be" chia là <b>were</b> cho tất cả các ngôi.</p>

    <div class="mt-3 text-sm space-y-1">
      <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200">If Mary had a lot of money, she would travel around the world.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200">If Tom could speak Chinese, he could get a good job.</p>
    </div>
  </div>

  <!-- III. COMPARISON TABLE -->
  <div class="rounded-xl border border-green-200 bg-green-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-green-600 text-white font-bold grid place-items-center">III</div>
      <h2 class="font-semibold text-slate-800">So sánh câu điều kiện loại 1 và loại 2</h2>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full text-sm text-center border border-green-300 bg-white">
        <thead class="bg-green-100">
          <tr>
            <th class="border px-3 py-2"> </th>
            <th class="border px-3 py-2">Câu điều kiện loại 1</th>
            <th class="border px-3 py-2">Câu điều kiện loại 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-2 py-2 font-semibold">Chức năng</td>
            <td class="border px-2 py-2">Hành động có thật hoặc có thể xảy ra</td>
            <td class="border px-2 py-2">Hành động không có thật hoặc khó xảy ra</td>
          </tr>
          <tr>
            <td class="border px-2 py-2 font-semibold">Mệnh đề điều kiện</td>
            <td class="border px-2 py-2">Hiện tại đơn</td>
            <td class="border px-2 py-2">Quá khứ đơn / could</td>
          </tr>
          <tr>
            <td class="border px-2 py-2 font-semibold">Mệnh đề chính</td>
            <td class="border px-2 py-2">will / may / might / can</td>
            <td class="border px-2 py-2">would / could</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
    `,

    examples: [
      { en: "If it rains, we will stay at home.", vi: "Nếu trời mưa, chúng ta sẽ ở nhà." },
      { en: "If you pass the exam, your parents will be happy.", vi: "Nếu bạn qua bài kiểm tra, bố mẹ bạn sẽ vui." },
      { en: "If I were Superman, I would save the world.", vi: "Nếu tôi là siêu nhân, tôi sẽ cứu thế giới." },
      { en: "If Mary had money, she would travel around the world.", vi: "Nếu Mary có tiền, cô ấy sẽ đi du lịch khắp thế giới." }
    ]
  }
};

export default u10;

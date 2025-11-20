// Grammar content for Unit 6: Passive Voice with Modals

import type { UnitGrammar } from "../english10.grammar";

const u6: UnitGrammar = {
  unit: 6,

  /* ==============================================
   *   GRAMMAR 1 – PASSIVE VOICE WITH MODALS
   * ============================================== */
  grammar1: {
    title: "Passive Voice with Modals",
    viExplain: `
<section class="space-y-6">
  <h1 class="text-2xl md:text-3xl font-bold text-center text-purple-600">
    Thể bị động với động từ khuyết thiếu (Passive Voice with Modals)
  </h1>

  <!-- I. MODALS DEFINITION & FORM -->
  <div class="rounded-xl border border-purple-200 bg-purple-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-purple-600 text-white font-bold grid place-items-center">I</div>
      <h2 class="font-semibold text-slate-800">Động từ khuyết thiếu</h2>
    </div>

    <h3 class="font-semibold text-purple-700">1. Định nghĩa</h3>
    <p class="text-sm text-slate-700">
      Động từ khuyết thiếu (modal verbs) được dùng với động từ khác để diễn tả khả năng, yêu cầu, sự bắt buộc, cấm đoán, xin phép...
    </p>

    <h3 class="mt-3 font-semibold text-purple-700">2. Dạng thức</h3>
    <p class="text-sm text-slate-700">
      • Khẳng định: <b>S + modal + V</b><br>
      • Phủ định: <b>S + modal + not + V</b><br>
      • Nghi vấn: <b>Modal + S + V?</b>
    </p>

    <div class="mt-3 text-sm space-y-1">
      <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200">He should help her with the housework.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200">You must not pick the flowers.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200">Can I use your mobile phone?</p>
    </div>

    <p class="text-xs italic text-slate-600 mt-3">* Modal verbs không chia theo chủ ngữ.</p>
  </div>

  <!-- II. COMMON MODALS USAGE -->
  <div class="rounded-xl border border-blue-200 bg-blue-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-blue-600 text-white font-bold grid place-items-center">II</div>
      <h2 class="font-semibold text-slate-800">Các động từ khuyết thiếu thường gặp</h2>
    </div>

    <ul class="list-disc pl-5 text-sm text-slate-700 space-y-2">
      <li><b>can / could</b>: khả năng, xin phép, yêu cầu</li>
      <li><b>may / might</b>: khả năng, xin phép</li>
      <li><b>will / would</b>: yêu cầu, lời nhờ</li>
      <li><b>should / ought to</b>: lời khuyên</li>
      <li><b>must</b>: bắt buộc, cấm đoán, suy đoán chắc chắn</li>
      <li><b>shall</b>: gợi ý (thường dùng với I/We)</li>
    </ul>
  </div>

  <!-- III. PASSIVE WITH MODALS -->
  <div class="rounded-xl border border-green-200 bg-green-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-green-600 text-white font-bold grid place-items-center">III</div>
      <h2 class="font-semibold text-slate-800">Thể bị động với động từ khuyết thiếu</h2>
    </div>

    <p class="text-sm text-slate-700 mb-2">
      <b>Cấu trúc:</b><br>
      <span class="font-mono bg-white px-2 py-1 rounded border border-green-200">S + modal + be + Vp.p. (+ by O)</span>
    </p>

    <p class="text-xs italic text-slate-600 mb-3">* "by + O" có thể được lược bỏ nếu không quan trọng người thực hiện hành động.</p>

    <div class="text-sm space-y-2">
      <p class="font-mono bg-white px-2 py-1 rounded border border-green-200">Ly and Ha can share the housework.<br>→ The housework can be shared by Ly and Ha.</p>

      <p class="font-mono bg-white px-2 py-1 rounded border border-green-200">You can't pick the flowers.<br>→ The flowers can't be picked.</p>

      <p class="font-mono bg-white px-2 py-1 rounded border border-green-200">Students ought to follow school rules.<br>→ School rules ought to be followed by students.</p>
    </div>
  </div>
</section>
    `,
    examples: [
      { en: "The housework can be shared by Ly and Ha.", vi: "Công việc nhà có thể được chia sẻ bởi Ly và Hà." },
      { en: "The flowers can't be picked.", vi: "Hoa không được phép bẻ." },
      { en: "School rules ought to be followed by students.", vi: "Nội quy trường học nên được tuân theo bởi học sinh." }
    ]
  }
};

export default u6;

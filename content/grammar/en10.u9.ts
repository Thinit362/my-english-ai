// Grammar content for Unit 9: Reported Speech

import type { UnitGrammar } from "../english10.grammar";

const u9: UnitGrammar = {
  unit: 9,

  /* ==============================================
   *   GRAMMAR 1 – REPORTED SPEECH
   * ============================================== */
  grammar1: {
    title: "Reported Speech (Câu tường thuật)",
    viExplain: `
<section class="space-y-6">
  <h1 class="text-2xl md:text-3xl font-bold text-center text-rose-600">
    Câu tường thuật – Reported Speech
  </h1>

  <!-- I. DIRECT VS REPORTED SPEECH -->
  <div class="rounded-xl border border-rose-200 bg-rose-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-rose-600 text-white font-bold grid place-items-center">I</div>
      <h2 class="font-semibold text-slate-800">Câu trực tiếp và câu gián tiếp</h2>
    </div>

    <h3 class="font-semibold text-rose-700 mb-1">1. Định nghĩa</h3>
    <p class="text-sm text-slate-700">
      • <b>Câu trực tiếp</b>: ghi lại nguyên văn lời nói, đặt trong ngoặc kép.<br>
      • <b>Câu gián tiếp</b>: tường thuật lại ý của người nói, không trích dẫn nguyên văn.
    </p>

    <div class="mt-3 space-y-2 text-sm">
      <p class="font-mono bg-white px-2 py-1 rounded border border-rose-200">"I will send you more homework," the teacher said.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-rose-200">→ The teacher said that she would send us more homework.</p>
    </div>
  </div>

  <!-- II. RULES -->
  <div class="rounded-xl border border-amber-200 bg-amber-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-amber-500 text-white font-bold grid place-items-center">II</div>
      <h2 class="font-semibold text-slate-800">Quy tắc chuyển câu trực tiếp → gián tiếp</h2>
    </div>

    <h3 class="font-semibold text-amber-700 mb-1">1. Quy tắc lùi thì</h3>
    <div class="text-sm space-y-2">
      <p>• Hiện tại đơn → Quá khứ đơn</p>
      <p>• Hiện tại tiếp diễn → Quá khứ tiếp diễn</p>
      <p>• Hiện tại hoàn thành → Quá khứ hoàn thành</p>
      <p>• Quá khứ đơn → Quá khứ hoàn thành</p>
    </div>

    <h3 class="mt-4 font-semibold text-amber-700 mb-1">2. Quy tắc biến đổi từ</h3>
    <p class="text-sm text-slate-700 mb-2">Một số từ bị thay đổi khi chuyển sang câu gián tiếp:</p>

    <!-- Table: Time & Pronoun changes -->
    <div class="overflow-x-auto mb-4">
      <table class="min-w-full text-sm text-center border border-amber-300 bg-white">
        <thead class="bg-amber-100">
          <tr>
            <th class="border px-3 py-1">Câu trực tiếp</th>
            <th class="border px-3 py-1">Câu gián tiếp</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border px-2 py-1">here</td><td class="border px-2 py-1">there</td></tr>
          <tr><td class="border px-2 py-1">now</td><td class="border px-2 py-1">then</td></tr>
          <tr><td class="border px-2 py-1">today / tonight</td><td class="border px-2 py-1">that day / that night</td></tr>
          <tr><td class="border px-2 py-1">yesterday</td><td class="border px-2 py-1">the previous day / the day before</td></tr>
          <tr><td class="border px-2 py-1">tomorrow</td><td class="border px-2 py-1">the following day / the next day</td></tr>
          <tr><td class="border px-2 py-1">next week</td><td class="border px-2 py-1">the following week</td></tr>
          <tr><td class="border px-2 py-1">ago</td><td class="border px-2 py-1">before</td></tr>
          <tr><td class="border px-2 py-1">last month</td><td class="border px-2 py-1">the previous month</td></tr>
        </tbody>
      </table>
    </div>

    <!-- Table: Modals -->
    <p class="text-sm text-slate-700 mb-1">Biến đổi động từ khuyết thiếu:</p>
    <div class="overflow-x-auto">
      <table class="min-w-full text-sm text-center border border-blue-300 bg-white">
        <thead class="bg-blue-100">
          <tr>
            <th class="border px-3 py-1">Câu trực tiếp</th>
            <th class="border px-3 py-1">Câu gián tiếp</th>
          </tr>
        </thead>
        <tbody>
          <tr><td class="border px-2 py-1">will</td><td class="border px-2 py-1">would</td></tr>
          <tr><td class="border px-2 py-1">can</td><td class="border px-2 py-1">could</td></tr>
          <tr><td class="border px-2 py-1">may</td><td class="border px-2 py-1">might</td></tr>
          <tr><td class="border px-2 py-1">must</td><td class="border px-2 py-1">had to</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- III. THREE TYPES OF REPORTED SPEECH -->
  <div class="rounded-xl border border-green-200 bg-green-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-green-600 text-white font-bold grid place-items-center">III</div>
      <h2 class="font-semibold text-slate-800">Ba loại câu tường thuật</h2>
    </div>

    <h3 class="font-semibold text-green-700">1. Câu trần thuật</h3>
    <p class="text-sm text-slate-700">S + said/told (that) + câu đã lùi thì.</p>

    <h3 class="mt-3 font-semibold text-green-700">2. Câu mệnh lệnh – yêu cầu</h3>
    <p class="text-sm text-slate-700"><b>S + asked/told + sb + (not) to V</b></p>

    <h3 class="mt-3 font-semibold text-green-700">3. Câu hỏi</h3>
    <p class="text-sm text-slate-700 mb-1">• Yes/No questions → <b>if / whether</b><br>• Wh-questions → giữ nguyên từ để hỏi</p>
  </div>
</section>
    `,

    examples: [
      { en: "The teacher said that she would send us more homework.", vi: "Cô giáo nói rằng cô sẽ gửi thêm bài tập." },
      { en: "The man asked me if I lived there.", vi: "Người đàn ông hỏi tôi có sống ở đó không." },
      { en: "Nam told me not to waste water.", vi: "Nam bảo tôi đừng lãng phí nước." },
      { en: "Hoa wondered how I would go there.", vi: "Hoa hỏi tôi sẽ đến đó bằng cách nào." }
    ]
  }
};

export default u9;

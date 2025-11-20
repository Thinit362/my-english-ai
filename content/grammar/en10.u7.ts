// Grammar content for Unit 7: Comparative and Superlative Adjectives

import type { UnitGrammar } from "../english10.grammar";

const u7: UnitGrammar = {
  unit: 7,

  /* ======================================================
   *   GRAMMAR 1 – COMPARATIVES & SUPERLATIVES
   * ====================================================== */

  grammar1: {
    title: "Comparatives and Superlatives",
    viExplain: `
<section class="space-y-6">
  <h1 class="text-2xl md:text-3xl font-bold text-center text-orange-600">
    So sánh hơn và So sánh nhất của tính từ
  </h1>

  <!-- I. SHORT & LONG ADJECTIVES -->
  <div class="rounded-xl border border-orange-200 bg-orange-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-orange-500 text-white font-bold grid place-items-center">I</div>
      <h2 class="font-semibold text-slate-800">Tính từ ngắn và tính từ dài</h2>
    </div>

    <h3 class="font-semibold text-orange-700 mb-1">1. Tính từ ngắn</h3>
    <p class="text-sm text-slate-700 mb-2">
      Tính từ ngắn bao gồm:<br>
      • Tính từ một âm tiết (short, thin, big, smart...)<br>
      • Tính từ hai âm tiết kết thúc bằng: <b>-y, -le, -ow, -er, -et</b> (happy, gentle, narrow, clever, quiet...)
    </p>

    <h3 class="font-semibold text-orange-700 mb-1">2. Tính từ dài</h3>
    <p class="text-sm text-slate-700">
      Tính từ dài bao gồm:<br>
      • Tính từ hai âm tiết không thuộc nhóm tính từ ngắn (perfect, childish, nervous...)<br>
      • Tính từ ba âm tiết trở lên (beautiful, intelligent, satisfactory...)
    </p>
  </div>

  <!-- II. COMPARATIVES & SUPERLATIVES (SHORT ADJ) -->
  <div class="rounded-xl border border-sky-200 bg-sky-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-sky-500 text-white font-bold grid place-items-center">II</div>
      <h2 class="font-semibold text-slate-800">So sánh hơn và So sánh nhất của tính từ ngắn</h2>
    </div>

    <h3 class="font-semibold text-sky-700 mb-1">1. So sánh hơn</h3>
    <p class="text-sm text-slate-700">
      <b>adj + -er + (than)</b>
    </p>

    <div class="mt-2 text-sm space-y-1">
      <p class="font-mono bg-white px-2 py-1 rounded border border-sky-200">Bikes are slower than cars.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-sky-200">It has been quieter here since my dog went missing.</p>
    </div>

    <h3 class="mt-4 font-semibold text-sky-700 mb-1">2. So sánh nhất</h3>
    <p class="text-sm text-slate-700">
      <b>the + adj + -est (+ N)</b>
    </p>

    <div class="mt-2 text-sm space-y-1">
      <p class="font-mono bg-white px-2 py-1 rounded border border-sky-200">Bikes are the slowest of the three vehicles.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-sky-200">My village is the quietest place in the province.</p>
    </div>

    <h3 class="mt-4 font-semibold text-sky-700 mb-1">3. Quy tắc thêm -er và -est</h3>
    <ul class="list-disc pl-5 text-sm text-slate-700 space-y-1">
      <li>Thêm -er / -est với tính từ ngắn thông thường (fast → faster → the fastest)</li>
      <li>Tính từ kết thúc bằng -y: đổi -y thành -i rồi thêm -er / -iest (happy → happier → the happiest)</li>
      <li>Tính từ kết thúc bằng -e: thêm -r / -st (simple → simpler → the simplest)</li>
      <li>Tính từ có cấu trúc nguyên âm + phụ âm: gấp đôi phụ âm cuối rồi thêm -er / -est (thin → thinner → the thinnest)</li>
    </ul>
  </div>

  <!-- III. COMPARATIVES & SUPERLATIVES (LONG ADJ) -->
  <div class="rounded-xl border border-green-200 bg-green-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-green-600 text-white font-bold grid place-items-center">III</div>
      <h2 class="font-semibold text-slate-800">So sánh hơn và So sánh nhất của tính từ dài</h2>
    </div>

    <h3 class="font-semibold text-green-700 mb-1">1. So sánh hơn</h3>
    <p class="text-sm text-slate-700">
      <b>more + adj + (than)</b>
    </p>

    <div class="mt-2 text-sm space-y-1">
      <p class="font-mono bg-white px-2 py-1 rounded border border-green-200">A lion is more dangerous than an elephant.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-green-200">The bus fare is more expensive this year.</p>
    </div>

    <h3 class="mt-4 font-semibold text-green-700 mb-1">2. So sánh nhất</h3>
    <p class="text-sm text-slate-700">
      <b>the most + adj (+ N)</b>
    </p>

    <div class="mt-2 text-sm space-y-1">
      <p class="font-mono bg-white px-2 py-1 rounded border border-green-200">The lion is the most dangerous animal of the three.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-green-200">The brown dress is the most expensive.</p>
    </div>
  </div>
</section>
    `,
    examples: [
      { en: "Bikes are slower than cars.", vi: "Xe đạp chậm hơn ô tô." },
      { en: "Bikes are the slowest of the three vehicles.", vi: "Xe đạp là chậm nhất trong ba phương tiện." },
      { en: "A lion is more dangerous than an elephant.", vi: "Sư tử nguy hiểm hơn voi." },
      { en: "The brown dress is the most expensive.", vi: "Chiếc váy màu nâu là đắt nhất." }
    ]
  }
};

export default u7;

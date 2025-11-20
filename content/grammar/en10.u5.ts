// Grammar content for Unit 5: Present Perfect & Gerund/To-infinitive for Description

import type { UnitGrammar } from "../english10.grammar";

const u5: UnitGrammar = {
  unit: 5,

  /* ==========================================================
   *   GRAMMAR 1 – PRESENT PERFECT (THÌ HIỆN TẠI HOÀN THÀNH)
   * ========================================================== */
  grammar1: {
    title: "Present Perfect (Thì hiện tại hoàn thành)",
    viExplain: `
<section class="space-y-6">
  <h1 class="text-2xl md:text-3xl font-bold text-center text-orange-600">
    Thì Hiện tại hoàn thành (Present Perfect)
  </h1>

  <!-- I. FORM -->
  <div class="rounded-xl border border-orange-200 bg-orange-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-orange-500 text-white font-bold grid place-items-center">
        I
      </div>
      <h2 class="font-semibold text-slate-800">Dạng thức của động từ</h2>
    </div>

    <p class="text-sm text-slate-700 mb-2">
      <b>I/You/We/They</b>: have / 've<br>
      <b>He/She/It</b>: has / 's<br>
      <b>Vp.p.</b> (quá khứ phân từ) là dạng V3 của động từ.
    </p>

    <h3 class="font-semibold text-orange-700">1. Khẳng định</h3>
    <p class="text-sm text-slate-700">
      <b>S + have/has + Vp.p.</b>
    </p>

    <h3 class="mt-3 font-semibold text-orange-700">2. Phủ định</h3>
    <p class="text-sm text-slate-700">
      <b>S + haven't / hasn't + Vp.p.</b>
    </p>

    <h3 class="mt-3 font-semibold text-orange-700">3. Nghi vấn</h3>
    <p class="text-sm text-slate-700">
      <b>Have/Has + S + Vp.p.?</b><br>
      Trả lời: Yes, S have/has. – No, S haven't/hasn't.
    </p>

    <div class="mt-3 text-sm space-y-1">
      <p class="font-mono bg-white px-2 py-1 rounded border border-orange-200">Has she been well yet?</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-orange-200">Have you repaired my laptop yet?</p>
    </div>
  </div>

  <!-- II. USES -->
  <div class="rounded-xl border border-sky-200 bg-sky-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-sky-500 text-white font-bold grid place-items-center">
        II
      </div>
      <h2 class="font-semibold text-slate-800">Các cách dùng</h2>
    </div>

    <h3 class="font-semibold text-sky-700 mb-1">1. Hành động xảy ra trong quá khứ nhưng kết quả còn ở hiện tại</h3>
    <p class="text-sm text-slate-700 mb-2">My mom has tidied up my room. It looks neat now.</p>

    <h3 class="font-semibold text-sky-700 mb-1">2. Hành động bắt đầu trong quá khứ và kéo dài đến hiện tại</h3>
    <p class="text-sm text-slate-700 mb-2">We have lived in this house for 10 years.</p>

    <h3 class="font-semibold text-sky-700 mb-1">3. Hành động đã lặp lại nhiều lần</h3>
    <p class="text-sm text-slate-700">I have watched this movie several times.</p>
  </div>

  <!-- III. ADVERBS -->
  <div class="rounded-xl border border-purple-200 bg-purple-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-purple-500 text-white font-bold grid place-items-center">
        III
      </div>
      <h2 class="font-semibold text-slate-800">Các trạng từ phổ biến</h2>
    </div>

    <ul class="list-disc pl-5 text-sm text-slate-700 space-y-1">
      <li><b>ever</b>: từng (dùng trong câu hỏi/khẳng định)</li>
      <li><b>never</b>: chưa bao giờ (dùng trong câu khẳng định mang nghĩa phủ định)</li>
      <li><b>already</b>: đã, rồi</li>
      <li><b>yet</b>: chưa (cuối câu hỏi/phủ định)</li>
      <li><b>since</b>: kể từ (mốc thời gian)</li>
      <li><b>for</b>: trong khoảng (khoảng thời gian)</li>
    </ul>
  </div>
</section>
    `,
    examples: [
      { en: "My mom has tidied up my room.", vi: "Mẹ tớ đã dọn phòng cho tớ." },
      { en: "I have finished my homework.", vi: "Tớ đã làm xong bài tập." },
      { en: "We have lived here for 10 years.", vi: "Chúng tôi đã sống ở đây 10 năm rồi." },
      { en: "I have been to Paris twice.", vi: "Tôi đã đến Paris hai lần rồi." }
    ]
  },

  /* ============================================================
   *   GRAMMAR 2 – GERUND & TO-INFINITIVE FOR DESCRIPTION
   * ============================================================ */
  grammar2: {
    title: "Gerund & To-infinitives for Description",
    viExplain: `
<section class="space-y-6">
  <h1 class="text-2xl md:text-3xl font-bold text-center text-green-600">
    Danh động từ & Động từ nguyên thể có to dùng để miêu tả
  </h1>

  <!-- I. GERUNDS -->
  <div class="rounded-xl border border-green-200 bg-green-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-green-600 text-white font-bold grid place-items-center">I</div>
      <h2 class="font-semibold text-slate-800">Danh động từ (Gerund)</h2>
    </div>

    <p class="text-sm text-slate-700">
      Danh động từ là <b>động từ + ing</b> và đóng vai trò như <b>danh từ</b> trong câu.
    </p>

    <div class="mt-3 text-sm space-y-1">
      <p class="font-mono bg-white px-2 py-1 rounded border border-green-200">Using an e-book reader is easy.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-green-200">A washing machine is used for making clothes clean.</p>
    </div>

    <p class="text-xs italic text-slate-600 mt-3">
      *Lưu ý: Không phải mọi động từ + ing đều là danh động từ (ví dụ: He is playing...).
    </p>
  </div>

  <!-- II. TO-INFINITIVES -->
  <div class="rounded-xl border border-blue-200 bg-blue-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-blue-600 text-white font-bold grid place-items-center">II</div>
      <h2 class="font-semibold text-slate-800">Động từ nguyên thể có to (To-infinitive)</h2>
    </div>

    <p class="text-sm text-slate-700">
      To-infinitive là động từ nguyên thể có <b>to</b> đứng trước.
    </p>

    <div class="mt-3 text-sm space-y-1">
      <p class="font-mono bg-white px-2 py-1 rounded border border-blue-200">You can use a laptop to work.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-blue-200">A fridge is used to keep food fresh.</p>
    </div>
  </div>

  <!-- III. DESCRIPTION -->
  <div class="rounded-xl border border-purple-200 bg-purple-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-purple-600 text-white font-bold grid place-items-center">III</div>
      <h2 class="font-semibold text-slate-800">Dùng để miêu tả chức năng</h2>
    </div>

    <h3 class="font-semibold text-purple-700 mb-1">1. Dùng Gerund</h3>
    <p class="text-sm text-slate-700 mb-2"><b>use something for + V-ing</b><br><b>Something is used for + V-ing</b></p>

    <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200">We use an electric cooker for cooking rice.</p>
    <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200">An electric cooker is used for cooking rice.</p>

    <h3 class="mt-4 font-semibold text-purple-700 mb-1">2. Dùng To-infinitive</h3>
    <p class="text-sm text-slate-700 mb-2"><b>use something to V</b><br><b>Something is used to V</b></p>

    <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200">We use an electric cooker to cook rice.</p>
    <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200">An electric cooker is used to cook rice.</p>
  </div>
</section>
    `,
    examples: [
      { en: "Using an e-book reader is easy.", vi: "Việc sử dụng máy đọc sách điện tử rất dễ." },
      { en: "A fridge is used to keep food fresh.", vi: "Tủ lạnh được dùng để giữ đồ ăn tươi." },
      { en: "We use an electric cooker for cooking rice.", vi: "Chúng tôi dùng nồi cơm điện để nấu cơm." },
      { en: "We use an electric cooker to cook rice.", vi: "Chúng tôi dùng nồi cơm điện để nấu cơm." }
    ]
  }
};

export default u5;

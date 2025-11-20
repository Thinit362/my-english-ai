// Grammar content for Unit 8: Defining & Non-defining Relative Clauses

import type { UnitGrammar } from "../english10.grammar";

const u8: UnitGrammar = {
  unit: 8,

  /* ======================================================
   *   GRAMMAR 1 – RELATIVE CLAUSES
   * ====================================================== */

  grammar1: {
    title: "Defining & Non-defining Relative Clauses",
    viExplain: `
<section class="space-y-6">
  <h1 class="text-2xl md:text-3xl font-bold text-center text-purple-600">
    Mệnh đề quan hệ xác định & không xác định (Relative Clauses)
  </h1>

  <!-- I. RELATIVE PRONOUNS -->
  <div class="rounded-xl border border-purple-200 bg-purple-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-purple-600 text-white font-bold grid place-items-center">I</div>
      <h2 class="font-semibold text-slate-800">Các đại từ quan hệ (Relative Pronouns)</h2>
    </div>

    <h3 class="font-semibold text-purple-700 mb-1">1. Who</h3>
    <p class="text-sm text-slate-700">Dùng để thay thế cho <b>người</b>.</p>
    <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200 mt-1">This is the girl who studies the best in my class.</p>

    <h3 class="mt-3 font-semibold text-purple-700 mb-1">2. Whom</h3>
    <p class="text-sm text-slate-700">Dùng cho tân ngữ, thường đứng sau giới từ. Dùng nhiều trong văn phong trang trọng.</p>
    <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200 mt-1">The man, about whom they talked, was arrested this morning.</p>

    <h3 class="mt-3 font-semibold text-purple-700 mb-1">3. Whose</h3>
    <p class="text-sm text-slate-700">Dùng để chỉ <b>sở hữu</b> của người hoặc vật.</p>
    <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200 mt-1">I usually talk to Linh, whose house is yellow.</p>

    <h3 class="mt-3 font-semibold text-purple-700 mb-1">4. Which</h3>
    <p class="text-sm text-slate-700">Dùng thay cho vật hoặc cả một mệnh đề đứng trước.</p>
    <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200 mt-1">I'll return the book which you lent me.</p>
    <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200 mt-1">Hoa goes home late, which worries her parents.</p>

    <h3 class="mt-3 font-semibold text-purple-700 mb-1">5. That</h3>
    <p class="text-sm text-slate-700">Dùng thay cho người, vật; phổ biến trong văn nói hoặc văn phong không trang trọng.</p>
    <p class="font-mono bg-white px-2 py-1 rounded border border-purple-200 mt-1">This is the best movie that I have seen.</p>

    <p class="text-xs italic text-slate-600 mt-2">* Lưu ý: “that” không dùng sau dấu phẩy hoặc sau giới từ.</p>
  </div>

  <!-- II. DEFINING CLAUSES -->
  <div class="rounded-xl border border-blue-200 bg-blue-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-blue-600 text-white font-bold grid place-items-center">II</div>
      <h2 class="font-semibold text-slate-800">Mệnh đề quan hệ xác định (Defining Relative Clause)</h2>
    </div>

    <p class="text-sm text-slate-700">
      • Cung cấp thông tin <b>bắt buộc</b>, cần thiết để xác định danh từ.<br>
      • Không thể lược bỏ.<br>
      • Dùng với: <b>who, whom, whose, which, that</b>.
    </p>

    <div class="mt-3 text-sm space-y-1">
      <p class="font-mono bg-white px-2 py-1 rounded border border-blue-200">Students who come late will be disciplined.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-blue-200">The teacher (who) I like most is Mr. Jason.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-blue-200">The shirt (that) you gave me is beautiful.</p>
    </div>
  </div>

  <!-- III. NON-DEFINING CLAUSES -->
  <div class="rounded-xl border border-green-200 bg-green-50 p-4 md:p-5 shadow-sm">
    <div class="flex items-center gap-3 mb-3">
      <div class="w-9 h-9 rounded-full bg-green-600 text-white font-bold grid place-items-center">III</div>
      <h2 class="font-semibold text-slate-800">Mệnh đề quan hệ không xác định (Non-defining Relative Clause)</h2>
    </div>

    <p class="text-sm text-slate-700">
      • Cung cấp thông tin <b>bổ sung</b>, không bắt buộc.<br>
      • Có dấu phẩy tách mệnh đề.<br>
      • Không được lược bỏ đại từ quan hệ.<br>
      • Chỉ dùng <b>who, whom, whose, which</b> — <b>không dùng “that”.</b>
    </p>

    <div class="mt-3 text-sm space-y-1">
      <p class="font-mono bg-white px-2 py-1 rounded border border-green-200">Brian, who studies in my class, comes from Mexico.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-green-200">I teach in Da Nang, which is in Central Vietnam.</p>
      <p class="font-mono bg-white px-2 py-1 rounded border border-green-200">Next year, I will visit Wellington, which is the capital of New Zealand.</p>
    </div>
  </div>
</section>
    `,

    examples: [
      { en: "This is the girl who studies the best in my class.", vi: "Đây là bạn nữ học giỏi nhất lớp tôi." },
      { en: "I'll return the book which you lent me.", vi: "Tớ sẽ trả lại bạn quyển sách mà bạn cho mượn." },
      { en: "Students who come late will be disciplined.", vi: "Những học sinh đến muộn sẽ bị phạt." },
      { en: "Brian, who studies in my class, comes from Mexico.", vi: "Brian, người học cùng lớp tôi, đến từ Mexico." }
    ]
  }
};

export default u8;

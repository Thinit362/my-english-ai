import type { UnitGrammar } from "../english10.grammar";

const u1: UnitGrammar = {
  unit: 1,
  grammar1: {
    title: "Phân biệt Hiện tại đơn và Hiện tại tiếp diễn",
    content: `
<h2 class="text-xl font-semibold text-blue-700">1. Khác biệt trong dạng thức của động từ</h2>

<h3 class="mt-3 font-semibold text-gray-800">Hiện tại đơn:</h3>
<ul class="list-disc pl-6 text-gray-700 leading-relaxed">
  <li>Động từ thường (V) <b>giữ nguyên</b> hoặc <b>thêm -s/-es</b> tùy theo chủ ngữ.</li>
  <li>Động từ "to be" chia thành <b>am/is/are</b> tùy theo chủ ngữ.</li>
</ul>

<h3 class="mt-3 font-semibold text-gray-800">Hiện tại tiếp diễn:</h3>
<ul class="list-disc pl-6 text-gray-700 leading-relaxed">
  <li>Động từ chia theo dạng: <b>am/is/are + V-ing</b>.</li>
</ul>

<p class="mt-3 font-medium">Ví dụ:</p>

<p class="text-blue-700">
  She often feeds her baby five times per day. 
  <span data-tts="She often feeds her baby five times per day." class="tts-btn">🔊</span>
</p>
<p class="text-gray-600 italic mb-2">(Cô ấy thường cho con ăn 5 lần mỗi ngày.)</p>

<p class="text-blue-700">
  She is feeding her baby at the moment. 
  <span data-tts="She is feeding her baby at the moment." class="tts-btn">🔊</span>
</p>
<p class="text-gray-600 italic">(Cô ấy đang cho con ăn.)</p>


<h2 class="mt-6 text-xl font-semibold text-blue-700">2. Khác biệt trong cách dùng</h2>

<h3 class="mt-3 font-semibold text-gray-800">Hiện tại đơn:</h3>
<p>Dùng để diễn tả hành động <b>lặp đi lặp lại, thường xuyên</b>.</p>

<h3 class="mt-3 font-semibold text-gray-800">Hiện tại tiếp diễn:</h3>
<p>Dùng để diễn tả hành động đang xảy ra <b>tại thời điểm nói</b> hoặc xung quanh thời điểm nói.</p>

<p class="mt-3 font-medium">Ví dụ:</p>

<p class="text-blue-700">
  My younger sister always does the washing-up after meals.
  <span data-tts="My younger sister always does the washing-up after meals." class="tts-btn">🔊</span>
</p>
<p class="text-gray-600 italic mb-2">(Em gái tôi luôn rửa bát sau bữa ăn.)</p>

<p class="text-blue-700">
  My younger sister is doing the washing-up now.
  <span data-tts="My younger sister is doing the washing-up now." class="tts-btn">🔊</span>
</p>
<p class="text-gray-600 italic">(Em gái tôi đang rửa bát.)</p>

<h2 class="mt-6 text-xl font-semibold text-blue-700">3. Động từ đặc trưng của từng thì</h2>

<h3 class="mt-3 font-semibold text-gray-800">Thì hiện tại đơn:</h3>
<p>Các động từ chỉ trạng thái, cảm xúc, sở hữu… thường không dùng ở hiện tại tiếp diễn.</p>

<ul class="list-disc pl-6 text-gray-700">
  <li>believe, like, love, hate, know, understand, want…</li>
</ul>

<h3 class="mt-3 font-semibold text-gray-800">Thì hiện tại tiếp diễn:</h3>
<p>Các động từ thể hiện sự thay đổi, xu hướng:</p>

<ul class="list-disc pl-6 text-gray-700">
  <li>get, grow, change, become, improve, increase…</li>
</ul>

<h2 class="mt-6 text-xl font-semibold text-blue-700">4. Một số động từ dùng được ở cả hai thì</h2>
<table class="w-full border mt-3 text-sm">
  <tr><th class="border p-2 bg-gray-100">Động từ</th><th class="border p-2 bg-gray-100">Hiện tại đơn</th><th class="border p-2 bg-gray-100">Hiện tại tiếp diễn</th></tr>

  <tr>
    <td class="border p-2">taste</td>
    <td class="border p-2">The soup tastes good.</td>
    <td class="border p-2">I am tasting the soup.</td>
  </tr>

  <tr>
    <td class="border p-2">look</td>
    <td class="border p-2">They look happy.</td>
    <td class="border p-2">Why are you looking at me?</td>
  </tr>

  <tr>
    <td class="border p-2">weigh</td>
    <td class="border p-2">The oranges weigh a kilo.</td>
    <td class="border p-2">She is weighing the oranges.</td>
  </tr>
</table>
`,
  },
};

export default u1;

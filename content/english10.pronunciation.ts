// content/english10.pronunciation.ts

import u1 from "./pronunciation/en10.u1";
import u2 from "./pronunciation/en10.u2";
import u3 from "./pronunciation/en10.u3";
import u4 from "./pronunciation/en10.u4";
import u5 from "./pronunciation/en10.u5";
import u6 from "./pronunciation/en10.u6";
import u7 from "./pronunciation/en10.u7";
import u8 from "./pronunciation/en10.u8";
import u9 from "./pronunciation/en10.u9";
import u10 from "./pronunciation/en10.u10";

/**
 * Một item dùng cho TTS + luyện phát âm.
 * Có thể là từ đơn hoặc câu.
 */
export type PronunciationItem = {
  text: string;                 // từ/câu để hiển thị + gửi lên Cloud TTS
  ipa?: string;                 // phiên âm /ˈkemɪkəl/
  vi?: string;                  // nghĩa hoặc chú thích tiếng Việt
  type?: "word" | "sentence";   // phân loại cho UI (không bắt buộc)
  voice?: string;               // nếu muốn chỉ định voice khác mặc định
};

/**
 * Khối nội dung chính của phần Pronunciation trong 1 unit.
 */
export type PronunciationBlock = {
  title: string;          // tiêu đề: "Phụ âm cụm /tr/ /kr/ /br/"
  focus: string;          // mô tả ngắn: "Luyện phát âm các cụm phụ âm ..."
  viExplain: string;      // giải thích chi tiết (có thể dùng markdown)
  tips?: string[];        // các gạch đầu dòng mẹo luyện phát âm
  items: PronunciationItem[]; // danh sách từ/câu để nghe + ghi âm
};

export type UnitPronunciation = {
  unit: number;                 // 1..10
  pronunciation: PronunciationBlock;
};

// Gom tất cả unit lại
export const EN10_PRONUNCIATION: UnitPronunciation[] = [
  u1,
  u2,
  u3,
  u4,
  u5,
  u6,
  u7,
  u8,
  u9,
  u10,
];

// Helper tìm theo Unit (dùng ở page.tsx)
export function findPronunciationByUnit(
  unit: number
): UnitPronunciation | undefined {
  return EN10_PRONUNCIATION.find((p) => p.unit === unit);
}

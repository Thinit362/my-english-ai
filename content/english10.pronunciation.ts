// =============================================
//  ENGLISH 10 – PRONUNCIATION DATA STRUCTURE
// =============================================
// ===== Bảng so sánh Danh từ/Tính từ vs Động từ (Unit 4) =====
export type PronunciationPairRow = {
  left: PronunciationItem;   // cột Danh từ / Tính từ
  right: PronunciationItem;  // cột Động từ
};

export type PronunciationCompareTable = {
  leftHeader: string;              // "Danh từ / Tính từ"
  rightHeader: string;             // "Động từ"
  rows: PronunciationPairRow[];    // từng dòng so sánh
};
// Một mục luyện phát âm
export type PronunciationItem = {
  /**
   * Chuỗi hiển thị trên UI
   * - Kiểu mới: dùng display (ví dụ: "trick /trɪk/ (trò lừa gạt)")
   * - Kiểu cũ: có thể chỉ có text, ta sẽ fallback sang text khi hiển thị
   */
  display?: string;

  /**
   * Chuỗi gửi lên Cloud TTS để đọc
   * - Kiểu mới: dùng playText (ví dụ: "trick")
   * - Nếu không có, có thể fallback sang display hoặc text
   */
  playText?: string;

  /**
   * Kiểu cũ: một số file có thể đang dùng text
   * (ví dụ: "trick" hoặc cả câu ví dụ)
   */
  text?: string;

  /** IPA (không có dấu "/" — ta sẽ tự render trong UI) */
  ipa?: string;

  /** Nghĩa tiếng Việt */
  vi?: string;

  /** Loại ví dụ: từ đơn hoặc câu hoàn chỉnh */
  type?: "word" | "sentence";

  /** Voice tuỳ chọn */
  voice?: string;

  /** IPA cần tô đỏ (ví dụ: "tr", "kr", "br") */
  highlight?: string;
};

// Một khối phát âm cho một âm /tr/ /kr/ /br/ trong unit
export type PronunciationBlock = {
  /** Tiêu đề (How to pronounce /tr/...) */
  title: string;

  /** (kiểu cũ) focus: mô tả ngắn chủ điểm phát âm của unit */
  focus?: string;

  /** Nội dung giải thích tiếng Việt (có thể bỏ trống nếu dùng description) */
  viExplain?: string;

  /** Mô tả chi tiết / giải thích (alias cho viExplain, tuỳ bạn dùng cái nào) */
  description?: string;

  /** Danh sách ví dụ luyện phát âm */
  items: PronunciationItem[];

  /** (tuỳ chọn) hình minh hoạ cách phát âm */
  image?: string;

  /** (tuỳ chọn) phần tips */
  tips?: string[];

  /** (tuỳ chọn) từ khoá âm cần luyện (ví dụ "tr") */
  targetSound?: string;

  /** (tuỳ chọn) label hiển thị trên tab: "/tr/", "/kr/" ... */
  label?: string;

  /** (tuỳ chọn) key duy nhất: "tr", "kr", "br" ... */
  key?: string;
  
  compareTable?: PronunciationCompareTable;
};

// Cấu trúc 1 unit
export type UnitPronunciation = {
  unit: number;

  /** Tiêu đề chung cho cả phần phát âm của Unit (tuỳ chọn) */
  title?: string;

  /** Đoạn giới thiệu chung cho phần phát âm của Unit (tuỳ chọn) */
  intro?: string;

  /**
   * Kiểu cũ: một số unit có thể đang dùng 1 block duy nhất:
   * { unit, pronunciation: PronunciationBlock }
   */
  pronunciation?: PronunciationBlock;

  /**
   * Kiểu mới: một unit có thể có nhiều trang phát âm (ví dụ: /tr/, /kr/, /br/)
   */
  pages?: PronunciationBlock[];

  /** (tuỳ chọn) hình chung cho toàn bộ phần phát âm của Unit */
  image?: string;
};

// ================================
//  IMPORT CÁC UNIT
// ================================

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

// ================================
//  DANH SÁCH UNIT
// ================================

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

// ================================
//  FIND FUNCTION
// ================================

export function findPronunciationByUnit(
  unit: number
): UnitPronunciation | undefined {
  return EN10_PRONUNCIATION.find((x) => x.unit === unit);
}

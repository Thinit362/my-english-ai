// =============================================
//  ENGLISH 10 – PRONUNCIATION DATA STRUCTURE
// =============================================

// Một mục luyện phát âm
export type PronunciationItem = {
  /** Chuỗi hiển thị trên UI (ví dụ: "trick /trɪk/ (trò lừa gạt)") */
  display: string;

  /** Chuỗi gửi lên Cloud TTS để đọc (ví dụ: "trick") */
  playText: string;

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

// Một âm /tr/ /kr/ /br/ của từng unit
export type PronunciationBlock = {
  /** Tiêu đề */
  title: string;

  /** Nội dung giải thích tiếng Việt */
  viExplain: string;

  /** Danh sách ví dụ luyện phát âm */
  items: PronunciationItem[];

  /** (tuỳ chọn) hình minh hoạ cách phát âm */
  image?: string;

  /** (tuỳ chọn) phần tips */
  tips?: string[];

  /** Từ khoá âm cần luyện (ví dụ "tr") */
  targetSound?: string;
};

// Cấu trúc 1 unit
export type UnitPronunciation = {
  unit: number;

  /** Một unit có thể có nhiều trang phát âm (ví dụ: /tr/, /kr/, /br/) */
  pages: PronunciationBlock[];
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

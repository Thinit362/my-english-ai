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

export type PronunciationItem = {
  text: string;
  ipa?: string;
  vi?: string;
  type?: "word" | "sentence";
  voice?: string;
  highlight?: string;      // cụm IPA cần tô đỏ, ví dụ "tr"
  highlightText?: string;  // nếu sau này muốn tô đỏ ngay trong chữ
};

export type SoundSection = {
  key: string;            // "tr", "kr", "br"
  label: string;          // "/tr/", "/kr/", "/br/"
  title?: string;
  description?: string;
  image?: string;         // hình minh hoạ khẩu hình (nếu có)
  items: PronunciationItem[];
};

/**
 * Khối nội dung chính của phần Pronunciation trong 1 unit.
 */
export type PronunciationBlock = {
  title: string;
  focus: string;
  viExplain: string;
  tips?: string[];
  items?: PronunciationItem[];  // dùng cho unit đơn giản
  sounds?: SoundSection[];      // dùng khi 1 unit có nhiều âm
};

export type UnitPronunciation = {
  unit: number;
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

// content/english10.grammar.ts

// ======================
// Types cho phần Grammar
// ======================

export type ExampleItem = {
  en: string;
  vi?: string;
  voice?: string; // nếu sau này bạn muốn chọn giọng khác cho TTS
};

export type GrammarBlock = {
  title: string;
  viExplain: string;      // có thể là markdown
  examples: ExampleItem[];
};

export type UnitGrammar = {
  unit: number;
  grammar1: GrammarBlock;
  grammar2?: GrammarBlock; // có thể có hoặc không
};

// ======================
// Import các unit grammar
// ======================

import u1 from "./grammar/en10.u1";
import u2 from "./grammar/en10.u2";
import u3 from "./grammar/en10.u3";
import u4 from "./grammar/en10.u4";
import u5 from "./grammar/en10.u5";
import u6 from "./grammar/en10.u6";
import u7 from "./grammar/en10.u7";
import u8 from "./grammar/en10.u8";
import u9 from "./grammar/en10.u9";
import u10 from "./grammar/en10.u10";

// ======================
// Mảng tổng & helper
// ======================

export const EN10_GRAMMAR: UnitGrammar[] = [
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

export const findGrammarByUnit = (unit: number): UnitGrammar | undefined =>
  EN10_GRAMMAR.find((g) => g.unit === unit);

// content/practice/vocab/en10.u1.v1.ex1.ts

export type WordType = "noun phrase" | "verb phrase" | "conjunction";

export interface VocabTriple {
  id: string;        // id chung cho bộ 3
  en: string;        // từ/cụm từ tiếng Anh
  vi: string;        // nghĩa tiếng Việt
  typeLabel: string; // nhãn từ loại hiển thị
  wordType: WordType;
  audioText?: string; // text dùng cho đọc (nếu khác en)
}

export const u1V1Ex1Data: VocabTriple[] = [
  {
    id: "w1",
    en: "do the washing-up",
    vi: "rửa bát",
    typeLabel: "Verb phrase (v. phr.)",
    wordType: "verb phrase",
  },
  {
    id: "w2",
    en: "take out the rubbish",
    vi: "đổ rác",
    typeLabel: "Verb phrase (v. phr.)",
    wordType: "verb phrase",
  },
  {
    id: "w3",
    en: "household chores",
    vi: "những công việc vặt trong nhà",
    typeLabel: "Noun phrase (n. phr.)",
    wordType: "noun phrase",
  },
  {
    id: "w4",
    en: "tidy up the house",
    vi: "dọn dẹp nhà cửa",
    typeLabel: "Verb phrase (v. phr.)",
    wordType: "verb phrase",
  },
  {
    id: "w5",
    en: "help with the heavy lifting",
    vi: "giúp những việc nặng",
    typeLabel: "Verb phrase (v. phr.)",
    wordType: "verb phrase",
  },
  {
    id: "w6",
    en: "conjunction",
    vi: "liên từ",
    typeLabel: "Conjunction (conj.)",
    wordType: "conjunction",
  },
  // Bạn thêm tiếp cho đủ 9 từ giống đề nhé
];

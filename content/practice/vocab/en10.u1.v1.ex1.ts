// content/practice/vocab/en10.u1.v1.ex1.ts

export type WordType = "noun phrase" | "verb phrase" | "conjunction";

export interface VocabTriple {
  id: string;          // dùng để ghép 3 ô với nhau
  en: string;          // từ / cụm từ tiếng Anh
  vi: string;          // nghĩa tiếng Việt
  typeLabel: string;   // "Noun phrase (n. phr.)" ...
  wordType: WordType;
  audioId?: string;    // id audio nếu bạn muốn dùng TTSPlay
}

export const u1V1Ex1Data: VocabTriple[] = [
  {
    id: "w1",
    en: "do the washing-up",
    vi: "rửa bát",
    typeLabel: "Verb phrase (v. phr.)",
    wordType: "verb phrase",
    audioId: "en10.u1.v1.w1",
  },
  {
    id: "w2",
    en: "take out the rubbish",
    vi: "đổ rác",
    typeLabel: "Verb phrase (v. phr.)",
    wordType: "verb phrase",
    audioId: "en10.u1.v1.w2",
  },
  {
    id: "w3",
    en: "household chores",
    vi: "việc vặt trong nhà",
    typeLabel: "Noun phrase (n. phr.)",
    wordType: "noun phrase",
    audioId: "en10.u1.v1.w3",
  },
  // ... bạn thêm cho đủ 9 từ giống đề gốc
];

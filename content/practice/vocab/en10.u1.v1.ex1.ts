// content/practice/vocab/en10.u1.v1.ex1.ts

export interface VocabTriple {
  id: string;        // id duy nhất (dùng để ghép 3 ô)
  en: string;        // từ tiếng Anh
  vi: string;        // nghĩa tiếng Việt
  typeLabel: string; // từ loại hiển thị
  audioText?: string;
}

export const u1V1Ex1Data: VocabTriple[] = [
  {
    id: "sort-rubbish",
    en: "sort rubbish",
    vi: "phân loại rác",
    typeLabel: "Verb phrase (v. phr.)",
    audioText: "sort rubbish",
  },
  {
    id: "wash-dishes",
    en: "wash the dishes",
    vi: "rửa bát đĩa",
    typeLabel: "Verb phrase (v. phr.)",
    audioText: "wash the dishes",
  },
  {
    id: "do-laundry",
    en: "do the laundry",
    vi: "giặt quần áo",
    typeLabel: "Verb phrase (v. phr.)",
    audioText: "do the laundry",
  },
  {
    id: "water-plants",
    en: "water the plants",
    vi: "tưới cây",
    typeLabel: "Verb (v.)",
    audioText: "water the plants",
  },
  {
    id: "take-care-baby",
    en: "take care of the baby",
    vi: "chăm em bé",
    typeLabel: "Verb phrase (v. phr.)",
    audioText: "take care of the baby",
  },
  {
    id: "do-groceries",
    en: "do the groceries",
    vi: "đi mua sắm",
    typeLabel: "Verb phrase (v. phr.)",
    audioText: "do the groceries",
  },
  {
    id: "cook-meals",
    en: "cook meals",
    vi: "nấu ăn",
    typeLabel: "Verb (v.)",
    audioText: "cook meals",
  },
  {
    id: "sweep-house",
    en: "sweep the house",
    vi: "quét/ dọn nhà",
    typeLabel: "Verb phrase (v. phr.)",
    audioText: "sweep the house",
  },
  {
    id: "heavy-lifting",
    en: "do the heavy lifting",
    vi: "làm việc nặng",
    typeLabel: "Verb phrase (v. phr.)",
    audioText: "do the heavy lifting",
  },
];

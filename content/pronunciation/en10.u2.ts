// content/english10.pronunciation.ts

export type PronunciationItem = {
  display: string;
  playText: string;
  ipa?: string;
  vi?: string;
  type?: "word" | "sentence";
  voice?: string;
  highlight?: string;
};

export type PronunciationBlock = {
  title: string;
  viExplain: string;
  items: PronunciationItem[];
  image?: string;
  tips?: string[];
  targetSound?: string;
};

export type UnitPronunciation = {
  unit: number;
  pages: PronunciationBlock[];
};

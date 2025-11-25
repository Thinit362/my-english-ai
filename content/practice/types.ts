// content/practice/types.ts
export type SectionKey =
  | "vocabulary-1"
  | "vocabulary-2"
  | "grammar-1"
  | "grammar-2"
  | "grammar-1" // có thể thêm "grammar" nếu cần
  | "pronunciation";

export type GameType =
  | "listen-choose"
  | "listen-fill-blank"
  | "match"
  | "true-false"
  | "drag-drop"
  | "record-sentence";

export interface PracticeTask {
  id: string;             // "ex1"
  title: string;          // "Bài tập 1"
  description?: string;   // "Nghe và chọn từ bạn nghe thấy."
  gameType: GameType;
  datasetId: string;      // id để load bộ câu hỏi / audio / đáp án
}

// content/practice/types.ts

export type SectionKey =
  | "vocabulary-1"
  | "vocabulary-2"
  | "grammar-1"
  | "grammar-2"
  | "pronunciation";

export type GameType =
  | "flash-audio-match"    // 🟢 thêm để fix lỗi build
  | "listen-choose"
  | "listen-fill-blank"
  | "match"
  | "true-false"
  | "drag-drop"
  | "record-sentence"
  |  "gap-fill"
  | "coming-soon"        
  | "listen-choose" 
  | "multiple-choice"
  | "record-compare"// tuỳ chọn: fallback cho các dạng khác
  | "drag-fill";          // game kéo / click cụm từ điền vào chỗ trống

export interface PracticeTask {
  id: string;              // "ex1"
  title: string;           // "Bài tập 1"
  description?: string;    // "Nghe và chọn đáp án đúng"
  gameType: GameType;      // dạng bài tập
  datasetId: string;       // id để load dữ liệu tương ứng
}

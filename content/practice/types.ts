// content/practice/types.ts
export type PracticeSection =
  | "vocabulary-1"
  | "vocabulary-2"
  | "grammar-1"
  | "grammar-2"
  | "pronunciation";

export type GameType =
  | "listen-choose"      // nghe và chọn đáp án
  | "listen-fill-blank"  // nghe và điền từ còn thiếu
  | "match"              // nối hai cột
  | "true-false"         // chọn đúng/sai
  | "drag-drop"          // kéo thả
  | "record-sentence";   // đọc câu, ghi âm & chấm điểm

export interface PracticeExerciseMeta {
  id: string;              // "ex1"
  slug: string;            // "bai-tap-1" (dùng cho URL nếu cần)
  unit: number;            // 1..10
  section: PracticeSection;

  title: string;           // "Bài tập 1"
  subtitle: string;        // "Nghe và chọn từ bạn nghe thấy."
  icon?: string;           // đường dẫn icon hoặc tên icon

  gameType: GameType;      // dạng bài
  datasetId: string;       // id bộ dữ liệu (để load câu hỏi/audio)
}

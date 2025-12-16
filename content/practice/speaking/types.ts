// content/practice/speaking/types.ts

export type SpeakingTheoryItem = {
  en: string;
  vi?: string;
};

export type SpeakingTheoryBlock = {
  id: string;
  title: string;
  contentEn?: string;
  contentVi?: string;
  items?: SpeakingTheoryItem[];
};

/**
 * Backward-compatible:
 * - Unit cũ: không cần "type" => mặc định là speak
 * - Unit mới (MCQ): set type="mcq" + options + answer
 */
export type SpeakingQuestion =
  | SpeakingSpeakQuestion
  | SpeakingMCQQuestion;

export type SpeakingSpeakQuestion = {
  id: string;

  /** Không khai báo type vẫn được, component sẽ hiểu là speak */
  type?: "speak";

  /** Câu hỏi tiếng Anh để HS nghe & luyện nói */
  promptEn: string;
  /** Gợi ý tiếng Việt */
  promptVi?: string;

  /** Mẹo / hướng dẫn thêm */
  tipEn?: string;
  tipVi?: string;

  /** Câu mẫu gợi ý trả lời / câu chuẩn để chấm điểm (nếu có) */
  sampleAnswerEn?: string;
  sampleAnswerVi?: string;

  /** Gợi ý cấu trúc nổi bật (hiện ở chip vàng) */
  structureHighlight?: string;

  /** Nếu muốn dùng voice khác mặc định cho câu này */
  voice?: string;
};

export type SpeakingMCQQuestion = {
  id: string;
  type: "mcq";

  /** Nội dung câu hỏi */
  promptEn: string;
  promptVi?: string;

  /** Các lựa chọn */
  options: string[];

  /** Đáp án đúng (phải trùng 1 option) */
  answer: string;

  /** Giải thích (optional) */
  explanationEn?: string;
  explanationVi?: string;
};

export type SpeakingExercisePage = {
  id: string;
  title: string;
  instructionEn: string;
  instructionVi?: string;
  questions: SpeakingQuestion[];
};

export type SpeakingLesson = {
  unit: number;
  /** Chủ đề tiếng Việt (hiện trên header) */
  topicVi: string;
  /** Tiêu đề tiếng Anh */
  titleEn: string;
  descriptionEn?: string;
  descriptionVi?: string;

  theory?: SpeakingTheoryBlock[];
  exercises: SpeakingExercisePage[];
};

/** Kiểu map toàn bộ các Unit */
export type SpeakingContent = Record<number, SpeakingLesson>;

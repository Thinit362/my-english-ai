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

export type SpeakingQuestion = {
  id: string;
  /** Câu hỏi tiếng Anh để HS nghe & luyện nói */
  promptEn: string;
  /** Gợi ý tiếng Việt */
  promptVi?: string;

  /** Mẹo / hướng dẫn thêm */
  tipEn?: string;
  tipVi?: string;

  /** Câu mẫu gợi ý trả lời */
  sampleAnswerEn?: string;
  sampleAnswerVi?: string;

  /** Gợi ý cấu trúc nổi bật (hiện ở chip vàng) */
  structureHighlight?: string;

  /** Nếu muốn dùng voice khác mặc định cho câu này */
  voice?: string;
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
export type SpeakingMCQQuestion = SpeakingQuestionBase & {
  type: "mcq";
  options: string[];
  answer: string; // đáp án đúng = 1 option
};
export type SpeakingSpeakQuestion = SpeakingQuestionBase & {
  type: "speak";
/** Kiểu map toàn bộ các Unit */
export type SpeakingContent = Record<number, SpeakingLesson>;

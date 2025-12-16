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

  /** Câu/đoạn tiếng Anh để luyện nói */
  promptEn: string;
  /** Gợi ý tiếng Việt */
  promptVi?: string;

  /** Câu mẫu chuẩn để nghe & chấm điểm (nếu có) */
  sampleAnswerEn?: string;
  sampleAnswerVi?: string;

  /** Mẹo / hướng dẫn thêm */
  tipEn?: string;
  tipVi?: string;

  /** Gợi ý cấu trúc nổi bật */
  structureHighlight?: string;

  /** Voice riêng (nếu cần) */
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
  topicVi: string;
  titleEn: string;
  descriptionEn?: string;
  descriptionVi?: string;

  theory?: SpeakingTheoryBlock[];
  exercises: SpeakingExercisePage[];
};

export type SpeakingContent = Record<number, SpeakingLesson>;

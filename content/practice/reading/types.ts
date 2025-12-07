// Kiểu cho 1 câu hỏi chung
export type ReadingQuestionBase = {
  id: string;
  question: string;
  viHint?: string;
};

export type ReadingInputQuestion = ReadingQuestionBase & {
  type: "input";
};

export type ReadingMcqQuestion = ReadingQuestionBase & {
  type: "mcq";
  options: string[];
};

export type ReadingQuestion = ReadingInputQuestion | ReadingMcqQuestion;

// 1 trang bài tập (page 1, page 2...)
export type ReadingExercisePage = {
  id: string;
  title: string;
  instructionEn: string;
  instructionVi?: string;
  questions: ReadingQuestion[];
  answers: Record<string, string>;
  explanations?: Record<string, string>;
};

// Dataset cho 1 bài luyện đọc
export type ReadingLesson = {
  id: string;             // "en10.u1.read1"
  unit: number;           // 1..10
  skill: "reading";
  topicVi: string;
  titleEn: string;
  passage: string[];      // các đoạn tiếng Anh
  translation: string[];  // bản dịch từng đoạn
  exercises: ReadingExercisePage[];
};

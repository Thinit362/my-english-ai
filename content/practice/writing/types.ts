export type WritingLesson = {
  unit: number;
  topicVi: string;

  titleEn: string;
  descriptionEn?: string;
  descriptionVi?: string;

  theory?: WritingTheoryBlock[];
  exercises: WritingExercisePage[];
};

export type WritingTheoryBlock = {
  id: string;
  title: string;

  contentEn?: string;
  contentVi?: string;

  quoteEn?: string;

  items?: Array<{ en: string; vi?: string }>;

  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type WritingExercisePage = {
  id: string;
  title: string;
  instructionEn: string;
  instructionVi?: string;
  exercises: WritingExercise[];
};

export type WritingExercise = MCQExercise | DragBlankExercise;

export type MCQExercise = {
  type: "mcq";
  id: string;
  title: string;
  description?: string;
  questions: Array<{
    id: string;
    prompt: string;
    options: Array<{ id: "A" | "B" | "C"; text: string }>;
    correctOptionId: "A" | "B" | "C";
    explanation?: string;
  }>;
};

export type DragBlankExercise = {
  type: "drag_blank";
  id: string;
  title: string;
  description?: string;

  sentenceParts: Array<string | { blankId: string }>;
  wordBank: string[];
  correctAnswers: Record<string, string>; // blankId -> word
  explanation?: string;
};

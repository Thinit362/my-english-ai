// content/practice/loader.ts
import { PracticeTask, SectionKey } from "./types";
import { vocabularyPractice } from "./vocabulary";

// Sau này bạn có thể import thêm:
// import { grammarPractice } from "./grammar";
// import { pronunciationPractice } from "./pronunciation";

export function getPracticeTasks(
  unit: number,
  section: SectionKey
): PracticeTask[] {
  const all: PracticeTask[] = [
    ...vocabularyPractice,
    // ...grammarPractice,
    // ...pronunciationPractice,
  ];

  return all.filter((t) => t.unit === unit && t.section === section);
}

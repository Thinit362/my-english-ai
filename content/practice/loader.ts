// content/practice/loader.ts
import { PracticeTask, SectionKey } from "./types";
import { pronunciationPractice } from "./pronunciation";
// sau này bạn có thể import thêm: vocabularyPractice, grammarPractice...

export function getPracticeTasksFor(
  unit: number,
  sectionKey: string
): PracticeTask[] | undefined {
  const key = sectionKey as SectionKey;

  // Pronunciation
  if (pronunciationPractice[unit]?.[key]) {
    return pronunciationPractice[unit][key];
  }

  // TODO: vocabularyPractice, grammarPractice...
  return undefined;
}

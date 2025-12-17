//content/practice/writing/loader.ts
import { writingUnit1 } from "./unit1";
import type { WritingLesson } from "./types";

const lessons: WritingLesson[] = [writingUnit1];

export function getWritingByUnit(unit: number): WritingLesson | undefined {
  return lessons.find((l) => l.unit === unit);
}

//content/practice/writing/loader.ts
import { writingUnit1 } from "./unit1";
import { writingUnit2 } from "./unit2";
import { writingUnit3 } from "./unit3";
import { writingUnit4 } from "./unit4";
import { writingUnit5 } from "./unit5";
import { writingUnit6 } from "./unit6";
import type { WritingLesson } from "./types";

const lessons: WritingLesson[] = [writingUnit1, writingUnit2, writingUnit3, writingUnit4, writingUnit5, writingUnit6];

export function getWritingByUnit(unit: number): WritingLesson | undefined {
  return lessons.find((l) => l.unit === unit);
}

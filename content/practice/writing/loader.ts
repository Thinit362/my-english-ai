//content/practice/writing/loader.ts
import { writingUnit1 } from "./unit1";
import { writingUnit2 } from "./unit2";
import { writingUnit3 } from "./unit3";
import { writingUnit4 } from "./unit4";
import { writingUnit5 } from "./unit5";
import { writingUnit6 } from "./unit6";
import { writingUnit7 } from "./unit7";
import { writingUnit8 } from "./unit8";
import { writingUnit9 } from "./unit9";
import { writingUnit10 } from "./unit10";
import type { WritingLesson } from "./types";

const lessons: WritingLesson[] = [writingUnit1, writingUnit2, writingUnit3, writingUnit4, writingUnit5, writingUnit6, writingUnit7, writingUnit8, writingUnit9,writingUnit10];

export function getWritingByUnit(unit: number): WritingLesson | undefined {
  return lessons.find((l) => l.unit === unit);
}

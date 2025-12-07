//content/practice/reading/loader.ts
import type { ReadingLesson } from "./types";
import en10_u1_read1 from "./en10.u1.read1";
import en10_u2_read1 from "./en10.u2.read1";

const datasets: ReadingLesson[] = [en10_u1_read1, en10_u2_read1];

export function getReadingByUnit(unit: number): ReadingLesson | undefined {
  return datasets.find((d) => d.unit === unit);
}

export function getReadingById(id: string): ReadingLesson | undefined {
  return datasets.find((d) => d.id === id);
}

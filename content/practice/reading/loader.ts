//content/practice/reading/loader.ts
import type { ReadingLesson } from "./types";
import en10_u1_read1 from "./en10.u1.read1";
import en10_u2_read1 from "./en10.u2.read1";
import en10_u3_read1 from "./en10.u3.read1";
import en10_u4_read1 from "./en10.u4.read1";
import en10_u5_read1 from "./en10.u5.read1";
import en10_u6_read1 from "./en10.u6.read1";
import en10_u7_read1 from "./en10.u7.read1";
import en10_u8_read1 from "./en10.u8.read1";
import en10_u9_read1 from "./en10.u9.read1";

const datasets: ReadingLesson[] = [en10_u1_read1, en10_u2_read1,en10_u3_read1, en10_u4_read1,en10_u5_read1,en10_u6_read1,en10_u7_read1,en10_u8_read1,en10_u9_read1]];

export function getReadingByUnit(unit: number): ReadingLesson | undefined {
  return datasets.find((d) => d.unit === unit);
}

export function getReadingById(id: string): ReadingLesson | undefined {
  return datasets.find((d) => d.id === id);
}

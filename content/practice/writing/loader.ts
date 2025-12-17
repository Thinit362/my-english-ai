import type { WritingLesson } from "./types";

import u1w1 from "./en10.u1.write1";
import u1w2 from "./en10.u1.write2";

const lessons: WritingLesson[] = [u1w1, u1w2];

export function getWritingByUnit(unit: number): WritingLesson | undefined {
  // gộp các page của cùng unit (vì unit có nhiều file write1, write2…)
  const sameUnit = lessons.filter((l) => l.unit === unit);
  if (sameUnit.length === 0) return undefined;

  // lấy meta từ file đầu, gộp theory + exercises theo thứ tự file
  const base = sameUnit[0];
  return {
    ...base,
    theory: sameUnit.flatMap((x) => x.theory ?? []),
    exercises: sameUnit.flatMap((x) => x.exercises),
  };
}

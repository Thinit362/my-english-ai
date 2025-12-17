import { WRITING_LESSONS } from "./units";
import type { WritingLesson } from "./types";

export function getWritingByUnit(unit: number): WritingLesson | undefined {
  return WRITING_LESSONS.find((l) => l.unit === unit);
}

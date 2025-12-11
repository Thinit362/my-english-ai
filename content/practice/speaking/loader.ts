// content/practice/speaking/loader.ts
import type { SpeakingContent, SpeakingLesson } from "./types";
import { speakingUnit1 } from "./unit1";
import { speakingUnit2 } from "./unit2";
import { speakingUnit3 } from "./unit3";
import { speakingUnit4 } from "./unit4";

// Sau này bạn chỉ cần import thêm unit2, unit3... rồi thêm vào map dưới
const speakingContent: SpeakingContent = {
  1: speakingUnit1,
  2: speakingUnit2,
  3: speakingUnit3,
  4: speakingUnit4,
};

export function getSpeakingByUnit(unit: number): SpeakingLesson | undefined {
  return speakingContent[unit];
}

/** Nếu cần lấy toàn bộ */
export function getAllSpeakingLessons(): SpeakingContent {
  return speakingContent;
}

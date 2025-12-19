// content/practice/listening/loader.ts
import type { ListeningLesson } from "./types";

// Import từng bài nghe (Unit 1, Unit 2, ...)  
// Hiện tại bạn mới có Unit 1
import en10_u1_listen1 from "./en10.u1.listen1";
import en10_u2_listen1 from "./en10.u2.listen1";
import en10_u3_listen1 from "./en10.u3.listen1";
import en10_u4_listen1 from "./en10.u4.listen1";
import en10_u5_listen1 from "./en10.u5.listen1";
import en10_u6_listen1 from "./en10.u6.listen1";
import en10_u7_listen1 from "./en10.u7.listen1";
import en10_u9_listen1 from "./en10.u9.listen1";
import en10_u10_listen1 from "./en10.u10.listen1";
// Mảng chứa toàn bộ bài luyện nghe
const listeningData: ListeningLesson[] = [
  en10_u1_listen1,
  en10_u2_listen1,
  en10_u3_listen1,
  en10_u4_listen1,
  en10_u5_listen1,
  en10_u6_listen1,
  en10_u7_listen1,
  en10_u9_listen1,
  en10_u10_listen1,
 
];

/**
 * Trả về bài luyện nghe theo Unit.
 * Nếu chưa có dữ liệu Unit đó → return undefined
 */
export function getListeningByUnit(unit: number): ListeningLesson | undefined {
  return listeningData.find((item) => item.unit === unit);
}

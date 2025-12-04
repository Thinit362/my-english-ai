// content/practice/listenChoose/datasets.ts

import { en10u1p1ex1 } from "./en10.u1.p1.ex1";
import { en10u2p1ex1 } from "./en10.u2.p1.ex1";
import { en10u3p1ex1 } from "./en10.u3.p1.ex1";
import { en10u4p1ex1 } from "./en10.u4.p1.ex1";
import { en10u6p1ex1 } from "./en10.u6.p1.ex1";
import { en10u8p1ex2 } from "./en10.u8.p1.ex2";
import { en10u3v1ex1 } from "./en10.u3.v1.ex1";

// Map toàn bộ dataset listen-choose
export const LISTEN_CHOOSE_DATASETS: Record<string, any> = {
  // Unit 1
  "en10.u1.p1.ex1": en10u1p1ex1,

  // Unit 2
  "en10.u2.p1.ex1": en10u2p1ex1,

  // Unit 3
  "en10.u3.p1.ex1": en10u3p1ex1,

  // Unit 4
  "en10.u4.p1.ex1": en10u4p1ex1,
  // Unit 6
  "en10.u6.p1.ex1": en10u6p1ex1,
  // Unit 8 – Pronunciation, Bài tập 2
  "en10.u8.p1.ex2": en10u8p1ex2,
  // Unit 3 – Vocabulary 1 (MCQ)
  "en10.u3.v1.ex1": en10u3v1ex1,
};


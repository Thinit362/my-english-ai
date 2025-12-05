import { en10u5p1ex4 } from "./en10.u5.p1.ex4";
import { en10u7p3ex1 } from "./en10.u7.p3.ex1";
import { en10u9p1ex1 } from "./en10.u9.p1.ex1";
import { en10u10p3ex3 } from "./en10.u10.p3.ex3";
import { u6V1Ex1Data } from "./en10.u6.v1.ex1";
import { u8V1Ex1Data } from "./en10.u8.v1.ex1";
import { u9V1Ex1Data } from "./en10.u9.v1.ex1";
import { u10V1Ex1Data } from "./en10.u10.v1.ex1";

export const VOCAB_DATASETS: Record<string, any> = {
  // ... các dataset cũ
  "en10.u5.p1.ex4": en10u5p1ex4, 
  "en10.u7.p3.ex1": en10u7p3ex1,
  "en10.u9.p1.ex1": en10u9p1ex1,
  "en10.u10.p3.ex3": en10u10p3ex3,
  "en10.u6.v1.ex1": u6V1Ex1Data,
  "en10.u8.v1.ex1": u8V1Ex1Data,
  "en10.u9.v1.ex1": u9V1Ex1Data,
  "en10.u10.v1.ex1": u10V1Ex1Data,// 👈 thêm dòng này
};

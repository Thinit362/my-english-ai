// content/practice/multipleChoice/datasets.ts
import { MultipleChoiceDataset } from "@/components/games/MultipleChoiceGame";
import { en10u5g1mc1 } from "./en10.u5.g1.mc1";
import { en10u6g1mc1 } from "./en10.u6.g1.mc1";

export const MULTIPLE_CHOICE_DATASETS: Record<string, MultipleChoiceDataset> = {
  "en10.u5.g1.mc1": en10u5g1mc1,
  "en10.u6.g1.mc1": en10u6g1mc1,
};

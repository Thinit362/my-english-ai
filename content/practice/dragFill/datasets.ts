import { DragFillDataset } from "@/components/games/DragFillGame";
import { en10u1v2ex1 } from "./en10.u1.v2.ex1";
import { en10u2v2ex1 } from "./en10.u2.v2.ex1"; 
import { en10u3g1ex1 } from "./en10.u3.g1.ex1";
import { en10u3g1ex2 } from "./en10.u3.g1.ex2";
import { en10u3g2ex1 } from "./en10.u3.g2.ex1";
import { en10u3g2ex2 } from "./en10.u3.g2.ex2";

export const DRAG_FILL_DATASETS: Record<string, DragFillDataset> = {
  "en10.u1.v2.ex1": en10u1v2ex1,
  "en10.u2.v2.ex1": en10u2v2ex1,   
  "en10.u3.g1.ex1": en10u3g1ex1,
  "en10.u3.g1.ex2": en10u3g1ex2,
  "en10.u3.g2.ex1": en10u3g2ex1,
  "en10.u3.g2.ex2": en10u3g2ex2,
};

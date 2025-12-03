import { DragFillDataset } from "@/components/games/DragFillGame";
import { en10u1v2ex1 } from "./en10.u1.v2.ex1";
import { en10u2v2ex1 } from "./en10.u2.v2.ex1"; // 👈 thêm dòng này

export const DRAG_FILL_DATASETS: Record<string, DragFillDataset> = {
  "en10.u1.v2.ex1": en10u1v2ex1,
  "en10.u2.v2.ex1": en10u2v2ex1,   // 👈 thêm key mới
};

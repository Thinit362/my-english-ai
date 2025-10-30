import { promises as fs } from "fs";
import path from "path";

/** grade: 10 | 11 | 12 */
export async function getManifest(grade: 10 | 11 | 12) {
  const fileName =
    grade === 10 ? "english10_manifest.json" :
    grade === 11 ? "english11_manifest.json" :
                   "english12_manifest.json";

  const filePath = path.join(process.cwd(), "public", "data", fileName);
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw);
}

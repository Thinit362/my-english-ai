import Link from "next/link";
import GeminiChat from "@/components/GeminiChat";
import { getManifest } from "@/lib/manifests";

export default async function English10Page() {
  const manifest = await getManifest(10);
  const units = manifest.units?.map((u: any) => u.index) || Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div>
      <h1>Tiếng Anh 10 – Global Success</h1>
      <p>Chọn Unit để xem bài học chi tiết, hoặc chat nhanh với trợ lý.</p>

      <div className="grid section">
        {manifest.units?.map((u: any) => (
          <Link key={u.id} className="card" href={`/english-10/unit/${u.index}`}>
            {/* Ảnh: đặt tại public/data/images/unit-11-<index>.jpg */}
            <img
              src={`/data/images/unit-10-${u.index}.jpg`}
              alt={`English 10 - Unit ${u.index}`}
            />
            <h3>Unit {u.index}{u.title ? `: ${u.title}` : ""}</h3>
            <p>{u.summary || "Bấm để mở bài học (Học/Luyện tập/Gemini)."}</p>
          </Link>
        ))}
      </div>

      <GeminiChat pageKey="eng10" units={units} />
    </div>
  );
}
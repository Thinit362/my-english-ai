import Link from "next/link";
import GeminiChat from "@/components/GeminiChat";
import { getManifest } from "@/lib/manifests";

export default async function English11Page() {
  const manifest = await getManifest(11);
  const units =
    manifest.units?.map((u: any) => u.index) ||
    Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div>
      {/* Banner / hình ảnh khóa học */}
      <div className="section" style={{ display: "grid", gap: 8 }}>
     <h1>Tiếng Anh 11 – Global Success</h1>
        <p>Chọn Unit để vào bài học chi tiết, hoặc dùng trợ lý Gemini ngay bên dưới.</p>
      </div>

      {/* Lưới Unit với ảnh + link */}
      <div className="grid section">
        {(manifest.units || units.map((i:number)=>({id:`eng11_u${i}`, index:i}))).map((u: any) => (
          <Link
            key={u.id || `u${u.index}`}
            className="card"
            href={`/english-11/unit/${u.index}`}
          >
            {/* Ảnh: đặt tại public/data/images/unit-11-<index>.jpg */}
            <img
              src={`/data/images/unit-11-${u.index}.jpg`}
              alt={`English 11 - Unit ${u.index}`}
            />
            <h3>Unit {u.index}{u.title ? `: ${u.title}` : ""}</h3>
            <p>{u.summary || "Bấm để mở bài học (Học / Luyện tập / Trợ lý Gemini)."}</p>
          </Link>
        ))}
      </div>

      {/* Chat Gemini (chọn Unit ngay tại đây nếu muốn) */}
      <GeminiChat pageKey="eng11" units={units} />
    </div>
  );
}

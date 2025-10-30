import { notFound } from "next/navigation";
import { getManifest } from "@/lib/manifests";

type PageProps = { params: { unit: string } };

export default async function Unit10Page({ params }: PageProps) {
  const unitNum = Number(params.unit);          // lấy giá trị từ URL
  if (!Number.isFinite(unitNum)) notFound();    // nếu không phải số thì 404

  const manifest = await getManifest(10);
  const unit = manifest.units?.find((u: any) => u.index === unitNum);
  if (!unit) notFound();

  return (
    <div>
      <h1>Tiếng Anh 10 – Unit {unit.index}{unit.title ? `: ${unit.title}` : ""}</h1>
      {/* nội dung Unit ở đây */}
    </div>
  );
}
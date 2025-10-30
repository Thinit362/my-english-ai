import { notFound } from "next/navigation";
import { getManifest } from "@/lib/manifests";
import LessonTabs from "@/components/LessonTabs";

type Params = { params: { unit: string } };

export default async function Unit12Page({ params }: Params) {
  const unitNum = parseInt(params.unit, 10);
  if (!Number.isFinite(unitNum)) notFound();

  const manifest = await getManifest(12);
  const unit = manifest.units?.find((u: any) => u.index === unitNum);
  if (!unit) notFound();

  return (
    <div>
      <div className="section" style={{ display: "grid", gap: 8 }}>
        <h1>
          Tiếng Anh 12 – Global Success · Unit {unit.index}
          {unit.title ? `: ${unit.title}` : ""}
        </h1>
        {unit.page_range && <p>Trang SGK: {unit.page_range}</p>}
      </div>

      {/* Tabs: Học / Luyện tập / Trợ lý Gemini */}
      <LessonTabs grade={12} unitIndex={unit.index} unit={unit} />
    </div>
  );
}

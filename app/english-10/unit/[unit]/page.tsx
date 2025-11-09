// app/english-10/unit/[unit]/page.tsx
import { notFound } from "next/navigation";
import UnitOverview from "@/components/UnitOverview";
import { english10Units } from "@/content/english10.units";

export function generateStaticParams() {
  // Giúp Next build sẵn /english-10/unit/1..10
  return english10Units.map((u) => ({ unit: String(u.id) }));
}

export async function generateMetadata({ params }: { params: { unit: string } }) {
  const id = Number(params.unit);
  const meta = english10Units.find((u) => u.id === id);
  return {
    title: meta ? `English 10 – ${meta.title}` : "English 10 – Unit",
  };
}

export default function Page({ params }: { params: { unit: string } }) {
  const id = Number(params.unit);
  const meta = english10Units.find((u) => u.id === id);
  if (!meta) notFound();

  // KHÔNG truyền breadcrumbs nữa (đã có ở layout)
  return (
    <UnitOverview
      unitTitle={meta.title}
      rows={meta.rows}
      skills={meta.skills}
    />
  );
}

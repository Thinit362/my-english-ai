// app/english-10/unit/[unit]/vocabulary-1/page.tsx
import { notFound } from "next/navigation";
import LessonShell from "@/components/LessonShell";
import VocabLesson from "@/components/VocabLesson";
import { english10VocabManifest, loadUnitVocab } from "@/content/english10.vocab";

type Params = { unit: string };

export function generateStaticParams() {
  // Chỉ build những unit có lesson "vocabulary-1"
  const units = english10VocabManifest
    .filter((u) => u.lessons.some((l) => l.key === "vocabulary-1"))
    .map((u) => ({ unit: String(u.unitId) }));
  return units;
}

export async function generateMetadata({ params }: { params: Params }) {
  const unitId = Number(params.unit);
  const meta = english10VocabManifest.find((u) => u.unitId === unitId);
  const lesson = meta?.lessons.find((l) => l.key === "vocabulary-1");
  return {
    title: meta && lesson ? `${meta.unitTitle} – ${lesson.title}` : "Vocabulary",
  };
}

export default async function Page({ params }: { params: Params }) {
  const unitId = Number(params.unit);
  if (!Number.isFinite(unitId)) notFound();

  // 1) Tải toàn bộ vocab của Unit (đã tách bundle)
  const unit = await loadUnitVocab(unitId).catch(() => null);
  if (!unit) notFound();

  // 2) Tìm đúng lesson "vocabulary-1"
  const lesson = unit.lessons.find((l) => l.key === "vocabulary-1");
  if (!lesson) notFound();

  // 3) Render
  return (
    <LessonShell title={`${unit.unitTitle} – ${lesson.title}`}>
      <VocabLesson
        title={lesson.title}
        items={lesson.items}
        baseImagePath={lesson.baseImagePath}
      />
    </LessonShell>
  );
}

import { notFound } from "next/navigation";
import LessonShell from "@/components/LessonShell";
import VocabLesson from "@/components/VocabLesson";
import { loadUnitVocab } from "@/content/english10.vocab";

export default async function Page({ params }: { params: { unit: string } }) {
  const unitId = Number(params.unit);
  const unit = await loadUnitVocab(unitId).catch(() => null);
  if (!unit) notFound();

  const lesson = unit.lessons.find(l => l.key === "vocabulary-1");
  if (!lesson) notFound();

  return (
    <LessonShell title={`${unit.unitTitle} – ${lesson.title}`}>
      <VocabLesson unitId={unit.unitId} unitTitle={unit.unitTitle} lesson={lesson} />
    </LessonShell>
  );
}

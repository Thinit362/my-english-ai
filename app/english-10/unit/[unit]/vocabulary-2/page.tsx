// app/english-10/unit/[unit]/vocabulary-2/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import LessonShell from "@/components/LessonShell";
import VocabLesson from "@/components/VocabLesson";
import {
  english10VocabManifest,
  loadUnitVocab,
  type VocabLesson as VocabLessonType,
} from "@/content/english10.vocab";

type Params = { unit: string };

function hasLesson(unitId: number, key: string) {
  const m = english10VocabManifest.find((u) => u.unitId === unitId);
  return !!m?.lessons.some((l) => l.key === key);
}

export async function generateStaticParams() {
  // Build trước các unit có "vocabulary-2"
  return english10VocabManifest
    .filter((u) => u.lessons.some((l) => l.key === "vocabulary-2"))
    .map((u) => ({ unit: String(u.unitId) }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const unitId = Number(params.unit);
  const m = english10VocabManifest.find((u) => u.unitId === unitId);
  const lessonTitle =
    m?.lessons.find((l) => l.key === "vocabulary-2")?.title ?? "Vocabulary";
  return {
    title: m ? `${m.unitTitle} – ${lessonTitle}` : "English 10 – Vocabulary",
  };
}

export default async function Page({ params }: { params: Params }) {
  const unitId = Number(params.unit);

  if (!Number.isFinite(unitId) || !hasLesson(unitId, "vocabulary-2")) {
    notFound();
  }

  // load dữ liệu động
  const unit = await loadUnitVocab(unitId);

  const lesson: VocabLessonType | undefined = unit.lessons.find(
    (l) => l.key === "vocabulary-2"
  );

  if (!lesson) {
    notFound();
  }

  return (
    <LessonShell title={`${unit.unitTitle} – ${lesson.title}`}>
      {/* Navigation nhỏ */}
      <div className="mb-4 flex items-center gap-3 text-sm">
        {/* Quay lại unit */}
        <Link
          href={`/english-10/unit/${unitId}`}
          className="underline hover:no-underline"
        >
          ← Quay lại Unit Overview
        </Link>

        {/* Nếu có vocabulary-1 thì cho nút quay về */}
        {hasLesson(unitId, "vocabulary-1") && (
          <Link
            href={`/english-10/unit/${unitId}/vocabulary-1`}
            className="ml-auto underline hover:no-underline"
          >
            ← Vocabulary 1
          </Link>
        )}
      </div>

      {/* Gọi component TTS + chấm điểm mà bạn đã tối ưu */}
      <VocabLesson
        title={lesson.title}
        items={lesson.items}
        baseImagePath={lesson.baseImagePath}
      />
    </LessonShell>
  );
}

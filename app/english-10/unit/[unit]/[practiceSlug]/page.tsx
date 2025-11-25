// app/english-10/unit/[unit]/[practiceSlug]/page.tsx
import { notFound } from "next/navigation";
import EnglishLayout from "@/components/EnglishLayout";
import english10Units, {
  UnitMeta,
  LectureExercise,
} from "@/content/english10.units";
import PracticePage from "@/components/PracticePage";
import { getPracticeTasks } from "@/content/practice/loader";
import { SectionKey } from "@/content/practice/types";

interface PageProps {
  params: { unit: string; practiceSlug: string };
}

export default function UnitPracticePage({ params }: PageProps) {
  const unitId = Number(params.unit);
  const slug = params.practiceSlug;

  const unit: UnitMeta | undefined = english10Units.find(
    (u) => u.id === unitId
  );
  if (!unit) return notFound();

  // tìm đúng row có exercise.href kết thúc bằng practiceSlug
  const row: LectureExercise | undefined = unit.rows.find((r) =>
    r.exercise.href.endsWith("/" + slug)
  );
  if (!row) return notFound();

  const sectionKey = row.key as SectionKey;

  const tasks = getPracticeTasks(unitId, sectionKey);

  if (!tasks.length) {
    // Chưa có dữ liệu practice cho phần này → hiện thông báo
    return (
      <EnglishLayout>
        <div className="max-w-3xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-2">
            {row.exercise.title}
          </h1>
          <p>
            Phần này hiện chưa có dữ liệu bài tập trong hệ thống. Bạn
            có thể bổ sung sau trong thư mục <code>content/practice</code>.
          </p>
        </div>
      </EnglishLayout>
    );
  }

  return (
    <EnglishLayout>
      <PracticePage
        unit={unitId}
        sectionTitle={row.exercise.title}
        tasks={tasks}
      />
    </EnglishLayout>
  );
}

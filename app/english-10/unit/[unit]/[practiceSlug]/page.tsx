// app/english-10/unit/[unit]/[practiceSlug]/page.tsx
import { notFound } from "next/navigation";
import EnglishLayout from "@/components/EnglishLayout";
import PracticePage from "@/components/PracticePage";
import english10Units, {
  UnitMeta,
  LectureExercise,
} from "@/content/english10.units";
import { PracticeTask } from "@/content/practice/types";
import { getPracticeTasksFor } from "@/content/practice/loader";

interface PageProps {
  params: { unit: string; practiceSlug: string };
}

export default function PracticePageRouter({ params }: PageProps) {
  const unitId = Number(params.unit);
  const practiceSlug = params.practiceSlug; // ví dụ: "practice-pronunciation"

  const unitMeta: UnitMeta | undefined = english10Units.find(
    (u) => u.id === unitId
  );
  if (!unitMeta) return notFound();

  // tìm đúng hàng (row) trong english10Units.rows có exercise.href trùng slug hiện tại
  const row: LectureExercise | undefined = unitMeta.rows.find((r) =>
    r.exercise.href.endsWith("/" + practiceSlug)
  );
  if (!row) return notFound();

  // row.key cho biết loại phần: "vocabulary-1", "grammar-2", "pronunciation"...
  const sectionKey = row.key;

  // lấy danh sách task (câu hỏi/bài tương tác) cho Unit + Section
  const tasks: PracticeTask[] | undefined = getPracticeTasksFor(
    unitId,
    sectionKey
  );
  if (!tasks || tasks.length === 0) {
    // chưa tạo dữ liệu practice
    return (
      <EnglishLayout>
        <div className="max-w-3xl mx-auto px-4 py-10">
          <h1 className="text-2xl font-bold mb-2">{row.exercise.title}</h1>
          <p>Phần này chưa có dữ liệu bài tập. Bạn có thể bổ sung sau.</p>
        </div>
      </EnglishLayout>
    );
  }

  return (
    <EnglishLayout>
      <PracticePage
        unit={unitId}
        sectionKey={sectionKey}
        sectionTitle={row.exercise.title}
        tasks={tasks}
      />
    </EnglishLayout>
  );
}

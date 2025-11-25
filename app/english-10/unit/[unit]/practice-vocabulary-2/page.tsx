// app/english-10/unit/[unit]/practice-vocabulary-2/page.tsx
import { notFound } from "next/navigation";
import EnglishLayout from "@/components/EnglishLayout";
import english10Units from "@/content/english10.units";
import VocabularyPracticeList, {
  VocabExerciseMeta,
} from "@/components/VocabularyPracticeList";

interface PageProps {
  params: { unit: string };
}

export default function PracticeVocabulary2Page({ params }: PageProps) {
  const unitId = Number(params.unit);
  const unit = english10Units.find((u) => u.id === unitId);

  if (!unit) return notFound();

  // tìm đúng hàng có key "vocabulary-2"
  const row = unit.rows.find((r) => r.key === "vocabulary-2");
  if (!row) return notFound();

  const sectionTitle = row.exercise.title; // ví dụ: "Thực hành từ vựng 2"

  // Danh sách bài tập mẫu cho Vocab-2 (Unit nào xài cũng được,
  // sau này bạn chỉ cần thay phần này bằng dữ liệu thật / tách ra content riêng)
  const exercises: VocabExerciseMeta[] = [
    {
      id: "ex1",
      title: "Bài tập 1",
      description: "Nối từ với định nghĩa phù hợp.",
      iconSrc: "/icons/vocab2-match-definitions.png",
      views: 0,
      doneCount: 0,
      isDone: false,
    },
    {
      id: "ex2",
      title: "Bài tập 2",
      description: "Chọn từ đúng để hoàn thành câu.",
      iconSrc: "/icons/vocab2-multiple-choice.png",
      views: 0,
      doneCount: 0,
      isDone: false,
    },
    {
      id: "ex3",
      title: "Bài tập 3",
      description: "Kéo thả từ để tạo thành cụm từ/collocation đúng.",
      iconSrc: "/icons/vocab2-drag-collocations.png",
      views: 0,
      doneCount: 0,
      isDone: false,
    },
  ];

  const handleExerciseClick = (ex: VocabExerciseMeta) => {
    // Sau này bạn điều hướng sang trang game cụ thể, ví dụ:
    // router.push(`/english-10/unit/${unitId}/practice-vocabulary-2/${ex.id}`);
    console.log("Clicked vocab-2 exercise:", ex.id);
  };

  return (
    <EnglishLayout>
      <VocabularyPracticeList
        unitTitle={unit.title}
        sectionTitle={sectionTitle}
        exercises={exercises}
        onExerciseClick={handleExerciseClick}
      />
    </EnglishLayout>
  );
}

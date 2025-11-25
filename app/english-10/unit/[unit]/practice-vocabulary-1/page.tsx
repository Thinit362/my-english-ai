// app/english-10/unit/[unit]/practice-vocabulary-1/page.tsx
import { notFound } from "next/navigation";
import EnglishLayout from "@/components/EnglishLayout";
import english10Units from "@/content/english10.units";
import VocabularyPracticeList, {
  VocabExerciseMeta,
} from "@/components/VocabularyPracticeList";

interface PageProps {
  params: { unit: string };
}

export default function PracticeVocabulary1Page({ params }: PageProps) {
  const unitId = Number(params.unit);
  const unit = english10Units.find((u) => u.id === unitId);

  if (!unit) return notFound();

  // lấy dòng tương ứng key "vocabulary-1"
  const row = unit.rows.find((r) => r.key === "vocabulary-1");
  if (!row) return notFound();

  const sectionTitle = row.exercise.title; // ví dụ: "Thực hành từ vựng 1"

  // TẠM THỜI: danh sách 3 bài tập mẫu – sau này bạn đổi thành dữ liệu thật
  const exercises: VocabExerciseMeta[] = [
    {
      id: "ex1",
      title: "Bài tập 1",
      description: "Hãy nghe và nối từ với nghĩa và từ loại tương ứng.",
      iconSrc: "/icons/vocab-matching-1.png",
      views: 0,
      doneCount: 0,
      isDone: false,
    },
    {
      id: "ex2",
      title: "Bài tập 2",
      description: "Nối hai cột với nhau để tạo thành cụm từ đúng.",
      iconSrc: "/icons/vocab-matching-2.png",
      views: 0,
      doneCount: 0,
      isDone: false,
    },
    {
      id: "ex3",
      title: "Bài tập 3",
      description: "Kéo thả từ vào dưới mỗi bức tranh.",
      iconSrc: "/icons/vocab-drag-drop.png",
      views: 0,
      doneCount: 0,
      isDone: false,
    },
  ];

  // Hành vi khi click "Bài tập 1/2/3":
  // lúc này bạn chỉ cần điều hướng sang trang game tương ứng (sẽ làm sau)
  const handleExerciseClick = (ex: VocabExerciseMeta) => {
    // ví dụ: /english-10/unit/1/practice-vocabulary-1/ex1
    // Bạn có thể tạo thêm route động [exerciseId] khi sẵn sàng
    // router.push(...)
    console.log("Clicked exercise", ex.id);
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

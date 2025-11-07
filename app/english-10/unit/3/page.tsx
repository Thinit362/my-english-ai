// app/english-10/unit/3/page.tsx
import UnitOverview, { LectureExercise, SkillItem } from "@/components/UnitOverview";

export const metadata = {
  title: "English 10 – Unit 3: MUSIC",
};

// Không set status/progress -> mặc định "Chưa làm".
// Khi học sinh bấm vào bài, trang danh sách sẽ ghi dấu "Đang học" (localStorage).
const rows: LectureExercise[] = [
  {
    key: "vocabulary-1",
    lecture: {
      title: "Từ và cụm từ thuộc chủ đề âm nhạc",
      tag: "Từ vựng",
      href: "/english-10/unit/3/vocabulary-1",
    },
    exercise: {
      title: "Thực hành từ vựng 1",
      href: "/english-10/unit/3/practice-vocabulary-1",
    },
  },
  {
    key: "vocabulary-2",
    lecture: {
      title: "Từ và cụm từ thuộc chủ đề âm nhạc (tiếp theo)",
      tag: "Từ vựng",
      href: "/english-10/unit/3/vocabulary-2",
    },
    exercise: {
      title: "Thực hành từ vựng 2",
      href: "/english-10/unit/3/practice-vocabulary-2",
    },
  },
  {
    key: "grammar-1",
    lecture: {
      title: "Câu ghép",
      tag: "Ngữ pháp",
      href: "/english-10/unit/3/grammar-1",
    },
    exercise: {
      title: "Thực hành ngữ pháp",
      href: "/english-10/unit/3/practice-grammar-1",
    },
  },
  {
    key: "grammar-2",
    lecture: {
      title: "Động từ nguyên thể có to và động từ nguyên thể không có to",
      tag: "Ngữ pháp",
      href: "/english-10/unit/3/grammar-2",
    },
    exercise: {
      title: "Thực hành ngữ pháp",
      href: "/english-10/unit/3/practice-grammar-2",
    },
  },
  {
    key: "pronunciation",
    lecture: {
      title: "Trọng âm các từ có 2 âm tiết: Danh từ, Tính từ và Động từ",
      tag: "Phát âm",
      href: "/english-10/unit/3/pronunciation",
    },
    exercise: {
      title: "Thực hành phát âm",
      href: "/english-10/unit/3/practice-pronunciation",
    },
  },
];

const skills: SkillItem[] = [
  {
    title: "Chủ đề: Chương trình The Voice",
    tag: "Luyện đọc",
    href: "/english-10/unit/3/skill-reading-1",
    icon: "read",
  },
  {
    title: "Chủ đề: Âm nhạc và nghệ sĩ",
    tag: "Luyện nghe",
    href: "/english-10/unit/3/skill-listening-1",
    icon: "listen",
  },
  {
    title: "Thuyết trình về chương trình truyền hình.",
    tag: "Luyện nói",
    href: "/english-10/unit/3/skill-speaking-1",
    icon: "speak",
  },
  {
    title: "Chủ đề: Viết tiểu sử nghệ sĩ nổi tiếng",
    tag: "Luyện viết",
    href: "/english-10/unit/2/skill-writing-1",
    icon: "write",
  },
];

export default function Page() {
  return (
    <UnitOverview
      unitTitle="Unit 3: MUSIC"
      breadcrumbs={[
        { label: "Tiếng Anh phổ thông", href: "/" },
        { label: "Tiếng Anh Lớp 10 - Global success", href: "/english-10" },
        { label: "Unit 3" },
      ]}
      rows={rows}
      skills={skills}
    />
  );
}

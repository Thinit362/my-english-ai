// app/english-10/unit/1/page.tsx
import UnitOverview, { LectureExercise, SkillItem } from "@/components/UnitOverview";

export const metadata = {
  title: "English 10 – Unit 1: Family life",
};

// Không set status/progress -> mặc định "Chưa làm".
// Khi học sinh bấm vào bài, trang danh sách sẽ ghi dấu "Đang học" (localStorage).
const rows: LectureExercise[] = [
  {
    key: "vocabulary-1",
    lecture: {
      title: "Từ và cụm từ mô tả công việc nhà – Phần 1",
      tag: "Từ vựng",
      href: "/english-10/unit/1/vocabulary-1",
    },
    exercise: {
      title: "Thực hành từ vựng 1",
      href: "/english-10/unit/1/practice-vocabulary-1",
    },
  },
  {
    key: "vocabulary-2",
    lecture: {
      title: "Từ và cụm từ mô tả công việc nhà – Phần 2",
      tag: "Từ vựng",
      href: "/english-10/unit/1/vocabulary-2",
    },
    exercise: {
      title: "Thực hành từ vựng 2",
      href: "/english-10/unit/1/practice-vocabulary-2",
    },
  },
  {
    key: "grammar",
    lecture: {
      title: "Phân biệt Hiện tại đơn và Hiện tại tiếp diễn",
      tag: "Ngữ pháp",
      href: "/english-10/unit/1/grammar",
    },
    exercise: {
      title: "Thực hành ngữ pháp",
      href: "/english-10/unit/1/practice-grammar",
    },
  },
  {
    key: "pronunciation",
    lecture: {
      title: "Cụm phụ âm /tr/, /kr/, /br/",
      tag: "Phát âm",
      href: "/english-10/unit/1/pronunciation",
    },
    exercise: {
      title: "Thực hành phát âm",
      href: "/english-10/unit/1/practice-pronunciation",
    },
  },
];

const skills: SkillItem[] = [
  {
    title: "Chủ đề: Phân chia công việc gia đình trong hôn nhân",
    tag: "Luyện đọc",
    href: "/english-10/unit/1/skill-reading-1",
    icon: "read",
  },
  {
    title: "Chủ đề: Phân chia công việc giữa các thành viên trong gia đình",
    tag: "Luyện nghe",
    href: "/english-10/unit/1/skill-listening-1",
    icon: "listen",
  },
  {
    title: "Bạn thích/không thích làm công việc nhà nào và tại sao?",
    tag: "Luyện nói",
    href: "/english-10/unit/1/skill-speaking-1",
    icon: "speak",
  },
  {
    title: "Viết một đoạn văn về việc làm các công việc nhà",
    tag: "Luyện viết",
    href: "/english-10/unit/1/skill-writing-1",
    icon: "write",
  },
];

export default function Page() {
  return (
    <UnitOverview
      unitTitle="Unit 1: Family life"
      breadcrumbs={[
        { label: "Tiếng Anh phổ thông", href: "/" },
        { label: "Tiếng Anh Lớp 10 - Global success", href: "/english-10" },
        { label: "Unit 1" },
      ]}
      rows={rows}
      skills={skills}
    />
  );
}

// app/english-10/unit/2/page.tsx
import UnitOverview, { LectureExercise, SkillItem } from "@/components/UnitOverview";

export const metadata = {
  title: "English 10 – Unit : Family life",
};2

// Không set status/progress -> mặc định "Chưa làm".
// Khi học sinh bấm vào bài, trang danh sách sẽ ghi dấu "Đang học" (localStorage).
const rows: LectureExercise[] = [
  {
    key: "vocabulary-1",
    lecture: {
      title: "Từ và cụm từ thuộc chủ đề các hoạt động của con người và môi trường",
      tag: "Từ vựng",
      href: "/english-10/unit/2/vocabulary-1",
    },
    exercise: {
      title: "Thực hành từ vựng 1",
      href: "/english-10/unit/2/practice-vocabulary-1",
    },
  },
  {
    key: "grammar",
    lecture: {
      title: "Phân biệt Tương lai đơn và Tương lai gần",
      tag: "Ngữ pháp",
      href: "/english-10/unit/2/grammar",
    },
    exercise: {
      title: "Thực hành ngữ pháp",
      href: "/english-10/unit/2/practice-grammar",
    },
  },
  {
    key: "pronunciation",
    lecture: {
      title: "Cách phát âm cụm âm phụ âm /kl/,/pl/,/gr/ and /pr/",
      tag: "Phát âm",
      href: "/english-10/unit/2/pronunciation",
    },
    exercise: {
      title: "Thực hành phát âm",
      href: "/english-10/unit/2/practice-pronunciation",
    },
  },
];

const skills: SkillItem[] = [
  {
    title: "Chủ đề: Sống xanh",
    tag: "Luyện đọc",
    href: "/english-10/unit/2/skill-reading-1",
    icon: "read",
  },
  {
    title: "Chủ đề: Chiến dịch không còn ống hút nhựa",
    tag: "Luyện nghe",
    href: "/english-10/unit/2/skill-listening-1",
    icon: "listen",
  },
  {
    title: "Chủ đề: Các cách để sống xanh",
    tag: "Luyện nói",
    href: "/english-10/unit/2/skill-speaking-1",
    icon: "speak",
  },
  {
    title: "Chủ đề: Viết 1 đoạn văn về các cách cải thiện môi trường",
    tag: "Luyện viết",
    href: "/english-10/unit/2/skill-writing-1",
    icon: "write",
  },
];

export default function Page() {
  return (
    <UnitOverview
      unitTitle="Unit 2: HUMANS AND THE ENVIRONMENT"
      breadcrumbs={[
        { label: "Tiếng Anh phổ thông", href: "/" },
        { label: "Tiếng Anh Lớp 10 - Global success", href: "/english-10" },
        { label: "Unit 2" },
      ]}
      rows={rows}
      skills={skills}
    />
  );
}

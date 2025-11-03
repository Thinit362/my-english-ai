// app/english-12/unit/1/page.tsx
import UnitOverview, { LectureExercise, SkillItem } from "@/components/UnitOverview";

export const metadata = {
  title: "English 12 – Unit 1: Life stories we admire",
};

const rows: LectureExercise[] = [
  {
    key: "warm-up",
    lecture: {
      title: "Nhật ký Đặng Thùy Trâm",
      tag: "Khởi động",
      href: "/english-12/unit/1/warm-up",
      thumb: "/img/unit1/warmup.jpg",
    },
    exercise: {
      title: "Thực hành",
      href: "/english-12/unit/1/practice-warm-up",
    },
  },
  {
    key: "vocabulary-1",
    lecture: {
      title: "Những câu chuyện cuộc đời đáng ngưỡng mộ",
      tag: "Từ vựng",
      href: "/english-12/unit/1/vocabulary",
      thumb: "/img/unit1/vocab1.jpg",
    },
    exercise: {
      title: "Thực hành từ vựng",
      href: "/english-12/unit/1/practice-vocabulary",
    },
  },
  {
    key: "grammar",
    lecture: {
      title: "Thì quá khứ đơn và thì quá khứ tiếp diễn",
      tag: "Ngữ pháp",
      href: "/english-12/unit/1/grammar",
      thumb: "/img/unit1/grammar.jpg",
    },
    exercise: {
      title: "Thực hành ngữ pháp",
      href: "/english-12/unit/1/practice-grammar",
    },
  },
  {
    key: "pronunciation",
    lecture: {
      title: "Nguyên âm đôi /eɪ/ và /əʊ/",
      tag: "Phát âm",
      href: "/english-12/unit/1/pronunciation",
      thumb: "/img/unit1/pronunciation.jpg",
    },
    exercise: {
      title: "Thực hành phát âm",
      href: "/english-12/unit/1/practice-pronunciation",
    },
  },
  {
    key: "listening-1",
    lecture: {
      title: "Bài nghe 1: Walt Disney",
      tag: "Luyện nghe",
      href: "/english-12/unit/1/listening-1",
      thumb: "/img/unit1/listen1.jpg",
    },
    exercise: {
      title: "Bài tập luyện nghe số 1",
      href: "/english-12/unit/1/practice-listening-1",
    },
  },
  {
    key: "listening-2",
    lecture: {
      title: "Bài nghe 2: J.K. Rowling",
      tag: "Luyện nghe",
      href: "/english-12/unit/1/listening-2",
      thumb: "/img/unit1/listen2.jpg",
    },
    exercise: {
      title: "Bài tập luyện nghe số 2",
      href: "/english-12/unit/1/practice-listening-2",
    },
  },
];

const skills: SkillItem[] = [
  {
    title: "Chủ đề: Phân chia công việc gia đình trong hôn nhân",
    tag: "Luyện đọc",
    href: "/english-12/unit/1/skill-reading-1",
    icon: "read",
  },
  {
    title: "Chủ đề: Phân chia công việc gia đình giữa các thành viên",
    tag: "Luyện nghe",
    href: "/english-12/unit/1/skill-listening-1",
    icon: "listen",
  },
  {
    title: "Bạn thích/không thích làm công việc nhà nào và tại sao?",
    tag: "Luyện nói",
    href: "/english-12/unit/1/skill-speaking-1",
    icon: "speak",
  },
];

export default function Page() {
  return (
    <UnitOverview
      unitTitle="Unit 1: Life stories we admire"
      breadcrumbs={[
        { label: "Tiếng Anh phổ thông", href: "/" },
        { label: "Tiếng Anh Lớp 12 - Global success", href: "/english-12" },
        { label: "Unit 1" },
      ]}
      rows={rows}
      skills={skills}
    />
  );
}

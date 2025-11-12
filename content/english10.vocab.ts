// content/english10.vocab.ts
// Chỉ mục Vocab cho English 10: type + manifest + dynamic import (code-splitting)

export type VocabItem = {
  id: string;            // duy nhất trong bài
  word: string;
  ipa?: string;          // /ˈwɜːd/
  pos?: string;          // v., n., adj., v. phr., ...
  vi: string;            // nghĩa tiếng Việt
  exampleEn?: string;
  exampleVi?: string;
  imageFile?: string;    // "cook.jpg" hoặc URL
};

export type VocabLesson = {
  key: string;           // "vocabulary-1" | "vocabulary-2" | ...
  title: string;         // tiêu đề bài từ vựng
  items: VocabItem[];
  baseImagePath?: string;
};

export type UnitVocab = {
  unitId: number;              // 1..10
  unitTitle: string;           // "Unit 1: Family life"
  lessons: VocabLesson[];      // 1..n bài từ vựng trong Unit
};

/**
 * Manifest: khai báo Unit nào có vocab (để hiển thị nút/breadcrumb mà không phải tải dữ liệu).
 * Khi cần dữ liệu thật, gọi loadUnitVocab(id) -> dynamic import đúng file Unit, tách bundle.
 */
export const english10VocabManifest: { unitId: number; unitTitle: string; lessons: { key: string; title: string }[] }[] = [
  {
    unitId: 1,
    unitTitle: "Unit 1: Family life",
    lessons: [
      { key: "vocabulary-1", title: "Từ & cụm từ về công việc nhà – Phần 1" },
      { key: "vocabulary-2", title: "Từ & cụm từ về công việc nhà – Phần 2" },
    ],
  },
  {
    unitId: 2,
    unitTitle: "Unit 2: Humans and the environment",
    lessons: [{ key: "vocabulary-1", title: "Từ & cụm từ về con người và môi trường" }],
  },
  {
    unitId: 3,
    unitTitle: "Unit 3: Music",
    lessons: [
      { key: "vocabulary-1", title: "Từ & cụm từ về âm nhạc – Phần 1" },
      { key: "vocabulary-2", title: "Từ & cụm từ về âm nhạc – Phần 2" },
    ],
  },
  { unitId: 4, unitTitle: "Unit 4: For a better community", lessons: [
      { key: "vocabulary-1", title: "Từ & cụm từ chủ đề cộng đồng – Phần 1" },
      { key: "vocabulary-2", title: "Từ & cụm từ chủ đề cộng đồng – Phần 2" },
  ]},
  { unitId: 5, unitTitle: "Unit 5: Inventions", lessons: [
      { key: "vocabulary-1", title: "Từ & cụm từ về phát minh – Phần 1" },
      { key: "vocabulary-2", title: "Từ & cụm từ về phát minh – Phần 2" },
  ]},
  { unitId: 6, unitTitle: "Unit 6: Gender equality", lessons: [
      { key: "vocabulary-1", title: "Từ & cụm từ về bình đẳng giới – Phần 1" },
      { key: "vocabulary-2", title: "Từ & cụm từ về bình đẳng giới – Phần 2" },
  ]},
  { unitId: 7, unitTitle: "Unit 7: Viet Nam and international organisations", lessons: [
      { key: "vocabulary-1", title: "Từ vựng: Việt Nam & tổ chức quốc tế" },
  ]},
  { unitId: 8, unitTitle: "Unit 8: New ways to learn", lessons: [
      { key: "vocabulary-1", title: "Từ vựng: Phương thức học mới" },
  ]},
  { unitId: 9, unitTitle: "Unit 9: Protecting the environment", lessons: [
      { key: "vocabulary-1", title: "Từ vựng: Bảo vệ môi trường – Phần 1" },
      { key: "vocabulary-2", title: "Từ vựng bổ sung – Phần 2" },
  ]},
  { unitId: 10, unitTitle: "Unit 10: Ecotourism", lessons: [
      { key: "vocabulary-1", title: "Từ vựng: Du lịch sinh thái – Phần 1" },
      { key: "vocabulary-2", title: "Từ vựng bổ sung – Phần 2" },
  ]},
];

/** Map dynamic import từng Unit.
 * Bạn tạo các file dữ liệu thật:
 *   - content/vocab/en10.u1.ts
 *   - content/vocab/en10.u2.ts
 *   ...
 * Mỗi file export default: UnitVocab
 */
const loaders: Record<number, () => Promise<UnitVocab>> = {
  1: () => import("./vocab/en10.u1").then(m => m.default),
  2: () => import("./vocab/en10.u2").then(m => m.default),
  3: () => import("./vocab/en10.u3").then(m => m.default),
  4: () => import("./vocab/en10.u4").then(m => m.default),
  5: () => import("./vocab/en10.u5").then(m => m.default),
  6: () => import("./vocab/en10.u6").then(m => m.default),
  7: () => import("./vocab/en10.u7").then(m => m.default),
  8: () => import("./vocab/en10.u8").then(m => m.default),
  9: () => import("./vocab/en10.u9").then(m => m.default),
  10: () => import("./vocab/en10.u10").then(m => m.default),
};

/** Hàm public: lấy dữ liệu vocab của một Unit (tách bundle). */
  export async function loadUnitVocab(unitId: number): Promise<UnitVocab> {
  const fn = loaders[unitId];
  if (!fn) throw new Error(`No vocab for unit ${unitId}`);
  return fn();
}

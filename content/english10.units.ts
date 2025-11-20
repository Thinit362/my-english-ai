// content/english10.units.ts
// Nguồn dữ liệu điều khiển danh mục cho từng Unit của Tiếng Anh 10 (Global Success).
// Dùng cho các trang động: /english-10/unit/[id]/...
// GỢI Ý SỬ DỤNG: dùng cho toàn bộ bài và các unit english-10
// - Trang Unit page.tsx chỉ cần import { english10Units } và chọn theo unitId.
// - Các href bên dưới đã theo quy ước định tuyến của bạn.
// - Bạn có thể bổ sung thumbnail/cover riêng cho từng Unit nếu muốn.

export type Status = "todo" | "inprogress" | "done";

export type LectureExercise = {
  key: string;
  lecture: {
    title: string;
    tag: string;
    href: string;
    status?: Status;
    progress?: number;
  };
  exercise: {
    title: string;
    href: string;
    status?: Status;
    progress?: number;
  };
};

export type SkillItem = {
  title: string;
  tag: "Luyện đọc" | "Luyện nghe" | "Luyện nói" | "Luyện viết";
  href: string;
  icon?: "read" | "listen" | "speak" | "write";
  status?: Status;
  progress?: number;
};

export type UnitMeta = {
  id: number;
  slug: string;          // "unit-1", ...
  title: string;         // "Unit 1: Family life"
  cover?: string;        // tuỳ chọn: /images/units/u1.jpg
  rows: LectureExercise[];
  skills: SkillItem[];
};

// Helper tạo path nội bộ
const u = (id: number, leaf: string) => `/english-10/unit/${id}/${leaf}`;

/** =========================
 *  UNIT 1 → UNIT 10
 *  ========================= */
export const english10Units: UnitMeta[] = [
  {
    id: 1,
    slug: "unit-1",
    title: "Unit 1: Family life",
    cover: "/covers/english10/u1.jpg",
    rows: [
      {
        key: "vocabulary-1",
        lecture: {
          title: "Từ & cụm từ về công việc nhà – Phần 1",
          tag: "Từ vựng",
          href: u(1, "vocabulary-1"),
        },
        exercise: {
          title: "Thực hành từ vựng 1",
          href: u(1, "practice-vocabulary-1"),
        },
      },
      {
        key: "vocabulary-2",
        lecture: {
          title: "Từ & cụm từ về công việc nhà – Phần 2",
          tag: "Từ vựng",
          href: u(1, "vocabulary-2"),
        },
        exercise: {
          title: "Thực hành từ vựng 2",
          href: u(1, "practice-vocabulary-2"),
        },
      },
      {
        key: "grammar-1",
        lecture: {
          title: "Hiện tại đơn vs. Hiện tại tiếp diễn",
          tag: "Ngữ pháp",
          href: u(1, "grammar-1"),
        },
        exercise: {
          title: "Thực hành ngữ pháp",
          href: u(1, "practice-grammar1"),
        },
      },
      {
        key: "pronunciation",
        lecture: {
          title: "Phụ âm cụm /tr/ /kr/ /br/",
          tag: "Phát âm",
          href: u(1, "pronunciation"),
        },
        exercise: {
          title: "Thực hành phát âm",
          href: u(1, "practice-pronunciation"),
        },
      },
    ],
    skills: [
      {
        title: "Chủ đề: Phân chia việc nhà trong hôn nhân",
        tag: "Luyện đọc",
        href: u(1, "skill-reading-1"),
        icon: "read",
      },
      {
        title: "Chủ đề: Chia sẻ việc nhà trong gia đình",
        tag: "Luyện nghe",
        href: u(1, "skill-listening-1"),
        icon: "listen",
      },
      {
        title: "Nói về việc nhà bạn thích/không thích",
        tag: "Luyện nói",
        href: u(1, "skill-speaking-1"),
        icon: "speak",
      },
      {
        title: "Viết đoạn văn về làm việc nhà",
        tag: "Luyện viết",
        href: u(1, "skill-writing-1"),
        icon: "write",
      },
    ],
  },

  {
    id: 2,
    slug: "unit-2",
    title: "Unit 2: Humans and the environment",
    cover: "/covers/english10/u2.jpg",
    rows: [
      {
        key: "vocabulary-1",
        lecture: {
          title: "Từ & cụm từ về con người và môi trường",
          tag: "Từ vựng",
          href: u(2, "vocabulary-1"),
        },
        exercise: {
          title: "Thực hành từ vựng",
          href: u(2, "practice-vocabulary-1"),
        },
      },
      {
        key: "grammar-1",
        lecture: {
          title: "Tương lai đơn vs. \"be going to\"",
          tag: "Ngữ pháp 1",
          href: u(2, "grammar-1"),
        },
        exercise: {
          title: "Thực hành ngữ pháp 1",
          href: u(2, "practice-grammar-1"),
        },
      },
      {
        key: "grammar-2",
        lecture: {
          title: "Thể bị động (các thì cơ bản)",
          tag: "Ngữ pháp 2",
          href: u(2, "grammar-2"),
        },
        exercise: {
          title: "Thực hành ngữ pháp 2",
          href: u(2, "practice-grammar-2"),
        },
      },
      // (Trang nguồn không hiện rõ mục Phát âm; có thể bổ sung sau khi bạn có nội dung riêng)
    ],
    skills: [
      {
        title: "Đọc: Hoạt động của con người & môi trường",
        tag: "Luyện đọc",
        href: u(2, "skill-reading-1"),
        icon: "read",
      },
      {
        title: "Nghe: Tác động đến môi trường sống",
        tag: "Luyện nghe",
        href: u(2, "skill-listening-1"),
        icon: "listen",
      },
      {
        title: "Nói: Thảo luận bảo vệ môi trường",
        tag: "Luyện nói",
        href: u(2, "skill-speaking-1"),
        icon: "speak",
      },
      {
        title: "Viết: Giải pháp xanh cho trường lớp",
        tag: "Luyện viết",
        href: u(2, "skill-writing-1"),
        icon: "write",
      },
    ],
  },

  {
    id: 3,
    slug: "unit-3",
    title: "Unit 3: Music",
    cover: "/covers/english10/u3.jpg",
    rows: [
      {
        key: "vocabulary-1",
        lecture: {
          title: "Từ & cụm từ về âm nhạc – Phần 1",
          tag: "Từ vựng",
          href: u(3, "vocabulary-1"),
        },
        exercise: {
          title: "Thực hành từ vựng 1",
          href: u(3, "practice-vocabulary-1"),
        },
      },
      {
        key: "vocabulary-2",
        lecture: {
          title: "Từ & cụm từ về âm nhạc – Phần 2",
          tag: "Từ vựng",
          href: u(3, "vocabulary-2"),
        },
        exercise: {
          title: "Thực hành từ vựng 2",
          href: u(3, "practice-vocabulary-2"),
        },
      },
      {
        key: "grammar-1",
        lecture: {
          title: "Câu ghép (compound sentences)",
          tag: "Ngữ pháp 1",
          href: u(3, "grammar-1"),
        },
        exercise: {
          title: "Thực hành ngữ pháp 1",
          href: u(3, "practice-grammar-1"),
        },
      },
      {
        key: "grammar-2",
        lecture: {
          title: "Động từ nguyên thể có/không có \"to\"",
          tag: "Ngữ pháp 2",
          href: u(3, "grammar-2"),
        },
        exercise: {
          title: "Thực hành ngữ pháp 2",
          href: u(3, "practice-grammar-2"),
        },
      },
      {
        key: "pronunciation",
        lecture: {
          title: "Trọng âm từ hai âm tiết (N/V/Adj)",
          tag: "Phát âm",
          href: u(3, "pronunciation"),
        },
        exercise: {
          title: "Thực hành phát âm",
          href: u(3, "practice-pronunciation"),
        },
      },
    ],
    skills: [
      {
        title: "Đọc: Chương trình The Voice",
        tag: "Luyện đọc",
        href: u(3, "skill-reading-1"),
        icon: "read",
      },
      {
        title: "Nghe: Âm nhạc & nghệ sĩ",
        tag: "Luyện nghe",
        href: u(3, "skill-listening-1"),
        icon: "listen",
      },
      {
        title: "Nói: Thuyết trình về TV show",
        tag: "Luyện nói",
        href: u(3, "skill-speaking-1"),
        icon: "speak",
      },
      {
        title: "Viết: Tiểu sử nghệ sĩ",
        tag: "Luyện viết",
        href: u(3, "skill-writing-1"),
        icon: "write",
      },
    ],
  },

  {
    id: 4,
    slug: "unit-4",
    title: "Unit 4: For a better community",
    cover: "/covers/english10/u4.jpg",
    rows: [
      {
        key: "vocabulary-1",
        lecture: {
          title: "Từ & cụm từ chủ đề cộng đồng – Phần 1",
          tag: "Từ vựng",
          href: u(4, "vocabulary-1"),
        },
        exercise: {
          title: "Thực hành từ vựng 1",
          href: u(4, "practice-vocabulary-1"),
        },
      },
      {
        key: "vocabulary-2",
        lecture: {
          title: "Từ & cụm từ chủ đề cộng đồng – Phần 2",
          tag: "Từ vựng",
          href: u(4, "vocabulary-2"),
        },
        exercise: {
          title: "Thực hành từ vựng 2",
          href: u(4, "practice-vocabulary-2"),
        },
      },
      {
        key: "grammar-1",
        lecture: {
          title: "Quá khứ đơn & Quá khứ tiếp diễn",
          tag: "Ngữ pháp",
          href: u(4, "grammar-1"),
        },
        exercise: {
          title: "Thực hành ngữ pháp",
          href: u(4, "practice-grammar-1"),
        },
      },
      // Có thể bổ sung mục Phát âm riêng nếu bạn xây nội dung cho Unit 4
    ],
    skills: [
      {
        title: "Đọc: Hoạt động vì cộng đồng",
        tag: "Luyện đọc",
        href: u(4, "skill-reading-1"),
        icon: "read",
      },
      {
        title: "Nghe: Tình nguyện & tác động xã hội",
        tag: "Luyện nghe",
        href: u(4, "skill-listening-1"),
        icon: "listen",
      },
      {
        title: "Nói: Dự án vì cộng đồng",
        tag: "Luyện nói",
        href: u(4, "skill-speaking-1"),
        icon: "speak",
      },
      {
        title: "Viết: Đoạn văn kêu gọi hành động",
        tag: "Luyện viết",
        href: u(4, "skill-writing-1"),
        icon: "write",
      },
    ],
  },

  {
    id: 5,
    slug: "unit-5",
    title: "Unit 5: Inventions",
    cover: "/covers/english10/u5.jpg",
    rows: [
      {
        key: "vocabulary-1",
        lecture: {
          title: "Từ & cụm từ về phát minh – Phần 1",
          tag: "Từ vựng",
          href: u(5, "vocabulary-1"),
        },
        exercise: {
          title: "Thực hành từ vựng 1",
          href: u(5, "practice-vocabulary-1"),
        },
      },
      {
        key: "vocabulary-2",
        lecture: {
          title: "Từ & cụm từ về phát minh – Phần 2",
          tag: "Từ vựng",
          href: u(5, "vocabulary-2"),
        },
        exercise: {
          title: "Thực hành từ vựng 2",
          href: u(5, "practice-vocabulary-2"),
        },
      },
      {
        key: "grammar-1",
        lecture: {
          title: "Thì hiện tại hoàn thành",
          tag: "Ngữ pháp 1",
          href: u(5, "grammar-1"),
        },
        exercise: {
          title: "Thực hành ngữ pháp 1",
          href: u(5, "practice-grammar-1"),
        },
      },
      {
        key: "grammar-2",
        lecture: {
          title: "Danh động từ & to-infinitive (miêu tả chức năng)",
          tag: "Ngữ pháp 2",
          href: u(5, "grammar-2"),
        },
        exercise: {
          title: "Thực hành ngữ pháp 2",
          href: u(5, "practice-grammar-2"),
        },
      },
      {
        key: "pronunciation",
        lecture: {
          title: "Trọng âm danh từ 3 âm tiết",
          tag: "Phát âm",
          href: u(5, "pronunciation"),
        },
        exercise: {
          title: "Thực hành phát âm",
          href: u(5, "practice-pronunciation"),
        },
      },
    ],
    skills: [
      {
        title: "Đọc: Lịch sử chiếc gương",
        tag: "Luyện đọc",
        href: u(5, "skill-reading-1"),
        icon: "read",
      },
      {
        title: "Nghe: Phát minh & nhà phát minh",
        tag: "Luyện nghe",
        href: u(5, "skill-listening-1"),
        icon: "listen",
      },
      {
        title: "Nói: Trình bày về phát minh",
        tag: "Luyện nói",
        href: u(5, "skill-speaking-1"),
        icon: "speak",
      },
      {
        title: "Viết: Lợi ích của phát minh",
        tag: "Luyện viết",
        href: u(5, "skill-writing-1"),
        icon: "write",
      },
    ],
  },

  {
    id: 6,
    slug: "unit-6",
    title: "Unit 6: Gender equality",
    cover: "/covers/english10/u6.jpg",
    rows: [
      {
        key: "vocabulary-1",
        lecture: {
          title: "Từ & cụm từ về bình đẳng giới – Phần 1",
          tag: "Từ vựng",
          href: u(6, "vocabulary-1"),
        },
        exercise: {
          title: "Thực hành từ vựng 1",
          href: u(6, "practice-vocabulary-1"),
        },
      },
      {
        key: "vocabulary-2",
        lecture: {
          title: "Từ & cụm từ về bình đẳng giới – Phần 2",
          tag: "Từ vựng",
          href: u(6, "vocabulary-2"),
        },
        exercise: {
          title: "Thực hành từ vựng 2",
          href: u(6, "practice-vocabulary-2"),
        },
      },
      {
        key: "grammar-1",
        lecture: {
          title: "Bị động với động từ khuyết thiếu",
          tag: "Ngữ pháp",
          href: u(6, "grammar-1"),
        },
        exercise: {
          title: "Thực hành ngữ pháp",
          href: u(6, "practice-grammar-1"),
        },
      },
      {
        key: "pronunciation",
        lecture: {
          title: "Trọng âm từ 3 âm tiết (Adj & Verb)",
          tag: "Phát âm",
          href: u(6, "pronunciation"),
        },
        exercise: {
          title: "Thực hành phát âm",
          href: u(6, "practice-pronunciation"),
        },
      },
    ],
    skills: [
      {
        title: "Đọc: Câu chuyện về bình đẳng giới",
        tag: "Luyện đọc",
        href: u(6, "skill-reading-1"),
        icon: "read",
      },
      {
        title: "Nghe: Nơi làm việc & cơ hội bình đẳng",
        tag: "Luyện nghe",
        href: u(6, "skill-listening-1"),
        icon: "listen",
      },
      {
        title: "Nói: Quan điểm về cơ hội nghề nghiệp",
        tag: "Luyện nói",
        href: u(6, "skill-speaking-1"),
        icon: "speak",
      },
      {
        title: "Viết: Mẹ đi làm & chăm sóc gia đình",
        tag: "Luyện viết",
        href: u(6, "skill-writing-1"),
        icon: "write",
      },
    ],
  },

  {
    id: 7,
    slug: "unit-7",
    title: "Unit 7: Viet Nam and international organisations",
    cover: "/covers/english10/u7.jpg",
    rows: [
      {
        key: "vocabulary-1",
        lecture: {
          title: "Từ vựng: Việt Nam & tổ chức quốc tế",
          tag: "Từ vựng",
          href: u(7, "vocabulary-1"),
        },
        exercise: {
          title: "Thực hành từ vựng",
          href: u(7, "practice-vocabulary-1"),
        },
      },
      {
        key: "grammar-1",
        lecture: {
          title: "Tính từ so sánh hơn & so sánh nhất",
          tag: "Ngữ pháp 1",
          href: u(7, "grammar-1"),
        },
        exercise: {
          title: "Thực hành ngữ pháp 1",
          href: u(7, "practice-grammar-1"),
        },
      },
      {
        key: "pronunciation",
        lecture: {
          title: "Trọng âm từ > 3 âm tiết",
          tag: "Phát âm",
          href: u(7, "pronunciation"),
        },
        exercise: {
          title: "Thực hành phát âm",
          href: u(7, "practice-pronunciation"),
        },
      },
    ],
    skills: [
      {
        title: "Đọc: Vai trò của tổ chức quốc tế",
        tag: "Luyện đọc",
        href: u(7, "skill-reading-1"),
        icon: "read",
      },
      {
        title: "Nghe: Hợp tác quốc tế",
        tag: "Luyện nghe",
        href: u(7, "skill-listening-1"),
        icon: "listen",
      },
      {
        title: "Nói: Giới thiệu một tổ chức",
        tag: "Luyện nói",
        href: u(7, "skill-speaking-1"),
        icon: "speak",
      },
      {
        title: "Viết: Bài giới thiệu tổ chức",
        tag: "Luyện viết",
        href: u(7, "skill-writing-1"),
        icon: "write",
      },
    ],
  },

  {
    id: 8,
    slug: "unit-8",
    title: "Unit 8: New ways to learn",
    cover: "/covers/english10/u8.jpg",
    rows: [
      {
        key: "vocabulary-1",
        lecture: {
          title: "Từ vựng: Phương thức học mới",
          tag: "Từ vựng",
          href: u(8, "vocabulary-1"),
        },
        exercise: {
          title: "Thực hành từ vựng",
          href: u(8, "practice-vocabulary-1"),
        },
      },
      {
        key: "grammar-1",
        lecture: {
          title: "Mệnh đề quan hệ (xác định & không xác định)",
          tag: "Ngữ pháp",
          href: u(8, "grammar-1"),
        },
        exercise: {
          title: "Thực hành ngữ pháp",
          href: u(8, "practice-grammar"),
        },
      },
      {
        key: "pronunciation",
        lecture: {
          title: "Trọng âm câu (sentence stress)",
          tag: "Phát âm",
          href: u(8, "pronunciation"),
        },
        exercise: {
          title: "Thực hành phát âm",
          href: u(8, "practice-pronunciation"),
        },
      },
    ],
    skills: [
      {
        title: "Đọc: Học trực tuyến",
        tag: "Luyện đọc",
        href: u(8, "skill-reading-1"),
        icon: "read",
      },
      {
        title: "Nghe: Công nghệ & học tập",
        tag: "Luyện nghe",
        href: u(8, "skill-listening-1"),
        icon: "listen",
      },
      {
        title: "Nói: Thói quen học thông minh",
        tag: "Luyện nói",
        href: u(8, "skill-speaking-1"),
        icon: "speak",
      },
      {
        title: "Viết: Mẹo học hiệu quả",
        tag: "Luyện viết",
        href: u(8, "skill-writing-1"),
        icon: "write",
      },
    ],
  },

  {
    id: 9,
    slug: "unit-9",
    title: "Unit 9: Protecting the environment",
    cover: "/covers/english10/u9.jpg",
    rows: [
      {
        key: "vocabulary-1",
        lecture: {
          title: "Từ vựng: Bảo vệ môi trường – Phần 1",
          tag: "Từ vựng",
          href: u(9, "vocabulary-1"),
        },
        exercise: {
          title: "Thực hành từ vựng 1",
          href: u(9, "practice-vocabulary-1"),
        },
      },
      {
        key: "vocabulary-2",
        lecture: {
          title: "Từ vựng bổ sung – Phần 2",
          tag: "Từ vựng",
          href: u(9, "vocabulary-2"),
        },
        exercise: {
          title: "Thực hành từ vựng 2",
          href: u(9, "practice-vocabulary-2"),
        },
      },
      {
        key: "grammar-1",
        lecture: {
          title: "Câu tường thuật (reported speech)",
          tag: "Ngữ pháp",
          href: u(9, "grammar-1"),
        },
        exercise: {
          title: "Thực hành ngữ pháp",
          href: u(9, "practice-grammar"),
        },
      },
      {
        key: "pronunciation",
        lecture: {
          title: "Nhịp điệu (rhythm) trong câu",
          tag: "Phát âm",
          href: u(9, "pronunciation"),
        },
        exercise: {
          title: "Thực hành phát âm",
          href: u(9, "practice-pronunciation"),
        },
      },
    ],
    skills: [
      {
        title: "Đọc: Nguyên nhân nóng lên toàn cầu",
        tag: "Luyện đọc",
        href: u(9, "skill-reading-1"),
        icon: "read",
      },
      {
        title: "Nghe: Bảo vệ môi trường quanh ta",
        tag: "Luyện nghe",
        href: u(9, "skill-listening-1"),
        icon: "listen",
      },
      {
        title: "Nói: Lối sống xanh",
        tag: "Luyện nói",
        href: u(9, "skill-speaking-1"),
        icon: "speak",
      },
      {
        title: "Viết: Sáng kiến xanh cho cộng đồng",
        tag: "Luyện viết",
        href: u(9, "skill-writing-1"),
        icon: "write",
      },
    ],
  },

  {
    id: 10,
    slug: "unit-10",
    title: "Unit 10: Ecotourism",
    cover: "/covers/english10/u10.jpg",
    rows: [
      {
        key: "vocabulary-1",
        lecture: {
          title: "Từ vựng: Du lịch sinh thái – Phần 1",
          tag: "Từ vựng",
          href: u(10, "vocabulary-1"),
        },
        exercise: {
          title: "Thực hành từ vựng 1",
          href: u(10, "practice-vocabulary-1"),
        },
      },
      {
        key: "vocabulary-2",
        lecture: {
          title: "Từ vựng bổ sung – Phần 2",
          tag: "Từ vựng",
          href: u(10, "vocabulary-2"),
        },
        exercise: {
          title: "Thực hành từ vựng 2",
          href: u(10, "practice-vocabulary-2"),
        },
      },
      {
        key: "grammar-1",
        lecture: {
          title: "Câu điều kiện loại 1 & 2",
          tag: "Ngữ pháp",
          href: u(10, "grammar-1"),
        },
        exercise: {
          title: "Thực hành ngữ pháp",
          href: u(10, "practice-grammar"),
        },
      },
      {
        key: "pronunciation",
        lecture: {
          title: "Ngữ điệu (intonation)",
          tag: "Phát âm",
          href: u(10, "pronunciation"),
        },
        exercise: {
          title: "Thực hành phát âm",
          href: u(10, "practice-pronunciation"),
        },
      },
    ],
    skills: [
      {
        title: "Đọc: Điểm đến du lịch sinh thái",
        tag: "Luyện đọc",
        href: u(10, "skill-reading-1"),
        icon: "read",
      },
      {
        title: "Nghe: Kinh nghiệm du lịch xanh",
        tag: "Luyện nghe",
        href: u(10, "skill-listening-1"),
        icon: "listen",
      },
      {
        title: "Nói: Lập kế hoạch tour sinh thái",
        tag: "Luyện nói",
        href: u(10, "skill-speaking-1"),
        icon: "speak",
      },
      {
        title: "Viết: Cẩm nang du lịch bền vững",
        tag: "Luyện viết",
        href: u(10, "skill-writing-1"),
        icon: "write",
      },
    ],
  },
];

export default english10Units;

// content/practice/listening/types.ts

// Kiểu câu hỏi cho phần nghe
export type ListeningQuestionType = "mcq" | "input" | "drag";

// Mỗi câu hỏi trong 1 trang bài tập nghe
export interface ListeningQuestion {
  /** ID duy nhất cho câu hỏi (dùng làm key trong answers) */
  id: string;

  /** Loại câu hỏi: mcq = trắc nghiệm, input = điền từ, drag = kéo thả */
  type: ListeningQuestionType;

  /** Nội dung câu hỏi (dùng cho mcq & input) */
  question?: string;

  /** Câu có chỗ trống (dùng cho dạng drag – kéo từ vào chỗ trống) */
  blankText?: string;

  /** Gợi ý tiếng Việt (hiển thị chữ nhỏ màu xám dưới câu hỏi) */
  viHint?: string;

  /** Các lựa chọn (dùng cho mcq & drag) */
  options?: string[];
}

// Một "trang" bài luyện nghe (ListeningExercisePage)
// -> trong ListeningExamPage, mỗi trang = tối đa 10 câu + 1 nút Submit riêng
export interface ListeningExercisePage {
  /** ID trang (vd: "page1", "page2") */
  id: string;

  /** Tiêu đề trang (vd: "Listening – Part 1") */
  title: string;

  /** Hướng dẫn tiếng Anh */
  instructionEn: string;

  /** Hướng dẫn tiếng Việt (nếu có) */
  instructionVi?: string;

  /** Danh sách câu hỏi trên trang này */
  questions: ListeningQuestion[];

  /**
   * Đáp án đúng cho mỗi câu, key = id của câu hỏi
   * Ví dụ: { "u1_p1_q1": "B. Sharing household chores" }
   * hoặc với input/drag: { "u1_p2_q1": "fair" }
   */
  answers: Record<string, string>;

  /**
   * Giải thích đáp án (optional)
   * key = id của câu hỏi
   */
  explanations?: Record<string, string>;
}

// Toàn bộ bài luyện nghe cho 1 Unit
export interface ListeningLesson {
  /** ID duy nhất cho bài (vd: "en10.u1.listen1") */
  id: string;

  /** Số Unit (1, 2, 3, ...) */
  unit: number;

  /** Kỹ năng: cố định là "listening" để đồng bộ với reading ("reading") */
  skill: "listening";

  /** Chủ đề tiếng Việt (hiện ở dòng Luyện nghe · Chủ đề: ...) */
  topicVi: string;

  /** Tiêu đề tiếng Anh (hiện to ở trên) */
  titleEn: string;

  /**
   * ID hoặc URL video YouTube
   * - Nếu là ID: "sSc7ZBHcrF8"
   * - Nếu là URL: "https://www.youtube.com/watch?v=sSc7ZBHcrF8"
   *   component sẽ tự tách id để embed
   */
  youtubeId: string;

  /** Mô tả tiếng Anh (optional, hiển thị dưới tiêu đề) */
  descriptionEn?: string;

  /** Mô tả tiếng Việt (optional, hiển thị dưới dòng English) */
  descriptionVi?: string;

  /** Danh sách các trang bài tập (mỗi trang ~10 câu) */
  exercises: ListeningExercisePage[];
}

import { PracticeTask, SectionKey } from "./types";
import { en10u5p1ex4 } from "./vocab/en10.u5.p1.ex4"; 
 import { en10u2v2ex1 } from "./dragFill/en10.u2.v2.ex1";

export function getPracticeTasks(
  unit: number,
  sectionKey: SectionKey
): PracticeTask[] {
  const tasks: PracticeTask[] = [];

  // =======================
  // UNIT 1 – đã có đủ dữ liệu
  // =======================

  // Unit 1 – Vocabulary 1
  if (unit === 1 && sectionKey === "vocabulary-1") {
    tasks.push({
      id: "u1-v1-ex1",
      title: "Bài tập 1",
      description: "Nghe và nối từ với nghĩa và từ loại tương ứng.",
      gameType: "flash-audio-match",
      datasetId: "en10.u1.v1.ex1",
    });
  }

  // Unit 1 – Vocabulary 2 (drag-fill)
  if (unit === 1 && sectionKey === "vocabulary-2") {
    tasks.push({
      id: "u1-v2-ex1",
      title: "Bài tập 1: Hoàn thành câu với các cụm từ cho sẵn",
      description:
        "Chọn cụm từ và điền vào chỗ trống. Có 2 cụm từ không cần dùng.",
      gameType: "drag-fill",
      datasetId: "en10.u1.v2.ex1",
    });
  }
// Unit 2 – Vocabulary 1 (drag-fill)
  if (unit === 2 && sectionKey === "vocabulary-1") {
    tasks.push({
      id: "u2-v2-ex1",
      title: "Bài tập 1: Hoàn thành câu với các cụm từ cho sẵn",
      description:
        "Chọn cụm từ và điền vào chỗ trống. Có 2 cụm từ không cần dùng.",
      gameType: "drag-fill",
      datasetId: "en10.u2.v2.ex1",
    });
  }
// Unit 4 – Vocabulary 1 (flash-audio-match)
if (unit === 4 && sectionKey === "vocabulary-1") {
  tasks.push({
    id: "u4-v1-ex1",
    title: "Bài tập 1: Nghe và nối từ với nghĩa và từ loại tương ứng",
    description:
      "Nghe từ rồi chọn nghĩa tiếng Việt và loại từ phù hợp.",
    gameType: "flash-audio-match",
    datasetId: "en10.u4.v1.ex1",
  });
}
// Unit 4 – Vocabulary 2 (listen-choose: chọn đáp án hoàn thành câu)
if (unit === 4 && sectionKey === "vocabulary-2") {
  tasks.push({
    id: "u4-v2-ex1",
    title: "Bài tập 1: Chọn đáp án đúng hoàn thành câu",
    description:
      "Nghe câu và chọn từ/ cụm từ đúng để điền vào chỗ trống.",
    gameType: "listen-choose",
    datasetId: "en10.u4.v2.ex1",
  });
}
// Unit 8 – Vocabulary 1 (flashcard)
if (unit === 8 && sectionKey === "vocabulary-1") {
  tasks.push({
    id: "u8-v1-ex1",
    title: "Bài tập 1: Nghe và nối từ với nghĩa và từ loại tương ứng.",
    description:
      "Nghe từ, chọn nghĩa tiếng Việt và từ loại phù hợp.",
    gameType: "flash-audio-match",
    datasetId: "en10.u8.v1.ex1",
  });
}
 // Unit 9 – Vocabulary 1 (flashcard)
if (unit === 9 && sectionKey === "vocabulary-1") {
  tasks.push({
    id: "u9-v1-ex1",
    title: "Bài tập 1: Nghe và nối từ với nghĩa và từ loại tương ứng",
    description:
      "Nghe từ, ghép với nghĩa tiếng Việt và loại từ phù hợp về chủ đề bảo vệ môi trường.",
    gameType: "flash-audio-match",
    datasetId: "en10.u9.v1.ex1",
  });
}
 // Unit 9 – Vocabulary 2 (multiple choice 3 lựa chọn)
if (unit === 9 && sectionKey === "vocabulary-2") {
  tasks.push({
    id: "u9-v2-ex1",
    title: "Bài tập 1: Chọn đáp án đúng điền vào chỗ trống",
    description:
      "Chọn phương án A, B hoặc C để hoàn thành câu.",
    gameType: "listen-choose",       // dùng lại ListenChooseGame
    datasetId: "en10.u9.v2.ex1",
  });
}
// Unit 10 – Vocabulary 1 (flashcard)
 if (unit === 10 && sectionKey === "vocabulary-1") {
  tasks.push({
    id: "u10-v1-ex1",
    title: "Bài tập 1: Hãy nghe và nối từ với nghĩa và từ loại tương ứng.",
    description:
      "Nghe flashcard và ghép nghĩa tiếng Việt với loại từ phù hợp.",
    gameType: "flash-audio-match",
    datasetId: "en10.u10.v1.ex1",
  });
}
 // Unit 10 – Vocabulary 2 (multiple choice 3 lựa chọn)
if (unit === 10 && sectionKey === "vocabulary-2") {
  tasks.push({
    id: "u10-v2-ex1",
    title: "Bài tập 1: Chọn đáp án đúng điền vào chỗ trống",
    description:
      "Chọn phương án A, B hoặc C để hoàn thành câu.",
    gameType: "listen-choose",       // dùng lại ListenChooseGame
    datasetId: "en10.u10.v2.ex1",
  });
}
  // Unit 1 – Grammar 1
  if (unit === 1 && sectionKey === "grammar-1") {
    tasks.push({
      id: "u1-g1-ex4",
      title: "Bài tập 4: Điền vào chỗ trống dạng đúng của động từ",
      description:
        "Hiện tại đơn & hiện tại tiếp diễn. Có thể dùng một động từ hai lần.",
      gameType: "gap-fill",
      datasetId: "en10.u1.g1.ex4",
    });
  }

  // Unit 1 – Pronunciation
  if (unit === 1 && sectionKey === "pronunciation") {
    tasks.push({
      id: "u1-p1-ex1",
      title: "Bài tập 1: Nghe và chọn đáp án đúng",
      description: "Nghe audio và chọn A/B để điền vào chỗ trống.",
      gameType: "listen-choose",
      datasetId: "en10.u1.p1.ex1",
    });
  }

  // =======================
  // THÊM UNIT 2 & 3 – PHÁT ÂM
  // (chỉ thêm những phần chắc chắn đã có dataset)
  // =======================

  // Unit 2 – Pronunciation (/kl/, /pl/, /gr/, /pr/)
  if (unit === 2 && sectionKey === "pronunciation") {
    tasks.push({
      id: "u2-p1-ex1",
      title: "Bài tập 1: Nghe và chọn từ bạn nghe thấy",
      description:
        "Nghe và chọn từ có phụ âm đầu đúng (/kl/, /pl/, /gr/, /pr/).",
      gameType: "listen-choose",
      datasetId: "en10.u2.p1.ex1",
    });
  }
// Unit 2 – Grammar-1 (flash-audio-match)
if (unit === 2 && sectionKey === "grammar-1") {
  tasks.push({
    id: "u2-g1-ex1",
    title: "Bài tập 1: Chọn will / be going to / hiện tại đơn cho đúng nghĩa (dự định, quyết định tức thời, dự đoán có bằng chứng…).",
    description:
      "Chọn đáp án đúng trong các lựa chọn sau:",
    gameType: "listen-choose",
    datasetId: "en10.u2.g1.ex1", // 👈 trùng với key DATASETS
  });
}
// Unit 2 – Grammar-1 -bài tập 2 (flash-audio-match)
if (unit === 2 && sectionKey === "grammar-1") {
  tasks.push({
    id: "u2-g1-ex2",
    title: "Bài tập 2: Thực hành các cách dùng khác của will: offer, promise, request, invitation, warning…",
    description:
      "Chọn đáp án đúng trong các lựa chọn sau:",
    gameType: "listen-choose",
    datasetId: "en10.u2.g1.ex2", // 👈 trùng với key DATASETS
  });
} 
// Unit 2 – Grammar 2 (Passive Voice – listen-choose)
if (unit === 2 && sectionKey === "grammar-2") {
  tasks.push({
    id: "u2-g2-ex1",
    title: "Bài tập 1: Chọn dạng bị động đúng ở các thì cơ bản.",
    description:
      "Ôn lại thể bị động ở hiện tại đơn, hiện tại tiếp diễn, quá khứ đơn, tương lai đơn, be going to, hiện tại hoàn thành.",
    gameType: "listen-choose",
    datasetId: "en10.u2.g2.ex1",
  });

  tasks.push({
    id: "u2-g2-ex2",
    title: "Bài tập 2: Dùng câu bị động đúng trong ngữ cảnh.",
    description:
      "Chọn câu ở thể bị động phù hợp với thời và nghĩa của câu.",
    gameType: "listen-choose",
    datasetId: "en10.u2.g2.ex2",
  });
}
 
// Unit 3 – Vocabulary 1 (multiple choice 3 lựa chọn)
if (unit === 3 && sectionKey === "vocabulary-1") {
  tasks.push({
    id: "u3-v1-ex1",
    title: "Bài tập 1: Chọn đáp án đúng điền vào chỗ trống",
    description:
      "Chọn phương án A, B hoặc C để hoàn thành câu.",
    gameType: "listen-choose",       // dùng lại ListenChooseGame
    datasetId: "en10.u3.v1.ex1",
  });
}
 // Unit 3 – Vocabulary 2 (flash-audio-match)
if (unit === 3 && sectionKey === "vocabulary-2") {
  tasks.push({
    id: "u3-v2-ex2",
    title: "Bài tập 2: Nghe và nối từ với nghĩa và từ loại",
    description:
      "Nghe từ, chọn nghĩa tiếng Việt và loại từ tương ứng.",
    gameType: "flash-audio-match",
    datasetId: "en10.u3.v2.ex2", // 👈 trùng với key DATASETS
  });
}
// Unit 3 – Grammar 1 (Compound sentences – DragFillGame)
if (unit === 3 && sectionKey === "grammar-1") {
  tasks.push({
    id: "u3-g1-ex1",
    title:
      "Bài tập 1: Hoàn thành câu ghép với and / but / or / so.",
    description:
      "Kéo thả liên từ thích hợp (and, but, or, so) vào chỗ trống để tạo câu ghép đúng.",
    gameType: "drag-fill",
    datasetId: "en10.u3.g1.ex1",
  });

  tasks.push({
    id: "u3-g1-ex2",
    title:
      "Bài tập 2: Luyện tập câu ghép với các liên từ FANBOYS.",
    description:
      "Hoàn thành câu ghép bằng cách kéo thả liên từ for, and, nor, but, or, yet, so vào chỗ trống.",
    gameType: "drag-fill",
    datasetId: "en10.u3.g1.ex2",
  });
}
if (unit === 3 && sectionKey === "grammar-2") {
  tasks.push({
    id: "u3-g2-ex1",
    title: "Unit 3 – Grammar 2 – Bài 1: Thực hành các cấu trúc với to-infinitives",
    description:
     "Hoàn thành các câu sau bằng cách kéo thả cụm ‘enough to’, ‘whether to’, ‘to’ (trong cấu trúc It’s + adj + to V) và ‘about to’ vào chỗ trống.",
    gameType: "drag-fill",
    datasetId: "en10.u3.g2.ex1",
  });
  tasks.push({
    id: "u3-g2-ex2",
    title: "Bài 2: Hoàn thành bằng động từ nguyên thể (to-infinitive hoặc bare infinitive).",
    description:
      "Chọn đúng to-infinitive hoặc bare infinitive để hoàn thành câu.",
    gameType: "drag-fill",
    datasetId: "en10.u3.g2.ex2",
  });
}
 
 // Unit 5 – Vocabulary 1 (flashcard nghe + nối nghĩa & từ loại)
if (unit === 5 && sectionKey === "vocabulary-1") {
  tasks.push({
    id: "u5-v1-ex1",
    title: "Bài tập 1: Nghe và nối từ với nghĩa và từ loại tương ứng",
    description:
      "Nghe từng từ, sau đó ghép đúng với nghĩa tiếng Việt và từ loại.",
    gameType: "flash-audio-match",
    datasetId: "en10.u5.v1.ex1",
  });
}
// Unit 5 – Vocabulary 2 (listen-choose)
if (unit === 5 && sectionKey === "vocabulary-2") {
  tasks.push({
    id: "u5-v2-ex1",
    title: "Bài tập 1: Chọn đáp án đúng hoàn thành câu",
    description:
      "Nghe câu và chọn từ/ cụm từ đúng để điền vào chỗ trống.",
    gameType: "listen-choose",
    datasetId: "en10.u5.v2.ex1",
  });
}
// Unit 6 – Vocabulary 1 (flashcard)
if (unit === 6 && sectionKey === "vocabulary-1") {
  tasks.push({
    id: "u6-v1-ex1",
    title: "Bài tập 1: Nghe và nối từ với nghĩa và từ loại tương ứng",
    description:
      "Nghe từ, ghép với nghĩa tiếng Việt và loại từ (noun, adjective, ...).",
    gameType: "flash-audio-match",
    datasetId: "en10.u6.v1.ex1",
  });
}
 // Unit 6 – Vocabulary 2 (multiple choice 3 lựa chọn)
if (unit === 6 && sectionKey === "vocabulary-2") {
  tasks.push({
    id: "u6-v2-ex1",
    title: "Bài tập 1: Chọn đáp án đúng điền vào chỗ trống",
    description:
      "Chọn phương án A, B hoặc C để hoàn thành câu.",
    gameType: "listen-choose",       // dùng lại ListenChooseGame
    datasetId: "en10.u6.v2.ex1",
  });
}
 // Unit 7 – Vocabulary 1 (flashcard)
if (unit === 7 && sectionKey === "vocabulary-1") {
  tasks.push({
    id: "u7-v1-ex1",
    title: "Bài tập 1: Hãy nghe và nối từ với nghĩa và từ loại tương ứng.",
    description:
      "Nghe từ, chọn đúng nghĩa tiếng Việt và loại từ (noun, verb, adjective...).",
    gameType: "flash-audio-match",
    datasetId: "en10.u7.v1.ex1",
  });
}
  // Unit 3 – Pronunciation (word stress)
  if (unit === 3 && sectionKey === "pronunciation") {
    tasks.push({
      id: "u3-p1-ex1",
      title: "Bài tập 1: Nghe và chọn trọng âm đúng của từ",
      description: "Nghe từ và chọn đáp án có trọng âm đúng.",
      gameType: "listen-choose",
      datasetId: "en10.u3.p1.ex1",
    });
  }
// Unit 4 – Pronunciation
if (unit === 4 && sectionKey === "pronunciation") {
  tasks.push({
    id: "u4-p1-ex1",
    title: "Bài tập 1: Nghe và xác định trọng âm của từ",
    description: "Chọn xem trọng âm rơi vào âm tiết thứ 1 hay thứ 2.",
    gameType: "listen-choose",
    datasetId: "en10.u4.p1.ex1",
  });
}
  // Unit 5 – Pronunciation: Record & compare
if (unit === 5 && sectionKey === "pronunciation") {
  tasks.push({
    id: "u5-p1-ex4",
    title: "Bài tập 4: Nghe và thu âm để so sánh",
    description:
      "Nghe câu mẫu, thu âm lại giọng nói của bạn và so sánh trọng âm của các danh từ 3 âm tiết.",
    gameType: "record-compare",
    datasetId: "en10.u5.p1.ex4",
  });
}
// Unit 6 – Pronunciation (word stress – 3 lựa chọn)
if (unit === 6 && sectionKey === "pronunciation") {
  tasks.push({
    id: "u6-p1-ex1",
    title: "Bài tập 1: Nghe và chọn trọng âm đúng của từ",
    description:
      "Nghe và chọn xem trọng âm rơi vào âm tiết thứ nhất, thứ hai hay thứ ba.",
    gameType: "listen-choose",
    datasetId: "en10.u6.p1.ex1",
  });
}  
// Unit 7 – Pronunciation (record-compare)
if (unit === 7 && sectionKey === "pronunciation") {
  tasks.push({
    id: "u7-p3-ex1",
    title: "Bài tập 3: Luyện tập về trọng âm ở từ có hơn ba âm tiết",
    description:
      "Nghe lần lượt các từ in đậm trong câu và thu âm để so sánh phát âm.",
    gameType: "record-compare",
    datasetId: "en10.u7.p3.ex1",   // 👈 phải đúng y chang
  });
}
// Unit 8 – Pronunciation (sentence stress: stressed / unstressed)
if (unit === 8 && sectionKey === "pronunciation") {
  tasks.push({
    id: "u8-p1-ex2",
    title:
      "Bài tập 2: Nghe và xác định xem từ trong chỗ trống được đọc nhấn mạnh hay không.",
    description:
      "Nghe câu và chọn xem từ còn thiếu trong chỗ trống là stressed hay unstressed.",
    gameType: "listen-choose",
    datasetId: "en10.u8.p1.ex2", // 👈 trùng với id dataset mình tạo
  });
}
 // Unit 9 – Pronunciation (record-compare câu về môi trường)
if (unit === 9 && sectionKey === "pronunciation") {
  tasks.push({
    id: "u9-p1-ex1",
    title: "Bài luyện tập: Luyện tập về nhịp điệu của câu",
    description:
      "Nghe từng câu, thu âm lại giọng nói của bạn và so sánh nhịp điệu, trọng âm câu.",
    gameType: "record-compare",
    datasetId: "en10.u9.p1.ex1", // 👈 trùng với id trong dataset
  });
}
  // Unit 10 – Pronunciation / Intonation (record-compare)
if (unit === 10 && sectionKey === "pronunciation") {
  tasks.push({
    id: "u10-p3-ex3",
    title: "Bài tập 3: Luyện tập về ngữ điệu của câu",
    description:
      "Nghe từng câu và thu âm lại để so sánh ngữ điệu (intonation).",
    gameType: "record-compare",
    datasetId: "en10.u10.p3.ex3",
  });
}
 // Các unit khác (4–10) tạm thời chưa đăng ký
  // Khi bạn tạo xong dataset en10.u4.p1.ex1,... ta sẽ thêm điều kiện tương tự.

  return tasks;
}

export const loadPracticeTasks = getPracticeTasks;

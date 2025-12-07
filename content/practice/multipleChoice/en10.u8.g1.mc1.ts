// content/practice/multipleChoice/en10.u8.g1.mc1.ts
import { MultipleChoiceDataset } from "@/components/games/MultipleChoiceGame";

export const en10u8g1mc1: MultipleChoiceDataset = {
  id: "en10.u8.g1.mc1",
  title:
    "Unit 8 – Grammar 1 – Bài 2: Mệnh đề quan hệ xác định & không xác định",
  instructionsEn:
    "Study the situations and choose the suitable relative clauses.",
  instructionsVi:
    "Đọc kĩ tình huống rồi chọn câu dùng mệnh đề quan hệ phù hợp (có hoặc không dấu phẩy).",
  items: [
    {
      id: "q1",
      question: "Situation: I have two brothers.",
      optionA: "My brother who lives in Tokyo usually visits home at Tet.",
      optionB:
        "My brother, who lives in Tokyo, usually visits home at Tet.",
      optionC: "My brothers, who live in Tokyo, usually visit home at Tet.",
      optionD: "My brother lives in Tokyo usually visits home at Tet.",
      correct: "A",
      explanation:
        "Bạn có hai người anh trai nên cần mệnh đề quan hệ **xác định** để biết đang nói tới anh nào. \"who lives in Tokyo\" là thông tin bắt buộc để xác định người anh → **không dùng dấu phẩy**."
    },
    {
      id: "q2",
      question: "Situation: I have a sister.",
      optionA: "My sister who works in Hanoi is getting married next week.",
      optionB:
        "My sister, who works in Hanoi, is getting married next week.",
      optionC:
        "My sisters, who work in Hanoi, are getting married next week.",
      optionD: "My sister works in Hanoi, is getting married next week.",
      correct: "B",
      explanation:
        "Bạn chỉ có **một** người chị, cụm \"who works in Hanoi\" chỉ là thông tin thêm. Vì đối tượng đã được xác định rồi nên đây là mệnh đề quan hệ **không xác định** → cần dấu phẩy trước và sau mệnh đề."
    },
    {
      id: "q3",
      question: "Situation: Brian's mother has broken her leg.",
      optionA: "Brian's mother who is 60 now has broken her leg.",
      optionB: "Brian's mother, who is 60 now, has broken her leg.",
      optionC: "The mother of Brian who is 60 now has broken her leg.",
      optionD:
        "Brian's mother who is 60 now, has broken her leg, yesterday.",
      correct: "B",
      explanation:
        "Brian chỉ có **một** người mẹ nên \"who is 60 now\" chỉ bổ sung thông tin thêm về mẹ Brian. Đây là mệnh đề quan hệ **không xác định**, phải tách bằng dấu phẩy."
    },
    {
      id: "q4",
      question: "Situation: Susan is a dress fanatic.",
      optionA: "The dress that she bought yesterday is beautiful.",
      optionB: "The dress, which she bought yesterday, is beautiful.",
      optionC: "The dresses which she bought yesterday are beautiful.",
      optionD: "The dress which she bought yesterday, is beautiful.",
      correct: "A",
      explanation:
        "Susan thích váy nên có **nhiều** cái váy. Cụm \"that she bought yesterday\" dùng để xác định cái váy nào → mệnh đề quan hệ **xác định**, không dùng dấu phẩy."
    },
    {
      id: "q5",
      question: "Situation: Lan has two cats. They are both brown.",
      optionA: "Lan's two cats which hate bathing are brown.",
      optionB: "Lan's two cats, which hate bathing, are brown.",
      optionC: "Lan's two cats which hate bathing, are brown.",
      optionD: "Lan's cats, which hate bathing, are both brown.",
      correct: "B",
      explanation:
        "Lan chỉ có **hai** con mèo nên cụm \"which hate bathing\" không nhằm xác định xem con nào, mà chỉ thêm thông tin về chúng. Đó là mệnh đề quan hệ **không xác định** → cần dấu phẩy."
    },
    {
      id: "q6",
      question:
        "Situation: We are on a holiday. Yesterday, we visited a spectacular aquarium.",
      optionA: "Columbus Aquarium which we visited yesterday is spectacular.",
      optionB:
        "Columbus Aquarium, which we visited yesterday, is spectacular.",
      optionC:
        "The aquarium which we visited yesterday is spectacular.",
      optionD:
        "Columbus Aquarium which, we visited yesterday, is spectacular.",
      correct: "B",
      explanation:
        "\"Columbus Aquarium\" là tên riêng, ai cũng biết đang nói tới thủy cung nào. Cụm \"which we visited yesterday\" chỉ thêm thông tin thời gian → mệnh đề quan hệ **không xác định**, phải viết giữa hai dấu phẩy."
    },
    {
      id: "q7",
      question:
        "Situation: Group B has four people. Two are from Indonesia.",
      optionA:
        "Group B's two people who are from Indonesia speak the best English.",
      optionB:
        "Group B's two people, who are from Indonesia, speak the best English.",
      optionC:
        "Group B's two people which are from Indonesia speak the best English.",
      optionD:
        "Group B's two people who are from Indonesia, speak the best English.",
      correct: "A",
      explanation:
        "Nhóm B có bốn người, ta muốn nói về **hai người đến từ Indonesia**. Mệnh đề \"who are from Indonesia\" giúp xác định hai người đó → mệnh đề quan hệ **xác định**, không có dấu phẩy."
    },
    {
      id: "q8",
      question: "Situation: My friend Ann moved to China.",
      optionA:
        "My friend Ann whose husband is Chinese moved to China last year.",
      optionB:
        "My friend Ann, whose husband is Chinese, moved to China last year.",
      optionC:
        "My friend Ann whose husband is Chinese, moved to China last year.",
      optionD:
        "My friend Ann whose husband Chinese is, moved to China last year.",
      correct: "B",
      explanation:
        "Tên riêng \"Ann\" đã xác định rõ bạn nào. Cụm \"whose husband is Chinese\" chỉ thêm thông tin về chồng của Ann → mệnh đề quan hệ **không xác định**, cần hai dấu phẩy."
    },
    {
      id: "q9",
      question: "Situation: Many people do exercise to stay healthy.",
      optionA: "People who do exercise regularly are healthy.",
      optionB: "People, who do exercise regularly, are healthy.",
      optionC: "People which do exercise regularly are healthy.",
      optionD: "People who do exercise regularly, are healthy.",
      correct: "A",
      explanation:
        "Câu muốn nói: **những người tập thể dục thường xuyên** thì khỏe mạnh (không phải mọi người). Vì vậy \"who do exercise regularly\" dùng để **xác định nhóm người** → mệnh đề quan hệ **xác định**, không dùng dấu phẩy."
    },
    {
      id: "q10",
      question: "Situation: Minh's mother is extremely happy now.",
      optionA:
        "Minh's mother whose son has received a full scholarship is extremely happy now.",
      optionB:
        "Minh's mother, whose son has received a full scholarship, is extremely happy now.",
      optionC:
        "Minh's mother whose son has received a full scholarship, is extremely happy now.",
      optionD:
        "Minh's mother whose son received a full scholarship, extremely happy now.",
      correct: "B",
      explanation:
        "\"Minh's mother\" đã đủ xác định người mẹ nào, nên cụm \"whose son has received a full scholarship\" chỉ là thông tin phụ về lý do bà vui. Đó là mệnh đề quan hệ **không xác định**, phải viết giữa hai dấu phẩy."
    },
  ],
};

export default en10u8g1mc1;

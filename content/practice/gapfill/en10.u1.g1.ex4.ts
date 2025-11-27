// content/practice/gapfill/en10.u1.g1.ex4.ts

export interface GapFillItem {
  id: string;
  sentence: string;   // chứa "___" là chỗ trống
  answer: string;     // đáp án đúng
}

export interface GapFillDataset {
  id: string;
  title: string;
  instructionsEn?: string;
  instructionsVi?: string;
  words: string[];           // danh sách động từ cho sẵn
  items: GapFillItem[];      // danh sách câu hỏi
}

export const en10u1g1ex4: GapFillDataset = {
  id: "en10.u1.g1.ex4",
  title: "Hiện tại đơn & Hiện tại tiếp diễn – Bài tập 4",

  instructionsEn:
    "Fill in the blanks with the correct forms of the verbs given. Use negative form if necessary. You can use a word twice.",
  instructionsVi:
    "(Điền vào chỗ trống dạng đúng của các động từ đã cho. Dùng dạng phủ định nếu cần thiết. Có thể sử dụng một từ hai lần.)",

  words: ["have", "take out", "take", "split", "prepare", "shop", "do"],

  items: [
    {
      id: "q1",
      sentence: "I usually ___ the bus to school, but this morning I'm walking.",
      answer: "take"
    },
    {
      id: "q2",
      sentence: "My mom is not at home. She ___ for groceries now.",
      answer: "is shopping"
    },
    {
      id: "q3",
      sentence: "I'm very busy, so I only ___ the laundry every Saturday morning.",
      answer: "do"
    },
    {
      id: "q4",
      sentence:
        "They ___ housework among members in Ann's family. She has to do all the chores.",
      answer: "don't split"
    },
    {
      id: "q5",
      sentence:
        "Kate always ___ her dog fed by her neighbor every time she goes on business trips.",
      answer: "has"
    },
    {
      id: "q6",
      sentence:
        "I always cook, but today is Women's Day, so my husband ___ dinner in the kitchen.",
      answer: "is preparing"
    },
    {
      id: "q7",
      sentence:
        "The residents in my neighborhood ___ the garbage at 5 p.m. every day when the bin lorry comes.",
      answer: "take out"
    },
    {
      id: "q8",
      sentence:
        "Kris's wrist was broken once, so now she rarely ___ the heavy lifting.",
      answer: "does"
    }
  ]
};

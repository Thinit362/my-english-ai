// content/practice/dragFill/en10.u5.g2.ex1.ts
import { DragFillDataset } from "@/components/games/DragFillGame";

export const en10u5g2ex1: DragFillDataset = {
  id: "en10.u5.g2.ex1",
  title:
    "Unit 5 – Grammar 2 – Bài 1: Danh động từ & to-infinitive miêu tả chức năng của vật",
  instructionsEn:
    "Complete the sentences with the correct phrase using either for + V-ing or to V to describe the function of each device.",
  instructionsVi:
    "Hoàn thành các câu sau bằng cách chọn cụm từ dùng for + V-ing hoặc to V để miêu tả chức năng của các thiết bị.",
  // 2 cụm “nhiễu” thêm ngoài đáp án
  extraPhrases: ["to improve", "for protecting"],
  items: [
    {
      id: "s1",
      sentence:
        "We use this solar charger ___ our mobile phones when we are outside.",
      // We use this solar charger to charge our mobile phones...
      answer: "to charge",
    },
    {
      id: "s2",
      sentence:
        "This robot vacuum is used ___ the floor in our house.",
      // is used to clean / for cleaning → chọn 1 dạng
      answer: "to clean",
    },
    {
      id: "s3",
      sentence:
        "A dishwasher is used ___ dishes and glasses automatically.",
      // is used for washing dishes and glasses...
      answer: "for washing",
    },
    {
      id: "s4",
      sentence:
        "People use smart watches ___ their health and daily activities.",
      // use smart watches to track...
      answer: "to track",
    },
    {
      id: "s5",
      sentence:
        "Voice-controlled speakers are used ___ music and controlling smart devices.",
      // are used for playing music...
      answer: "for playing",
    },
    {
      id: "s6",
      sentence:
        "We use an electric kettle ___ water quickly.",
      // use an electric kettle to boil water...
      answer: "to boil",
    },
    {
      id: "s7",
      sentence:
        "Security cameras are used ___ what is happening around the house.",
      // are used to record what is happening...
      answer: "to record",
    },
    {
      id: "s8",
      sentence:
        "This app is used ___ time and money when shopping online.",
      // is used to save time and money...
      answer: "to save",
    },
    {
      id: "s9",
      sentence:
        "We use email ___ messages and documents to people around the world.",
      // use email for sending messages...
      answer: "for sending",
    },
    {
      id: "s10",
      sentence:
        "3D printers are used ___ objects from digital models.",
      // are used for creating objects...
      answer: "for creating",
    },
  ],
};

export default en10u5g2ex1;

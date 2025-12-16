import { SpeakingLesson } from "./types";

const unit9: SpeakingLesson = {
  unit: 9,
  topicVi: "Ảnh hưởng của con người tới môi trường",
  titleEn: "Talking about the environmental impacts of human activities",
  descriptionVi:
    "Luyện nói về các loại ô nhiễm và tác động của hoạt động con người tới môi trường.",

  theory: [
    {
      id: "u9-air",
      title: "Air pollution",
      items: [
        {
          en: "Air pollution is caused by burning fossil fuels.",
          vi: "Ô nhiễm không khí gây ra bởi việc đốt nhiên liệu hóa thạch.",
        },
        {
          en: "It has damaging effects on human health.",
          vi: "Nó gây hại nghiêm trọng tới sức khỏe con người.",
        },
      ],
    },
    {
      id: "u9-water",
      title: "Water pollution",
      items: [
        {
          en: "Water pollution results from sewage disposal.",
          vi: "Ô nhiễm nước xuất phát từ nước thải sinh hoạt.",
        },
      ],
    },
  ],

  exercises: [
    {
      id: "u9-p1",
      title: "Listen and record to compare",
      instructionEn:
        "Listen to each sentence and record your voice to compare with the model.",
      instructionVi:
        "Nghe từng câu và thu âm để so sánh với bài mẫu.",

      questions: [
        {
          id: "u9-q1",
          promptEn:
            "Air pollution is caused by exhaust emitted by vehicles and factories.",
          promptVi:
            "Ô nhiễm không khí gây ra bởi khí thải từ phương tiện giao thông và nhà máy.",
          sampleAnswerEn:
            "Air pollution is caused by exhaust emitted by vehicles and factories.",
        },
        {
          id: "u9-q2",
          promptEn:
            "Water pollution brings about serious health problems.",
          sampleAnswerEn:
            "Water pollution brings about serious health problems.",
        },
        {
          id: "u9-q3",
          promptEn:
            "Human activities lead to the destruction of ecosystems.",
          sampleAnswerEn:
            "Human activities lead to the destruction of ecosystems.",
        },
      ],
    },
  ],
};

export default unit9;

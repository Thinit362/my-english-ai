// content/practice/multipleChoice/en10.u9.g1.mc1.ts
import { MultipleChoiceDataset } from "@/components/games/MultipleChoiceGame";

export const en10u9g1mc1: MultipleChoiceDataset = {
  id: "en10.u9.g1.mc1",
  title: "Unit 9 – Grammar 1 – Reported Speech: Multiple Choice",
  instructionsEn: "Choose the correct option to complete each reported sentence.",
  instructionsVi: "Chọn đáp án đúng hoàn thành các câu gián tiếp sau.",
  items: [
    {
      id: "q1",
      question: `“Don't be late for the meeting.”\nThe manager asked everyone ________.`,
      optionA: "not to be late for the meeting",
      optionB: "to not be late for the meeting",
      optionC: "not be late for the meeting",
      optionD: "not late for the meeting",
      correct: "A",
      explanation:
        "Mệnh lệnh + 'Don't' → chuyển sang **ask + not to V**. → not to be late for the meeting."
    },
    {
      id: "q2",
      question: "She said that she ________.",
      optionA: "will stay in Paris for two weeks",
      optionB: "would stay in Paris for two weeks",
      optionC: "is going to stay in Paris for two weeks",
      optionD: "had stay in Paris for two weeks",
      correct: "B",
      explanation:
        "Trong câu tường thuật, **will → would**. Vì động từ tường thuật “said” ở quá khứ."
    },
    {
      id: "q3",
      question: `“What can you do to protect the environment?”\nThe teacher asked us ________.`,
      optionA: "what can we do to protect the environment",
      optionB: "what we can do to protect the environment",
      optionC: "what we could do to protect the environment",
      optionD: "what could we do to protect the environment",
      correct: "C",
      explanation:
        "Wh-question → đổi sang **S + could + V**, không đảo ngữ. → what we could do."
    },
    {
      id: "q4",
      question: `“Read the instructions carefully.”\nThe examiner told us ________.`,
      optionA: "to read the instructions carefully",
      optionB: "read the instructions carefully",
      optionC: "we read the instructions carefully",
      optionD: "not to read the instructions carefully",
      correct: "A",
      explanation:
        "Mệnh lệnh → told + O + to V. Không có ‘not’ vì câu gốc không phải câu phủ định."
    },
    {
      id: "q5",
      question: `“Do you come from Hanoi?”\nThe tourist asked me ________.`,
      optionA: "whether I come from Hanoi",
      optionB: "if I was from Hanoi",
      optionC: "did I come from Hanoi",
      optionD: "if I came from Hanoi",
      correct: "D",
      explanation:
        "Yes/No question → asked + if/whether + S + V.  
Hiện tại đơn → lùi thì → quá khứ đơn → came."
    },
    {
      id: "q6",
      question: `“Do you like the food at the restaurant, sir?”\nThe waiter asked me whether ________.`,
      optionA: "if I like the food at the restaurant",
      optionB: "I like the food at the restaurant",
      optionC: "did I like the food at the restaurant",
      optionD: "I liked the food at the restaurant",
      correct: "D",
      explanation:
        "asked whether + S + V.  
Do you like → lùi thì → liked."
    },
    {
      id: "q7",
      question: `“Where did you put the money last night?”\nMr. Brown wondered where ________.`,
      optionA: "his wife had put the money the last night",
      optionB: "did his wife put the money the previous night",
      optionC: "had his wife put the money the previous night",
      optionD: "his wife had put the money the previous night",
      correct: "D",
      explanation:
        "Wh-question → S + had + V3.  
last night → **the previous night**."
    },
    {
      id: "q8",
      question: `“You must train harder,” said Amber's coach.\nAmber's coach said that ________.`,
      optionA: "you must train harder",
      optionB: "she must train harder",
      optionC: "you had to train harder",
      optionD: "she had to train harder",
      correct: "D",
      explanation:
        "must → lùi thì → **had to**; đại từ you → she (Amber)."
    },
    {
      id: "q9",
      question: `“I am not at home now.”\nLan said that ________.`,
      optionA: "she was not at home then",
      optionB: "I was not at home then",
      optionC: "she was not at home that",
      optionD: "she is not at home now",
      correct: "A",
      explanation:
        "am not → was not (lùi thì).  
now → **then**."
    },
    {
      id: "q10",
      question: `“Why didn't you tell me about your accident last week?”\nNam asked me ________.`,
      optionA:
        "why I hadn't told him about my accident the following week",
      optionB:
        "why I didn't tell him about my accident the week before",
      optionC:
        "why I hadn't told him about my accident the previous week",
      optionD:
        "why hadn't I told him about my accident the previous week",
      correct: "C",
      explanation:
        "Wh-question → S + had + V3.  
last week → the previous week."
    }
  ]
};

export default en10u9g1mc1;

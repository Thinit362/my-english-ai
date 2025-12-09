import type { ReadingLesson } from "./types";

const en10_u7_read1: ReadingLesson = {
  id: "en10.u7.read1",
  unit: 7,
  skill: "reading",
  topicVi: "Hợp tác giữa Việt Nam và UNICEF",
  titleEn: "Vietnam – UNICEF Cooperation",

  passage: [
    "Prime Minister Pham Minh Chinh said Vietnam cherished cooperation with United Nations Children’s Fund (UNICEF) over the past 40 years and its contributions to global efforts protecting and caring for children. He made the remarks while meeting with UNICEF Executive Director Catherine Russel in New York on May 16 as part of his trip to the US. The Vietnamese Prime Minister noted that from a sole recipient of humanitarian assistance, Vietnam had become a trusted partner of the UN and UNICEF on many fronts.",
    "Vietnam supported UNICEF Strategic Plan for 2022–25 towards 2030, including the emphasis on children’s rights such as every child has the right to study and develop life skills, to be protected from abuse and violence, to get access to clean water, hygiene and safe environment – all of which are also the goals Vietnam is striving towards. Prime Minister Chinh thanked UNICEF for the active help for the country especially during the COVID-19 pandemic, including the transportation and donation of dozens of millions of vaccines via COVAX mechanisms as well as medical supplies to help raise immunisation capacity.",
    "The Prime Minister informed the UN official that Vietnam had achieved 84 percent vaccine coverage of the population, with nearly 100 percent of people aged 12 and above fully vaccinated, thanks in part to UNICEF and development partners. The country was rolling out vaccinations for children aged 5–11 and welcomed UNICEF’s support in this issue."
  ],

  translation: [
    "Thủ tướng Phạm Minh Chính cho biết Việt Nam trân trọng quan hệ hợp tác với Quỹ Nhi đồng Liên Hợp Quốc (UNICEF) trong hơn 40 năm qua và những đóng góp của tổ chức này trong nỗ lực toàn cầu bảo vệ và chăm sóc trẻ em. Ông đưa ra nhận xét này khi gặp Giám đốc Điều hành UNICEF Catherine Russel tại New York vào ngày 16/5 trong chuyến công tác đến Hoa Kỳ. Thủ tướng nhấn mạnh rằng từ một nước chỉ nhận viện trợ nhân đạo, Việt Nam đã trở thành đối tác tin cậy của Liên Hợp Quốc và UNICEF trên nhiều lĩnh vực.",
    "Việt Nam ủng hộ Kế hoạch Chiến lược UNICEF 2022–25 hướng đến năm 2030, trong đó nhấn mạnh quyền trẻ em như quyền được học tập, phát triển kỹ năng sống, được bảo vệ khỏi bạo lực, được tiếp cận nước sạch, vệ sinh và môi trường an toàn – những mục tiêu mà Việt Nam cũng đang hướng tới. Thủ tướng cảm ơn UNICEF vì sự hỗ trợ tích cực, đặc biệt trong đại dịch COVID-19, bao gồm vận chuyển và tài trợ hàng chục triệu liều vaccine thông qua cơ chế COVAX, cũng như cung cấp vật tư y tế để tăng cường năng lực tiêm chủng.",
    "Thủ tướng thông tin rằng Việt Nam đã đạt tỷ lệ bao phủ vaccine 84% dân số, với gần 100% người từ 12 tuổi trở lên được tiêm đầy đủ, một phần nhờ sự hỗ trợ của UNICEF và các đối tác phát triển. Việt Nam cũng đang triển khai tiêm vaccine cho trẻ em 5–11 tuổi và hoan nghênh sự hỗ trợ của UNICEF trong vấn đề này."
  ],

  exercises: [
    /* =====================================================
       PAGE 1 — DRAG & DROP (5 câu)
       ===================================================== */
    {
      id: "page1",
      title: "Fill in the blanks (Drag & Drop)",
      instructionEn:
        "Drag the correct word from the box into each blank. There are 2 extra words you will NOT use.",
      instructionVi:
        "Kéo từ đúng vào chỗ trống. Có 2 từ gây nhiễu không sử dụng.",

      questions: [
        {
          id: "q1",
          type: "drag",
          blankText:
            "Vietnam has become a trusted ______ of UNICEF after many years of cooperation.",
          viHint: "đối tác",
          options: [
            "partner",       // đúng
            "coverage",      // đúng câu khác
            "immunisation",  // đúng câu khác
            "assistance",    // đúng câu khác
            "vaccines",      // đúng câu khác
            "environment",   // nhiễu
            "develop"        // nhiễu
          ]
        },
        {
          id: "q2",
          type: "drag",
          blankText:
            "UNICEF helped Vietnam during the pandemic with the donation of millions of COVID-19 ______.",
          viHint: "vắc xin",
          options: [
            "partner",
            "coverage",
            "immunisation",
            "assistance",
            "vaccines",
            "environment",
            "develop"
          ]
        },
        {
          id: "q3",
          type: "drag",
          blankText:
            "Vietnam achieved 84 percent vaccine ______ of the population.",
          viHint: "tỷ lệ bao phủ",
          options: [
            "partner",
            "coverage",
            "immunisation",
            "assistance",
            "vaccines",
            "environment",
            "develop"
          ]
        },
        {
          id: "q4",
          type: "drag",
          blankText:
            "UNICEF supported Vietnam with medical supplies to increase its ______ capacity.",
          viHint: "năng lực tiêm chủng",
          options: [
            "partner",
            "coverage",
            "immunisation",
            "assistance",
            "vaccines",
            "environment",
            "develop"
          ]
        },
        {
          id: "q5",
          type: "drag",
          blankText:
            "Vietnam used to be a sole recipient of humanitarian ______.",
          viHint: "viện trợ",
          options: [
            "partner",
            "coverage",
            "immunisation",
            "assistance",
            "vaccines",
            "environment",
            "develop"
          ]
        }
      ],

      answers: {
        q1: "partner",
        q2: "vaccines",
        q3: "coverage",
        q4: "immunisation",
        q5: "assistance"
      },

      explanations: {
        q1: "Đoạn 1: Vietnam has become a trusted partner of UNICEF.",
        q2: "Đoạn 2: UNICEF donated millions of vaccines via COVAX.",
        q3: "Đoạn 3: Vietnam achieved 84 percent vaccine coverage.",
        q4: "Đoạn 2: UNICEF provided medical supplies to help raise immunisation capacity.",
        q5: "Đoạn 1: Vietnam used to be a sole recipient of humanitarian assistance."
      }
    },

    /* =====================================================
       PAGE 2 — MCQ (5 câu)
       ===================================================== */
    {
      id: "page2",
      title: "Reading comprehension",
      instructionEn: "Choose the best answer (A, B, or C).",
      instructionVi: "Chọn đáp án đúng (A, B hoặc C).",

      questions: [
        {
          id: "q6",
          type: "mcq",
          question:
            "What did PM Chinh say about Vietnam–UNICEF cooperation?",
          options: [
            "A. It has lasted for more than 40 years.",
            "B. It has recently begun.",
            "C. It is focused only on education."
          ]
        },
        {
          id: "q7",
          type: "mcq",
          question:
            "Which of the following is one of UNICEF’s highlighted goals mentioned in the passage?",
          options: [
            "A. Every child must learn two foreign languages.",
            "B. Every child should have access to clean water and a safe environment.",
            "C. Every child should work to support their family."
          ]
        },
        {
          id: "q8",
          type: "mcq",
          question:
            "How did UNICEF help Vietnam during the COVID-19 pandemic?",
          options: [
            "A. By writing a strategic plan.",
            "B. By donating vaccines and medical supplies.",
            "C. By sending foreign doctors to Vietnam."
          ]
        },
        {
          id: "q9",
          type: "mcq",
          question:
            "What was the vaccination rate for people aged 12 and above in Vietnam?",
          options: [
            "A. About 50%",
            "B. Nearly 100%",
            "C. Around 70%"
          ]
        },
        {
          id: "q10",
          type: "mcq",
          question:
            "What can be inferred from the passage about Vietnam’s relationship with UNICEF?",
          options: [
            "A. Vietnam is now an active and trusted partner.",
            "B. UNICEF no longer supports Vietnam.",
            "C. UNICEF and Vietnam rarely cooperate."
          ]
        }
      ],

      answers: {
        q6: "A",
        q7: "B",
        q8: "B",
        q9: "B",
        q10: "A"
      },

      explanations: {
        q6: "Đoạn 1: Cooperation has lasted over 40 years.",
        q7: "Đoạn 2: Emphasis on access to clean water and a safe environment.",
        q8: "Đoạn 2: UNICEF donated vaccines and medical supplies.",
        q9: "Đoạn 3: Nearly 100% of people aged 12+ were fully vaccinated.",
        q10: "Cả bài cho thấy Việt Nam đã trở thành đối tác tin cậy của UNICEF."
      }
    }
  ]
};

export default en10_u7_read1;

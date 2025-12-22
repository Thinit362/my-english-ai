import type { WritingLesson } from "./types";

export const writingUnit4: WritingLesson = {
  unit: 4,
  topicVi: "Thư ứng tuyển tình nguyện viên",
  titleEn: "Unit 4 – Writing an Application Letter for Volunteer Work",
  descriptionEn:
    "Learn how to write a formal application letter for a volunteer position, then practise writing with guided information.",
  descriptionVi:
    "Học cách viết thư xin làm tình nguyện viên theo văn phong trang trọng, sau đó luyện viết dựa trên thông tin cho sẵn.",

  /* ======================
   * THEORY
   * ====================== */
  theory: [
    {
      id: "overview",
      title: "1. Thư ứng tuyển tình nguyện viên là gì?",
      contentEn:
        "An application letter for volunteer work is a formal letter written to apply for a volunteer position in an organization.",
      contentVi:
        "Thư ứng tuyển tình nguyện viên là một loại thư trang trọng dùng để xin tham gia làm tình nguyện tại một tổ chức.",
    },

    {
      id: "structure",
      title: "2. Bố cục thư ứng tuyển (4 phần)",
      table: {
        headers: ["Main parts", "Contents"],
        rows: [
          [
            "Heading",
            "Sender’s address, date; Receiver’s address",
          ],
          [
            "Greeting",
            "Dear Sir/Madam (unknown name)\nDear Mr./Mrs./Ms. + name",
          ],
          [
            "Main body",
            "Paragraph 1: Position & source of information\nParagraph 2: Relevant experience\nParagraph 3: Personal qualities\nParagraph 4: Interview & availability",
          ],
          [
            "Closing",
            "Yours faithfully / Yours sincerely + full name",
          ],
        ],
      },
    },

    {
      id: "paragraph-1",
      title: "Đoạn 1 – Vị trí ứng tuyển",
      items: [
        {
          en: "I am writing to apply for the position of a volunteer teacher at your charity.",
          vi: "Tôi viết thư này để xin ứng tuyển vào vị trí giáo viên tình nguyện.",
        },
        {
          en: "I saw your advertisement on the school notice board last Tuesday.",
          vi: "Tôi thấy thông báo tuyển dụng trên bảng tin của trường vào thứ Ba tuần trước.",
        },
      ],
    },

    {
      id: "paragraph-2",
      title: "Đoạn 2 – Kinh nghiệm liên quan",
      items: [
        {
          en: "I have experience in helping needy children at an orphanage.",
          vi: "Tôi có kinh nghiệm giúp đỡ trẻ em có hoàn cảnh khó khăn tại trại trẻ mồ côi.",
        },
        {
          en: "Last summer, I volunteered as a tutor for primary students.",
          vi: "Mùa hè năm ngoái, tôi đã làm gia sư tình nguyện cho học sinh tiểu học.",
        },
      ],
    },

    {
      id: "paragraph-3",
      title: "Đoạn 3 – Phẩm chất cá nhân",
      items: [
        {
          en: "I am hard-working, patient, and good at communication.",
          vi: "Tôi là người chăm chỉ, kiên nhẫn và giao tiếp tốt.",
        },
        {
          en: "I can send you a reference letter from my teacher.",
          vi: "Tôi có thể gửi thư giới thiệu từ giáo viên của mình.",
        },
      ],
    },

    {
      id: "paragraph-4",
      title: "Đoạn 4 – Phỏng vấn & thời gian làm việc",
      items: [
        {
          en: "I am available for an interview after school or at weekends.",
          vi: "Tôi có thể tham gia phỏng vấn sau giờ học hoặc vào cuối tuần.",
        },
        {
          en: "I can start working from next month if selected.",
          vi: "Tôi có thể bắt đầu làm việc từ tháng tới nếu được chọn.",
        },
      ],
    },

    {
      id: "sample-letter",
      title: "3. Thư mẫu (tham khảo)",
      quoteEn:
        "I am writing to apply for the job of a volunteer at your Heart to Heart Charity Office. I have experience in doing office work and welcoming guests. I am reliable and hard-working, and I am available for an interview any day except Sunday.",
      contentVi:
        "Đây là thư mẫu để tham khảo bố cục và cách diễn đạt. Không chép nguyên văn.",
    },
  ],

  /* ======================
   * PRACTICE
   * ====================== */
  exercises: [
    {
      id: "page-1",
      title: "Write an application letter for volunteer work",
      instructionEn:
        "Write a formal application letter (8–10 sentences) using the information below.",
      instructionVi:
        "Viết một bức thư ứng tuyển tình nguyện viên (8–10 câu) dựa trên thông tin gợi ý dưới đây.",
      exercises: [
        {
          type: "writing_prompt",
          id: "u4-writing-letter",
          title: "Application letter for volunteer work",
          description:
            "Write a formal letter. Do not copy the sample. Use your own words.",
          minSentences: 8,
          maxSentences: 10,
          cues: [
            "Position you want to apply for",
            "Where and when you saw the advertisement",
            "Your relevant experience",
            "Your personal qualities",
            "Your availability for interview",
            "When you can start working",
          ],
          noteVi:
            "Sử dụng văn phong trang trọng. Áp dụng đúng bố cục thư đã học.",
        },
      ],
    },
  ],
};

import type { ReadingLesson } from "./types";

const en10_u3_read1: ReadingLesson = {
  id: "en10.u3.read1",
  unit: 3,
  skill: "reading",
  topicVi: "Âm nhạc trong cuộc sống",
  titleEn: "The power of music",
  passage: [
    // P1
    "Music is present in every culture, but people use it for different purposes. Some listen to music to relax after a long day, while others use energetic songs to keep themselves awake while driving or studying. For many teenagers, music is also a way to express their identity and to feel connected with their friends.",
    // P2
    "Scientists have found that music can influence our brain in surprising ways. Slow and gentle melodies can lower our heart rate and blood pressure, helping us feel calmer. On the contrary, fast rhythms with a strong beat can make us feel more excited and motivated. That is why athletes often listen to powerful songs before a competition.",
    // P3
    "In schools, teachers increasingly use music as a tool for learning. Lyrics full of rhyme and rhythm help students remember vocabulary and grammar structures more easily. In language classes, songs can introduce new topics, create a positive atmosphere, and give shy students the courage to speak or sing along without feeling embarrassed.",
    // P4
    "However, not all music habits are beneficial. Listening to loud music through headphones for many hours a day can damage our hearing. If young people focus only on song lyrics that are violent or negative, they may gradually develop a pessimistic view of the world. Therefore, it is important to choose songs carefully and to listen at a safe volume.",
    // P5
    "Overall, music is a powerful form of art that can comfort us, energise us, and even help us learn more effectively. When we listen to or create music in a thoughtful way, it becomes a healthy companion throughout our daily lives."
  ],
  translation: [
    "Âm nhạc có mặt trong mọi nền văn hoá, nhưng con người lại sử dụng nó với các mục đích khác nhau. Một số người nghe nhạc để thư giãn sau một ngày dài, trong khi những người khác lại dùng các bài hát sôi động để giữ mình tỉnh táo khi lái xe hoặc học bài. Đối với nhiều bạn tuổi teen, âm nhạc cũng là một cách thể hiện bản sắc và cảm thấy gắn kết với bạn bè.",
    "Các nhà khoa học đã phát hiện rằng âm nhạc có thể tác động lên não bộ của chúng ta theo những cách đáng ngạc nhiên. Giai điệu chậm rãi và nhẹ nhàng có thể làm giảm nhịp tim và huyết áp, giúp chúng ta cảm thấy bình tĩnh hơn. Ngược lại, tiết tấu nhanh với nhịp mạnh có thể khiến chúng ta phấn khích và có thêm động lực. Đó là lý do tại sao vận động viên thường nghe những bài hát mạnh mẽ trước khi thi đấu.",
    "Ở trường học, giáo viên ngày càng sử dụng âm nhạc như một công cụ học tập. Lời bài hát giàu vần điệu và nhịp điệu giúp học sinh ghi nhớ từ vựng và cấu trúc ngữ pháp dễ dàng hơn. Trong các tiết học ngoại ngữ, bài hát có thể giới thiệu chủ đề mới, tạo bầu không khí tích cực và giúp những học sinh nhút nhát có can đảm nói hoặc hát theo mà không thấy ngượng.",
    "Tuy nhiên, không phải mọi thói quen nghe nhạc đều có lợi. Nghe nhạc quá to qua tai nghe trong nhiều giờ mỗi ngày có thể làm hỏng thính giác. Nếu bạn trẻ chỉ tập trung vào những ca từ bạo lực hoặc tiêu cực, họ có thể dần hình thành cái nhìn bi quan về thế giới. Vì vậy, điều quan trọng là lựa chọn bài hát cẩn thận và nghe ở mức âm lượng an toàn.",
    "Tóm lại, âm nhạc là một loại hình nghệ thuật mạnh mẽ có thể an ủi chúng ta, tiếp thêm năng lượng và thậm chí giúp chúng ta học hiệu quả hơn. Khi chúng ta nghe hoặc sáng tạo âm nhạc một cách có suy nghĩ, nó trở thành một người bạn đồng hành lành mạnh trong suốt cuộc sống hằng ngày."
  ],
  exercises: [
    // ========= PAGE 1: Vocabulary (5 câu) =========
    {
      id: "page1",
      title: "Vocabulary from the text",
      instructionEn:
        "Choose no more than THREE WORDS from the reading text that have the same meaning as the given definition.",
      instructionVi:
        "Chọn không quá 3 từ trong bài đọc có nghĩa tương đương với định nghĩa đưa ra, viết thường, không viết in hoa.",
      questions: [
        {
          id: "q1",
          type: "input",
          question:
            "to show who you are or what your personality is like",
          viHint: "thể hiện bạn là ai / tính cách như thế nào"
        },
        {
          id: "q2",
          type: "input",
          question:
            "a strong regular pattern of sounds in music",
          viHint: "nhịp điệu mạnh, đều trong âm nhạc"
        },
        {
          id: "q3",
          type: "input",
          question:
            "a feeling of being more excited and having more desire to do something",
          viHint: "cảm giác có thêm hứng thú và động lực làm việc"
        },
        {
          id: "q4",
          type: "input",
          question:
            "feeling nervous or ashamed and not confident to do something in front of others",
          viHint: "cảm thấy ngại ngùng, xấu hổ khi làm gì trước người khác"
        },
        {
          id: "q5",
          type: "input",
          question:
            "a way of thinking that focuses too much on bad or negative things",
          viHint: "lối suy nghĩ quá tập trung vào những điều xấu, tiêu cực"
        }
      ],
      answers: {
        q1: "express their identity",          // P1
        q2: "strong beat",                    // P2
        q3: "more excited and motivated",     // P2 – chấp nhận cụm chính
        q4: "feeling embarrassed",            // P3
        q5: "a pessimistic view of the world" // P4
      },
      explanations: {
        q1: "Đoạn 1: 'music is also a way to express their identity'.",
        q2: "Đoạn 2 nói về 'fast rhythms with a strong beat'.",
        q3: "Đoạn 2: 'make us feel more excited and motivated'.",
        q4: "Đoạn 3: học sinh hát theo 'without feeling embarrassed'.",
        q5: "Đoạn 4: 'develop a pessimistic view of the world'."
      }
    },

    // ========= PAGE 2: Reading comprehension (5 câu) =========
    {
      id: "page2",
      title: "Reading comprehension",
      instructionEn: "Choose the best answer (A, B or C) for each question.",
      instructionVi: "Chọn đáp án đúng (A, B hoặc C) cho mỗi câu hỏi.",
      questions: [
        {
          id: "q6",
          type: "mcq",
          question: "According to the text, why do some teenagers listen to music?",
          options: [
            "A. To avoid doing homework.",
            "B. To express who they are and connect with friends.",
            "C. To learn how to play musical instruments."
          ]
        },
        {
          id: "q7",
          type: "mcq",
          question:
            "Which of the following is TRUE about the effect of slow and gentle music?",
          options: [
            "A. It makes people run faster.",
            "B. It lowers heart rate and helps people feel calmer.",
            "C. It always makes people feel sad."
          ]
        },
        {
          id: "q8",
          type: "mcq",
          question:
            "How can music help students in language classes?",
          options: [
            "A. It replaces all traditional grammar exercises.",
            "B. It makes students forget difficult vocabulary.",
            "C. It helps them remember language structures and feel braver to speak."
          ]
        },
        {
          id: "q9",
          type: "mcq",
          question:
            "What is one possible danger of listening to music mentioned in the text?",
          options: [
            "A. It always makes young people lazy.",
            "B. Loud music through headphones can damage hearing.",
            "C. Classical music causes more stress."
          ]
        },
        {
          id: "q10",
          type: "mcq",
          question:
            "Which statement best summarises the writer’s opinion about music?",
          options: [
            "A. Music is powerful and useful if we use it carefully.",
            "B. Music is mainly a problem for young people.",
            "C. Music should only be used for entertainment, not for learning."
          ]
        }
      ],
      answers: {
        q6: "B",
        q7: "B",
        q8: "C",
        q9: "B",
        q10: "A"
      },
      explanations: {
        q6: "Đoạn 1: 'a way to express their identity and to feel connected with their friends'.",
        q7: "Đoạn 2: 'Slow and gentle melodies can lower our heart rate ... helping us feel calmer'.",
        q8: "Đoạn 3: lời bài hát giúp nhớ từ vựng/ngữ pháp và tạo môi trường tích cực cho việc nói.",
        q9: "Đoạn 4: 'listening to loud music through headphones... can damage our hearing'.",
        q10: "Đoạn cuối: nhấn mạnh âm nhạc là nghệ thuật mạnh mẽ, giúp ta học tốt hơn nếu dùng một cách có suy nghĩ."
      }
    }
  ]
};

export default en10_u3_read1;

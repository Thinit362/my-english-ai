import type { UnitGrammar } from "../english10.grammar1";

const u1: UnitGrammar = {
  unit: 1,
  grammar1: {
    title: "Phân biệt Hiện tại đơn và Hiện tại tiếp diễn",
    viExplain: `
Trong bài học này, các em sẽ được ôn lại hai thì **Hiện tại đơn (Present Simple)** 
và **Hiện tại tiếp diễn (Present Continuous)** dựa trên sự so sánh các điểm khác biệt.

I. Khác biệt trong dạng thức của động từ
---------------------------------------

**1. Hiện tại đơn (Present Simple)**

- Động từ thường (V) giữ nguyên hoặc thêm **s/es** tuỳ theo chủ ngữ.
- Động từ *to be* chia thành **am / is / are** tuỳ theo chủ ngữ.

**2. Hiện tại tiếp diễn (Present Continuous)**

- Cấu trúc: \`S + am/is/are + V-ing\`.

Ví dụ:
- She often feeds her baby five times per day.  
  (Cô ấy thường cho con ăn 5 lần một ngày.)
- She is feeding her baby at the moment.  
  (Cô ấy đang cho con ăn.)

II. Khác biệt trong cách dùng
-----------------------------

**Hiện tại đơn**  
- Diễn tả những hành động **thường xuyên xảy ra**, có tính **lặp đi lặp lại**, hoặc sự thật.  
- Dấu hiệu nhận biết:  
  \`never, sometimes, often, usually, always, once a week, every day, ...\`

**Hiện tại tiếp diễn**  
- Diễn tả hành động xảy ra **ngay tại thời điểm nói** hoặc **xung quanh thời điểm nói**.  
- Dấu hiệu nhận biết:  
  \`now, at the moment, at present, ...\`  
  và các câu mệnh lệnh:  
  \`Be quiet!\`, \`Listen!\`, ...

Ví dụ:
- My younger sister always does the washing-up after meals.  
  (Em gái tôi luôn rửa bát sau mỗi bữa ăn.)
- My younger sister is doing the washing-up now.  
  (Em gái tôi đang rửa bát.)

III. Các động từ đặc trưng trong từng thì
-----------------------------------------

1. **Động từ thường dùng ở Hiện tại đơn – stative verbs**

“Stative verbs” (động từ chỉ trạng thái) thường được chia ở thì hiện tại đơn, không dùng ở dạng tiếp diễn.

- Nhóm tri giác: *feel, hear, see, smell, taste, ...*  
- Nhóm nhận thức: *agree, believe, disagree, know, think (nghĩ rằng), ...*  
- Nhóm yêu/ghét: *dislike, enjoy, hate, like, love, ...*  
- Nhóm sở hữu: *belong, have, include, own, possess, ...*  
- Khác: *appear, need, seem, want, wish, ...*

Ví dụ:
- Mary owns an expensive car. ✔  
- Mary is owning an expensive car. ✖

2. **Động từ thường dùng ở Hiện tại tiếp diễn**

Dùng cho những sự **thay đổi, xu hướng đang diễn ra**:

*get, fall, grow, begin, change, become, improve, increase, ...*

Ví dụ:
- Bill is getting taller this year.  
  (Năm nay Bill đang dần cao hơn.)
- Demands for Christmas gifts are growing.  
  (Nhu cầu mua quà Giáng Sinh đang tăng.)

3. **Động từ dùng được ở cả 2 thì nhưng mang nghĩa khác nhau**

- **taste**  
  - The soup tastes good. → món canh có vị ngon (trạng thái).  
  - I am tasting the soup. → tôi đang nếm món canh (hành động).

- **look**  
  - They look happy together. → họ trông hạnh phúc (trạng thái).  
  - Why are you looking at me? → tại sao cậu đang nhìn tớ? (hành động).

- **weigh**  
  - The oranges weigh a kilo. → những quả cam nặng 1 kg (trạng thái).  
  - She is weighing these oranges. → cô ấy đang cân cam (hành động).

- **enjoy**  
  - Kate enjoys parties. → Kate thích tiệc tùng (sở thích chung).  
  - Kate is enjoying the party. → Kate đang tận hưởng bữa tiệc.

- **see**  
  - I see your point. → tớ hiểu ý cậu.  
  - I am seeing an old friend. → tớ sắp/đang đi gặp một người bạn cũ.

- **have**  
  - Laura has a big house. → Laura có một ngôi nhà lớn.  
  - Laura is having dinner. → Laura đang ăn tối.

- **think**  
  - I think you're right. → tớ nghĩ cậu đúng.  
  - What are you thinking about? → bạn đang suy nghĩ về điều gì?

- **consider**  
  - I consider you my friend. → tớ xem cậu là bạn.  
  - I am considering your advice. → tớ đang cân nhắc lời khuyên của cậu.
`,
    examples: [
      {
        en: "She often feeds her baby five times per day.",
        vi: "Cô ấy thường cho con ăn 5 lần một ngày.",
      },
      {
        en: "She is feeding her baby at the moment.",
        vi: "Cô ấy đang cho con ăn lúc này.",
      },
      {
        en: "My younger sister always does the washing-up after meals.",
        vi: "Em gái tôi luôn rửa bát sau mỗi bữa ăn.",
      },
      {
        en: "My younger sister is doing the washing-up now.",
        vi: "Em gái tôi đang rửa bát bây giờ.",
      },
      {
        en: "Mary owns an expensive car.",
        vi: "Mary sở hữu một chiếc xe hơi đắt tiền.",
      },
      {
        en: "Bill is getting taller this year.",
        vi: "Năm nay Bill đang dần cao hơn.",
      },
      {
        en: "The soup tastes good.",
        vi: "Món canh này có vị ngon.",
      },
      {
        en: "I am tasting the soup.",
        vi: "Tớ đang nếm món canh này.",
      },
      {
        en: "They look happy together.",
        vi: "Họ trông thật hạnh phúc bên nhau.",
      },
      {
        en: "Why are you looking at me?",
        vi: "Tại sao cậu lại nhìn tớ thế?",
      },
      {
        en: "Laura has a big house.",
        vi: "Laura có một ngôi nhà lớn.",
      },
      {
        en: "Laura is having dinner.",
        vi: "Laura đang ăn tối.",
      },
      {
        en: "I think you're right.",
        vi: "Tớ nghĩ rằng cậu đã đúng.",
      },
      {
        en: "What are you thinking about?",
        vi: "Bạn đang suy nghĩ về điều gì vậy?",
      },
      {
        en: "I consider you my friend.",
        vi: "Tớ xem cậu là bạn.",
      },
      {
        en: "I am considering your advice.",
        vi: "Tớ đang suy nghĩ kĩ về lời khuyên của cậu.",
      },
    ],
  },
  // KHÔNG có grammar2 cho Unit 1
};

export default u1;

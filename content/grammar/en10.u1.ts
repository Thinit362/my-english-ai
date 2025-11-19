// content/grammar/en10.u1.ts
import type { UnitGrammar } from "../english10.grammar";

const u1: UnitGrammar = {
  unit: 1,
  grammar1: {
    title: "Present Simple vs. Present Continuous",
    viExplain: `
Trong bài học này, các em ôn lại hai thì **Hiện tại đơn (Present Simple)** và 
**Hiện tại tiếp diễn (Present Continuous)** thông qua so sánh sự khác nhau về **dạng thức** và **cách dùng**.

---

## I. Khác biệt trong dạng thức của động từ

### 1. Hiện tại đơn (Present Simple)

- Động từ thường (V) **giữ nguyên** hoặc thêm **-s / -es** tùy theo chủ ngữ.  
- Động từ **to be** chia thành: **am / is / are**.

Ví dụ:
- She often feeds her baby five times per day.  
  ⇒ Hành động lặp lại, thói quen.

### 2. Hiện tại tiếp diễn (Present Continuous)

- Cấu trúc: \`S + am / is / are + V-ing\`.

Ví dụ:
- She is feeding her baby at the moment.  
  ⇒ Hành động đang diễn ra **ngay lúc nói**.

---

## II. Khác biệt trong cách dùng

### 1. Hiện tại đơn – thói quen, sự thật

Dùng để diễn tả:

- Thói quen, hành động **thường xuyên lặp lại**.  
- Sự thật hiển nhiên.

**Trạng từ thường gặp:**  
\`never, sometimes, often, usually, always, every day, once a week,...\`

Ví dụ:
- My younger sister always does the washing-up after meals.

### 2. Hiện tại tiếp diễn – đang diễn ra

Dùng để diễn tả:

- Hành động đang diễn ra **ngay bây giờ**.  
- Hành động tạm thời quanh thời điểm nói.

**Trạng từ thường gặp:**  
\`now, at the moment, at present, today,...\`  
và các câu mệnh lệnh: \`Be quiet!\`, \`Listen!\`, ...

Ví dụ:
- My younger sister is doing the washing-up now.

---

## III. Một số nhóm động từ đặc trưng

### 1. Động từ thường chia ở Hiện tại đơn (stative verbs)

Là những động từ chỉ **trạng thái**, **cảm xúc**, **sở hữu**,… thường không dùng ở dạng tiếp diễn:

- Tri giác: *feel, hear, see, smell, taste,...*  
- Nhận thức: *agree, believe, know, think (nghĩ rằng),...*  
- Cảm xúc: *like, love, hate, enjoy, dislike,...*  
- Sở hữu: *have, own, belong, include, possess,...*

Ví dụ:
- Mary owns an expensive car. (Đúng)  
- Mary is owning an expensive car. (Sai)

### 2. Động từ thường dùng ở Hiện tại tiếp diễn

Dùng khi muốn nhấn mạnh sự **thay đổi, phát triển**:

- *get, grow, change, become, improve, increase, begin,...*

Ví dụ:
- Bill is getting taller this year.  
- Demands for Christmas gifts are growing.

### 3. Động từ dùng được ở cả hai thì nhưng nghĩa khác nhau

- **taste**  
  - The soup tastes good. → món canh **có vị ngon** (trạng thái).  
  - I am tasting the soup. → tôi **đang nếm** món canh (hành động).

- **look**  
  - They look happy together. → họ **trông có vẻ** hạnh phúc.  
  - Why are you looking at me? → tại sao bạn **đang nhìn** tôi?

- **weigh**  
  - The oranges weigh a kilo. → cam **nặng** 1 kg.  
  - She is weighing these oranges. → cô ấy **đang cân** cam.

- **see**  
  - I see your point. → tôi **hiểu** ý bạn.  
  - I am seeing an old friend. → tôi **sắp gặp / đang gặp** một người bạn cũ.

- **have**  
  - Laura has a big house. → Laura **có** một ngôi nhà lớn.  
  - Laura is having dinner. → Laura **đang ăn** tối.

- **think**  
  - I think you're right. → tôi **nghĩ rằng** bạn đúng.  
  - What are you thinking about? → bạn **đang nghĩ** về điều gì?

- **consider**  
  - I consider you my friend. → tôi **xem** bạn là bạn.  
  - I am considering your advice. → tôi **đang cân nhắc** lời khuyên của bạn.
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
        vi: "Tớ đang cân nhắc lời khuyên của cậu.",
      },
    ],
  },
};

export default u1;

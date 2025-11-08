// app/english-10/unit/3/vocabulary-1/page.tsx
import VocabLesson, { type VocabItem } from "@/components/VocabLesson";

export const metadata = {
  title: "English 10 – Unit 3 – Vocabulary 1",
};
const items: VocabItem[] = [
  {
    id: "audience",
    word: "audience",
    ipa: "/ˈɔːdiəns/",
    pos: "n. phrase",
    vi: "khán giả",
    exampleEn: "They want to reach a younger target audience.",
    exampleVi: "Họ muốn tiếp cận đối tượng khán giả trẻ hơn.",
    imageFile: "audience.jpg",
  },
  {
    id: "comment",
    word: "comment",
    ipa: "/ˈkɒment/,
    pos: "n. phrase",
    vi: "lời bình luận",
    exampleEn: "She received many good comments after the show.",
    exampleVi: "Bạn ấy đã nhận được rất nhiều bình luận tốt sau buổi diễn.",
    imageFile: "comment.jpg",
  },
  {
    id: "sweep-the-floor",
    word: "sweep the floor",
    ipa: "/swiːp ðə flɔː/",
    pos: "v. phrase",
    vi: "quét nhà/sàn",
    exampleEn: "I sweep the floor to keep the house clean.",
    exampleVi: "Tôi quét nhà để giữ nhà cửa sạch sẽ.",
    imageFile: "sweep-the-floor.jpg",
  },
  {
    id: "concert",
    word: "concert",
    ipa: "/ˈkɒnsət/",
    pos: "n. phrase",
    vi: "buổi hòa nhạc",
    exampleEn: "We're organizing a concert for charity. .",
    exampleVi: "Chúng tôi đang tổ chức 1 buổi hòa nhạc từ thiện",
    imageFile: "concert.jpg",
  },
  {
    id: "decoration ",
    word: "decoration ",
    ipa: "/ˌdekəˈreɪʃn/",
    pos: "n. phrase",
    vi: "việc trang trí, sự trang trí",
    exampleEn: "People seemed to like the decoration of this festival.",
    exampleVi: "Mọi người dường như rất thích trang trí của lễ hội này",
    imageFile: "decoration.jpg",
  },
  {
    id: "delay",
    word: "delay",
    ipa: "/dɪˈleɪ/",
    pos: "v. phrase",
    vi: " hoãn lại",
    exampleEn: "The flight was delayed due to the bad weather",
    exampleVi: "Chuyến bay đã bị hoãn lại do thời tiết xấu",
    imageFile: "delay.jpg",
  },
  {
    id: "final ",
    word: "final ",
    ipa: "/ˈfaɪnl/",
    pos: "n. phrase",
    vi: "do dự, lưỡng lự",
    exampleEn: "She didn’t hesitate before answering the question.",
    exampleVi: "Cô ấy không hề do dự trước khi trả lời câu hỏi.",
    imageFile: "final .jpg",
  },
  {
    id: "identify with",
    word: "identify with",
    ipa: "/aɪˈdentɪfaɪ wɪð/",
    pos: "v. phr. phrase",
    vi: "đồng nhất với, đồng cảm với",
    exampleEn: "They can really identify with her.",
    exampleVi: "Họ thực sự có thể đồng cảm với bà ấy.",
    imageFile: "identify with.jpg",
  },
  {
    id: "in search of ",
    word: "in search of ",
    ipa: "/ɪn sɜːtʃ əv/",
    pos: "idiom. phrase",
    vi: " đi tìm cái gì",
    exampleEn: "He goes all around his country in search of the best singers.",
    exampleVi: "Anh ấy đi khắp đất nước của mình để tìm kiếm những ca sĩ giỏi nhất.",
    imageFile: "in search of .jpg",
  },
  {
    id: "live",
    word: "live",
    ipa: "/laɪv/",
    pos: "adj. phrase",
    vi: " trực tiếp",
    exampleEn: "The music show is live on TV now.",
    exampleVi: "Chương trình ca nhạc hiện đang phát trực tiếp trên ti vi.",
    imageFile: "live.jpg",
  },
  {
    id: "live ",
    word: "live ",
    ipa: "/laɪv/",
    pos: "adv. phrase",
    vi: "trực tiếp",
    exampleEn: "The music band is performing live on TV.",
    exampleVi: "Ban nhạc đang biểu diễn trực tiếp trên ti vi.",
    imageFile: "live .jpg",
  },
   {
    id: "location",
    word: "location",
    ipa: "/ləʊˈkeɪʃn/",
    pos: "n. phrase",
    vi: "vị trí, địa điểm",
    exampleEn: "Her company is moving to a new location. ",
    exampleVi: "Công ty của cô ấy sắp chuyển đến một địa điểm mới.",
    imageFile: "location.jpg",
  },
   {
    id: "perform",
    word: "perform",
    ipa: "/pəˈfɔ:m/",
    pos: "v. phrase",
    vi: "biểu diễn",
    exampleEn: "Many famous artists have performed in the programme",
    exampleVi: "Rất nhiều nghệ sĩ nổi tiếng tham gia biểu diễn trong chương trình đó.",
    imageFile: "perform.jpg",
  },
];
export default function Page() {
  return (
    <div className="py-6">
      <VocabLesson
        title="Unit 3 – Từ vựng (Phần 1)"
        items={items}
        // Đổi path ảnh theo nơi bạn lưu hình minh hoạ
        baseImagePath="/images/vocab/english-10/unit3/"
      />
    </div>
  );
}

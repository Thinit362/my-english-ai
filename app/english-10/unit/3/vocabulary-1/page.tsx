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
    id: "wash-the-dishes",
    word: "wash the dishes",
    ipa: "/wɒʃ ðə ˈdɪʃɪz/",
    pos: "v. phrase",
    vi: "rửa bát đĩa",
    exampleEn: "My brother washes the dishes after dinner.",
    exampleVi: "Anh trai tôi rửa bát sau bữa tối.",
    imageFile: "wash-the-dishes.jpg",
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
    id: "mop-the-floor",
    word: "mop the floor",
    ipa: "/mɒp ðə flɔː/",
    pos: "v. phrase",
    vi: "lau sàn",
    exampleEn: "Please mop the floor after sweeping.",
    exampleVi: "Hãy lau sàn sau khi quét nhé.",
    imageFile: "mop-the-floor.jpg",
  },
  {
    id: "vacuum-the-carpet",
    word: "vacuum the carpet",
    ipa: "/ˈvækjuːm ðə ˈkɑːpɪt/",
    pos: "v. phrase",
    vi: "hút bụi thảm",
    exampleEn: "Dad vacuums the carpet every weekend.",
    exampleVi: "Bố hút bụi thảm vào mỗi cuối tuần.",
    imageFile: "vacuum-the-carpet.jpg",
  },
  {
    id: "take-out-the-rubbish",
    word: "take out the rubbish",
    ipa: "/teɪk aʊt ðə ˈrʌbɪʃ/",
    pos: "v. phrase",
    vi: "đổ rác",
    exampleEn: "Don’t forget to take out the rubbish before bed.",
    exampleVi: "Đừng quên đổ rác trước khi đi ngủ.",
    imageFile: "take-out-the-rubbish.jpg",
  },
  {
    id: "cook-the-meals",
    word: "cook the meals",
    ipa: "/kʊk ðə miːlz/",
    pos: "v. phrase",
    vi: "nấu ăn",
    exampleEn: "Mum cooks the meals on weekdays.",
    exampleVi: "Mẹ nấu ăn vào các ngày trong tuần.",
    imageFile: "cook-the-meals.jpg",
  },
  {
    id: "do-the-shopping",
    word: "do the shopping",
    ipa: "/duː ðə ˈʃɒpɪŋ/",
    pos: "v. phrase",
    vi: "đi mua sắm (đồ dùng/đồ ăn)",
    exampleEn: "We do the shopping at the weekend.",
    exampleVi: "Chúng tôi đi mua sắm vào cuối tuần.",
    imageFile: "do-the-shopping.jpg",
  },
  {
    id: "set-the-table",
    word: "set the table",
    ipa: "/set ðə ˈteɪbl/",
    pos: "v. phrase",
    vi: "bày bàn ăn",
    exampleEn: "Could you set the table for dinner?",
    exampleVi: "Bạn bày bàn giúp bữa tối nhé?",
    imageFile: "set-the-table.jpg",
  },
  {
    id: "tidy-up-the-room",
    word: "tidy up the room",
    ipa: "/ˈtaɪdi ʌp ðə ruːm/",
    pos: "v. phrase",
    vi: "dọn dẹp phòng",
    exampleEn: "The children tidy up their room every afternoon.",
    exampleVi: "Bọn trẻ dọn dẹp phòng mỗi chiều.",
    imageFile: "tidy-up-the-room.jpg",
  },
  {
    id: "water-the-plants",
    word: "water the plants",
    ipa: "/ˈwɔːtə ðə plɑːnts/",
    pos: "v. phrase",
    vi: "tưới cây",
    exampleEn: "She waters the plants in the garden.",
    exampleVi: "Cô ấy tưới cây trong vườn.",
    imageFile: "water-the-plants.jpg",
  },
  {
    id: "feed-the-pets",
    word: "feed the pets",
    ipa: "/fiːd ðə pets/",
    pos: "v. phrase",
    vi: "cho thú cưng ăn",
    exampleEn: "I feed the cat before going to school.",
    exampleVi: "Tôi cho mèo ăn trước khi đến trường.",
    imageFile: "feed-the-pets.jpg",
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

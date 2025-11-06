// app/english-10/unit/1/vocabulary-2/page.tsx
import VocabLesson, { type VocabItem } from "@/components/VocabLesson";

export const metadata = {
  title: "English 10 – Unit 1 – Vocabulary 2",
};

const items: VocabItem[] = [
  {
    id: "share-household-chores",
    word: "share household chores",
    ipa: "/ʃeə ˈhaʊshəʊld tʃɔːz/",
    pos: "v. phr.",
    vi: "chia sẻ công việc nhà",
    exampleEn: "In my family, we share household chores to save time.",
    exampleVi: "Trong gia đình tôi, mọi người chia sẻ công việc nhà để tiết kiệm thời gian.",
    imageFile: "share-household-chores.jpg",
  },
  {
    id: "split-the-chores-equally",
    word: "split the chores equally",
    ipa: "/splɪt ðə tʃɔːz ˈiːkwəli/",
    pos: "v. phr.",
    vi: "phân chia việc nhà công bằng",
    exampleEn: "They split the chores equally between all members.",
    exampleVi: "Họ phân chia việc nhà công bằng giữa các thành viên.",
    imageFile: "split-the-chores-equally.jpg",
  },
  {
    id: "take-turns",
    word: "take turns",
    ipa: "/teɪk tɜːnz/",
    pos: "v. phr.",
    vi: "lần lượt/đến lượt",
    exampleEn: "We take turns doing the washing-up after dinner.",
    exampleVi: "Chúng tôi lần lượt rửa bát sau bữa tối.",
    imageFile: "take-turns.jpg",
  },
  {
    id: "be-responsible-for",
    word: "be responsible for",
    ipa: "/bi rɪˈspɒnsəbl fɔː/",
    pos: "adj. phr.",
    vi: "chịu trách nhiệm về",
    exampleEn: "Dad is responsible for taking out the rubbish.",
    exampleVi: "Bố chịu trách nhiệm đổ rác.",
    imageFile: "be-responsible-for.jpg",
  },
  {
    id: "handle",
    word: "handle",
    ipa: "/ˈhændl/",
    pos: "v.",
    vi: "xử lý/đảm trách",
    exampleEn: "I can handle the cooking when Mum is busy.",
    exampleVi: "Tôi có thể đảm trách việc nấu ăn khi mẹ bận.",
    imageFile: "handle.jpg",
  },
  {
    id: "household-finances",
    word: "household finances",
    ipa: "/ˈhaʊshəʊld ˈfaɪnænsɪz/",
    pos: "n.",
    vi: "tài chính gia đình",
    exampleEn: "Mum manages the household finances carefully.",
    exampleVi: "Mẹ quản lý tài chính gia đình rất cẩn thận.",
    imageFile: "household-finances.jpg",
  },
  {
    id: "breadwinner",
    word: "breadwinner",
    ipa: "/ˈbredˌwɪnə/",
    pos: "n.",
    vi: "trụ cột kiếm tiền",
    exampleEn: "In some families, both parents are breadwinners.",
    exampleVi: "Trong một số gia đình, cả bố và mẹ đều là trụ cột kiếm tiền.",
    imageFile: "breadwinner.jpg",
  },
  {
    id: "homemaker",
    word: "homemaker",
    ipa: "/ˈhəʊmmeɪkə/",
    pos: "n.",
    vi: "người nội trợ",
    exampleEn: "A homemaker does most of the housework at home.",
    exampleVi: "Người nội trợ làm phần lớn việc nhà.",
    imageFile: "homemaker.jpg",
  },
  {
    id: "do-the-heavy-lifting",
    word: "do the heavy lifting",
    ipa: "/duː ðə ˈhevi ˈlɪftɪŋ/",
    pos: "v. phr.",
    vi: "làm việc nặng",
    exampleEn: "My father usually does the heavy lifting in our house.",
    exampleVi: "Bố tôi thường làm các công việc nặng trong nhà.",
    imageFile: "do-the-heavy-lifting.jpg",
  },
  {
    id: "be-in-charge-of",
    word: "be in charge of",
    ipa: "/bi ɪn tʃɑːdʒ əv/",
    pos: "adj. phr.",
    vi: "phụ trách, đảm nhiệm",
    exampleEn: "I am in charge of doing the laundry on weekends.",
    exampleVi: "Tôi phụ trách giặt đồ vào cuối tuần.",
    imageFile: "be-in-charge-of.jpg",
  },
  {
    id: "workload",
    word: "workload",
    ipa: "/ˈwɜːkləʊd/",
    pos: "n.",
    vi: "khối lượng công việc",
    exampleEn: "Sharing chores reduces everyone’s workload.",
    exampleVi: "Chia sẻ việc nhà giúp giảm khối lượng công việc của mọi người.",
    imageFile: "workload.jpg",
  },
  {
    id: "grocery-shopping",
    word: "grocery shopping",
    ipa: "/ˈgrəʊsəri ˈʃɒpɪŋ/",
    pos: "n.",
    vi: "việc mua đồ tạp hoá/đi chợ",
    exampleEn: "My parents do the grocery shopping together on Saturdays.",
    exampleVi: "Bố mẹ tôi cùng đi chợ vào thứ Bảy.",
    imageFile: "grocery-shopping.jpg",
  },
];

export default function Page() {
  return (
    <div className="py-6">
      <VocabLesson
        title="Unit 1 – Từ vựng (Phần 2)"
        items={items}
        baseImagePath="/images/vocab/english-10/unit1/"
      />
    </div>
  );
}

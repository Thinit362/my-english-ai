import VocabLesson, { type VocabItem } from "@/components/VocabLesson";

export const metadata = {
  title: "English 12 – Unit 1 – Vocabulary",
};

const items: VocabItem[] = [
  {
    id: "admired-for",
    word: "be admired for",
    ipa: "/bi ədˈmaɪəd fɔːr/",
    pos: "v. phrase",
    vi: "được ngưỡng mộ vì",
    exampleEn:
      "Albert Einstein is admired for his contributions to physics and the theory of relativity.",
    exampleVi:
      "Albert Einstein được ngưỡng mộ vì những đóng góp cho vật lý và thuyết tương đối.",
    imageFile: "be-admired-for.jpg",
  },
  {
    id: "adopted-by",
    word: "be adopted by",
    ipa: "/bi əˈdɒptɪd baɪ/",
    pos: "v. phrase",
    vi: "được nhận nuôi bởi",
    exampleEn:
      "Steve Jobs was adopted by Paul and Clara Jobs when he was a baby.",
    exampleVi:
      "Steve Jobs được Paul và Clara Jobs nhận nuôi khi còn là một cậu bé.",
    imageFile: "be-adopted-by.jpg",
  },
  {
    id: "accessible-to",
    word: "be accessible to",
    ipa: "/bi əkˈsesəbl tuː/",
    pos: "adj. phrase",
    vi: "có thể tiếp cận",
    exampleEn:
      "The diary of Dang Thuy Tram is easily accessible to the public.",
    exampleVi: "Nhật ký của Đặng Thùy Trâm dễ dàng tiếp cận với công chúng.",
    imageFile: "be-accessible-to.jpg",
  },
];

export default function Page() {
  return (
    <div className="py-6">
      <VocabLesson
        title="Unit 1 – Từ vựng"
        items={items}
        baseImagePath="/english-12/unit/1/voca/"
      />
    </div>
  );
}

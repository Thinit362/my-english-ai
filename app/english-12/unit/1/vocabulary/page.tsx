// app/english-12/unit/1/vocabulary/page.tsx
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
    exampleEn: "Albert Einstein is admired for his contributions to science.",
    exampleVi: "Albert Einstein được ngưỡng mộ vì những đóng góp cho khoa học.",
    imageUrl: "https://images.unsplash.com/photo-1532635223-1f5b45a3b3f5?q=80&w=400&auto=format",
  },
  {
    id: "adopted-by",
    word: "be adopted by",
    ipa: "/bi əˈdɒptɪd baɪ/",
    pos: "v. phrase",
    vi: "được nhận nuôi bởi",
    exampleEn: "Steve Jobs was adopted by Paul and Clara Jobs when he was a baby.",
    exampleVi: "Steve Jobs được nhận nuôi bởi Paul và Clara Jobs khi còn nhỏ.",
  },
  {
    id: "compassion",
    word: "compassion",
    ipa: "/kəmˈpæʃən/",
    pos: "n.",
    vi: "lòng trắc ẩn, sự cảm thông",
    exampleEn: "She showed great compassion for the poor.",
    exampleVi: "Cô ấy thể hiện lòng trắc ẩn sâu sắc với người nghèo.",
  },
  {
    id: "volunteer",
    word: "volunteer",
    ipa: "/ˌvɒlənˈtɪə(r)/",
    pos: "v.",
    vi: "tình nguyện",
    exampleEn: "He volunteered to join the army at the age of 24.",
    exampleVi: "Anh ấy tình nguyện nhập ngũ khi 24 tuổi.",
  },
];

export default function Page() {
  return (
    <div className="py-6">
      <VocabLesson title="Unit 1 – Vocabulary" items={items} />
    </div>
  );
}

// app/english-12/unit/1/warm-up/page.tsx
import WarmupLesson, { type Line } from "@/components/WarmupLesson";
import { Roleplay } from "@/components/Roleplay";

export const metadata = {
  title: "English 12 – Unit 1 – Warm-up: The Diary of Đặng Thùy Trâm",
};

const lines: Line[] = [
  { id: "l1", speaker: "Mark", text: "Hi, Nam. That book looks interesting. What are you reading?" },
  { id: "l2", speaker: "Nam",  text: "It's an English edition of Dang Thuy Tram's diary: 'Last Night I Dreamed of Peace'." },
  { id: "l3", speaker: "Mark", text: "Who is she?" },
  { id: "l4", speaker: "Nam",  text: "A young Vietnamese doctor who served during the war. Her diary shows great courage and compassion." },
  { id: "l5", speaker: "Mark", text: "Where was she from?" },
  { id: "l6", speaker: "Nam",  text: "She was born in Hue and studied medicine in Ha Noi." },
  { id: "l7", speaker: "Mark", text: "When did she join the army?" },
  { id: "l8", speaker: "Nam",  text: "At twenty-four, she volunteered and worked as a surgeon." },
  { id: "l9", speaker: "Mark", text: "Why do so many people admire her?" },
  { id: "l10",speaker: "Nam",  text: "Because she saved lives, wrote honestly about hardships, and inspired others to be brave and kind." },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <WarmupLesson
        title="Warm-up – The Diary of Đặng Thùy Trâm"
        videoId="EXdL0iy69nw"
        lines={lines}
      />
      <Roleplay system="You are a supportive English teacher for grade 12 students in Viet Nam. Keep replies short and interactive. Use CEFR B1 vocabulary." />
    </div>
  );
}

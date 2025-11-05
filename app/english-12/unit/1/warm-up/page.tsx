// app/english-12/unit/1/warm-up/page.tsx
import WarmupDialogue, { type Line } from "@/components/WarmupDialogue";

export const metadata = {
  title: "English 12 – Unit 1 – Warm-up: The diary of Dang Thuy Tram",
};

const lines: Line[] = [
  { id: "1", speaker: "Mark", text: "Hi, Nam. Your book must be very interesting. What are you reading?" },
  { id: "2", speaker: "Nam",  text: "I'm reading a really good book in English called Last Night I Dreamed of Peace: The diary of Dang Thuy Tram." },
  { id: "3", speaker: "Mark", text: "Dang Thuy Tram? Who is she?" },
  { id: "4", speaker: "Nam",  text: "She was born in Hue in 1942. She studied medicine in Ha Noi and volunteered to join the army at the age of 24, working as a surgeon during the resistance war." },
  { id: "5", speaker: "Mark", text: "That's when she started her diary, isn't it?" },
  { id: "6", speaker: "Nam",  text: "Yes. She wrote her diary while she was working in a field hospital in Quang Ngai Province. It shows her love for her family and country, and her compassion for people." },
];

export default function Page() {
  return (
    <div className="py-6">
      <WarmupDialogue
        title="The diary of Dang Thuy Tram"
        videoId="EXdL0iy69nw"      // có thể bỏ nếu không cần video
        lines={lines}
      />
    </div>
  );
}

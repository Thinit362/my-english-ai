// app/english-10/unit/[unit]/skill-speaking-1/page.tsx

import SpeakingPracticePage from "@/components/speaking/SpeakingPracticePage";

type PageProps = {
  params: {
    unit: string;
  };
};

export default function SpeakingSkillPage({ params }: PageProps) {
  const unitNum = Number(params.unit) || 1;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto pt-6 pb-12">
        <SpeakingPracticePage unit={unitNum} />
      </div>
    </main>
  );
}

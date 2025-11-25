// app/english-10/unit/[unit]/practice-vocabulary-1/ex1/page.tsx
import { notFound } from "next/navigation";
import EnglishLayout from "@/components/EnglishLayout";
import english10Units from "@/content/english10.units";
import FlashAudioMatchGame from "@/components/games/FlashAudioMatchGame";
import { u1V1Ex1Data } from "@/content/practice/vocab/en10.u1.v1.ex1";

interface Props {
  params: { unit: string };
}

export default function Unit1Vocab1Ex1Page({ params }: Props) {
  const unitId = Number(params.unit);
  if (unitId !== 1) return notFound();

  const unit = english10Units.find((u) => u.id === 1);
  if (!unit) return notFound();

  return (
    <EnglishLayout>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-xl font-bold mb-2">
          Thực hành từ vựng 1 – Bài tập 1
        </h1>
        <FlashAudioMatchGame words={u1V1Ex1Data} />
      </div>
    </EnglishLayout>
  );
}

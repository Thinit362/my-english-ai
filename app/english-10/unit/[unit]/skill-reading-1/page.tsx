"use client";

import ReadingExamPage from "@/components/reading/ReadingExamPage";

type PageProps = {
  params: {
    unit: string; // lấy từ URL: /english-10/unit/1/skill-reading-1
  };
};

export default function SkillReadingPage({ params }: PageProps) {
  const unitNumber = Number(params.unit) || 1;

  return <ReadingExamPage unit={unitNumber} />;
}

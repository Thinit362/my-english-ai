// app/english-10/unit/[unit]/skill-listening-1/page.tsx
import ListeningExamPage from "@/components/listening/ListeningExamPage";

interface PageProps {
  params: { unit: string };
}

export default function SkillListeningPage({ params }: PageProps) {
  const unitNumber = Number(params.unit) || 1;
  return <ListeningExamPage unit={unitNumber} />;
}

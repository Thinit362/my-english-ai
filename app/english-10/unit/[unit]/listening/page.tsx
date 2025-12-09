// app/english-10/unit/[unit]/listening/page.tsx luyện nghe
import ListeningExamPage from "@/components/listening/ListeningExamPage";

interface PageProps {
  params: { unit: string };
}

export default function ListeningPage({ params }: PageProps) {
  const unitNumber = Number(params.unit) || 1;
  return <ListeningExamPage unit={unitNumber} />;
}

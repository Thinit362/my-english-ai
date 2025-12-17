import WritingPracticePage from "@/components/writing/WritingPracticePage";

export default function Page({ params }: { params: { unit: string } }) {
  const unitNumber = Number(params.unit);
  return <WritingPracticePage unit={unitNumber} />;
}

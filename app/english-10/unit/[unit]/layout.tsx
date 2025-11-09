// app/english-10/unit/[unit]/layout.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { english10Units } from "@/content/english10.units";

export default function UnitLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { unit: string };
}) {
  const id = Number(params.unit);
  const meta = english10Units.find((u) => u.id === id);
  if (!meta) notFound();

  return (
    <div className="mx-auto max-w-6xl px-3 md:px-4 py-6">
      {/* Breadcrumbs cố định cho tất cả trang con Unit X */}
      <nav className="text-sm mb-6 flex gap-2 text-gray-600">
        <Link href="/">Tiếng Anh phổ thông</Link>
        <span>›</span>
        <Link href="/english-10">Tiếng Anh Lớp 10 - Global success</Link>
        <span>›</span>
        {/* đơn giản: 'Unit X' */}
        <Link href={`/english-10/unit/${meta.id}`}>{meta.title.split(":")[0]} {meta.id}</Link>
      </nav>

      {children}
    </div>
  );
}

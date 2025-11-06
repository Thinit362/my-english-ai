// app/english-10/unit/1/layout.tsx
import Link from "next/link";

export default function Unit1Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      {/* Breadcrumbs cố định cho tất cả trang con Unit 1 */}
      <nav className="text-sm mb-6 flex gap-2 text-gray-600">
        <Link href="/">Tiếng Anh phổ thông</Link>
        <span>›</span>
        <Link href="/english-10">Tiếng Anh Lớp 10 - Global success</Link>
        <span>›</span>
        <Link href="/english-10/unit/1">Unit 1</Link>
      </nav>

      {children}
    </div>
  );
}

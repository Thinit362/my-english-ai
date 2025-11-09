// components/LessonShell.tsx
"use client";

import React from "react";

type Props = {
  badge?: string;        // ví dụ: "TỪ VỰNG", "NGỮ PHÁP", ...
  title: string;         // tiêu đề to của trang
  rightSlot?: React.ReactNode; // nếu cần đặt nút gì ở góc phải header
  children: React.ReactNode;
};

export default function LessonShell({ badge = "TỪ VỰNG", title, rightSlot, children }: Props) {
  return (
    <section className="mx-auto max-w-5xl px-3 md:px-4 py-5">
      {/* Header giống phong cách trang nguồn */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block bg-amber-500 text-white text-[11px] font-semibold px-3 py-1 rounded-md">
            {badge}
          </span>
          <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
        </div>
        {rightSlot}
      </div>

      <div className="mt-4">{children}</div>
    </section>
  );
}

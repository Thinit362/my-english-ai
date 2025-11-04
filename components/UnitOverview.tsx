// components/UnitOverview.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export type LectureExercise = {
  key: string;
  lecture: {
    title: string;
    tag: string;     // Khởi động | Từ vựng | Ngữ pháp | Phát âm | ...
    href: string;
    thumb?: string;  // nếu không truyền -> dùng icon mặc định theo tag
  };
  exercise: {
    title: string;   // Thực hành | Thực hành từ vựng ...
    href: string;
  };
};

export type SkillItem = {
  title: string;
  tag: "Luyện đọc" | "Luyện nghe" | "Luyện nói" | "Luyện viết";
  href: string;
  icon?: "read" | "listen" | "speak" | "write";
};

/** Map icon mặc định theo tag (không phân biệt hoa/thường và có dấu/không dấu) */
const ICON_MAP: Record<string, string> = {
  "khoi dong": "/icons/warmup.png",
  "tu vung": "/icons/vocabulary.png",
  "ngu phap": "/icons/grammar.png",
  "phat am": "/icons/pronunciation.png",

  // phòng khi bạn dùng cụm kỹ năng làm tag
  "luyen doc": "/icons/reading.png",
  "luyen nghe": "/icons/listening.png",
  "luyen noi": "/icons/speaking.png",
  "luyen viet": "/icons/writing.png",
};

const DEFAULT_ICON = "/icons/lesson.png"; // fallback an toàn

/** Chuẩn hoá tag: lowercase + bỏ dấu + gom khoảng trắng */
function normalizeTag(input = "") {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "") // bỏ dấu tiếng Việt
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default function UnitOverview({
  unitTitle,
  breadcrumbs,
  rows,
  skills,
}: {
  unitTitle: string;
  breadcrumbs?: { label: string; href?: string }[];
  rows: LectureExercise[];
  skills?: SkillItem[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-3 md:px-4 py-6">
      {/* Breadcrumbs */}
      {breadcrumbs?.length ? (
        <nav className="mb-3 text-sm text-gray-500">
          {breadcrumbs.map((b, i) => (
            <span key={i}>
              {b.href ? (
                <Link href={b.href} className="hover:underline">
                  {b.label}
                </Link>
              ) : (
                <span>{b.label}</span>
              )}
              {i < breadcrumbs.length - 1 && <span className="mx-2">›</span>}
            </span>
          ))}
        </nav>
      ) : null}

      <h1 className="text-2xl md:text-3xl font-bold mb-5">{unitTitle}</h1>

      {/* Lecture + Exercise rows */}
      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.key} className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <CardLecture data={r.lecture} className="md:col-span-2" />
            <CardExercise data={r.exercise} />
          </div>
        ))}
      </div>

      {/* Skills (tuỳ chọn) */}
      {skills?.length ? (
        <div className="mt-8">
          <div className="font-semibold text-sm uppercase text-gray-600 mb-2">
            Kỹ năng
          </div>
          <div className="space-y-3">
            {skills.map((s, i) => (
              <SkillRow key={i} item={s} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function CardLecture({
  data,
  className = "",
}: {
  data: LectureExercise["lecture"];
  className?: string;
}) {
  const norm = normalizeTag(data.tag);
  const iconSrc = data.thumb || ICON_MAP[norm] || DEFAULT_ICON;

  return (
    <Link
      href={data.href}
      className={`relative block rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition ${className}`}
    >
      {/* Ribbon trái */}
      <div className="absolute left-0 top-0 bg-orange-500 text-white text-[11px] font-semibold px-3 py-1 rounded-br-xl select-none">
        BÀI GIẢNG
      </div>

      <div className="flex gap-4 p-4">
        {/* Icon chỉ là hình, không chữ */}
        <div className="relative w-28 h-20 md:w-36 md:h-24 rounded-md bg-gray-100 overflow-hidden">
          <Image
            src={iconSrc}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-lg font-semibold text-sky-800 hover:underline">
            {data.title}
          </div>

          {/* Tag chip */}
          <div className="inline-block mt-2 text-xs bg-gray-100 border rounded px-2.5 py-1 text-gray-600">
            {data.tag}
          </div>

          {/* Meta (placeholder) */}
          <div className="mt-2 text-xs text-gray-500 flex gap-4">
            <span className="inline-flex items-center gap-1">👁️ 0</span>
            <span className="inline-flex items-center gap-1">💬 0</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function CardExercise({ data }: { data: LectureExercise["exercise"] }) {
  return (
    <Link
      href={data.href}
      className="relative block rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition"
    >
      <div className="absolute left-0 top-0 bg-green-600 text-white text-[11px] font-semibold px-3 py-1 rounded-br-xl select-none">
        BÀI TẬP
      </div>

      <div className="p-5 h-full flex flex-col justify-center">
        <div className="text-xl font-semibold text-orange-600">{data.title}</div>
        <div className="mt-3 text-sm text-gray-500">Bạn chưa làm bài này</div>
      </div>
    </Link>
  );
}

function SkillRow({ item }: { item: SkillItem }) {
  const icon = {
    read: "📖",
    listen: "🎧",
    speak: "🗣️",
    write: "✍️",
  }[item.icon ?? "read"];

  return (
    <Link
      href={item.href}
      className="flex items-center rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition"
    >
      <div className="bg-sky-100 px-3 py-2 text-[11px] font-semibold text-gray-700">
        KĨ NĂNG
      </div>

      <div className="flex items-center gap-3 px-4 py-3 flex-1">
        <div className="w-12 h-12 rounded-full bg-sky-200 flex items-center justify-center text-2xl">
          <span aria-hidden>{icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-gray-900">{item.title}</div>
          <div className="mt-1 inline-block text-xs bg-gray-100 border rounded px-2.5 py-1 text-gray-600">
            {item.tag}
          </div>
          <div className="mt-1 text-xs text-gray-500 flex gap-4">
            <span>👁️ 0</span>
            <span>💬 0</span>
          </div>
        </div>
        <span className="px-3 text-gray-400">›</span>
      </div>

      {/* Cột trạng thái bên phải (ẩn trên mobile) */}
      <div className="hidden md:flex items-center px-4 text-sm text-gray-500">
        Bạn chưa làm bài này
      </div>
    </Link>
  );
}

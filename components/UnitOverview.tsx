// components/UnitOverview.tsx
import Link from "next/link";

export type LectureExercise = {
  key: string;
  lecture: {
    title: string;
    tag: string;               // Khởi động / Từ vựng / ...
    href: string;
    thumb?: string;
  };
  exercise: {
    title: string;             // Thực hành / Thực hành từ vựng / ...
    href: string;
  };
};

export type SkillItem = {
  title: string;
  tag: "Luyện đọc" | "Luyện nghe" | "Luyện nói" | "Luyện viết";
  href: string;
  icon?: "read" | "listen" | "speak" | "write";
};

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
                <Link href={b.href} className="hover:underline">{b.label}</Link>
              ) : (
                <span>{b.label}</span>
              )}
              {i < breadcrumbs.length - 1 && <span className="mx-2">›</span>}
            </span>
          ))}
        </nav>
      ) : null}

      <h1 className="text-2xl md:text-3xl font-bold mb-5">
        {unitTitle}
      </h1>

      {/* Lecture + Exercise rows */}
      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.key} className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <CardLecture data={r.lecture} className="md:col-span-2" />
            <CardExercise data={r.exercise} />
          </div>
        ))}
      </div>

      {/* Skills block */}
      {skills?.length ? (
        <div className="mt-8">
          <div className="font-semibold text-sm uppercase text-gray-600 mb-2">Kỹ năng</div>
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
  return (
    <Link
      href={data.href}
      className={`relative block rounded-xl border border-gray-200 overflow-hidden bg-white hover:shadow-md transition ${className}`}
    >
      {/* Ribbon */}
      <div className="absolute left-0 top-0 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-br-xl">
        BÀI GIẢNG
      </div>

      <div className="flex gap-4 p-4">
        {/* Thumb */}
        <div className="w-28 h-20 md:w-36 md:h-24 rounded-md bg-gray-100 overflow-hidden flex items-center justify-center">
          {data.thumb ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={data.thumb} alt={data.title} className="w-full h-full object-cover" />
          ) : (
            <span className="text-3xl">📘</span>
          )}
        </div>

        <div className="flex-1">
          <div className="text-lg font-semibold text-sky-800 hover:underline">
            {data.title}
          </div>
          <div className="inline-block mt-1 text-xs bg-gray-100 border rounded px-2 py-0.5 text-gray-600">

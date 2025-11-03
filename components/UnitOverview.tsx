// components/UnitOverview.tsx
import Link from "next/link";

export type LectureExercise = {
  key: string;
  lecture: {
    title: string;
    tag: string;     // Khởi động | Từ vựng | Ngữ pháp | Phát âm | Luyện nghe ...
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

/** Icon mặc định dùng chung theo tag (tiết kiệm bộ nhớ) */
const DEFAULT_ICONS: Record<string, string> = {
  "Khởi động": "/icons/warmup.png",
  "Từ vựng": "/icons/vocabulary.png",
  "Ngữ pháp": "/icons/grammar.png",
  "Phát âm": "/icons/pronunciation.png",
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

      {/* Skills */}
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
  const thumbSrc = data.thumb ?? DEFAULT_ICONS[data.tag] ?? undefined;

  return (
    <Link
      href={data.href}
      className={`relative block rounded-xl border border-gray-200 overflow-hidden bg-white
                  shadow-sm hover:shadow-lg transition ${className}`}
    >
      {/* Ribbon trái */}
      <div className="absolute left-0 top-0 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-br-xl">
        BÀI GIẢNG
      </div>

      {/* Nhãn góc phải theo tag */}
      <div className="absolute right-0 top-0 text-[11px] md:text-xs font-semibold text-gray-600 px-2 py-1">
        {data.tag}
      </div>

      <div className="flex gap-4 p-4">
        {/* Thumb / Icon mặc định */}
        <div className="w-28 h-20 md:w-36 md:h-24 rounded-md bg-gray-100 overflow-hidden flex items-center justify-center">
          {thumbSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={thumbSrc} alt={data.title} className="w-full h-full object-cover" />
          ) : (
            <span className="text-3xl">📘</span>
          )}
        </div>

        <div className="flex-1">
          <div className="text-lg font-semibold text-sky-800 hover:underline">{data.title}</div>

          {/* Tag chip (giữ lại như mẫu cũ) */}
          <div className="inline-block mt-1 text-xs bg-gray-100 border rounded px-2 py-0.5 text-gray-600">
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
      className="relative block rounded-xl border border-gray-200 overflow-hidden bg-white
                 shadow-sm hover:shadow-lg transition"
    >
      <div className="absolute left-0 top-0 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-br-xl">
        BÀI TẬP
      </div>

      {/* Nhãn góc phải (tùy chọn) */}
      <div className="absolute right-0 top-0 text-[11px] md:text-xs font-semibold text-gray-600 px-2 py-1">
        Practice
      </div>

      <div className="p-4 h-full flex flex-col justify-center">
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
      className="flex items-center rounded-xl border border-gray-200 overflow-hidden bg-white
                 shadow-sm hover:shadow-lg transition"
    >
      <div className="bg-sky-100 px-3 py-2 text-xs font-semibold text-gray-700">KĨ NĂNG</div>

      <div className="flex items-center gap-3 px-4 py-3 flex-1">
        <div className="w-12 h-12 rounded-full bg-sky-200 flex items-center justify-center text-2xl">
          <span>{icon}</span>
        </div>
        <div className="flex-1">
          <div className="text-gray-900">{item.title}</div>
          <div className="mt-1 inline-block text-xs bg-gray-100 border rounded px-2 py-0.5 text-gray-600">
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
      <div className="hidden md:flex items-center px-4 text-sm text-gray-500">Bạn chưa làm bài này</div>
    </Link>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

/** ===== Kiểu dữ liệu chung ===== */
type Status = "todo" | "inprogress" | "done";

export type LectureExercise = {
  key: string;
  lecture: {
    title: string;
    tag: string;
    href: string;
    /** trạng thái mặc định (có thể bỏ qua, ưu tiên localStorage) */
    status?: Status;
    /** % tiến trình mặc định (0–100), sẽ được localStorage ghi đè nếu có */
    progress?: number;
  };
  exercise: {
    title: string;
    href: string;
    status?: Status;
    progress?: number;
  };
};

export type SkillItem = {
  title: string;
  tag: "Luyện đọc" | "Luyện nghe" | "Luyện nói" | "Luyện viết";
  href: string;
  icon?: "read" | "listen" | "speak" | "write";
  status?: Status;
  progress?: number;
};

/** ===== Icon map ===== */
const ICON_MAP: Record<string, string> = {
  "khoi dong": "/icons/warmup1.png",
  "tu vung": "/icons/vocabulary.png",
  "ngu phap": "/icons/grammar.png",
  "phat am": "/icons/pronunciation.png",
  "luyen nghe": "/icons/listening.png",
  "luyen doc": "/icons/reading.png",
  "luyen noi": "/icons/speaking.png",
  "luyen viet": "/icons/writing.png",
};
const DEFAULT_ICON = "/icons/lesson.png";

const normalize = (s = "") =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9 ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** ===== Store tiến trình (localStorage) ===== */
/** Lưu cho từng bài: trạng thái + % tiến trình của CHÍNH học viên đó */
type StoreItem = { status: Status; progress?: number };
type Store = Record<string, StoreItem>;

function useProgressStore() {
  const [store, setStore] = useState<Store>({});

  // Load từ localStorage khi mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("study-progress");
      if (raw) {
        const parsed = JSON.parse(raw) as Store;
        setStore(parsed || {});
      }
    } catch {
      // ignore
    }
  }, []);

  const save = (next: Store) => {
    setStore(next);
    try {
      localStorage.setItem("study-progress", JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const get = (href: string) => store[href];

  // Khi bắt đầu học một bài: chỉ đánh dấu inprogress, không tự set % = 1
  const markStarted = (href: string) => {
    const cur = store[href];
    if (cur?.status === "done") return;
    save({
      ...store,
      [href]: {
        status: "inprogress",
        progress: cur?.progress, // giữ nguyên % nếu đã có
      },
    });
  };

  // Khi hoàn thành bài (nếu bạn muốn gọi thủ công ở trang bài học)
  const markDone = (href: string) => {
    save({
      ...store,
      [href]: { status: "done", progress: 100 },
    });
  };

  // Set % tiến trình thực tế của học viên (0–100)
  const setProgress = (href: string, p: number) => {
    const v = Math.max(0, Math.min(100, Math.round(p)));
    const status: Status = v >= 100 ? "done" : v > 0 ? "inprogress" : "todo";
    save({
      ...store,
      [href]: { status, progress: v },
    });
  };

  return { get, markStarted, markDone, setProgress };
}

/**
 * Gộp trạng thái & % từ:
 *  - dữ liệu props (expStatus/expProg) – có thể từ cấu hình
 *  - localStorage (stored) – tiến trình thực tế của học viên trên máy này
 *
 * Ưu tiên localStorage nếu có.
 */
function mergeStatus(
  expStatus?: Status,
  expProg?: number,
  stored?: StoreItem
): { status: Status; progress?: number } {
  // Ưu tiên dữ liệu từ localStorage
  if (stored) {
    const progress =
      typeof stored.progress === "number" ? stored.progress : expProg;

    if (stored.status === "done") {
      return { status: "done", progress: typeof progress === "number" ? 100 : 100 };
    }
    if (stored.status === "inprogress") {
      // nếu chưa có % thì coi như đang học nhưng không hiển thị %
      return {
        status: "inprogress",
        progress,
      };
    }
    // "todo"
    if (typeof progress === "number") {
      if (progress >= 100) return { status: "done", progress: 100 };
      if (progress > 0) return { status: "inprogress", progress };
    }
    return { status: "todo" };
  }

  // Không có localStorage → dựa vào dữ liệu props
  if (expStatus) {
    if (expStatus === "done") {
      return { status: "done", progress: typeof expProg === "number" ? Math.max(expProg, 100) : 100 };
    }
    if (expStatus === "inprogress") {
      return { status: "inprogress", progress: expProg };
    }
    return { status: "todo", progress: expProg };
  }

  if (typeof expProg === "number") {
    if (expProg >= 100) return { status: "done", progress: 100 };
    if (expProg > 0) return { status: "inprogress", progress: expProg };
  }

  return { status: "todo" };
}

/** ====== Hiển thị badge trạng thái + % ====== */
function StatusBadge({ status, progress }: { status: Status; progress?: number }) {
  const hasPercent = typeof progress === "number" && progress > 0;
  const percentText = hasPercent ? ` · ${Math.round(progress)}%` : "";

  if (status === "done")
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5">
        <span>✔</span> Đã hoàn thành{percentText}
      </span>
    );

  if (status === "inprogress")
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium px-2.5 py-0.5">
        <span>⏳</span> Đang học{percentText}
      </span>
    );

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5">
      <span>•</span> Chưa làm
    </span>
  );
}

function TinyProgress({ value = 0 }: { value?: number }) {
  const v = Math.max(0, Math.min(100, Math.round(value)));
  if (!v) return null; // không vẽ thanh nếu 0% hoặc undefined
  return (
    <div className="mt-2 h-1.5 w-full rounded bg-gray-100">
      <div
        className="h-1.5 rounded bg-amber-500 transition-[width]"
        style={{ width: `${v}%` }}
      />
    </div>
  );
}

/** ====== Component chính ====== */
export default function UnitOverview({
  unitTitle,
  rows,
  skills,
}: {
  unitTitle: string;
  rows: LectureExercise[];
  skills?: SkillItem[];
}) {
  const progress = useProgressStore();

  return (
    <section>
      <h1 className="text-2xl md:text-3xl font-bold mb-5">{unitTitle}</h1>

      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.key} className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <CardLecture
              data={r.lecture}
              className="md:col-span-2"
              progress={progress}
            />
            <CardExercise data={r.exercise} progress={progress} />
          </div>
        ))}
      </div>

      {!!skills?.length && (
        <div className="mt-8">
          <div className="font-semibold text-sm uppercase text-gray-600 mb-2">
            Kỹ năng
          </div>
          <div className="space-y-3">
            {skills.map((s, i) => (
              <SkillRow key={i} item={s} progress={progress} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

/** ====== Thẻ BÀI GIẢNG ====== */
function CardLecture({
  data,
  className = "",
  progress,
}: {
  data: LectureExercise["lecture"];
  className?: string;
  progress: ReturnType<typeof useProgressStore>;
}) {
  const iconSrc = useMemo(
    () => ICON_MAP[normalize(data.tag)] || DEFAULT_ICON,
    [data.tag]
  );

  const stored = progress.get(data.href);
  const merged = mergeStatus(data.status, data.progress, stored);

  const borderColor =
    merged.status === "done"
      ? "border-green-300"
      : merged.status === "inprogress"
      ? "border-amber-300"
      : "border-gray-200";

  return (
    <Link
      href={data.href}
      onClick={() => progress.markStarted(data.href)}
      className={`relative block rounded-xl border ${borderColor} overflow-hidden bg-white shadow-sm hover:shadow-md transition pt-6 ${className}`}
    >
      <div className="absolute left-0 top-0 bg-orange-500 text-white text-[11px] font-semibold px-3 py-1 rounded-br-xl select-none">
        BÀI GIẢNG
      </div>
      <div className="flex gap-4 px-4 pb-4">
        <div className="w-[72px] h-[72px] rounded-md bg-gray-100 overflow-hidden shrink-0 grid place-items-center">
          <Image
            src={iconSrc}
            alt={data.tag}
            width={72}
            height={72}
            className="object-cover w-[72px] h-[72px]"
            priority
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-lg font-semibold text-sky-800 hover:underline">
            {data.title}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="inline-block text-xs bg-gray-100 border rounded px-2.5 py-1 text-gray-600">
              {data.tag}
            </span>
            <StatusBadge
              status={merged.status}
              progress={merged.progress}
            />
          </div>
          {typeof merged.progress === "number" && merged.progress > 0 && (
            <TinyProgress value={merged.progress} />
          )}
          <div className="mt-2 text-xs text-gray-500 flex gap-4">
            <span className="inline-flex items-center gap-1">👁️ 0</span>
            <span className="inline-flex items-center gap-1">💬 0</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

/** ====== Thẻ BÀI TẬP ====== */
function CardExercise({
  data,
  progress,
}: {
  data: LectureExercise["exercise"];
  progress: ReturnType<typeof useProgressStore>;
}) {
  const stored = progress.get(data.href);
  const merged = mergeStatus(data.status, data.progress, stored);

  const borderColor =
    merged.status === "done"
      ? "border-green-300"
      : merged.status === "inprogress"
      ? "border-amber-300"
      : "border-gray-200";

  return (
    <Link
      href={data.href}
      onClick={() => progress.markStarted(data.href)}
      className={`relative block rounded-xl border ${borderColor} overflow-hidden bg-white shadow-sm hover:shadow-md transition pt-6`}
    >
      <div className="absolute left-0 top-0 bg-green-600 text-white text-[11px] font-semibold px-3 py-1 rounded-br-xl select-none">
        BÀI TẬP
      </div>
      <div className="px-5 pb-5">
        <div className="text-xl font-semibold text-orange-600">
          {data.title}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <StatusBadge
            status={merged.status}
            progress={merged.progress}
          />
        </div>
        {typeof merged.progress === "number" && merged.progress > 0 && (
          <TinyProgress value={merged.progress} />
        )}
      </div>
    </Link>
  );
}

/** ====== Hàng KỸ NĂNG ====== */
function SkillRow({
  item,
  progress,
}: {
  item: SkillItem;
  progress: ReturnType<typeof useProgressStore>;
}) {
  const stored = progress.get(item.href);
  const merged = mergeStatus(item.status, item.progress, stored);

  const icon = { read: "📖", listen: "🎧", speak: "🗣️", write: "✍️" }[
    item.icon ?? "read"
  ];

  const rightText =
    merged.status === "done"
      ? "Đã hoàn thành"
      : merged.status === "inprogress"
      ? `Đang học${
          typeof merged.progress === "number"
            ? ` · ${Math.round(merged.progress)}%`
            : ""
        }`
      : "Bạn chưa làm bài này";

  return (
    <Link
      href={item.href}
      onClick={() => progress.markStarted(item.href)}
      className="flex items-center rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition"
    >
      <div className="bg-sky-100 px-3 py-2 text-[11px] font-semibold text-gray-700">
        KĨ NĂNG
      </div>
      <div className="flex items-center gap-3 px-4 py-3 flex-1">
        <div className="w-12 h-12 rounded-full bg-sky-200 flex items-center justify-center text-2xl">
          <span>{icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-gray-900">{item.title}</div>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <span className="inline-block text-xs bg-gray-100 border rounded px-2.5 py-1 text-gray-600">
              {item.tag}
            </span>
            <StatusBadge
              status={merged.status}
              progress={merged.progress}
            />
          </div>
          {merged.status === "inprogress" &&
            typeof merged.progress === "number" &&
            merged.progress > 0 && (
              <TinyProgress value={merged.progress} />
            )}
        </div>
        <span className="hidden md:block px-3 text-sm text-gray-500">
          {rightText}
        </span>
      </div>
    </Link>
  );
}

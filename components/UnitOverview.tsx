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
    status?: Status;
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
  s.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^a-z0-9 ]+/g, " ").replace(/\s+/g, " ").trim();

/** ===== Store tiến trình (localStorage) ===== */
type StoreItem = { status: Status; progress?: number };
type Store = Record<string, StoreItem>;

function useProgressStore() {
  const [store, setStore] = useState<Store>({});
  useEffect(() => {
    try { setStore(JSON.parse(localStorage.getItem("study-progress") || "{}")); } catch {}
  }, []);
  const save = (next: Store) => { setStore(next); try { localStorage.setItem("study-progress", JSON.stringify(next)); } catch {} };
  const get = (href: string) => store[href];
  const markStarted = (href: string) => {
    const cur = store[href];
    if (cur?.status === "done") return;
    save({ ...store, [href]: { status: "inprogress", progress: Math.max(1, cur?.progress || 0) } });
  };
  const markDone = (href: string) => save({ ...store, [href]: { status: "done", progress: 100 } });
  const setProgress = (href: string, p: number) => {
    const v = Math.max(0, Math.min(100, Math.round(p)));
    const status: Status = v >= 100 ? "done" : v > 0 ? "inprogress" : "todo";
    save({ ...store, [href]: { status, progress: v } });
  };
  return { get, markStarted, markDone, setProgress };
}
function mergeStatus(exp?: Status, expProg?: number, stored?: StoreItem): { status: Status; progress?: number } {
  const status = exp ?? stored?.status;
  const progress = expProg ?? stored?.progress;
  if (status) return status === "done" ? { status, progress: 100 } : status === "inprogress" ? { status, progress } : { status: "todo" };
  if (typeof progress === "number") return progress >= 100 ? { status: "done", progress: 100 } : progress > 0 ? { status: "inprogress", progress } : { status: "todo" };
  return { status: "todo" };
}

function StatusBadge({ status, progress }: { status: Status; progress?: number }) {
  if (status === "done") return <span className="inline-flex items-center gap-1 rounded-full bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5"><span>✔</span> Đã hoàn thành</span>;
  if (status === "inprogress") return <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium px-2.5 py-0.5"><span>⏳</span> Đang học{typeof progress === "number" ? ` · ${Math.round(progress)}%` : ""}</span>;
  return <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5"><span>•</span> Chưa làm</span>;
}
function TinyProgress({ value = 0 }: { value?: number }) {
  const v = Math.max(0, Math.min(100, Math.round(value)));
  return <div className="mt-2 h-1.5 w-full rounded bg-gray-100"><div className="h-1.5 rounded bg-amber-500 transition-[width]" style={{ width: `${v}%` }} /></div>;
}

/** ====== Component chính ====== */
export default function UnitOverview({
  unitTitle,
  rows,
  skills,
}: {
  unitTitle: string;
  rows: LectureExercise[];
  skills?: (SkillItem)[];
}) {
  const progress = useProgressStore();

  return (
    <section>
      <h1 className="text-2xl md:text-3xl font-bold mb-5">{unitTitle}</h1>

      <div className="space-y-4">
        {rows.map((r) => (
          <div key={r.key} className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <CardLecture data={r.lecture} className="md:col-span-2" progress={progress} />
            <CardExercise data={r.exercise} progress={progress} />
          </div>
        ))}
      </div>

      {!!skills?.length && (
        <div className="mt-8">
          <div className="font-semibold text-sm uppercase text-gray-600 mb-2">Kỹ năng</div>
          <div className="space-y-3">{skills.map((s, i) => <SkillRow key={i} item={s} />)}</div>
        </div>
      )}
    </section>
  );
}

/** ====== Thẻ BÀI GIẢNG ====== */
function CardLecture({ data, className = "", progress }: { data: LectureExercise["lecture"]; className?: string; progress: ReturnType<typeof useProgressStore>; }) {
  const iconSrc = useMemo(() => ICON_MAP[normalize(data.tag)] || DEFAULT_ICON, [data.tag]);
  const stored = progress.get(data.href);
  const merged = mergeStatus(data.status, data.progress, stored);
  const borderColor = merged.status === "done" ? "border-green-300" : merged.status === "inprogress" ? "border-amber-300" : "border-gray-200";

  return (
    <Link href={data.href} onClick={() => progress.markStarted(data.href)} className={`relative block rounded-xl border ${borderColor} overflow-hidden bg-white shadow-sm hover:shadow-md transition pt-6 ${className}`}>
      <div className="absolute left-0 top-0 bg-orange-500 text-white text-[11px] font-semibold px-3 py-1 rounded-br-xl select-none">BÀI GIẢNG</div>
      <div className="flex gap-4 px-4 pb-4">
        <div className="w-[72px] h-[72px] rounded-md bg-gray-100 overflow-hidden shrink-0 grid place-items-center">
          <Image src={iconSrc} alt={data.tag} width={72} height={72} className="object-cover w-[72px] h-[72px]" priority />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-lg font-semibold text-sky-800 hover:underline">{data.title}</div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="inline-block text-xs bg-gray-100 border rounded px-2.5 py-1 text-gray-600">{data.tag}</span>
            <StatusBadge status={merged.status} progress={merged.progress} />
          </div>
          {merged.status === "inprogress" && typeof merged.progress === "number" && merged.progress > 0 && <TinyProgress value={merged.progress} />}
          <div className="mt-2 text-xs text-gray-500 flex gap-4"><span className="inline-flex items-center gap-1">👁️ 0</span><span className="inline-flex items-center gap-1">💬 0</span></div>
        </div>
      </div>
    </Link>
  );
}

/** ====== Thẻ BÀI TẬP ====== */
function CardExercise({ data, progress }: { data: LectureExercise["exercise"]; progress: ReturnType<typeof useProgressStore>; }) {
  const stored = progress.get(data.href);
  const merged = mergeStatus(data.status, data.progress, stored);
  const borderColor = merged.status === "done" ? "border-green-300" : merged.status === "inprogress" ? "border-amber-300" : "border-gray-200";
  return (
    <Link href={data.href} onClick={() => progress.markStarted(data.href)} className={`relative block rounded-xl border ${borderColor} overflow-hidden bg-white shadow-sm hover:shadow-md transition pt-6`}>
      <div className="absolute left-0 top-0 bg-green-600 text-white text-[11px] font-semibold px-3 py-1 rounded-br-xl select-none">BÀI TẬP</div>
      <div className="px-5 pb-5">
        <div className="text-xl font-semibold text-orange-600">{data.title}</div>
        <div className="mt-3 flex items-center gap-2"><StatusBadge status={merged.status} progress={merged.progress} /></div>
        {merged.status === "inprogress" && typeof merged.progress === "number" && merged.progress > 0 && <TinyProgress value={merged.progress} />}
      </div>
    </Link>
  );
}

/** ====== Hàng KỸ NĂNG ====== */
function SkillRow({ item }: { item: SkillItem }) {
  const icon = { read: "📖", listen: "🎧", speak: "🗣️", write: "✍️" }[item.icon ?? "read"];
  const rightText = item.status === "done" ? "Đã hoàn thành" : item.status === "inprogress" ? `Đang học${typeof item.progress === "number" ? ` · ${Math.round(item.progress)}%` : ""}` : "Bạn chưa làm bài này";
  return (
    <Link href={item.href} className="flex items-center rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      <div className="bg-sky-100 px-3 py-2 text-[11px] font-semibold text-gray-700">KĨ NĂNG</div>
      <div className="flex items-center gap-3 px-4 py-3 flex-1">
        <div className="w-12 h-12 rounded-full bg-sky-200 flex items-center justify-center text-2xl"><span>{icon}</span></div>
        <div className="flex-1 min-w-0">
          <div className="text-gray-900">{item.title}</div>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <span className="inline-block text-xs bg-gray-100 border rounded px-2.5 py-1 text-gray-600">{item.tag}</span>
            <StatusBadge status={item.status ?? "todo"} progress={item.progress} />
          </div>
          {item.status === "inprogress" && typeof item.progress === "number" && item.progress > 0 && <TinyProgress value={item.progress} />}
        </div>
        <span className="hidden md:block px-3 text-sm text-gray-500">{rightText}</span>
      </div>
    </Link>
  );
}

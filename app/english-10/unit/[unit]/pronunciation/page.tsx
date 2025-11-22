"use client";

import React, { useMemo, useState } from "react";
import { notFound } from "next/navigation";
import {
  findPronunciationByUnit,
  PronunciationItem,
} from "@/content/english10.pronunciation";
import TTSPlay from "@/components/TTSPlay";

interface PageProps {
  params: { unit: string };
}

/**
 * Mỗi "âm" (tr, kr, br, kl, ...) sẽ là 1 trang con trong phần phát âm của Unit.
 * Trong content/pronunciation/en10.uX.ts, bạn khai báo:
 *
 * {
 *   unit: 1,
 *   title: "...",
 *   intro: "...",
 *   pages: [
 *     {
 *       key: "tr",
 *       label: "/tr/",
 *       title: "How to pronounce /tr/",
 *       description: "Mô tả chi tiết ...",
 *       image: "/images/phonetics/tr.png",
 *       items: PronunciationItem[]
 *     },
 *     ...
 *   ]
 * }
 */

type SoundSection = {
  key: string;              // "tr", "kr", ...
  label: string;            // "/tr/", "/kr/" (hiện trên tab + tiêu đề)
  title?: string;           // tiêu đề dài hơn
  description?: string;     // giải thích chi tiết cho âm này
  image?: string;           // hình minh hoạ khẩu hình
  items: PronunciationItem[];
};

/** Tô màu phần âm cần luyện trong chuỗi IPA, ví dụ highlight="tr" */
function renderIpa(ipa?: string, highlight?: string) {
  if (!ipa) return null;
  if (!highlight) return <span>/{ipa}/</span>;

  const idx = ipa.indexOf(highlight);
  if (idx === -1) return <span>/{ipa}/</span>;

  const before = ipa.slice(0, idx);
  const target = ipa.slice(idx, idx + highlight.length);
  const after = ipa.slice(idx + highlight.length);

  return (
    <span>
      /{before}
      <span className="text-orange-600 font-semibold">{target}</span>
      {after}/
    </span>
  );
}

/** Một dòng ví dụ: clown /klaʊn/ (chú hề) + nút play + mic */
function ExampleRow({ item }: { item: PronunciationItem }) {
  const display = item.display ?? "";
  const playText = item.playText || display;
  const ipa = item.ipa;
  const vi = item.vi;
  const highlight = item.highlight;

  return (
    <li className="flex items-center gap-2 text-sm">
      <span className="flex-1">
        <span className="text-red-600">
          {display}{" "}
          {ipa && (
            <>
              {renderIpa(ipa, highlight)}{" "}
            </>
          )}
          {vi && <span className="text-gray-600">({vi})</span>}
        </span>
      </span>

      {/* Loa + Mic (ghi âm + popup % do TTSPlay xử lý) */}
      <TTSPlay
        text={playText}
        expectedText={playText}
        enableRecord
        compact
        className="gap-1"
      />
    </li>
  );
}

export default function PronunciationPage({ params }: PageProps) {
  const unitNumber = Number(params.unit);
  const data = findPronunciationByUnit(unitNumber);

  if (!data) return notFound();

  // Giả định UnitPronunciation:
  // { unit, title?: string, intro?: string, pages: SoundSection[] }
  const unitTitle = (data as any).title ?? "Pronunciation";
  const unitIntro = (data as any).intro ?? "";

  const sections: SoundSection[] = useMemo(() => {
    const pages = (data as any).pages as SoundSection[] | undefined;
    if (Array.isArray(pages) && pages.length > 0) {
      return pages;
    }

    // Fallback: nếu content chưa chia pages, gộp thành 1 trang
    const fallbackItems = ((data as any).items ?? []) as PronunciationItem[];
    return [
      {
        key: "default",
        label: "/…/",
        title: unitTitle,
        description: unitIntro,
        image: (data as any).image,
        items: fallbackItems,
      },
    ];
  }, [data, unitTitle, unitIntro]);

  // Trang hiện tại (0 = âm đầu tiên)
  const [pageIndex, setPageIndex] = useState(0);
  const current = sections[Math.min(pageIndex, sections.length - 1)];
  const canPrev = pageIndex > 0;
  const canNext = pageIndex < sections.length - 1;

  // Chọn từ mẫu đầu tiên (không phải câu) để phát âm ở dòng "/tr/"
  const firstWordItem =
    current.items.find((it) => (it.type ?? "word") !== "sentence") ||
    current.items[0];
  const headerPlayText = firstWordItem
    ? firstWordItem.playText || firstWordItem.display
    : current.label;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Header chung của Unit */}
      <header className="space-y-1">
        <p className="text-xs uppercase text-gray-400">
          English 10 – Unit {unitNumber}
        </p>
        <h1 className="text-2xl font-bold">{unitTitle}</h1>
        {unitIntro && (
          <p className="text-sm text-gray-700 whitespace-pre-line">
            {unitIntro}
          </p>
        )}
      </header>

      {/* Dãy nút chọn âm: /tr/, /kr/, /br/ ... */}
      {sections.length > 1 && (
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {sections.map((s, idx) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setPageIndex(idx)}
                className={`px-3 py-1 rounded-full border text-xs font-semibold ${
                  idx === pageIndex
                    ? "bg-sky-600 text-white border-sky-600"
                    : "bg-white text-sky-700 border-sky-300 hover:bg-sky-50"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className="text-xs text-gray-500">
            page {pageIndex + 1} / {sections.length}
          </div>
        </div>
      )}

      {/* 1. Cách phát âm (How to pronounce /tr/) */}
      <section className="space-y-3 bg-white rounded-xl shadow p-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold">
            1
          </div>
          <h2 className="font-semibold text-lg text-sky-700">
            Cách phát âm {current.label}
          </h2>
        </div>

        {/* Dòng âm /tr/ + play + mic ngay dưới tiêu đề */}
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <span className="font-semibold">{current.label}</span>
          <TTSPlay
            text={headerPlayText}
            expectedText={headerPlayText}
            enableRecord
            compact
            className="gap-1"
          />
        </div>

        {current.title && (
          <p className="text-sm font-semibold text-gray-800">
            {current.title}
          </p>
        )}

        <p className="text-sm text-gray-700 whitespace-pre-line">
          {current.description || unitIntro}
        </p>

        {/* Hình minh hoạ khẩu hình nếu có */}
        {current.image && (
          <div className="mt-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.image}
              alt={`Mouth diagram for ${current.label}`}
              className="max-h-64 mx-auto"
            />
          </div>
        )}
      </section>

      {/* 2. Các ví dụ luyện phát âm (từ + cụm từ + câu) */}
      <section className="space-y-3 bg-white rounded-xl shadow p-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold">
            2
          </div>
          <h2 className="font-semibold text-lg text-sky-700">
            Các ví dụ luyện phát âm
          </h2>
        </div>

        <p className="text-xs text-gray-500 mb-1">
          Bấm <strong>🔊</strong> để nghe mẫu, sau đó bấm{" "}
          <strong>🎙</strong> để ghi âm. Hệ thống sẽ tự động so sánh với mẫu
          và hiển thị phần trăm giống với phát âm chuẩn.
        </p>

        <div className="space-y-3">
          {/* Các từ & cụm từ ví dụ */}
          <div>
            <h3 className="font-semibold text-sm text-orange-700 mb-1">
              Các từ ví dụ:
            </h3>
            <ul className="space-y-1">
              {current.items
                .filter((it) => (it.type ?? "word") !== "sentence")
                .map((item, idx) => (
                  <ExampleRow key={idx} item={item} />
                ))}
            </ul>
          </div>

          {/* Các câu ví dụ (nếu có) */}
          {current.items.some((it) => it.type === "sentence") && (
            <div>
              <h3 className="font-semibold text-sm text-orange-700 mt-2 mb-1">
                Các câu ví dụ:
              </h3>
              <ul className="space-y-1">
                {current.items
                  .filter((it) => it.type === "sentence")
                  .map((item, idx) => (
                    <ExampleRow key={idx} item={item} />
                  ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Thanh Back | page x | Next như hình SGK */}
      {sections.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            type="button"
            onClick={() => canPrev && setPageIndex((p) => p - 1)}
            disabled={!canPrev}
            className="px-4 py-1 text-sm border rounded disabled:opacity-50 bg-white hover:bg-gray-50"
          >
            Back
          </button>
          <span className="text-sm">
            page <span className="font-semibold">{pageIndex + 1}</span> /{" "}
            {sections.length}
          </span>
          <button
            type="button"
            onClick={() => canNext && setPageIndex((p) => p + 1)}
            disabled={!canNext}
            className="px-4 py-1 text-sm border rounded disabled:opacity-50 bg-white hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

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
 * Bạn sẽ khai báo dữ liệu cho từng âm trong content/pronunciation/en10.uX.ts:
 *
 * pronunciation: {
 *   title: "...",
 *   focus: "...",
 *   viExplain: "...",
 *   sounds: [
 *     {
 *       key: "kl",
 *       label: "/kl/",
 *       title: "How to pronounce /kl/",
 *       description: "Mô tả chi tiết cách phát âm /kl/ ...",
 *       image: "/images/phonetics/kl.png",
 *       items: [ ... các PronunciationItem ... ]
 *     },
 *     {
 *       key: "tr",
 *       label: "/tr/",
 *       ...
 *     },
 *   ]
 * }
 */

type SoundSection = {
  key: string;              // "kl", "tr", ...
  label: string;            // "/kl/", "/tr/" (hiện trên nút tab + tiêu đề)
  title?: string;           // tiêu đề dài hơn
  description?: string;     // giải thích chi tiết cho âm này
  image?: string;           // đường dẫn hình minh hoạ khẩu hình
  items: PronunciationItem[];
};

/** Tô màu phần âm cần luyện trong chuỗi IPA, ví dụ highlight="kl" */
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
  // bổ sung kiểu cục bộ để đọc highlight/vi mà không ép bạn sửa type gốc ngay
  const anyItem = item as PronunciationItem & {
    highlight?: string;
  };

  return (
    <li className="flex items-center gap-2 text-sm">
      <span className="flex-1">
        <span className="text-red-600">
          {anyItem.text}{" "}
          {anyItem.ipa && (
            <>
              {renderIpa(anyItem.ipa, anyItem.highlight)}{" "}
            </>
          )}
          {anyItem.vi && (
            <span className="text-gray-600">
              ({anyItem.vi})
            </span>
          )}
        </span>
      </span>

      {/* Loa + Mic (ghi âm + popup % do TTSPlay xử lý) */}
      <TTSPlay
        text={anyItem.text}
        expectedText={anyItem.text}
        enableRecord
        className="gap-1"
      />
    </li>
  );
}

export default function PronunciationPage({ params }: PageProps) {
  const unitNumber = Number(params.unit);
  const data = findPronunciationByUnit(unitNumber);

  if (!data) return notFound();

  const block: any = data.pronunciation;

  /**
   * Chuẩn hoá danh sách "âm" (trang con).
   * - Nếu content/en10.uX.ts đã khai báo pronunciation.sounds[] thì dùng nó.
   * - Nếu chưa, fallback về 1 trang duy nhất chứa tất cả items (như bản cũ).
   */
  const sections: SoundSection[] = useMemo(() => {
    if (Array.isArray(block.sounds) && block.sounds.length > 0) {
      return block.sounds as SoundSection[];
    }

    // Fallback: 1 trang duy nhất
    return [
      {
        key: "default",
        label: block.title || "Pronunciation",
        title: block.title,
        description: block.viExplain,
        image: block.image,
        items: (block.items || []) as PronunciationItem[],
      },
    ];
  }, [block]);

  // Trang hiện tại (0 = âm đầu tiên)
  const [pageIndex, setPageIndex] = useState(0);
  const current = sections[Math.min(pageIndex, sections.length - 1)];
  const canPrev = pageIndex > 0;
  const canNext = pageIndex < sections.length - 1;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Header chung của Unit */}
      <header className="space-y-1">
        <p className="text-xs uppercase text-gray-400">
          English 10 – Unit {unitNumber}
        </p>
        <h1 className="text-2xl font-bold">{block.title}</h1>
        <p className="text-sm text-gray-700">{block.focus}</p>
      </header>

      {/* Dãy nút chọn âm: /kl/, /tr/, /kr/, /br/ ... */}
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

      {/* 1. Cách phát âm (How to pronounce /kl/) */}
      <section className="space-y-3 bg-white rounded-xl shadow p-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold">
            1
          </div>
          <h2 className="font-semibold text-lg text-sky-700">
            Cách phát âm {current.label}
          </h2>
        </div>

        {/* Dòng âm /kl/ + play + mic ngay dưới tiêu đề, giống hình bạn gửi */}
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <span className="font-semibold">{current.label}</span>
          <TTSPlay
            text={current.label}
            expectedText={current.label}
            enableRecord
            className="gap-1"
          />
        </div>

        {current.title && (
          <p className="text-sm font-semibold text-gray-800">
            {current.title}
          </p>
        )}

        <p className="text-sm text-gray-700 whitespace-pre-line">
          {current.description ?? block.viExplain}
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

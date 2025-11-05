// components/WarmupLesson.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

// ===== Types =====
export type Line = { id: string; speaker: string; text: string };

type Props = {
  title?: string;
  videoId?: string;        // nếu muốn nhúng YouTube, truyền ID; bỏ trống để ẩn video
  lines: Line[];
};

// ===== IndexedDB helpers (cache offline) =====
const DB_NAME = "warmup-tts-db";
const DB_STORE = "audios";
const DB_VERSION = 1;

function openIDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE, { keyPath: "id" }); // { id, blob }
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function idbGet(id: string): Promise<Blob | undefined> {
  const db = await openIDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readonly");
    const store = tx.objectStore(DB_STORE);
    const req = store.get(id);
    req.onsuccess = () => {
      const v = req.result as { id: string; blob: Blob } | undefined;
      resolve(v?.blob);
    };
    req.onerror = () => reject(req.error);
  });
}

async function idbPut(id: string, blob: Blob): Promise<void> {
  const db = await openIDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readwrite");
    const store = tx.objectStore(DB_STORE);
    const req = store.put({ id, blob });
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

// ===== Hash key (ổn định giữa các lần mở trang) =====
async function sha256(text: string): Promise<string> {
  try {
    const enc = new TextEncoder();
    const hash = await crypto.subtle.digest("SHA-256", enc.encode(text));
    return Array.from(new Uint8Array(hash))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  } catch {
    // fallback djb2
    let h = 5381;
    for (let i = 0; i < text.length; i++) h = (h * 33) ^ text.charCodeAt(i);
    return (h >>> 0).toString(16);
  }
}

// ---- gọi route /api/tts, nhận về audio/mpeg (ArrayBuffer) -> Blob
async function fetchTtsBlob(text: string): Promise<Blob> {
  const res = await fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(`TTS ${res.status} ${msg}`);
  }

  const buf = await res.arrayBuffer();
  return new Blob([buf], { type: "audio/mpeg" });
}

export default function WarmupLesson({ title = "Warm-up", videoId, lines }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [playAll, setPlayAll] = useState(false);

  // Cache trong bộ nhớ: id -> objectURL
  const urlCache = useRef<Map<string, string>>(new Map());

  // chỉ tạo Audio sau khi vào trình duyệt (tránh SSR)
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio();
      setIsClient(true);
    }
    // cleanup: revoke objectURL & stop
    return () => {
      urlCache.current.forEach((u) => URL.revokeObjectURL(u));
      urlCache.current.clear();
      try {
        audioRef.current?.pause();
      } catch {}
    };
  }, []);

  // Lấy URL để phát theo thứ tự: RAM -> IndexedDB -> gọi /api/tts
  async function getAudioUrlForText(text: string): Promise<string> {
    const id = await sha256(text);
    const mem = urlCache.current.get(id);
    if (mem) return mem;

    const fromIDB = await idbGet(id);
    if (fromIDB) {
      const url = URL.createObjectURL(fromIDB);
      urlCache.current.set(id, url);
      return url;
    }

    const blob = await fetchTtsBlob(text);
    await idbPut(id, blob);
    const url = URL.createObjectURL(blob);
    urlCache.current.set(id, url);
    return url;
  }

  async function toggle(line: Line) {
    if (!isClient) return;

    const a = audioRef.current ?? new Audio();

    // nếu đang phát đúng câu → Stop
    if (playingId === line.id && !a.paused) {
      a.pause();
      a.currentTime = 0;
      setPlayingId(null);
      setPlayAll(false);
      return;
    }

    try {
      setBusyId(line.id);
      if (!a.paused) {
        a.pause();
        a.currentTime = 0;
      }

      // CHỈ đọc nội dung câu, không đọc tên người nói
      const url = await getAudioUrlForText(line.text);
      a.src = url;
      audioRef.current = a;
      setPlayingId(line.id);
      await a.play();
      a.onended = () => {
        setPlayingId(null);
        if (playAll) playNextAfter(line.id);
      };
    } catch (e) {
      console.error("[WarmupLesson] play error:", e);
      setPlayingId(null);
      setPlayAll(false);
    } finally {
      setBusyId(null);
    }
  }

  // Play All
  function playNextAfter(currentId: string) {
    const idx = lines.findIndex((l) => l.id === currentId);
    const next = lines[idx + 1];
    if (!next) {
      setPlayAll(false);
      return;
    }
    // gọi toggle cho câu tiếp theo (không set busy state ở đây)
    toggle(next);
  }

  async function handlePlayAll() {
    if (!isClient) return;
    setPlayAll(true);
    // phát từ câu đầu tiên hoặc (nếu đang phát lẻ) phát lại từ đầu
    toggle(lines[0]);
  }

  function handleStopAll() {
    const a = audioRef.current;
    if (a && !a.paused) {
      a.pause();
      a.currentTime = 0;
    }
    setPlayingId(null);
    setPlayAll(false);
  }

  const youTubeSrc = useMemo(
    () => (videoId ? `https://www.youtube.com/embed/${videoId}?rel=0` : ""),
    [videoId]
  );

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {title && <h1 className="text-xl font-semibold text-center">{title}</h1>}

      {videoId && (
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow">
          <iframe
            className="w-full h-full"
            src={youTubeSrc}
            title="Warm-up Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}

      {/* Play All / Stop All */}
      <div className="flex items-center justify-end gap-2">
        {!playAll ? (
          <button
            type="button"
            onClick={handlePlayAll}
            disabled={!isClient || lines.length === 0}
            className="rounded-lg border px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-60"
          >
            ▶ Play All
          </button>
        ) : (
          <button
            type="button"
            onClick={handleStopAll}
            className="rounded-lg border px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200"
          >
            ⏹ Stop All
          </button>
        )}
      </div>

      <div className="space-y-3">
        {lines.map((l) => {
          const isPlaying = playingId === l.id;
          const isBusy = busyId === l.id;
          return (
            <div
              key={l.id}
              className={`flex items-start gap-3 p-3 border rounded-xl bg-white transition
              ${isPlaying ? "ring-2 ring-blue-500 bg-blue-50" : ""}`}
            >
              <span className="font-semibold w-16 shrink-0 text-gray-700">{l.speaker}</span>

              <div className="flex-1 leading-relaxed">{l.text}</div>

              <button
                type="button"
                onClick={() => toggle(l)}
                disabled={!isClient || isBusy}
                className="shrink-0 rounded-full border px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-60"
                aria-label={isPlaying ? "Stop" : "Play"}
                title={isPlaying ? "Stop" : "Play"}
              >
                {isBusy ? "…" : isPlaying ? "⏸ Stop" : "▶ Play"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

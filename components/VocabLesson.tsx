// components/VocabLesson.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

/* ========= TYPES ========= */
export type VocabItem = {
  id: string;
  word: string;             // be admired for
  ipa?: string;             // /ədˈmaɪəd/
  pos?: string;             // v., n., adj...
  vi: string;               // nghĩa tiếng Việt
  exampleEn?: string;       // câu ví dụ EN
  exampleVi?: string;       // câu ví dụ VI
  imageUrl?: string;        // ảnh minh hoạ (tuỳ chọn)
};

type Props = {
  title?: string;
  items: VocabItem[];
  ttsVoiceWord?: string;      // giọng đọc cho từ (mặc định en-US-Wavenet-D)
  ttsVoiceExample?: string;   // giọng đọc cho câu ví dụ
};

/* ========= IndexedDB (cache offline) ========= */
const DB_NAME = "vocab-tts-db";
const DB_STORE = "audios";
const DB_VERSION = 1;

function openIDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE, { keyPath: "id" }); // {id, blob}
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
    const st = tx.objectStore(DB_STORE);
    const rq = st.get(id);
    rq.onsuccess = () => resolve((rq.result as {id:string;blob:Blob}|undefined)?.blob);
    rq.onerror = () => reject(rq.error);
  });
}
async function idbPut(id: string, blob: Blob): Promise<void> {
  const db = await openIDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readwrite");
    const st = tx.objectStore(DB_STORE);
    const rq = st.put({ id, blob });
    rq.onsuccess = () => resolve();
    rq.onerror = () => reject(rq.error);
  });
}
async function sha256(text: string): Promise<string> {
  try {
    const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return Array.from(new Uint8Array(hash)).map(b=>b.toString(16).padStart(2,"0")).join("");
  } catch {
    // fallback djb2
    let h = 5381;
    for (let i=0;i<text.length;i++) h = (h*33) ^ text.charCodeAt(i);
    return (h>>>0).toString(16);
  }
}

/* ========= Helpers ========= */
async function fetchTtsBlob(text: string): Promise<Blob> {
  const res = await fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, languageCode: "en-US" }),
  });
  if (!res.ok) {
    const msg = await res.text().catch(()=> "");
    throw new Error(`TTS ${res.status}: ${msg}`);
  }
  const buf = await res.arrayBuffer();
  return new Blob([buf], { type: "audio/mpeg" });
}

function normalizeForCompare(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s']/gu, " ") // bỏ ký tự đặc biệt
    .replace(/\s{2,}/g, " ")
    .trim();
}

function levenshtein(a: string, b: string) {
  const m = a.length, n = b.length;
  const dp = Array.from({length: m+1}, (_,i)=> Array(n+1).fill(0));
  for (let i=0;i<=m;i++) dp[i][0] = i;
  for (let j=0;j<=n;j++) dp[0][j] = j;
  for (let i=1;i<=m;i++){
    for (let j=1;j<=n;j++){
      const cost = a[i-1] === b[j-1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i-1][j] + 1,
        dp[i][j-1] + 1,
        dp[i-1][j-1] + cost
      );
    }
  }
  return dp[m][n];
}

function scoreSimilarity(target: string, said: string) {
  const A = normalizeForCompare(target);
  const B = normalizeForCompare(said);
  if (!A || !B) return 0;
  const dist = levenshtein(A, B);
  const maxLen = Math.max(A.length, B.length);
  const sim = 1 - dist / maxLen;
  return Math.max(0, Math.min(1, sim));
}

/* ========= Component ========= */
export default function VocabLesson({
  title = "Vocabulary",
  items,
}: Props) {
  /* audio / playback */
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const urlCache = useRef<Map<string, string>>(new Map());
  const [busyId, setBusyId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [playAll, setPlayAll] = useState(false);

  /* mic / scoring */
  const [practiceFor, setPracticeFor] = useState<string | null>(null);
  const [lastSaid, setLastSaid] = useState<string>("");
  const [lastScore, setLastScore] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio();
      setIsClient(true);
    }
    return () => {
      urlCache.current.forEach(u => URL.revokeObjectURL(u));
      urlCache.current.clear();
      try { audioRef.current?.pause(); } catch {}
    };
  }, []);

  async function getAudioUrl(text: string): Promise<string> {
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

  async function playText(text: string, id: string) {
    if (!isClient || !text) return;
    const a = audioRef.current ?? new Audio();

    // nếu nhấn lại mục đang phát -> dừng
    if (playingId === id && !a.paused) {
      a.pause(); a.currentTime = 0; setPlayingId(null); setPlayAll(false); return;
    }

    try {
      setBusyId(id);
      if (!a.paused) { a.pause(); a.currentTime = 0; }
      const url = await getAudioUrl(text);
      a.src = url;
      audioRef.current = a;
      setPlayingId(id);
      // autoplay policy workaround
      try {
        const AC: any = (window as any).AudioContext || (window as any).webkitAudioContext;
        if (AC) {
          const ctx = ((window as any).__vocabCtx ||= new AC());
          if (ctx.state === "suspended") await ctx.resume();
        }
      } catch {}
      await a.play();
      a.onended = () => {
        setPlayingId(null);
        if (playAll) playNext(id);
      };
    } catch (e) {
      console.error("[VocabLesson] play error", e);
      setPlayingId(null);
      setPlayAll(false);
    } finally {
      setBusyId(null);
    }
  }

  function playNext(currentId: string) {
    const idx = items.findIndex(i => i.id === currentId);
    const next = items[idx + 1];
    if (!next) { setPlayAll(false); return; }
    playText(next.word, next.id); // mặc định phát "từ" khi Play All
  }

  function onPlayAll() {
    if (!items.length) return;
    setPlayAll(true);
    playText(items[0].word, items[0].id);
  }
  function onStopAll() {
    const a = audioRef.current;
    if (a && !a.paused) { a.pause(); a.currentTime = 0; }
    setPlayingId(null); setPlayAll(false);
  }

  async function practiceSpeak(target: string, id: string) {
    const SR: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      alert("Trình duyệt không hỗ trợ microphone.");
      return;
    }
    const r = new SR();
    r.lang = "en-US";
    r.interimResults = false;
    r.maxAlternatives = 1;

    setPracticeFor(id);
    setLastSaid("");
    setLastScore(null);

    r.onresult = (e: any) => {
      const said = e.results[0][0].transcript || "";
      setLastSaid(said);
      const score = Math.round(scoreSimilarity(target, said) * 100);
      setLastScore(score);
    };
    r.onerror = () => setPracticeFor(null);
    r.onend = () => {}; // giữ kết quả hiển thị

    r.start();
  }

  const youWillHear = useMemo(() => new Set(items.map(i => i.id)), [items]);

  return (
    <div className="max-w-5xl mx-auto space-y-4">
      <h1 className="text-xl font-semibold text-center">{title}</h1>

      <div className="flex justify-end gap-2">
        {!playAll ? (
          <button
            onClick={onPlayAll}
            className="rounded-lg border px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200"
          >▶ Play All</button>
        ) : (
          <button
            onClick={onStopAll}
            className="rounded-lg border px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200"
          >⏹ Stop All</button>
        )}
      </div>

      <div className="space-y-4">
        {items.map((it) => {
          const isPlaying = playingId === it.id;
          const isBusy = busyId === it.id;
          const practicing = practiceFor === it.id;

          return (
            <div
              key={it.id}
              className={`p-4 border rounded-xl bg-white flex flex-col gap-3 transition ${
                isPlaying ? "ring-2 ring-blue-500 bg-blue-50" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                {it.imageUrl && (
                  <img
                    src={it.imageUrl}
                    alt={it.word}
                    className="w-20 h-20 object-cover rounded-md border"
                    loading="lazy"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-lg font-semibold">{it.word}</span>
                    {it.pos && <span className="px-2 py-0.5 text-xs rounded bg-gray-100 border">{it.pos}</span>}
                    {it.ipa && <span className="text-sm text-gray-600">{it.ipa}</span>}
                    <button
                      onClick={() => playText(it.word, it.id)}
                      disabled={!isClient || isBusy}
                      className="ml-auto rounded-full border px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-60"
                      title={isPlaying ? "Stop" : "Play"}
                    >
                      {isBusy ? "…" : isPlaying ? "⏸ Stop" : "🔊 Play"}
                    </button>
                  </div>
                  <div className="text-gray-700 mt-1">{it.vi}</div>
                </div>
              </div>

              {(it.exampleEn || it.exampleVi) && (
                <div className="rounded-md bg-gray-50 border p-3">
                  {it.exampleEn && (
                    <div className="flex items-center gap-2">
                      <span className="flex-1">{it.exampleEn}</span>
                      <button
                        onClick={() => playText(it.exampleEn!, it.id + ":ex")}
                        disabled={!isClient}
                        className="rounded-full border px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200"
                        title="Play example"
                      >
                        🔊
                      </button>
                    </div>
                  )}
                  {it.exampleVi && (
                    <div className="text-gray-600 mt-1">{it.exampleVi}</div>
                  )}
                </div>
              )}

              {/* Practice (mic) */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => practiceSpeak(it.word, it.id)}
                  className={`rounded-full px-3 py-1 text-sm border ${practicing ? "bg-red-50 border-red-300" : "bg-gray-100 hover:bg-gray-200"}`}
                  title="Nhấn để luyện nói"
                >
                  {practicing ? "🎙️ Đang ghi..." : "🎤 Ghi âm lại"}
                </button>

                {lastScore !== null && practiceFor === it.id && (
                  <div className="ml-2 text-sm">
                    <span className="font-semibold">{lastScore}%</span>{" "}
                    {lastScore >= 80 ? "Tốt lắm!" : "Bạn hãy làm lại để đạt điểm cao hơn nhé!"}
                    {lastSaid && (
                      <span className="ml-2 text-gray-500">({lastSaid})</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* chú thích nhỏ */}
      <p className="text-xs text-gray-500">
        * TTS dùng Google Cloud (cache offline). Luyện nói dùng Web Speech API (độ chính xác phụ thuộc trình duyệt).
      </p>
    </div>
  );
}

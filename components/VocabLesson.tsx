"use client";

import React, { useEffect, useRef, useState } from "react";

/** ===== Types ===== */
export type VocabItem = {
  id: string;
  word: string;
  ipa?: string;
  pos?: string;
  vi: string;
  exampleEn?: string;
  exampleVi?: string;
  imageFile?: string; // "be-admired-for.jpg" hoặc URL đầy đủ
};

type Props = {
  title?: string;
  items: VocabItem[];
  baseImagePath?: string;
};

/** ===== IndexedDB cache (TTS) ===== */
const DB_NAME = "vocab-tts-db";
const DB_STORE = "audios";
const DB_VER = 1;

function openDB(): Promise<IDBDatabase> {
  return new Promise((res, rej) => {
    const rq = indexedDB.open(DB_NAME, DB_VER);
    rq.onupgradeneeded = () => {
      const db = rq.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE, { keyPath: "id" });
      }
    };
    rq.onsuccess = () => res(rq.result);
    rq.onerror = () => rej(rq.error);
  });
}
async function idbGet(id: string): Promise<Blob | undefined> {
  const db = await openDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(DB_STORE, "readonly");
    const st = tx.objectStore(DB_STORE);
    const rq = st.get(id);
    rq.onsuccess = () =>
      res((rq.result as { id: string; blob: Blob } | undefined)?.blob);
    rq.onerror = () => rej(rq.error);
  });
}
async function idbPut(id: string, blob: Blob) {
  const db = await openDB();
  return new Promise<void>((res, rej) => {
    const tx = db.transaction(DB_STORE, "readwrite");
    const st = tx.objectStore(DB_STORE);
    const rq = st.put({ id, blob });
    rq.onsuccess = () => res();
    rq.onerror = () => rej(rq.error);
  });
}
async function sha(text: string) {
  try {
    const buf = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(text)
    );
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  } catch {
    let h = 5381;
    for (let i = 0; i < text.length; i++) h = (h * 33) ^ text.charCodeAt(i);
    return (h >>> 0).toString(16);
  }
}

/** ===== helpers ===== */
async function fetchTTS(text: string, voice: string): Promise<Blob> {
  const r = await fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      languageCode: "en-US",
      voice, // Neural2-D/F
      rate: 1.0,
      pitch: 0,
    }),
  });
  if (!r.ok) throw new Error(await r.text());
  const buf = await r.arrayBuffer();
  return new Blob([buf], { type: "audio/mpeg" });
}
function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s']/gu, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}
function levenshtein(a: string, b: string) {
  const m = a.length,
    n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}
function score(target: string, said: string) {
  const A = normalize(target);
  const B = normalize(said);
  if (!A || !B) return 0;
  const dist = levenshtein(A, B);
  const sim = 1 - dist / Math.max(A.length, B.length);
  return Math.max(0, Math.min(1, sim));
}

/** ===== Component ===== */
export default function VocabLesson({
  title = "Vocabulary",
  items,
  baseImagePath = "",
}: Props) {
  // Audio
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const urlMem = useRef<Map<string, string>>(new Map());
  const [isClient, setIsClient] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  // Practice popup state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalFor, setModalFor] = useState<{ id: string; text: string; label: string; voice: string } | null>(null);

  const [recUrl, setRecUrl] = useState<string | null>(null);
  const [recoding, setRecoding] = useState(false);
  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const [said, setSaid] = useState<string>("");
  const [percent, setPercent] = useState<number | null>(0);
  const [modelUrl, setModelUrl] = useState<string | null>(null);

  // SpeechRecognition instance (giữ lại để stop được)
  const srRef = useRef<any>(null);

  // voices
  const VOICE_WORD = "en-US-Neural2-D";     // nam, rõ
  const VOICE_EXAMPLE = "en-US-Neural2-F";  // nữ, tự nhiên

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio();
      setIsClient(true);
    }
    return () => {
      try { audioRef.current?.pause(); } catch {}
      urlMem.current.forEach((u) => URL.revokeObjectURL(u));
      urlMem.current.clear();
      // stop SR nếu còn
      try { srRef.current?.stop?.(); } catch {}
    };
  }, []);

  async function getAudioUrl(text: string, voice: string) {
    const key = await sha(voice + "|" + text);
    const mem = urlMem.current.get(key);
    if (mem) return mem;
    const cached = await idbGet(key);
    if (cached) {
      const url = URL.createObjectURL(cached);
      urlMem.current.set(key, url);
      return url;
    }
    const blob = await fetchTTS(text, voice);
    await idbPut(key, blob);
    const url = URL.createObjectURL(blob);
    urlMem.current.set(key, url);
    return url;
  }

  async function play(text: string, id: string, voice: string) {
    if (!isClient || !text) return;
    const a = audioRef.current ?? new Audio();

    // toggle stop
    if (playingId === id && !a.paused) {
      a.pause();
      a.currentTime = 0;
      setPlayingId(null);
      return;
    }

    try {
      setBusyId(id);
      if (!a.paused) {
        a.pause();
        a.currentTime = 0;
      }
      const url = await getAudioUrl(text, voice);
      a.src = url;
      audioRef.current = a;
      setPlayingId(id);

      try {
        const AC: any =
          (window as any).AudioContext || (window as any).webkitAudioContext;
        if (AC) {
          const ctx = ((window as any).__vocabCtx ||= new AC());
          if (ctx.state === "suspended") await ctx.resume();
        }
      } catch {}

      await a.play();
      a.onended = () => setPlayingId(null);
    } catch (e) {
      console.error("[vocab] play error", e);
      setPlayingId(null);
    } finally {
      setBusyId(null);
    }
  }

  async function openPractice(id: string, text: string, label: string, voice: string) {
    setModalFor({ id, text, label, voice });
    setRecUrl(null);
    setSaid("");
    setPercent(0);      // luôn hiển thị 0% khi mở
    setModalOpen(true);
    // âm mẫu
    try {
      const url = await getAudioUrl(text, voice);
      setModelUrl(url);
    } catch {
      setModelUrl(null);
    }
  }

  /** ===== Recording + Auto scoring ===== */
  function setupSR(lang = "en-US") {
    const SR: any =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return null;
    const r = new SR();
    r.lang = lang;
    r.interimResults = false;
    r.maxAlternatives = 1;
    return r;
  }

  async function startRecord() {
    if (!modalFor) return;
    // reset kết quả
    setSaid("");
    setPercent(0);

    // SR
    const r = setupSR("en-US");
    if (!r) {
      alert("Trình duyệt chưa hỗ trợ chấm điểm bằng giọng nói (SpeechRecognition). Vui lòng dùng Chrome/Edge.");
    } else {
      srRef.current = r;
      r.onresult = (e: any) => {
        const saidText = e.results[0][0].transcript || "";
        setSaid(saidText);
      };
      r.onerror = () => {/* im lặng */};
      r.onend = () => {
        // khi SR tự end, nếu đã có bản ghi audio, chấm điểm ngay
        if (modalFor && said !== undefined) {
          const raw = Math.round(score(modalFor.text, said) * 100);
          const pct = Math.max(0, Math.min(100, raw));
          setPercent(pct);
        }
      };
      try { r.start(); } catch {}
    }

    // ghi âm local để nghe lại
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const m = new MediaRecorder(stream);
    mediaRef.current = m;
    chunksRef.current = [];
    m.ondataavailable = (e) => e.data && chunksRef.current.push(e.data);
    m.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      setRecUrl(URL.createObjectURL(blob));
      stream.getTracks().forEach((t) => t.stop());

      // Auto score tại thời điểm dừng (nếu SR có kết quả -> said đã được set)
      if (modalFor) {
        const raw = Math.round(score(modalFor.text, said) * 100);
        const pct = Math.max(0, Math.min(100, raw));
        setPercent(pct);
      }
      try { srRef.current?.stop?.(); } catch {}
    };
    m.start();
    setRecoding(true);
  }

  function stopRecord() {
    mediaRef.current?.stop();
    setRecoding(false);
  }

  /** style helpers for % block */
  function pctColor(p: number | null | undefined) {
    if (p == null) return "text-gray-500";
    const v = Number(p);
    if (v >= 90) return "text-green-600";
    if (v >= 70) return "text-amber-500";
    return "text-red-600";
  }
  function messageFor(p: number | null | undefined) {
    if (p == null) return "Nhấn Ghi âm rồi đọc lại câu ở trên để luyện và được hệ thống chấm điểm.";
    if (p >= 90) return "Bạn rất xuất sắc. Cố gắng phát huy nhé!";
    if (p >= 70) return "Bạn làm khá tốt. Cố gắng hơn nữa nhé!";
    return "Bạn hãy luyện lại để đạt điểm cao hơn nhé!";
  }

  return (
    <div className="max-w-5xl mx-auto space-y-4">
      <h1 className="text-xl font-semibold">{title}</h1>

      {items.map((it) => {
        const imgSrc =
          it.imageFile && baseImagePath
            ? `${baseImagePath}${it.imageFile}`
            : it.imageFile || "";

        const isBusy = busyId === it.id;
        const isPlaying = playingId === it.id;

        return (
          <div
            key={it.id}
            className={`p-4 border rounded-xl bg-white transition ${isPlaying ? "ring-2 ring-blue-500 bg-blue-50" : ""}`}
          >
            <div className="grid grid-cols-12 gap-4">
              {/* Ảnh minh hoạ (góc phải) */}
              <div className="order-2 col-span-12 md:col-span-3 md:order-2 flex justify-end">
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={it.word}
                    className="w-28 h-28 object-cover rounded-md border"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-28 h-28 rounded-md border grid place-items-center text-xs text-gray-400">
                    No image
                  </div>
                )}
              </div>

              {/* Nội dung từ vựng */}
              <div className="order-1 col-span-12 md:col-span-9 md:order-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-lg font-semibold text-[var(--navy,#0f172a)]">
                    {it.word}
                  </span>

                  {/* nút loa / mic cho TỪ */}
                  <button
                    onClick={() => play(it.word, it.id, VOICE_WORD)}
                    disabled={!isClient || isBusy}
                    className="rounded-full border px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-60"
                    title="Nghe phát âm mẫu"
                  >
                    🔊
                  </button>
                  <button
                    onClick={() => openPractice(it.id, it.word, "Từ vựng", VOICE_WORD)}
                    className="rounded-full border px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200"
                    title="Luyện nói"
                  >
                    🎤
                  </button>
                </div>

                <div className="mt-1 text-sm text-gray-700">
                  {it.ipa && <span className="mr-3">{it.ipa}</span>}
                  {it.pos && (
                    <span className="px-2 py-0.5 text-xs rounded bg-gray-100 border">
                      {it.pos}
                    </span>
                  )}
                </div>

                <div className="mt-1">{it.vi}</div>

                {(it.exampleEn || it.exampleVi) && (
                  <div className="mt-3 rounded-md bg-gray-50 border p-3">
                    <div className="flex items-start gap-2">
                      <div className="flex-1">
                        {it.exampleEn && <div className="font-medium">{it.exampleEn}</div>}
                        {it.exampleVi && (
                          <div className="text-gray-600 mt-1">{it.exampleVi}</div>
                        )}
                      </div>
                      {it.exampleEn && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => play(it.exampleEn!, it.id + ":ex", VOICE_EXAMPLE)}
                            className="rounded-full border px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200"
                            title="Nghe câu ví dụ"
                          >
                            🔊
                          </button>
                          <button
                            onClick={() =>
                              openPractice(it.id + ":ex", it.exampleEn!, "Câu ví dụ", VOICE_EXAMPLE)
                            }
                            className="rounded-full border px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200"
                            title="Luyện nói câu ví dụ"
                          >
                            🎤
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* ===== Popup luyện nói (auto chấm điểm) ===== */}
      {modalOpen && modalFor && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
          <div className="w-full max-w-2xl rounded-xl bg-white shadow-lg border overflow-hidden">
            {/* Header + Close */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="font-semibold">
                Luyện nói – {modalFor.label}:{" "}
                <span className="text-[var(--navy,#0f172a)]">{modalFor.text}</span>
              </div>
              <button
                className="rounded-full border w-8 h-8 grid place-items-center bg-gray-50 hover:bg-gray-100"
                onClick={() => {
                  setModalOpen(false);
                  try { srRef.current?.stop?.(); } catch {}
                  if (recoding) stopRecord();
                }}
                aria-label="Close"
              >
                ✖
              </button>
            </div>

            {/* Khối trên (trắng): % + câu mục tiêu */}
            <div className="px-4 pt-4">
              <div className="rounded-lg border bg-white overflow-hidden">
                <div className="flex">
                  <div className="w-32 min-w-[8rem] bg-gray-50 border-r p-3">
                    <div className="text-xs text-gray-500">Bạn đạt</div>
                    <div className={`mt-1 text-4xl font-extrabold leading-none ${pctColor(percent)}`}>
                      {(percent ?? 0).toFixed(0)}%
                    </div>
                  </div>
                  <div className="flex-1 p-3 text-sm">
                    {modalFor.text}
                  </div>
                </div>
              </div>
            </div>

            {/* Khối dưới (xanh) + nút */}
            <div className="mt-3 bg-[#0B5ED7] text-white px-4 py-4">
              <div className="text-sm font-semibold text-center">
                {messageFor(percent)}
              </div>

              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                <button
                  onClick={async () => {
                    if (!modelUrl) {
                      const u = await getAudioUrl(modalFor.text, modalFor.voice);
                      setModelUrl(u);
                    }
                    const a = new Audio(modelUrl || "");
                    try {
                      const AC: any =
                        (window as any).AudioContext || (window as any).webkitAudioContext;
                      if (AC) {
                        const ctx = ((window as any).__vocabCtx2 ||= new AC());
                        if (ctx.state === "suspended") await ctx.resume();
                      }
                    } catch {}
                    a.play();
                  }}
                  className="rounded-md bg-white text-[#0B5ED7] border border-white/20 px-4 py-2 text-sm hover:bg-gray-100"
                >
                  🔊 Nghe mẫu
                </button>

                {!recoding ? (
                  <button
                    onClick={startRecord}
                    className="rounded-md bg-white text-[#0B5ED7] border border-white/20 px-4 py-2 text-sm hover:bg-gray-100"
                    title="Bắt đầu ghi âm và tự động chấm điểm"
                  >
                    🎤 Ghi âm
                  </button>
                ) : (
                  <button
                    onClick={stopRecord}
                    className="rounded-md bg-white text-[#0B5ED7] border border-white/20 px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    ⏹ Dừng ghi
                  </button>
                )}

                <button
                  disabled={!recUrl}
                  onClick={() => recUrl && new Audio(recUrl).play()}
                  className="rounded-md bg-white text-[#0B5ED7] border border-white/20 px-4 py-2 text-sm hover:bg-gray-100 disabled:opacity-50"
                >
                  ▶ Nghe lại bài ghi âm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

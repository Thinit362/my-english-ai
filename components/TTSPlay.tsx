"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Play,
  Pause,
  Loader2,
  Download,
  Mic,
  Volume2,
} from "lucide-react";
import { createStore, get, set, del, keys } from "idb-keyval";

type Provider = "custom" | "gemini" | "gcloud" | "azure" | "eleven";
type AudioFormat = "mp3" | "wav" | "ogg";

export type TTSPlayProps = {
  text: string;
  voice?: string;
  rate?: number;
  pitch?: number;
  provider?: Provider;
  format?: AudioFormat;
  className?: string;
  ariaLabel?: string;
  prefetch?: boolean;
  showDownload?: boolean;
  onPlayed?: () => void;

  /** Bật luyện nói + chấm điểm giống phần từ vựng */
  enableRecord?: boolean;
  /** Câu/từ mục tiêu để so sánh (mặc định = text) */
  expectedText?: string;
  /** Mã ngôn ngữ cho SpeechRecognition */
  languageCode?: string;

  /** Hiển thị dạng nhỏ gọn: chỉ 2 icon tròn [loa] [mic] */
  compact?: boolean;
};

/* ========= IndexedDB store ========= */
const CACHE_DB = createStore("my-english-ai-tts-db", "v1");

/** Tạo cacheKey cơ bản từ text + voice + tham số TTS */
function cacheKey({
  text,
  voice,
  rate,
  pitch,
  provider,
  format,
}: {
  text: string;
  voice?: string;
  rate: number;
  pitch: number;
  provider?: Provider;
  format?: AudioFormat;
}) {
  const p = provider ?? "custom";
  const f = format ?? "mp3";
  const v = voice ?? "default";
  return `${p}::${f}::${v}::r${rate.toFixed(2)}::p${pitch.toFixed(
    2
  )}::${text}`;
}

/** 
 * 🔥 FIX QUAN TRỌNG:
 * Hash key luôn GẮN VỚI ĐƯỜNG DẪN TRANG, để tránh dùng nhầm audio giữa các trang /tr/, /kr/, /br/...
 */
async function hash(input: string) {
  const path =
    typeof window !== "undefined" ? window.location.pathname : "";
  const full = `${path}::${input}`;

  if (globalThis.crypto?.subtle) {
    const enc = new TextEncoder().encode(full);
    const buf = await crypto.subtle.digest("SHA-256", enc);
    const arr = Array.from(new Uint8Array(buf));
    return arr.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  return full;
}

/** Gọi API /api/tts */
async function requestTTS({
  text,
  voice,
  rate,
  pitch,
  format = "mp3",
}: Partial<TTSPlayProps> & { text: string }): Promise<Blob> {
  const res = await fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, voice, rate, pitch, format }),
  });
  if (!res.ok) throw new Error(`TTS ${res.status}`);
  return await res.blob();
}

/* ========= Helper cho chấm điểm (copy logic từ VocabLesson) ========= */

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

function calcScore(target: string, said: string) {
  const A = normalize(target);
  const B = normalize(said);
  if (!A || !B) return 0;
  const dist = levenshtein(A, B);
  const sim = 1 - dist / Math.max(A.length, B.length);
  return Math.max(0, Math.min(1, sim));
}

function pctColor(p: number | null | undefined) {
  if (p == null) return "text-gray-500";
  const v = Number(p);
  if (v >= 90) return "text-green-600";
  if (v >= 70) return "text-amber-500";
  return "text-red-600";
}

function messageFor(p: number | null | undefined) {
  if (p == null)
    return "Nhấn Ghi âm rồi đọc lại câu ở trên để luyện và được hệ thống chấm điểm.";
  if (p >= 90) return "Bạn rất xuất sắc. Cố gắng phát huy nhé!";
  if (p >= 70) return "Bạn làm khá tốt. Cố gắng hơn nữa nhé!";
  return "Bạn hãy luyện lại để đạt điểm cao hơn nhé!";
}

function setupSR(lang = "en-US") {
  const SR: any =
    (typeof window !== "undefined" &&
      ((window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition)) ||
    null;
  if (!SR) return null;
  const r = new SR();
  r.lang = lang;
  r.interimResults = false;
  r.maxAlternatives = 1;
  return r;
}

/* ========= Component ========= */

export default function TTSPlay(props: TTSPlayProps) {
  const {
    text,
    voice,
    rate = 1,
    pitch = 0,
    provider = "custom",
    format = "mp3",
    className,
    ariaLabel = "Nghe phát âm",
    prefetch = false,
    showDownload = false,
    onPlayed,

    enableRecord = false,
    expectedText,
    languageCode = "en-US",
    compact = false,
  } = props;

  // ======= playback state =======
  const [loading, setLoading] = useState(false);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState({ cur: 0, dur: 0 });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const rawKey = useMemo(
    () =>
      cacheKey({
        text,
        voice,
        rate,
        pitch,
        provider,
        format,
      }),
    [text, voice, rate, pitch, provider, format]
  );

  const keyPromise = useMemo(() => hash(rawKey), [rawKey]);

  const ensureBlobUrl = useCallback(async () => {
    setError(null);
    const hashed = await keyPromise;

    let blob = await get<Blob>(hashed, CACHE_DB);
    if (!blob) {
      setLoading(true);
      try {
        blob = await requestTTS({ text, voice, rate, pitch, format });
        await set(hashed, blob, CACHE_DB);
      } catch (e: any) {
        setError(e?.message ?? "Lỗi TTS");
        setLoading(false);
        throw e;
      }
      setLoading(false);
    }

    const url = URL.createObjectURL(blob);
    setBlobUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });
    return url;
  }, [keyPromise, text, voice, rate, pitch, format]);

  useEffect(() => {
    if (!prefetch) return;
    ensureBlobUrl().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefetch, rawKey]);

  useEffect(() => {
    if (!audioRef.current) return;
    const a = audioRef.current;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onEnded = () => {
      setPlaying(false);
      setProgress((p) => ({ ...p, cur: p.dur }));
    };
    const onTime = () =>
      setProgress({ cur: a.currentTime || 0, dur: a.duration || 0 });

    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    a.addEventListener("ended", onEnded);
    a.addEventListener("timeupdate", onTime);

    return () => {
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
      a.removeEventListener("ended", onEnded);
      a.removeEventListener("timeupdate", onTime);
    };
  }, []);

  const togglePlay = useCallback(async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      return;
    }

    try {
      const url = blobUrl ?? (await ensureBlobUrl());
      audioRef.current.src = url;
      await audioRef.current.play();
      onPlayed?.();
    } catch {
      // error đã set ở ensureBlobUrl
    }
  }, [playing, blobUrl, ensureBlobUrl, onPlayed]);

  useEffect(() => {
    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [blobUrl]);

  const pct =
    progress.dur > 0
      ? Math.min(100, Math.round((progress.cur / progress.dur) * 100))
      : 0;

  /* ======= Luyện nói + chấm điểm (giống VocabLesson) ======= */

  const [practiceOpen, setPracticeOpen] = useState(false);
  const [recordError, setRecordError] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const [recUrl, setRecUrl] = useState<string | null>(null);
  const [said, setSaid] = useState<string>("");
  const [percent, setPercent] = useState<number | null>(null);

  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const srRef = useRef<any>(null);

  const openPractice = () => {
    setPracticeOpen(true);
    setRecordError(null);
    setRecording(false);
    setRecUrl(null);
    setSaid("");
    setPercent(null);
  };

  const closePractice = () => {
    setPracticeOpen(false);
    try {
      srRef.current?.stop?.();
    } catch {}
    if (recording) {
      mediaRef.current?.stop();
      setRecording(false);
    }
  };

  async function startPracticeRecord() {
    setRecordError(null);
    setSaid("");
    setPercent(null);

    // SpeechRecognition cho text
    const sr = setupSR(languageCode);
    if (!sr) {
      alert(
        "Trình duyệt chưa hỗ trợ chấm điểm bằng giọng nói. Vui lòng dùng Chrome hoặc Edge."
      );
    } else {
      srRef.current = sr;
      sr.onresult = (e: any) => {
        const saidText = e.results[0][0].transcript || "";
        setSaid(saidText);
      };
      sr.onerror = () => {};
      sr.onend = () => {
        const target = expectedText || text;
        const raw = Math.round(calcScore(target, said) * 100);
        setPercent(Math.max(0, Math.min(100, raw)));
      };
      try {
        sr.start();
      } catch {}
    }

    // Ghi âm audio
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const m = new MediaRecorder(stream);
      mediaRef.current = m;
      chunksRef.current = [];
      m.ondataavailable = (e) => e.data && chunksRef.current.push(e.data);
      m.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        stream.getTracks().forEach((t) => t.stop());
        if (recUrl) URL.revokeObjectURL(recUrl);
        setRecUrl(URL.createObjectURL(blob));

        const target = expectedText || text;
        const raw = Math.round(calcScore(target, said) * 100);
        setPercent(Math.max(0, Math.min(100, raw)));
        try {
          srRef.current?.stop?.();
        } catch {}
        setRecording(false);
      };
      m.start();
      setRecording(true);
    } catch (e: any) {
      console.error(e);
      setRecordError(
        "Không thể truy cập micro. Vui lòng kiểm tra quyền truy cập."
      );
      setRecording(false);
    }
  }

  function stopPracticeRecord() {
    mediaRef.current?.stop();
    setRecording(false);
  }

  const wrapperClass = `inline-flex items-center gap-2 ${
    className || ""
  }`;

  const playButton = (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={togglePlay}
      disabled={loading || !text}
      className={`flex items-center justify-center rounded-full border shadow-sm w-7 h-7 text-[11px] hover:scale-105 transition disabled:opacity-60 ${
        compact ? "border-gray-300 bg-white" : "px-2 py-1"
      }`}
      title={loading ? "Đang tải âm..." : playing ? "Tạm dừng" : "Nghe phát âm"}
    >
      {loading ? (
        <Loader2 className="animate-spin" size={14} />
      ) : playing ? (
        compact ? <Pause size={14} /> : <Pause size={16} />
      ) : compact ? (
        <Volume2 size={14} />
      ) : (
        <Play size={16} />
      )}
    </button>
  );

  const micButton =
    enableRecord && (
      <button
        type="button"
        aria-label="Luyện nói & chấm điểm phát âm"
        onClick={openPractice}
        className="flex items-center justify-center rounded-full border w-7 h-7 shadow-sm text-[11px] bg-white border-red-400 text-red-500 hover:bg-red-50"
        title="Mở cửa sổ luyện nói & chấm điểm"
      >
        <Mic size={14} />
      </button>
    );

  return (
    <>
      <span className={wrapperClass}>
        {playButton}
        {micButton}

        {!compact && (
          <>
            <div
              className="h-1 w-20 bg-gray-200 rounded overflow-hidden"
              aria-hidden
            >
              <div
                className="h-full bg-gray-500"
                style={{
                  width: `${pct}%`,
                  transition: "width .2s linear",
                }}
              />
            </div>

            {showDownload && blobUrl && (
              <a
                href={blobUrl}
                download={`tts-${provider}.${format}`}
                className="inline-flex items-center gap-1 text-xs border px-2 py-1 rounded hover:bg-gray-50"
                title="Tải file âm thanh"
              >
                <Download size={14} /> Tải
              </a>
            )}
          </>
        )}

        <audio ref={audioRef} preload="none" />

        {error && (
          <span className="text-xs text-red-600" role="alert">
            {error}
          </span>
        )}
      </span>

      {/* ===== Popup luyện nói giống VocabLesson ===== */}
      {enableRecord && practiceOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
          <div className="w-full max-w-2xl rounded-xl bg-white shadow-lg border overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="font-semibold">
                Luyện nói – Phát âm:{" "}
                <span className="text-slate-900">{expectedText || text}</span>
              </div>
              <button
                className="rounded-full border w-8 h-8 grid place-items-center bg-gray-50 hover:bg-gray-100"
                onClick={closePractice}
                aria-label="Đóng"
              >
                ✖
              </button>
            </div>

            {/* Khối trên: % + câu/từ mục tiêu */}
            <div className="px-4 pt-4">
              <div className="rounded-lg border bg-white overflow-hidden">
                <div className="flex">
                  <div className="w-32 min-w-[8rem] bg-gray-50 border-r p-3">
                    <div className="text-xs text-gray-500">Bạn đạt</div>
                    <div
                      className={`mt-1 text-4xl font-extrabold leading-none ${pctColor(
                        percent
                      )}`}
                    >
                      {(percent ?? 0).toFixed(0)}%
                    </div>
                  </div>
                  <div className="flex-1 p-3 text-sm">
                    {expectedText || text}
                  </div>
                </div>
              </div>
            </div>

            {/* Khối dưới: nền xanh + nút */}
            <div className="mt-3 bg-[#0B5ED7] text-white px-4 py-4">
              <div className="text-sm font-semibold text-center">
                {messageFor(percent)}
              </div>

              {recordError && (
                <div className="mt-2 text-center text-xs text-red-100">
                  {recordError}
                </div>
              )}

              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                {/* Nghe mẫu: dùng luôn TTS ở trên */}
                <button
                  onClick={togglePlay}
                  className="rounded-md bg-white text-[#0B5ED7] border border-white/20 px-4 py-2 text-sm hover:bg-gray-100"
                >
                  🔊 Nghe mẫu
                </button>

                {!recording ? (
                  <button
                    onClick={startPracticeRecord}
                    className="rounded-md bg-white text-[#0B5ED7] border border-white/20 px-4 py-2 text-sm hover:bg-gray-100"
                    title="Bắt đầu ghi âm và tự động chấm điểm"
                  >
                    🎤 Ghi âm
                  </button>
                ) : (
                  <button
                    onClick={stopPracticeRecord}
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
    </>
  );
}

/* ========= Tiện ích xoá cache ========= */

export async function clearTTSCache(
  providerPrefix: Provider | "all" = "all"
) {
  const all = await keys(CACHE_DB);
  const willDelete: IDBValidKey[] = [];
  for (const k of all) {
    const s = String(k);
    if (providerPrefix === "all" || s.startsWith(providerPrefix)) {
      willDelete.push(k);
    }
  }
  await Promise.all(willDelete.map((k) => del(k, CACHE_DB)));
  return willDelete.length;
}

/* ========= Prefetch nhiều câu một lúc ========= */

export async function prefetchTTSBatch(
  items: Array<
    Pick<
      TTSPlayProps,
      "text" | "voice" | "rate" | "pitch" | "provider" | "format"
    >
  >
) {
  for (const it of items) {
    const key = await hash(
      cacheKey({
        text: it.text,
        voice: it.voice,
        rate: it.rate ?? 1,
        pitch: it.pitch ?? 0,
        provider: it.provider,
        format: it.format,
      })
    );
    const exist = await get(key, CACHE_DB);
    if (!exist) {
      const blob = await requestTTS({
        text: it.text,
        voice: it.voice,
        rate: it.rate,
        pitch: it.pitch,
        format: it.format,
      });
      await set(key, blob, CACHE_DB);
    }
  }
}

"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Play, Pause, Loader2, Download } from "lucide-react";
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
};

// ===== IndexedDB store =====
const CACHE_DB = createStore("my-english-ai-tts-db", "v1");

// cacheKey CHO PHÉP voice?: string
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

async function hash(input: string) {
  if (globalThis.crypto?.subtle) {
    const enc = new TextEncoder().encode(input);
    const buf = await crypto.subtle.digest("SHA-256", enc);
    const arr = Array.from(new Uint8Array(buf));
    return arr.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  return input;
}

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
  } = props;

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

  return (
    <span className={`inline-flex items-center gap-2 ${className || ""}`}>
      <button
        type="button"
        aria-label={ariaLabel}
        onClick={togglePlay}
        disabled={loading || !text}
        className="rounded-full border px-2 py-1 shadow-sm hover:scale-105 transition disabled:opacity-60"
        title={loading ? "Đang tải âm..." : playing ? "Tạm dừng" : "Nghe phát âm"}
      >
        {loading ? (
          <Loader2 className="animate-spin" size={16} />
        ) : playing ? (
          <Pause size={16} />
        ) : (
          <Play size={16} />
        )}
      </button>

      <div className="h-1 w-20 bg-gray-200 rounded overflow-hidden" aria-hidden>
        <div
          className="h-full bg-gray-500"
          style={{ width: `${pct}%`, transition: "width .2s linear" }}
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

      <audio ref={audioRef} preload="none" />

      {error && (
        <span className="text-xs text-red-600" role="alert">
          {error}
        </span>
      )}
    </span>
  );
}

// ===== tiện ích xoá cache =====
export async function clearTTSCache(providerPrefix: Provider | "all" = "all") {
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

// ===== prefetch nhiều câu 1 lúc =====
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

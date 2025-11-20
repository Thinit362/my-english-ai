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
  Square,
  Volume2,
  X,
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

  /** --------- bổ sung cho phần phát âm ---------- */
  enableRecord?: boolean;         // bật tính năng ghi âm + chấm điểm
  expectedText?: string;          // câu/từ chuẩn để chấm điểm (mặc định = text)
  languageCode?: string;          // mã ngôn ngữ STT, vd: "en-US"
  scoringApiUrl?: string;         // endpoint chấm điểm, mặc định: "/api/pronunciation-score"
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

    // bổ sung
    enableRecord = false,
    expectedText,
    languageCode = "en-US",
    scoringApiUrl = "/api/pronunciation-score",
  } = props;

  // ===== trạng thái TTS gốc =====
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

  // ========= PHẦN GHI ÂM & CHẤM ĐIỂM ==========
  const [recording, setRecording] = useState(false);
  const [recordError, setRecordError] = useState<string | null>(null);
  const [scoring, setScoring] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [scoreMessage, setScoreMessage] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const recordAudioRef = useRef<HTMLAudioElement | null>(null);

  const clearRecordingState = () => {
    chunksRef.current = [];
    if (recordedUrl) {
      URL.revokeObjectURL(recordedUrl);
      setRecordedUrl(null);
    }
  };

  const stopMediaTracks = (stream?: MediaStream | null) => {
    stream?.getTracks().forEach((t) => t.stop());
  };

  const startRecording = useCallback(async () => {
    if (!enableRecord) return;
    setRecordError(null);
    setScore(null);
    setScoreMessage(null);
    setShowResult(false);
    clearRecordingState();

    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        setRecordError("Trình duyệt không hỗ trợ ghi âm.");
        return;
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onerror = (e) => {
        console.error("Recorder error", e);
        setRecordError("Có lỗi khi ghi âm. Vui lòng thử lại.");
        setRecording(false);
        stopMediaTracks(stream);
      };

      mediaRecorder.onstop = async () => {
        stopMediaTracks(stream);
        setRecording(false);

        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        if (!blob.size) {
          setRecordError("Không thu được âm thanh nào.");
          return;
        }

        // Tạo URL để "Nghe lại bài ghi âm"
        const url = URL.createObjectURL(blob);
        setRecordedUrl(url);

        // Gửi lên API để chấm điểm
        try {
          setScoring(true);
          const formData = new FormData();
          formData.append("audio", blob, "recording.webm");
          formData.append("targetText", expectedText || text);
          formData.append("languageCode", languageCode);

          const res = await fetch(scoringApiUrl, {
            method: "POST",
            body: formData,
          });

          if (!res.ok) {
            throw new Error("Không chấm điểm được. Vui lòng thử lại.");
          }

          const data = await res.json();
          const s = typeof data.score === "number" ? data.score : 0;
          setScore(s);

          // nếu backend không trả message, tự sinh
          let msg: string =
            data.message ||
            (s >= 95
              ? "Bạn rất xuất sắc. Cố gắng phát huy nhé!"
              : s >= 80
              ? "Phát âm khá tốt, hãy luyện thêm nhé!"
              : "Bạn nên nghe lại mẫu và luyện tập thêm.");

          setScoreMessage(msg);
          setShowResult(true);
        } catch (err: any) {
          console.error(err);
          setRecordError(
            err?.message || "Có lỗi khi chấm điểm phát âm. Vui lòng thử lại."
          );
        } finally {
          setScoring(false);
        }
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (err: any) {
      console.error(err);
      setRecordError(
        err?.message ||
          "Không truy cập được micro. Hãy kiểm tra quyền truy cập micro của trình duyệt."
      );
      setRecording(false);
    }
  }, [enableRecord, scoringApiUrl, expectedText, text, languageCode]);

  const stopRecording = useCallback(() => {
    const rec = mediaRecorderRef.current;
    if (rec && rec.state !== "inactive") {
      rec.stop();
    }
  }, []);

  const toggleRecording = useCallback(() => {
    if (!enableRecord) return;
    if (recording) {
      stopRecording();
    } else {
      startRecording();
    }
  }, [enableRecord, recording, startRecording, stopRecording]);

  const playRecorded = useCallback(() => {
    if (!recordedUrl || !recordAudioRef.current) return;
    recordAudioRef.current.src = recordedUrl;
    recordAudioRef.current.play().catch(() => {});
  }, [recordedUrl]);

  // cleanup khi unmount
  useEffect(() => {
    return () => {
      stopRecording();
      clearRecordingState();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // =============== RENDER ===============
  return (
    <span className={`relative inline-flex items-center gap-2 ${className || ""}`}>
      {/* nút nghe mẫu TTS */}
      <button
        type="button"
        aria-label={ariaLabel}
        onClick={togglePlay}
        disabled={loading || !text}
        className="rounded-full border px-2 py-1 shadow-sm hover:scale-105 transition disabled:opacity-60 bg-white"
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

      {/* thanh tiến độ TTS */}
      <div className="h-1 w-20 bg-gray-200 rounded overflow-hidden" aria-hidden>
        <div
          className="h-full bg-gray-500"
          style={{ width: `${pct}%`, transition: "width .2s linear" }}
        />
      </div>

      {/* nút ghi âm + chấm điểm */}
      {enableRecord && (
        <button
          type="button"
          onClick={toggleRecording}
          className={`rounded-full border px-2 py-1 shadow-sm hover:scale-105 transition flex items-center gap-1 ${
            recording ? "bg-red-600 text-white" : "bg-white text-red-600"
          }`}
          title={
            recording
              ? "Dừng ghi âm (bấm để chấm điểm)"
              : "Ghi âm phát âm của bạn"
          }
        >
          {recording ? <Square size={14} /> : <Mic size={14} />}
        </button>
      )}

      {showDownload && blobUrl && (
        <a
          href={blobUrl}
          download={`tts-${provider}.${format}`}
          className="inline-flex items-center gap-1 text-xs border px-2 py-1 rounded hover:bg-gray-50 bg-white"
          title="Tải file âm thanh"
        >
          <Download size={14} /> Tải
        </a>
      )}

      <audio ref={audioRef} preload="none" />
      <audio ref={recordAudioRef} preload="none" />

      {(error || recordError) && (
        <span className="text-xs text-red-600" role="alert">
          {error || recordError}
        </span>
      )}

      {/* Popup kết quả giống hình minh hoạ */}
      {enableRecord && showResult && score !== null && (
        <div className="absolute z-20 top-full left-1/2 mt-2 -translate-x-1/2 bg-sky-600 text-white rounded-lg shadow-lg w-64">
          <div className="bg-white text-gray-800 rounded-t-lg px-3 py-2 flex justify-between items-center">
            <div className="text-xs">
              <div className="font-semibold">Bạn đạt</div>
              <div className="text-green-600 text-xl font-bold">
                {score}%
              </div>
            </div>
            <div className="text-xs truncate max-w-[140px] ml-2">{text}</div>
            <button
              className="ml-2 text-gray-400 hover:text-gray-600"
              onClick={() => setShowResult(false)}
              type="button"
            >
              <X size={14} />
            </button>
          </div>

          <div className="px-3 py-2 text-xs text-center">
            {scoreMessage || "Bạn rất xuất sắc. Cố gắng phát huy nhé!"}
          </div>

          <div className="flex border-t border-sky-500">
            <button
              type="button"
              onClick={startRecording}
              className="flex-1 flex items-center justify-center gap-1 px-2 py-2 text-xs border-r border-sky-500 hover:bg-sky-700"
              title="Ghi âm lại"
            >
              <Mic size={14} /> Ghi âm lại
            </button>
            <button
              type="button"
              onClick={playRecorded}
              disabled={!recordedUrl}
              className="flex-1 flex items-center justify-center gap-1 px-2 py-2 text-xs hover:bg-sky-700 disabled:opacity-60"
              title="Nghe lại bài ghi âm"
            >
              <Volume2 size={14} /> Nghe lại bài ghi âm
            </button>
          </div>

          {scoring && (
            <div className="px-3 py-1 text-[11px] text-center bg-sky-700/60">
              <Loader2 className="inline-block mr-1 animate-spin" size={12} />
              Đang chấm điểm...
            </div>
          )}
        </div>
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

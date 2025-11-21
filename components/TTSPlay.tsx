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

  /** Bật ghi âm + chấm điểm */
  enableRecord?: boolean;
  /** Câu mục tiêu để so sánh (nếu không truyền dùng text) */
  expectedText?: string;
  /** Mã ngôn ngữ gửi cho API chấm điểm */
  languageCode?: string;
  /** Endpoint backend dùng để chấm điểm phát âm */
  scoringApiUrl?: string;

  /** Chế độ nhỏ gọn: chỉ hiển thị 2 icon tròn [loa] [mic] */
  compact?: boolean;
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

    enableRecord = false,
    expectedText,
    languageCode = "en-US",
    scoringApiUrl = "/api/pronunciation-score",

    compact = false,
  } = props;

  // ====== TTS playback state ======
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

  // ====== Recording + scoring state ======
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

  const stopTracks = (stream?: MediaStream | null) => {
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
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      recorder.onerror = (e) => {
        console.error("Recorder error", e);
        setRecordError("Có lỗi khi ghi âm. Vui lòng thử lại.");
        setRecording(false);
        stopTracks(stream);
      };

      recorder.onstop = async () => {
        stopTracks(stream);
        setRecording(false);

        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        if (!blob.size) {
          setRecordError("Không thu được âm thanh nào.");
          return;
        }

        const url = URL.createObjectURL(blob);
        setRecordedUrl(url);

        // gọi API chấm điểm
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
            throw new Error("Không chấm điểm được.");
          }

          const data = (await res.json()) as {
            score?: number;
            message?: string;
          };

          const s = typeof data.score === "number" ? data.score : 0;
          setScore(Math.max(0, Math.min(100, Math.round(s))));
          setScoreMessage(
            data.message ||
              (s >= 90
                ? "Bạn rất xuất sắc. Cố gắng phát huy nhé!"
                : s >= 70
                ? "Khá tốt rồi! Hãy luyện thêm một chút nữa."
                : "Hãy thử lại và chú ý hơn đến khẩu hình và trọng âm.")
          );
        } catch (e: any) {
          console.error(e);
          setRecordError(e?.message ?? "Không chấm điểm được.");
        } finally {
          setScoring(false);
          setShowResult(true);
        }
      };

      recorder.start();
      setRecording(true);
    } catch (e: any) {
      console.error(e);
      setRecordError(e?.message ?? "Không thể bắt đầu ghi âm.");
      setRecording(false);
    }
  }, [enableRecord, expectedText, languageCode, scoringApiUrl, text]);

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

  const closeResult = () => {
    setShowResult(false);
  };

  // ====== RENDER UI ======

  // Nút play dạng icon tròn nhỏ
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

  // Nút mic
  const micButton =
    enableRecord && (
      <button
        type="button"
        aria-label="Ghi âm và chấm điểm phát âm"
        onClick={toggleRecording}
        className={`flex items-center justify-center rounded-full border w-7 h-7 shadow-sm text-[11px] transition ${
          recording
            ? "bg-red-500 text-white border-red-500"
            : "bg-white border-red-400 text-red-500 hover:bg-red-50"
        }`}
        title={
          recording ? "Dừng ghi âm" : "Ghi âm phát âm của bạn và chấm điểm"
        }
      >
        {recording ? <Square size={14} /> : <Mic size={14} />}
      </button>
    );

  const wrapperClass = `inline-flex items-center gap-2 ${
    className || ""
  }`;

  return (
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
        </>
      )}

      <audio ref={audioRef} preload="none" />
      <audio ref={recordAudioRef} src={recordedUrl ?? undefined} preload="none" />

      {error && (
        <span className="text-xs text-red-600" role="alert">
          {error}
        </span>
      )}
      {recordError && (
        <span className="text-xs text-red-600" role="alert">
          {recordError}
        </span>
      )}

      {/* Popup kết quả chấm điểm */}
      {enableRecord && showResult && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30">
          <div className="bg-sky-800 text-white rounded-xl shadow-xl w-full max-w-md p-4 relative">
            <button
              type="button"
              onClick={closeResult}
              className="absolute top-2 right-2 text-white/80 hover:text-white"
              aria-label="Đóng"
            >
              <X size={18} />
            </button>

            <div className="bg-white text-sky-900 rounded-lg px-3 py-2 mb-3 flex items-center gap-3">
              <div className="text-xs uppercase text-gray-500">Bạn đạt</div>
              <div className="text-2xl font-bold text-emerald-600">
                {scoring || score === null ? "…" : `${score}%`}
              </div>
              <div className="text-sm truncate flex-1">
                {expectedText || text}
              </div>
            </div>

            <p className="text-center text-sm mb-4">
              {scoring
                ? "Đang chấm điểm phát âm của bạn..."
                : scoreMessage ||
                  "Kết quả luyện phát âm của bạn đã sẵn sàng."}
            </p>

            <div className="flex items-center justify-center gap-3 mt-2">
              <button
                type="button"
                onClick={toggleRecording}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm"
              >
                <Mic size={16} />
                Ghi âm lại (Enter)
              </button>

              {recordedUrl && (
                <button
                  type="button"
                  onClick={() => {
                    if (!recordAudioRef.current) return;
                    recordAudioRef.current.currentTime = 0;
                    recordAudioRef.current.play().catch(() => {});
                  }}
                  className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-full text-sm"
                >
                  <Play size={16} />
                  Nghe lại bài ghi âm
                </button>
              )}
            </div>
          </div>
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

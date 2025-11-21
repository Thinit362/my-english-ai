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

  // ghi âm + chấm điểm
  enableRecord?: boolean;
  expectedText?: string;
  languageCode?: string;
  scoringApiUrl?: string;

  // chế độ nhỏ gọn: chỉ hiển thị 2 icon tròn (play + mic)
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

    // ghi âm + chấm điểm
    enableRecord = false,
    expectedText,
    languageCode = "en-US",
    scoringApiUrl = "/api/pronunciation-score",

    compact = false,
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

        const url = URL.createObjectURL(blob);
        setRecordedUrl(url);

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
            throw new Error("Không chấm điểm được

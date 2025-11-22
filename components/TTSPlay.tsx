"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Play, Pause, Loader2, Mic, Volume2 } from "lucide-react";
import { createStore, get, set } from "idb-keyval";

/* =========================================================
   ⚡ FIX QUAN TRỌNG: KHÔNG BAO GIỜ LẪN ÂM GIỮA TRANG
   ========================================================= */

const CACHE = createStore("tts-db-v3", "tts-store");

/** Hash SHA-256 */
async function sha256(text: string) {
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/** KEY CACHE RÀNG BUỘC THEO *ĐƯỜNG DẪN TRANG* */
async function makeCacheKey(text: string) {
  const path =
    typeof window !== "undefined" ? window.location.pathname : "server";
  return sha256(path + "::" + text);
}

/* =========================================================
   REQUEST TTS
   ========================================================= */
async function fetchTTS(text: string): Promise<Blob> {
  const res = await fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error("TTS error " + res.status);
  return await res.blob();
}

/* =========================================================
   Luyện nói + So sánh kết quả
   ========================================================= */

function norm(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s']/gu, " ")
    .replace(/\s+/g, " ")
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
  const A = norm(target);
  const B = norm(said);
  if (!A || !B) return 0;

  const d = levenshtein(A, B);
  return Math.max(0, Math.min(1, 1 - d / Math.max(A.length, B.length)));
}
export default function TTSPlay({
  text,
  expectedText,
  enableRecord = false,
  compact = false,
}: {
  text: string;
  expectedText?: string;
  enableRecord?: boolean;
  compact?: boolean;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [playing, setPlaying] = useState(false);

  /* ================================
     LOAD AUDIO — FIX CACHE
     ================================ */
  const ensureAudio = useCallback(async () => {
    const key = await makeCacheKey(text);
    let blob = await get(key, CACHE);

    if (!blob) {
      setLoading(true);
      blob = await fetchTTS(text);
      await set(key, blob, CACHE);
      setLoading(false);
    }

    const newUrl = URL.createObjectURL(blob);
    if (url) URL.revokeObjectURL(url);
    setUrl(newUrl);
    return newUrl;
  }, [text, url]);

  /* ================================
     PLAYBACK
     ================================ */
  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlaying(false);
      return;
    }

    try {
      const audioURL = url ?? (await ensureAudio());
      audioRef.current.src = audioURL;
      await audioRef.current.play();
      setPlaying(true);
    } catch (err) {
      console.error("Audio play error", err);
    }
  };

  useEffect(() => {
    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [url]);
  /* ================================
     RECORD & SCORE
     ================================ */

  const [open, setOpen] = useState(false);
  const [said, setSaid] = useState("");
  const [percent, setPercent] = useState<number | null>(null);
  const recRef = useRef<any>(null);

  const startRecord = async () => {
    const SR =
      window.SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      alert("Trình duyệt không hỗ trợ SpeechRecognition.");
      return;
    }

    const r = new SR();
    r.lang = "en-US";
    r.interimResults = false;
    r.maxAlternatives = 1;

    r.onresult = (e: any) => {
      const s = e.results[0][0].transcript || "";
      setSaid(s);
      const p = Math.round(score(expectedText || text, s) * 100);
      setPercent(p);
    };

    r.onerror = () => {};
    recRef.current = r;
    r.start();
  };

  const micButton = enableRecord ? (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="w-7 h-7 rounded-full border border-red-400 text-red-500 grid place-items-center"
    >
      <Mic size={14} />
    </button>
  ) : null;

  const playButton = (
    <button
      type="button"
      onClick={togglePlay}
      className="w-7 h-7 rounded-full border grid place-items-center"
    >
      {loading ? (
        <Loader2 size={14} className="animate-spin" />
      ) : playing ? (
        <Pause size={14} />
      ) : (
        <Volume2 size={14} />
      )}
    </button>
  );
  return (
    <>
      <span className="inline-flex items-center gap-2">
        {playButton}
        {micButton}
        <audio ref={audioRef} />
      </span>

      {open && (
        <div className="fixed inset-0 bg-black/40 grid place-items-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-md shadow-xl border">
            <div className="p-4 border-b flex justify-between">
              <div className="font-semibold">Luyện nói</div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 grid place-items-center"
              >
                ✖
              </button>
            </div>

            <div className="p-4 space-y-3">
              <div className="text-sm">
                Hãy nói: <b>{expectedText || text}</b>
              </div>

              <button
                className="px-4 py-2 rounded bg-blue-600 text-white"
                onClick={startRecord}
              >
                🎤 Bắt đầu ghi âm
              </button>

              {said && (
                <div className="p-3 bg-gray-50 rounded border text-sm">
                  <div className="text-gray-500">Bạn nói:</div>
                  <div className="font-semibold">{said}</div>

                  <div className="mt-2 text-lg font-bold">
                    {percent}% giống mẫu
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

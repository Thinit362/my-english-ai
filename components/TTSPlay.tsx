"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Play, Pause, Mic, Volume2 } from "lucide-react";

type Provider = "custom" | "gemini" | "gcloud" | "azure" | "eleven";
type AudioFormat = "mp3" | "wav" | "ogg";

export type TTSPlayProps = {
  text: string;
  voice?: string;
  rate?: number;        // sẽ map sang Web Speech (default 1)
  pitch?: number;       // GG pitch [-20..20], mình map sang 0..2
  provider?: Provider;  // giữ lại để không vỡ type, nhưng không dùng nữa
  format?: AudioFormat; // giữ lại để không vỡ type, nhưng không dùng nữa
  className?: string;
  ariaLabel?: string;
  prefetch?: boolean;   // không còn tác dụng với Web TTS
  showDownload?: boolean; // Web TTS không có file, sẽ bỏ qua
  onPlayed?: () => void;

  /** Bật luyện nói + chấm điểm */
  enableRecord?: boolean;
  /** Câu/từ mục tiêu để so sánh (mặc định = text) */
  expectedText?: string;
  /** Mã ngôn ngữ cho SpeechRecognition & TTS */
  languageCode?: string;

  /** Hiển thị dạng nhỏ gọn: chỉ 2 icon tròn [loa] [mic] */
  compact?: boolean;
};

/* ========= Web TTS helpers (speechSynthesis) ========= */

type WebTTSOptions = {
  lang?: string;
  rate?: number;
  pitch?: number;
  voiceHint?: string;
  onStart?: () => void;
  onEnd?: () => void;
};

function pickBestVoice(
  voices: SpeechSynthesisVoice[],
  lang = "en-US",
  voiceHint?: string
): SpeechSynthesisVoice | null {
  let candidates = voices.filter(
    (v) =>
      v.lang === lang ||
      v.lang.toLowerCase().startsWith(lang.split("-")[0].toLowerCase() + "-")
  );

  if (!candidates.length) {
    candidates = voices.filter((v) =>
      v.lang.toLowerCase().startsWith("en-")
    );
  }
  if (!candidates.length) return null;

  if (voiceHint) {
    const byName = candidates.find(
      (v) => v.name === voiceHint || v.name.includes(voiceHint)
    );
    if (byName) return byName;
  }

  const priority = candidates.find((v) =>
    /natural|neural|premium/i.test(v.name)
  );
  return priority ?? candidates[0];
}

function speakWithWebTTS(text: string, opts: WebTTSOptions = {}) {
  if (typeof window === "undefined") return;
  const synth = window.speechSynthesis;
  if (!synth) return;

  const { lang = "en-US", rate = 1, pitch = 1, voiceHint, onStart, onEnd } =
    opts;

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = rate;
  utter.pitch = pitch;

  const assignVoice = () => {
    const voices = synth.getVoices();
    if (!voices.length) return;
    const best = pickBestVoice(voices, lang, voiceHint);
    if (best) utter.voice = best;
  };

  assignVoice();

  utter.onstart = () => onStart?.();
  utter.onend = () => onEnd?.();
  utter.onerror = () => onEnd?.();

  if (!utter.voice && typeof synth.onvoiceschanged !== "undefined") {
    const handler = () => {
      assignVoice();
      synth.speak(utter);
      synth.onvoiceschanged = null;
    };
    synth.onvoiceschanged = handler;
  } else {
    synth.speak(utter);
  }
}

/* ========= Helper chấm điểm ========= */

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
    provider = "custom", // không dùng nữa, chỉ giữ cho compat
    format = "mp3",      // không dùng nữa
    className,
    ariaLabel = "Nghe phát âm",
    prefetch = false,    // không dùng nữa
    showDownload = false, // Web TTS không có file để tải
    onPlayed,

    enableRecord = false,
    expectedText,
    languageCode = "en-US",
    compact = false,
  } = props;

  const [isClient, setIsClient] = useState(false);
  const [ttsSupported, setTtsSupported] = useState(false);
  const [playing, setPlaying] = useState(false);

  // ===== luyện nói =====
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [recordError, setRecordError] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  const [recUrl, setRecUrl] = useState<string | null>(null);
  const [said, setSaid] = useState<string>("");
  const [percent, setPercent] = useState<number | null>(null);

  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const srRef = useRef<any>(null);
  const saidRef = useRef<string>("");
  const recUrlRef = useRef<string | null>(null);

  const targetText = expectedText || text;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
      setTtsSupported(!!window.speechSynthesis);
    }
  }, []);

  // Khi text/voice/... đổi -> dừng TTS
  useEffect(() => {
    if (!isClient || !ttsSupported) return;
    window.speechSynthesis?.cancel();
    setPlaying(false);
  }, [text, voice, rate, pitch, isClient, ttsSupported]);

  const togglePlay = useCallback(() => {
    if (!isClient || !ttsSupported || !text) return;

    if (playing) {
      window.speechSynthesis?.cancel();
      setPlaying(false);
      return;
    }

    // map GG pitch [-20..20] sang Web pitch [0..2]
    const pitchNormalized = (() => {
      const p = pitch ?? 0;
      const x = 1 + p / 20; // p=0 ->1; p=20->2; p=-20->0
      return Math.max(0, Math.min(2, x));
    })();

    speakWithWebTTS(text, {
      lang: languageCode || "en-US",
      rate: rate || 1,
      pitch: pitchNormalized,
      voiceHint: voice,
      onStart: () => {
        setPlaying(true);
        onPlayed?.();
      },
      onEnd: () => {
        setPlaying(false);
      },
    });
  }, [isClient, ttsSupported, text, rate, pitch, voice, languageCode, playing, onPlayed]);

  /* ======= Luyện nói + chấm điểm ======= */

  const openPractice = () => {
    setPracticeOpen(true);
    setRecordError(null);
    setRecording(false);

    if (recUrlRef.current) {
      URL.revokeObjectURL(recUrlRef.current);
      recUrlRef.current = null;
    }
    setRecUrl(null);

    saidRef.current = "";
    setSaid("");
    setPercent(null);
  };

  const closePractice = () => {
    setPracticeOpen(false);

    try {
      srRef.current?.stop?.();
    } catch {}

    if (recording) {
      try {
        mediaRef.current?.stop();
      } catch {}
      setRecording(false);
    }
  };

  const scoreNow = useCallback(
    (transcript: string) => {
      const raw = Math.round(calcScore(targetText, transcript) * 100);
      const bounded = Math.max(0, Math.min(100, raw));
      setPercent(bounded);
      return bounded;
    },
    [targetText]
  );

  async function startPracticeRecord() {
    setRecordError(null);

    saidRef.current = "";
    setSaid("");
    setPercent(null);

    // SpeechRecognition
    const sr = setupSR(languageCode);
    if (!sr) {
      setRecordError(
        "Trình duyệt chưa hỗ trợ SpeechRecognition. Hãy dùng Chrome/Edge trên máy tính để chấm điểm."
      );
    } else {
      srRef.current = sr;

      sr.onresult = (e: any) => {
        const transcript = e?.results?.[0]?.[0]?.transcript || "";
        saidRef.current = transcript;
        setSaid(transcript);
        scoreNow(transcript);
      };

      sr.onerror = () => {};

      try {
        sr.start();
      } catch {}
    }

    // MediaRecorder
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const m = new MediaRecorder(stream);
      mediaRef.current = m;
      chunksRef.current = [];
      setRecording(true);

      m.ondataavailable = (e) => {
        if (e.data) chunksRef.current.push(e.data);
      };

      m.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        stream.getTracks().forEach((t) => t.stop());

        const nextUrl = URL.createObjectURL(blob);
        if (recUrlRef.current) URL.revokeObjectURL(recUrlRef.current);
        recUrlRef.current = nextUrl;
        setRecUrl(nextUrl);

        setTimeout(() => {
          const transcript = saidRef.current || "";
          if (transcript) scoreNow(transcript);
          else setPercent(0);
        }, 120);

        try {
          srRef.current?.stop?.();
        } catch {}

        setRecording(false);
      };

      m.start();
    } catch (err) {
      console.error(err);
      setRecording(false);
      setRecordError("Không thể truy cập micro. Vui lòng kiểm tra quyền truy cập.");
      try {
        srRef.current?.stop?.();
      } catch {}
    }
  }

  function stopPracticeRecord() {
    try {
      mediaRef.current?.stop();
    } catch {}
    setRecording(false);
  }

  useEffect(() => {
    return () => {
      try {
        srRef.current?.stop?.();
      } catch {}
      try {
        mediaRef.current?.stop?.();
      } catch {}
      if (recUrlRef.current) {
        URL.revokeObjectURL(recUrlRef.current);
        recUrlRef.current = null;
      }
      if (typeof window !== "undefined") {
        window.speechSynthesis?.cancel();
      }
    };
  }, []);

  const wrapperClass = `inline-flex items-center gap-2 ${className || ""}`;

  const playButton = (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={togglePlay}
      disabled={!text || !ttsSupported}
      className={`flex items-center justify-center rounded-full border shadow-sm w-7 h-7 text-[11px] hover:scale-105 transition disabled:opacity-60 ${
        compact ? "border-gray-300 bg-white" : "px-2 py-1"
      }`}
      title={
        !ttsSupported
          ? "Trình duyệt không hỗ trợ Web Speech TTS"
          : playing
          ? "Dừng phát"
          : "Nghe phát âm"
      }
    >
      {playing ? (
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
        {/* Không còn progress bar & download vì Web TTS không có file mp3 */}
      </span>

      {/* ===== Popup luyện nói ===== */}
      {enableRecord && practiceOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
          <div className="w-full max-w-2xl rounded-xl bg-white shadow-lg border overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="font-semibold">
                Luyện nói – Phát âm:{" "}
                <span className="text-slate-900">{targetText}</span>
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
                  <div className="flex-1 p-3 text-sm">{targetText}</div>
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

              {/* <div className="mt-3 text-center text-xs text-white/90">
                Bạn nói: <span className="font-semibold">{said || "..."}</span>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ========= clearTTSCache & prefetchTTSBatch (no-op cho Web TTS) ========= */

export async function clearTTSCache(
  _providerPrefix: Provider | "all" = "all"
) {
  // Không còn cache audio khi dùng Web Speech API
  return 0;
}

export async function prefetchTTSBatch(
  _items: Array<
    Pick<TTSPlayProps, "text" | "voice" | "rate" | "pitch" | "provider" | "format">
  >
) {
  // Web TTS không cần prefetch. Hàm này giữ lại để không lỗi import.
  return;
}

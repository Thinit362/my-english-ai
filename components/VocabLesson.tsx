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
  imageFile?: string; // "be-admired-for.jpg" hoặc URL
};

type Props = {
  title?: string;
  items: VocabItem[];
  baseImagePath?: string;
};

/** ====== Ghi chú loại từ (tóm lược theo Unit 1 – TA10) ======
 * Bạn có thể điều chỉnh nội dung cho khớp chính xác nguồn bạn dùng.
 */
const POS_NOTES: Record<string, string> = {
  verb:
    "Động từ (v.): Miêu tả hành động hoặc trạng thái (do, walk, be...). Trong câu luôn có ít nhất một động từ.",
  "verb phrase":
    "Cụm động từ (v. phr.): Động từ + thành phần đi kèm (do the washing-up, take out...). Hoạt động như một động từ.",
  "phrasal verb":
    "Cụm động từ hai/tři thành phần (phr. v.): động từ + giới/tiểu từ (take out, look after...).",
  noun:
    "Danh từ (n.): Chỉ người, vật, sự việc, ý niệm (family, chores...). Có thể đứng làm chủ ngữ/tân ngữ.",
  adjective:
    "Tính từ (adj.): Bổ nghĩa cho danh từ hoặc đứng sau các liên động từ (be, seem...).",
  adverb:
    "Trạng từ (adv.): Bổ nghĩa cho động từ/tính từ/toàn câu (always, usually...).",
  preposition:
    "Giới từ (prep.): Nối các thành phần, chỉ quan hệ (in, on, after...).",
  pronoun:
    "Đại từ (pron.): Thay thế cho danh từ (I, you, they, mine...).",
  conjunction:
    "Liên từ (conj.): Nối từ/cụm từ/mệnh đề (and, but, because...).",
  determiner:
    "Hạn định từ (det.): Xác định danh từ (a, an, the, this, my...).",
  interjection:
    "Thán từ: Từ cảm thán (oh!, wow!, hey!).",
};

// Chuẩn hoá chuỗi pos về key trong POS_NOTES
function normalizePOS(pos?: string) {
  if (!pos) return "";
  const p = pos.toLowerCase().replace(/\s+/g, " ").trim();
  if (/(^|\W)(v\.?\s*phr|v\.?\s*phrase)/.test(p)) return "verb phrase";
  if (/(^|\W)(phr\.?\s*v|phrasal verb)/.test(p)) return "phrasal verb";
  if (/^v/.test(p)) return "verb";
  if (/^n/.test(p)) return "noun";
  if (/^adj/.test(p)) return "adjective";
  if (/^adv/.test(p)) return "adverb";
  if (/^prep/.test(p)) return "preposition";
  if (/^pron/.test(p)) return "pronoun";
  if (/^conj/.test(p)) return "conjunction";
  if (/^det/.test(p)) return "determiner";
  if (/^interj/.test(p)) return "interjection";
  return "";
}

/** ===== Web TTS helpers (speechSynthesis) ===== */

type WebTTSOptions = {
  lang?: string;
  rate?: number;
  pitch?: number;
  voiceHint?: string; // ví dụ: "Neural2-D"...
  onStart?: () => void;
  onEnd?: () => void;
};

function pickBestVoice(
  voices: SpeechSynthesisVoice[],
  lang = "en-US",
  voiceHint?: string
): SpeechSynthesisVoice | null {
  let candidates = voices;

  // Ưu tiên đúng lang (vd: en-US), nếu không có thì lấy mọi voice en-*
  candidates = voices.filter(
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

  // Nếu có hint theo tên voice thì ưu tiên
  if (voiceHint) {
    const byNameExact = candidates.find(
      (v) => v.name === voiceHint || v.name.includes(voiceHint)
    );
    if (byNameExact) return byNameExact;
  }

  // Ưu tiên các voice có tên “Natural/Neural/Premium” (thường nghe tự nhiên hơn)
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

  utter.onstart = () => {
    onStart?.();
  };
  utter.onend = () => {
    onEnd?.();
  };
  utter.onerror = () => {
    onEnd?.();
  };

  // Nếu chưa có voices (Firefox / lần đầu load), chờ voiceschanged rồi speak
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

/** ===== helpers cho chấm điểm phát âm ===== */
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
  const [isClient, setIsClient] = useState(false);
  const [ttsSupported, setTtsSupported] = useState(false);

  const [busyId, setBusyId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  // POS popover
  const [posOpenFor, setPosOpenFor] = useState<string | null>(null);

  // Practice popup state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalFor, setModalFor] = useState<{
    id: string;
    text: string;
    label: string;
    voice: string; // chỉ còn là hint cho Web TTS
  } | null>(null);

  const [recUrl, setRecUrl] = useState<string | null>(null);
  const [recoding, setRecoding] = useState(false);
  const mediaRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const [said, setSaid] = useState<string>("");
  const [percent, setPercent] = useState<number | null>(0);

  // ✅ giữ transcript mới nhất
  const saidRef = useRef<string>("");

  // SpeechRecognition instance
  const srRef = useRef<any>(null);

  // voice hint cho Web TTS (giữ tên cũ làm gợi ý)
  const VOICE_WORD = "Neural2-D"; // en-US male-ish
  const VOICE_EXAMPLE = "Neural2-F"; // en-US female-ish

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
      setTtsSupported(!!window.speechSynthesis);

      // đóng popover khi click ra ngoài
      const handler = (e: MouseEvent) => {
        const el = e.target as HTMLElement;
        if (!el.closest?.("[data-pos-pop]")) setPosOpenFor(null);
      };
      window.addEventListener("click", handler);
      return () => window.removeEventListener("click", handler);
    }
    return () => {};
  }, []);

  /** ===== TTS: nói 1 câu bằng Web Speech API ===== */
  function play(text: string, id: string, voiceHint: string) {
    if (!isClient || !ttsSupported || !text) return;

    // Nếu đang phát chính câu đó → dừng
    if (playingId === id && typeof window !== "undefined") {
      window.speechSynthesis?.cancel();
      setPlayingId(null);
      setBusyId(null);
      return;
    }

    setBusyId(id);

    // Hủy mọi lời đọc đang chạy
    if (typeof window !== "undefined") {
      window.speechSynthesis?.cancel();
    }

    speakWithWebTTS(text, {
      lang: "en-US",
      rate: 1,
      pitch: 1,
      voiceHint,
      onStart: () => {
        setPlayingId(id);
      },
      onEnd: () => {
        setPlayingId((current) => (current === id ? null : current));
        setBusyId((current) => (current === id ? null : current));
      },
    });
  }

  async function openPractice(
    id: string,
    text: string,
    label: string,
    voice: string
  ) {
    setModalFor({ id, text, label, voice });
    setRecUrl(null);
    setSaid("");
    saidRef.current = "";
    setPercent(0);
    setModalOpen(true);
  }

  /** ===== Recording + Auto scoring ===== */
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

  async function startRecord() {
    if (!modalFor) return;

    setSaid("");
    saidRef.current = "";
    setPercent(0);

    // --- Speech Recognition (transcript) ---
    const r = setupSR("en-US");
    if (!r) {
      alert(
        "Trình duyệt chưa hỗ trợ chấm điểm bằng giọng nói. Vui lòng dùng Chrome/Edge."
      );
    } else {
      srRef.current = r;

      r.onresult = (e: any) => {
        const saidText = e.results?.[0]?.[0]?.transcript || "";
        saidRef.current = saidText;
        setSaid(saidText);

        const raw = Math.round(score(modalFor.text, saidText) * 100);
        setPercent(Math.max(0, Math.min(100, raw)));
      };

      r.onerror = (err: any) => {
        console.warn("[SpeechRecognition] error:", err);
      };

      r.onend = () => {};

      try {
        r.start();
      } catch (e) {
        console.warn("[SpeechRecognition] start fail:", e);
      }
    }

    // --- Media Recorder (audio playback) ---
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const m = new MediaRecorder(stream);
    mediaRef.current = m;
    chunksRef.current = [];

    m.ondataavailable = (e) => e.data && chunksRef.current.push(e.data);

    m.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      setRecUrl(URL.createObjectURL(blob));
      stream.getTracks().forEach((t) => t.stop());

      if (modalFor) {
        const finalSaid = (saidRef.current || "").trim();
        if (finalSaid) {
          const raw = Math.round(score(modalFor.text, finalSaid) * 100);
          setPercent(Math.max(0, Math.min(100, raw)));
        }
      }

      try {
        srRef.current?.stop?.();
      } catch {}
    };

    m.start();
    setRecoding(true);
  }

  function stopRecord() {
    mediaRef.current?.stop();
    setRecoding(false);
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

        const posKey = normalizePOS(it.pos);
        const posNote = posKey ? POS_NOTES[posKey] : "";

        return (
          <div
            key={it.id}
            className={`relative p-4 border rounded-2xl bg-white transition ${
              isPlaying ? "ring-2 ring-blue-500 bg-blue-50" : ""
            }`}
          >
            <div className="grid grid-cols-12 gap-4">
              {/* Ảnh minh hoạ (góc phải – nổi) */}
              <div className="order-2 col-span-12 md:col-span-3 md:order-2 flex justify-end">
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt={it.word}
                    className="w-full md:w-50 h-50 md:h-50 object-cover rounded-xl border shadow-lg ring-1 ring-black/5"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full md:w-50 h-46 rounded-xl border grid place-items-center text-xs text-gray-400">
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
                    disabled={!isClient || !ttsSupported || isBusy}
                    className="rounded-full border px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-60"
                    title="Nghe phát âm mẫu"
                  >
                    🔊
                  </button>
                  <button
                    onClick={() =>
                      openPractice(it.id, it.word, "Từ vựng", VOICE_WORD)
                    }
                    className="rounded-full border px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200"
                    title="Luyện nói"
                  >
                    🎤
                  </button>
                </div>

                {/* IPA + POS (tăng cỡ chữ + popover) */}
                <div className="mt-1 text-gray-700 flex items-center gap-2 flex-wrap">
                  {it.ipa && <span className="mr-2 text-base">{it.ipa}</span>}
                  {it.pos && (
                    <span
                      data-pos-pop
                      onClick={(e) => {
                        e.stopPropagation();
                        setPosOpenFor((v) => (v === it.id ? null : it.id));
                      }}
                      className="relative cursor-pointer select-none px-2 py-0.5 text-xs rounded bg-amber-50 border border-amber-200 hover:bg-amber-100"
                      title="Nhấp để xem ghi chú loại từ"
                    >
                      {it.pos}
                      {posNote && posOpenFor === it.id && (
                        <div
                          className="ta-popover absolute z-20 mt-2 left-0 w-72 md:w-80 p-3 text-sm leading-relaxed"
                          style={{ ["--ta-arrow-left" as any]: "1.25rem" }}
                          role="tooltip"
                        >
                          <div className="font-semibold mb-1">
                            Ghi chú loại từ
                          </div>
                          <div className="text-gray-700">{posNote}</div>
                        </div>
                      )}
                    </span>
                  )}
                </div>

                {/* Nghĩa tiếng Việt — tăng cỡ chữ */}
                <div className="mt-1 text-lg">{it.vi}</div>

                {(it.exampleEn || it.exampleVi) && (
                  <div className="mt-3 rounded-md bg-gray-50 border p-3">
                    <div className="flex items-start gap-2">
                      <div className="flex-1">
                        {it.exampleEn && (
                          <div className="font-medium">{it.exampleEn}</div>
                        )}
                        {it.exampleVi && (
                          <div className="text-gray-600 mt-1">
                            {it.exampleVi}
                          </div>
                        )}
                      </div>
                      {it.exampleEn && (
                        <div className="flex gap-2">
                          <button
                            onClick={() =>
                              play(
                                it.exampleEn!,
                                it.id + ":ex",
                                VOICE_EXAMPLE
                              )
                            }
                            disabled={!isClient || !ttsSupported}
                            className="rounded-full border px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200 disabled:opacity-60"
                            title="Nghe câu ví dụ"
                          >
                            🔊
                          </button>
                          <button
                            onClick={() =>
                              openPractice(
                                it.id + ":ex",
                                it.exampleEn!,
                                "Câu ví dụ",
                                VOICE_EXAMPLE
                              )
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
                <span className="text-[var(--navy,#0f172a)]">
                  {modalFor.text}
                </span>
              </div>
              <button
                className="rounded-full border w-8 h-8 grid place-items-center bg-gray-50 hover:bg-gray-100"
                onClick={() => {
                  setModalOpen(false);
                  try {
                    srRef.current?.stop?.();
                  } catch {}
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
                    <div
                      className={`mt-1 text-4xl font-extrabold leading-none ${pctColor(
                        percent
                      )}`}
                    >
                      {(percent ?? 0).toFixed(0)}%
                    </div>
                  </div>
                  <div className="flex-1 p-3 text-sm">{modalFor.text}</div>
                </div>
              </div>

              {/* (Optional) show transcript nhỏ */}
              {/* <div className="mt-2 text-xs text-gray-500">Bạn nói: {said || "..."}</div> */}
            </div>

            {/* Khối dưới (xanh) + nút */}
            <div className="mt-3 bg-[#0B5ED7] text-white px-4 py-4">
              <div className="text-sm font-semibold text-center">
                {messageFor(percent)}
              </div>

              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() =>
                    speakWithWebTTS(modalFor.text, {
                      lang: "en-US",
                      voiceHint: modalFor.voice,
                      rate: 1,
                      pitch: 1,
                    })
                  }
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

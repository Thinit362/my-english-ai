import React, { useEffect, useMemo, useRef, useState } from "react";

// ================== Utils & IndexedDB ==================
const DB_NAME = "tts-cache-db";
const DB_STORE = "audios";
const DB_VERSION = 1;
function openIDB() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        db.createObjectStore(DB_STORE, { keyPath: "id" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function idbGet<T = any>(id: string): Promise<T | undefined> {
  const db = await openIDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readonly");
    const store = tx.objectStore(DB_STORE);
    const req = store.get(id);
    req.onsuccess = () => resolve(req.result as T);
    req.onerror = () => reject(req.error);
  });
}
async function idbPut<T = any>(value: T & { id: string }) {
  const db = await openIDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readwrite");
    const store = tx.objectStore(DB_STORE);
    const req = store.put(value);
    req.onsuccess = () => resolve(true);
    req.onerror = () => reject(req.error);
  });
}

// ================== Hash & Blob helpers ==================
async function sha256(text: string) {
  const enc = new TextEncoder();
  const data = enc.encode(text);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
function base64ToBlob(b64: string, mime = "audio/mpeg") {
  const byteString = atob(b64);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
  return new Blob([ab], { type: mime });
}

// ================== Types ==================
interface Line {
  id: string;
  speaker: string;
  text: string;
}
interface WarmupLessonProps {
  title?: string;
  videoId: string;
  lines: Line[];
}

// ================== Google TTS ==================
async function googleTTS({ text, voiceName, languageCode, speakingRate, pitch, apiKey, audioEncoding = "MP3" }: {
  text: string;
  voiceName: string;
  languageCode: string;
  speakingRate: number;
  pitch: number;
  apiKey: string;
  audioEncoding?: "MP3" | "OGG_OPUS" | "LINEAR16";
}) {
  const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;
  const body = {
    input: { text },
    voice: { languageCode, name: voiceName },
    audioConfig: { audioEncoding, speakingRate, pitch },
  };
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Google TTS error ${res.status}`);
  const data = await res.json();
  if (!data.audioContent) throw new Error("No audioContent returned");
  return base64ToBlob(data.audioContent, audioEncoding === "OGG_OPUS" ? "audio/ogg" : "audio/mpeg");
}

function speakWithWebSpeech({ text, rate }: { text: string; rate: number }) {
  return new Promise<void>((resolve, reject) => {
    if (!("speechSynthesis" in window)) return reject(new Error("Web Speech API không hỗ trợ"));
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = rate;
    utter.onend = () => resolve();
    utter.onerror = (e) => reject(e.error);
    speechSynthesis.speak(utter);
  });
}

// ================== Main WarmupLesson ==================
export default function WarmupLesson({ title = "Warm‑up", videoId, lines }: WarmupLessonProps) {
  const [apiKey, setApiKey] = useState<string>("");
  const [engine, setEngine] = useState<"gcloud" | "webspeech">("webspeech");
  const [voiceName, setVoiceName] = useState("en-US-Neural2-A");
  const [languageCode, setLanguageCode] = useState("en-US");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(0);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("warmup-settings");
    if (saved) {
      try {
        const s = JSON.parse(saved);
        setApiKey(s.apiKey || "");
        setEngine(s.engine || "webspeech");
        setVoiceName(s.voiceName || "en-US-Neural2-A");
        setLanguageCode(s.languageCode || "en-US");
        setRate(s.rate || 1);
        setPitch(s.pitch || 0);
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "warmup-settings",
      JSON.stringify({ apiKey, engine, voiceName, languageCode, rate, pitch })
    );
  }, [apiKey, engine, voiceName, languageCode, rate, pitch]);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
  }, []);

  async function playBlob(blob: Blob) {
    const url = URL.createObjectURL(blob);
    const a = audioRef.current!;
    a.src = url;
    await a.play();
    a.onended = () => URL.revokeObjectURL(url);
  }

  async function synthAndPlay(text: string) {
    const id = await sha256(`${engine}|${languageCode}|${voiceName}|${rate}|${pitch}|${text}`);
    const existing: any = await idbGet(id);
    if (existing?.blob) return playBlob(existing.blob);
    if (engine === "gcloud" && apiKey) {
      const blob = await googleTTS({ text, voiceName, languageCode, speakingRate: rate, pitch, apiKey });
      await idbPut({ id, blob, meta: { languageCode, voiceName, rate, pitch, text } });
      return playBlob(blob);
    } else return speakWithWebSpeech({ text, rate });
  }

  async function handlePlayAll() {
    setIsPlayingAll(true);
    for (const line of lines) {
      try { await synthAndPlay(`${line.speaker}: ${line.text}`); } catch (e) { console.error(e); break; }
    }
    setIsPlayingAll(false);
  }

  const youTubeSrc = useMemo(() => `https://www.youtube.com/embed/${videoId}?rel=0`, [videoId]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-5">
        <section className="md:col-span-3">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">{title}</h1>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow">
            <iframe className="w-full h-full" src={youTubeSrc} title="Warmup Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </section>

        <aside className="md:col-span-2 flex flex-col gap-3">
          <div className="p-4 bg-white rounded-2xl shadow">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-lg">Hội thoại</h2>
              <button onClick={handlePlayAll} disabled={isPlayingAll} className="px-3 py-2 rounded-xl bg-black text-white disabled:opacity-50">{isPlayingAll ? "Đang phát..." : "Play All"}</button>
            </div>
            <ul className="space-y-2">
              {lines.map(line => (
                <li key={line.id} className="border rounded-xl p-3 flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 text-xs px-2 py-1 bg-gray-100 rounded-full">{line.speaker}</div>
                  <div className="flex-1">
                    <p className="leading-relaxed">{line.text}</p>
                    <button className="mt-2 px-3 py-1.5 rounded-lg bg-gray-900 text-white" onClick={() => synthAndPlay(`${line.speaker}: ${line.text}`)}>▶︎ Play</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

// ========= Integration for Next.js (Gemini 2.5‑Flash) =========
export async function geminiGenerate({ prompt, system, history }: { prompt: string; system?: string; history?: Array<{role: 'user'|'model'; parts: string}> }) {
  const { GoogleGenerativeAI } = await import("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
  const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL || "gemini-2.5-flash" });
  const chat = model.startChat({ history: (history||[]).map(h=>({role:h.role, parts:[{text:h.parts}]})) });
  const res = await chat.sendMessage([(system? {text: `System: ${system}`} : undefined), { text: prompt }].filter(Boolean) as any);
  const text = await res.response.text();
  return { text };
}

"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

// --- IndexedDB helpers (cache audio cục bộ) ---
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
async function sha256(text: string) {
  const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, "0")).join("");
}
function base64ToBlob(b64: string, mime = "audio/mpeg") {
  const s = atob(b64); const ab = new ArrayBuffer(s.length); const ia = new Uint8Array(ab);
  for (let i = 0; i < s.length; i++) ia[i] = s.charCodeAt(i);
  return new Blob([ab], { type: mime });
}

// --- Types ---
export type Line = { id: string; speaker: string; text: string; };
export default function WarmupLesson({ title = "Warm-up", videoId, lines }: { title?: string; videoId: string; lines: Line[]; }) {
  const [apiKey, setApiKey] = useState("");
  const [engine, setEngine] = useState<"gcloud" | "webspeech">("webspeech");
  const [voiceName, setVoiceName] = useState("en-US-Neural2-A");
  const [languageCode, setLanguageCode] = useState("en-US");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(0);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const s = localStorage.getItem("warmup-settings");
    if (s) { try {
      const v = JSON.parse(s);
      setApiKey(v.apiKey || ""); setEngine(v.engine || "webspeech");
      setVoiceName(v.voiceName || "en-US-Neural2-A"); setLanguageCode(v.languageCode || "en-US");
      setRate(v.rate || 1); setPitch(v.pitch || 0);
    } catch {} }
  }, []);
  useEffect(() => {
    localStorage.setItem("warmup-settings", JSON.stringify({ apiKey, engine, voiceName, languageCode, rate, pitch }));
  }, [apiKey, engine, voiceName, languageCode, rate, pitch]);
  useEffect(() => { if (!audioRef.current) audioRef.current = new Audio(); }, []);

  async function playBlob(blob: Blob) {
    const url = URL.createObjectURL(blob);
    const a = audioRef.current!;
    a.src = url; await a.play(); a.onended = () => URL.revokeObjectURL(url);
  }
  async function googleTTS(text: string) {
    // Gọi thẳng Google TTS từ client (dùng key của HỌC SINH nếu bạn muốn cache offline),
    // hoặc bạn có thể gọi /api/tts nếu muốn ẩn key (server-side).
    const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: { text },
        voice: { languageCode, name: voiceName },
        audioConfig: { audioEncoding: "MP3", speakingRate: rate, pitch },
      }),
    });
    if (!res.ok) throw new Error(`TTS ${res.status}`);
    const data = await res.json();
    return base64ToBlob(data.audioContent);
  }
  function speakWithWebSpeech(text: string) {
    return new Promise<void>((resolve, reject) => {
      if (!("speechSynthesis" in window)) return reject(new Error("Web Speech not supported"));
      const u = new SpeechSynthesisUtterance(text); u.rate = rate; u.onend = () => resolve(); u.onerror = () => reject(new Error("TTS error"));
      speechSynthesis.speak(u);
    });
  }
  async function synthAndPlay(text: string) {
    const id = await sha256(`${engine}|${languageCode}|${voiceName}|${rate}|${pitch}|${text}`);
    const cached: any = await idbGet(id);
    if (cached?.blob) return playBlob(cached.blob);
    if (engine === "gcloud" && apiKey) {
      const blob = await googleTTS(text);
      await idbPut({ id, blob, meta: { languageCode, voiceName, rate, pitch, text } });
      return playBlob(blob);
    } else {
      return speakWithWebSpeech(text);
    }
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
            <iframe className="w-full h-full" src={youTubeSrc} title="Warmup Video" frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>

          <div className="mt-4 p-4 bg-white rounded-2xl shadow grid gap-3">
            <h2 className="font-semibold text-lg">Cài đặt giọng đọc</h2>
            <div className="grid md:grid-cols-2 gap-3 items-center">
              <label className="text-sm opacity-80">Engine</label>
              <select value={engine} onChange={(e) => setEngine(e.target.value as any)} className="border rounded-xl px-3 py-2">
                <option value="gcloud">Google Cloud TTS (có cache offline)</option>
                <option value="webspeech">Web Speech API (không cache)</option>
              </select>

              {engine === "gcloud" && <>
                <label className="text-sm opacity-80">Google API key (lưu cục bộ)</label>
                <input type="password" placeholder="AIza..." value={apiKey} onChange={(e) => setApiKey(e.target.value.trim())} className="border rounded-xl px-3 py-2" />
              </>}

              <label className="text-sm opacity-80">Language code</label>
              <input value={languageCode} onChange={(e) => setLanguageCode(e.target.value)} className="border rounded-xl px-3 py-2" />

              <label className="text-sm opacity-80">Voice name</label>
              <input value={voiceName} onChange={(e) => setVoiceName(e.target.value)} className="border rounded-xl px-3 py-2" />

              <label className="text-sm opacity-80">Tốc độ</label>
              <input type="number" step={0.1} min={0.25} max={4} value={rate} onChange={(e) => setRate(parseFloat(e.target.value))} className="border rounded-xl px-3 py-2" />

              <label className="text-sm opacity-80">Pitch</label>
              <input type="number" step={0.1} min={-20} max={20} value={pitch} onChange={(e) => setPitch(parseFloat(e.target.value))} className="border rounded-xl px-3 py-2" />
            </div>
          </div>
        </section>

        <aside className="md:col-span-2 flex flex-col gap-3">
          <div className="p-4 bg-white rounded-2xl shadow">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold text-lg">Hội thoại</h2>
              <button onClick={handlePlayAll} disabled={isPlayingAll} className="px-3 py-2 rounded-xl bg-black text-white disabled:opacity-50">
                {isPlayingAll ? "Đang phát..." : "Play All"}
              </button>
            </div>
            <ul className="space-y-2">
              {lines.map((l) => (
                <li key={l.id} className="border rounded-xl p-3 flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 text-xs px-2 py-1 bg-gray-100 rounded-full">{l.speaker}</div>
                  <div className="flex-1">
                    <p className="leading-relaxed">{l.text}</p>
                    <button className="mt-2 px-3 py-1.5 rounded-lg bg-gray-900 text-white" onClick={() => synthAndPlay(`${l.speaker}: ${l.text}`)}>
                      ▶︎ Play
                    </button>
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

"use client";
import React, { useState } from "react";

export function Roleplay({ system }: { system?: string }) {
  const [messages, setMessages] = useState<{ role: "user" | "model"; parts: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const prompt = input.trim();
    setMessages((p) => [...p, { role: "user", parts: prompt }]);
    setInput(""); setLoading(true);

    const res = await fetch("/api/gemini/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, system, history: messages }),
    });
    const data = await res.json();
    setMessages((p) => [...p, { role: "model", parts: data.answer || data.text || "..." }]);
    setLoading(false);
  }

  async function ttsPlay(text: string) {
    const r = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, languageCode: "en-US", voiceName: "en-US-Neural2-A", speakingRate: 1, pitch: 0, audioEncoding: "MP3" }),
    });
    const d = await r.json();
    if (!d.audioContent) return;
    new Audio(`data:audio/mpeg;base64,${d.audioContent}`).play();
  }

  return (
    <div className="p-4 bg-white rounded-2xl shadow space-y-3">
      <h3 className="font-semibold text-lg">Role-play với AI (Gemini)</h3>
      <div className="space-y-2 max-h-80 overflow-auto">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
            <div className={`inline-block px-3 py-2 rounded-xl ${m.role === "user" ? "bg-black text-white" : "bg-gray-100"}`}>{m.parts}</div>
            {m.role === "model" && (
              <div className="text-sm mt-1">
                <button className="underline" onClick={() => ttsPlay(m.parts)}>▶︎ Nghe câu trả lời</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input className="flex-1 border rounded-xl px-3 py-2" placeholder="Nhập câu tiếng Anh..." value={input}
          onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} />
        <button onClick={send} disabled={loading} className="px-4 py-2 rounded-xl bg-black text-white disabled:opacity-50">{loading ? "..." : "Gửi"}</button>
      </div>
    </div>
  );
}

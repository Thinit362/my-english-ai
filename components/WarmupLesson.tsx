"use client";
import React, { useMemo, useRef, useState } from "react";

export type Line = { id: string; speaker: string; text: string };

type Props = {
  title?: string;
  videoId?: string;            // nếu có video YouTube thì truyền ID
  lines: Line[];
};

// gọi Cloud TTS trên server (route /api/tts đã có sẵn)
async function synthToDataUrl(text: string) {
  const res = await fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,                       // chỉ nội dung câu, không kèm speaker
      languageCode: "en-US",
      voiceName: "en-US-Neural2-A",
      speakingRate: 1,
      pitch: 0,
      audioEncoding: "MP3",
    }),
  });
  const data = await res.json();
  if (!data?.audioContent) throw new Error("TTS failed");
  return `data:audio/mpeg;base64,${data.audioContent}`;
}

export default function WarmupDialogue({ title = "Warm-up", videoId, lines }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  // cache đơn giản để không gọi TTS lại cho câu đã phát
  const cacheRef = useRef<Map<string, string>>(new Map());

  if (!audioRef.current) audioRef.current = new Audio();

  async function toggle(line: Line) {
    const a = audioRef.current!;
    // đang phát đúng câu => dừng
    if (playingId === line.id && !a.paused) {
      a.pause();
      a.currentTime = 0;
      setPlayingId(null);
      return;
    }

    try {
      // nếu đang phát câu khác -> dừng trước
      if (!a.paused) {
        a.pause();
        a.currentTime = 0;
      }

      // lấy source từ cache hoặc gọi TTS
      let src = cacheRef.current.get(line.id);
      if (!src) {
        src = await synthToDataUrl(line.text); // chỉ đọc text
        cacheRef.current.set(line.id, src);
      }
      a.src = src;
      setPlayingId(line.id);
      await a.play();
      a.onended = () => setPlayingId(null);
    } catch (e) {
      console.error(e);
      setPlayingId(null);
    }
  }

  const youTubeSrc = useMemo(
    () => (videoId ? `https://www.youtube.com/embed/${videoId}?rel=0` : ""),
    [videoId]
  );

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {title && <h1 className="text-xl font-semibold text-center">{title}</h1>}

      {videoId && (
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow">
          <iframe
            className="w-full h-full"
            src={youTubeSrc}
            title="Warm-up Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}

      <div className="space-y-3">
        {lines.map((l) => (
          <div
            key={l.id}
            className="flex items-start gap-3 p-3 border rounded-xl bg-white"
          >
            <span className="font-semibold w-16 shrink-0 text-gray-600">
              {l.speaker}
            </span>

            <div className="flex-1 leading-relaxed">{l.text}</div>

            <button
              onClick={() => toggle(l)}
              aria-label={playingId === l.id ? "Stop" : "Play"}
              title={playingId === l.id ? "Stop" : "Play"}
              className="shrink-0 rounded-full border px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200"
            >
              {playingId === l.id ? "⏸ Stop" : "▶ Play"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

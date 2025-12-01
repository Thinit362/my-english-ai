"use client";

import React, { useState, useRef } from "react";

interface RecordItem {
  id: string;
  sentence: string;
  focusWords?: string[];
}

interface RecordDataset {
  id: string;
  title: string;
  note?: string;
  items: RecordItem[];
}

interface Props {
  dataset: RecordDataset;
}

const RecordCompareGame: React.FC<Props> = ({ dataset }) => {
  const [recordings, setRecordings] = useState<Record<string, string>>({});
  const [activeId, setActiveId] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);

  // TTS: phát câu mẫu
  const playModel = async (sentence: string) => {
    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: sentence,
          languageCode: "en-US",
          voice: "en-US-Wavenet-D",
        }),
      });

      if (!res.ok) {
        console.error("TTS error");
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.play();
      audio.onended = () => URL.revokeObjectURL(url);
    } catch (e) {
      console.error("TTS play error", e);
    }
  };

  const startRecording = async (itemId: string) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];
      setActiveId(itemId);

      recorder.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setRecordings((prev) => ({ ...prev, [itemId]: url }));
        setActiveId(null);
        stream.getTracks().forEach((t) => t.stop());
      };

      recorder.start();
    } catch (e) {
      console.error("Record error", e);
      alert("Trình duyệt của bạn không cho phép ghi âm (micro).");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    }
  };

  const playRecording = (itemId: string) => {
    const url = recordings[itemId];
    if (!url) return;
    const audio = new Audio(url);
    audio.play();
  };

  const completed = Object.keys(recordings).length;

  const highlightSentence = (sentence: string, focusWords?: string[]) => {
    if (!focusWords || focusWords.length === 0) return sentence;

    const pattern = new RegExp(
      `\\b(${focusWords.map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`,
      "gi"
    );

    const parts = sentence.split(pattern);

    return (
      <>
        {parts.map((part, idx) =>
          focusWords.some(
            (fw) => fw.toLowerCase() === part.toLowerCase()
          ) ? (
            <strong key={idx} className="text-red-600">
              {part}
            </strong>
          ) : (
            <span key={idx}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 md:p-6">
      <h2 className="font-semibold text-lg mb-2">{dataset.title}</h2>
      {dataset.note && (
        <p className="mb-4 text-sm text-slate-700">{dataset.note}</p>
      )}

      {dataset.items.map((item, index) => {
        const hasRecording = !!recordings[item.id];
        const isRecording = activeId === item.id;

        return (
          <div
            key={item.id}
            className="mb-4 p-3 rounded-lg bg-white shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center bg-blue-200 rounded font-semibold">
                  {index + 1}.
                </span>
                <button
                  type="button"
                  onClick={() => playModel(item.sentence)}
                  className="px-3 py-1 text-sm rounded bg-blue-600 hover:bg-blue-700 text-white"
                >
                  🔊 Nghe mẫu
                </button>
              </div>

              <div className="flex items-center gap-2">
                {!isRecording ? (
                  <button
                    type="button"
                    onClick={() => startRecording(item.id)}
                    className="px-3 py-1 text-sm rounded bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    🎙 Ghi âm
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={stopRecording}
                    className="px-3 py-1 text-sm rounded bg-red-600 hover:bg-red-700 text-white"
                  >
                    ⏹ Dừng
                  </button>
                )}

                {hasRecording && (
                  <button
                    type="button"
                    onClick={() => playRecording(item.id)}
                    className="px-3 py-1 text-sm rounded bg-slate-200 hover:bg-slate-300 text-slate-800"
                  >
                    ▶ Nghe lại
                  </button>
                )}
              </div>
            </div>

            <p className="text-sm text-slate-800">
              {highlightSentence(item.sentence, item.focusWords)}
            </p>
          </div>
        );
      })}

      <div className="mt-4 text-sm font-semibold text-slate-800">
        Bạn đã luyện xong:{" "}
        <span className="text-blue-700">
          {completed}/{dataset.items.length} câu
        </span>
      </div>
    </div>
  );
};

export default RecordCompareGame;

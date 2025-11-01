"use client";
import { useState } from "react";

export default function LessonChat({
  lessonTitle,
  lessonContent,
}: {
  lessonTitle: string;
  lessonContent: string; // text của bài học từ DB
}) {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [busy, setBusy] = useState(false);

  async function send() {
    const prompt = input.trim();
    if (!prompt || busy) return;
    setBusy(true);
    setReply("");

    // gọi route streaming đã triển khai ở /gemini/chat/route.ts
    const res = await fetch("/gemini/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt,
        systemPrompt:
          "Bạn là gia sư thân thiện. Chỉ dựa trên TÀI LIỆU BÀI HỌC. Nếu câu hỏi vượt ngoài phạm vi, phải nói rõ.",
        context: `TÊN BÀI: ${lessonTitle}\n\nTÀI LIỆU BÀI HỌC:\n${lessonContent}`,
      }),
    });

    if (!res.body) {
      setReply("(Không nhận được stream)");
      setBusy(false);
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let done = false;
    while (!done) {
      const chunk = await reader.read();
      done = chunk.done;
      if (chunk.value) setReply((r) => r + decoder.decode(chunk.value));
    }
    setBusy(false);
  }

  return (
    <div className="space-y-3">
      <div className="text-sm text-gray-600">
        Đang luyện theo bài: <b>{lessonTitle}</b>
      </div>
      <div className="grid gap-2 border rounded p-3 h-72 overflow-auto bg-white/80">
        <pre className="whitespace-pre-wrap text-sm">{reply}</pre>
        {busy && <div className="text-xs opacity-70">Đang soạn trả lời…</div>}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border rounded px-3 py-2 text-sm"
          placeholder="Nhập câu hỏi theo bài này…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button
          onClick={send}
          disabled={busy}
          className="px-4 py-2 rounded bg-[navy] text-white disabled:opacity-60"
        >
          Gửi
        </button>
      </div>
    </div>
  );
}

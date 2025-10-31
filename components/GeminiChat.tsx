"use client";
import { useEffect, useRef, useState } from "react";

export type Message = { role: "user" | "ai"; content: string };

export default function GeminiChat({
  pageKey,
  units,
  fixedUnit = false,
  autoWelcome = true,
  suggestions,
}: {
  pageKey: "eng10" | "eng11" | "eng12" | "advisor";
  units: number[];
  fixedUnit?: boolean;
  autoWelcome?: boolean;
  /** Nếu muốn tự truyền prompt gợi ý từ trang cha */
  suggestions?: string[];
}) {
  const [unit, setUnit] = useState<number>(units[0] || 1);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [busy, setBusy] = useState(false);
  const viewRef = useRef<HTMLDivElement>(null);

  const storageKey = `gemini:chat:${pageKey}:unit${unit}`;

  // cuộn xuống khi có tin nhắn mới + lưu lịch sử
  useEffect(() => {
    viewRef.current?.scrollTo({ top: viewRef.current.scrollHeight, behavior: "smooth" });
    try {
      localStorage.setItem(storageKey, JSON.stringify(messages));
    } catch {}
  }, [messages, storageKey]);

  // khôi phục lịch sử theo namespace
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        setMessages(JSON.parse(raw) as Message[]);
        return;
      }
    } catch {}
    if (autoWelcome) {
      setMessages([
        {
          role: "ai",
          content:
            "Xin chào! 👋 Tôi là **Gemini – Trợ lý học Tiếng Anh THPT**.\n\nBạn muốn tôi giúp gì hôm nay?\n• Gợi ý lộ trình học theo mục tiêu? 📅\n• Ôn ngữ pháp/từ vựng/kỹ năng? 📘\n• Kiểm tra trình độ ban đầu? 🎯",
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  // Prompt gợi ý “chuẩn THPT”
  const prompts =
    suggestions && suggestions.length > 0
      ? suggestions
      : [
          "🎯 Lộ trình 4–8 tuần để đạt 8+ môn Tiếng Anh THPT Quốc Gia (theo mức hiện tại của em).",
          "🧱 Sơ đồ ngữ pháp trọng tâm lớp 10–11–12 + thứ tự nên học và bài tập mẫu.",
          "📚 Kế hoạch ôn Tiếng Anh 12 trước kỳ thi tốt nghiệp (theo tuần, có tài liệu gợi ý).",
          "🎧 Luyện nghe hiệu quả tại nhà: tài nguyên miễn phí + lịch luyện 30 phút/ngày.",
          "🗣️ 5 chủ đề luyện nói thường gặp + tiêu chí chấm điểm + câu hỏi follow-up.",
          "📝 Mẫu viết đoạn văn nghị luận (150–180 từ) + rubric chấm và 6 bài tập thực hành.",
          "📖 10 chủ điểm từ vựng bắt buộc (Education, Environment, Technology, Health, Culture, ...)",
          "💬 Tư vấn lộ trình từ 5 → 8 điểm trong 3 tháng (học gì mỗi ngày/mỗi tuần).",
          "🧠 Flashcards + lặp lại ngắt quãng để học 300 từ vựng nền tảng trong 6 tuần.",
          "🤖 Cách dùng Gemini để chấm bài viết, gợi ý sửa lỗi và tạo đề ôn theo Unit hiện tại.",
        ];

  async function sendToApi(content: string) {
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pageKey, unit, message: content }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || `HTTP ${res.status}`);
      setMessages((m) => [...m, { role: "ai", content: data.answer || "(Không có phản hồi từ Gemini)" }]);
    } catch (e: any) {
      setMessages((m) => [...m, { role: "ai", content: `(Lỗi gọi API: ${e?.message ?? "không xác định"})` }]);
    } finally {
      setBusy(false);
    }
  }

  async function send(preset?: string) {
    const content = (preset ?? input).trim();
    if (!content || busy) return;
    setMessages((m) => [...m, { role: "user", content }]);
    setInput("");
    await sendToApi(content);
  }

  function clearChat() {
    const welcome =
      autoWelcome
        ? [
            {
              role: "ai",
              content:
                "Mình đã làm mới hội thoại. Hãy nói cho mình mục tiêu của bạn (thi, giao tiếp, hay cải thiện kỹ năng cụ thể) nhé!",
            },
          ]
        : [];
    setMessages(welcome as Message[]);
    try {
      localStorage.removeItem(storageKey);
    } catch {}
  }

  return (
    <div className="w-full">
      {/* thanh thông tin nhỏ */}
      <div className="flex items-center justify-between mb-2 gap-2">
        <div className="text-xs sm:text-sm opacity-70">
          Namespace: <code>{pageKey}/unit{unit}</code>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm">Unit</label>
          <select
            className="border rounded px-2 py-1 text-sm"
            value={unit}
            disabled={fixedUnit}
            onChange={(e) => setUnit(parseInt(e.target.value))}
            aria-label="Chọn Unit"
          >
            {units.map((u) => (
              <option key={u} value={u}>
                Unit {u}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={clearChat}
            className="text-xs border rounded px-2 py-1 bg-white hover:bg-slate-50"
            title="Xoá hội thoại"
          >
            Xoá
          </button>
        </div>
      </div>

      {/* gợi ý nhanh */}
      <div className="grid gap-2 mb-3 max-h-40 overflow-auto pr-1">
        {prompts.map((p, i) => (
          <button
            key={i}
            onClick={() => send(p)}
            disabled={busy}
            className="text-left text-sm border rounded px-3 py-2 bg-white hover:bg-slate-50 focus:ring-2 focus:ring-[navy] disabled:opacity-60 transition"
            type="button"
          >
            {p}
          </button>
        ))}
      </div>

      {/* khu vực chat */}
      <div
        ref={viewRef}
        className="grid gap-2 border rounded p-3 h-72 overflow-auto bg-white/80"
        aria-live="polite"
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={`text-sm leading-relaxed max-w-[90%] border rounded px-3 py-2 whitespace-pre-line ${
              m.role === "user"
                ? "justify-self-end bg-blue-50 border-blue-200"
                : "justify-self-start bg-slate-50 border-slate-200"
            }`}
          >
            {m.content}
          </div>
        ))}
        {busy && <div className="text-xs opacity-70">Đang soạn trả lời…</div>}
      </div>

      {/* ô nhập */}
      <div className="flex gap-2 mt-3">
        <textarea
          className="flex-1 border rounded px-3 py-2 text-sm resize-y min-h-[40px] max-h-32"
          placeholder="Nhập câu hỏi… (Enter: gửi • Shift+Enter: xuống dòng)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void send();
            }
          }}
        />
        <button
          onClick={() => send()}
          disabled={busy}
          className="px-4 py-2 rounded bg-[navy] text-white hover:opacity-90 disabled:opacity-60"
          type="button"
        >
          Gửi
        </button>
      </div>
    </div>
  );
}

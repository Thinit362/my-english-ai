"use client";
import { useEffect, useRef, useState } from "react";
type Message = { role: "user" | "ai"; content: string };
export default function GeminiChat({
  pageKey,
  units,
  fixedUnit = false, // ✅ thêm dòng này
}: {
  pageKey: "eng10" | "eng11" | "eng12";
  units: number[];
  fixedUnit?: boolean; // ✅ khai báo prop
}) {
const [unit, setUnit] = useState<number>(units[0] || 1);
const [input, setInput] = useState("");
const [messages, setMessages] = useState<Message[]>([]);
const viewRef = useRef<HTMLDivElement>(null);
useEffect(() => {
viewRef.current?.scrollTo({ top: viewRef.current.scrollHeight, behavior: "smooth" });
}, [messages]);


const send = async () => {
if (!input.trim()) return;
const userMsg: Message = { role: "user", content: input };
setMessages((m) => [...m, userMsg]);
setInput("");


const res = await fetch("/api/chat", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ pageKey, unit, message: userMsg.content })
});
const data = await res.json();
const aiMsg: Message = { role: "ai", content: data.answer || "(không có phản hồi)" };
setMessages((m) => [...m, aiMsg]);
};


return (
<div className="chatbox">
<div style={{ display: "flex", gap: 8, alignItems: "center" }}>
<label>Unit:</label>
<select className="select" value={unit} onChange={(e) => setUnit(parseInt(e.target.value))}>
{units.map((u) => (
<option key={u} value={u}>Unit {u}</option>
))}
</select>
</div>


<div ref={viewRef} style={{ maxHeight: 360, overflow: "auto", display: "grid", gap: 8 }}>
{messages.map((m, i) => (
<div key={i} className={`msg ${m.role}`}>{m.content}</div>
))}
</div>


<div style={{ display: "flex", gap: 8 }}>
<input className="input" placeholder="Nhập câu hỏi..." value={input} onChange={(e) => setInput(e.target.value)} />
<button className="button" onClick={send}>Gửi</button>
</div>


<small>Trợ lý giới hạn theo namespace: <code>{pageKey}/unit{unit}</code></small>
</div>
);
}

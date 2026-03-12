// lib/gemini.ts
// Helpers cho Google Gemini chạy phía server (Next.js App Router).
// npm i @google/generative-ai

import {
  GoogleGenerativeAI,
  type GenerativeModel,
  type Content,
  type Part,
} from "@google/generative-ai";

// ==== Config & API key helpers =====================================

export const GEMINI_MODEL =
  process.env.GEMINI_MODEL?.trim() || "gemini-2.5-flash";

/** Đọc API key theo các tên biến bạn đang dùng */
function getApiKey(): string {
  const key =
    process.env.GOOGLE_GEMINI_API_KEY ||
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.NEXT_PUBLIC_GEMINI_API_KEY || // (không khuyến nghị public, nhưng vẫn hỗ trợ)
    "";

  if (!key) {
    throw new Error(
      "Missing GOOGLE_GEMINI_API_KEY (hoặc GEMINI_API_KEY/GOOGLE_API_KEY/NEXT_PUBLIC_GEMINI_API_KEY)"
    );
  }
  return key;
}

function getModel(): GenerativeModel {
  const genAI = new GoogleGenerativeAI(getApiKey());
  return genAI.getGenerativeModel({ model: GEMINI_MODEL });
}

// ==== Types =========================================================

export type ChatTurn = { role: "user" | "model"; parts: string };

function toHistory(history: ChatTurn[] = []): Content[] {
  return history.map((h) => ({
    role: h.role,
    parts: [{ text: h.parts } as Part],
  }));
}

// ==== Public APIs ===================================================

/** Gọi 1 lần – không duy trì phiên chat. Trả về text thuần. */
export async function generateText(prompt: string, system?: string) {
  if (!prompt?.trim()) throw new Error("prompt must be a non-empty string");
  const model = getModel();

  const parts: Part[] = [];
  if (system?.trim()) parts.push({ text: `System: ${system.trim()}` });
  parts.push({ text: prompt });

  const res = await model.generateContent({
    contents: [{ role: "user", parts }],
  });
  return res.response.text();
}

/** Gửi 1 lượt chat với lịch sử cũ, trả về text + lịch sử mới. */
export async function chatSend(args: {
  prompt: string;
  history?: ChatTurn[];
  system?: string;
}) {
  const { prompt, history = [], system } = args;
  if (!prompt?.trim()) throw new Error("prompt must be a non-empty string");

  const model = getModel();
  const chat = model.startChat({ history: toHistory(history) });

  const sendParts: Part[] = [];
  if (system?.trim()) sendParts.push({ text: `System: ${system.trim()}` });
  sendParts.push({ text: prompt });

  const res = await chat.sendMessage(sendParts);
  const text = res.response.text();

  const newHistory: ChatTurn[] = [
    ...history,
    { role: "user", parts: prompt },
    { role: "model", parts: text },
  ];

  return { text, history: newHistory, model: GEMINI_MODEL };
}

/**
 * Yêu cầu Gemini trả **JSON hợp lệ** (không bọc ```).
 * Trả { data (đã parse nếu hợp lệ), jsonText (raw) }.
 */
export async function generateJSON<T = unknown>(
  instruction: string,
  history: ChatTurn[] = [],
  system?: string
) {
  const model = getModel();
  const chat = model.startChat({
    history: toHistory(history),
    generationConfig: { responseMimeType: "application/json" },
  });

  const prompt =
    `${system ? `System: ${system}\n` : ""}` +
    `Return ONLY JSON (no markdown, no code fences). ${instruction}`;

  const res = await chat.sendMessage([{ text: prompt }]);
  const jsonText = res.response.text();

  try {
    const data = JSON.parse(jsonText) as T;
    return { data, jsonText };
  } catch {
    // Nếu model trả thêm ký tự thừa -> để caller tự xử lý
    return { data: undefined as unknown as T, jsonText };
  }
}

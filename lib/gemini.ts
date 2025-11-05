// lib/gemini.ts
// Server-only helpers for Google Gemini on Next.js (App Router).
// Model default: gemini-2.5-flash
// Requires: npm i @google/generative-ai

import { GoogleGenerativeAI, Content, Part } from "@google/generative-ai";

// ---- Config ----
export const GEMINI_MODEL =
  process.env.GEMINI_MODEL?.trim() || "gemini-2.5-flash";

function assertEnv() {
  if (!process.env.GOOGLE_API_KEY) {
    throw new Error(
      "Missing GOOGLE_API_KEY. Set it in your Vercel Project > Settings > Environment Variables."
    );
  }
}

// Convert our plain history format to Gemini Content[]
export type ChatTurn = { role: "user" | "model"; parts: string };
function toHistory(history: ChatTurn[] = []): Content[] {
  return history.map((h) => ({
    role: h.role,
    parts: [{ text: h.parts } as Part],
  }));
}

function client() {
  assertEnv();
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
  return genAI.getGenerativeModel({ model: GEMINI_MODEL });
}

// ---- Public APIs ----

/**
 * Basic one-shot generation (no persistent chat).
 * Returns plain text.
 */
export async function geminiGenerateText(opts: {
  prompt: string;
  system?: string;
}) {
  const { prompt, system } = opts;
  const model = client();
  const parts: Part[] = [];

  if (system?.trim()) parts.push({ text: `System: ${system.trim()}` });
  parts.push({ text: prompt });

  const res = await model.generateContent({ contents: [{ role: "user", parts }] });
  const text = res.response.text();
  return { text };
}

/**
 * Chat style: send a message with optional previous history.
 * Returns plain text and echoes back the normalized history for convenience.
 */
export async function geminiChatSend(opts: {
  prompt: string;
  history?: ChatTurn[];
  system?: string;
}) {
  const { prompt, history = [], system } = opts;
  const model = client();
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

  return { text, history: newHistory };
}

/**
 * Ask Gemini to return **valid JSON** (as string) matching your instruction.
 * You can JSON.parse on the caller side.
 */
export async function geminiGenerateJSON(opts: {
  instruction: string; // describe the JSON you want
  history?: ChatTurn[];
  system?: string;
}) {
  const { instruction, history = [], system } = opts;
  const model = client();

  const chat = model.startChat({
    history: toHistory(history),
    // Hint the model to output JSON only
    // (SDK supports response_mime_type but text coercion works well too)
    generationConfig: { responseMimeType: "application/json" },
  });

  const prompt =
    `${system ? `System: ${system}\n` : ""}` +
    `Return ONLY JSON (no markdown/code fences). ${instruction}`;

  const res = await chat.sendMessage([{ text: prompt }]);
  const jsonText = res.response.text(); // should be raw JSON
  return { jsonText };
}

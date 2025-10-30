"use client";

import { useState } from "react";
import GeminiChat from "./GeminiChat";

interface Block {
  type: "text" | "image" | "audio" | "mcq" | "cloze";
  content: any;
}

interface Section {
  type: "learn" | "practice";
  blocks: Block[];
}

interface Lesson {
  title: string;
  sections: Section[];
}

interface Unit {
  index: number;
  title: string;
  lessons: Lesson[];
}

interface LessonTabsProps {
  grade: 10 | 11 | 12;
  unitIndex: number;
  unit: Unit;
  fixedUnit?: boolean; // ✅ khai báo prop hợp lệ
}

export default function LessonTabs({
  grade,
  unitIndex,
  unit,
  fixedUnit = false, // ✅ default value
}: LessonTabsProps) {
  const [tab, setTab] = useState<"learn" | "practice" | "chat">("learn");

  const learnBlocks =
    unit?.lessons?.flatMap(
      (l) => l.sections?.find((s) => s.type === "learn")?.blocks || []
    ) || [];

  const practiceBlocks =
    unit?.lessons?.flatMap(
      (l) => l.sections?.find((s) => s.type === "practice")?.blocks || []
    ) || [];

  return (
    <div className="section">
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button
          className={`button ${tab === "learn" ? "" : "secondary"}`}
          onClick={() => setTab("learn")}
        >
          Học
        </button>
        <button
          className={`button ${tab === "practice" ? "" : "secondary"}`}
          onClick={() => setTab("practice")}
        >
          Luyện tập
        </button>
        <button
          className={`button ${tab === "chat" ? "" : "secondary"}`}
          onClick={() => setTab("chat")}
        >
          Trợ lý Gemini
        </button>
      </div>

      {tab === "learn" && (
        <div className="grid">
          {learnBlocks.length ? (
            learnBlocks.map((b, i) => (
              <div key={i} className="card">
                {b.type === "text" && (
                  <div dangerouslySetInnerHTML={{ __html: b.content }} />
                )}
                {b.type === "image" && <img src={b.content} alt={`learn-${i}`} />}
                {b.type === "audio" && <audio controls src={b.content} />}
              </div>
            ))
          ) : (
            <p>Chưa có nội dung học.</p>
          )}
        </div>
      )}

      {tab === "practice" && (
        <div className="grid">
          {practiceBlocks.length ? (
            practiceBlocks.map((b, i) => (
              <div key={i} className="card">
                {b.type === "mcq" && (
                  <>
                    <h3>{b.content.question}</h3>
                    <ul>
                      {b.content.options.map((opt: string, idx: number) => (
                        <li key={idx}>{opt}</li>
                      ))}
                    </ul>
                    {b.content.answer && (
                      <details>
                        <summary>Đáp án</summary>
                        <p>{b.content.answer}</p>
                      </details>
                    )}
                  </>
                )}
                {b.type === "cloze" && (
                  <>
                    <h3>Điền khuyết</h3>
                    <p>{b.content.text}</p>
                  </>
                )}
                {b.type === "text" && (
                  <div dangerouslySetInnerHTML={{ __html: b.content }} />
                )}
              </div>
            ))
          ) : (
            <p>Chưa có bài luyện tập.</p>
          )}
        </div>
      )}

      {tab === "chat" && (
        <GeminiChat
          pageKey={
            grade === 10 ? "eng10" : grade === 11 ? "eng11" : "eng12"
          }
          units={[unitIndex]}
          fixedUnit={fixedUnit} // ✅ truyền prop hợp lệ
        />
      )}
    </div>
  );
}

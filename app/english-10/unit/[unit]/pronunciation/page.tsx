// app/english-10/unit/[unit]/pronunciation/page.tsx

import { notFound } from "next/navigation";
import {
  findPronunciationByUnit,
  PronunciationItem,
} from "@/content/english10.pronunciation";
import TTSPlay from "@/components/TTSPlay";

interface PageProps {
  params: { unit: string };
}

/**
 * Tô màu phần âm cần luyện trong chuỗi IPA, ví dụ highlight="/kl/"
 */
function renderIpa(ipa?: string, highlight?: string) {
  if (!ipa) return null;
  if (!highlight) {
    return <span>/{ipa}/</span>;
  }

  const idx = ipa.indexOf(highlight);
  if (idx === -1) {
    return <span>/{ipa}/</span>;
  }

  const before = ipa.slice(0, idx);
  const target = ipa.slice(idx, idx + highlight.length);
  const after = ipa.slice(idx + highlight.length);

  return (
    <span>
      /{before}
      <span className="text-orange-600 font-semibold">{target}</span>
      {after}/
    </span>
  );
}

export default function PronunciationPage({ params }: PageProps) {
  const unitNumber = Number(params.unit);
  const data = findPronunciationByUnit(unitNumber);

  if (!data) return notFound();

  const block = data.pronunciation;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <header className="space-y-1">
        <p className="text-xs uppercase text-gray-400">
          English 10 – Unit {unitNumber}
        </p>
        <h1 className="text-2xl font-bold">{block.title}</h1>
        <p className="text-sm text-gray-700">{block.focus}</p>
      </header>

      {/* Giải thích */}
      <section className="space-y-3 bg-white rounded-xl shadow p-4">
        <h2 className="font-semibold text-lg">1. Cách phát âm</h2>
        <p className="text-sm text-gray-700 whitespace-pre-line">
          {block.viExplain}
        </p>

        {block.tips && block.tips.length > 0 && (
          <>
            <h3 className="font-semibold text-sm mt-2">Mẹo luyện phát âm:</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {block.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </>
        )}
      </section>

      {/* Ví dụ + mic + chấm điểm */}
      <section className="space-y-3 bg-white rounded-xl shadow p-4">
        <h2 className="font-semibold text-lg">2. Các ví dụ luyện phát âm</h2>
        <p className="text-xs text-gray-500 mb-1">
          Bấm <strong>🔊</strong> để nghe mẫu, sau đó bấm{" "}
          <strong>🎙</strong> để ghi âm. Hệ thống sẽ tự động so sánh với mẫu
          và hiện % giống như hình “Bạn đạt 100%”.
        </p>

        <div className="space-y-2">
          {block.items.map((item: PronunciationItem, idx: number) => (
            <div
              key={idx}
              className="flex items-center justify-between gap-3 border border-gray-200 rounded-lg px-3 py-2"
            >
              {/* Bên trái: từ + IPA + nghĩa */}
              <div className="flex-1 text-sm">
                <div className="font-semibold text-red-600 break-words">
                  {item.text}
                </div>

                <div className="text-xs text-gray-600 flex flex-wrap gap-2">
                  {item.ipa && (
                    <span>{renderIpa(item.ipa, item.highlight)}</span>
                  )}
                  {item.vi && <span>({item.vi})</span>}
                </div>
              </div>

              {/* Bên phải: nút TTS + mic + popup chấm điểm (do TTSPlay xử lý) */}
              <TTSPlay
                text={item.text}          // gửi lên Cloud TTS
                expectedText={item.text}  // dùng để chấm điểm phát âm
                // bạn có thể truyền thêm voice / language nếu component hỗ trợ
                // voice={item.voice}
                // languageCode="en-US"
                enableRecord              // để TTSPlay hiển thị mic + popup % giống hình
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

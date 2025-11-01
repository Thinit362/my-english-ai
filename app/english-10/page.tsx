// app/english-10/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// import manifest ảnh Unit/Review (bạn chỉnh file JSON theo nhu cầu)
import manifest from '../../public/data/english10_manifest.json';

// ====== Trợ lý song ngữ (VI/EN) dùng Gemini Flash ======
import GeminiChat from '@/components/GeminiChat';

type Item = { title: string; slug: string; imageUrl?: string; type?: 'unit'|'review' };

export const metadata = { title: 'Tiếng Anh 10 – Global Success' };

export default async function Page() {
  const items = (manifest as Item[]);

  return (
    <>
      {/* PHẦN 1: LƯỚI KHÓA HỌC */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Khóa học Tiếng Anh 10</h2>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((it, idx) => {
            const href = `/english-10/${it.slug}`;
            return (
              <Link
                key={idx}
                href={href}
                className="group rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={it.imageUrl || '/placeholder.svg'}
                    alt={it.title}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-300"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                    priority={idx < 4}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 tracking-wide">{(it.type ?? '').toUpperCase()}</p>
                  <h3 className="mt-1 font-medium group-hover:text-blue-600">{it.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* PHẦN 2: TRỢ LÝ SONG NGỮ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Trợ lý học tập</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <GeminiChat
            grade={10}
            lang="vi"
            systemPrompt={`Bạn là trợ lý học tập cho chương trình Tiếng Anh lớp 10. Trả lời bằng tiếng Việt, ngắn gọn, có ví dụ, gợi ý luyện từ vựng/ngữ pháp/nghe nói theo từng Unit/Review.`}
          />
          <GeminiChat
            grade={10}
            lang="en"
            systemPrompt={`You are a tutor for English Grade 10. Answer in English, concise, with examples and practice tips per Unit/Review.`}
          />
        </div>
      </section>
    </>
  );
}

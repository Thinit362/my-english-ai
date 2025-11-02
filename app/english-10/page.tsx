import Image from 'next/image';
import Link from 'next/link';
import DualLessonAssistant from '@/components/DualLessonAssistant';

type Item = { title: string; slug: string; imageUrl?: string; type?: 'unit'|'review' };

export const metadata = { title: 'Tiếng Anh 10 – Global Success' };

export default async function Page() {
  // manifest dạng { book, units, reviews? }
  const mod = await import('../../public/data/english10_manifest.json');
  const m: any = mod.default ?? {};
  const units: Item[] = (m.units ?? []).map((u: any) => ({
    title: u.title ? `Unit ${u.index}: ${u.title}` : `Unit ${u.index}`,
    slug: `unit/${u.index}`,
    imageUrl: u.imageUrl || `https://www.ai-english-c3.cloud/images/eng10/unit${u.index}.jpg`,
    type: 'unit',
  }));
  const reviews: Item[] = (m.reviews ?? []).map((r: any) => ({
    title: r.title || `Review ${r.index}`,
    slug: `review/${r.index}`,
    imageUrl: r.imageUrl || `https://www.ai-english-c3.cloud/images/eng10/review${r.index}.jpg`,
    type: 'review',
  }));
  const items: Item[] = [...units, ...reviews];

  return (
    <>
      {/* PHẦN 1: Lưới khóa học */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Khóa học Tiếng Anh 10</h2>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((it, idx) => (
            <Link key={idx} href={`/english-10/${it.slug}`}
              className="group rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition">
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
          ))}
        </div>
      </section>

      {/* PHẦN 2: Trợ lý song ngữ (Gemini Flash 2.5) */}
      <DualLessonAssistant grade={10} /* endpoint="/api/chat" model="gemini-2.5-flash" */ />
    </>
  );
}

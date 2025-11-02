// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

// Render phía client để tránh lỗi "use client" ở page và các vấn đề hydration
const GeminiChat = dynamic(() => import("@/components/GeminiChat"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: Sách lớp 10–11–12 */}
      <section className="max-w-6xl mx-auto py-8 px-4 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Tiếng Anh 10",
            desc: "Truy cập bài học, kiểm tra và tài nguyên lớp 10.",
            img: "/covers/eng10.jpg",
            href: "/english-10",
          },
          {
            title: "Tiếng Anh 11",
            desc: "Rèn luyện kỹ năng giao tiếp và ngữ pháp lớp 11.",
            img: "/covers/eng11.jpg",
            href: "/english-11",
          },
          {
            title: "Tiếng Anh 12",
            desc: "Ôn tập, luyện đề thi THPT Quốc Gia và IELTS.",
            img: "/covers/eng12.jpg",
            href: "/english-12",
          },
        ].map((b, i) => (
          <Link
            key={i}
            href={b.href}
            className="group border rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="h-60 w-full relative">
              <Image
                src={b.img}
                alt={b.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-[var(--navy)]">{b.title}</h3>
              <p className="text-sm opacity-80">{b.desc}</p>
            </div>
          </Link>
        ))}
      </section>

      {/* SECTION 2: Giới thiệu song ngữ */}
      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 grid md:grid-cols-2 gap-6 mb-12">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-[var(--navy)]">🎯 Mục tiêu của website</h2>
          <p className="text-sm leading-relaxed">
            Trang web <b>Ứng dụng Trí tuệ nhân tạo - Gemini API & Vercel</b> nhằm hỗ trợ học sinh
            trung học phổ thông học Tiếng Anh hiệu quả hơn thông qua công nghệ AI.
            Học sinh có thể học từ vựng, ngữ pháp, kỹ năng nghe - nói - đọc - viết, và làm bài kiểm
            tra tự động.
            Mục tiêu là giúp học sinh:
          </p>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Nắm vững kiến thức trọng tâm từng bài học.</li>
            <li>Rèn luyện kỹ năng thi THPT Quốc Gia.</li>
            <li>Phát triển khả năng giao tiếp tiếng Anh tự nhiên.</li>
          </ul>
          <p className="text-sm mt-3">
            Hệ thống trợ lý <b>Gemini AI</b> sẽ gợi ý lộ trình học, tạo bài tập, chấm bài viết và đưa
            ra phản hồi chi tiết giúp học sinh tự học hiệu quả hơn.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-[var(--navy)]">🎯 Website Goals (English)</h2>
          <p className="text-sm leading-relaxed">
            This website integrates <b>Google Gemini API</b> and <b>Vercel</b> to help high school
            students learn English more effectively with AI.
            Students can practice vocabulary, grammar, listening, speaking, reading, and writing
            skills.
            The goals are:
          </p>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Master key English knowledge for each grade.</li>
            <li>Prepare for the national high school exam effectively.</li>
            <li>Enhance English communication skills naturally.</li>
          </ul>
          <p className="text-sm mt-3">
            The <b>Gemini Assistant</b> helps design personalized study plans, create exercises, and
            give instant feedback — making self-study engaging and efficient.
          </p>
        </div>
      </section>

      {/* SECTION 3: Chatbot Gemini */}
      <section className="max-w-6xl mx-auto px-4 mb-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-[var(--navy)] mb-3">
            💬 Trợ lý học Tiếng Anh (Gemini)
          </h2>
          <p className="text-sm opacity-80 mb-4">
            Bấm vào các gợi ý hoặc nhập câu hỏi, Gemini sẽ hướng dẫn bạn cách học tiếng Anh hiệu quả,
            xây dựng lộ trình cá nhân và gợi ý bài tập luyện tập phù hợp.
          </p>

          {/* Chạy phía client, không chặn SSR của toàn trang */}
          <GeminiChat pageKey="advisor" units={[1]} />
        </div>

        <div className="hidden lg:block">
          <Image
            src="/study-ai.webp"
            alt="Student learning English with AI"
            width={500}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </section>
    </>
  );
}

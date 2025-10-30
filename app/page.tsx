import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* --- Banner & Giới thiệu --- */}
      <section className="section text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ứng dụng Trí tuệ nhân tạo Gemini API – Đột phá trong học Tiếng Anh THPT
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          Chào mừng bạn đến với <strong>nền tảng học Tiếng Anh thông minh</strong> – nơi{" "}
          <strong>Trí tuệ nhân tạo Gemini</strong> đồng hành cùng học sinh trong từng bài học!
          Đây là sản phẩm KHKT sáng tạo của nhóm <strong>MCVT Innovators – THPT Hải An</strong>,
          được xây dựng với mong muốn mang đến một cách học Tiếng Anh mới mẻ, sinh động và hiệu quả hơn bao giờ hết.
        </p>
      </section>

      {/* --- Danh sách các lớp học --- */}
      <section className="grid section">
        <Link href="/english-10" className="card">
          <img src="/covers/eng10.jpg" alt="English 10" />
          <h3>Tiếng Anh 10 – Global Success</h3>
          <p>Khám phá từng Unit SGK, học và luyện tập cùng trợ lý AI Gemini.</p>
        </Link>
        <Link href="/english-11" className="card">
          <img src="/covers/eng11.jpg" alt="English 11" />
          <h3>Tiếng Anh 11 – Global Success</h3>
          <p>Tương tác với AI – luyện kỹ năng, làm bài tập và khám phá nội dung học tập.</p>
        </Link>
        <Link href="/english-12" className="card">
          <img src="/covers/eng12.jpg" alt="English 12" />
          <h3>Tiếng Anh 12 – Global Success</h3>
          <p>Học thông minh – luyện tập sáng tạo – chinh phục tiếng Anh cùng Gemini.</p>
        </Link>
      </section>

      {/* --- Phần mô tả chi tiết dự án KHKT --- */}
      <section className="section">
        <h2 className="text-2xl font-semibold mb-4">🎯 Mục tiêu & Ý nghĩa dự án</h2>
        <p>
          Dự án nhằm ứng dụng <strong>Gemini API</strong> trong giảng dạy và học tập tiếng Anh,
          giúp học sinh THPT có môi trường học mở, chủ động, hiện đại và hiệu quả.
          Website được phát triển trên nền tảng <strong>Next.js</strong> và triển khai bởi{" "}
          <strong>Vercel</strong>, đảm bảo tốc độ, tương thích tốt trên mọi thiết bị.
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>💡 Tự động hóa việc học với Gemini – giải thích, luyện tập, phản hồi thông minh.</li>
          <li>📘 Bám sát SGK Global Success lớp 10, 11, 12.</li>
          <li>🤝 Hỗ trợ giáo viên tạo câu hỏi, hoạt động học tập sáng tạo.</li>
        </ul>
      </section>

      {/* --- Hướng dẫn học --- */}
      <section className="section">
        <h2 className="text-2xl font-semibold mb-4">🚀 Cách tham gia học tập</h2>
        <ol className="list-decimal ml-6">
          <li>Chọn lớp học phù hợp (10, 11 hoặc 12) để xem danh sách các bài học (Unit).</li>
          <li>
            Trong mỗi Unit, bạn có thể chọn tab <strong>Learn</strong> để đọc nội dung,
            <strong> Practice</strong> để làm bài tập,
            và <strong>Gemini Assistant</strong> để trò chuyện với AI.
          </li>
          <li>Hỏi Gemini về ngữ pháp, từ vựng, bài tập hoặc yêu cầu hội thoại mẫu.</li>
          <li>
            Đăng nhập để lưu kết quả học và trò chuyện trong phiên – giúp bạn học liên tục, không mất dữ liệu.
          </li>
        </ol>
      </section>

      {/* --- Thông điệp và nhóm thực hiện --- */}
      <section className="section text-center">
        <h2 className="text-2xl font-semibold mb-2">💬 Thông điệp từ nhóm MCVT Innovators</h2>
        <blockquote className="italic max-w-2xl mx-auto mb-4">
          “Chúng em tin rằng học tiếng Anh không chỉ là học từ và ngữ pháp,
          mà là hành trình khám phá thế giới. Với sự đồng hành của Trí tuệ nhân tạo Gemini,
          mỗi giờ học sẽ trở nên thú vị, sáng tạo và hiệu quả hơn.”
        </blockquote>
        <p>
          <strong>Nhóm thực hiện:</strong> MCVT Innovators – Trường THPT Hải An
          <br />
          <strong>Đề tài KHKT:</strong> Ứng dụng Trí tuệ nhân tạo Gemini API và nền tảng Vercel
          tạo đột phá trong việc dạy và học Tiếng Anh THPT.
        </p>
      </section>
    </div>
  );
}

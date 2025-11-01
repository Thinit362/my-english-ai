import "./globals.css";
import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Ứng dụng Gemini & Vercel – Tiếng Anh THPT",
  description: "Học tiếng Anh THPT với Gemini API và Vercel",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
{/*
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-sky-50 text-slate-900 antialiased">
        {/* Khung bao toàn site */}
        <div className="container-max bg-white border-2 border-sky-200 rounded-2xl shadow-sm m-4 overflow-hidden">
          {/* Header dùng chung cho tất cả các trang */}
          <Header />

          {/* Nội dung trang */}
          {children}

          {/* Footer chung */}
          <footer className="bg-white border-t px-4 md:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <div className="font-semibold text-base md:text-lg">
                  Nhóm: MCVT Innovators – THPT Hải An
                </div>
                <div className="text-sm md:text-base opacity-80">
                  Giáo viên hướng dẫn: Tô Thị Thìn – <a href="tel:0936095362" className="underline">0936095362</a>
                </div>
              </div>
              <div className="text-sm md:text-base opacity-60">
                © {new Date().getFullYear()} MCVT Innovators
              </div>
            </div>
          </footer> */}
        </div>
      </body>
    </html>
  );
}

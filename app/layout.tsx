// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InAppBrowserGuard from "@/components/InAppBrowserGuard";

export const metadata: Metadata = {
  title: "Ứng dụng Gemini & Vercel – Tiếng Anh THPT",
  description: "Học tiếng Anh THPT với Gemini API và Vercel",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="page-shell min-h-screen bg-sky-50 text-slate-900 antialiased">
        {/* ⚠️ Tự động cảnh báo nếu mở trong trình duyệt trong ứng dụng (Zalo, FB, IG...) */}
        <InAppBrowserGuard />

        {/* 🔝 Header chung cho toàn site */}
        <Header />

        {/* 🔸 Nội dung từng trang */}
        <main className="container mx-auto px-4 py-6">{children}</main>

        {/* 🔻 Footer chung */}
        <Footer />
      </body>
    </html>
  );
}

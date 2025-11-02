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
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-sky-50 text-slate-900 antialiased">
        <InAppBrowserGuard />
  );
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="page-shell min-h-screen bg-sky-50 text-slate-900 antialiased">
        {/* 🔝 Header chung cho toàn bộ site */}
        <Header />

        {/* 🔸 Nội dung riêng của từng trang */}
        <main className="container-max">{children}</main>

        {/* 🔻 Footer chung */}
        <Footer />
      </body>
    </html>
  );
}

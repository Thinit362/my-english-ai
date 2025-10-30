import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
title: "AI English THPT – Gemini on Vercel",
description: "Ứng dụng Trí tuệ nhân tạo giúp dạy và học Tiếng Anh THPT",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="vi">
<body>
<Header />
<main className="container">{children}</main>
<Footer />
</body>
</html>
);
}
"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const images = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <header className="w-full bg-white shadow-md border-b border-sky-100">
      {/* Logo và tiêu đề */}
      <div className="flex flex-wrap justify-between items-center px-6 py-3 bg-gradient-to-r from-sky-50 to-white">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="THPT Hải An Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md"
          />
          <div>
            <h1 className="font-bold text-2xl text-sky-800">TIẾNG ANH THPT - GLOBAL SUCCESS</h1>
            <p className="font-bold text-sm text-green-600">THPT Hải An-TP. Hải Phòng</p>
          </div>
        </div>

        <a
          href="/login"
          className="px-4 py-2 rounded-lg text-sm md:text-base bg-sky-700 text-white hover:bg-sky-800 shadow-sm transition"
        >
          Đăng nhập
        </a>
      </div>

      {/* Banner động */}
      <div className="relative w-full h-[100px] sm:h-[120px] md:h-[150px] overflow-hidden">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Banner ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* overlay mờ nhẹ */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Thanh điều hướng */}
      <nav className="flex flex-wrap items-center justify-center gap-3 px-4 py-3 bg-sky-900">
        {[
          { href: "/", label: "Trang chủ" },
          { href: "/english-10", label: "Tiếng Anh 10" },
          { href: "/english-11", label: "Tiếng Anh 11" },
          { href: "/english-12", label: "Tiếng Anh 12" },
         ].map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="px-4 py-2 rounded-md text-sm md:text-base font-medium bg-sky-200 text-sky-900 hover:bg-sky-300 transition"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

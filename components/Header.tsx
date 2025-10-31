"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type NavItem = { href: string; label: string };

export default function Header({
  images = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"],
  nav = [
    { href: "/", label: "Trang chủ" },
    { href: "/english-10", label: "Tiếng Anh 10" },
    { href: "/english-11", label: "Tiếng Anh 11" },
    { href: "/english-12", label: "Tiếng Anh 12" },
    { href: "/about", label: "Giới thiệu" },
  ],
  showLogin = true,
}: {
  images?: string[];
  nav?: NavItem[];
  showLogin?: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 3500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <header className="bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="THPT Hải An Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          <div className="leading-tight">
            <div className="font-semibold text-xl sm:text-2xl">MCVT Innovators</div>
            <div className="text-xs sm:text-sm opacity-70">THPT Hải An</div>
          </div>
        </Link>

        {showLogin && (
          <Link
            href="/login"
            className="px-3 sm:px-4 py-2 rounded bg-[navy] text-white text-sm sm:text-base hover:opacity-90"
          >
            Đăng nhập
          </Link>
        )}
      </div>

      {/* Banner cao 210px (desktop), tự co trên mobile */}
      <div className="relative w-full h-[150px] sm:h-[180px] md:h-[210px] overflow-hidden">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Banner ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      {/* Nav */}
      <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-3 px-4 sm:px-6 py-3 border-t">
        {nav.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="px-3 md:px-4 py-2 rounded bg-[navy] text-white text-sm md:text-base hover:opacity-90"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

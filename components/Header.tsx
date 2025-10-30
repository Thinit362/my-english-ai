"use client";
import Link from "next/link";
import LoginButton from "./LoginButton";


export default function Header() {
return (
<header className="header">
<div className="header-inner container">
<div className="brand">
<img src="/covers/logo.png" alt="Logo" />
<div>
<div><strong>AI English THPT</strong></div>
<div className="banner"> Học Tiếng Anh cùng AI</div>
</div>
</div>
<nav className="nav">
<Link href="/">Trang chủ</Link>
<Link href="/english-10">Tiếng Anh 10</Link>
<Link href="/english-11">Tiếng Anh 11</Link>
<Link href="/english-12">Tiếng Anh 12</Link>
</nav>
<LoginButton />
</div>
</header>
);
}
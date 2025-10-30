"use client";
import { useEffect, useState } from "react";


export default function LoginButton() {
const [name, setName] = useState<string | null>(null);


useEffect(() => {
const n = localStorage.getItem("aiuser:name");
if (n) setName(n);
}, []);


const handleLogin = () => {
const n = prompt("Nhập tên của bạn để đăng nhập:");
if (n && n.trim()) {
localStorage.setItem("aiuser:name", n.trim());
setName(n.trim());
}
};


const handleLogout = () => {
localStorage.removeItem("aiuser:name");
setName(null);
};


return (
<div>
{name ? (
<>
<span style={{ marginRight: 8 }}>Xin chào, <strong>{name}</strong></span>
<button className="button secondary" onClick={handleLogout}>Đăng xuất</button>
</>
) : (
<button className="button" onClick={handleLogin}>Đăng nhập</button>
)}
</div>
);
}
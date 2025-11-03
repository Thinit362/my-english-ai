// components/EnglishLayout.tsx
import "./globals.css";
export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
         <main className="min-h-screen bg-white">{children}</main>
    </>
  );
}

// components/EnglishLayout.tsx

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
         <main className="min-h-screen bg-white">{children}</main>
    </>
  );
}

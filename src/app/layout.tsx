import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Agent 机会情报",
  description: "每日 AI Agent 需求分析报告",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
        <nav className="border-b border-white/10 bg-black/20 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">🤖 AI Agent 机会情报</h1>
            <div className="flex gap-4">
              <a href="/" className="text-white/70 hover:text-white transition">首页</a>
              <a href="#pricing" className="text-white/70 hover:text-white transition">订阅</a>
            </div>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="border-t border-white/10 bg-black/20 py-8 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center text-white/50">
            <p>© 2026 AI Agent 机会情报 · 每日更新</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

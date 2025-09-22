import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import logo from "../public/LOGO.svg";

export const metadata: Metadata = {
  title: "Next.js アンチパターン勉強会",
  description: "Next.jsのデータフェッチにおけるアンチパターンを実例で学習",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body suppressHydrationWarning>
        {children}
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Image src={logo} alt="Logo" className="h-6 mx-auto mb-4" />
            <p className="text-gray-400 text-sm">
              © 2025 Next.js アンチパターン学習 フロントエンドチーム
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

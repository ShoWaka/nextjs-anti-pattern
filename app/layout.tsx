import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js アンチパターン学習",
  description: "Next.jsのデータフェッチにおけるアンチパターンを実例で学習",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

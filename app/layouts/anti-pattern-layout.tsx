"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";

interface AntiPatternLayoutProps {
  children: ReactNode;
  title: string;
  points: string[];
  reason: string;
  solutionLink?: string;
}

export function AntiPatternLayout({
  children,
  title,
  points,
  reason,
  solutionLink,
}: AntiPatternLayoutProps) {
  const [showReason, setShowReason] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Next.js データフェッチ アンチパターン学習
              </h1>
              <p className="mt-1 text-sm text-gray-600">{title}</p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              🏠 ホームに戻る
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左側: 実際のコード表示 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              実際の動作
            </h2>
            <div className="border rounded-lg p-4 bg-gray-50">{children}</div>
          </div>

          {/* 右側: 注目ポイントと解説 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3 text-gray-800">
                📍 注目ポイント
              </h2>
              <ul className="space-y-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setShowReason(!showReason)}
                className="w-full text-left flex items-center justify-between text-lg font-semibold mb-3 text-gray-800 hover:text-gray-600 transition-colors"
              >
                <span>❌ なぜアンチパターンなのか</span>
                <span className="text-sm">{showReason ? "▼" : "▶"}</span>
              </button>
              {showReason && (
                <div className="bg-red-50 border-l-4 border-red-400 p-4 animate-fadeIn">
                  <p className="text-gray-700 whitespace-pre-line">{reason}</p>
                </div>
              )}
            </div>

            {solutionLink && (
              <div className="mt-4 pt-4 border-t">
                <Link
                  href={solutionLink}
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                >
                  ✨ 改善版を見る
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

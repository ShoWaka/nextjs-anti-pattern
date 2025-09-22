"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useState } from "react";

interface SolutionLayoutProps {
  children: ReactNode;
  title: string;
  points: string[];
  benefits: string;
  antiPatternLink: string;
  referenceLink?: string;
  referenceTitle?: string;
}

export function SolutionLayout({
  children,
  title,
  points,
  benefits,
  antiPatternLink,
  referenceLink,
  referenceTitle,
}: SolutionLayoutProps) {
  const [showBenefits, setShowBenefits] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Next.js データフェッチ ベストプラクティス
              </h1>
              <p className="mt-1 text-sm text-gray-600">{title}</p>
              <Link
                href={antiPatternLink}
                className="inline-block mt-2 text-sm text-blue-600 hover:text-blue-800"
              >
                ← アンチパターンに戻る
              </Link>
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
              改善された実装
            </h2>
            <div className="border rounded-lg p-4 bg-gray-50">{children}</div>
          </div>

          {/* 右側: 改善ポイントとメリット */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-3 text-gray-800">
                ✨ 改善ポイント
              </h2>
              <ul className="space-y-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setShowBenefits(!showBenefits)}
                className="w-full text-left flex items-center justify-between text-lg font-semibold mb-3 text-gray-800 hover:text-gray-600 transition-colors"
              >
                <span>💡 なぜこのアプローチが良いのか</span>
                <span className="text-sm">{showBenefits ? "▼" : "▶"}</span>
              </button>
              {showBenefits && (
                <div className="bg-green-50 border-l-4 border-green-400 p-4 animate-fadeIn">
                  <p className="text-gray-700 whitespace-pre-line">{benefits}</p>
                </div>
              )}
            </div>

            {referenceLink && referenceTitle && (
              <div className="mt-6 pt-4 border-t">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  📚 参考資料
                </h3>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-blue-700 mb-2">
                    この実装は以下の資料に基づいています：
                  </p>
                  <a
                    href={referenceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    {referenceTitle} →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

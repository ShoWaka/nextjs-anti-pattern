"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // エラーログをコンソールに出力
    console.error("Error caught by error.tsx:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
          <svg
            className="w-6 h-6 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            role="img"
            aria-label="エラーアイコン"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h2 className="text-xl font-semibold text-center text-gray-900 mb-2">
          エラーが発生しました
        </h2>

        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
          <p className="text-sm text-red-800 font-medium mb-1">
            エラーメッセージ:
          </p>
          <p className="text-sm text-red-700">{error.message}</p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
          <h3 className="text-sm font-medium text-yellow-800 mb-2">
            ⚠️ このエラーページが表示される理由
          </h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Server Actionsで例外がthrowされた</li>
            <li>• Error Boundaryでキャッチされた</li>
            <li>• 予測可能なエラーも例外として処理されている</li>
          </ul>
        </div>

        <div className="space-y-3">
          <button
            type="button"
            onClick={reset}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            もう一度試す
          </button>

          <Link
            href="/anti-patterns/04"
            className="block w-full text-center bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            フォームに戻る
          </Link>

          <Link
            href="/"
            className="block w-full text-center text-gray-600 hover:text-gray-800 text-sm"
          >
            ホームに戻る
          </Link>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            このページはNext.jsのerror.tsxによって表示されています。
            <br />
            ベストプラクティスでは、予測可能なエラーは戻り値で処理すべきです。
          </p>
        </div>
      </div>
    </div>
  );
}

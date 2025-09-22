"use client";

import { useActionState } from "react";
import { createUserWithException } from "../_actions/error-actions";

export function ExceptionBasedForm() {
  const [state, formAction, isPending] = useActionState(
    createUserWithException,
    null,
  );

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-2">ユーザー登録フォーム</h3>
        <p className="text-sm text-gray-600 mb-4">
          Server Actionsで例外をthrowするアンチパターン
        </p>
      </div>

      <form action={formAction} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            名前 *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue=""
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="山田太郎"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            メールアドレス *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue=""
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="yamada@example.com"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 text-sm font-medium"
        >
          {isPending ? "登録中..." : "ユーザーを登録"}
        </button>
      </form>

      {/* 成功時の表示 */}
      {state?.success && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4">
          <div className="flex">
            <div className="text-green-400">
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                role="img"
                aria-label="成功アイコン"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                ユーザーが正常に登録されました！
              </p>
              <p className="text-sm text-green-700">
                ID: {state.user?.id}, 名前: {state.user?.name}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
        <h4 className="text-sm font-medium text-yellow-800 mb-2">
          ⚠️ エラーハンドリングの問題
        </h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• 例外がthrowされるとError Boundaryが必要</li>
          <li>• 予測可能なエラーも予期しないエラーも同じ扱い</li>
          <li>• デバッグ時にスタックトレースが混乱する</li>
          <li>• ユーザー体験が一貫しない</li>
        </ul>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
        <h4 className="text-sm font-medium text-gray-800 mb-2">
          テスト用データ
        </h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• 空の名前でバリデーションエラー</li>
          <li>• 不正なメール形式でバリデーションエラー</li>
          <li>• test@example.com で重複エラー</li>
          <li>• 30%の確率でデータベースエラー</li>
        </ul>
      </div>
    </div>
  );
}

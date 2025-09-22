"use client";

import { useActionState } from "react";
import { createUserWithReturnValue } from "../_actions/error-actions";

export function ReturnValueBasedForm() {
  const [state, formAction, isPending] = useActionState(
    createUserWithReturnValue,
    null,
  );

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-2">ユーザー登録フォーム</h3>
        <p className="text-sm text-gray-600 mb-4">
          戻り値でエラーを表現するベストプラクティス
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
            defaultValue={state?.values?.name || ""}
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
            defaultValue={state?.values?.email || ""}
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

      {/* エラー表示 */}
      {state && !state.success && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex">
            <div className="text-red-400">
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                role="img"
                aria-label="エラーアイコン"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">エラー</p>
              <p className="text-sm text-red-700">{state.error}</p>
            </div>
          </div>
        </div>
      )}

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

      <div className="bg-green-50 border border-green-200 rounded-md p-4">
        <h4 className="text-sm font-medium text-green-800 mb-2">
          ✅ ベストプラクティスの利点
        </h4>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• 予測可能なエラーを型安全に処理</li>
          <li>• Error Boundaryが不要</li>
          <li>• 一貫したエラーハンドリング</li>
          <li>• デバッグしやすいコード</li>
          <li>• より良いユーザー体験</li>
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

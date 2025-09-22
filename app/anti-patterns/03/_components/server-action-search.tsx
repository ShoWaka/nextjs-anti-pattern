"use client";

import { useActionState } from "react";
import { searchUsers } from "../_actions/search-actions";

interface User {
  id: number;
  name: string;
  email: string;
}

interface SearchState {
  users: User[];
  query: string;
  error?: string;
}

// Server ActionとuseActionStateを使った適切な実装

export function ServerActionSearch() {
  const initialState: SearchState = {
    users: [],
    query: "",
    error: undefined,
  };

  const [state, formAction, isPending] = useActionState(
    searchUsers,
    initialState,
  );

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">ユーザー検索</h3>
      <p className="text-sm text-gray-600 mb-4">
        Server ActionsとuseActionStateを使ったユーザー操作ベースの検索
      </p>

      <form action={formAction} className="mb-6">
        <div className="flex gap-2">
          <input
            name="query"
            type="text"
            placeholder="ユーザー名で検索..."
            defaultValue={state.query}
            className="flex-1 border rounded px-3 py-2 text-sm"
            disabled={isPending}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 disabled:opacity-50"
            disabled={isPending}
          >
            {isPending ? "検索中..." : "検索"}
          </button>
        </div>
      </form>

      {isPending && (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
        </div>
      )}

      {state.error && (
        <div className="bg-red-50 border border-red-200 rounded p-3 text-red-700 text-sm">
          {state.error}
        </div>
      )}

      {!isPending && !state.error && state.query && (
        <div>
          <p className="text-sm text-gray-600 mb-3">
            "{state.query}" の検索結果: {state.users.length}件
          </p>
          <div className="space-y-2">
            {state.users.length > 0 ? (
              state.users.map((user) => <UserCard key={user.id} user={user} />)
            ) : (
              <p className="text-gray-500 text-sm">
                該当するユーザーが見つかりませんでした
              </p>
            )}
          </div>
        </div>
      )}

      {!state.query && !isPending && (
        <p className="text-gray-500 text-sm">
          ユーザー名を入力して検索してください
        </p>
      )}
    </div>
  );
}

// Server Componentとして実装された表示専用コンポーネント
function UserCard({ user }: { user: User }) {
  return (
    <div className="border p-3 rounded bg-white shadow-sm">
      <h4 className="font-medium">{user.name}</h4>
      <p className="text-gray-600 text-sm">{user.email}</p>
    </div>
  );
}

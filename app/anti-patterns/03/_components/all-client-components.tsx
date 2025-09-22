"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

// Client Component + useEffectでユーザー操作ベースの検索を実装するアンチパターン

export function ClientComponentSearch() {
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  // 検索実行時の処理
  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const searchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        // APIで検索を実行（本来はServer Actionで行うべき）
        const response = await fetch(
          `/api/users?search=${encodeURIComponent(query)}`,
        );
        if (!response.ok) {
          throw new Error("検索に失敗しました");
        }

        const data = await response.json();
        setSearchResults(data.users || data);
      } catch (err) {
        setError("検索中にエラーが発生しました");
        console.error(err);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    };

    // デバウンス処理
    const timeoutId = setTimeout(searchUsers, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信時の処理は既にuseEffectで実行済み
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">ユーザー検索</h3>
      <p className="text-sm text-gray-600 mb-4">
        Client Component + useEffectでユーザー操作に基づく検索を実装
      </p>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ユーザー名で検索..."
            className="flex-1 border rounded px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "検索中..." : "検索"}
          </button>
        </div>
      </form>

      {loading && (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded p-3 text-red-700 text-sm">
          {error}
        </div>
      )}

      {!loading && !error && query && (
        <div>
          <p className="text-sm text-gray-600 mb-3">
            "{query}" の検索結果: {searchResults.length}件
          </p>
          <div className="space-y-2">
            {searchResults.length > 0 ? (
              searchResults.map((user) => (
                <div
                  key={user.id}
                  className="border p-3 rounded bg-white shadow-sm"
                >
                  <h4 className="font-medium">{user.name}</h4>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">
                該当するユーザーが見つかりませんでした
              </p>
            )}
          </div>
        </div>
      )}

      {!query && (
        <p className="text-gray-500 text-sm">
          ユーザー名を入力して検索してください
        </p>
      )}
    </div>
  );
}

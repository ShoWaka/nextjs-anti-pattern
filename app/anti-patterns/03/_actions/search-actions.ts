"use server";

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

// Server Action for user search
export async function searchUsers(
  _prevState: SearchState,
  formData: FormData,
): Promise<SearchState> {
  const query = formData.get("query") as string;

  // バリデーション
  if (!query || query.trim().length === 0) {
    return {
      users: [],
      query: "",
      error: undefined,
    };
  }

  try {
    // Server ActionからAPIルートを直接呼び出し
    const response = await fetch(
      `http://localhost:3000/api/users?search=${encodeURIComponent(query)}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error("ユーザー検索APIの呼び出しに失敗しました");
    }

    const data = await response.json();

    return {
      users: data.users || data,
      query,
      error: undefined,
    };
  } catch (err) {
    console.error("Search error:", err);
    return {
      users: [],
      query,
      error: "検索中にエラーが発生しました",
    };
  }
}

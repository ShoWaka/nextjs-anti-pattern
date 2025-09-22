"use server";

// 型定義
type User = {
  id: number;
  name: string;
  email: string;
};

type ActionState = {
  success: boolean;
  user?: User;
  error?: string;
  values?: { name: string; email: string };
};

// アンチパターン: Server Actionsで例外をthrowする
export async function createUserWithException(
  _prevState: ActionState | null,
  formData: FormData,
): Promise<ActionState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  // バリデーション失敗時に例外をthrow（アンチパターン）
  if (!name || name.trim().length === 0) {
    throw new Error("名前は必須です");
  }

  if (!email || !email.includes("@")) {
    throw new Error("有効なメールアドレスを入力してください");
  }

  // 重複チェック（既存ユーザーのシミュレート）
  const existingUsers = ["test@example.com", "admin@test.com"];
  if (existingUsers.includes(email.toLowerCase())) {
    throw new Error("このメールアドレスは既に使用されています");
  }

  // データベース保存の失敗をシミュレート
  const shouldFail = Math.random() < 0.3; // 30%の確率で失敗
  if (shouldFail) {
    throw new Error("データベースエラーが発生しました");
  }

  // 成功時
  return {
    success: true,
    user: {
      id: Date.now(),
      name,
      email,
    },
  };
}

// ベストプラクティス: エラーを戻り値で表現する
export async function createUserWithReturnValue(
  _prevState: ActionState | null,
  formData: FormData,
): Promise<ActionState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  // バリデーション失敗時は戻り値でエラーを返す（入力値も含める）
  if (!name || name.trim().length === 0) {
    return {
      success: false,
      error: "名前は必須です",
      values: { name, email }, // 入力値を保持
    };
  }

  if (!email || !email.includes("@")) {
    return {
      success: false,
      error: "有効なメールアドレスを入力してください",
      values: { name, email }, // 入力値を保持
    };
  }

  // 重複チェック
  const existingUsers = ["test@example.com", "admin@test.com"];
  if (existingUsers.includes(email.toLowerCase())) {
    return {
      success: false,
      error: "このメールアドレスは既に使用されています",
      values: { name, email }, // 入力値を保持
    };
  }

  try {
    // データベース保存の失敗をシミュレート
    const shouldFail = Math.random() < 0.3; // 30%の確率で失敗
    if (shouldFail) {
      throw new Error("Database connection failed");
    }

    // 成功時
    return {
      success: true,
      user: {
        id: Date.now(),
        name,
        email,
      },
    };
  } catch (error) {
    // 予期しないエラーのみtry-catchで処理
    console.error("Unexpected error:", error);
    return {
      success: false,
      error: "システムエラーが発生しました。しばらく後にお試しください。",
      values: { name, email }, // 入力値を保持
    };
  }
}

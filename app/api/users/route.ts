export async function GET(request: Request) {
  const users = [
    { id: 1, name: "田中太郎", email: "tanaka@example.com" },
    { id: 2, name: "佐藤花子", email: "sato@example.com" },
    { id: 3, name: "鈴木一郎", email: "suzuki@example.com" },
    { id: 4, name: "山田美咲", email: "yamada@example.com" },
    { id: 5, name: "高橋次郎", email: "takahashi@test.co.jp" },
    { id: 6, name: "渡辺花音", email: "watanabe@sample.org" },
  ];

  // 検索クエリの処理
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");

  let filteredUsers = users;

  if (search?.trim()) {
    const searchTerm = search.toLowerCase().trim();

    filteredUsers = users.filter((user) => {
      // 名前またはメールアドレスで検索
      const nameMatch = user.name.toLowerCase().includes(searchTerm);
      const emailMatch = user.email.toLowerCase().includes(searchTerm);
      return nameMatch || emailMatch;
    });

    // 検索ログをシミュレート
    console.log(`Search query: "${search}", Results: ${filteredUsers.length}`);
  }

  // 意図的な遅延を追加してレンダリングの遅さを体感させる
  await new Promise((resolve) => setTimeout(resolve, 800));

  return Response.json({
    users: filteredUsers,
    total: filteredUsers.length,
    query: search || "",
  });
}

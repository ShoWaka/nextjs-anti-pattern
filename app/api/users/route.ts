export async function GET() {
  const users = [
    { id: 1, name: "田中太郎", email: "tanaka@example.com" },
    { id: 2, name: "佐藤花子", email: "sato@example.com" },
    { id: 3, name: "鈴木一郎", email: "suzuki@example.com" },
    { id: 4, name: "山田美咲", email: "yamada@example.com" },
  ];

  // 意図的な遅延を追加してレンダリングの遅さを体感させる
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return Response.json(users);
}

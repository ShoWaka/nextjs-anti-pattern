interface User {
  id: number;
  name: string;
  email: string;
}

interface UserListProps {
  users: User[];
  title: string;
}

function UserList({ users, title }: UserListProps) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h4 className="font-semibold text-base mb-3">{title}</h4>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-2 rounded text-sm">
            <p className="font-medium">{user.name}</p>
            <p className="text-gray-600 text-xs">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function ParentFetching() {
  // 親コンポーネントで一度だけデータを取得
  const response = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });
  const data = await response.json();
  const users: User[] = data.users || data;

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">ユーザー管理ダッシュボード</h3>
      <p className="text-sm text-gray-600 mb-4">
        親コンポーネントで一度だけデータを取得して、複数の子コンポーネントにpropsで渡す方式
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 複数のコンポーネントが同じデータを使用 */}
        <UserList users={users} title="全ユーザー一覧" />
        <UserList users={users.slice(0, 2)} title="最近のユーザー" />
        <UserList
          users={users.filter((u) => u.email.includes("example.com"))}
          title="Example.comユーザー"
        />
        <UserList users={users.slice(-2)} title="最新登録ユーザー" />
      </div>
    </div>
  );
}

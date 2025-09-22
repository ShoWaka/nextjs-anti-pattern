import { Suspense } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  const response = await fetch("http://localhost:3000/api/users",{next:{revalidate:60}});
  return response.json();
}

async function UserList() {
  const users = await getUsers();

  return (
    <ul className="space-y-2">
      {users.map((user) => (
        <li key={user.id} className="border p-3 rounded">
          <p className="font-medium">{user.name}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
        </li>
      ))}
    </ul>
  );
}

export function ServerSideFetchSuspense() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">ユーザー一覧</h3>
      <Suspense fallback={"読み込み中"}>
        <UserList />
      </Suspense>
    </div>
  );
}
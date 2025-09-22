import { Suspense } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

// 各コンポーネントが個別にapi/usersを呼び出す

async function AllUsersList() {
  const response = await fetch("http://localhost:3000/api/users", {
    next: { revalidate: 60 },
  });
  const users: User[] = await response.json();

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h4 className="font-semibold text-base mb-3">全ユーザー一覧</h4>
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

async function RecentUsersList() {
  const response = await fetch("http://localhost:3000/api/users", {
    next: { revalidate: 60 },
  });
  const users: User[] = await response.json();
  const recentUsers = users.slice(0, 2);

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h4 className="font-semibold text-base mb-3">最近のユーザー</h4>
      <ul className="space-y-2">
        {recentUsers.map((user) => (
          <li key={user.id} className="border p-2 rounded text-sm">
            <p className="font-medium">{user.name}</p>
            <p className="text-gray-600 text-xs">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function FilteredUsersList() {
  const response = await fetch("http://localhost:3000/api/users", {
    next: { revalidate: 60 },
  });
  const users: User[] = await response.json();
  const filteredUsers = users.filter((u) => u.email.includes("example.com"));

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h4 className="font-semibold text-base mb-3">Example.comユーザー</h4>
      <ul className="space-y-2">
        {filteredUsers.map((user) => (
          <li key={user.id} className="border p-2 rounded text-sm">
            <p className="font-medium">{user.name}</p>
            <p className="text-gray-600 text-xs">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function LatestUsersList() {
  const response = await fetch("http://localhost:3000/api/users", {
    next: { revalidate: 60 },
  });
  const users: User[] = await response.json();
  const latestUsers = users.slice(-2);

  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm">
      <h4 className="font-semibold text-base mb-3">最新登録ユーザー</h4>
      <ul className="space-y-2">
        {latestUsers.map((user) => (
          <li key={user.id} className="border p-2 rounded text-sm">
            <p className="font-medium">{user.name}</p>
            <p className="text-gray-600 text-xs">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ローディング用のスケルトンコンポーネント
function UserListSkeleton() {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm animate-pulse">
      <div className="h-5 bg-gray-200 rounded mb-3"></div>
      <div className="space-y-2">
        <div className="border p-2 rounded">
          <div className="h-4 bg-gray-200 rounded mb-1"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        </div>
        <div className="border p-2 rounded">
          <div className="h-4 bg-gray-200 rounded mb-1"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
}

export function ColocatedFetching() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">ユーザー管理ダッシュボード</h3>
      <p className="text-sm text-gray-600 mb-4">
        各コンポーネントが個別にapi/usersを呼び出して、必要なデータを取得する方式
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 各コンポーネントが独立してapi/usersを呼び出す */}
        <Suspense fallback={<UserListSkeleton />}>
          <AllUsersList />
        </Suspense>

        <Suspense fallback={<UserListSkeleton />}>
          <RecentUsersList />
        </Suspense>

        <Suspense fallback={<UserListSkeleton />}>
          <FilteredUsersList />
        </Suspense>

        <Suspense fallback={<UserListSkeleton />}>
          <LatestUsersList />
        </Suspense>
      </div>
    </div>
  );
}

import { AntiPatternLayout } from "@/layouts/anti-pattern-layout";
import { ParentFetching } from "./_components/parent-fetching";

export default function Page() {
  const points = [
    "親コンポーネントで一度だけapi/usersを呼び出し",
    "子コンポーネントは全てpropsでデータを受け取る",
    "同じデータを使用する複数のコンポーネントが存在",
    "親の状態更新時に全ての子コンポーネントが再レンダリング",
  ];

  const reason = `
    【1. Props Drillingの発生】
    親コンポーネントで取得したデータを、必要な子コンポーネントまで
    propsを通じて渡す必要があります。コンポーネント階層が深くなると
    非常に煩雑になります。

    【2. コンポーネントの結合度増加】
    各子コンポーネントが特定のprops構造に依存するため、
    コンポーネントの独立性が損なわれ、再利用が困難になります。

    【3. 不要な再レンダリング】
    親コンポーネントの状態が更新されると、データを必要としない
    子コンポーネントも含めて全てが再レンダリングされてしまいます。

    【4. メンテナンス性の問題】
    新しいコンポーネントでユーザーデータが必要になった際、
    必ず親コンポーネントを修正してpropsを追加する必要があります。

    【5. 責任の分散不足】
    各コンポーネントが自分に必要なデータを管理すべきですが、
    すべてのデータ取得責任が親コンポーネントに集中しています。

    【6. キャッシュの非効率性】
    同じAPIを複数の場所で使いたい場合でも、
    親での一括取得に依存してしまいます。

    データフェッチコロケーション（各コンポーネントが自分の
    データを管理）を適用することで、これらの問題を解決できます。
  `;

  return (
    <AntiPatternLayout
      title="アンチパターン #2: データフェッチの集中化（コロケーション不足）"
      points={points}
      reason={reason}
      solutionLink="/anti-patterns/02/solution"
    >
      <ParentFetching />
    </AntiPatternLayout>
  );
}

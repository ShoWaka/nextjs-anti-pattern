import { SolutionLayout } from "@/layouts/solution-layout";
import { ColocatedFetching } from "../_components/colocated-fetching";

export default function SolutionPage() {
  const points = [
    "各コンポーネントが個別にapi/usersを呼び出し",
    "Suspenseを活用した段階的なレンダリング",
    "独立したデータフェッチによる並列実行",
    "Props Drillingの完全な解消",
    "コンポーネントの独立性と再利用性向上",
  ];

  const benefits = `
    【1. Props Drillingの解消】
    各コンポーネントが自分で必要なデータを取得するため、
    親から子へのpropsの受け渡しが不要になります。
    コンポーネント階層が深くても問題ありません。

    【2. 段階的な表示による優れたUX】
    各コンポーネントが独立してデータを取得するため、
    取得完了したコンポーネントから順次表示されます。
    全データの取得完了を待つ必要がありません。

    【3. 並列処理によるパフォーマンス向上】
    複数のコンポーネントが同時にapi/usersを並列実行するため、
    全体の読み込み時間が短縮されます。

    【4. コンポーネントの完全な独立性】
    各コンポーネントが自分のデータ取得ロジックを持つため、
    他の場所でも簡単に再利用できます。
    特定のprops構造に依存しません。

    【5. メンテナンス性の劇的向上】
    新しいコンポーネントでユーザーデータが必要になっても、
    そのコンポーネント内でapi/usersを呼び出すだけで済みます。
    親コンポーネントの修正は一切不要です。

    【6. 責任の適切な分散】
    「データが必要なコンポーネントがデータを取得する」
    という自然な責任分担が実現されます。

    【7. 自然なキャッシュ活用】
    Next.jsのキャッシュ機能により、同じAPIへの複数リクエストは
    自動的に最適化されます。

    これがデータフェッチコロケーションの真価です。
  `;

  return (
    <SolutionLayout
      title="ソリューション #2: データフェッチコロケーション"
      points={points}
      benefits={benefits}
      antiPatternLink="/anti-patterns/02"
      referenceLink="https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_1_colocation"
      referenceTitle="Next.jsの考え方 - データフェッチコロケーション"
    >
      <ColocatedFetching />
    </SolutionLayout>
  );
}

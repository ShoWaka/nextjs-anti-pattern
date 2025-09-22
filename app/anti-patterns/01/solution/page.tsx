import { ServerSideFetchSuspense } from "@/app/anti-patterns/01/_components/server-side-fetch";
import { SolutionLayout } from "@/app/layouts/solution-layout";

export default function SolutionPage() {
  const points = [
    "Server Componentとしてasync関数を使用",
    "サーバーサイドでデータフェッチを実行",
    "Suspenseを使用することでUX向上",
    "初回レンダリング時に完全なHTMLを生成",
    "SEOフレンドリー（HTMLに全データが含まれる）",
  ];

  const benefits = `
    【1. JavaScriptバンドルサイズの削減】
    Server Componentsのコードはクライアントに送信されません。
    データフェッチロジック、状態管理、依存ライブラリがすべてサーバー側に留まるため、
    クライアントが実行するJavaScriptの量が大幅に削減されます。

    【2. データフェッチの最適化】
    ・サーバー側でデータソースに直接アクセス可能
    ・データベースへの直接クエリが可能
    ・APIキーやトークンをクライアントに露出させない
    ・サーバー間の高速な内部ネットワークを活用

    【3. 優れたパフォーマンス】
    ・初回ページロード時に完全なHTMLが提供される
    ・ユーザーは待機時間なしにコンテンツを閲覧可能
    ・Time to Interactive (TTI) の短縮
    ・Core Web Vitalsの改善

    【4. SEOの向上】
    検索エンジンがクロールする際、すべてのコンテンツが
    初回HTMLに含まれているため、適切にインデックスされます。

    【5. セキュリティの強化】
    機密情報（APIキー、データベース接続情報など）を
    サーバー側に保持し、クライアントに露出させません。
  `;

  return (
    <SolutionLayout
      title="ソリューション #1: Server Componentsでのデータフェッチ"
      points={points}
      benefits={benefits}
      antiPatternLink="/anti-patterns/01"
    >
      <ServerSideFetchSuspense />
    </SolutionLayout>
  );
}

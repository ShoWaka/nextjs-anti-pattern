import { ClientSideFetch } from "@/app/anti-patterns/01/_components/client-side-fetch";
import { AntiPatternLayout } from "@/app/layouts/anti-pattern-layout";

export default function Page() {
  const points = [
    "クライアントコンポーネント（'use client'）でuseEffectを使ったデータフェッチ",
    "ページ読み込み後にAPIを呼び出している",
    "ローディング中はスピナーが表示される",
    "SEOに不利（初回HTMLにデータが含まれない）",
  ];

  const reason = `
    【1. バンドルサイズの増大】
    クライアントサイドでデータフェッチを行うために、useEffectやuseState、
    そしてフェッチロジックのコードがJavaScriptバンドルに含まれます。
    これによりダウンロード・パース・実行時間が増加します。

    【2. パフォーマンスの低下】
    ページロード → JavaScriptダウンロード・実行 → データフェッチ開始 → データ取得完了
    という段階的な処理により、ユーザーは長い待機時間を経験します。
    特にネットワークが遅い環境では、この問題が顕著になります。

    【3. SEOへの悪影響】
    検索エンジンのクローラーが初回HTMLを取得した際、データが含まれていないため、
    コンテンツが適切にインデックスされない可能性があります。

    【4. ネットワークリクエストの非効率性】
    ブラウザとAPIサーバー間でデータフェッチが行われるため、
    サーバー間の高速な内部通信を活用できません。

    Server Componentsを使用すれば、これらの問題をすべて解決できます。
  `;

  return (
    <AntiPatternLayout
      title="アンチパターン #1: クライアントサイドでの不要なデータフェッチ"
      points={points}
      reason={reason}
      solutionLink="/anti-patterns/01/solution"
    >
      <ClientSideFetch />
    </AntiPatternLayout>
  );
}

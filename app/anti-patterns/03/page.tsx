import { AntiPatternLayout } from "@/app/layouts/anti-pattern-layout";
import { ClientComponentSearch } from "./_components/all-client-components";

export default function Page() {
  const points = [
    "ユーザー操作に基づく検索をClient Component + useEffectで実装",
    "フォーム送信やデータフェッチが全てクライアントサイド",
    "状態管理にuseState、副作用にuseEffectを使用",
    "Server Actionsの恩恵を受けられない実装",
  ];

  const reason = `
    【1. クライアントサイドでの複雑な状態管理】
    ユーザー操作に基づくデータフェッチと再レンダリングを
    useState + useEffectで実装すると、状態管理が複雑になります。
    ローディング状態、エラー状態、検索結果の管理が煩雑です。

    【2. Server Actionsの利点を活用できない】
    Next.js App Routerでは、ユーザー操作に基づくデータフェッチには
    Server ActionsとuseActionStateの組み合わせが推奨されますが、
    従来のClient Componentアプローチではその恩恵を受けられません。

    【3. SEOとプリレンダリングの問題】
    検索結果がクライアントサイドでのみ生成されるため、
    検索エンジンがインデックスできず、URLの共有も困難です。

    【4. パフォーマンスの低下】
    ・JavaScriptバンドルサイズの増加
    ・クライアントサイドでのデータフェッチによる遅延
    ・不要な再レンダリングの発生

    【5. 開発体験の悪化】
    useEffectのデバウンス処理、複数の状態管理、
    エラーハンドリングなど、実装が複雑になりがちです。

    【6. URL状態との同期困難】
    検索クエリをURLに反映させたり、ブラウザの戻る/進む
    ボタンとの連携が困難になります。

    Server ActionsとuseActionStateを使用することで、
    これらの問題をエレガントに解決できます。
  `;

  return (
    <AntiPatternLayout
      title="アンチパターン #3: ユーザー操作での不適切なデータフェッチ"
      points={points}
      reason={reason}
      solutionLink="/anti-patterns/03/solution"
    >
      <ClientComponentSearch />
    </AntiPatternLayout>
  );
}
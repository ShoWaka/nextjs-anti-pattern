import { SolutionLayout } from "@/layouts/solution-layout";
import { ServerActionSearch } from "../_components/server-action-search";

export default function SolutionPage() {
  const points = [
    "Server Actionsを使用したサーバーサイドデータフェッチ",
    "useActionStateによるシンプルな状態管理",
    "フォーム送信と状態更新の自動連携",
    "複雑なuseEffectやuseStateが不要",
    "プログレッシブエンハンスメント対応",
  ];

  const benefits = `
    【1. シンプルで明確な実装】
    useActionStateにより、ローディング状態、エラー状態、結果の管理が
    一つのフックで完結します。複雑なuseEffect + useStateの組み合わせが不要です。

    【2. Server Actionsによるサーバーサイド実行】
    データフェッチがサーバーサイドで実行されるため、
    ・データベースへの直接アクセス可能
    ・APIキーなどの機密情報をクライアントに露出しない
    ・サーバー間の高速通信を活用

    【3. 自動的なローディング状態管理】
    isPendingフラグにより、Server Action実行中の状態が
    自動的に管理されます。手動でsetLoading(true/false)する必要がありません。

    【4. プログレッシブエンハンスメント】
    JavaScriptが無効でもフォーム送信が動作し、
    段階的にリッチな体験を提供できます。

    【5. 型安全性の向上】
    Server ActionsはTypeScriptの恩恵を完全に受けられ、
    サーバーとクライアント間のデータフローが型安全になります。

    【6. SEOとアクセシビリティ】
    フォームベースの実装により、検索エンジンのクローラーや
    スクリーンリーダーでも適切に動作します。

    【7. 開発体験の向上】
    ・エラーハンドリングが簡潔
    ・状態管理のコードが削減

    これがNext.js App Routerにおける
    ユーザー操作ベースデータフェッチのベストプラクティスです。
  `;

  return (
    <SolutionLayout
      title="ソリューション #3: Server ActionsとuseActionState"
      points={points}
      benefits={benefits}
      antiPatternLink="/anti-patterns/03"
      references={[
        {
          link: "https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_1_interactive_fetch",
          title: "Next.jsの考え方 - ユーザー操作とデータフェッチ",
        },
        {
          link: "https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_3_data_mutation",
          title: "Next.jsの考え方 - データ操作とServer Actions",
        },
      ]}
      nextPatternLink="/anti-patterns/04"
      nextPatternTitle="パターン #04: Server Actionsでの例外ベースエラーハンドリング"
    >
      <ServerActionSearch />
    </SolutionLayout>
  );
}

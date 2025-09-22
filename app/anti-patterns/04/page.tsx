import { AntiPatternLayout } from "@/layouts/anti-pattern-layout";
import { ExceptionBasedForm } from "./_components/exception-form";

export default function AntiPattern04Page() {
  const points = [
    "Server Actionsでの例外ベースエラーハンドリング",
    "予測可能なエラーもthrowで処理",
    "Error Boundaryが必要になる複雑な構造",
    "エラーの種類が区別できない問題",
  ];

  const whyAntiPattern = `
    【1. 予測可能なエラーと予期しないエラーの混在】
    バリデーションエラーや重複チェックなどの「予測可能なエラー」も
    例外としてthrowすると、システムエラーと区別がつきません。

    【2. Error Boundaryの必要性】
    例外がthrowされるとError Boundaryでのキャッチが必要になり、
    アプリケーションの構造が複雑になります。

    【3. デバッグの困難さ】
    すべてのエラーがスタックトレースを生成するため、
    ログが混乱し、真の問題の特定が困難になります。

    【4. 一貫性のないユーザー体験】
    予測可能なエラーと予期しないエラーで
    ユーザーに表示される内容が一貫しません。

    【5. 型安全性の欠如】
    例外は型システムで表現されないため、
    どのようなエラーが発生する可能性があるかが不明確です。

    Server Actionsでは「予測可能なエラーは戻り値で表現する」が
    Next.jsのベストプラクティスです。
  `;

  return (
    <AntiPatternLayout
      title="アンチパターン #4: Server Actionsでの例外ベースエラーハンドリング"
      points={points}
      reason={whyAntiPattern}
      solutionLink="/anti-patterns/04/solution"
    >
      <ExceptionBasedForm />
    </AntiPatternLayout>
  );
}

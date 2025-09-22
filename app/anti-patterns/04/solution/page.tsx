import { SolutionLayout } from "@/layouts/solution-layout";
import { ReturnValueBasedForm } from "../_components/return-value-form";

export default function SolutionPage() {
  const points = [
    "戻り値でエラーを表現するベストプラクティス",
    "予測可能なエラーの型安全な処理",
    "Error Boundaryが不要なシンプルな構造",
    "一貫したエラーハンドリング",
    "予期しないエラーのみtry-catchで処理",
  ];

  const benefits = `
    【1. 明確なエラー分類】
    予測可能なエラー（バリデーション、重複など）は戻り値で表現し、
    予期しないエラー（ネットワーク、データベース障害など）のみを例外として扱います。

    【2. 型安全性の向上】
    戻り値の型定義により、どのようなエラーが発生する可能性があるかが
    TypeScriptの型システムで表現され、コンパイル時にチェックできます。

    【3. シンプルなエラーハンドリング】
    Error Boundaryが不要で、通常の条件分岐でエラー処理ができるため、
    コンポーネントの構造がシンプルになります。

    【4. 一貫したユーザー体験】
    すべてのエラーが同じパターンで処理されるため、
    ユーザーに表示されるエラーメッセージが一貫しています。

    【5. デバッグのしやすさ】
    予測可能なエラーはログに出力されず、
    真のシステムエラーのみがスタックトレースとして記録されます。

    【6. テストのしやすさ】
    戻り値ベースのエラーハンドリングは、
    単体テストでの検証が容易です。

    【7. パフォーマンス向上】
    例外の生成・スタックトレースの収集が不要なため、
    パフォーマンス面でも有利です。

    これがNext.js Server Actionsにおけるエラーハンドリングの
    ベストプラクティスです。
  `;

  return (
    <SolutionLayout
      title="ソリューション #4: 戻り値ベースエラーハンドリング"
      points={points}
      benefits={benefits}
      antiPatternLink="/anti-patterns/04"
      references={[
        {
          link: "https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/part_5_error_handling#server-actions%E3%81%AE%E3%82%A8%E3%83%A9%E3%83%BC",
          title: "Next.jsの考え方 - Server Actionsのエラーハンドリング",
        },
      ]}
    >
      <ReturnValueBasedForm />
    </SolutionLayout>
  );
}

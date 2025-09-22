import Link from "next/link";

export default function IntroductionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Next.js データフェッチ アンチパターン学習
              </h1>
              <p className="mt-2 text-gray-600">前書き</p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              🏠 ホームに戻る
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            この資料について
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              この学習資料は、Next.jsにおけるデータフェッチのアンチパターンを
              実際のコード例とともに学習することを目的としています。
            </p>

            <p>
              現代のWebアプリケーション開発において、Next.jsは非常に強力なフレームワークです。
              しかし、その豊富な機能と柔軟性ゆえに、時として非効率的な実装や
              パフォーマンスを損なう書き方をしてしまうことがあります。
            </p>

            <p>
              せっかくの機会ですので、Next.jsのベストプラクティスに則ったパフォーマンスの高いアプリケーションの構築を目指しましょう！
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="font-medium text-blue-800 mb-2">参考文献</p>
              <p className="text-blue-700">
                この資料は
                <a
                  href="https://zenn.dev/akfm/books/nextjs-basic-principle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline ml-1"
                >
                  「Next.jsの考え方」
                </a>
                に則って作成されています。
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              学習の進め方
            </h3>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 mt-1">1.</span>
                <div>
                  <strong>アンチパターンを観察:</strong>
                  <span className="block text-gray-600 mt-1">
                    まず問題のあるコードの動作を実際に確認し、どのような問題が発生するかを体感します。
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 mt-1">2.</span>
                <div>
                  <strong>問題点の理解:</strong>
                  <span className="block text-gray-600 mt-1">
                    なぜそのアプローチが問題なのか、技術的な背景とともに詳しく解説します。
                  </span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">3.</span>
                <div>
                  <strong>改善版の確認:</strong>
                  <span className="block text-gray-600 mt-1">
                    ベストプラクティスに基づいた改善版のコードと、その利点を学習します。
                  </span>
                </div>
              </li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-8">
              <h4 className="font-medium text-yellow-800 mb-3">
                ⚖️ 重要な考慮点：トレードオフについて
              </h4>
              <div className="text-yellow-700 space-y-2">
                <p>
                  この資料で紹介するソリューションは、多くの場面でベストプラクティスとされる手法ですが、
                  <strong>
                    ありとあらゆる状況に適用できる万能な解決策ではありません
                  </strong>
                  。
                </p>
                <p>
                  実装手法には<strong>トレードオフ</strong>
                  が存在するものが多くあります。
                </p>
                <p>
                  プロジェクトの要件、チームの技術スタック、運用環境などを総合的に考慮して、
                  最適なアプローチを選択することが重要です。
                </p>
                <p>
                  <strong>
                    トレードオフに関しては各参照記事の最下部を確認してください。
                  </strong>
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
              実装選択の指針
            </h3>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>Server Components</strong>:
                    SEOが重要で、静的コンテンツが多い場合
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>Client Components</strong>:
                    リアルタイム更新や複雑なUIインタラクションが必要な場合
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>Server Actions</strong>:
                    フォーム送信やデータ変更操作がメインの場合
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>
                    <strong>データコロケーション</strong>:
                    コンポーネントの独立性と再利用性を重視する場合
                  </span>
                </li>
              </ul>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                学習を開始する →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

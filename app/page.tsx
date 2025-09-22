import Link from "next/link";

export default function Home() {
  const antiPatterns = [
    {
      id: "01",
      title: "クライアントサイドでの不要なデータフェッチ",
      description:
        "Server Componentsが使える場面でClient Componentsを使用してデータフェッチ",
    },
    {
      id: "02",
      title: "過度なClient Components使用",
      description: "インタラクティブでない部分までClient Componentsにしている",
      disabled: true,
    },
    {
      id: "03",
      title: "不適切なキャッシュ戦略",
      description: "revalidateの設定ミスやキャッシュの無効化忘れ",
      disabled: true,
    },
    {
      id: "04",
      title: "Waterfall問題",
      description: "並列実行できるデータフェッチを順次実行している",
      disabled: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Next.js データフェッチ アンチパターン学習
          </h1>
          <p className="mt-2 text-gray-600">
            よくある間違いを実例で学び、ベストプラクティスを身につけよう
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              📖 学習を始める前に
            </h2>
            <p className="text-gray-600 mb-4">
              この資料の背景や学習方法について理解を深めることで、より効果的に学習を進めることができます。
            </p>
            <Link
              href="/introduction"
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
            >
              前書きを読む →
            </Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {antiPatterns.map((pattern) => (
            <div
              key={pattern.id}
              className={`bg-white rounded-lg shadow-md p-6 ${
                pattern.disabled ? "opacity-50" : "hover:shadow-lg"
              } transition-shadow`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    パターン #{pattern.id}
                  </h2>
                  <h3 className="text-lg font-medium text-gray-700 mb-3">
                    {pattern.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pattern.description}
                  </p>
                </div>
              </div>
              {!pattern.disabled ? (
                <Link
                  href={`/anti-patterns/${pattern.id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  学習を開始 →
                </Link>
              ) : (
                <span className="mt-4 inline-block bg-gray-300 text-gray-500 px-4 py-2 rounded cursor-not-allowed">
                  準備中
                </span>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

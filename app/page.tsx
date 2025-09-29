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
      title: "データフェッチの集中化（コロケーション不足）",
      description:
        "親コンポーネントで全データを取得してpropsで渡す非効率なパターン",
    },
    {
      id: "03",
      title: "ユーザー操作での不適切なデータフェッチ",
      description:
        "Server Actionsを使うべき場面でのClient Component + useEffect使用",
    },
    {
      id: "04",
      title: "Server Actionsでの例外ベースエラーハンドリング",
      description: "予測可能なエラーも例外でthrowする非効率なエラー処理",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Next.js フロントエンドチーム アンチパターン勉強会
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
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
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
              <Link
                href={`/anti-patterns/${pattern.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                学習を開始 →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-6 border border-blue-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="text-2xl mr-2">📝</span>
              理解度チェック
            </h2>
            <p className="text-gray-700 mb-4">
              学習を終えた後は、理解度を確認するためのアンケートにご協力ください。
              あなたの理解度を把握し、今後の学習に役立てることができます。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://forms.gle/1G9HdiQWDPvzek6W8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
              >
                {/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                理解度アンケートに回答する
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

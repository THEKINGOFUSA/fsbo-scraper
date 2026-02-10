export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">FSBO Car Deal Finder</h1>
        <p className="text-lg text-gray-700 mb-8">
          Automated scraper for For Sale By Owner car listings
        </p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Scrapes FSBO car listings from multiple sources</li>
            <li>AI-powered market value estimation</li>
            <li>Filters deals 30%+ below market value</li>
            <li>Email notifications for new deals</li>
            <li>Google Sheets integration</li>
          </ul>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>Deployment Status: Active</p>
          <p>Environment: {process.env.NODE_ENV}</p>
        </div>
      </div>
    </main>
  )
}

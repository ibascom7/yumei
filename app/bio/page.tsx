import Link from "next/link";

export default function Bio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 bg-white/80 px-8 py-4 shadow-lg mb-8 border-4 border-blue-800 inline-block">
          Bio
        </h1>

        <div className="bg-white/80 p-6 border-4 border-blue-800 shadow-lg">
          <p className="text-blue-900">Coming soon...</p>
        </div>

        <Link
          href="/"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 shadow-md transition-colors border-2 border-blue-900"
        >
          ← Back Home
        </Link>
      </div>
    </div>
  );
}

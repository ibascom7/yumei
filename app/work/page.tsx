import Link from "next/link";

export default function Work() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 bg-white/80 px-8 py-4 shadow-lg mb-8 border-4 border-purple-800 inline-block">
          Work
        </h1>

        <div className="bg-white/80 p-6 border-4 border-purple-800 shadow-lg">
          <p className="text-purple-900">Coming soon...</p>
        </div>

        <Link
          href="/"
          className="inline-block mt-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 shadow-md transition-colors border-2 border-purple-900"
        >
          ← Back Home
        </Link>
      </div>
    </div>
  );
}

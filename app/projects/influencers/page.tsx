import Link from "next/link";
import Image from "next/image";

export default function Influencers() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="border-b border-gray-300 px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-6">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            <Image
              src="/icon.png"
              alt="Home"
              width={24}
              height={24}
              className="rounded sm:w-7 sm:h-7"
            />
          </Link>
          <Link
            href="/projects"
            className="text-lg sm:text-xl font-bold hover:opacity-70 transition-opacity"
          >
            Projects
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-lg sm:text-xl font-bold">Influencers</span>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-3 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Influencers</h1>
          <p className="text-gray-600 mb-8">Who is the most influential influencer?</p>

          <div className="border border-gray-300 rounded-lg p-4 sm:p-6 bg-white shadow-sm">
            <p className="text-gray-700">Project content coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

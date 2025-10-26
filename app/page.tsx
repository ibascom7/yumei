import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,350 Q100,300 150,320 T250,300 T350,280" stroke="#22c55e" strokeWidth="8" fill="none" opacity="0.6"/>
          <path d="M20,300 Q80,250 140,270 T240,250 T340,230" stroke="#16a34a" strokeWidth="6" fill="none" opacity="0.7"/>
          <path d="M80,380 Q130,330 180,350 T280,330 T380,310" stroke="#15803d" strokeWidth="10" fill="none" opacity="0.5"/>
          <path d="M10,250 Q70,200 130,220 T230,200 T330,180" stroke="#166534" strokeWidth="4" fill="none" opacity="0.8"/>
          <circle cx="120" cy="310" r="4" fill="#22c55e" opacity="0.6"/>
          <circle cx="220" cy="290" r="3" fill="#16a34a" opacity="0.7"/>
          <circle cx="320" cy="270" r="5" fill="#15803d" opacity="0.5"/>
          <circle cx="180" cy="340" r="3" fill="#166534" opacity="0.8"/>
        </svg>
      </div>
      <div className="flex flex-col items-center gap-6 relative z-10">
        <h1 className="text-4xl font-bold text-green-800 bg-white/80 px-8 py-4 rounded-lg shadow-lg">
          Welcome to Wonderland
        </h1>
        <Link
          href="/notes"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
        >
          Notes
        </Link>
      </div>
    </div>
  );
}

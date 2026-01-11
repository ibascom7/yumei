import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
      <div className="flex flex-col items-center pt-[25vh] relative z-10">
        <h1 className="mx-4 md:mx-0 text-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-green-800 bg-white/80 px-8 py-4 md:px-12 md:py-6 lg:px-16 lg:py-8 shadow-lg mb-8 md:mb-12 lg:mb-16 border-4 md:border-6 lg:border-8 border-green-800">
          Welcome to Wonderland
        </h1>
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 relative">
          <Link
            href="/notes"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 md:px-10 md:py-5 lg:px-14 lg:py-7 md:text-xl lg:text-2xl shadow-md transition-colors border-2 md:border-3 lg:border-4 border-green-900 text-center"
          >
            Notes
          </Link>
          <Image
            src="/that_way.png"
            alt="cat"
            width={120}
            height={120}
            className="absolute -right-24 sm:-right-32 md:-right-48 lg:-right-64 xl:-right-80 top-0 w-[80px] sm:w-[100px] md:w-[140px] lg:w-[180px] xl:w-[220px] h-auto"
          />
          <Link
            href="/projects"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 md:px-10 md:py-5 lg:px-14 lg:py-7 md:text-xl lg:text-2xl shadow-md transition-colors border-2 md:border-3 lg:border-4 border-green-900 text-center"
          >
            Projects
          </Link>
          <Image
            src="/cohi.gif"
            alt="yummy"
            width={150}
            height={150}
            className="absolute -left-24 sm:-left-32 md:-left-48 lg:-left-64 xl:-left-80 top-0 w-[80px] sm:w-[100px] md:w-[140px] lg:w-[180px] xl:w-[220px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const classes = [
    { name: "Abstract Algebra", href: "/notes/algebra", color: "red" },
    { name: "Data Programming", href: "/notes/data-programming", color: "blue" },
  ];

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="border-b border-gray-300 px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center gap-2 sm:gap-6">
          <Link
            href="/"
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/icon.png"
              alt="Home"
              width={24}
              height={24}
              className="rounded sm:w-7 sm:h-7"
            />
          </Link>
          <h2 className="text-lg sm:text-xl font-bold">Notes</h2>
          <div className="flex gap-1 sm:gap-4 ml-auto text-sm sm:text-base">
            {classes.map((cls) => {
              const isActive = pathname.startsWith(cls.href);
              const underlineColor = cls.color === "red" ? "#dc2626" : "#2563eb";
              const hoverBg = cls.color === "red" ? "hover:bg-red-100" : "hover:bg-blue-100";

              return (
                <Link
                  key={cls.href}
                  href={cls.href}
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded-md transition-colors text-black ${hoverBg}`}
                  style={isActive ? {
                    textDecoration: "underline",
                    textDecorationColor: underlineColor,
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "4px"
                  } : undefined}
                >
                  {cls.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-3 sm:p-8">{children}</main>
    </div>
  );
}

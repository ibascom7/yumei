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
    <div className="min-h-screen bg-white text-black flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-300 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Link
            href="/"
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/icon.png"
              alt="Home"
              width={32}
              height={32}
              className="rounded"
            />
          </Link>
          <h2 className="text-2xl font-bold">Notes</h2>
        </div>
        <nav className="space-y-2">
          {classes.map((cls) => {
            const isActive = pathname.startsWith(cls.href);
            const underlineColor = cls.color === "red" ? "#dc2626" : "#2563eb";
            const hoverBg = cls.color === "red" ? "hover:bg-red-100" : "hover:bg-blue-100";

            return (
              <Link
                key={cls.href}
                href={cls.href}
                className={`block px-4 py-2 rounded-md transition-colors text-black ${hoverBg}`}
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
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}

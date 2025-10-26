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
            const isActive = pathname === cls.href;
            const colorClasses = cls.color === "red"
              ? isActive
                ? "bg-red-600 text-white"
                : "hover:bg-red-100 text-black"
              : isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-100 text-black";

            return (
              <Link
                key={cls.href}
                href={cls.href}
                className={`block px-4 py-2 rounded-md transition-colors ${colorClasses}`}
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

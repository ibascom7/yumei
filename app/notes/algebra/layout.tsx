"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AlgebraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const tabs = [
    { name: "Theorems", href: "/notes/algebra/theorems" },
    { name: "Definitions", href: "/notes/algebra/definitions" },
    { name: "Articles", href: "/notes/algebra/articles" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Abstract Algebra</h1>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 border-b border-gray-300">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`px-4 py-2 border-b-2 transition-colors ${
                isActive
                  ? "border-red-600 text-red-600 font-semibold"
                  : "border-transparent text-gray-600 hover:text-black"
              }`}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>

      {/* Content */}
      {children}
    </div>
  );
}

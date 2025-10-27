"use client";

import Link from "next/link";

export default function NotesPage() {
  // Calculate content counts for each class
  const classes = [
    {
      name: "Abstract Algebra",
      href: "/notes/algebra",
      theorems: 12,
      definitions: 3,
      articles: 1,
      color: "#ef4444", // red-500
    },
    {
      name: "Data Programming",
      href: "/notes/data-programming",
      theorems: 0,
      definitions: 0,
      articles: 0,
      color: "#3b82f6", // blue-500
    },
  ];

  // Calculate radius based on total content (sqrt of total items)
  const getRadius = (cls: typeof classes[0]) => {
    const total = cls.theorems + cls.definitions + cls.articles;
    return total > 0 ? Math.sqrt(total) : 1;
  };

  // Scale factor for visualization
  const scaleFactor = 30;

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Notes</h1>
      <p className="text-gray-600 mb-12 text-center max-w-md">
        Classes on the pain scale.
      </p>

      <div className="flex flex-wrap gap-12 items-center justify-center">
        {classes.map((cls) => {
          const radius = getRadius(cls);
          const size = radius * scaleFactor;

          return (
            <Link
              key={cls.href}
              href={cls.href}
              className="flex flex-col items-center gap-4 group"
            >
              <div
                className="rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: cls.color,
                  minWidth: "60px",
                  minHeight: "60px",
                }}
              >
                <span className="text-white font-bold text-center px-4 text-sm sm:text-base">
                  {cls.name}
                </span>
              </div>
              <div className="text-center text-sm text-gray-600">
                {cls.theorems + cls.definitions + cls.articles > 0 ? (
                  <div>
                    <div>{cls.theorems} theorems</div>
                    <div>{cls.definitions} definitions</div>
                    <div>{cls.articles} articles</div>
                  </div>
                ) : (
                  <div className="text-gray-400">No content yet</div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

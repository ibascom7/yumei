"use client";

import Link from "next/link";

export default function NotesPage() {
  // Calculate content counts for each class
  const classes = [
    {
      name: "Abstract Algebra",
      href: "/notes/algebra",
      content: [
        { label: "theorems", count: 34 },
        { label: "definitions", count: 55 },
        { label: "articles", count: 1 },
      ],
      color: "#ef4444", // red-500
    },
    {
      name: "Intermediate Analysis",
      href: "/notes/intermediate-analysis",
      content: [
        { label: "theorems", count: 34 },
        { label: "definitions", count: 13 },
        { label: "methods", count: 7 },
        { label: "techniques", count: 3 },
      ],
      color: "#3b82f6", // blue-500
    },
    {
      name: "Data Programming",
      href: "/notes/data-programming",
      content: [
        { label: "theorems", count: 0 },
        { label: "definitions", count: 0 },
        { label: "articles", count: 0 },
      ],
      color: "#22c55e", // green-500
    },
  ];

  // Calculate radius based on total content (sqrt of total items)
  const getRadius = (cls: typeof classes[0]) => {
    const total = cls.content.reduce((sum, item) => sum + item.count, 0);
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
                {cls.content.reduce((sum, item) => sum + item.count, 0) > 0 ? (
                  <div>
                    {cls.content.map((item, idx) => (
                      <div key={idx}>{item.count} {item.label}</div>
                    ))}
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

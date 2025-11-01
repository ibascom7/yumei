"use client";

import { BlockMath, InlineMath } from "react-katex";

export default function ArticlesPage() {
  return (
    <div>
      <article className="border border-gray-300 rounded-lg p-6 mb-6 bg-white shadow-sm">
        <h3 className="text-xl font-bold mb-4">Example Article</h3>

        <p className="mb-4 text-black">
          This is a placeholder article for Intermediate Analysis topics.
        </p>

        <p className="mb-4 text-black">
          Add your articles here following the same format.
        </p>

        <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-4">
          <BlockMath math="\text{Example mathematical expression}" />
        </div>

        <p className="text-black">
          You can reference <strong>Theorem 1</strong> and <strong>Definition 1</strong> from the other tabs.
        </p>
      </article>
    </div>
  );
}

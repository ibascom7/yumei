"use client";

import { BlockMath, InlineMath } from "react-katex";

export default function ArticlesPage() {
  return (
    <div>
      {/* Example article structure */}
      <article className="border border-gray-300 rounded-lg p-6 mb-6 bg-white shadow-sm">
        <h3 className="text-xl font-bold mb-4">Understanding Groups</h3>

        <p className="mb-4 text-black">
          A group is one of the fundamental structures in abstract algebra. The concept allows us to study symmetry in a mathematical way.
        </p>

        <p className="mb-4 text-black">
          For example, the integers <InlineMath math="\\mathbb{Z}" /> under addition form a group. We can verify each axiom:
        </p>

        <ul className="list-disc list-inside mb-4 text-black space-y-2">
          <li>Closure: The sum of any two integers is an integer</li>
          <li>Associativity: <InlineMath math="(a + b) + c = a + (b + c)" /></li>
          <li>Identity: <InlineMath math="0" /> is the additive identity</li>
          <li>Inverse: Every integer <InlineMath math="a" /> has an inverse <InlineMath math="-a" /></li>
        </ul>

        <div className="bg-gray-50 p-4 rounded border border-gray-200 mb-4">
          <BlockMath math="\\mathbb{Z} = \\{\\ldots, -2, -1, 0, 1, 2, \\ldots\\}" />
        </div>

        <p className="text-black">
          You can reference <strong>Theorem 1</strong> and <strong>Definition 1</strong> from the other tabs to understand properties of groups.
        </p>
      </article>
    </div>
  );
}

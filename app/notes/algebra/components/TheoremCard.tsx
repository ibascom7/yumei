"use client";

import { useState } from "react";
import { InlineMath, BlockMath } from "react-katex";

interface TheoremCardProps {
  number: number;
  title: string;
  statement: string;
  proof?: string;
}

export default function TheoremCard({ number, title, statement, proof }: TheoremCardProps) {
  const [isProofOpen, setIsProofOpen] = useState(false);

  // Calculate approximate width of "Theorem X. " for indentation
  const labelWidth = number < 10 ? "6em" : "6.5em";

  return (
    <div
      className={`border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-sm ${proof ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
      onClick={() => proof && setIsProofOpen(!isProofOpen)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="mb-3">
            <span className="font-bold text-red-600">Theorem {number}. </span>
            <span className="font-semibold text-black">{title}</span>
          </div>
          <div className="text-black" style={{ marginLeft: labelWidth }}>
            <BlockMath math={statement} />
          </div>
        </div>
        {proof && (
          <div
            className="flex-shrink-0 text-gray-600 transition-transform"
            style={{ transform: isProofOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        )}
      </div>

      {proof && isProofOpen && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="font-semibold mb-2 text-gray-700">Proof:</div>
          <div className="text-black" style={{ marginLeft: "3.5em" }}>
            <BlockMath math={proof} />
          </div>
        </div>
      )}
    </div>
  );
}

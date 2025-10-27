"use client";

import { BlockMath } from "react-katex";

interface DefinitionCardProps {
  number: number;
  term: string;
  definition: string;
}

export default function DefinitionCard({ number, term, definition }: DefinitionCardProps) {
  // Calculate approximate width of "Definition X. " for indentation
  const labelWidth = number < 10 ? "7.5em" : "8em";

  return (
    <div className="border border-gray-300 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 bg-white shadow-sm">
      <div className="mb-2 sm:mb-3 text-sm sm:text-base">
        <span className="font-bold text-red-600">Definition {number}. </span>
        <span className="font-semibold text-black">{term}</span>
      </div>
      <div className="text-black text-sm sm:text-base ml-0 sm:ml-[7.5em]">
        <BlockMath math={definition} />
      </div>
    </div>
  );
}

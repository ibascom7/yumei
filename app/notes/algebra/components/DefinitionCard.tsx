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
    <div className="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-sm">
      <div className="mb-3">
        <span className="font-bold text-red-600">Definition {number}. </span>
        <span className="font-semibold text-black">{term}</span>
      </div>
      <div className="text-black" style={{ marginLeft: labelWidth }}>
        <BlockMath math={definition} />
      </div>
    </div>
  );
}

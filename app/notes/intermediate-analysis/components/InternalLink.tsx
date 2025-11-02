"use client";

import Link from "next/link";

interface InternalLinkProps {
  type: "definition" | "theorem" | "technique" | "proof-method";
  number: number;
  children?: React.ReactNode;
}

export default function InternalLink({ type, number, children }: InternalLinkProps) {
  // Map type to path and default text
  const linkConfig = {
    definition: {
      path: "/notes/intermediate-analysis/definitions",
      prefix: "Definition"
    },
    theorem: {
      path: "/notes/intermediate-analysis/theorems",
      prefix: "Theorem"
    },
    technique: {
      path: "/notes/intermediate-analysis/problem-solving-techniques",
      prefix: "Technique"
    },
    "proof-method": {
      path: "/notes/intermediate-analysis/proof-methods",
      prefix: "Proof Method"
    }
  };

  const config = linkConfig[type];
  const href = `${config.path}#${type}-${number}`;
  const defaultText = `${config.prefix} ${number}`;

  return (
    <Link
      href={href}
      className="text-blue-600 hover:text-blue-800 underline font-medium"
    >
      {children || defaultText}
    </Link>
  );
}

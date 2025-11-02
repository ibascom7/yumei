/**
 * Converts simple link syntax in LaTeX to proper \href commands
 *
 * Syntax examples:
 * - [[definition 1]] -> Links to Definition 1
 * - [[theorem 5]] -> Links to Theorem 5
 * - [[technique 2]] -> Links to Technique 2
 * - [[proof-method 3]] -> Links to Proof Method 3
 *
 * You can also use custom text:
 * - [[definition 1|the limit definition]] -> "the limit definition" linking to Definition 1
 */
export function processLatexLinks(latex: string): string {
  // Pattern matches [[type number]] or [[type number|custom text]]
  const pattern = /\[\[(definition|theorem|technique|proof-method)\s+(\d+)(?:\|(.*?))?\]\]/gi;

  const pathMap = {
    definition: "/notes/intermediate-analysis/definitions",
    theorem: "/notes/intermediate-analysis/theorems",
    technique: "/notes/intermediate-analysis/problem-solving-techniques",
    "proof-method": "/notes/intermediate-analysis/proof-methods"
  };

  return latex.replace(pattern, (match, type, number, customText) => {
    const typeLower = type.toLowerCase() as keyof typeof pathMap;
    const path = pathMap[typeLower];
    const href = `${path}#${typeLower}-${number}`;

    // Capitalize first letter for display
    const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
    const displayText = customText || `${typeCapitalized} ${number}`;

    return `\\underline{\\href{${href}}{\\text{${displayText}}}}`;
  });
}

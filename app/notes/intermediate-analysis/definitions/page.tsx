import DefinitionCard from "../components/DefinitionCard";

export default function DefinitionsPage() {
  const definitions = [
    {
      number: 1,
      term: "5.1.1 Limit",
      definition: `\\text{Let } f: D \\to \\R \\text{ and let } c \\text{ be an accumulation point of D.}
                   \\\\ \\text{We say that a real number } L \\text{ is a limit of } f \\text{ at } c, \\text{ if}
                   \\\\ \\
                   \\\\ \\quad \\text{for each } \\varepsilon \\gt 0 \\text{ there exists a } \\delta \\gt 0
                   \\\\ \\quad \\text{such that } |f(x) - L| < \\varepsilon \\text{ whenever } x \\in D
                   \\\\ \\quad \\text{and } 0 < |x-c| < \\delta. 
                   `,
    },
    {
      number: 2,
      term: "5.1.13 Operations on Function",
      definition: `\\text{Let } f: D \\to \\R \\text{ and } g: D \\to \\R.
                   \\\\ \\
                   \\\\ \\quad \\text{a. The sum } f + g: D \\to \\R 
                   \\\\ \\quad \\ \\ \\ \\ \\text{is given by } (f+g)(x) = f(x)+g(x) \\ \\ \\forall x \\in D.
                   \\\\ \\
                   \\\\ \\quad \\text{b. The product } fg: D \\to \\R 
                   \\\\ \\quad \\ \\ \\ \\ \\text{is given by } (fg)(x) = f(x)*g(x) \\ \\ \\forall x \\in D.
                   \\\\ \\
                   \\\\ \\quad \\text{c. For } k \\in \\R, \\text{ the multiple } kf: D \\to \\R 
                   \\\\ \\quad \\ \\ \\ \\ \\text{is given by } (kf)(x) = k*f(x) \\ \\ \\forall x \\in D.
                   \\\\ \\
                   \\\\ \\quad \\text{d. If } g(x) \\neq 0 \\ \\forall x \\in D, \\text{ the quotient } f/g: D \\to \\R
                   \\\\ \\quad \\ \\ \\ \\ \\text{is given by } \\left(\\frac{f}{g}\\right)(x) = \\frac{f(x)}{g(x)} \\ \\ \\forall x \\in D.
      `,
    },
    {
      number: 3,
      term: "5.1.18 Right and Left Limit",
      definition: `\\text{Let } f: (a, b) \\to \\R.
                   \\\\ \\
                   \\\\ \\quad \\text{a. We say that a real number } L 
                   \\\\ \\quad \\ \\ \\ \\ \\text{is the right-hand limit of } f \\text{ at } a \\text{ and write}
                   \\\\ \\quad \\ \\ \\ \\ \\lim_{x \\to a^+}f(x) = L, 
                   \\\\ \\quad \\ \\ \\ \\ \\text{if } \\ \\forall \\varepsilon > 0 \\ \\ \\exists \\delta > 0 \\text{ such that } |f(x) - L| < \\varepsilon
                   \\\\ \\quad \\ \\ \\ \\ \\text{whenever } x \\in (a, b) \\text{ and } a < x < a + \\delta. 
                   \\\\ \\
                   \\\\ \\quad \\text{b. We say that a real number } L 
                   \\\\ \\quad \\ \\ \\ \\ \\text{is the left-hand limit of } f \\text{ at } a \\text{ and write}
                   \\\\ \\quad \\ \\ \\ \\ \\lim_{x \\to a^-}f(x) = L, 
                   \\\\ \\quad \\ \\ \\ \\ \\text{if } \\ \\forall \\varepsilon > 0 \\ \\ \\exists \\delta > 0 \\text{ such that } |f(x) - L| < \\varepsilon
                   \\\\ \\quad \\ \\ \\ \\ \\text{whenever } x \\in (a, b) \\text{ and } a - \\delta < x < a. 
      `,
    },
    {
      number: 4,
      term: "5.2.1 Continuous",
      definition: `\\text{Let } f: D \\to \\R \\text{ and let } c \\in D.
                   \\\\ \\
                   \\\\ \\quad \\text{a. We say that } f \\text{ is continuous at } c \\text{ if} 
                   \\\\ \\
                   \\\\ \\quad \\ \\ \\ \\ \\ \\forall \\varepsilon > 0 \\ \\ \\exists \\delta > 0 \\text{ such that } |f(x) - L| < \\varepsilon
                   \\\\ \\quad \\ \\ \\ \\ \\ \\text{whenever } x \\in D \\text{ and } |x-c| < \\delta.
                   \\\\ \\
                   \\\\ \\quad \\text{b. If } f \\text{ is continuous at each point of a subset } S \\subseteq D,
                   \\\\ \\quad \\ \\ \\ \\ \\text{then } f \\text{ is said to be continuous on S.}
                   \\\\ \\
                   \\\\ \\quad \\text{c. If } f \\text{ is continuous on its domain } D,
                   \\\\ \\quad \\ \\ \\ \\ \\text{Then } f \\text{ is said to be a continuous function.}
      `,
    },
    {
      number: 5,
      term: "5.3.1 Boundedness of a Function",
      definition: `\\text{A function } f: D \\to \\R \\text{ is said to be bounded}
                   \\\\ \\text{if its range } f(D) \\text{ is a bounded subset of } \\R.
                   \\\\ \\text{That is, } f \\text{ is bounded if } \\ \\exists M \\in \\R
                   \\\\ \\text{such that } |f(x)| \\leq M \\ \\ \\forall x \\in D.
      `,
    },
    {
      number: 6,
      term: "5.4.1 Uniformly Continuous",
      definition: `\\text{Let } f: D \\to \\R. 
                   \\\\ \\text{We say that } f \\text{ is uniformly continuous on } D \\text{ if}
                   \\\\ \\
                   \\\\ \\quad \\forall \\varepsilon > 0 \\ \\ \\exists \\delta > 0 \\text{ such that} |f(x) - f(y)| < \\varepsilon
                   \\\\ \\quad \\text{whenever } |x-y| < \\delta \\text{ and } x, y \\in D.
      `,
    },
    {
      number: 7,
      term: "6.1.1 Series Convergence",
      definition: `\\text{Let } f \\text{ be a real-valued function defined on an interval } I
                   \\\\ \\text{containing the point c. We say that } f \\text{ is differentiable at } c
                   \\\\ \\text{if the limit }
                   \\\\ \\
                   \\\\ \\lim_{x \\to c} \\frac{f(x)-f(c)}{x-c} \\text{ exists and is finite. }
                   \\\\ \\
                   \\\\ \\text{We denote the derivative of } f \\text{ at } c \\text{ by}
                   \\\\ \\
                   \\\\ f'(c) = \\lim_{x \\to c} \\frac{f(x)-f(c)}{x-c}
      `,
    },
    {
      number: 8,
      term: "6.2.1 Absolute and Local Maxima",
      definition: `\\text{Let } f: D \\to \\R \\text{ be a function.}
                   \\\\ \\
                   \\\\ \\text{a. } f \\text{ has an absolute maximum (minimum) at}
                   \\\\ \\ \\ \\ \\ c \\in D \\text{ if } f(c) \\geq f(x) \\ (f(c) \\leq f(x)) \\ \\ \\forall x \\in D.
                   \\\\ \\
                   \\\\ \\text{b. } f \\text{ has a local maximum (minimum)} \\text{at } c \\in D
                   \\\\ \\ \\ \\ \\ \\text{if there exists and open interval } I \\text{ containing c}
                   \\\\ \\ \\ \\ \\ \\text{such that } f(c) \\geq f(x) \\ (f(c) \\leq f(x)) \\ \\ \\forall x \\in I \\cap D.
      `,
    },
    {
      number: 9,
      term: "6.2.10 Monotonicity of Functions",
      definition: `\\text{Let } f \\text{ be a function and } I \\text{ be an interval.} 
                   \\\\ \\
                   \\\\ \\text{a. } f \\text{ is increasing on } I \\text{ if } f(x_1) \\leq f(x_2)
                   \\\\ \\ \\ \\ \\ \\text{for all } x_1, x_2 \\in I \\text{ with } x_1 < x_2.
                   \\\\ \\
                   \\\\ \\text{b. } f \\text{ is decreasing on } I \\text{ if } f(x_1) \\geq f(x_2)
                   \\\\ \\ \\ \\ \\ \\text{for all } x_1, x_2 \\in I \\text{ with } x_1 < x_2.
                   \\\\ \\
                   \\\\ \\text{c. } f \\text{ is strictly increasing on } I \\text{ if } f(x_1) < f(x_2)
                   \\\\ \\ \\ \\ \\ \\text{for all } x_1, x_2 \\in I \\text{ with } x_1 < x_2.
                   \\\\ \\
                   \\\\ \\text{d. } f \\text{ is strictly decreasing on } I \\text{ if } f(x_1) > f(x_2)
                   \\\\ \\ \\ \\ \\ \\text{for all } x_1, x_2 \\in I \\text{ with } x_1 < x_2.
      `,             
    }
  ];

  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          Catalog of Definitions from Intermediate Analysis.
        </p>
      </div>
      {definitions.map((def) => (
        <DefinitionCard
          key={def.number}
          number={def.number}
          term={def.term}
          definition={def.definition}
          id={`definition-${def.number}`}
        />
      ))}
    </div>
  );
}

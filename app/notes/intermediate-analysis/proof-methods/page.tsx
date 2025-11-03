import ProofMethodCard from "../components/ProofMethodCard";

export default function ProofMethodsPage() {
  const proofMethods = [
    {
      number: 1,
      title: "Prove Continuity",
      description: "Use the ε-δ definition of continuity at a point to prove that a given function is continuous at a given point.",
      examples: [
        {
          problemStatement: `\\text{Let } f: D \\to \\R \\text{ and let } c \\text{ be an isolated point in } D.
                             \\\\ \\text{Show that } f \\text{ is continuous at } c.
          `,
          solution: `\\text{Since } c \\text{ is isolated, } \\ \\exists \\delta > 0 \\text{ such that }
                     \\\\ \\text{if } |x-c| < \\delta \\text{ and } x \\in D, \\text{ then } x = c.
                     \\\\ \\
                     \\\\ \\text{Thus whenever } |x-c| < \\delta \\text{ and } x \\in D, \\text{ we have}
                     \\\\ \\
                     \\\\ |f(x)-f(c)| = |f(c) - f(c)| = 0 < \\varepsilon \\ \\ \\forall \\varepsilon > 0.
                     \\\\ \\
                     \\\\ \\text{Hence } f \\text{ is continuous at } c.
          ` 
        },
        {
          problemStatement: `\\text{Define } f: \\R \\to \\R \\text{ by } f(x) = x^2 + 3x - 5.
                             \\\\ \\text{Use [[definition 4]] to prove that } f \\text{ is continuous at } 3. 
          `,
          solution: `\\text{Trying to show this is true:}
                     \\\\ \\quad \\forall \\varepsilon > 0 \\ \\ \\exists \\delta > 0 \\text{ such that } |f(x) - f(c)| < \\varepsilon
                     \\\\ \\quad \\text{whenever } x \\in D \\text{ and } |x-c| < \\delta.
                     \\\\ \\
                     \\\\ \\text{Scratch:}
                     \\\\ \\quad f(c) = f(3) = 13
                     \\\\ \\quad |f(x) - f(c)| = |(x^2 + 3x - 5) - (13)| 
                     \\\\ \\quad = |x^2 + 3x -18| = |(x-3)(x+6)| = |x-3|\\cdot|x+6|
                     \\\\ \\
                     \\\\ \\quad \\text{to get bounds take } \\delta \\leq 1,
                     \\\\ \\quad \\text{then } |x-3| < 1 \\implies  -1 < x-3 < 1 \\implies 8 < x+6 < 10.
                     \\\\ \\quad \\text{So, } |x+6| < 10.
                     \\\\ \\quad \\text{Then, for } |x-3|<1,
                     \\\\ \\quad |f(x)-f(3)| \\leq 10|x-3| < \\varepsilon \\implies |x-3| < \\frac{\\varepsilon}{10}.
                     \\\\ \\quad \\text{So } \\delta \\leq \\frac{\\varepsilon}{10} \\text{ and } \\delta \\leq 1 \\text{ are good options for our } \\delta.
                     \\\\ \\
                     \\\\ \\text{Proof:}
                     \\\\ \\quad \\text{Let } \\varepsilon > 0. \\text{ Choose } \\delta \\leq \\min\\left(1, \\frac{\\varepsilon}{10}\\right).
                     \\\\ \\quad \\text{Suppose } x \\in \\R \\text{ satisfies } |x - 3| < \\delta.
                     \\\\ \\quad \\text{Since } \\delta \\leq 1, \\ |x-3|<1.
                     \\\\ \\quad \\text{Which implies } |x+6|<10. 
                     \\\\ \\quad \\text{So } |f(x) - f(3)| = |x-3|\\cdot|x+6| < |x-3|\\cdot10.
                     \\\\ \\quad \\text{Since } |x-3|<\\delta\\leq\\frac{\\varepsilon}{10},
                     \\\\ \\quad \\text{we get } |f(x) - f(3)| < 10 \\cdot \\frac{\\varepsilon}{10} = \\varepsilon.
                     \\\\ \\quad \\text{Thus, for every } \\varepsilon > 0 
                     \\\\ \\quad \\text{we have produced a } \\delta > 0 \\text{ such that } |x-3|<\\delta
                     \\\\ \\quad \\text{implies } |f(x)-f(3)|<\\varepsilon.
                     \\\\ \\quad \\text{Therefore } f \\text{ is continuous at } 3.
          `
        },
        {
          problemStatement: `\\text{Define } f: \\R \\to \\R \\text{ via}
                             \\\\ f(x) = \\begin{cases}
                             x \\sin \\frac{1}{x} & x \\neq 0 
                             \\\\ 0 & x = 0.
                             \\end{cases}
                             \\\\ \\text{Show that } f \\text{ is continuous at } x = 0.
          `,
          solution: `\\text{Let } \\varepsilon > 0. \\text{ Since}
                     \\\\ |f(x)-f(0)| = |x \\sin \\frac{1}{x}| \\leq |x| \\ \\ \\forall x,
                     \\\\ \\text{we may let } \\delta = \\varepsilon.
                     \\\\ \\text{Then when } |x-0| < \\delta \\text{ we have}
                     \\\\ |f(x) - f(0)| \\leq |x| < \\delta = \\varepsilon.
                     \\\\ \\text{Hence } f \\text{ is continuous at } x = 0.
          `
        }
      ]
    },
    {
      number: 2,
      title: "Prove Discontinuity",
      description: "Use the ε-δ definition of continuity at a point to prove that a given function is discontinuous at a given point.",
      examples: [
        {
          problemStatement: `\\text{Define } f: \\R \\to \\R \\text{ by } f(x) = \\begin{cases} 5x & x \\in \\mathbb{Q} \\\\ x^2 + 6 & x \\in \\R \\setminus \\mathbb{Q}. \\end{cases}
                             \\\\ \\text{Prove that } f \\text{ is discontinuous at } 1.
          `,
          solution: `\\text{At } x = 1, f(x) = 5 \\text{ because } 1 \\in \\mathbb{Q}.
                     \\\\ \\text{To show } f \\text{ is discontinuous at 1, let } \\varepsilon = 1.
                     \\\\ \\text{For any } \\delta > 0, (1 - \\delta, 1 + \\delta)
                     \\\\ \\text{contains both rational and irrational numbers.}
                     \\\\ \\text{so choose } r \\in \\mathbb{Q} \\text{ such that } r \\in (1 - \\delta, 1 + \\delta),
                     \\\\ \\text{then } f(r) = 5r, \\text{ so } |f(r) - f(1)| = |5r - 5| = 5|r - 1|.
                     \\\\ \\text{Choose } i \\in \\R \\setminus \\mathbb{Q} \\text{ such that } i \\in (1-\\delta, 1+\\delta).
                     \\\\ \\text{Then } f(i) = i^2 + 6, 
                     \\\\ \\text{so } |f(i) - f(1)| = |i^2 + 6 - 5| = |i^2 + 1| \\geq 1 = \\varepsilon.
                     \\\\ \\text{Therefore, no matter which } \\delta \\text{ we choose},
                     \\\\ \\exists x \\in \\R \\text{ with } |x-1| < \\delta \\text{ but } |f(x) - f(1)| \\geq \\varepsilon.
                     \\\\ \\text{Thus, } f \\text{ is discontinuous at 1.}
          `
        },
        {
          problemStatement: `f(x) = \\begin{cases} 0 & \\text{if } x < 0 \\\\ 1 & \\text{if } x \\geq 0 \\end{cases} \\text{ is discontinuous at } x = 0.
          `,
          solution: `\\text{Let } \\varepsilon = \\frac{1}{2}.
                     \\\\ \\text{Let } \\delta > 0.
                     \\\\ \\text{Choose } x = \\frac{-\\delta}{2}.
                     \\\\ \\
                     \\\\ \\text{Then } |x-0| = \\frac{\\delta}{2} < \\delta,
                     \\\\ \\text{but } |f(x) - f(0)| = |0 - 1| = 1 \\geq \\frac{1}{2} = \\varepsilon.
                     \\\\ \\
                     \\\\ \\text{Thus } \\ \\exists \\varepsilon > 0 \\text{ such that } \\ \\forall \\delta > 0,
                     \\\\ \\exists x \\in \\R \\text{ such that } |x - 1| < \\delta \\text{ yet } |f(x) - f(1)| \\geq \\varepsilon.
                     \\\\ \\text{Therefore, } f \\text{ is discontinuous at 0}.
          `
        }
      ]
    },
    {
      number: 3,
      title: "Prove Continuity Using Sequential Condition",
      description: "Use sequences (Theorem 5.2.3(b)) to prove that a given function is continuous at a given point.",
      examples: [
        {
          problemStatement: "\\text{Example problem statement}",
          solution: `\\text{Solution...}`
        }
      ]
    },
    {
      number: 4,
      title: "Prove Discontinuity Using Sequential Condition",
      description: "Use sequences (Theorem 5.2.7) to prove that a given function is discontinuous at a given point.",
      examples: [
        {
          problemStatement: `\\text{Let } D = (-\\infty, 0) \\cup (0, \\infty) \\text{ and let } f(x) = \\frac{1}{x} \\ \\ \\forall x \\in D.
                             \\\\ \\text{Show that } f \\text{ is continuous on } D, \\text{ but not on } \\R.  
          `,
          solution: `\\text{Since } \\lim_{x \\to c} \\frac{1}{x} = \\frac{1}{c} \\ \\ \\forall c \\in D, f \\text{ is continuous on } D.
                     \\\\ \\
                     \\\\ \\text{But } f \\text{ is not defined at } 0 \\text{ so it can't be continuous there.}
                     \\\\ \\
                     \\\\ \\text{Additionally, even if we defined } f(0) = k \\text{ for some } k \\in \\R,
                     \\\\ \\text{then } f \\text{ would still not be continuous at 0.} 
                     \\\\ \\
                     \\\\ \\text{Since } \\frac{1}{n} \\to 0 \\text{ and } \\lim_{n\\to\\infty}f\\left(\\frac{1}{n}\\right) = + \\infty,
                     \\\\ \\text{the sequence } \\left(f\\left(\\frac{1}{n}\\right)\\right) \\text{ is not convergent.}
                     \\\\ \\
                     \\\\ \\text{Thus there is no way to define } 
                     \\\\ f \\text{ at 0 to make it continuous there.}
                     `
        }
      ]
    },
    {
      number: 5,
      title: "Prove Uniform Continuity",
      description: "Use the ε-δ definition of uniform continuity to prove that a given function is uniformly continuous on a given domain.",
      examples: [
        {
          problemStatement: "\\text{Example problem statement}",
          solution: `\\text{Solution...}`
        }
      ]
    },
    {
      number: 6,
      title: "Disprove Uniform Continuity",
      description: "Use the ε-δ definition of uniform continuity to prove that a given function is not uniformly continuous on a given domain.",
      examples: [
        {
          problemStatement: "\\text{Example problem statement}",
          solution: `\\text{Solution...}`
        }
      ]
    },
    {
      number: 7,
      title: "Prove Differentiability",
      description: "Use the definition of the derivative to show that a given function is (or is not) differentiable at a given point. There are several possibilities here: one can use one-sided limits, one can use the sequential criterion for limits (Theorem 5.1.9), or one can use the ε-δ definition of limit of a function at an accumulation point.",
      examples: [
        {
          problemStatement: "\\text{Example problem statement}",
          solution: `\\text{Solution...}`
        }
      ]
    }
  ];

  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          Catalog of proof methods and techniques with examples.
        </p>
      </div>
      {proofMethods.map((method) => (
        <ProofMethodCard
          key={method.number}
          number={method.number}
          title={method.title}
          description={method.description}
          examples={method.examples}
          id={`proof-method-${method.number}`}
        />
      ))}
    </div>
  );
}

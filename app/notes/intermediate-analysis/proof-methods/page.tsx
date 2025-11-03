import ProofMethodCard from "../components/ProofMethodCard";

export default function ProofMethodsPage() {
  const proofMethods = [
    {
      number: 1,
      title: "Prove Continuity",
      description: "Use the ε-δ definition of continuity at a point to prove that a given function is continuous at a given point.",
      examples: [
        {
          problemStatement: `\\text{Define } f: \\R \\to \\R \\text{ by } f(x) = x^2 + 3x - 5
                             \\\\ \\text{Use [[definition 4]] to prove that } f \\text{ is continuous at } 3. 
          `,
          solution: `\\text{Trying to show this is true:}
                     \\\\ \\forall \\varepsilon > 0 \\ \\ \\exists \\delta > 0 \\text{ such that } |f(x) - L| < \\varepsilon
                     \\\\ \\text{whenever } x \\in D \\text{ and } |x-c| < \\delta.
                     \\\\ \\
                     \\\\ \\text{Scratch:}
                     \\\\ \\quad f(c) = f(3) = 13
                     \\\\ \\quad |f(x) - f(c)| = |
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
          problemStatement: "\\text{Example problem statement}",
          solution: `\\text{Solution...}`
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
          problemStatement: "\\text{Example problem statement}",
          solution: `\\text{Solution...}`
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

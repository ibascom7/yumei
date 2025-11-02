import ProofMethodCard from "../components/ProofMethodCard";

export default function ProofMethodsPage() {
  const proofMethods = [
    {
      number: 1,
      title: "ε-δ Definition of Continuity (Continuous)",
      description: "Use the ε-δ definition of continuity at a point to prove that a given function is continuous at a given point.",
      examples: [
        {
          problemStatement: "\\text{Example problem statement}",
          solution: `\\text{Solution...}`
        }
      ]
    },
    {
      number: 2,
      title: "ε-δ Definition of Continuity (Discontinuous)",
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
      title: "Sequences for Continuity (Theorem 5.2.3(b))",
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
      title: "Sequences for Discontinuity (Theorem 5.2.7)",
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
      title: "ε-δ Definition of Uniform Continuity (Uniformly Continuous)",
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
      title: "ε-δ Definition of Uniform Continuity (Not Uniformly Continuous)",
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
      title: "Definition of the Derivative",
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

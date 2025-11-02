import ProofMethodCard from "../components/ProofMethodCard";

export default function ProofMethodsPage() {
  const proofMethods = [
    {
      number: 1,
      title: "Example Proof Method",
      description: "This is a placeholder for a proof method description.",
      examples: [
        {
          problemStatement: "\\text{Example problem statement 1}",
          solution: `\\text{Solution to example 1...}`
        },
        {
          problemStatement: "\\text{Example problem statement 2}",
          solution: `\\text{Solution to example 2...}`
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
        />
      ))}
    </div>
  );
}

import TheoremCard from "../components/TheoremCard";

export default function TheoremsPage() {
  const theorems = [
    {
      number: 1,
      title: "Example Theorem",
      statement: "\\text{This is a placeholder theorem statement.}",
      proof: `\\text{Proof coming soon...}`
    }
  ];

  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          This is a catalog of theorems from Intermediate Analysis,
          alongside proofs for each.
        </p>
      </div>
      {theorems.map((theorem) => (
        <TheoremCard
          key={theorem.number}
          number={theorem.number}
          title={theorem.title}
          statement={theorem.statement}
          proof={theorem.proof}
        />
      ))}
    </div>
  );
}

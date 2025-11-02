import ProblemSolvingTechniqueCard from "../components/ProblemSolvingTechniqueCard";

export default function ProblemSolvingTechniquesPage() {
  const techniques = [
    {
      number: 1,
      title: "Example Technique",
      description: "This is a placeholder for a problem solving technique description.",
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
          Catalog of problem solving techniques with examples.
        </p>
      </div>
      {techniques.map((technique) => (
        <ProblemSolvingTechniqueCard
          key={technique.number}
          number={technique.number}
          title={technique.title}
          description={technique.description}
          examples={technique.examples}
        />
      ))}
    </div>
  );
}

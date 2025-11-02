import ProblemSolvingTechniqueCard from "../components/ProblemSolvingTechniqueCard";

export default function ProblemSolvingTechniquesPage() {
  const techniques = [
    {
      number: 1,
      title: "Intermediate Value Theorem",
      description: "Use the intermediate value theorem to solve problems.",
      examples: [
        {
          problemStatement: "\\text{Example problem statement}",
          solution: `\\text{Solution...}`
        }
      ]
    },
    {
      number: 2,
      title: "Extreme Value Theorem",
      description: "Use the extreme value theorem to solve problems.",
      examples: [
        {
          problemStatement: "\\text{Example problem statement}",
          solution: `\\text{Solution...}`
        }
      ]
    },
    {
      number: 3,
      title: "Mean Value Theorem",
      description: "Use the mean value theorem to solve problems.",
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

import DefinitionCard from "../components/DefinitionCard";

export default function DefinitionsPage() {
  const definitions = [
    {
      number: 1,
      term: "Example Definition",
      definition: `\\text{This is a placeholder definition.}`,
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
        />
      ))}
    </div>
  );
}

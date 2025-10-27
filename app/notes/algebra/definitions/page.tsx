import DefinitionCard from "../components/DefinitionCard";

export default function DefinitionsPage() {
  // Example definitions - replace with your actual definitions
  const definitions = [
    {
      number: 1,
      term: "Group",
      definition: "\\text{A group is a set } G \\text{ together with a binary operation } * \\text{ such that:} \\\\ 1. \\text{ (Closure) } \\forall a, b \\in G, a * b \\in G \\\\ 2. \\text{ (Associativity) } \\forall a, b, c \\in G, (a * b) * c = a * (b * c) \\\\ 3. \\text{ (Identity) } \\exists e \\in G \\text{ such that } \\forall a \\in G, e * a = a * e = a \\\\ 4. \\text{ (Inverse) } \\forall a \\in G, \\exists a^{-1} \\in G \\text{ such that } a * a^{-1} = a^{-1} * a = e",
    },
    {
      number: 2,
      term: "Subgroup",
      definition: "\\text{Let } G \\text{ be a group. A subset } H \\subseteq G \\text{ is a subgroup if:} \\\\ 1. \\text{ The identity } e \\in H \\\\ 2. \\text{ If } a, b \\in H, \\text{ then } ab \\in H \\\\ 3. \\text{ If } a \\in H, \\text{ then } a^{-1} \\in H",
    },
    {
      number: 3,
      term: "Cyclic Group",
      definition: "\\text{A group } G \\text{ is cyclic if there exists } a \\in G \\text{ such that } G = \\langle a \\rangle = \\{a^n : n \\in \\mathbb{Z}\\}",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Definitions</h2>
      <div>
        {definitions.map((def) => (
          <DefinitionCard
            key={def.number}
            number={def.number}
            term={def.term}
            definition={def.definition}
          />
        ))}
      </div>
    </div>
  );
}

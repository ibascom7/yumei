import TheoremCard from "../components/TheoremCard";

export default function TheoremsPage() {
  // Example theorems - replace with your actual theorems
  const theorems = [
    {
      number: 1,
      title: "Inverse of Inverse",
      statement: "\\text{If } G \\text{ is a group and } a \\in G, \\text{ then } (a^{-1})^{-1} = a",
      proof: "\\text{By definition, } a^{-1} \\text{ is the inverse of } a. \\text{ Therefore, } a \\text{ is the inverse of } a^{-1}, \\text{ which means } (a^{-1})^{-1} = a.",
    },
    {
      number: 2,
      title: "Subgroups of Cyclic Groups",
      statement: "\\text{Every subgroup of a cyclic group is cyclic.}",
      proof: "\\text{Let } G = \\langle a \\rangle \\text{ be a cyclic group and let } H \\text{ be a subgroup of } G. \\text{ If } H = \\{e\\}, \\text{ then } H \\text{ is cyclic. Otherwise, let } m \\text{ be the smallest positive integer such that } a^m \\in H. \\text{ We claim that } H = \\langle a^m \\rangle.",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Theorems</h2>
      <div>
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
    </div>
  );
}

import DefinitionCard from "../components/DefinitionCard";

export default function DefinitionsPage() {
  // Example definitions - replace with your actual definitions
  const definitions = [
    {
      number: 1,
      term: "Group",
      definition: `\\text{A group is a set } G \\text{ together with a binary operation } * \\text{ such that:} 
                  \\\\ \\quad 1. \\text{ (Closure) } \\forall a, b \\in G, a * b \\in G 
                  \\\\ \\quad 2. \\text{ (Associativity) } \\forall a, b, c \\in G, (a * b) * c = a * (b * c) 
                  \\\\ \\quad 3. \\text{ (Identity) } \\exists e \\in G \\text{ such that } \\forall a \\in G, e * a = a * e = a 
                  \\\\ \\quad 4. \\text{ (Inverse) } \\forall a \\in G, \\exists a^{-1} \\in G \\text{ such that } a * a^{-1} = a^{-1} * a = e,`,
    },
    {
      number: 2,
      term: "Subgroup",
      definition: "\\text{Let } G \\text{ be a group. A subset } H \\subseteq G \\text{ is a subgroup if:} \\\\ \\quad 1. \\text{ The identity } e \\in H \\\\ \\quad 2. \\text{ If } a, b \\in H, \\text{ then } ab \\in H \\\\ \\quad 3. \\text{ If } a \\in H, \\text{ then } a^{-1} \\in H",
    },
    {
      number: 3,
      term: "Equivalence Relation",
      definition: `\\text{A relation } \\sim \\text{ on a set } A \\text{ is an equivalence relation if it is:}
                  \\\\ \\quad \\text{1) Reflexive: if } \\forall x \\in A, \\ x \\sim x
                  \\\\ \\quad \\text{2) Symmetric: if } \\forall x, y \\in A, \\ x \\sim y \\ \\Rightarrow \\ y \\sim x
                  \\\\ \\quad \\text{3) Transitive: if } \\forall x, y, z \\in A, \\ x \\sim y \\ \\text{ and } \\ y \\sim z \\ \\Rightarrow \\ x \\sim z`,
    },
    {
      number: 4,
      term: "Equivalence Class",
      definition: `\\text{Given an equivalence relation } \\sim \\text{ on a set } A, 
                  \\\\ \\text{the equivalence class of an element } x \\in A \\text{ is the set:}
                  \\\\ [x] = \\{ y \\in A \\ | \\ x \\sim y \\}`,
    },
    {
      number: 5,
      term: "Homomorphism",
      definition: `\\text{Let } G \\text{ and } K \\text{ be two groups.}
                  \\\\ \\text{A map } \\phi: G \\to K \\text{ is called a homomorphism}
                  \\\\ \\text{if } \\forall a, b \\in G, \\phi(ab) = \\phi(a)\\phi(b)
      `,
    },
    {
      number: 6,
      term: "Kernel of a Homomorphism",
      definition: `\\text{Let } \\phi: G \\to K \\text{ be a homomorphism between groups } G \\text{ and } K.
                  \\\\ \\text{The kernel of } \\phi \\text{ is the set:}
                  \\\\ \\ker(\\phi) = \\{ x \\in G \\ | \\ \\phi(x) = e_K \\}`,
    },
    {
      number: 7,
      term: "Normal Subgroup",
      definition: `\\text{A subgroup } H \\text{ of a group } G \\text{ is called normal (denoted } H \\trianglelefteq G \\text{) if:}
                  \\\\ \\forall g \\in G, \\forall h \\in H, ghg^{-1} \\in H.
                  \\\\ H \\triangleleft G \\text{ if } H \\subset G.
                  `,
    }
  ];
  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          Catalog of Definitions. Used Fraleigh's "A First Course in Abstract Algebra" as reference.
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

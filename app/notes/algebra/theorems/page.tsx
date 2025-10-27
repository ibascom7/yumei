import TheoremCard from "../components/TheoremCard";

export default function TheoremsPage() {
  const theorems = [
    {
      number: 1,
      title: "Cancellation Law",
      statement: "\\text{Let } G \\text{ be a group. If } ab = ac \\text{ then } b = c",
      proof: `\\text{Let } a, b, c \\in G.
              \\\\ \\text{Assume } ab = ac.
              \\\\ \\text{Since G is a group, } a^{-1} \\in G.
              \\\\ \\text{So, } a^{-1}(ab) = a^{-1}(ac).
              \\\\ \\text{By associativity, } (a^{-1}a)b = (a^{-1}a)c.
              \\\\ \\text{Since } a^{-1}a = e, 
              \\\\ \\text{we have } eb = ec.
              \\\\ \\text{Thus, } b = c.
              `
    },
    {
      number: 2,
      title: "Uniqueness of Inverse",
      statement: "\\text{For any group, the inverse of any element } a \\text{ is unique}",
      proof: `\\text{Let } a, b, c \\in G.
              \\\\ \\text{Assume } b \\text{ and } c \\text{ are inverses of } a.
              \\\\ \\text{So } ab = e \\text{ and } ac = e \\text{ are true}.
              \\\\ \\text{Then, } b = eb = (ca)b = c(ab) = ce = c.
              \\\\ \\text{Therefore, the inverse of } a \\text{ is unique.}
              ` 
    },
    {
      number: 3,
      title: "Subgroup Test",
      statement: `\\text{Let } G \\text{ be a group and let } H \\subseteq G.
                  \\\\ \\text{Then } H \\text{ is a subgroup of } G \\text{ iff } H \\text{ is non-empty} \\text{ and}
                  \\\\  \\forall a, b \\in H \\text{ we have } a^{-1}b \\in H`,
      proof: `\\text{Assume H} \\leq G. \\text{ Let } a, b \\in H.
              \\\\ \\text{By definition of subgroup, } \\forall a \\in H \\ \\exists a^{-1} \\in H,
              \\\\ \\forall a, b \\in H \\ ab \\in H, \\text{ and } e \\in H. \\text{ (For shits and giggles)}
              \\\\ \\text{Since } e \\in H, \\text{ it is non-empty.}
              \\\\ \\text{By inverse property, } a^{-1} \\in H.
              \\\\ \\text{By closure property, } a^{-1}b \\in H.
              \\\\ \\text{Conversely, assume H is non-empty and}
              \\\\ \\forall a, b \\in H \\text{ we have } a^{-1}b \\in H.
              \\\\ \\text{Since } H \\text{ is non-empty, } \\exists x \\in H.
              \\\\ \\text{Take } a = b = x \\text{ then, } a^{-1}b = x^{-1}x = e \\in H.
              \\\\ \\text{Now assume } y \\in H, \\text{ take } a = y \\text{ and } b = e.
              \\\\ \\text{Then } a^{-1}b = y^{-1}e = y^{-1} \\in H.
              \\\\ \\text{Finally, given } x, y \\in H \\text{ take } a = x^{-1}, b = y.
              \\\\ \\text{Then } a^{-1}b = (x^{-1})^{-1}y = xy \\in H.
              \\\\ \\text{Hence, } H \\leq G.
              `
    },
    {
      number: 4,
      title: "Subgroup Equivalence Relation",
      statement: `\\text{Let } G \\text{ be a group and let } H \\leq G.
                  \\\\ \\text{The relation } \\forall x, y \\in G 
                  \\\\ x^{-1}y \\sim (x)^{-1} \\iff x^{-1}y \\in H,
                  \\\\ \\text{is an equivalence relation.}`,
      proof: `\\text{Let } x \\in G.
              \\\\ \\text{Then } x^{-1}x = e \\in H.
              \\\\ \\text{So, } x \\sim x, \\text{ hence } \\sim \\text{ is reflexive.}
              \\\\ \\text{Now, let } x, y \\in G \\text{ such that } x \\sim y.
              \\\\ \\text{Since } H \\text{ is a subgroup, } (x^{-1}y)^{-1} \\in H, 
              \\\\ \\text{so } y^{-1}x \\in H, \\text{ hence } \\sim \\text{ is symmetric.}
              \\\\ \\text{Let } x, y, z \\in G \\text{ such that } x \\sim y \\text{ and } y \\sim z.
              \\\\ \\text{Then } x^{-1}y \\in H \\text{ and } y^{-1}z \\in H.
              \\\\ \\text{Since } H \\text{ is a subgroup, } (x^{-1}y)(y^{-1}z) = x^{-1}z \\in H,
              \\\\ \\text{hence } x \\sim z, \\text{ so } \\sim \\text{ is transitive.}
              \\\\ \\text{Therefore, } \\sim \\text{ is an equivalence relation.}
                            `,
      description: ""
    },
    {
      number: 5,
      title: "Equivalence Class of x are Left Cosets",
      statement: `\\text{Let } H \\subseteq G \\text{ and } x \\in G, x \\notin H. 
                  \\\\ \\text{Unless we have } H \\cap xH \\in H \\cap xH \\neq \\emptyset`,
    },
    {
      number: 6,
      title: "Intersection of Subgroups",
      statement: `\\text{Let } G \\text{ be a group and let } H \\text{ and } K \\text{ be two subgroups.} 
                  \\\\ H \\cap K \\text{ is also a subgroup of } G`,
    },
    {
      number: 7,
      title: "Homomorphism Image",
      statement: `\\text{Let } G \\text{ be a group. Then } \\ell: H \\subseteq G \\text{ is a homomorphism and let } H \\subseteq G. 
                  \\\\ \\text{Then } \\ell(H) \\subseteq K`,
    },
    {
      number: 8,
      title: "Homomorphism Properties",
      statement: `\\text{Let } G \\text{ be a homomorphism and let } H \\subseteq G. 
                  \\\\ \\text{Then } \\ell(H) \\subseteq K`,
    },
    {
      number: 9,
      title: "Injective Homomorphism",
      statement: `\\text{A homomorphism } \\ell: G \\to K \\text{ is injective} 
                  \\\\ \\text{iff } \\ker(\\ell) = \\{e\\}`,
    },
    {
      number: 10,
      title: "Normal Subgroup Equivalences",
      statement: `\\text{A homomorphism } G \\to K. \\text{ If } H \\subseteq G \\text{ then the following are equivalent:} 
                  \\\\ \\quad \\text{1) } H \\text{ is normal in } G 
                  \\\\ \\quad \\text{2) } gH = Hg \\text{ for all } g \\in G, \\forall g \\in G 
                  \\\\ \\quad \\text{3) } \\pi \\text{ is well-defined binary operation on } G/H 
                  \\\\ \\quad \\text{4) } H = \\ker(\\ell) \\text{ where } \\ell \\text{ is a homomorphism on } G/H`,
    },
    {
      number: 11,
      title: "Quotient Group Order",
      statement: `\\text{Let } G \\text{ have order } n. \\text{ If } H \\subseteq G \\text{ then } |G/H| \\text{ times multiplication is a group}`,
    },
    {
      number: 12,
      title: "Quotient Group Structure",
      statement: `\\text{Let } H \\subseteq G \\text{ then the } [G/H] \\text{ cases multiplication is a group}`,
    },
  ];

  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          This is a catalog of theorems I have learned in my Abstract Algebra course,
          alongside proofs for each. <br />
          Apologies in advance as all statements are presented as theorems for my sake.
        </p>
      </div>
      {theorems.map((theorem) => (
        <TheoremCard
          key={theorem.number}
          number={theorem.number}
          title={theorem.title}
          statement={theorem.statement}
          description={theorem.description}
          proof={theorem.proof}
        />
      ))}
    </div>
  );
}

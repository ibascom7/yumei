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
      statement: `\\text{Let } G \\text{ be a group and let } b,c,d \\in G. \\text{ If necessarily } 
                  \\\\ \\text{If } H \\text{ is a subgroup of } G \\text{ then } e \\in H \\text{ necessarily} 
                  \\\\ \\text{and values if we have } a=b \\text{ in } H \\text{ \\& } b^{-1} \\in H`,
    },
    {
      number: 4,
      title: "Subgroup Test",
      statement: `\\text{Let } G \\text{ be a group and let } H \\subseteq G \\text{ and } e \\in H. 
                  \\\\ \\text{For every } x \\in H, \\text{ define } x^{-1} \\cdot (x)^{-1} = e \\in H. 
                  \\\\ \\text{Then } H \\text{ is a subgroup if and only if it is non-empty \\& closed under}`,
    },
    {
      number: 5,
      title: "Coset Intersection",
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

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
      title: "Left Cosets of x are Equivalence Classes of x",
      statement: `\\text{Let } H \\leq G \\text{ and } x^{-1}y \\sim (x)^{-1} \\iff x^{-1}y \\in H. 
                  \\\\ \\text{Then } \\forall x \\in G, \\text{ we have } [x] = \\{xh \\ | \\ h \\in H\\}.
                  `,
      proof: `\\text{Let } y \\in [x].
              \\\\ \\text{Then } y \\sim x, \\text{and by symmetry}, x \\sim y.
              \\\\ \\text{So, } x^{-1}y \\in H.
              \\\\ \\text{Let } h_0 = x^{-1}y. \\text{ Then } xh_0 = y.
              \\\\ \\text{So } y \\in \\{xh \\ | \\ h \\in H\\}.
              \\\\ \\text{Conversely, let } y \\in \\{xh \\ | \\ h \\in H\\}.
              \\\\ \\text{So } \\exists h_0 \\in H \\text{ such that } y = xh_0.
              \\\\ \\text{Then } x^{-1}y = h_0 \\in H, \\text{ hence } x^{-1}y \\in H.
              \\\\ \\text{So } y \\sim x, \\text{ and therefore } y \\in [x].
              \\\\ \\text{Hence } [x] = \\{xh \\ | \\ h \\in H\\}.
              `
    },
    {
      number: 6,
      title: "Intersection of Subgroups",
      statement: `\\text{Let } G \\text{ be a group and let } H \\text{ and } K \\text{ be two subgroups.} 
                  \\\\ \\text{Then } H \\cap K \\text{ is also a subgroup of } G
                  `,
      proof: `\\text{Since } e \\in H \\text{ and } e \\in K, \\text{ we have } e \\in H \\cap K,
              \\\\ \\text{so the intersection is non-empty.}
              \\\\ \\text{Let } a, b \\in H \\cap K.
              \\\\ \\text{Then } a, b \\in H \\text{ and } a, b \\in K.
              \\\\ \\text{Since } H \\leq G \\text{ and } K \\leq G, \\ a^{-1}b \\in H \\text{ and } a^{-1}b \\in K.
              \\\\ \\text{Therefore, } a^{-1}b \\in H \\cap K.
              \\\\ \\text{Hence, } H \\cap K \\leq G.
              `
    },
    {
      number: 7,
      title: "Homomorphism Properties",
      statement: `\\text{Let } \\phi: G \\to K \\text{ be a homomorphism.}
                  \\\\ \\text{Then } \\phi(e_G) = e_K \\text{ and } \\forall a \\in G, \\ \\phi(a^{-1}) = (\\phi(a))^{-1}.
                  `,
      proof: `\\text{To show } \\phi(e_G) = e_K.
              \\\\ \\text{We have } \\phi(e_G) = \\phi(e_G e_G) = \\phi(e_G) \\phi(e_G),
              \\\\ \\text{and } \\phi(e_G) = \\phi(e_G)e_K.
              \\\\ \\text{So } \\phi(e_G) \\phi(e_G) = \\phi(e_G)e_K.
              \\\\ \\text{By cancellation law, } \\phi(e_G) = e_K.
              \\\\ \\text{Now, to show } \\forall a \\in G, \\ \\phi(a^{-1}) = (\\phi(a))^{-1}.
              \\\\ \\text{Let } a \\in G.
              \\\\ \\text{Then } \\phi(a^{-1}) \\phi(a) = \\phi(a^{-1}a) = \\phi(e_G) = e_K.
              \\\\ \\text{Similarly, } \\phi(a) \\phi(a^{-1}) = \\phi(aa^{-1}) = \\phi(e_G) = e_K.
              \\\\ \\text{Because } \\phi(a^{-1}) \\phi(a) = \\phi(a) \\phi(a^{-1}) = e_K,
              \\\\ \\text{we conclude that } \\phi(a^{-1}) = (\\phi(a))^{-1}.
              `
    },
    {
      number: 8,
      title: "Image of a Subgroup is a Subgroup",
      statement: `\\text{Let } \\phi: G \\to K \\text{ be a homomorphism.} and \\text{ let } H \\leq G.
                  \\\\ \\text{Then } \\phi(H) \\leq K.
      `,
      proof: `\\text{Since } H \\text{ is non-empty, } \\phi(H) \\text{ is non-empty}.
              \\\\ \\text{Let } x, y \\in \\phi(H).
              \\\\ \\text{So } \\exists a, b \\in H \\text{ such that } x = \\phi(a) \\text{ and } y = \\phi(b).
              \\\\ \\text{Then } x^{-1}y = \\phi(a^{-1}) \\phi(b) = \\phi(a^{-1}b).
              \\\\ \\text{Since } H \\leq G, \\ a^{-1}b \\in H. \\text{ So, } \\phi(a^{-1}b) \\in \\phi(H).
              \\\\ \\text{So } x^{-1}y \\in \\phi(H), \\text{ and therefore }, \\phi(H) \\leq K.
      `
    },
    {
      number: 9,
      title: "Kernel of a Homomorphism is a Subgroup of The Domain",
      statement: `\\text{Let } \\phi: G \\to K \\text{ be a homomorphism.} \\text{ Then } \\ker(\\phi) \\leq G`,
      proof: `\\text{Since } \\phi(e) = e, \\ e \\in \\ker(\\phi), \\text{ and the kernel is non-empty.}
              \\\\ \\text{Let } a, b \\in \\ker(\\phi).
              \\\\ \\text{Then } \\phi(a^{-1}b) = \\phi(a^{-1})\\phi(b) = (\\phi(a))^{-1}\\phi(b) = e^{-1}e = e.
              \\\\ \\text{So } a^{-1}b \\in \\ker(\\phi).
              \\\\ \\text{Hence, } \\ker(\\phi) \\leq G.
      `
    },
    {
      number: 10,
      title: "Injective Homomorphism",
      statement: `\\text{A homomorphism } \\phi: G \\to K \\text{ is injective} 
                  \\\\ \\text{iff } \\ker(\\phi) = \\{e\\}`,
      proof: `\\text{Assume } \\phi: G \\to K \\text{ is injective}.
              \\\\ \\text{Let } x \\in \\ker(\\phi) \\text{ then } \\phi(x) = e.
              \\\\ \\text{Since } \\phi \\text{ is injective, } \\text{ and } \\phi(e) = e,
              \\\\ \\text{we have } x = e.
              \\\\ \\text{So, } \\ker(\\phi) = \\{e\\}.
              \\\\ \\text{Conversely, assume } \\ker(\\phi) = \\{e\\}.
              \\\\ \\text{Let } a, b \\in G \\text{ such that } \\phi(a) = \\phi(b).
              \\\\ \\text{Then } \\phi(a^{-1}) \\phi(a) = \\phi(a^{-1}) \\phi(b).
              \\\\ \\text{So, } e = \\phi(a^{-1}b).
              \\\\ \\text{Which shows, } a^{-1}b \\in \\ker(\\phi).
              \\\\ \\text{By our assumption, } a^{-1}b = e.
              \\\\ \\text{Hence, } a = b.
              \\\\ \\text{Therefore, } \\phi \\text{ is injective.}
      `
    },
    {
      number: 11, 
      title: "Normal Subgroup Properties",
      statement: `\\text{Let } H \\leq G. \\text{ then the following are equivalent:} 
                  \\\\ \\quad \\text{1) } H \\trianglelefteq G 
                  \\\\ \\quad \\text{2) } xH * yH = xyH \\ \\forall x, y \\in G
                  \\\\ \\quad \\quad \\ \\text{is well-defined on the coset space G/H}

                  \\\\ \\quad \\text{3) } \\forall x \\in G \\text{ we have } xH = Hx.
                  `,
      proof: `(1) \\implies (2)
              \\\\ \\text{Assume } H \\trianglelefteq G. 
              \\\\ \\text{We show } xH * yH = xyH \\ \\forall x, y \\in G \\text{ is a well-defined operation.}
              \\\\ \\text{For this, let } x, y, a, b \\in G \\text{ such that } x \\sim a \\text{ and } y \\sim b.
              \\\\ \\text{We need to show that } xy \\sim ab.
              \\\\ \\text{Since } x \\sim a, \\text{ we have } x^{-1}a \\in H. 
              \\\\ \\text{Similarly, } y^{-1}b \\in H.
              \\\\ \\text{Denote } h_1 = x^{-1}a \\text{ and } h_2 = y^{-1}b.
              \\\\ \\text{We have } (xy)^{-1}ab = y^{-1}x^{-1}ab.
              \\\\ \\text{Since } h_1 = x^{-1}a \\text{ we have } y^{-1}h_1b.
              \\\\ \\text{Since } H \\trianglelefteq G \\text{ and } h_1 \\in H,
              \\\\ \\text{we get } y^{-1}h_1y \\in H.
              \\\\ \\text{Since } h_2 \\in H \\text{ and } H \\text{ is a normal subgroup},
              \\\\ y^{-1}h_1yh_2 \\in H.
              \\\\ \\text{By substituting, } y^{-1}x^{-1}ayy^{-1}b \\in H.
              \\\\ \\text{Which simplifies to } y^{-1}x^{-1}ab \\in H.
              \\\\ \\text{So, } (xy)^{-1}ab \\in H. \\text{ Hence } xy \\sim ab.
              \\\\ \\text{Thus, coset multiplication is well-defined.}
              \\\\ (2) \\implies (3)
              \\\\ \\text{Assume coset multiplication is well-defined.} 
              \\\\ \\text{Let } g \\in G \\text{ and } h \\in H.
              \\\\ \\text{Since } H \\leq G, h \\sim e.
              \\\\ \\text{So } [h] = [e], \\text{ and thus } hH = eH = H.
              \\\\ hH = eH \\implies gH * hH = gH * eH \\implies ghH = gH
              \\\\ \\implies ghH * g^{-1}H = gH * g^{-1}H \\implies ghg^{-1}H = eH.
              \\\\ \\text{So } ghg^{-1} \\in H \\text{ and } \\exists h' \\in H \\text{ such that } ghg^{-1} = h'.
              \\\\ \\text{This implies } gh = h'g \\in Hg.
              \\\\ \\text{Thus, } gH \\subseteq Hg.
              \\\\ \\text{Similarly, we can show } Hg \\subseteq gH.
              \\\\ \\text{Let } g \\in G \\text{ and } h \\in H.
              \\\\ \\text{Since } h \\sim e, \\text{ we have } hH = eH = H.
              \\\\ hH = eH \\implies hH * gH = eH * gH \\implies hgH = gH
              \\\\ \\implies g^{-1}H * hgH = g^{-1}H * gH \\implies g^{-1}hgH = eH.
              \\\\ \\text{So } g^{-1}hg \\in H \\text{ and } \\exists h' \\in H \\text{ such that } g^{-1}hg = h'.
              \\\\ \\text{This implies } hg = gh' \\in gH.
              \\\\ \\text{Hence, } gH = Hg.
              \\\\ (3) \\implies (1)
              \\\\ \\text{Assume } xH = Hx \\ \\forall x \\in G.
              \\\\ \\text{Let } g \\in G \\text{ and } h \\in H.
              \\\\ \\text{Since } gH = Hg \\text{ and } gh \\in gH, \\text{ it follows that } gh \\in Hg.
              \\\\ \\text{So } \\exists h' \\in H  \\text{ such that } gh = h'g.
              \\\\ \\text{Then } ghg^{-1} = h' \\in H.
              \\\\ \\text{Thus, } \\forall g \\in G \\ \\forall h \\in H \\ ghg^{-1} \\in H.
              \\\\ \\text{Hence } H \\trianglelefteq G. \\ \\blacksquare
            
      `
    },
    {
      number: 12,
      title: "Quotient Group",
      statement: `\\text{Let } H \\trianglelefteq G. \\text{ Then } G/H \\text{ with coset multiplication is a group}`,
      proof: `\\text{First, we check * is associative.}
              \\\\ \\text{Let } x, y, z \\in G.
              \\\\ \\text{Then } (xH * yH) * zH = (xy)H * zH = (xy)zH 
              \\\\ = x(yz)H = xH * yH * zH.
              \\\\ \\text{This shows } * \\text{ is associative.}
              \\\\ \\text{We next show the coset } eH 
              \\\\ \\text{is a neutral element for } (G/H, *).
              \\\\ \\text{For this, let } x \\in G.
              \\\\ \\text{We have } xH * eH = xeH = xH.
              \\\\ \\text{Similarly, } eH * xH = exH = xH.
              \\\\ \\text{So, } eH \\text{ is a neutral element for } (G/H, *).
              \\\\ \\text{Finally, let } x \\in G.
              \\\\ \\text{Then } xH * x^{-1}H = xx^{-1}H = eH
              \\\\ \\text{and } x^{-1}H * xH = x^{-1}xH = eH.
              \\\\ \\text{Which shows } x^{-1}H \\text{ is the inverse of } xH.
              \\\\ \\text{Hence every element of } G/H \\text{ has an inverse.}
              \\\\ \\text{Thus, } (G/H, *) \\text{ is a group.}
      `
    },
    {
      number: 13,
      title: "First Isomorphism Theorem",
      statement: `\\text{Let } G \\text{ and } K \\text{ be groups,}
                  \\\\ \\text{and let } \\phi: G \\to K \\text{ be a homomorphism.}
                  \\\\ \\text{Then } \\ker(\\phi) \\trianglelefteq G, \\text{ and } G/\\ker(\\phi) \\cong Im(\\phi) \\text{ canonically.}
      `,
      proof: `meow`
    }
  ];

  return (
    <div>
      <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-sm sm:text-base">
          This is a catalog of results I have learned in my Abstract Algebra course,
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

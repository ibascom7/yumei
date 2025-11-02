import TheoremCard from "../components/TheoremCard";

export default function TheoremsPage() {
  const theorems = [
    {
      number: 1,
      title: "5.1.9 Sequential Criterion for Limits",
      statement: `\\text{Let } f: D \\to \\R 
                  \\\\ \\text{and let c be an accumulation point of D.}
                  \\\\ \\text{Then } \\lim_{x \\to c} f(x) = L 
                  \\\\ \\text{iff for every sequence } (s_n) \\in  D 
                  \\\\ \\text{that converges to } c \\text{ with } s_n \\neq c \\ \\ \\forall n \\in \\N, 
                  \\\\ \\text{the sequence } (f(s_n)) \\text{ converges to } L.           
      `,
      proof: `\\text{Suppose that } \\lim_{x \\to c} f(x) = L
              \\\\ \\text{and let } (s_n) \\text{ be a sequence in } D \\text{ with } s_n \\to c \\text{ and } s_n \\neq c \\ \\ \\forall n.
              \\\\ \\text{We must show that } \\lim_{n \\to \\infty} f(s_n) = L.
              \\\\ \\text{Since } \\lim_{x \\to c} f(x) = L, 
              \\\\ \\text{we have, } \\ \\forall \\varepsilon > 0 \\ \\ \\exists \\delta > 0 \\text{ such that } |f(x) - L| < \\varepsilon
              \\\\ \\text{whenever } x \\in D \\text{ and } 0 < |x - c| < \\delta  \\ (\\text{By } [[definition 1]]).
              \\\\ \\text{Furthermore, since } s_n \\to c, \\ \\exists N \\in \\N
              \\\\ \\text{such that } n \\geq N \\text{ implies that } |s_n - c| < \\delta. 
              \\\\ \\text{Thus for } n \\geq N \\text{ we have } 0 < |s_n - c| < \\delta.
              \\\\ \\text{and } s_n \\in D, \\text{ so that } |f(s_n) - L < \\varepsilon.
              \\\\ \\text{Hence } \\lim_{n \\to \\infty} f(s_n) = L.
              \\\\ \\
              \\\\ \\text{Conversely, suppose that } \\lim_{x \\to c} f(x) \\neq L.
              \\\\ \\text{We must find a sequence } (s_n) \\text{ in } D 
              \\\\ \\text{with } s_n \\to c \\text{ and } s_n \\neq c, \\text{ such that } (f(s_n)) \\not\\to L. 
              \\\\ \\text{Since } \\lim_{x \\to c} f(x) \\neq L, \\ \\exists \\varepsilon > 0 \\text{ such that } \\ \\forall \\delta > 0
              \\\\ \\exists x \\in D \\text{ with } 0 < |x - c| < \\delta \\text{ such that } |f(x) - L| \\geq \\varepsilon.
              \\\\ \\text{In particular, } \\ \\forall n \\in \\N \\ \\ \\exists s_n \\in D
              \\\\ \\text{with } 0 < |x-c| < \\delta \\text{ such that } |f(x) - L \\geq \\varepsilon.
              \\\\ \\text{Now } (s_n) \\to c \\text{ with } s_n \\neq c \\ \\ \\forall n,
              \\\\ \\text{but } (f(s_n)) \\not\\to L.

      `
    },
    {
      number: 2,
      title: "5.1.14",
      statement: "\\text{Placeholder statement for Theorem 5.1.14}",
      proof: `\\text{Proof...}`
    },
    {
      number: 3,
      title: "5.1.19",
      statement: "\\text{Placeholder statement for Corollary 5.1.19}",
      proof: `\\text{Proof...}`
    },
    {
      number: 4,
      title: "5.2.3(a,b)",
      statement: "\\text{Placeholder statement for Theorem 5.2.3(a,b)}",
      proof: `\\text{Proof...}`
    },
    {
      number: 5,
      title: "5.2.7",
      statement: "\\text{Placeholder statement for Theorem 5.2.7}",
      proof: `\\text{Proof...}`
    },
    {
      number: 6,
      title: "5.2.11",
      statement: "\\text{Placeholder statement for Theorem 5.2.11}",
      proof: `\\text{Proof...}`
    },
    {
      number: 7,
      title: "5.2.13",
      statement: "\\text{Placeholder statement for Theorem 5.2.13}",
      proof: `\\text{Proof...}`
    },
    {
      number: 8,
      title: "5.3.3",
      statement: "\\text{Placeholder statement for Theorem 5.3.3}",
      proof: `\\text{Proof...}`
    },
    {
      number: 9,
      title: "5.3.4 (Extreme Value Theorem)",
      statement: "\\text{Placeholder statement for Extreme Value Theorem}",
      proof: `\\text{Proof...}`
    },
    {
      number: 10,
      title: "5.3.7 (Intermediate Value Theorem)",
      statement: "\\text{Placeholder statement for Intermediate Value Theorem}",
      proof: `\\text{Proof...}`
    },
    {
      number: 11,
      title: "5.4.6",
      statement: "\\text{Placeholder statement for Theorem 5.4.6}",
      proof: `\\text{Proof...}`
    },
    {
      number: 12,
      title: "★ 5.4.8",
      statement: "\\text{Placeholder statement for Theorem 5.4.8}",
      proof: `\\text{Proof...}`
    },
    {
      number: 13,
      title: "★ 6.1.6",
      statement: "\\text{Placeholder statement for Theorem 6.1.6}",
      proof: `\\text{Proof...}`
    },
    {
      number: 14,
      title: "6.1.7",
      statement: "\\text{Placeholder statement for Theorem 6.1.7}",
      proof: `\\text{Proof...}`
    },
    {
      number: 15,
      title: "6.1.10 (Chain Rule)",
      statement: "\\text{Placeholder statement for Chain Rule}",
      proof: `\\text{Proof...}`
    },
    {
      number: 16,
      title: "★ 6.2.2",
      statement: "\\text{Placeholder statement for Theorem 6.2.2}",
      proof: `\\text{Proof...}`
    },
    {
      number: 17,
      title: "6.2.4 (Rolle's Theorem)",
      statement: "\\text{Placeholder statement for Rolle's Theorem}",
      proof: `\\text{Proof...}`
    },
    {
      number: 18,
      title: "6.2.5 (Mean Value Theorem)",
      statement: "\\text{Placeholder statement for Mean Value Theorem}",
      proof: `\\text{Proof...}`
    },
    {
      number: 19,
      title: "6.2.8",
      statement: "\\text{Placeholder statement for Theorem 6.2.8}",
      proof: `\\text{Proof...}`
    },
    {
      number: 20,
      title: "6.2.9",
      statement: "\\text{Placeholder statement for Corollary 6.2.9}",
      proof: `\\text{Proof...}`
    },
    {
      number: 21,
      title: "★ 6.2.11",
      statement: "\\text{Placeholder statement for Theorem 6.2.11}",
      proof: `\\text{Proof...}`
    },
    {
      number: 22,
      title: "6.2.13 (Inverse Function Theorem)",
      statement: "\\text{Placeholder statement for Inverse Function Theorem}",
      proof: `\\text{Proof...}`
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
          id={`theorem-${theorem.number}`}
        />
      ))}
    </div>
  );
}

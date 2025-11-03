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
      title: "5.1.14 Operations on Limits are Well-Defined",
      statement: `\\text{Let } f: D \\to \\R, \\text{ and } c \\text{ be an accumulation point of } D.
                  \\\\ \\text{If } \\lim_{x \\to c} f(x) = L, \\ \\lim_{x \\to c} g(x) = M,
                  \\\\ \\text{and } k \\in \\R, \\text{ then the following hold:}
                  \\\\ \\
                  \\\\ \\text{a. } \\lim_{x \\to c} (f+g)(x) = L + M.
                  \\\\ \\
                  \\\\ \\text{b. } \\lim_{x \\to c} (fg)(x) = LM.
                  \\\\ \\
                  \\\\ \\text{c. } \\lim_{x \\to c} (kf)(x) = kL.
                  \\\\ \\
                  \\\\ \\text{d. If } g(x) \\neq 0 \\ \\ \\forall x \\in D \\text{ and } M \\neq 0,
                  \\\\ \\ \\ \\ \\ \\text{then } \\lim_{x \\to c} \\left(\\frac{f}{g}\\right)(x) = \\frac{L}{M}
      `,
      proof: [
        {
          title: `Proof of (a)`,
          content: `later.`
        },
        {
          title: `Proof of (b)`,
          content: `atode`
        },
        {
          title: `Proof of (c)`,
          content: `mata kondo`
        },
        {
          title: `Proof of (d)`,
          content: `ashita`
        }
      ]
    },
    {
      number: 3,
      title: "5.1.19 Sides of a Limit Must Match",
      statement: `\\text{Let } f \\text{ be a function defined on a deleted neighborhood}
                  \\\\ \\text{of a point } c. \\text{ Then } \\lim_{x \\to c} f(x) = L
                  \\\\ \\text{iff } \\lim_{x \\to c^+} f(x) = \\lim_{x \\to c^-} f(x)
      `,
      proof: `\\text{Later...}`
    },
    {
      number: 4,
      title: "5.2.3(a,b,d) Sequential Criterion for Continuity",
      statement: `\\text{Let} f: D \\to \\R \\text{ and let } c \\in D.
                  \\\\ \\text{Then the following conditions are equivalent:}
                  \\\\ \\
                  \\\\ \\text{a. } f \\text{ is continuous at c.}
                  \\\\ \\
                  \\\\ \\text{b. If } (x_n) \\text{ is any sequence in } D \\text{ such that } (x_n) \\to c,
                  \\\\ \\ \\ \\ \\ \\text{then } \\lim_{n \\to \\infty} f(x_n) = f(c).
                  \\\\ \\
                  \\\\ \\text{Furthermore, if } c \\text{ is an accumulation point of } D,
                  \\\\ \\text{then the above are equivalent to:}
                  \\\\ \\
                  \\\\ \\text{d. } f \\text{ has a limit at } c \\text{ and } \\lim_{x \\to c} f(x) = f(c).
                  `,
      proof: `\\text{Proof...}`
    },
    {
      number: 5,
      title: "5.2.7 Sequential Method for Discontinuity",
      statement: `\\text{Let } f: D \\to \\R \\text{ and let } c \\in D. 
                  \\\\ \\text{Then } f \\text{ is discontinuous at } c \\text{ iff}
                  \\\\ \\text{there exists a sequence } (x_n) \\text{ in } D 
                  \\\\ \\text{such that } (x_n) \\to c
                  \\\\ \\text{but the sequence } (f(x_n)) \\not\\to f(c).
      `,
      proof: `\\text{Proof...}`
    },
    {
      number: 6,
      title: "5.2.11 Operations on Functions Preserve Continuity",
      statement: `
                  \\text{Let } f: D \\to \\R \\text{ and } g: D \\to \\R \\text{ and let } c \\in D. 
                  \\\\ \\text{Suppose that } f \\text{ and } g \\text{ are continuous at } c. 
                  \\\\ \\text{Then: }
                  \\\\ \\
                  \\\\ \\text{a. } f + g \\text{ is continuous at } c,
                  \\\\ \\
                  \\\\ \\text{b. } fg \\text{ is continuous at } c,
                  \\\\ \\
                  \\\\ \\text{c. } \\frac{f}{g} \\text{ continuous at } c \\text{ if } g(c) \\neq 0.
      `,          
      proof: `\\text{Proof...}`
    },
    {
      number: 7,
      title: "5.2.13 Composition Preserves Continuity",
      statement: `\\text{Let } f: D \\to \\R \\text{ and } g: E \\to \\R 
                  \\\\ \\text{be functions such that} f(D) \\subseteq E. 
                  \\\\ \\text{If } f \\text{ is continuous at a point } c \\in D 
                  \\\\ \\text{and } g \\text{ is continuous at } f(c),
                  \\\\ \\text{then the composition } g \\circ f: D \\to \\R 
                  \\\\ \\text{is continuous at } c.  
      `,
      proof: `\\text{Proof...}`
    },
    {
      number: 8,
      title: "5.3.3 Image of Compact Subsets are Compact Subsets",
      statement: `\\text{Let } D \\text{ be a compact subset of } \\R
                  \\\\ \\text{and suppose that } f: D \\to \\R \\text{ is continuous.}
                  \\\\ \\text{Then } f(D) \\text{ is compact.}
      `,
      proof: `\\text{Proof...}`
    },
    {
      number: 9,
      title: "5.3.4 Extreme Value Theorem",
      statement: `\\text{Let } D \\text{ be a compact subset of } \\R
                  \\\\ \\text{and suppose that } f: D \\to \\R \\text{ is continuous.}
                  \\\\ \\text{Then } f \\text{ assumes minimum and maximum values on } D.
                  \\\\ \\text{That is, } \\ \\exists x_1, x_2 \\in D
                  \\\\ \\text{such that } f(x_1) \\leq f(x) \\leq f(x_2) \\ \\ \\forall x \\in D.
      `,
      proof: `\\text{Proof...}`
    },
    {
      number: 10,
      title: "5.3.7 Intermediate Value Theorem",
      statement: `\\text{Suppose that } f: [a,b] \\to \\R \\text{ is continuous.}
                  \\\\ \\text{Then } f \\text{ has the intermediate value property on [a,b].}
                  \\\\ \\text{That is, if } k \\text{ is any value between } f(a) \\text{ and } f(b)
                  \\\\ (f(a) < k < f(b) \\text{ or } f(b) < k < f(a)),
                  \\\\ \\text{then } \\ \\exists c \\in (a,b) \\text{ such that } f(c) = k.
      `,
      proof: `\\text{Proof...}`
    },
    {
      number: 11,
      title: "5.4.6",
      statement: `\\text{Suppose } f: D \\to \\R \\text{ is continuous on a compact set } D.
                  \\\\ \\text{Then } f \\text{ is uniformly continuous on } D.
      `,
      proof: `\\text{Proof...}`
    },
    {
      number: 12,
      title: "★ 5.4.8 UC Image of a Cauchy Sequence is Cauchy",
      statement: `\\text{Let } f: D \\to \\R \\text{ be uniformly continuous on } D
                  \\\\ \\text{and suppose that } (x_n) \\text{ is a Cauchy sequence in } D.
                  \\\\ \\text{Then } (f(x_n)) \\text{ is a Cauchy sequence}. 
      `,
      proof: [
        {
          title: "Textbook Proof",
          content: `\\text{Given any } \\varepsilon > 0, 
                    \\\\ \\text{since } f \\text{ is uniformly continuous on } D 
                    \\\\ \\text{there exists a } \\delta > 0 \\text{ such that}
                    \\\\ \\
                    \\\\ |f(x) - f(y)| < \\varepsilon \\text{ whenever } |x-y| < \\delta \\text{ and } x, y \\in D.
                    \\\\ \\
                    \\\\ \\text{Since } (x_n) \\text{ is Cauchy,}
                    \\\\ \\exists N \\in \\Z \\text{ such that } 
                    \\\\ \\ 
                    \\\\ |x_n - x_m| < \\delta \\text{ whenever } m, n \\geq N.
                    \\\\ \\
                    \\\\ \\text{Thus for } m, n \\geq N \\text{ we have } |f(x_n) - f(x_m)| < \\varepsilon,
                    \\\\ \\text{so } (f(x_n)) \\text{ is a Cauchy sequence.}
          `
        }
      ]
    },
    {
      number: 13,
      title: "★ 6.1.6",
      statement: `\\text{If } f: I \\to \\R \\text{ is differentiable at } c \\in I,
                  \\\\ \\text{then } f \\text{ is continuous at } c.
      `,
      proof: `\\text{For every } x \\in I \\text{ with } x \\neq c, \\text{ we have}
              \\\\ \\
              \\\\ f(x) = (x-c) \\frac{f(x)-f(c)}{x-c} + f(c).
              \\\\ \\
              \\\\ \\text{Since } f'(c) \\text{ exists, we know that }
              \\\\ \\
              \\\\ \\lim_{x \\to c} \\frac{f(x)-f(c)}{x-c} = f'(c) \\in \\R.
              \\\\ \\
              \\\\ \\text{Thus, by } [[theorem 2]], \\text{ we get}
              \\\\ \\
              \\\\ \\lim_{x \\to c} f(x) = \\left(\\lim_{x \\to c}(x-c)\\right) \\left(\\lim_{x \\to c}\\frac{f(x)-f(c)}{x-c}\\right) + \\lim_{x \\to c}f(c)
              \\\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ = 0 \\cdot f'(c) + f(c) = f(c)
              \\\\ \\
              \\\\ \\text{Hence [[theorem 4]] implies that } f \\text{ is continuous at } c.
      `
    },
    {
      number: 14,
      title: "6.1.7 Derivative Rules",
      statement: `\\text{Suppose that } f: I \\to \\R \\text{ and } g: I \\to \\R 
                  \\\\ \\text{are differentiable at } c \\in I. Then
                  \\\\ \\
                  \\\\ \\text{a. If } k \\in \\R, \\text{ then } kf \\text{ is differentiable at } c \\text{ and}
                  \\\\ \\
                  \\\\ \\ \\ \\ \\ (kf)'(c) = k \\cdot f'(c).
                  \\\\ \\ 
                  \\\\ \\text{b. The function } f + g \\text{ is diffterentiable at } c \\text{ and}
                  \\\\ \\
                  \\\\ \\ \\ \\ \\ (f + g)'(c) = f'(c) + g'(c).
                  \\\\ \\
                  \\\\ \\text{c. (Product Rule) The function } fg \\text{ is differentiable at } c \\text{ and}
                  \\\\ \\
                  \\\\ \\ \\ \\ \\ (fg)'(c) = f(c)g'(c) + g(c)f'(c).
                  \\\\ \\
                  \\\\ \\text{d. (Quotient Rule) If } g(c) \\neq 0, \\text{ then } \\frac{f}{g} \\text{ is differentiable at } c \\text{ and}
                  \\\\ \\
                  \\\\ \\ \\ \\ \\ \\left(\\frac{f}{g}\\right)'(c) = \\frac{g(c)f'(c)-f(c)g'(c)}{[g(c)]^2}
      `,
      proof: `\\text{Proof...}`
    },
    {
      number: 15,
      title: "6.1.10 Chain Rule",
      statement: `\\text{Let } I, J \\text{ be intervals in } \\R, \\text{ let } f: I \\to \\R \\text{ and } g: J \\to \\R,
                  \\\\ \\text{where } f(I) \\subseteq J, \\text{ and let } c \\in I.
                  \\\\ \\
                  \\\\ \\text{If } f \\text{ is differentiable at } c \\text{ and } g \\text{ is differentiable at } f(c),
                  \\\\ \\text{then } g \\circ f \\text{ is differentiable at } c \\text{ and}
                  \\\\ \\
                  \\\\ (g \\circ f)'(c) = g'(f(c)) \\cdot f'(c).
      `,
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

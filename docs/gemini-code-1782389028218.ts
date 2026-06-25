const MODULES = [
  {
    num: "M1",
    title: "Performance Marketing & Data Foundations",
    frameworks: "Advanced Attribution Modeling, First-Party Data Architecture, Cohort Analysis & LTV Forecasting",
    output: "A bulletproof dashboard tracking true profitability, completely independent of platform vanity data."
  },
  {
    num: "M2",
    title: "Content Strategy & Brand Systems",
    frameworks: "The Narrative Hook Framework, Content Supply Chain Automation, Viral Distribution Mechanics",
    output: "A repeatable brand engine designed to feed your paid performance funnels organically."
  },
  {
    num: "M3",
    title: "Growth Loops & Product-Led Marketing",
    frameworks: "Acquisition vs. Retention Loops, Referral Mechanics, Friction-Reduction Frameworks",
    output: "A self-sustaining framework that lowers your structural reliance on escalating paid acquisition."
  },
  {
    num: "M4",
    title: "Marketing Operations & Leadership",
    frameworks: "Growth Team Structuring, Budget Allocation Models, Tech Stack Orchestration",
    output: "A 90-day execution roadmap tailored specifically to your brand's current constraints and scale."
  }
];

export function CurriculumSection() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto border-b border-[var(--border-subtle)]">
      <div className="mb-16">
        <h2 className="text-3xl font-bold uppercase tracking-tight">The System Archetype</h2>
        <p className="text-[var(--text-muted)] mt-2">4 Modules. Deep execution. Zero high-level fluff.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MODULES.map((mod) => (
          <div key={mod.num} className="bg-[var(--bg-surface)] p-8 border border-[var(--border-subtle)] flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[var(--text-muted)] block mb-4">{mod.num}</span>
              <h3 className="text-xl font-bold mb-4 text-[var(--text-primary)]">{mod.title}</h3>
              <p className="text-xs font-mono text-[var(--text-muted)] mb-6">
                <span className="text-[var(--text-primary)] block uppercase tracking-wider mb-1">Frameworks:</span>
                {mod.frameworks}
              </p>
            </div>
            <div className="border-t border-[var(--border-subtle)] pt-4 mt-auto">
              <span className="text-[var(--accent-green)] text-xs font-mono block uppercase tracking-wider mb-1">Core Deliverable:</span>
              <p className="text-sm text-[var(--text-primary)] font-medium">{mod.output}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
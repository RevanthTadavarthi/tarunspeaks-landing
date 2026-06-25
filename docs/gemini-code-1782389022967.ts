const DILEMMAS = [
  {
    id: "01",
    label: "THE TACTICAL DILEMMA",
    desc: "You know how to run a Meta ad, set up a HubSpot workflow, or prompt an AI engine. But you don't know how they mathematically impact your balance sheet."
  },
  {
    id: "02",
    label: "THE ATTRIBUTION ILLUSION",
    desc: "Looking at isolated dashboard metrics is lying to yourself. If your blended CAC isn't dropping while your scale increases, your marketing isn't working."
  },
  {
    id: "03",
    label: "THE PLAYBOOK OBSOLESCENCE",
    desc: "Copying yesterday's growth hacks from LinkedIn creators ensures you stay one step behind. Frameworks endure; tactics expire in 6 months."
  }
];

export function ProblemSection() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto border-b border-[var(--border-subtle)]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold tracking-tight uppercase">The Fragment Trap</h2>
          <p className="text-[var(--text-muted)] mt-4 max-w-sm">
            Why 90% of digital marketing spend generates noise, not compounding growth.
          </p>
        </div>
        
        <div className="lg:col-span-2 divide-y divide-[var(--border-subtle)]">
          {DILEMMAS.map((item) => (
            <div key={item.id} className="py-8 first:pt-0 last:pb-0 flex gap-6 items-start">
              <span className="font-mono text-xs text-[var(--accent-green)] pt-1">{item.id} //</span>
              <div>
                <h4 className="font-bold tracking-wide text-sm uppercase text-[var(--text-primary)] mb-2">{item.label}</h4>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
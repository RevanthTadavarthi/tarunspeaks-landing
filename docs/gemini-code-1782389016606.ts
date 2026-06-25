export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-start px-6 max-w-6xl mx-auto border-b border-[var(--border-subtle)] py-20">
      {/* Monospace Badge */}
      <span className="font-mono text-xs tracking-widest text-[var(--accent-green)] uppercase mb-6 block">
        THE ANTI-TEMPLATE COHORT FOR MARKETING LEADERS
      </span>
      
      {/* Editorial Header */}
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--text-primary)] max-w-4xl leading-[1.1] mb-6">
        You know the tools. <br />
        <span className="text-[var(--text-muted)]">Nobody taught you the system.</span>
      </h1>
      
      {/* Sharp Context Subtext */}
      <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl font-normal leading-relaxed mb-10">
        Stop collecting tactical fragments. Master the end-to-end mathematical frameworks used by top 1% growth teams to build, scale, and defend consumer brands.
      </p>
      
      {/* Execution Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full pt-4">
        <a 
          href="#apply" 
          className="bg-[var(--accent-blue)] text-white font-medium px-8 py-4 rounded-none hover:bg-opacity-90 transition-all text-sm uppercase tracking-wider"
        >
          Apply for Cohort 14 →
        </a>
        
        {/* Integrated Metadata (No separate boxes, clean editorial lines) */}
        <div className="flex items-center gap-6 text-xs font-mono text-[var(--text-muted)] border-l border-[var(--border-subtle)] pl-6 h-12">
          <div><span className="text-[var(--text-primary)] block text-sm font-sans font-bold">13 Batches</span> Completed</div>
          <div className="w-[1px] h-4 bg-[var(--border-subtle)]"></div>
          <div><span className="text-[var(--text-primary)] block text-sm font-sans font-bold">28,300+</span> Operators</div>
          <div className="w-[1px] h-4 bg-[var(--border-subtle)]"></div>
          <div><span className="text-[var(--accent-green)] block text-sm font-sans font-bold">30 Seats</span> Strictly Limited</div>
        </div>
      </div>
    </section>
  );
}
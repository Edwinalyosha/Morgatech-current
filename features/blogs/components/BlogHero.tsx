import { SearchBar } from "@/features/blogs/components/SearchBar";

export function BlogHero() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
            Resources &amp; Knowledge
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
            Insights &amp; Expertise
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed mb-12">
            Your technical guide to automotive excellence. From advanced
            diagnostic tips to industry news, we share the engineering precision
            that keeps your vehicle in peak performance.
          </p>
          <SearchBar
            placeholder="Search for maintenance tips, guides, or tech news..."
            className="max-w-2xl"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
      </div>
    </section>
  );
}

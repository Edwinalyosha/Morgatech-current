import Link from "next/link";

interface SuggestedCategory {
  icon: string;
  title: string;
  description: string;
  primary?: boolean;
}

interface EmptySearchStateProps {
  query: string;
}

const SUGGESTED_CATEGORIES: SuggestedCategory[] = [
  {
    icon: "build",
    title: "Engine Repair",
    description: "Mastering diagnostic codes and performance tuning.",
    primary: true,
  },
  {
    icon: "oil_barrel",
    title: "Maintenance",
    description: "Preventative care for long-term vehicle reliability.",
  },
  {
    icon: "bolt",
    title: "Electric Systems",
    description: "Understanding the future of high-voltage auto care.",
  },
];

export function EmptySearchState({ query }: EmptySearchStateProps) {
  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary px-4 py-1.5 bg-primary/10 rounded-full">
            Search Result
          </span>
        </div>

        <div className="bg-white rounded-[2rem] p-12 md:p-20 shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-8 w-32 h-32 rounded-3xl bg-slate-50 flex items-center justify-center shadow-inner relative">
              <span className="material-symbols-outlined text-6xl text-slate-300">
                construction
              </span>
              <span className="material-symbols-outlined text-7xl text-primary/20 animate-pulse absolute">
                search
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 leading-tight">
              No results for{" "}
              <span className="text-primary italic">&ldquo;{query}&rdquo;</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-lg mx-auto mb-10 leading-relaxed">
              Our mechanics searched every toolbox and diagnostic tool, but we
              couldn&apos;t find any matches. Try adjusting your search terms or
              explore our recent guides.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-xl font-extrabold shadow-xl shadow-primary/20 hover:bg-blue-700 hover:shadow-2xl transition-all active:scale-95 duration-200"
              >
                <span className="material-symbols-outlined text-lg">
                  arrow_back
                </span>
                Back to Blog
              </Link>
              <Link
                href="/blog/search"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all active:scale-95 duration-200"
              >
                Clear Search
              </Link>
            </div>
          </div>
        </div>

        {/* Suggested Categories */}
        <div className="mt-24 text-left">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8 px-2">
            Popular Repair Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUGGESTED_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all border-l-4 ${
                  cat.primary ? "border-primary" : "border-slate-300"
                }`}
              >
                <span
                  className={`material-symbols-outlined mb-4 ${
                    cat.primary ? "text-primary" : "text-slate-400"
                  }`}
                  style={
                    cat.primary
                      ? { fontVariationSettings: '"FILL" 1' }
                      : undefined
                  }
                >
                  {cat.icon}
                </span>
                <h3 className="font-bold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-sm text-slate-500">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

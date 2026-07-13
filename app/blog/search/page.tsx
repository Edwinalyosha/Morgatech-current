import type { Metadata } from "next";
import { SearchBar } from "@/features/blogs/components/SearchBar";
import { PostCard } from "@/features/blogs/components/PostCard";
import { Pagination } from "@/features/blogs/components/Pagination";
import { EmptySearchState } from "@/features/blogs/components/EmptySearchState";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Search Results | Morgatech Auto",
  description: "Search our archive of automotive engineering insights.",
  alternates: {
    canonical: "/blog/search",
  },
  robots: {
    index: false,
    follow: true,
  },
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim();

  const results = query
    ? BLOG_POSTS.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          p.category.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  if (query && results.length === 0) {
    return <EmptySearchState query={query} />;
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Search Header */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
              Search Results
            </span>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
              {query
                ? `Results for '${query}' (${results.length})`
                : "Search Our Insights"}
            </h1>
          </div>
          <SearchBar
            defaultValue={query}
            showButton
            className="max-w-2xl"
            placeholder="Search engineering insights..."
          />
        </div>
      </section>

      {/* Results Grid */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        {results.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {results.map((post) => (
                <PostCard key={post.id} post={post} variant="compact" />
              ))}

              {/* "Didn't find" CTA Card */}
              <article className="bg-primary/5 rounded-xl border-2 border-dashed border-primary/20 p-8 flex flex-col items-center justify-center text-center group hover:bg-primary/10 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    contact_support
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                  Didn&apos;t find what you need?
                </h3>
                <p className="text-sm text-slate-500 mb-6 max-w-[200px]">
                  Our expert engineers are ready to help with your specific
                  query.
                </p>
                <a
                  href="/contact"
                  className="bg-primary text-white px-6 py-3 rounded-lg font-bold text-sm active:scale-95 transition-all"
                >
                  Consult an Expert
                </a>
              </article>
            </div>

            <Pagination
              currentPage={1}
              totalPages={1}
              basePath={`/blog/search?q=${encodeURIComponent(query)}`}
            />
          </>
        ) : (
          !query && (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-6xl text-slate-300 mb-6 block">
                search
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Start Searching
              </h2>
              <p className="text-slate-500 max-w-md mx-auto">
                Enter a search term above to find articles about maintenance
                tips, car tech, guides, and more.
              </p>
            </div>
          )
        )}
      </section>
    </div>
  );
}

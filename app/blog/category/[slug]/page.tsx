import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryFilter } from "@/features/blogs/components/CategoryFilter";
import { PostCard } from "@/features/blogs/components/PostCard";
import { SearchBar } from "@/features/blogs/components/SearchBar";
import { Pagination } from "@/features/blogs/components/Pagination";
import { NewsletterSection } from "@/features/blogs/components/NewsletterSection";
import Link from "next/link";
import Image from "next/image";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/constants";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = BLOG_CATEGORIES.find((c) => c.slug === slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `Topic: ${category.name} | Morgatech Auto`,
    description:
      category.description ??
      `Browse articles in the ${category.name} category.`,
    openGraph: {
      title: `Topic: ${category.name} | Morgatech Auto`,
      description: category.description,
    },
  };
}

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = BLOG_CATEGORIES.find((c) => c.slug === slug);
  if (!category) notFound();

  const postsInCategory = BLOG_POSTS.filter(
    (p) => p.category.slug === slug
  );
  const featuredPost = postsInCategory[0] ?? BLOG_POSTS[0];
  const gridPosts =
    postsInCategory.length > 1 ? postsInCategory.slice(1) : BLOG_POSTS.slice(1);

  return (
    <>
      {/* Category Header */}
      <header className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-primary">
                Category Archive
              </span>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900">
                Topic: {category.name}
              </h1>
              {category.description && (
                <p className="text-lg text-slate-500 max-w-2xl">
                  {category.description}
                </p>
              )}
            </div>
          </div>
        </div>
      </header>

      <CategoryFilter
        categories={BLOG_CATEGORIES}
        activeSlug={slug}
        sticky
      />

      <section className="py-16 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured Article */}
          <article className="md:col-span-8 group cursor-pointer">
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.coverImageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 66vw"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                    Featured
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                      <span>{featuredPost.publishedAt}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span>{featuredPost.readingTime}</span>
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-500 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold">
                      {featuredPost.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <span className="font-bold text-sm">
                      {featuredPost.author.name}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </article>

          {/* Sidebar */}
          <aside className="md:col-span-4 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
              <h3 className="text-xl font-extrabold tracking-tight">
                Search {category.name}
              </h3>
              <SearchBar placeholder="Search tips..." />
            </div>

            <div className="bg-primary text-white p-8 rounded-xl shadow-2xl shadow-primary/20 relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-black tracking-tight leading-tight">
                  Need a professional check?
                </h3>
                <p className="text-white/80 text-sm">
                  Don&apos;t wait for a breakdown. Schedule your seasonal
                  maintenance today.
                </p>
                <Link
                  href="/booking"
                  className="block bg-white text-primary w-full py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-50 transition-colors text-center"
                >
                  Book Inspection
                </Link>
              </div>
              <div className="absolute -bottom-8 -right-8 opacity-10">
                <span
                  className="material-symbols-outlined text-[160px]"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  build
                </span>
              </div>
            </div>
          </aside>

          {/* Grid of posts */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {gridPosts.map((post) => (
              <PostCard key={post.id} post={post} variant="compact" />
            ))}
          </div>
        </div>

        <Pagination
          currentPage={1}
          totalPages={3}
          basePath={`/blog/category/${slug}`}
        />
      </section>

      <NewsletterSection />
    </>
  );
}

import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { BlogHero } from "@/features/blogs/components/BlogHero";
import { CategoryFilter } from "@/features/blogs/components/CategoryFilter";
import { FeaturedPost } from "@/features/blogs/components/FeaturedPost";
import { PostCard } from "@/features/blogs/components/PostCard";
import { BlogSidebar } from "@/features/blogs/components/BlogSidebar";
import { Pagination } from "@/features/blogs/components/Pagination";
import { BLOG_CATEGORIES, SIDEBAR_CATEGORIES } from "@/lib/constants";
import { getAllBlogPosts, isValidSlug } from "@/lib/overrank";

const PER_PAGE = 6;

export const metadata: Metadata = {
  title: "Auto Repair Tips & Guides — Beltsville, MD",
  description:
    "Practical auto repair advice from Morgatech in Beltsville, MD. Guides on brake repair, suspension, cooling systems, engine diagnostics, and car maintenance.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Auto Repair Tips & Guides — Beltsville, MD | Morgatech Auto Repair",
    description:
      "Practical auto repair advice from Morgatech in Beltsville, MD. Guides on brake repair, suspension, cooling systems, and engine diagnostics.",
  },
};

interface BlogPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const sp = await searchParams;

  // Older Overrank links use /blog?post=<slug>
  const legacySlug = typeof sp.post === "string" ? sp.post : "";
  if (isValidSlug(legacySlug)) permanentRedirect(`/blog/${legacySlug}`);

  const allPosts = await getAllBlogPosts();
  const featuredPost = allPosts.find((p) => p.isFeatured);
  const gridPosts = allPosts.filter((p) => !p.isFeatured);

  const totalPages = Math.max(1, Math.ceil(gridPosts.length / PER_PAGE));
  const page = Math.min(totalPages, Math.max(1, Number(sp.page) || 1));
  const pagePosts = gridPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const recentPosts = allPosts.slice(0, 3).map((p) => ({
    title: p.title,
    date: new Date(p.publishedAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    slug: p.slug,
    image: p.coverImage,
  }));

  return (
    <>
      <BlogHero />
      <CategoryFilter
        categories={BLOG_CATEGORIES}
        sticky
      />
      {featuredPost && page === 1 && <FeaturedPost post={featuredPost} />}

      <section className="pb-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Blog Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pagePosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <Pagination currentPage={page} totalPages={totalPages} basePath="/blog" />
          </div>

          <BlogSidebar
            categories={SIDEBAR_CATEGORIES}
            recentPosts={recentPosts}
          />
        </div>
      </section>
    </>
  );
}

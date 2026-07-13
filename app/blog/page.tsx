import type { Metadata } from "next";
import { BlogHero } from "@/features/blogs/components/BlogHero";
import { CategoryFilter } from "@/features/blogs/components/CategoryFilter";
import { FeaturedPost } from "@/features/blogs/components/FeaturedPost";
import { PostCard } from "@/features/blogs/components/PostCard";
import { BlogSidebar } from "@/features/blogs/components/BlogSidebar";
import { Pagination } from "@/features/blogs/components/Pagination";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  SIDEBAR_CATEGORIES,
  RECENT_POSTS,
} from "@/lib/constants";

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

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find((p) => p.isFeatured);
  const gridPosts = BLOG_POSTS.filter((p) => !p.isFeatured);

  return (
    <>
      <BlogHero />
      <CategoryFilter 
        categories={BLOG_CATEGORIES}
        sticky
      />
      {featuredPost && <FeaturedPost post={featuredPost} />}

      <section className="pb-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Blog Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {gridPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <Pagination currentPage={1} totalPages={3} basePath="/blog" />
          </div>

          <BlogSidebar
            categories={SIDEBAR_CATEGORIES}
            recentPosts={RECENT_POSTS}
          />
        </div>
      </section>
    </>
  );
}

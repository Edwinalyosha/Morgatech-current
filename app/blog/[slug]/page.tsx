import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReadingProgressBar } from "@/features/blogs/components/ReadingProgressBar";
import { PostHeader } from "@/features/blogs/components/PostHeader";
import { ShareSidebar } from "@/features/blogs/components/ShareSidebar";
import { PostContent } from "@/features/blogs/components/PostContent";
import { TableOfContents } from "@/features/blogs/components/TableOfContents";
import { RelatedPosts } from "@/features/blogs/components/RelatedPosts";
import { BLOG_POSTS, BLOG_POST_DETAILS } from "@/lib/constants";
import type { PostDetail } from "@/types";
import { BookingServiceButton } from "@/features/blogs/components/BookingServiceButton";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function getPost(slug: string): PostDetail | null {
  const base = BLOG_POSTS.find((p) => p.slug === slug);
  if (!base) return null;

  const detail = BLOG_POST_DETAILS[slug];
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return {
    ...base,
    content: detail?.content ?? "",
    sections: detail?.sections ?? [],
    tags: detail?.tags ?? [],
    relatedPosts,
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Morgatech Auto`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post.publishedAt).toISOString(),
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "AutoRepair",
      name: "Morgatech Auto Repair",
      url: "https://morgatechauto.com",
      telephone: "(301)-477-4113",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6713 Ammendale Rd",
        addressLocality: "Beltsville",
        addressRegion: "MD",
        postalCode: "20705",
        addressCountry: "US",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://morgatechauto.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ReadingProgressBar />
      <div className="pt-24 pb-24">
        <PostHeader post={post} />

        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <ShareSidebar />
            <PostContent content={post.content} tags={post.tags} />

            {/* Right Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                {post.sections.length > 0 && (
                  <TableOfContents sections={post.sections} />
                )}
                <RelatedPosts posts={post.relatedPosts} />

                {/* Booking CTA */}
                <div className="bg-primary rounded-xl p-8 text-white shadow-xl shadow-primary/20">
                  <h4 className="text-xl font-black mb-4 tracking-tight">
                    Need a Brake Inspection?
                  </h4>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">
                    Don&apos;t wait until you hear the grinding. Schedule a
                    professional multi-point brake inspection today.
                  </p>
                  <BookingServiceButton />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

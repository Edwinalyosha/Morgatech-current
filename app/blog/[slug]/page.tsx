import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReadingProgressBar } from "@/features/blogs/components/ReadingProgressBar";
import { PostHeader } from "@/features/blogs/components/PostHeader";
import { ShareSidebar } from "@/features/blogs/components/ShareSidebar";
import { PostContent } from "@/features/blogs/components/PostContent";
import { TableOfContents } from "@/features/blogs/components/TableOfContents";
import { RelatedPosts } from "@/features/blogs/components/RelatedPosts";
import { BLOG_POSTS, BLOG_POST_DETAILS } from "@/lib/constants";
import {
  getOverrankArticle,
  toPostDetail,
  OVERRANK_BODY_CLASS,
  type OverrankArticle,
} from "@/lib/overrank";
import type { PostDetail } from "@/types";
import { BookingServiceButton } from "@/features/blogs/components/BookingServiceButton";

// Our posts are prebuilt; any other slug is looked up in Overrank and cached 15 minutes.
export const revalidate = 900;

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

  if (!post) {
    const article = await getOverrankArticle(slug);
    if (!article) return { title: "Post Not Found" };
    const description = article.metaDescription ?? article.excerpt ?? undefined;
    return {
      title: article.title,
      description,
      alternates: { canonical: `/blog/${slug}` },
      openGraph: {
        type: "article",
        url: `/blog/${slug}`,
        title: article.title,
        description,
        publishedTime: article.publishedAt,
        images: article.thumbnailUrl ? [article.thumbnailUrl] : undefined,
      },
    };
  }

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

const PUBLISHER = {
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
};

function overrankSchema(article: OverrankArticle, slug: string): object[] {
  const schema: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.metaDescription ?? article.excerpt,
      image: article.thumbnailUrl ?? undefined,
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      author: {
        "@type": "Organization",
        name: "Morgatech Auto Repair",
        url: "https://morgatechauto.com",
      },
      publisher: PUBLISHER,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://morgatechauto.com/blog/${slug}`,
      },
    },
  ];
  if (article.faqs?.length) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }
  return schema;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const ownPost = getPost(slug);

  let post: PostDetail;
  let schema: object | object[];
  let articleClassName: string | undefined;

  if (ownPost) {
    post = ownPost;
    schema = {
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
      publisher: PUBLISHER,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://morgatechauto.com/blog/${slug}`,
      },
    };
  } else {
    const article = await getOverrankArticle(slug);
    if (!article) notFound();
    post = toPostDetail(article);
    schema = overrankSchema(article, slug);
    articleClassName = OVERRANK_BODY_CLASS;
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <ReadingProgressBar />
      <div className="pt-24 pb-24">
        <PostHeader post={post} />

        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <ShareSidebar />
            <PostContent
              content={post.content}
              tags={post.tags}
              articleClassName={articleClassName}
            />

            {/* Right Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                {post.sections.length > 0 && (
                  <TableOfContents sections={post.sections} />
                )}
                <RelatedPosts posts={post.relatedPosts} />

                {/* Booking CTA */}
                <div className="bg-primary rounded-xl p-8 text-white shadow-xl shadow-primary/20">
                  {ownPost ? (
                    <>
                      <h4 className="text-xl font-black mb-4 tracking-tight">
                        Need a Brake Inspection?
                      </h4>
                      <p className="text-white/80 text-sm mb-6 leading-relaxed">
                        Don&apos;t wait until you hear the grinding. Schedule a
                        professional multi-point brake inspection today.
                      </p>
                    </>
                  ) : (
                    <>
                      <h4 className="text-xl font-black mb-4 tracking-tight">
                        Need a Hand With Your Car?
                      </h4>
                      <p className="text-white/80 text-sm mb-6 leading-relaxed">
                        Schedule a visit with our Beltsville team and we will
                        take a look.
                      </p>
                    </>
                  )}
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

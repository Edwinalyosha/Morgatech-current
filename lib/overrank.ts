// Overrank Content API: articles written daily by Overrank, rendered on /blog next to our own posts.
// Public, read-only, no key. Spec: docs/Morgatech-Auto-Repair-Blog-Setup-Guide.pdf
import {
  AUTHORS,
  BLOG_CATEGORIES,
  BLOG_FALLBACK_COVER,
  BLOG_POSTS,
} from "@/lib/constants";
import type { Category, ContentSection, Post } from "@/types";

const API = "https://www.overrank.ai/api/articles/public";
const SITE = "morgatechauto.com";
export const REVALIDATE = 900; // 15 minutes, per Overrank's guidance

const SLUG_PATTERN = /^[a-z0-9-]{1,200}$/;
const TEAM_AUTHOR = AUTHORS.find((a) => a.id === "auth-team") ?? AUTHORS[0];

export interface OverrankItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  metaDescription: string | null;
  thumbnailUrl: string | null;
  publishedAt: string;
  readingTime: number | null;
}

export interface OverrankArticle extends OverrankItem {
  content: string;
  wordCount: number | null;
  siteName: string;
  faqs: { question: string; answer: string }[];
  relatedArticles: {
    id: string;
    title: string;
    slug: string;
    thumbnailUrl: string | null;
    readingTime: number | null;
  }[];
}

export function isValidSlug(slug: string): boolean {
  return SLUG_PATTERN.test(slug);
}

/** Every published article, newest first. Returns [] on any error so /blog never breaks. */
export async function getOverrankArticles(): Promise<OverrankItem[]> {
  try {
    const res = await fetch(`${API}?site=${SITE}`, {
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data.articles) ? data.articles : [];
  } catch {
    return [];
  }
}

/** One article. null = not an Overrank slug. Other errors throw so Next.js keeps the last good copy. */
export async function getOverrankArticle(
  slug: string
): Promise<OverrankArticle | null> {
  if (!isValidSlug(slug)) return null;
  const res = await fetch(`${API}?site=${SITE}&slug=${slug}`, {
    next: { revalidate: REVALIDATE },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Overrank API ${res.status}`);
  return res.json();
}

// Overrank has no categories, so we pick one of ours from the title.
const CATEGORY_RULES: [string, RegExp][] = [
  ["safety-first", /brake|tire|tyre|steering|suspension|alignment|airbag|headlight|wiper|safety/i],
  ["car-tech", /sensor|electrical|battery|hybrid|software|check engine|diagnos|alternator|starter/i],
  ["maintenance-tips", /oil|fluid|filter|coolant|cooling|radiator|maintenance|tune|belt|spark|\bac\b|a\/c|air condition|heat/i],
];

export function categoryFor(title: string): Category {
  const slug = CATEGORY_RULES.find(([, re]) => re.test(title))?.[0] ?? "guides";
  return BLOG_CATEGORIES.find((c) => c.slug === slug) ?? BLOG_CATEGORIES[0];
}

/** "October 4, 2026" (or "Oct 4" when short) in shop-local time, matching our post dates. */
export function formatDate(iso: string, short = false): string {
  return new Date(iso).toLocaleDateString(
    "en-US",
    short
      ? { month: "short", day: "numeric", timeZone: "America/New_York" }
      : { month: "long", day: "numeric", year: "numeric", timeZone: "America/New_York" }
  );
}

function toPost(a: {
  id: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  thumbnailUrl: string | null;
  publishedAt?: string;
  readingTime: number | null;
}): Post {
  return {
    id: `overrank-${a.id}`,
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt ?? "",
    category: categoryFor(a.title),
    author: TEAM_AUTHOR,
    publishedAt: a.publishedAt ? formatDate(a.publishedAt) : "",
    coverImage: a.thumbnailUrl ?? BLOG_FALLBACK_COVER,
    coverImageAlt: a.title,
    readingTime: `${a.readingTime ?? 5} Min Read`,
  };
}

/** Our posts plus Overrank's, newest first. Our post wins if a slug collides. */
export async function getAllBlogPosts(): Promise<Post[]> {
  const own = new Set(BLOG_POSTS.map((p) => p.slug));
  const ours = (await getOverrankArticles())
    .filter((a) => !own.has(a.slug))
    .map(toPost);
  return [...BLOG_POSTS, ...ours].sort(
    (a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt)
  );
}

/** Gives each h2 an id and returns Table of Contents entries. */
export function withHeadingIds(html: string): {
  html: string;
  sections: ContentSection[];
} {
  const sections: ContentSection[] = [];
  const used = new Set<string>();
  const out = html.replace(
    /<h2([^>]*)>([\s\S]*?)<\/h2>/g,
    (_m, attrs: string, inner: string) => {
      const text = inner
        .replace(/<[^>]+>/g, "")
        .replace(/&amp;/g, "&")
        .replace(/&#39;|&#x27;/g, "'")
        .replace(/&quot;/g, '"')
        .trim();
      let id =
        text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) ||
        "section";
      while (used.has(id)) id += "-2";
      used.add(id);
      sections.push({ id, heading: text, body: "" });
      return `<h2${attrs} id="${id}">${inner}</h2>`;
    }
  );
  return { html: out, sections };
}

/** Overrank HTML has no classes, so this applies the same styling our own post markup carries inline. */
export const OVERRANK_BODY_CLASS = [
  "prose prose-slate prose-lg max-w-none",
  "[&_p]:text-slate-600 [&_p]:mb-8 [&_p]:leading-relaxed",
  "[&>p:first-child]:text-xl [&>p:first-child]:leading-relaxed [&>p:first-child]:mb-12",
  "[&_h2]:text-3xl [&_h2]:font-extrabold [&_h2]:text-slate-900 [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:scroll-mt-28",
  "[&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-10 [&_h3]:mb-4",
  "[&_li]:text-slate-600 [&_strong]:text-slate-900 [&_a]:text-primary [&_a]:font-semibold [&_a]:no-underline",
  "[&_img]:w-full [&_img]:rounded-xl [&_img]:shadow-lg",
].join(" ");

/** Maps an Overrank article onto our post-page shape so the existing post components render it. */
export function toPostDetail(a: OverrankArticle) {
  const { html, sections } = withHeadingIds(a.content);
  return {
    ...toPost(a),
    content: html,
    sections,
    tags: [],
    relatedPosts: (a.relatedArticles ?? []).map(toPost),
  };
}

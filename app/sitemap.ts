import type { MetadataRoute } from "next";
import { BLOG_CATEGORIES, SERVICES } from "@/lib/constants";
import { getAllBlogPosts } from "@/lib/overrank";

// Rebuilt hourly so new Overrank articles get listed.
export const revalidate = 3600;

const BASE = "https://morgatechauto.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = ["", "/services", "/about", "/contact", "/blog"];
  const posts = await getAllBlogPosts();

  return [
    ...pages.map((p) => ({ url: BASE + p })),
    ...SERVICES.map((s) => ({ url: `${BASE}/services/${s.slug}` })),
    ...BLOG_CATEGORIES.map((c) => ({ url: `${BASE}/blog/category/${c.slug}` })),
    ...posts.map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
    })),
  ];
}

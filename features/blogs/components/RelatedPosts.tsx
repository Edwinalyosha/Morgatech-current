import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types";

interface RelatedPostsProps {
  posts: Post[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6 px-2">
        Related Articles
      </h3>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                <Image
                  src={post.coverImage}
                  alt={post.coverImageAlt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="80px"
                />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h4>
                <p className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-tighter">
                  {post.category.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

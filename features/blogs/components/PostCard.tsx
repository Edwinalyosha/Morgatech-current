import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types";

interface PostCardProps {
  post: Post;
  variant?: "default" | "compact";
}

export function PostCard({ post, variant = "default" }: PostCardProps) {
  if (variant === "compact") {
    return (
      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
        <Link href={`/blog/${post.slug}`}>
          <div className="aspect-video overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              width={640}
              height={360}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-6 space-y-3">
            <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
              {post.category.name}
            </div>
            <h3 className="text-xl font-extrabold tracking-tight group-hover:text-primary transition-colors leading-tight">
              {post.title}
            </h3>
            <p className="text-sm text-slate-500 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="pt-4 flex items-center justify-between text-xs font-medium text-slate-500">
              <span>{post.publishedAt}</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200/50 group">
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-[16/10] overflow-hidden relative">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-primary">
            {post.category.name}
          </span>
        </div>
        <div className="p-6">
          <time className="text-xs text-slate-400 font-medium mb-3 block">
            {post.publishedAt}
          </time>
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            {post.excerpt}
          </p>
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden relative">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <span className="text-xs font-bold text-slate-700">
                {post.author.name}
              </span>
            </div>
            <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

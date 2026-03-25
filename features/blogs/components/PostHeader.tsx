import Image from "next/image";
import Link from "next/link";
import type { PostDetail } from "@/types";

interface PostHeaderProps {
  post: PostDetail;
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <>
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-8 mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary font-bold hover:translate-x-[-4px] transition-transform"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="text-xs tracking-widest uppercase">
            Back to Blog
          </span>
        </Link>
      </div>

      {/* Hero Image Overlay */}
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/40 flex flex-col justify-end p-12">
            <div className="mb-4">
              <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                {post.category.name}
              </span>
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-black tracking-tighter leading-tight max-w-4xl">
              {post.title}
            </h1>
            <div className="mt-8 flex items-center gap-6 text-white/90 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <span className="font-bold">{post.author.name}</span>
              </div>
              <div className="h-4 w-[1px] bg-white/30" />
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  calendar_today
                </span>
                <span>{post.publishedAt}</span>
              </div>
              <div className="h-4 w-[1px] bg-white/30" />
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">
                  schedule
                </span>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

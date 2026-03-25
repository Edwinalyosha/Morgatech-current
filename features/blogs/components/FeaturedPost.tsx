import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types";

interface FeaturedPostProps {
  post: Post;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="pb-24 px-8 max-w-7xl mx-auto">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px]">
          <div className="md:w-3/5 relative">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent md:hidden" />
          </div>
          <div className="md:w-2/5 p-12 flex flex-col justify-center bg-white">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Featured Guide
              </span>
              <span className="text-slate-400 text-sm">
                {post.readingTime}
              </span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-6">
              {post.title}
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden relative">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-bold text-slate-900">{post.author.name}</p>
                <p className="text-xs text-slate-500 uppercase tracking-tighter">
                  {post.author.role}
                </p>
              </div>
            </div>
            <span className="w-full md:w-fit px-10 py-4 bg-primary text-white rounded-xl font-extrabold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform text-center">
              Read More
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}

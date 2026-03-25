import Image from "next/image";
import Link from "next/link";
import type { SidebarCategory } from "@/types";

interface RecentPost {
  title: string;
  date: string;
  slug: string;
  image: string;
}

interface BlogSidebarProps {
  categories: SidebarCategory[];
  recentPosts: RecentPost[];
}

export function BlogSidebar({ categories, recentPosts }: BlogSidebarProps) {
  return (
    <aside className="lg:col-span-4 space-y-12">
      {/* Categories Widget */}
      <div className="bg-slate-50 rounded-2xl p-8">
        <h4 className="text-lg font-black text-slate-900 mb-6 tracking-tight uppercase">
          Categories
        </h4>
        <ul className="space-y-4">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <Link
                href={`/blog/category/${cat.slug}`}
                className="flex justify-between items-center group"
              >
                <span className="text-slate-600 font-medium group-hover:text-primary transition-colors">
                  {cat.name}
                </span>
                <span className="bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {String(cat.count).padStart(2, "0")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Widget */}
      <div className="bg-white border border-slate-200/50 rounded-2xl p-8 shadow-sm">
        <h4 className="text-lg font-black text-slate-900 mb-6 tracking-tight uppercase">
          Recent Updates
        </h4>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex gap-4 group"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <div>
                <h5 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h5>
                <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-wider">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter CTA Widget */}
      <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="text-xl font-black mb-4 tracking-tight">
            Stay Engineered
          </h4>
          <p className="text-blue-100 text-sm mb-6 leading-relaxed">
            Join 5,000+ enthusiasts receiving monthly technical teardowns and
            exclusive workshop insights.
          </p>
          <div className="space-y-3">
            <input
              type="email"
              className="w-full bg-white/10 border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white"
              placeholder="Email Address"
            />
            <button className="w-full bg-white text-primary font-black py-3 rounded-xl hover:bg-blue-50 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
      </div>
    </aside>
  );
}

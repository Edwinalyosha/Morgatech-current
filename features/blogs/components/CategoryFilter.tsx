"use client";

import Link from "next/link";
import type { Category } from "@/types";

interface CategoryFilterProps {
  categories: Category[];
  activeSlug?: string;
  sticky?: boolean;
}

export function CategoryFilter({
  categories,
  activeSlug,
  sticky = false,
}: CategoryFilterProps) {
  return (
    <section
      className={
        sticky
          ? "bg-slate-50/80 backdrop-blur-sm sticky top-[72px] z-40 py-6 border-y border-slate-200/50"
          : "py-12 bg-white"
      }
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap gap-3 items-center overflow-x-auto">
          <Link
            href="/blog"
            className={`px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-colors ${
              !activeSlug
                ? "bg-primary text-white shadow-md shadow-primary/20"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            All Posts
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/blog/category/${cat.slug}`}
              className={`px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-colors ${
                activeSlug === cat.slug
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

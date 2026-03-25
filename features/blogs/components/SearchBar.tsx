"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  showButton?: boolean;
}

export function SearchBar({
  placeholder = "Search tips...",
  defaultValue = "",
  className = "",
  showButton = false,
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(defaultValue);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/blog/search?q=${encodeURIComponent(trimmed)}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="relative">
        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          search
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-6 py-4 rounded-xl border-none bg-white shadow-xl focus:ring-2 focus:ring-primary transition-all"
          placeholder={placeholder}
        />
        {showButton && (
          <button
            type="submit"
            className="absolute right-3 top-3 bottom-3 bg-primary text-white px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        )}
      </div>
    </form>
  );
}

"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages: (number | "...")[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  function pageUrl(page: number) {
    return page === 1 ? basePath : `${basePath}?page=${page}`;
  }

  return (
    <div className="mt-16 flex justify-center items-center gap-2">
      <a
        href={currentPage > 1 ? pageUrl(currentPage - 1) : undefined}
        className={`w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 transition-all ${
          currentPage <= 1
            ? "text-slate-300 cursor-not-allowed"
            : "text-slate-500 hover:bg-slate-50"
        }`}
        aria-label="Previous page"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </a>

      {pages.map((page, idx) =>
        page === "..." ? (
          <span
            key={`ellipsis-${idx}`}
            className="px-2 text-slate-300 font-bold"
          >
            ...
          </span>
        ) : (
          <a
            key={page}
            href={pageUrl(page)}
            className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all ${
              page === currentPage
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {page}
          </a>
        )
      )}

      <a
        href={currentPage < totalPages ? pageUrl(currentPage + 1) : undefined}
        className={`w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 transition-all ${
          currentPage >= totalPages
            ? "text-slate-300 cursor-not-allowed"
            : "text-slate-500 hover:bg-slate-50"
        }`}
        aria-label="Next page"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </a>
    </div>
  );
}

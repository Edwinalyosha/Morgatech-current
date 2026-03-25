import type { ContentSection } from "@/types";

interface TableOfContentsProps {
  sections: ContentSection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <div className="bg-slate-50 rounded-xl p-8 shadow-sm">
      <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6">
        Table of Contents
      </h3>
      <ul className="space-y-4">
        {sections.map((section, idx) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`flex items-center gap-3 font-medium transition-colors ${
                idx === 0
                  ? "text-primary font-bold"
                  : "text-slate-500 hover:text-primary"
              }`}
            >
              <div
                className={`w-1 h-1 rounded-full ${
                  idx === 0 ? "bg-primary" : "bg-slate-300"
                }`}
              />
              <span>{section.heading}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

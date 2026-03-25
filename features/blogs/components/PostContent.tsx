interface PostContentProps {
  content: string;
  tags: string[];
}

export function PostContent({ content, tags }: PostContentProps) {
  return (
    <div className="lg:col-span-7">
      <article
        className="prose prose-slate prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function ShareSidebar() {
  const actions = [
    { icon: "share", label: "Share" },
    { icon: "favorite", label: "Like" },
    { icon: "bookmark", label: "Bookmark" },
  ];

  return (
    <div className="hidden lg:block lg:col-span-1">
      <div className="sticky top-32 flex flex-col items-center gap-6">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 rotate-180 [writing-mode:vertical-lr]">
          Share
        </span>
        {actions.map((action) => (
          <button
            key={action.icon}
            aria-label={action.label}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-primary hover:text-white transition-all text-slate-600 shadow-sm"
          >
            <span className="material-symbols-outlined">{action.icon}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

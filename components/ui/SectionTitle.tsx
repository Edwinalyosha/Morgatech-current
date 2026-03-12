import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  showUnderline?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  showUnderline = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn(centered && "text-center", "mb-16", className)}>
      <h2 className="text-3xl md:text-4xl font-black mb-4">{title}</h2>
      {showUnderline && (
        <div
          className={cn(
            "h-1.5 w-20 bg-primary rounded-full",
            centered && "mx-auto",
          )}
        />
      )}
      {subtitle && (
        <p className="text-slate-600 mt-2">{subtitle}</p>
      )}
    </div>
  );
}

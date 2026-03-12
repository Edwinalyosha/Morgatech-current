import { cn } from "@/lib/utils";

interface MaterialIconProps {
  name: string;
  className?: string;
  filled?: boolean;
}

export function MaterialIcon({ name, className, filled }: MaterialIconProps) {
  return (
    <span
      className={cn(
        "material-symbols-outlined",
        filled && "fill-1",
        className,
      )}
    >
      {name}
    </span>
  );
}

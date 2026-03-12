import Image from "next/image";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import type { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex gap-1 text-yellow-400 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <MaterialIcon key={i} name="star" className="text-sm" filled />
        ))}
      </div>
      <p className="text-slate-600 italic mb-6">&ldquo;{review.quote}&rdquo;</p>
      <div className="flex items-center gap-4">
        {review.avatar ? (
          <Image
            src={review.avatar}
            alt={review.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            {review.initials ?? review.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-bold">{review.name}</p>
          {review.subtitle && (
            <p className="text-xs text-slate-500">{review.subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
}

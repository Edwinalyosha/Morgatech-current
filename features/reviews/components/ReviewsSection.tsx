import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { ReviewCard } from "./ReviewCard";
import type { Review } from "@/types";

interface ReviewsSectionProps {
  reviews: Review[];
  showOverallRating?: boolean;
}

export function ReviewsSection({
  reviews,
  showOverallRating = true,
}: ReviewsSectionProps) {
  return (
    <section className="py-24 bg-slate-50 text-slate-900" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            What Our Clients Say
          </h2>
          {showOverallRating && (
            <>
              <div className="flex justify-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <MaterialIcon key={i} name="star" filled />
                ))}
              </div>
              <p className="mt-2 text-slate-400">
                4.9/5 Average based on 500+ reviews
              </p>
            </>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

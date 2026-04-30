import { HeroSection } from "@/features/home/components/HeroSection";
import { PunchlineSection } from "@/features/home/components/PunchlineSection";
import { ServicesGrid } from "@/features/home/components/ServicesGrid";
import { HowItWorks } from "@/features/home/components/HowItWorks";
import { BeforeAfter } from "@/features/home/components/BeforeAfter";
import { ReviewsSection } from "@/features/reviews/components/ReviewsSection";
import { LocationSection } from "@/features/home/components/LocationSection";
import { REVIEWS } from "@/lib/constants";
import { getGoogleReviews } from "@/lib/google-places";

export default async function HomePage() {
  const placesData = await getGoogleReviews();
  const reviews = placesData?.reviews?.length ? placesData.reviews : REVIEWS;

  return (
    <>
      <HeroSection />
      <PunchlineSection />
      <ServicesGrid />
      <HowItWorks />
      <BeforeAfter />
      <ReviewsSection
        reviews={reviews}
        rating={placesData?.rating}
        totalRatings={placesData?.totalRatings}
      />
      <LocationSection />
    </>
  );
}

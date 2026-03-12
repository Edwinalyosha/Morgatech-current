import { HeroSection } from "@/features/home/components/HeroSection";
import { ServicesGrid } from "@/features/home/components/ServicesGrid";
import { HowItWorks } from "@/features/home/components/HowItWorks";
import { BeforeAfter } from "@/features/home/components/BeforeAfter";
import { ReviewsSection } from "@/features/reviews/components/ReviewsSection";
import { BookingSection } from "@/features/home/components/BookingSection";
import { LocationSection } from "@/features/home/components/LocationSection";
import { REVIEWS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <HowItWorks />
      <BeforeAfter />
      <ReviewsSection reviews={REVIEWS} />
      <BookingSection />
      <LocationSection />
    </>
  );
}

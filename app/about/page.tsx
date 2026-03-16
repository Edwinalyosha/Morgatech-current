import type { Metadata } from "next";
import { AboutHero } from "@/features/about/components/AboutHero";
import { CompanyStory } from "@/features/about/components/CompanyStory";
import { Mission } from "@/features/about/components/Mission";
import { CoreValues } from "@/features/about/components/CoreValues";
import { CTASection } from "@/features/about/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Morgatech Auto Repair — Beltsville's trusted mechanics with decades of experience, ASE-certified technicians, and a commitment to honest service.",
  openGraph: {
    title: "About Us | Morgatech Auto Repair",
    description:
      "Learn about Morgatech Auto Repair — Beltsville's trusted mechanics with decades of experience.",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-40">
      <AboutHero />
      <CompanyStory />
      <Mission />
      <CoreValues />
      <CTASection />
    </div>
  );
}

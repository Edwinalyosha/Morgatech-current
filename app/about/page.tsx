import type { Metadata } from "next";
import { AboutHero } from "@/features/about/components/AboutHero";
import { CompanyStory } from "@/features/about/components/CompanyStory";
import { Mission } from "@/features/about/components/Mission";
import { CoreValues } from "@/features/about/components/CoreValues";
import { CTASection } from "@/features/about/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "7+ years serving Beltsville, MD. Family-run auto repair shop — we tell you exactly what we find, and what it costs, before we touch anything. TechNet 24-month/24k warranty on qualifying repairs.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Morgatech Auto Repair — Beltsville, MD",
    description:
      "7+ years serving Beltsville. Family-run. We tell you exactly what we find and what it costs — before we touch anything.",
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

import type { Metadata } from "next";
import { ServicesHero } from "@/features/services/components/ServicesHero";
import { ServiceDetailGrid } from "@/features/services/components/ServiceDetailGrid";
import { ServiceCTA } from "@/features/services/components/ServiceCTA";

export const metadata: Metadata = {
  title: "Auto Repair Services in Beltsville, MD",
  description:
    "70+ Google reviews. Brakes, suspension, AC, electrical, starter & alternator repair in Beltsville, MD. Honest diagnosis, clear pricing, TechNet 24-month warranty. Call (301)-477-4113.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Auto Repair Services in Beltsville, MD | Morgatech",
    description:
      "70+ Google reviews. Brakes, suspension, AC, electrical, starter & alternator and more. Honest diagnosis, TechNet 24-month warranty. Beltsville, MD.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceDetailGrid />
      <ServiceCTA title="Ready to get back on the road?" />
    </>
  );
}

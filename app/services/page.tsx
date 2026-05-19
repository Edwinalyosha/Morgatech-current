import type { Metadata } from "next";
import { ServicesHero } from "@/features/services/components/ServicesHero";
import { ServiceDetailGrid } from "@/features/services/components/ServiceDetailGrid";
import { ServiceCTA } from "@/features/services/components/ServiceCTA";

export const metadata: Metadata = {
  title: "Auto Repair Services",
  description:
    "Brake repair, suspension, cooling system, engine diagnostics and more in Beltsville, MD. Honest diagnosis, clear pricing, TechNet 24-month/24k warranty on every repair. Call (301)-477-4113.",
  openGraph: {
    title: "Auto Repair Services — Morgatech, Beltsville MD",
    description:
      "Brakes, suspension, cooling system and more. Honest diagnosis, clear pricing, TechNet 24-month/24k warranty. Beltsville, MD.",
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

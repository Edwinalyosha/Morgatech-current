import type { Metadata } from "next";
import { ServicesHero } from "@/features/services/components/ServicesHero";
import { ServiceDetailGrid } from "@/features/services/components/ServiceDetailGrid";
import { ServiceCTA } from "@/features/services/components/ServiceCTA";

export const metadata: Metadata = {
  title: "Professional Services",
  description:
    "Expert automotive services including oil changes, brake repair, engine diagnostics, transmission repair, and more at Morgatech Auto Repair in Beltsville.",
  openGraph: {
    title: "Professional Services | Morgatech Auto Repair",
    description:
      "Expert automotive services including oil changes, brake repair, engine diagnostics, and more.",
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

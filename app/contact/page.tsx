import type { Metadata } from "next";
import { ContactHero } from "@/features/contact/components/ContactHero";
import { ContactInfoGrid } from "@/features/contact/components/ContactInfoGrid";
import { FAQSection } from "@/features/contact/components/FAQSection";
import { EmergencyCTA } from "@/features/contact/components/EmergencyCTA";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Morgatech Auto Repair. Call us, email us, or visit our Beltsville location for expert automotive service.",
  openGraph: {
    title: "Contact Us | Morgatech Auto Repair",
    description:
      "Get in touch with Morgatech Auto Repair for expert automotive service in Beltsville.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoGrid />
      <FAQSection />
      <EmergencyCTA />
    </>
  );
}

import type { Metadata } from "next";
import { ContactHero } from "@/features/contact/components/ContactHero";
import { ContactInfoGrid } from "@/features/contact/components/ContactInfoGrid";
import { FAQSection } from "@/features/contact/components/FAQSection";
import { EmergencyCTA } from "@/features/contact/components/EmergencyCTA";
import { FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Morgatech | (301) 477-4113 | Beltsville, MD",
  },
  description:
    "70+ 5-star Google reviews. Call (301)-477-4113 or visit 6713 Ammendale Rd, Beltsville, MD. Mon–Fri 9 AM–6 PM. Same-day service on most repairs.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Morgatech Auto Repair — Beltsville, MD",
    description:
      "70+ 5-star Google reviews. Call (301)-477-4113. 6713 Ammendale Rd, Beltsville MD 20705. Mon–Fri 9 AM–6 PM.",
  },
};

export default function ContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* FAQPage structured data — enables rich FAQ results in Google SERP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContactHero />
      <ContactInfoGrid />
      <FAQSection />
      <EmergencyCTA />
    </>
  );
}

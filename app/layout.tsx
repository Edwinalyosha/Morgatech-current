import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidgetLoader } from "@/components/ui/ChatWidgetLoader";
import { BookingProvider } from "@/providers/BookingContext";
import { BookingModal } from "@/features/booking/components/BookingModal";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://morgatechauto.com"),
  title: {
    default: "Auto Repair in Beltsville, MD | Morgatech — Diagnosed Right. Fixed Right.",
    template: "%s | Morgatech Auto Repair",
  },
  description:
    "70+ Google reviews. 7+ years family-run auto repair in Beltsville, MD. Brakes, suspension, AC, electrical, and more. TechNet 24-month warranty. Call (301)-477-4113.",
  keywords: [
    "auto repair Beltsville MD",
    "car repair Beltsville",
    "brake repair Beltsville MD",
    "suspension repair Beltsville",
    "mechanic Beltsville Maryland",
    "family auto repair shop Beltsville",
    "engine diagnostics Beltsville",
    "alternator repair Beltsville MD",
    "starter repair Beltsville MD",
    "auto electrical repair Beltsville",
    "Morgatech Auto Repair",
  ],
  
  // Geographic SEO (The "Juice")
  other: {
    "geo.region": "US-MD",
    "geo.placename": "Beltsville",
    "geo.position": "39.05;-76.9",
    "ICBM": "39.05, -76.9",
  },

  openGraph: {
    title: "Auto Repair in Beltsville, MD | Morgatech — Diagnosed Right. Fixed Right.",
    description: "70+ Google reviews. 7+ years family-run auto repair in Beltsville, MD. Brakes, suspension, AC, electrical, and more. TechNet 24-month warranty. Call (301)-477-4113.",
    url: "https://morgatechauto.com",
    siteName: "Morgatech Auto Repair",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Favicon configuration
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* LocalBusiness structured data — tells Google who we are, where we are, and when we're open */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "Morgatech Auto Repair",
              url: "https://morgatechauto.com",
              telephone: "(301)-477-4113",
              email: "info@morgatechauto.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "6713 Ammendale Rd",
                addressLocality: "Beltsville",
                addressRegion: "MD",
                postalCode: "20705",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 39.05,
                longitude: -76.9,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "70",
                bestRating: "5",
              },
              priceRange: "$$",
              currenciesAccepted: "USD",
              paymentAccepted: "Cash, Credit Card",
              description:
                "Family-run auto repair shop in Beltsville, MD. Specialising in brake repair, suspension, cooling systems, and engine diagnostics. Diagnosed right. Fixed right. Every time.",
              sameAs: [
                "https://www.google.com/maps/place/Morgatech+Auto+Repair",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-slate-50 font-display text-slate-900 antialiased">
        <BookingProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatWidgetLoader />
          <BookingModal />
        </BookingProvider>

        {/* Shapo Reviews Widget */}
        <Script
          src="https://cdn.shapo.io/js/embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}

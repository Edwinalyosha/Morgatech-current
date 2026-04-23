import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatWidgetLoader } from "@/components/ui/ChatWidgetLoader";
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
    default: "Morgatech Auto Repair | Beltsville's Trusted Mechanics",
    template: "%s | Morgatech Auto Repair",
  },
  description:
    "Certified mechanics, honest pricing, and fast repairs in Beltsville, MD. We keep your vehicle running at peak performance.",
    keywords: ["Auto repair", "car service", "european auto repair", "car mechanic", "Beltsville MD"],
  
  // Geographic SEO (The "Juice")
  other: {
    "geo.region": "US-MD",
    "geo.placename": "Beltsville",
    "geo.position": "39.05;-76.9",
    "ICBM": "39.05, -76.9",
  },

  openGraph: {
    title: "Auto Repair Shop in Beltsville, MD | Morgatech Auto Repair",
    description: "Certified mechanics and honest pricing in Beltsville, MD.",
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
      </head>
      <body className="bg-slate-50 font-display text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidgetLoader />

        {/* --- BOOKING TOOL INTEGRATION --- */}
        {/* This loads the AutoOps logic in the background */}
        <Script
          id="portal-scripts"
          src="https://portal.autoops.com/portal-scripts.js"
          data-api-key="0e6b17283832489ca613af6cda22bc3e"
          strategy="lazyOnload"
        />
        
        {/* Shapo Reviews Widget */}
        <Script 
          src="https://cdn.shapo.io/js/embed.js" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}

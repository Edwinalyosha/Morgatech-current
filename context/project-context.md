Static project context for Morgatech Auto Repair.
Edit ONLY when architecture, stack, or structure changes.
Last updated: 2026-04-11
---
Project
Name: Morgatech Auto Repair
Type: Automotive service business website
Origin: Migrated from static HTML to Next.js 16 App Router
---
Tech Stack
Layer	Tool	Version
Framework	Next.js	16.1.6
UI	React	19.x
Language	TypeScript	5.x
Styling	Tailwind CSS	v4 (PostCSS)
Icons	Google Material Symbols Outlined	—
Fonts	Inter via next/font	—
Images	next/image (Google CDN)	—
---
Folder Structure
```
morgatech-auto/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Navbar + Footer + fonts)
│   ├── page.tsx                  # Home (/)
│   ├── globals.css               # Tailwind v4 imports + theme tokens
│   ├── about/page.tsx            # About (/about)
│   ├── services/
│   │   ├── page.tsx              # Services listing (/services)
│   │   └── [slug]/page.tsx       # Service detail (/services/[slug])
│   ├── blog/
│   │   ├── page.tsx              # Blog listing (/blog)
│   │   ├── [slug]/page.tsx       # Post detail — SSG
│   │   ├── category/[slug]/page.tsx  # Category archive — SSG
│   │   └── search/page.tsx       # Search results — dynamic
│   └── contact/page.tsx          # Contact (/contact)
├── components/
│   ├── layout/Navbar.tsx         # Client component (mobile menu + active link)
│   ├── layout/Footer.tsx         # Server component
│   └── ui/                       # Button, Card, SectionTitle, MaterialIcon
├── features/                     # Feature-based modules
│   ├── home/components/          # HeroSection, ServicesGrid, HowItWorks,
│   │                             # BeforeAfter, BookingSection, LocationSection
│   ├── about/components/         # AboutHero, CompanyStory, Mission,
│   │                             # CoreValues, TeamSection, WorkshopGallery, CTASection
│   ├── services/components/      # ServicesHero, ServiceDetailGrid,
│   │                             # ServiceDetailHero, ServiceOverview,
│   │                             # SymptomsSection, ServiceCTA
│   ├── contact/components/       # ContactHero, ContactInfoGrid,
│   │                             # FAQSection, EmergencyCTA
│   ├── blogs/components/         # BlogHero, SearchBar, CategoryFilter,
│   │                             # FeaturedPost, PostCard, BlogSidebar,
│   │                             # Pagination, ReadingProgressBar, ShareSidebar,
│   │                             # PostHeader, PostContent, TableOfContents,
│   │                             # RelatedPosts, EmptySearchState, NewsletterSection
│   └── reviews/components/       # ReviewsSection, ReviewCard
├── lib/
│   ├── constants.ts              # All static business data
│   └── utils.ts                  # cn() and helpers
├── types/index.ts                # All TypeScript interfaces
├── legacy-site/                  # Original HTML (reference only)
└── legacy/                       # Blog HTML (reference only)
```
---
Key Design Decisions
Decision	Rule
Page files are thin	Only imports + composition — no logic
Feature isolation	Each feature owns its components
Data centralization	All static data in lib/constants.ts
Server first	"use client" only when interactivity required
Path alias	@/ for all imports
Images	next/image only — Google CDN remotePatterns configured
Styling	Tailwind v4 CSS tokens in globals.css @theme block
---
Client Components (intentional — do not convert)
Navbar.tsx — useState mobile menu + usePathname active link
ReadingProgressBar — scroll event listener
CategoryFilter — useRouter + active state
SearchBar — form state + useRouter
Pagination — client-side page links

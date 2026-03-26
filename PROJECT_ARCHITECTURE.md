# Morgatech Auto Repair - Project Architecture

## Project Overview

Morgatech Auto Repair is a modern automotive service website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**. The application was migrated from a set of static HTML pages into a scalable, component-driven Next.js application using the App Router and feature-based architecture.

### Tech Stack

| Technology     | Version | Purpose                          |
| -------------- | ------- | -------------------------------- |
| Next.js        | 16.1.6  | React framework with App Router  |
| React          | 19.x    | UI library                       |
| TypeScript     | 5.x     | Type safety                      |
| Tailwind CSS   | 4.x     | Utility-first CSS (via PostCSS)  |
| Google Fonts   | -       | Inter font family                |
| Material Icons | -       | Google Material Symbols Outlined |

---

## Architecture

The project follows a **feature-based architecture** where code is organized by domain rather than by technical role. This makes it easy to find, modify, and scale individual features without affecting the rest of the codebase.

### Core Principles

1. **Feature isolation** - Each feature (home, about, services, etc.) owns its components
2. **Shared UI primitives** - Reusable atoms live in `components/ui/`
3. **Layout components** - Navbar and Footer are shared across all pages via root layout
4. **Centralized data** - Static data lives in `lib/constants.ts` with TypeScript types
5. **Thin page files** - Route pages are composition layers that import feature components

---

## Folder Structure

```
morgatech-auto/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (Navbar + Footer + fonts)
│   ├── page.tsx                  # Home page (/)
│   ├── globals.css               # Tailwind v4 imports + theme tokens
│   ├── about/
│   │   └── page.tsx              # About page (/about)
│   ├── services/
│   │   ├── page.tsx              # Services listing (/services)
│   │   └── [slug]/
│   │       └── page.tsx          # Dynamic service detail (/services/brake-repair)
│   ├── blog/
│   │   ├── page.tsx              # Blog listing (/blog)
│   │   ├── [slug]/
│   │   │   └── page.tsx          # Post detail (/blog/slug) — SSG
│   │   ├── category/
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Category archive (/blog/category/slug) — SSG
│   │   └── search/
│   │       └── page.tsx          # Search results (/blog/search?q=) — dynamic
│   ├── contact/
│   │   └── page.tsx              # Contact page (/contact)
│
├── components/                   # Shared reusable components
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky navigation header
│   │   └── Footer.tsx            # Site-wide footer
│   └── ui/
│       ├── Button.tsx            # Multi-variant button
│       ├── Card.tsx              # Generic card container
│       ├── SectionTitle.tsx      # Section heading with underline
│       └── MaterialIcon.tsx      # Google Material Symbols wrapper
│
├── features/                     # Feature-based modules
│   ├── home/components/          # Home page sections
│   │   ├── HeroSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── BookingSection.tsx
│   │   └── LocationSection.tsx
│   ├── about/components/         # About page sections
│   │   ├── AboutHero.tsx
│   │   ├── CompanyStory.tsx
│   │   ├── Mission.tsx
│   │   ├── CoreValues.tsx
│   │   ├── TeamSection.tsx
│   │   ├── WorkshopGallery.tsx
│   │   └── CTASection.tsx
│   ├── services/components/      # Services pages sections
│   │   ├── ServicesHero.tsx
│   │   ├── ServiceDetailGrid.tsx
│   │   ├── ServiceDetailHero.tsx
│   │   ├── ServiceOverview.tsx
│   │   ├── SymptomsSection.tsx
│   │   └── ServiceCTA.tsx
│   ├── contact/components/       # Contact page sections
│   │   ├── ContactHero.tsx
│   │   ├── ContactInfoGrid.tsx
│   │   ├── FAQSection.tsx
│   │   └── EmergencyCTA.tsx
│   ├── blogs/components/         # Blog feature components
│   │   ├── BlogHero.tsx          # Blog listing hero with search
│   │   ├── SearchBar.tsx         # Reusable search input (client)
│   │   ├── CategoryFilter.tsx    # Horizontal category pills (client)
│   │   ├── FeaturedPost.tsx      # Horizontal featured post card
│   │   ├── PostCard.tsx          # Blog card (default & compact)
│   │   ├── BlogSidebar.tsx       # Categories + recent posts + newsletter
│   │   ├── Pagination.tsx        # Page navigation (client)
│   │   ├── ReadingProgressBar.tsx # Scroll progress indicator (client)
│   │   ├── ShareSidebar.tsx      # Left sticky share buttons
│   │   ├── PostHeader.tsx        # Post hero with image overlay
│   │   ├── PostContent.tsx       # Rich article content renderer
│   │   ├── TableOfContents.tsx   # Right sticky TOC from sections
│   │   ├── RelatedPosts.tsx      # Related articles grid
│   │   ├── EmptySearchState.tsx  # No results state with suggestions
│   │   └── NewsletterSection.tsx # Full-width dark newsletter banner
│   └── reviews/components/       # Shared review components
│       ├── ReviewsSection.tsx
│       └── ReviewCard.tsx
│
├── lib/                          # Utilities and data
│   ├── constants.ts              # All static business data
│   └── utils.ts                  # Helper functions (cn, etc.)
│
├── types/                        # TypeScript interfaces
│   └── index.ts
│
├── legacy-site/                  # Original static HTML (reference only)
├── legacy/                       # Blog section static HTML (reference only)
│
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.mjs            # PostCSS (Tailwind v4)
└── eslint.config.mjs             # ESLint configuration
```

---

## Component Design Principles

### Page Components (`app/*/page.tsx`)

- **Server Components** by default (no `"use client"`)
- Export `metadata` for SEO
- Compose feature components in order
- Minimal logic — just imports and composition

### Feature Components (`features/*/components/`)

- Encapsulate a visual section of a page
- Accept data via props or import from `lib/constants.ts`
- Server Components unless interactivity is required
- Named exports (no default exports)

### UI Components (`components/ui/`)

- Small, reusable, stateless primitives
- Accept `className` prop for customization
- Use the `cn()` utility for conditional class merging

### Layout Components (`components/layout/`)

- `Navbar.tsx` — Client component (uses `useState` for mobile menu, `usePathname` for active link)
- `Footer.tsx` — Server component, renders static content

---

## Styling

Tailwind CSS v4 is configured via PostCSS (`@tailwindcss/postcss`) with CSS-based theme tokens in `globals.css`:

```css
@theme inline {
  --color-primary: #2463eb;
  --font-display: "Inter", sans-serif;
}
```

All custom colors are accessible as Tailwind utilities (e.g., `bg-primary`, `text-primary`).

---

## Images

All images are served from external Google CDN URLs (`lh3.googleusercontent.com`). The `next.config.ts` configures `remotePatterns` to allow `next/image` optimization for this domain.

Use `next/image` for all images with proper `alt` text, `width`/`height` or `fill` props.

---

## SEO

Each page exports a `metadata` object using the Next.js Metadata API:

```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description for search engines.",
  openGraph: { ... },
};
```

The root layout defines a `title.template` so child pages only need to set a plain title string.

---

## Blog Feature

The blog is a full content system with four page types.

| Route | Rendering | Description |
| --- | --- | --- |
| `/blog` | Static | Listing with hero, categories, featured post, grid + sidebar |
| `/blog/[slug]` | SSG via `generateStaticParams` | Post detail with progress bar, share sidebar, TOC, related posts |
| `/blog/category/[slug]` | SSG via `generateStaticParams` | Category archive with featured article, grid, newsletter |
| `/blog/search?q=` | Dynamic (server) | Search results with empty-state fallback |

### Blog Data

- **Types**: `Post`, `PostDetail`, `ContentSection`, `SidebarCategory`, `Category`, `Author` in `types/index.ts`
- **Constants**: `BLOG_CATEGORIES` (5), `AUTHORS` (2), `BLOG_POSTS` (6), `BLOG_POST_DETAILS` (rich HTML content with sections for TOC), `SIDEBAR_CATEGORIES`, `RECENT_POSTS`, `BLOG_NEWSLETTER` in `lib/constants.ts`

### Adding a New Blog Post

1. Add a `Post` entry to `BLOG_POSTS` in `lib/constants.ts`
2. Optionally add rich content to `BLOG_POST_DETAILS` keyed by slug (with `sections` for TOC generation)
3. The SSG routes automatically pick up new posts via `generateStaticParams()`

### Client Components in Blog

Four blog components use `"use client"` for interactivity:
- `ReadingProgressBar` — scroll event listener for progress tracking
- `CategoryFilter` — `useRouter` / active state navigation
- `SearchBar` — form state / `useRouter` for search submission
- `Pagination` — client-side page navigation links

---

## Adding a New Page

1. **Create the route** in `app/` (e.g., `app/careers/page.tsx`)
2. **Create feature components** in `features/careers/components/`
3. **Add types** to `types/index.ts` if new data shapes are needed
4. **Add constants** to `lib/constants.ts` for static data
5. **Add navigation link** to `NAV_LINKS` in `lib/constants.ts`
6. **Export metadata** for SEO in the page file

---

## Adding a New Service Detail

1. Add the service to `SERVICE_DETAILS` in `lib/constants.ts` with all required fields
2. The dynamic route `app/services/[slug]/page.tsx` automatically picks it up via `generateStaticParams()`
3. No additional routing or page files needed

---

## Best Practices

- Keep page files thin — delegate all UI to feature components
- Prefer Server Components; only add `"use client"` when interactivity is needed
- Use `@/` path alias for imports (configured in `tsconfig.json`)
- Extract repeated UI patterns into `components/ui/`
- Keep business data in `lib/constants.ts`, not hardcoded in components
- Use TypeScript interfaces for all data shapes
- Use `next/image` for all images
- Use `next/link` for all internal navigation

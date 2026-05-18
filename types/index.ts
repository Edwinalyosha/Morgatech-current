export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
  imageAlt?: string;
}

export interface ServiceDetail extends Service {
  heroImage: string;
  heroImageAlt: string;
  tagline: string;
  overviewTitle: string;
  overviewText: string[];
  stats: { value: string; label: string }[];
  symptoms: { icon: string; title: string; description: string }[];
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  beforeCaption: string;
  afterCaption: string;
}

export interface Review {
  quote: string;
  name: string;
  subtitle: string;
  avatar?: string;
  initials?: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  subtitle: string;
  value: string;
}

export interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
}

export interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string; 
  count?: number;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  author: Author;
  publishedAt: string;
  coverImage: string;
  coverImageAlt: string;
  readingTime?: string;
  isFeatured?: boolean;
}

export interface ContentSection {
  id: string;
  heading: string;
  body: string;
}

export interface PostDetail extends Post {
  content: string;
  sections: ContentSection[];
  tags: string[];
  relatedPosts: Post[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface SidebarCategory {
  name: string;
  slug: string;
  count: number;
}

export interface NewsletterCTA {
  title: string;
  description: string;
  buttonText: string;
  subscriberCount?: string;
}

export interface SearchResult {
  query: string;
  totalResults: number;
  results: Post[];
  suggestions?: string[];
}

export interface ChatBookingPrefill {
  name: string | null;
  phone: string | null;
  email: string | null;
  service_type: string | null;
  vehicle: string | null;
}

export interface ChatBookingForm {
  url: string;
  prefill: ChatBookingPrefill;
  confirmed_slot: string | null;
  alternative_slot: string | null;
  available_slots: string[] | null;
  date: string | null;
}

export interface ChatApiResponse {
  session_id: string | null;
  message: string;
  intent: "answer" | "qualifying" | "booking" | "escalation" | "unknown" | "error" | null;
  booking_form: ChatBookingForm | null;
  timed_out: boolean;
}

export interface ChatMessage {
  id: string;
  role: "bot" | "user";
  text: string;
  intent?: string | null;
  booking_form?: ChatBookingForm | null;
}

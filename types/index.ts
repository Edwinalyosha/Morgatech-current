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

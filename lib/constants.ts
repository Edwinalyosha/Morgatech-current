import type {
  NavLink,
  Service,
  ServiceDetail,
  Review,
  TeamMember,
  FAQItem,
  ContactInfo,
  HowItWorksStep,
  ValueCard,
  GalleryImage,
} from "@/types";

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "#" },
];

// ─── Business Info ───────────────────────────────────────────────────────────

export const BUSINESS = {
  name: "Morgatech Auto Repair",
  shortName: "Morgatech",
  phone: "(555) 012-3456",
  email: "service@morgatech.com",
  address: "123 Industrial Way, Beltsville, MD 20705",
  hours: {
    weekday: "Mon - Fri: 8:00 AM - 6:00 PM",
    saturday: "Sat: 9:00 AM - 2:00 PM",
    sunday: "Sun: Closed",
  },
  emergency: "(555) 999-0000",
} as const;

// ─── Services (grid cards on home & services page) ───────────────────────────

export const SERVICES: Service[] = [
  {
    slug: "oil-change",
    title: "Oil Change",
    description:
      "Full synthetic and high-mileage options with premium filter replacement.",
    icon: "oil_barrel",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLPL8Npeq4oU0dAxbXVOF8e0--yx9_VzUYr1JebmxTuYo-wECfk3gnVG-tLcHqCkoOpGoBUWFxN-uj3A7NQWadmJtlsY4ELYgz7GmaTrsUwEyjpNARN5Z4WJDrZScJcbCmdUYgmIvpm9mvUoP94xRXKrlbbLqPqlHQwTigeTnQV4JwKe_i36VMoMkKMQlEPuNlEC0ODlzghZsznSKD1Dn7YXsB95fkogp9--2a21lCpaLK01OkHRljby0h75GGJ0ccA7iAXKb_UvSj",
    imageAlt: "Close up of oil being poured into a car engine",
  },
  {
    slug: "brake-repair",
    title: "Brake Repair",
    description:
      "Pads, rotors, and fluid service to ensure your safety on every journey.",
    icon: "minor_crash",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhtomUpOPT6s7Pm9bU4E7MfqGQ0d8ymNYtPJOXmGRsBrHIC-AwmgGFEGWep6u4mtmL5k982ZW3M6onuAU4WtBq87kOt7-IyMDqYlA3pkAiTBFjyyxg4nMbKDOM7NwVy5foi-5jAmGZia9askCP4ofaXXNVYblYLAUDZusx00T6MedBtqLj-rurH3KjNwOfwq5QyL7Iv0iVtSc1NMOeAvN2MlWSusqgTi4f1C6LCmRZuo6E5OzD9WjSP_wPz84eobnd5GmM8om20Hnw",
    imageAlt: "Mechanical inspection of metallic car brake disc and caliper",
  },
  {
    slug: "engine-diagnostics",
    title: "Engine Diagnostics",
    description:
      "Advanced computer scanning to identify and resolve complex issues quickly.",
    icon: "build_circle",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5UO5wf3MM5TFngTTv0sov1gAJ8yMpUBGcI7qefZyo1ae8p77UXMIL96IgEBdUKeNFKjlA_-Jqz6esQyMnzB5JClVPQj_MMfEDtjoBmSgLbW-tKALYRmgQ6fN7v7NH4pYV62oYel8CTY_w0s4PMRJiUmx0gUUUoPeQFdMGqaCFLFftqo2dOd_Iartoz62bXLkW-TdxbO7Vn8hWsUKlbsgExPzW0kZpRjGn5_Di_rxFqg5Ju5SHu9bCNlSsAdYi1qqZI4wFpnYEcPDD",
    imageAlt: "Mechanic using a digital diagnostic tool on a modern car",
  },
  {
    slug: "battery-replacement",
    title: "Battery Replacement",
    description:
      "Testing and installation of high-performance batteries with warranties.",
    icon: "battery_charging_full",
  },
  {
    slug: "transmission-repair",
    title: "Transmission Repair",
    description:
      "Expert service and maintenance for automatic and manual transmissions.",
    icon: "settings_input_component",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcCDtu398E-_3CZivbIXIl-3f4wIsirofpaXTtaDc41GClvx4dSfPdgv8Uy-BvPwevwu8Ahy476S2amtFUI04Yhp4iiOmVxHHS3NA-DXTazqX5XddnlS8TGonDezDDknJwOTUSt4YC_MPUvT8nVdNrn8sDXYZIO6ArgvzEt3ypG1CoY2GzLyPIHtrXZ6Tf-wBH6i039Xsh43QZLSA9S3sUESgu0q1B1iHvoJxOUkxb3QMsME2iCB_WxVe8WIiG0DR7Dn2RoAIFgMWu",
    imageAlt: "Close up of a car gearbox and transmission components",
  },
  {
    slug: "electrical-system",
    title: "Electrical System",
    description:
      "Specialized wiring, sensor, and electronic module diagnostics and repair.",
    icon: "bolt",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6MgMh81PKABfIrcTSZrsb8_WCkbIXgsAJ1bnonTo8yN5B1XSVs4pB0DxmPX2yA3cL8UPvJnvhg32nIXg99J-Ri7beKBg7AA9Jv57BeECGHUIPH8d8fPknc4z21TBAIUg_7Ye90atzRGbnoSfcUMc_q_tuYLmclUfKj2bE5E-FyNyZMRBq2eZcBFAM0QRh-PVPrbdRbaHh_Q-f0vJMfLrdzRDqWDtX0p80H08_rMLgEIDxqhH8UTe8DQL_5EAZn1OVt_5Gbdml2zDj",
    imageAlt: "Car battery and electrical wiring in an engine bay",
  },
  {
    slug: "ac-repair",
    title: "AC Repair",
    description:
      "Cooling system diagnostics, recharging, and leak repairs to keep you comfortable in any weather.",
    icon: "ac_unit",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCz53lU60DDC4pk1qIA4MdLpEqEV6m_uFt4w7UkQLrWK3ivhWcOP_n9WqHUGFGI-8Qg8PByWQfeiTLc7og1UbKGerwqjbXHneKIfnOIvv22dC7J7wfFhz15xgucqZ4BML4UGlJgJJfz7pUwgI4csxaC-i5gCsz0s4r8Q0eW4VpEJ1ZNYQB7m47laG_3N6BbzBjzl9Z6ubij4CI9eC2Akg_2J2gmCgS8NvolpIWdEBsYtXMgggIgfZa6Yn20fZAwGpVAZ2O6RrRH2VMO",
    imageAlt: "Blue air conditioning coolant manifold gauges on a car engine",
  },
  {
    slug: "suspension-repair",
    title: "Suspension Repair",
    description:
      "Expert maintenance and replacement of shocks, struts, ball joints, and steering system components.",
    icon: "build_circle",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4LCu3zuVHujvBumlYWyRwyRwT8y11ZaTybsGTLzZkploOI28Wb_gfEp2nigfT4g2bNKHW84D4BIZ2XoipX1n_hFQPVlmUF9BYjDKr_nOFfFL-oPs1VWpMI3G_BWrgMRnBOGpgpXp8QDCJESU2HZ5bPnExjXif8lI5tyY-MrT8JwUGu-8_sJyIv2tL5Jn6XpVrZgUWEZyOdEYN1WY206Alw6VwJ_vz33ThZ0f-M6hBLKEiTOp6vGFFzB08xvT2jI0ZeRe-Z5MjE_S5",
    imageAlt: "Detailed view of a vehicle's suspension and wheel assembly",
  },
];

// ─── Service Detail (brake repair as the exemplar) ───────────────────────────

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "brake-repair": {
    slug: "brake-repair",
    title: "Brake Repair",
    description:
      "Pads, rotors, and fluid service to ensure your safety on every journey.",
    icon: "minor_crash",
    tagline: "Safety Service",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoVexo8KgSBst9vJnBMoP9Tm-nAOGZAv4WGTPu6ZLFeHSd0WSZQ0XxdEghDzMjFr7nWd1A-rG4pZfNGO2IodV5lphd6VCB1qmKPoofzo5vAZ3Ns4b6p5RANYXJWt7N-gfzrqBP2zbbNorFzZVuwZqz1TAm1U5yHQUNmAXziiZdBi_BBMK0TiIN2qqTlETU5v0bwIIPjk5Vm3RqkSrpy4r0zKqtWQ7nQzaquY0sXLRwU-sOB-qj1LH3yaefP5XNzy2F2Bau3wxqkjfR",
    heroImageAlt: "High performance car ceramic brake disc and red caliper",
    overviewTitle: "Why Brake Maintenance Matters",
    overviewText: [
      "Your brakes are the most critical safety feature of your vehicle. Over time, friction material wears down, heat warps rotors, and brake fluid absorbs moisture, significantly reducing your stopping power.",
      "Regular maintenance doesn't just keep you safe—it prevents costly repairs. Catching a worn pad early prevents the metal-on-metal contact that destroys expensive rotors and calipers. Our certified technicians provide thorough inspections to ensure your system performs at its peak.",
    ],
    stats: [
      { value: "15ft", label: "Avg. Shorter Stop" },
      { value: "20k", label: "Miles Inspection Interval" },
      { value: "100%", label: "Safety Certified" },
      { value: "2yr", label: "Service Warranty" },
    ],
    symptoms: [
      {
        icon: "volume_up",
        title: "High Squealing",
        description:
          "Metal wear indicators rubbing against the rotor to warn of thin pads.",
      },
      {
        icon: "vibration",
        title: "Vibration/Pulsing",
        description:
          "Usually indicates warped rotors or uneven pad wear during braking.",
      },
      {
        icon: "straighten",
        title: "Long Stopping Distance",
        description:
          "Faded friction material or air in lines making it harder to stop fast.",
      },
      {
        icon: "format_underlined",
        title: "Brake Fluid Leaks",
        description:
          "Puddles of amber-colored fluid under your car indicate hydraulic failure.",
      },
    ],
    beforeImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARTZk_4Og0E6kDHWRw_2B9IavbftlTJKuy6NTXnm2aN7f1956xcqUQ2hido-3DTAHWmfLkqEyZAj3KZJQhpR7glK5imgEdQyhAyZW-Nsf3xB6asd4xdCHXWDhe8F6zoqfZ632rGI0NLp742p26lWrxdInjpAxpXHIEPe74ECHwRgP0mLY7RJ_t7T2xbVzpyWJl3eRojNZFUI055DPlBN-1UVIejdgevnMsW31yVYd4sRjTmgm2a8QHkxXKXAZs2Q0RfDud2UE1kHAm",
    afterImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfkOS2jrmOBZqyAnc4XCgz6ZZ87gOE4YS1aIrl6b0lVHRhtsknO3XEZXHjizTowtiHljh4nXYwzvoB8q1ziuQ2qCcdN_nFHgUzzjCZmduKteX4_HnyNvpRF551zaONXZ-t395FJSktIvo2-oPNLwginnkqmRLZGjs1yvC5V19XJZQ3cD5nHdJzT4Bigi-EiuK5OSYxHoAlrwwY6hZeYhdfakBKUUEezb_W8oa_sDybY0jHrqxQudwqVKx6H04qbAEHvgw3AQ5MTuMw",
    beforeAlt: "Worn and rusted brake rotors on old vehicle",
    afterAlt: "New shiny brake disc and fresh pads installed",
    beforeCaption: "Heavily worn pads and rusted, grooved rotors.",
    afterCaption: "Premium ceramic components with precision installation.",
  },
};

// ─── Reviews ─────────────────────────────────────────────────────────────────

export const REVIEWS: Review[] = [
  {
    quote:
      "Fastest oil change I've ever had. Honest crew, didn't try to sell me things I didn't need. Highly recommend Morgatech!",
    name: "David Johnson",
    subtitle: "BMW 330i Owner",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtpcLxMmDE7OYf1YuHDQf0IuvBovPa0qwUvus681k9HvOjrJ5u4vc48d7ABqQA-mCxAu1QQkgUGGanUekJZKzfEZwyQqAUlBN5VpNsddpNyYgd_rOZmHxsALpapjQc8Mws_bBPz4feiV6Wa_mLDL05E31Z7ZcePjxnETpU7en6PbJR4uHI6tVFCVDQBAvyngPC9oF8hASuXqlnCH4_m1LSzUsbitBkBAePODxGgVV74_cfA_Fo6XlCefOkBNEcCw3y2BIzOUamZi4S",
    rating: 5,
  },
  {
    quote:
      "They diagnosed a weird electrical issue that three other shops couldn't figure out. Truly experts at what they do.",
    name: "Sarah Miller",
    subtitle: "Tesla Model 3 Owner",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZSdgK64wbqDPQIVEy6I-8R7ne3ogcDG6brtaGcHjqH31oiE7ea0ZIoQs3qdmaJaSFYAg6k4goGKIs5OHjsGWU6Auk9DST59xx3ny7Ul8aeMemAVFktdB9id5_TmxORZ_KZYwmwWPcfkaQ6x3OOmfQSEQ5LFwA8KGXSR6Xlaiv8x7EipJrjRtekfkH9SHLotWOOsIk2faTjCquYws1F-nWW77xgEKJ4Gz-3A014_LbUL1q3yPXmLb_DO3NdUukk2pugR0BRIhkH42c",
    rating: 5,
  },
  {
    quote:
      "Excellent service from start to finish. The pricing was fair and they kept me updated throughout the whole repair.",
    name: "Michael Chen",
    subtitle: "Ford F-150 Owner",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAU8pyxRMcTfW0KrRb8n5dLw__qr6dY9eoH8yZO4dIhgSGdfWvB-7bY-tZuPPkoyASmaX6S8C0N38FGJrUyXFVn8PdsoLBsoyLxlgi0WCqWDEYm_3Tjq7DSQmVITu3c5tbWxq3XirWspL56cNfxZ8z_ct2VhPb9kuEkDJrJolpRFoBbHFsNOMEhOeXEfKxJiWbUYNJ0tSr3VZ6sXpCjPLMhGO_XGvUCA_TS8YrpHP8MR5gXmNYcy5kyjJd5iDDCJgOUS9nBpVeEaNbl",
    rating: 5,
  },
];

export const SERVICE_DETAIL_REVIEWS: Review[] = [
  {
    quote:
      "My car was pulsing like crazy whenever I stopped. Morgatech diagnosed it as warped rotors and had me back on the road safely in 2 hours. Smooth as silk now!",
    name: "James D.",
    subtitle: "",
    initials: "JD",
    rating: 5,
  },
  {
    quote:
      "I usually worry about hidden fees, but the price for my pad replacement was exactly what they quoted me. Very professional and the shop is immaculate.",
    name: "Sarah R.",
    subtitle: "",
    initials: "SR",
    rating: 5,
  },
  {
    quote:
      "Best brake service in town. They explained exactly how much life I had left in my pads before I decided to replace them. No pressure, just facts.",
    name: "Mike K.",
    subtitle: "",
    initials: "MK",
    rating: 5,
  },
];

// ─── Team Members ────────────────────────────────────────────────────────────

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Marcus Rodriguez",
    role: "Master Mechanic & Owner",
    description:
      "With 20+ years of experience, Marcus oversees all major diagnostics and complex repairs.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNqkueNSXYYDawch9VaVrKxoCgEfsEXg-Wed5d11-gXIq-2Bh1TvTqWvoM_W_MLTGi75pPcyixUHj_WUAFyTHooubqsuiVkOxZd8mQG6JeyjHZq-dxJLae6S-Mm1M8J-tr_29gi7GpdydNf3Cm3oPZW8hg3gQRHhfeCVg9TMdYiOTKrGDsmlsQ2T6JEU9tMp1vZo-kcp5nBNiXYsoSjQqBWYpxpYppfxW6qbZQ0vISiwmgFjr4bQVcv0liDuz8l_3EyHOGapbFatmo",
    imageAlt: "Portrait of a professional lead mechanic in uniform",
  },
  {
    name: "Elena Chen",
    role: "Service Advisor",
    description:
      "Elena ensures smooth communication between our technicians and our valued customers.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCbB7tWVfThZftrU---PXm6iQwTJdtoIMqfl5D2A7uE-C5zAtK9eXbR8Ckk_VdpbY0ppxlD2c-7cae4jukGpd-JxmH5Mw_Vna-bvPxsp4F5JYGM-OzQKZ7Jz7i79RDez76WH6D0XYnDbVFCdpzHELXlQF4GO5CzBjJlfhBAC5jVRW9otXvfrfa81mhlMuN3hlz1BAn2QOhvZuEk4Gs57cRiFWe2edqgGsDvbTMU0R09GiIujcEZX2EUCx_41KXiYyCYp4kLJ4hZpSJ1",
    imageAlt: "Portrait of a female automotive service advisor",
  },
  {
    name: "James Wilson",
    role: "Diagnostic Specialist",
    description:
      "James specializes in computer diagnostics and advanced electrical systems on modern vehicles.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvnWqtl0C63Bn3GgID33qPVXOOypvPN-LD8wjJ_eV8UbQIEZrzgSC3d79nOCbTOGZ2ITkuZf3KQ0tVW35AB3vXN70Qdm5M6ecmkeRxSPVSsZbtPCiCxkFQ91F5eeRX9FRQ5rTcQsTBUwwkrad-sQzt1nSAzfOH7dgG6ciJ5tj8jEO-340cNoTuu9S7cL90ydua6gsXz_p8cFoAiS6_YtjUgMvdPgq00DvnYLbR1LMTfd_QjFLHuYuCwbTDNb5LP7c1X_yOIVV5ZAmu",
    imageAlt: "Portrait of a young male automotive technician",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Do I need an appointment?",
    answer:
      "While we accept walk-ins for minor services like oil changes, we highly recommend scheduling an appointment to ensure the quickest turnaround for your repair.",
  },
  {
    question: "What vehicles do you repair?",
    answer:
      "We service all makes and models, including domestic, foreign, and luxury vehicles. Our technicians are certified for hybrid and electric vehicle maintenance as well.",
  },
  {
    question: "How long do repairs take?",
    answer:
      "Routine maintenance is usually completed within 1-2 hours. Complex mechanical repairs vary, but we provide a detailed time estimate after our initial diagnostic.",
  },
];

// ─── Contact Info Cards ──────────────────────────────────────────────────────

export const CONTACT_CARDS: ContactInfo[] = [
  {
    icon: "phone_in_talk",
    title: "Phone",
    subtitle: "Available during hours",
    value: "(555) 123-4567",
  },
  {
    icon: "mail",
    title: "Email",
    subtitle: "Response within 24h",
    value: "service@morgatech.com",
  },
  {
    icon: "location_on",
    title: "Address",
    subtitle: "Beltsville, MD 20705",
    value: "123 Industrial Way",
  },
  {
    icon: "schedule",
    title: "Business Hours",
    subtitle: "Weekdays & Saturday",
    value: "Mon-Fri: 8AM-6PM",
  },
];

// ─── How It Works Steps ──────────────────────────────────────────────────────

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: 1,
    title: "Book Appointment",
    description: "Select your service and time online or by phone.",
  },
  {
    number: 2,
    title: "Bring Your Vehicle",
    description: "Drop off your car at our Beltsville location.",
  },
  {
    number: 3,
    title: "Diagnose Problem",
    description: "Our experts identify the issue and provide a quote.",
  },
  {
    number: 4,
    title: "Repair & Pickup",
    description: "We fix it fast and notify you when it's ready.",
  },
];

// ─── Core Values ─────────────────────────────────────────────────────────────

export const CORE_VALUES: ValueCard[] = [
  {
    icon: "precision_manufacturing",
    title: "Quality Workmanship",
    description:
      "We use the latest tools and high-grade parts to ensure every repair meets industry standards.",
  },
  {
    icon: "payments",
    title: "Honest Pricing",
    description:
      "No hidden fees or surprise charges. We provide detailed estimates before any work begins.",
  },
  {
    icon: "sentiment_very_satisfied",
    title: "Customer Satisfaction",
    description:
      "Your peace of mind is our priority. We go the extra mile to make your visit stress-free.",
  },
  {
    icon: "engineering",
    title: "Experienced Techs",
    description:
      "Our ASE-certified technicians bring years of diagnostic expertise to every vehicle.",
  },
];

// ─── Workshop Gallery ────────────────────────────────────────────────────────

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_J0zcIVLpJSSiIfFgjwpCWyC8p1JgGE7qydo7Tp6QqpL72rLSZFM5aiX_9HjKesHjtKVMJSJmt87I3O-IzYaNGhMHdEByK34HxyWfyr0xvBIKFeRKVrNfL23BzQ-eSLyBV_zKC2eqehoyfg3efDWBLD0C8WqQ3qBJ4PjqoAd1eqXtuYCPMTu_Uut6dVYkygNpX66-dkSU1K17wsq65HVCQrC_fLem5MxckdyenW1svjX-d8Ql9HPe9KV979DE8YcFNhyfMDW1slx4",
    alt: "Close up of mechanic hands working on car brakes",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5D-LK-4btshdnWMjyRq0aepwO_rUeMA8AgUwYeK4zCgc24cJ4ToMOfMvJiIhYRcYC78QVaaGAIDDDxkugnPc-lf3BlP0ZiQ2ZwiBdL2HWY7HUmYRC_njMY-25Yjt515X_1LNImkk1f_HIiOK_wSkzrUjAeEcNTk8VlK1NnXYZyJltFLUOaPROwceWvQom0mP_j6zxBPiAZ5LfoZNm_oSsYv-SFyGEo2DNLmUOcl7EbjHzmG6Ilo_0VzGFjWsKx_jsNnOVC4iJqzY-",
    alt: "Advanced diagnostic computer screen in auto shop",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQGZfecLcjSbg2oECxrsI9M01pQ6ZHkxwH0YiJuzFqI9aRm3wbOlHZCkFY1VXHwU6hV6uLFbKlAi82VT1ZZ17C0nOfBlwByZSxOGzHkO5zLOQPmMOL3JEJveBz131PMASZ9medw_xDql88IgLHOnrc55yVJ62-5CLQN79gaPbZCht-fSMOxc-ZRogszhGpHR2aBf0oqABu79FPtR0weIT4zj7p4brYPbUSOc9N7uw901I6b0lPLp547Byfc5ELxvKjTCSAPn-F5CJg",
    alt: "Row of car lifts in a bright clean automotive garage",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5zZTxpo7BZW2GJ_XF9-5d4kOpjLGAWJUHccm7YwMUNERLl9OTMK8JVjRh4N-94mU4zLJQGHJX1bM4CXRgbyegYn-lWdQbdOUW6j28QcntqT6hRjDtLdGqYeKWecoWYrjiuQunYVqFPm0WQlbpefvengkQysdwCUepwSYHKWEGKDpAfaUTro_gWLsqLygWEzE_U6Ywvw1rz92sz1u0m1P8W33S61JltlOO6eE6RtAzoOxmejiYXTpkR9v65ExfhdNXg6PfLX11Spbe",
    alt: "Mechanic tightening a bolt with high end tools",
  },
];

// ─── Home Page Images ────────────────────────────────────────────────────────

export const HOME_IMAGES = {
  hero: "/homeHero.jpg",
  beforeRepair:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA97C42_pZ1HY15QlacPLOQt2RKKp62vlENmzO2l7ZbxyN_aAhYCZ9Sck1e1aqItXjI-n8OqZqCIb8qAE7cfXvpMpTQlPgc_EoJupBfTPRWGmOQenhtLzUU31HZtBuynJJwh4CI9PpD_j4203fZ7mEZB_7fXP9JCIvBoY75zGfZdk5AElaWZ98MZilFUCfnCs5si0jRWT4HA4dWxezGbifywylXAl29Tkz-dpegb7RSsoIMxgeAOdocI_cVw2-0WuBo9v9GIEF-Z6qx",
  afterRepair:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCQtsnIbVnU1qbhNVqrWC1tFI6q2w5hrbPnPWa6k59-ZMaLGRIr77FIxPxHuPFZpMdaHkQVRvPpRV8zO8pHM3KmSGSG5YjyU_W-o2jrgwDriQe5qhE288RZEMi6vORIUSa8e5Gim35T7p5GA25GhTGRczU8qavhxF4Y9PNoSV0Dv2Zhs3pqNoM8rJQWGZ_Ib3R5G3YF8Tnf5R63k6hMqluoqGt9ip7EnXlTeCd0b1lI-Cpg6qu7EdZ-47o8sKvJxU2-YNWtieMCmWTg",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuCx8MsHUjPKQik-Hts623WDyOS9DYdEcklGXR9Vbs7xu3FsADMpgnVSpNBZ0SyhDPcWHPfPLfLZl3W0xrgBb_c7gXqKY0WeLFZ5pUzXvUeZlGZrp7Q4NMnXMcjBb0bgm-_7UqZ47wx57YdiiGSVCQL2XvK626wPwddWuurSn1YBgStohmrJDrkne1ohEFUtGIer_JF1rhYm6UW_oesCSuCTnkSnmWQd0VbOxRAtZWk-dmGFHLw_NnQpWRREfMgagsYNJRZfT-kuopHw",
} as const;

export const ABOUT_IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIAP2lzZDWQD5WaDw4jsyjBwWq0KddFwM6zRTAvykiwmLZZo9QAC7mKnnXb0mpEclQI6KQwxHyTSG49O7OrBLzjVt7z-vmFSCvnMByK3DNMbGug0YAsbIPhy9NQn19XwQ7AYJLpHywDSLUFLIitX5aLPHKy3z91GTRoFC-9imh2u2nbZOq80VyZNA8MXr1kEbGJOp4J_mMiKlv-inYRPH6M6Yv_UwBIPL1SfUuyLBX5gCSoDP3g_PMQ-JY1gGIEYopjXjE78PaVY_q",
  mechanics:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC5bsJOlvTGPJE-Lc-8o61mVv3DUZOVrFqzecPjfRl37vFYGf7MO6P7trGW8uiuJT0p_VG5eP6Vh9UXWLJAiJ3-oj0t9MMqfYT6kB7whM2C02fRKXKOC0B5vydI26yJ9rwgfICFyrPvstQRpbzG4--z2juKNe37_KG9U0INOdBCVT16HkSSLZeas3ekTZn_jY7ZV6gbrz29hxU_kgNWKHeafv_TiZp4ppaTeXMoLh2vWB_lbmVJ0dUmVMh7_vXRsSBu-jtrTNs1-gm7",
} as const;

export const CONTACT_IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQCIhNmQce60pKJAcTVi4UUbgz6aoXco7W4I3eByeRKplNJDFYkcdCvNiPstk3crWau1GF890V57FsPng27p9jaYwz1RLcVi1uqauG-_zM2mqGiwGnHSsl-gBsRsA80PoJIGmoaCHw6nAp23I5SQKQcHL9HqRMWkfDtZwSQA5BpiqmEMltN9hhW2faTi7wGjxVUIeNwQeQYZMXd0R4iY7rhcZ14Kxz5q0v0Miw6SN15nBq0G65SE1MZnOPkmeIza4Pi-8pDv047qHo",
} as const;

export const BOOKING_IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCr-_53VgB9lFRTw936B8-q_NzqJar0pmXZ0NgrhiCZaOsc9RouXV3mq-la9Tc-xVnq9XR9FN_FafqIzGII9FT4hgjDsKxJTFeiSF1p8dCtLR_qjsvKv7JYAkmhoQw7oR9maA95u0aAcaNqvZIcTjVFM_nwoKJMtbKRk7pFVSaWS9L4ZYsfqzE_IT-g0EwBk9Pxm7xfk4GcYM3TriYWLPgeA1Lqc5bOawvfYY0XyXSvao-4TzUeqSJ_XsoF4117SKS0Tq0gMTdYE6JC",
} as const;

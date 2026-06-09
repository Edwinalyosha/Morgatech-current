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
  Category,
  Author,
  Post,
  NewsletterCTA,
  SearchResult,
  SidebarCategory,
  ContentSection,
} from "@/types";

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

// ─── Business Info ───────────────────────────────────────────────────────────

export const BUSINESS = {
  name: "Morgatech Auto Repair",
  shortName: "Morgatech",
  phone: "(301)-477-4113",
  email: "info@morgatechauto.com",
  address: "6713 Ammendale Rd, Beltsville, MD 20705",
  hours: {
    weekday: "Mon - Fri: 9:00 AM - 6:00 PM",
    saturday: "Sat: Closed",
    sunday: "Sun: Closed",
  },
  emergency: "(301)-477-4113",
  mapQuery: "6713+Ammendale+Rd+Beltsville+MD+20705",
} as const;

// ─── Services (grid cards on home & services page) ───────────────────────────

export const SERVICES: Service[] = [
  {
    slug: "brake-repair",
    title: "Brake Repair",
    description:
      "Squealing, grinding, or a soft pedal? We inspect and repair brake pads, rotors, and fluid — and back every job with our 24-month / 24,000-mile TechNet warranty.",
    icon: "minor_crash",
    image:
      "/services/car-brake.jpg",
    imageAlt: "Mechanical inspection of metallic car brake disc and caliper",
  },
  {
    slug: "suspension-repair",
    title: "Suspension & Steering",
    description:
      "Bouncy ride, pulling to one side, or a knocking sound over bumps? We diagnose and repair shocks, struts, ball joints, and steering components.",
    icon: "build_circle",
    image:
      "/services/suspension-repair.jpg",
    imageAlt: "Detailed view of a vehicle's suspension and wheel assembly",
  },
  {
    slug: "ac-heating-services",
    title: "AC & Heating Services",
    description:
      "Weak airflow, warm air from the vents, or no heat in winter? We diagnose climate control faults and recharge refrigerant to manufacturer spec.",
    icon: "ac_unit",
    image:
      "/services/ac-services.jpg",
    imageAlt: "Blue air conditioning coolant manifold gauges on a car engine",
  },
  {
    slug: "car-maintenance",
    title: "Car Maintenance",
    description:
      "Oil changes, fluid checks, filters, and full multi-point inspections — regular maintenance that keeps your car reliable and prevents bigger repairs.",
    icon: "build_circle",
    image:
      "/services/car-maintenance.jpg",
    imageAlt: "Mechanic performing a multi-point inspection on a modern vehicle engine",
  },
  {
    slug: "engine-diagnostics",
    title: "Engine Diagnostics",
    description:
      "Check engine light on, rough idle, or a problem three other shops couldn't find? We follow the fault code to the actual cause — not just the part it points to.",
    icon: "build_circle",
    image:
      "/services/engine.jpg",
    imageAlt: "Mechanic using a digital diagnostic tool on a modern car",
  },
  {
    slug: "transmission-service",
    title: "Transmission Service",
    description:
      "Slipping gears, delayed shifting, or a grinding sensation? We service automatic and manual transmissions and catch wear early before it becomes a full rebuild.",
    icon: "settings_input_component",
    image:
      "/services/transmission-repair.jpg",
    imageAlt: "Close up of a car gearbox and transmission components",
  },
  {
    slug: "auto-electrical-service",
    title: "Auto Electrical Service",
    description:
      "Starter won't turn over, alternator failing, or battery draining overnight? We trace the fault across the full electrical system — starters, alternators, wiring, and control modules.",
    icon: "bolt",
    image:
      "/services/auto-electrical-service.jpg",
    imageAlt: "Car battery and electrical wiring in an engine bay",
  },
  {
    slug: "exhaust-system",
    title: "Exhaust & Emissions",
    description:
      "Loud exhaust, a failed emissions test, or a smell from under the car? We repair mufflers, catalytic converters, and exhaust manifolds to get you back to quiet and compliant.",
    icon: "battery_charging_full",
    image:
      "/services/exhaust-system.jpg",
    imageAlt: "Close up of a car exhaust system being replaced",
  },
];

// ─── All Service Detail Pages ───────────────────────────

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "car-maintenance": {
    slug: "car-maintenance",
    title: "Car Maintenance",
    description:
      "Precision care including oil changes, fluid analysis, and 360° safety inspections to ensure your vehicle's longevity.",
    icon: "build_circle",
    tagline: "Preventative Care",
    heroImage: "/services/maintenance-hero.jpg",
    heroImageAlt: "Mechanic performing a multi-point inspection on a modern vehicle engine",
    overviewTitle: "Car Maintenance in Beltsville, MD",
    overviewText: [
      "Modern vehicles are marvels of engineering, but they rely on regular care to stay reliable. Smart, scheduled maintenance is the most effective way to ensure your car remains in peak health while preventing the 'sticker shock' of major emergency repairs.",
      "At Morgatech Auto Repair, our maintenance programs cover the critical essentials of vehicle longevity. From precision oil changes to seasonal preparation, we help you stay ahead of wear and tear, ensuring your vehicle is safe for daily commutes and long family road trips alike.",
    ],
    stats: [
      { value: "3k-7k", label: "Oil Change Interval" },
      { value: "360°", label: "Visual Inspection" },
      { value: "OEM", label: "Quality Parts" },
      { value: "24/7", label: "Reliability" },
    ],
    symptoms: [
      {
        icon: "oil_barrel",
        title: "Oil & Filter Service",
        description:
          "Essential lubrication and temperature regulation. Recommended every 3,000–7,500 miles to prevent engine corrosion.",
      },
      {
        icon: "tire_repair",
        title: "Tire Maintenance",
        description:
          "Pressure checks and tread depth analysis to ensure optimum on-road safety and fuel efficiency.",
      },
      {
        icon: "minor_crash",
        title: "Brake Inspections",
        description:
          "Thorough system checks every 10,000 miles. We ensure your stopping power is never compromised.",
      },
      {
        icon: "air_freshener",
        title: "Air Filter Updates",
        description:
          "Protecting your engine (every 15k miles) and your cabin air quality (every 30k miles) from impurities.",
      },
      {
        icon: "battery_charging_full",
        title: "Battery & Electrical",
        description:
          "Bi-annual charge testing and terminal cleaning to ensure your car starts reliably in any Maryland weather.",
      },
      {
        icon: "water_drop",
        title: "Fluid Health Check",
        description:
          "Monitoring coolant, transmission, and power steering fluids to ensure smooth, hydraulic-safe operation.",
      },
      {
        icon: "visibility",
        title: "Lights & Wipers",
        description:
          "Critical visibility checks for headlights, signals, and wiper blades to keep you safe during night or rain.",
      },
      {
        icon: "event_available",
        title: "Seasonal & Trip Prep",
        description:
          "Specialized inspections before long trips or major season shifts (Winter/Summer) to prevent breakdowns.",
      },
    ],
    beforeImage: "/services/maintenance-before.jpg",
    afterImage: "/services/maintenance-after.jpg",
    beforeAlt: "Dirty engine oil and clogged air filter",
    afterAlt: "Clean golden oil and brand new performance air filter",
    beforeCaption: "Neglected filters and degraded, sludge-prone engine oil.",
    afterCaption: "Fresh synthetic oil and high-efficiency filtration installed.",
  },
  "brake-repair": {
    slug: "brake-repair",
    title: "Brake Repair",
    description:
      "Pads, rotors, and fluid service to ensure your safety on every journey.",
    icon: "minor_crash",
    tagline: "Safety Service",
    heroImage:
      "/services/car-brake-hero.jpg",
    heroImageAlt: "High performance car ceramic brake disc and red caliper",
    overviewTitle: "Brake Repair in Beltsville, MD",
    overviewText: [
      "Squealing when you stop, a pedal that pulses, or a car that pulls to one side under braking — these are your brakes asking for attention. Ignoring them usually turns a pad replacement into a rotor replacement, which costs significantly more.",
      "At Morgatech Auto Repair we inspect the full brake system: pads, rotors, callipers, and fluid. We tell you what we find, what needs doing now, and what can wait — then we get your approval before anything is touched. Every brake repair is backed by our 24-month / 24,000-mile TechNet nationwide warranty.",
    ],
    stats: [
      { value: "15ft", label: "Avg. Shorter Stop" },
      { value: "20k", label: "Miles Inspection Interval" },
      { value: "100%", label: "Safety Certified" },
      { value: "24mo", label: "Repair Warranty" },
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
      "/services/brakes-before.jpg",
    afterImage:
      "/services/brakes-after.jpg",
    beforeAlt: "Worn and rusted brake rotors on old vehicle",
    afterAlt: "New shiny brake disc and fresh pads installed",
    beforeCaption: "Heavily worn pads and rusted, grooved rotors.",
    afterCaption: "Premium ceramic components with precision installation.",
  },
  "engine-diagnostics": {
    slug: "engine-diagnostics",
    title: "Engine & Performance",
    description:
      "Advanced diagnostics and precision repairs for cooling systems, timing components, and fuel injection to restore your engine's power.",
    icon: "engine",
    tagline: "Testing, Not Guessing",
    heroImage: "/services/engine-hero.jpg",
    heroImageAlt: "Diagnostic scanner connected to a high-performance engine",
    overviewTitle: "Expert Engine Repair & Diagnostics in Beltsville",
    overviewText: [
      "Your engine is the heart of your vehicle. At Morgatech Auto Repair, we employ a philosophy of 'testing rather than guessing.' Using advanced drivability diagnostics, we pinpoint the root cause of performance issues—from a simple spark plug to complex fuel injection failures—to ensure you only pay for the repairs you actually need.",
      "Early detection is the key to avoiding a total engine replacement. Whether you are dealing with a persistent check engine light, mysterious vibrations, or overheating, our certified mechanics provide same-day service to restore your car's reliability and fuel efficiency.",
    ],
    stats: [
      { value: "Same", label: "Day Service" },
      { value: "Digital", label: "Diagnostics" },
      { value: "OEM", label: "Quality Parts" },
      { value: "Expert", label: "Technical Team" },
    ],
    symptoms: [
      {
        icon: "error_outline",
        title: "Check Engine Light",
        description:
          "Advanced scanning to decode error codes and resolve the underlying mechanical or sensor issues immediately.",
      },
      {
        icon: "timer",
        title: "Timing Belt & Chain",
        description:
          "Crucial preventative replacement to avoid catastrophic engine failure. We service both belts and precision chains.",
      },
      {
        icon: "waves",
        title: "Cooling System & Radiator",
        description:
          "Repairing leaks, radiators, and water pumps to prevent overheating and protect your engine from thermal damage.",
      },
      {
        icon: "ev_station",
        title: "Fuel Injection Service",
        description:
          "Cleaning and repairing injectors to restore lost power, improve throttle response, and maximize MPG.",
      },
      {
        icon: "bolt",
        title: "Ignition & Spark Plugs",
        description:
          "Replacing worn plugs and ignition coils to eliminate rough idling, vibrations, and starting difficulties.",
      },
      {
        icon: "history_toggle_off",
        title: "Starter Motor Repair",
        description:
          "Resolving clicking sounds or no-start conditions with high-quality motor replacements and wiring inspections.",
      },
      {
        icon: "cloud_off",
        title: "Head Gasket Service",
        description:
          "Specialized repair for overheating, white exhaust smoke, or power loss to reseal your combustion chamber.",
      },
      {
        icon: "published_with_changes",
        title: "Engine Replacement",
        description:
          "When repairs aren't enough, we offer complete engine swaps to give your vehicle a brand new lease on life.",
      },
    ],
    beforeImage: "/services/engine-before.jpg",
    afterImage: "/services/engine-after.jpg",
    beforeAlt: "Engine with oil leaks and worn out timing belt",
    afterAlt: "Clean, detailed engine bay after professional gasket and belt service",
    beforeCaption: "Sluggish performance caused by neglected ignition and cooling issues.",
    afterCaption: "Full restoration of horsepower and cooling efficiency.",
  },
  "transmission-service": {
    slug: "transmission-service",
    title: "Transmission & Drivetrain",
    description:
      "Expert transmission diagnostics, fluid flushes, and drivetrain repairs to ensure smooth gear shifts and efficient power transfer.",
    icon: "settings_input_component",
    tagline: "Power & Precision",
    heroImage: "/services/transmission-hero.jpg",
    heroImageAlt: "Close-up of a modern automatic transmission gear assembly",
    overviewTitle: "Affordable Transmission Solutions in Beltsville, MD",
    overviewText: [
      "The transmission is one of the most complex systems in your vehicle. At Morgatech Auto Repair, we believe a 'stitch in time saves nine.' Identifying wear on seals, mounts, or torque converters early can prevent the need for a full transmission rebuild and save you thousands in long-term costs.",
      "Whether you need a precision differential repair, input/output shaft service, or a complete drivetrain overhaul, our technicians ensure your vehicle transfers power efficiently from the engine to the wheels. We specialize in both automatic and manual systems, providing dealership-level expertise with local shop transparency.",
    ],
    stats: [
      { value: "30k", label: "Fluid Change Miles" },
      { value: "100%", label: "Drivetrain Ready" },
      { value: "Expert", label: "Rebuild Techs" },
      { value: "Heavy", label: "Duty Tow Prep" },
    ],
    symptoms: [
      {
        icon: "opacity",
        title: "Fluid Exchange & Flush",
        description:
          "Standard replacement every 30k–60k miles. For degraded systems, we perform a total machine-assisted flush to remove all contaminants.",
      },
      {
        icon: "tune",
        title: "Transmission Band Adjustment",
        description:
          "Crucial for automatic transmissions to prevent slipping. Recommended for inspection every 60,000 to 100,000 miles.",
      },
      {
        icon: "settings_power",
        title: "Drivetrain & Driveshaft",
        description:
          "Repairing CV joints, U-joints, and shafts to ensure vibration-free power delivery and mechanical efficiency.",
      },
      {
        icon: "Propane",
        title: "Seal & Gasket Service",
        description:
          "Detecting and fixing leaks early to prevent internal overheating and catastrophic gear failure.",
      },
      {
        icon: "monitor_weight",
        title: "Load Management",
        description:
          "Expert advice and service for vehicles used for towing or heavy hauling to prevent premature transmission wear.",
      },
      {
        icon: "speed",
        title: "Differential Repair",
        description:
          "Specialized service for the gears that allow your wheels to turn at different speeds—vital for cornering and control.",
      },
      {
        icon: "error_outline",
        title: "Diagnostic Analysis",
        description:
          "Advanced computer scanning to identify shifting delays, grinding, or 'limp mode' issues before they escalate.",
      },
      {
        icon: "verified",
        title: "OEM Fluid Matching",
        description:
          "We use only manufacturer-stipulated fluids (Dexron, Mercon, CVT, etc.) to maintain your specific vehicle's warranty.",
      },
    ],
    beforeImage: "/services/transmission-before.jpg",
    afterImage: "/services/transmission-after.jpg",
    beforeAlt: "Burnt, dark transmission fluid compared to new fluid",
    afterAlt: "Mechanic installing a new transmission filter and pan gasket",
    beforeCaption: "Contaminated, oxidized fluid losing its lubricating properties.",
    afterCaption: "Clean, high-viscosity fluid and new filtration for smooth shifting.",
  },
  "auto-electrical-service": {
    slug: "auto-electrical-service",
    title: "Electrical & Electronics",
    description:
      "Dead battery, failing alternator, or a starter that won't engage? We diagnose and repair the full electrical system — starters, alternators, wiring, and control modules — in Beltsville, MD.",
    icon: "electrical_services",
    tagline: "Precision Diagnostics",
    heroImage: "/services/auto-electrical-service-hero.jpg",
    heroImageAlt: "Technician testing a car battery and alternator with professional diagnostic equipment",
    overviewTitle: "Advanced Electrical System Repair in Beltsville, MD",
    overviewText: [
      "Modern vehicles are rolling computers, with almost every function controlled by complex electrical networks. When these systems fail, it can be incredibly frustrating. At Morgatech Auto Repair, we specialize in identifying the 'ghosts in the machine'—whether it's a simple blown fuse or a complex wiring harness issue.",
      "Our technicians are highly trained to ensure we find and solve your electrical problems after the very first visit. From critical starting components like alternators and starters to the power accessories that keep you comfortable, we provide reliable, transparent solutions to keep your vehicle's tech running smoothly.",
    ],
    stats: [
      { value: "100%", label: "Diagnostic Accuracy" },
      { value: "Modern", label: "Tech Equipped" },
      { value: "Fast", label: "Bulb/Fuse Swap" },
      { value: "Expert", label: "Wiring Repair" },
    ],
    symptoms: [
      {
        icon: "bolt",
        title: "Alternator & Charging",
        description:
          "The heart of your electrical system. We repair and replace alternators to ensure your battery stays charged and your lights stay bright.",
      },
      {
        icon: "play_circle",
        title: "Starter Motor Service",
        description:
          "Reliable repair and replacement of starter motors to ensure your engine fires up every time you turn the key.",
      },
      {
        icon: "lock_open",
        title: "Power Lock Systems",
        description:
          "Restoring security and convenience by repairing faulty door actuators and central locking mechanisms.",
      },
      {
        icon: "lightbulb",
        title: "Lighting & Signal Repair",
        description:
          "Full-service bulb replacement and wiring repair for headlights, taillights, and interior safety signals.",
      },
      {
        icon: "settings_input_antenna",
        title: "Power Accessories",
        description:
          "Expert fixes for power antennas, GPS navigators, USB ports, and premium audio systems to maintain your cabin's comfort.",
      },
      {
        icon: "looks",
        title: "Electronic Power Steering",
        description:
          "Diagnosing stiff or unresponsive steering by servicing the electronic assist motors and sensors.",
      },
      {
        icon: "cleaning_services",
        title: "Windshield Wiper Systems",
        description:
          "Ensuring clear visibility in extreme weather by repairing wiper motors, linkages, and electronic sensors.",
      },
      {
        icon: "memory",
        title: "General Diagnostics",
        description:
          "Comprehensive system scans to locate short circuits, parasitic battery drains, and faulty control modules.",
      },
    ],
    beforeImage: "/services/auto-electrical-service-before.jpg",
    afterImage: "/services/auto-electrical-service-after.jpg",
    beforeAlt: "Corroded battery terminals and frayed wiring",
    afterAlt: "Clean electrical connections and new alternator installation",
    beforeCaption: "Failing charging system causing dim lights and intermittent power loss.",
    afterCaption: "Restored electrical integrity with high-output components and secure wiring.",
  },
  "exhaust-system": {
    slug: "exhaust-system",
    title: "Exhaust & Emissions",
    description:
      "Full-service exhaust repair, muffler replacement, and catalytic converter service to keep your vehicle quiet and eco-friendly.",
    icon: "cloud_done",
    tagline: "Clean & Quiet Performance",
    heroImage: "/services/exhaust-system-hero.jpg",
    heroImageAlt: "Mechanic installing a new stainless steel exhaust muffler",
    overviewTitle: "Professional Exhaust & Emissions Service in Beltsville",
    overviewText: [
      "Your vehicle's exhaust system does more than just dampen noise; it is a critical safety feature that diverts toxic fumes away from the cabin and filters out harmful pollutants. A faulty system poses risks to your engine's backpressure, your health, and the environment.",
      "At Morgatech Auto Repair, we provide comprehensive diagnostics and repairs for every part of your exhaust—from the manifold to the tailpipe. Whether you are dealing with a loud muffler, a failed emissions test, or a damaged catalytic converter, our team ensures your car runs efficiently, quietly, and stays compliant with environmental standards.",
    ],
    stats: [
      { value: "EPA", label: "Compliant" },
      { value: "Quiet", label: "Mufflers" },
      { value: "High", label: "Flow Tech" },
      { value: "Expert", label: "Welding" },
    ],
    symptoms: [
      {
        icon: "volume_up",
        title: "Muffler Repair & Service",
        description:
          "Eliminating excessive noise and vibrations by repairing or replacing failed mufflers to keep your ride comfortable and legal.",
      },
      {
        icon: "eco",
        title: "Catalytic Converters",
        description:
          "Repair and replacement of high-value emission units to reduce hydrocarbons and nitrogen oxides for a cleaner environment.",
      },
      {
        icon: "hardware",
        title: "Exhaust Manifold Service",
        description:
          "Expert repair of the manifold to prevent leaks at the engine source, ensuring optimal fuel economy and engine safety.",
      },
      {
        icon: "pipe",
        title: "Tail Pipe Replacement",
        description:
          "Professional-grade tailpipe repairs that restore your vehicle's aesthetic and ensure exhaust gases exit the vehicle safely.",
      },
      {
        icon: "masks",
        title: "Emission Diagnostics",
        description:
          "Identifying the 'Check Engine' codes and sensor failures that lead to high pollution levels and failed state inspections.",
      },
      {
        icon: "settings_suggest",
        title: "Custom Pipe Fitting",
        description:
          "Precision mounting and hangers to prevent the rattling and dragging that leads to expensive system damage.",
      },
      {
        icon: "health_and_safety",
        title: "Carbon Monoxide Check",
        description:
          "Critical inspections to ensure no toxic fumes are leaking into the passenger cabin through floorboards or vents.",
      },
      {
        icon: "shutter_speed",
        title: "Backpressure Analysis",
        description:
          "Advanced testing to ensure your exhaust flow is optimized, preventing engine overheating and power loss.",
      },
    ],
    beforeImage: "/services/exhaust-system-before.jpg",
    afterImage: "/services/exhaust-system-after.jpg",
    beforeAlt: "Rusted and leaking exhaust pipe with holes",
    afterAlt: "New stainless steel exhaust section with clean welds",
    beforeCaption: "Excessive rust and leaks leading to noise and engine power loss.",
    afterCaption: "Precision-sealed system for whisper-quiet and efficient operation.",
  },
  "ac-heating-services": {
    slug: "ac&heating-services",
    title: "A/C & Heating Service",
    description:
      "Expert climate control diagnostics, refrigerant recharging, and component repair to keep you comfortable in any Maryland weather.",
    icon: "ac_unit",
    tagline: "Year-Round Comfort",
    heroImage: "/services/ac-services-hero.jpg",
    heroImageAlt: "Technician performing an A/C pressure test and refrigerant recharge",
    overviewTitle: "AC & Heating Repair in Beltsville, MD",
    overviewText: [
      "Air conditioning that blows warm in a Maryland summer, or a heater that barely works when the temperature drops — climate control faults make every drive uncomfortable and, in extreme heat, unsafe. These problems usually come down to a refrigerant leak, a failing compressor, or a blocked evaporator.",
      "At Morgatech Auto Repair we diagnose the full climate control system before recommending any repair. We use proper pressure testing to find leaks and recharge refrigerant to manufacturer specification — not just top it up. Every AC and heating repair is backed by our 24-month / 24,000-mile TechNet nationwide warranty.",
    ],
    stats: [
      { value: "Fast", label: "A/C Recharge" },
      { value: "Precise", label: "Leak Detection" },
      { value: "OEM", label: "Spec Parts" },
      { value: "All", label: "Makes & Models" },
    ],
    symptoms: [
      {
        icon: "thermostat",
        title: "Heating & Cooling Diagnostics",
        description:
          "Utilizing advanced pressure testing and thermal imaging to identify blockages or failures in the climate control loop.",
      },
      {
        icon: "toys",
        title: "Compressor Repair",
        description:
          "Specialized service for the heart of your A/C system. We repair or replace faulty compressors to restore full cooling power.",
      },
      {
        icon: "air",
        title: "Evaporator & Airflow",
        description:
          "Resolving reduced cooling performance and eliminating damp, musty odors caused by evaporator issues or cabin filter blockages.",
      },
      {
        icon: "science",
        title: "Refrigerant Recharge",
        description:
          "Evacuating and replenishing A/C gas to manufacturer-specified levels (R134a or R1234yf) for maximum efficiency.",
      },
      {
        icon: "water_drop",
        title: "Leak Detection & Repair",
        description:
          "Dye-testing and sealing leaks in hoses, condensers, and fittings to prevent environmental damage and system failure.",
      },
      {
        icon: "heat_pump",
        title: "Heater Core Service",
        description:
          "Ensuring your cabin stays warm by diagnosing failed heater cores, stuck blend doors, and cooling system thermostats.",
      },
      {
        icon: "settings_input_component",
        title: "Blower Motor Repair",
        description:
          "Fixing issues with weak airflow or noisy fans to ensure air is distributed evenly throughout your vehicle's cabin.",
      },
      {
        icon: "filter_alt",
        title: "Cabin Air Filtration",
        description:
          "Replacing worn filters to improve interior air quality and protect your passengers from pollen, dust, and pollutants.",
      },
    ],
    beforeImage: "/services/ac-services-before.jpg",
    afterImage: "/services/ac-services-after.jpg",
    beforeAlt: "Clogged A/C condenser and dirty cabin air filter",
    afterAlt: "New high-efficiency A/C compressor and clean filter",
    beforeCaption: "Weak airflow and warm air caused by a failing compressor and leaks.",
    afterCaption: "Ice-cold performance and improved cabin air quality after full service.",
  },
  "suspension-repair": {
    slug: "suspension-steering",
    title: "Suspension & Steering",
    description:
      "Restore your vehicle's handling, comfort, and safety with expert diagnostics, shock replacement, and precision alignments.",
    icon: "directions_car",
    tagline: "Handling & Safety",
    heroImage: "/services/suspension-repair-hero.jpg",
    heroImageAlt: "Mechanic inspecting a vehicle's coil spring and strut assembly",
    overviewTitle: "Suspension & Steering Repair in Beltsville, MD",
    overviewText: [
      "A bouncy ride, a steering wheel that pulls, or a knocking sound every time you hit a bump — suspension problems often start small and quietly get worse. Left too long, worn shocks and struts accelerate tyre wear and increase your braking distance. What feels like a comfort issue is often a safety one.",
      "At Morgatech Auto Repair in Beltsville, we diagnose the full suspension and steering system — shocks, struts, ball joints, tie rods, and alignment. We catch problems early so you're not paying twice. Every repair is backed by our 24-month / 24,000-mile TechNet nationwide warranty.",
    ],
    stats: [
      { value: "15min", label: "Free Inspection" },
      { value: "OEM", label: "Spec Parts" },
      { value: "4-Wheel", label: "Precision Alignment" },
      { value: "Full", label: "Labor Warranty" },
    ],
    symptoms: [
      {
        icon: "height",
        title: "Bouncy or Harsh Ride",
        description:
          "Excessive vertical movement or bouncing after hitting bumps, usually indicating worn shocks or struts.",
      },
      {
        icon: "navigation",
        title: "Swaying & Leaning",
        description:
          "Your vehicle sways excessively during turns or visibly leans to one side while parked or driving.",
      },
      {
        icon: "hearing",
        title: "Knocking & Creaking",
        description:
          "Persistent metallic clunking or squeaking noises when driving over uneven surfaces or speed bumps.",
      },
      {
        icon: "settings_input_component",
        title: "Loose Steering",
        description:
          "The vehicle pulls to one side or the steering wheel feels unresponsive, indicating tie rod or linkage wear.",
      },
      {
        icon: "shutter_speed",
        title: "Shocks & Struts",
        description:
          "Expert replacement of dampening components and coil springs to restore cabin stability and weight distribution.",
      },
      {
        icon: "architecture",
        title: "Structural Components",
        description:
          "Precision service for ball joints, control arm bushings, and axle assemblies to maintain structural integrity.",
      },
      {
        icon: "ev_station",
        title: "Power Steering Repair",
        description:
          "Complete system care including pump replacement, rack and pinion repair, and pressurized fluid flushes.",
      },
      {
        icon: "align_horizontal_center",
        title: "Wheel Alignment",
        description:
          "Correcting vehicle geometry after repairs to prevent uneven tire wear and ensure straight-line tracking.",
      },
    ],
    beforeImage: "/services/suspension-repair-before.jpg",
    afterImage: "/services/suspension-repair-after.jpg",
    beforeAlt: "Leaking hydraulic shock absorber and torn rubber bushing",
    afterAlt: "Newly installed performance strut and polyurethane bushings",
    beforeCaption: "Leaking dampeners and failed bushings causing unstable handling.",
    afterCaption: "Premium OEM-spec suspension components for a factory-smooth ride.",
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
// ⚠️  PLACEHOLDER DATA — names, roles, and photos are AI-generated and NOT real staff.
// TeamSection component does not exist yet — this data is not rendered anywhere on the site.
// Do not build TeamSection or use this data until replaced with real names and photos.

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
    question: "Will you start work before telling me the cost?",
    answer:
      "No. After we diagnose your vehicle we give you a full breakdown of what we found and what it will cost to fix. Work only starts when you approve it — every time, no exceptions.",
  },
  {
    question: "What does your warranty cover?",
    answer:
      "Most repairs are covered by the TechNet nationwide warranty: 24 months or 24,000 miles on parts and labour, whichever comes first. This includes brake, suspension, AC, electrical, exhaust, and engine performance work. Routine maintenance services (oil changes, fluid changes, filters) and internal transmission components are not covered. If something we fixed isn't right, bring it back — or use any TechNet location nationwide.",
  },
  {
    question: "Do you work on all makes and models?",
    answer:
      "Yes — domestic, foreign, and luxury vehicles. We service most makes including Honda, Toyota, Ford, Chevrolet, BMW, Mercedes-Benz, Hyundai, Nissan, and more.",
  },
  {
    question: "How long will my car be in the shop?",
    answer:
      "Routine services like oil changes and brake pad replacements are usually done the same day, often within 1–3 hours. Complex jobs like suspension or cooling system repairs vary — we give you a time estimate after diagnosis so you can plan your day.",
  },
  {
    question: "What if you find something else while you're in there?",
    answer:
      "We'll tell you what we found, explain why it matters, and give you a quote. You decide whether to add it to the job or come back another time. We don't pressure and we don't rush.",
  },
  {
    question: "Do I need an appointment or can I walk in?",
    answer:
      "Walk-ins are welcome for straightforward services. For repairs — especially brake work, suspension, or diagnostics — calling ahead helps us have the right time and parts ready so you're not waiting.",
  },
  {
    question: "Do you offer free diagnostics for warning lights?",
    answer:
      "Yes. If your check engine light or any other dashboard warning light is on, we'll scan the vehicle at no charge. No appointment needed — just call ahead at (301)-477-4113 so we can make sure a technician is available when you arrive.",
  },
  {
    question: "How much does a brake repair cost in Beltsville?",
    answer:
      "Brake repair costs depend on what needs replacing — pads only, pads and rotors, or a full system service. We diagnose first and give you an exact quote before any work starts. Call (301)-477-4113 for a quick estimate.",
  },
];

// ─── Contact Info Cards ──────────────────────────────────────────────────────

export const CONTACT_CARDS: ContactInfo[] = [
  {
    icon: "phone_in_talk",
    title: "Phone",
    subtitle: "Available during hours",
    value: "(301)-477-4113",
  },
  {
    icon: "mail",
    title: "Email",
    subtitle: "Response within 24h",
    value: "info@morgatechauto.com",
  },
  {
    icon: "location_on",
    title: "Address",
    subtitle: "Beltsville, MD 20705",
    value: "6713 Ammendale Rd",
  },
  {
    icon: "schedule",
    title: "Business Hours",
    subtitle: "Monday - Friday",
    value: "Mon-Fri: 9AM-6PM",
  },
];

// ─── How It Works Steps ──────────────────────────────────────────────────────

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: 1,
    title: "Call or Drop In",
    description: "Call us at (301)-477-4113 or bring your car to 6713 Ammendale Rd, Beltsville.",
  },
  {
    number: 2,
    title: "We Diagnose",
    description: "Our technicians find the real problem — not just what the code points to.",
  },
  {
    number: 3,
    title: "You Approve",
    description: "We explain what we found and what it costs. Nothing starts until you say yes.",
  },
  {
    number: 4,
    title: "Repaired & Ready",
    description: "We fix it right and call you when it's done. Most repairs are backed by our 24-month / 24,000-mile TechNet nationwide warranty.",
  },
];

// ─── Core Values ─────────────────────────────────────────────────────────────

export const CORE_VALUES: ValueCard[] = [
  {
    icon: "search",
    title: "Diagnose First",
    description:
      "We follow the fault to its actual cause — not just the part a code points to. That is how we catch what other shops miss on brake, suspension, and electrical jobs.",
  },
  {
    icon: "fact_check",
    title: "You Approve Before We Start",
    description:
      "After diagnosis we walk you through exactly what we found and what it costs. Nothing gets touched until you say go — every time, no exceptions.",
  },
  {
    icon: "build",
    title: "Thorough by Default",
    description:
      "We look at the whole vehicle, not just the symptom. A cooling system check that catches a worn belt. A brake inspection that spots a suspension issue before it gets expensive.",
  },
  {
    icon: "handshake",
    title: "Family-Run, Community-Focused",
    description:
      "7+ years serving Beltsville drivers. We remember your car, your history, and we back most repairs with our 24-month / 24,000-mile TechNet nationwide warranty.",
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
  logo: "/logo.png",
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

// ─── Blog Categories ─────────────────────────────────────────────────────────

export const BLOG_CATEGORIES: Category[] = [
  {
    id: "cat-1",
    name: "Maintenance Tips",
    slug: "maintenance-tips",
    description:
      "Expert advice on keeping your vehicle in peak condition, extending its lifespan, and preventing costly repairs through proactive care.",
    count: 12,
  },
  {
    id: "cat-2",
    name: "Car Tech",
    slug: "car-tech",
    description:
      "Deep dives into modern automotive electronics, hybrid systems, and computer-driven diagnostics.",
    count: 8,
  },
  {
    id: "cat-3",
    name: "News",
    slug: "news",
    description:
      "Workshop updates, industry announcements, and the latest from Morgatech Auto Repair.",
    count: 19,
  },
  {
    id: "cat-4",
    name: "Guides",
    slug: "guides",
    description:
      "Step-by-step technical guides for DIY enthusiasts and professional mechanics alike.",
    count: 5,
  },
  {
    id: "cat-5",
    name: "Safety First",
    slug: "safety-first",
    description:
      "Critical information regarding brakes, tires, and passenger protection systems.",
    count: 15,
  },
];

// ─── Sidebar Categories (with counts for widgets) ────────────────────────────

export const SIDEBAR_CATEGORIES: SidebarCategory[] = [
  { name: "Precision Maintenance", slug: "maintenance-tips", count: 12 },
  { name: "Advanced Diagnostics", slug: "guides", count: 8 },
  { name: "Electrical Systems", slug: "car-tech", count: 5 },
  { name: "Industry Updates", slug: "news", count: 19 },
];

// ─── Authors ─────────────────────────────────────────────────────────────────

// ⚠️  TODO: Replace avatar URL with a real photo of Edwin. Replace bio with real text.
// Blog posts currently have placeholder content — see BLOG_POSTS below.
// Guidelines for writing real blog content: write from the perspective of a mechanic who
// has seen these problems first-hand. Open with the symptom, explain the cause plainly,
// describe what the repair involves, and close with what happens if you ignore it.
// Target: 600–900 words per post. One primary keyword per post (e.g. "brake pad replacement
// Beltsville", "suspension repair Maryland"). Add to BLOG_POST_DETAILS keyed by slug.
export const AUTHORS: Author[] = [
  {
    id: "auth-1",
    name: "Edwin",
    role: "Owner, Morgatech Auto Repair",
    avatar: "/logo.png", // ⚠️  Replace with real headshot photo
    bio: "Owner of Morgatech Auto Repair in Beltsville, MD. 7+ years diagnosing and fixing the problems other shops miss.", // ⚠️  Update with real bio
  },
];

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export const BLOG_POSTS: Post[] = [
  {
    id: "post-1",
    slug: "auto-repair-beltsville-md",
    title: "Seven Years on the Same Beltsville Streets — Here's What We See Most",
    excerpt:
      "After seven years doing auto repair in Beltsville, MD, we know which problems show up most often — and which ones get ignored until they cost more than they should have.",
    category: BLOG_CATEGORIES[0],
    author: AUTHORS[0],
    publishedAt: "May 12, 2025",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDphsoM_17JO7m9bjaIJ4XRz4WocJeeQz5D3hgj2XuwRwr6TLZtnagkCyAQ7weJTMQmoIReVvZaN5GGnVIjEZVp8a_LImezVVEH6fTefXUHfR0XGtnpBRM_DhnyBfFPtPNCsXoJNLUdA-JB6AgCzbJjwL8DqDyfYlwbEO-UsGbj0nNM7MK7ZwR2_uzbXzlAF2svlXPb7pf6pZcORckRuPc2NsRUq9_pJM9cu6PzHRweYI_OJQzOg0QjUMOj0kU5PKt91R8inz-HW6pQ",
    coverImageAlt: "Close up of mechanic working on a car in a Beltsville auto repair shop",
    readingTime: "5 Min Read",
    isFeatured: true,
  },
  {
    id: "post-2",
    slug: "brake-repair-beltsville-md",
    title: "When Your Brakes Are Telling You Something — And What It Actually Means",
    excerpt:
      "A squeal, a shudder, a soft pedal — your brakes give warnings before they fail. Here's what each symptom actually means and what happens if you wait.",
    category: BLOG_CATEGORIES[4],
    author: AUTHORS[0],
    publishedAt: "May 5, 2025",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDS6JLJOuD8d_R_maA2HIwQ-HDS7xgprIoMAGhgdOtVd6iFreuVRvKjm9aJVtPa_bq5Pbh6gQ6rSedDwA7MigQ4CbzwJUH6QGJlG_lLWXOWkQJhFnc60Xs4HsBXlxj_m3VENpytdZWZnn9suOx-__2lcI6dhXtiN89g-1dOfTIYL5NRrROWNgTFbH6tQZ18zWhyOA45ZrSUhsjOP6_F2Fs4F_uxgoxW9Qo52Osz397OSrRGxG3uVnHmjTM-4m2JX3_ns4AI9nfCzj5Z",
    coverImageAlt: "Close up of brake disc and caliper being inspected",
    readingTime: "5 Min Read",
  },
  {
    id: "post-3",
    slug: "suspension-repair-beltsville",
    title: "What a Rough Ride Is Actually Telling You",
    excerpt:
      "Suspension wear happens gradually — your body adjusts before you notice. Here's how to read the signs before worn parts start taking other components with them.",
    category: BLOG_CATEGORIES[4],
    author: AUTHORS[0],
    publishedAt: "April 28, 2025",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrj0cIYkmr2uAogvqNsYDt6vP2ocyJJqcJZHUdcs8kt9j5a5Jfazd1oGBnQaZ07I1XA7YICNJtbsqOHDzAD62lWZyMAKoh7brfcL8b4ody8VcuCT3hiO_RVlCZZw6A5EVep_toK3ZgrqECGsvsut1xEx2mR2r75Z6VpsqyWEysmNkaLA57dgrNNUZneJ0wPdpOgZb4EWDlvSbblCmLEyCoUhepRG4SbOSr26MDabF4ftNMHG4RyHaXbv6FIKw7dY-35llpZ2q1cn2G",
    coverImageAlt: "Vehicle suspension and wheel assembly under inspection",
    readingTime: "5 Min Read",
  },
  {
    id: "post-4",
    slug: "cooling-system-repair-beltsville",
    title: "Why Your Cooling System Is the Repair You Can't Afford to Ignore",
    excerpt:
      "A temperature gauge that creeps up, a sweet smell from the engine bay — these signs give you less margin than you think. Here's why cooling issues escalate fast.",
    category: BLOG_CATEGORIES[0],
    author: AUTHORS[0],
    publishedAt: "April 14, 2025",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3nh0L8tNkL60pHBEADi1UmB1LRGswzoiSvVdMsXI7O2tBz-8MjFgGdwhxm_kdBRROh0ETkUn89WkKHTcsVsodXSgPy8tmwyN1XkG_jhCrKA-9hMH1yh0y7V09PPtWj72DHASoc2mb3F8gVD9ra0BHCyd54vg4ebeeTSwl4jUgB9Jt79GPi4MHmExCAwNcL0hx83fOV-iOkSQeaUplV6qV778pQBu2ErAeJZb40W1dK6fjsyw5TbUS-68B2_yCOZnDfdCzk5iGIzTX",
    coverImageAlt: "Mechanic checking a car cooling system and radiator",
    readingTime: "5 Min Read",
  },
  {
    id: "post-5",
    slug: "engine-diagnostics-beltsville",
    title: "Why Two Other Shops Couldn't Fix It — And What We Do Differently",
    excerpt:
      "A fault code points to a system — not a cause. Here's why replacing the part the code names often doesn't work, and how we find what other shops missed.",
    category: BLOG_CATEGORIES[3],
    author: AUTHORS[0],
    publishedAt: "April 1, 2025",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5D-LK-4btshdnWMjyRq0aepwO_rUeMA8AgUwYeK4zCgc24cJ4ToMOfMvJiIhYRcYC78QVaaGAIDDDxkugnPc-lf3BlP0ZiQ2ZwiBdL2HWY7HUmYRC_njMY-25Yjt515X_1LNImkk1f_HIiOK_wSkzrUjAeEcNTk8VlK1NnXYZyJltFLUOaPROwceWvQom0mP_j6zxBPiAZ5LfoZNm_oSsYv-SFyGEo2DNLmUOcl7EbjHzmG6Ilo_0VzGFjWsKx_jsNnOVC4iJqzY-",
    coverImageAlt: "Mechanic using an advanced diagnostic scanner on a car engine",
    readingTime: "5 Min Read",
  },
  {
    id: "post-6",
    slug: "car-maintenance-beltsville-md",
    title: "The Things We Look At on Every Car That Comes Through Our Door",
    excerpt:
      "We focus on what brought the car in. But while we're in there, we look at the whole vehicle — because the presenting symptom is rarely the only thing worth knowing about.",
    category: BLOG_CATEGORIES[0],
    author: AUTHORS[0],
    publishedAt: "March 17, 2025",
    coverImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBi8gtw61_kNr_S5Vs3dLCRv0i9PxAYxiQ_CVfLl2iisMbuI2DVCoitv5EJ6L1Cx7P0SIel3WlFnnmmI9Wrmk6EW4lCO12IjCUUmOPl0XZQx5_nyLltKURndlWNCu_8T8XLpBmIpMFRDv5Pg1f1faUFQtsEiJqhbHPlcnCyNkQKxLV153nXe2E-gitPCpuDwtUWoGRIjHSMFB5heAm89tm1N3mjsjHoPYWZe_ILEx06wlBjr7Eqw3NMOiXXy83VHJblFl6sE6bpJ733",
    coverImageAlt: "Mechanic performing a full vehicle inspection in the shop",
    readingTime: "5 Min Read",
  },
];

// ─── Recent Posts (for sidebar widgets) ──────────────────────────────────────

export const RECENT_POSTS = [
  {
    title: "Seven Years on the Same Beltsville Streets",
    date: "May 12",
    slug: "auto-repair-beltsville-md",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDphsoM_17JO7m9bjaIJ4XRz4WocJeeQz5D3hgj2XuwRwr6TLZtnagkCyAQ7weJTMQmoIReVvZaN5GGnVIjEZVp8a_LImezVVEH6fTefXUHfR0XGtnpBRM_DhnyBfFPtPNCsXoJNLUdA-JB6AgCzbJjwL8DqDyfYlwbEO-UsGbj0nNM7MK7ZwR2_uzbXzlAF2svlXPb7pf6pZcORckRuPc2NsRUq9_pJM9cu6PzHRweYI_OJQzOg0QjUMOj0kU5PKt91R8inz-HW6pQ",
  },
  {
    title: "When Your Brakes Are Telling You Something",
    date: "May 5",
    slug: "brake-repair-beltsville-md",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDS6JLJOuD8d_R_maA2HIwQ-HDS7xgprIoMAGhgdOtVd6iFreuVRvKjm9aJVtPa_bq5Pbh6gQ6rSedDwA7MigQ4CbzwJUH6QGJlG_lLWXOWkQJhFnc60Xs4HsBXlxj_m3VENpytdZWZnn9suOx-__2lcI6dhXtiN89g-1dOfTIYL5NRrROWNgTFbH6tQZ18zWhyOA45ZrSUhsjOP6_F2Fs4F_uxgoxW9Qo52Osz397OSrRGxG3uVnHmjTM-4m2JX3_ns4AI9nfCzj5Z",
  },
  {
    title: "What a Rough Ride Is Actually Telling You",
    date: "Apr 28",
    slug: "suspension-repair-beltsville",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrj0cIYkmr2uAogvqNsYDt6vP2ocyJJqcJZHUdcs8kt9j5a5Jfazd1oGBnQaZ07I1XA7YICNJtbsqOHDzAD62lWZyMAKoh7brfcL8b4ody8VcuCT3hiO_RVlCZZw6A5EVep_toK3ZgrqECGsvsut1xEx2mR2r75Z6VpsqyWEysmNkaLA57dgrNNUZneJ0wPdpOgZb4EWDlvSbblCmLEyCoUhepRG4SbOSr26MDabF4ftNMHG4RyHaXbv6FIKw7dY-35llpZ2q1cn2G",
  },
];

// ─── Blog Post Detail (full content for the [slug] page) ─────────────────────

export const BLOG_POST_DETAILS: Record<
  string,
  {
    content: string;
    sections: ContentSection[];
    tags: string[];
  }
> = {
  "auto-repair-beltsville-md": {
    tags: ["Auto Repair", "Beltsville", "Local"],
    sections: [
      { id: "brake-work", heading: "Deferred brake work", body: "" },
      { id: "suspension-wear", heading: "Suspension wear", body: "" },
      { id: "cooling-issues", heading: "Cooling system issues", body: "" },
      { id: "related-wear", heading: "Related wear", body: "" },
      { id: "what-we-do", heading: "What we do differently", body: "" },
    ],
    content: `
      <p class="text-xl text-slate-600 leading-relaxed mb-12">
        Most cars that come through our door in Beltsville aren't emergencies. They're cars that have been quietly telling their owners something for weeks — a sound that shows up on cold mornings, a pull to one side the driver learned to compensate for, a temperature gauge that sits just a little higher than it used to. By the time someone calls us, they've usually been putting it off.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        That's not a criticism. It's just what we've learned after seven years doing auto repair in Beltsville, MD. We've worked on the cars in this neighbourhood long enough to know which problems show up seasonally, which ones are common to the makes and models people drive around here, and which ones get misdiagnosed most often.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="brake-work">The most common thing we find: deferred brake work</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Brake jobs make up a significant portion of what we do, and most of them could have been simpler and cheaper six months earlier. Brake pads wear gradually. The grinding sound that finally sends someone in is the metal-on-metal stage — the pads are gone and the rotor is being scored. At that point, a pad replacement becomes a pad-and-rotor job. The difference in cost is real.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        We're not saying that to pressure anyone. We're saying it because it's true, and because we'd rather tell you the honest picture than watch someone spend more than they needed to.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="suspension-wear">Suspension wear that got written off as "just how the car drives"</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Suspension components wear slowly enough that most drivers adjust without realising. The car starts pulling slightly. The ride gets rougher. The steering feels vague. These aren't personality quirks — they're worn parts. And when they go, they usually take something else with them if you wait long enough.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        We catch a lot of suspension wear on cars that came in for something else entirely. That's intentional. When a car is here, we look at the whole thing — not just the symptom that brought it in.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="cooling-issues">Cooling system issues that show up in summer and get ignored until winter</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Beltsville summers push cooling systems hard. We see overheating issues spike between June and August, and we see the consequences year-round. A cooling system with a slow leak is one hot day away from a serious repair bill. The engine doesn't forgive overheating the way it forgives most other problems.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="related-wear">The thing nobody warns you about: related wear</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Sometimes a car comes in for one thing — a leaking hose, say — and while we're looking at it we find that two or three other hoses nearby have dried out and are starting to crack. They haven't failed yet. But they will.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        We tell you what we found and let you decide. We don't fix things without your go-ahead. But this is where price can creep up from what you expected — not because we're adding work for the sake of it, but because your car has more going on than the one symptom that sent you in.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="what-we-do">What we do differently</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        We look at the car you brought us, tell you everything we find, and sort each issue by how urgent it is. Some things need attention now. Others can wait. You leave with a clear picture — not just the answer to the question you came in with.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Every qualifying repair is covered by the TechNet nationwide warranty: 24 months or 24,000 miles, whichever comes first. We're at 6713 Ammendale Rd, Beltsville, MD 20705. Open Monday through Friday, 9 AM to 6 PM.
      </p>
    `,
  },

  "brake-repair-beltsville-md": {
    tags: ["Brake Repair", "Safety", "Beltsville"],
    sections: [
      { id: "the-squeal", heading: "The squeal", body: "" },
      { id: "the-grind", heading: "The grind", body: "" },
      { id: "the-shudder", heading: "The shudder", body: "" },
      { id: "the-pull", heading: "The pull", body: "" },
      { id: "soft-pedal", heading: "The soft pedal", body: "" },
      { id: "brake-job", heading: "What a brake job involves", body: "" },
    ],
    content: `
      <p class="text-xl text-slate-600 leading-relaxed mb-12">
        You noticed it a few weeks ago. Maybe a squeal when you first hit the brakes in the morning. Maybe the steering wheel shudders when you slow down. Maybe there's a slight pull to one side, or the pedal feels softer than it used to. You told yourself you'd look into it.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Here's the thing about brakes: they give you warnings before they fail. The problem is that the warnings are easy to dismiss — until they're not.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="the-squeal">The squeal</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Most brake pads have a small wear indicator built in — a metal tab that contacts the rotor when the pad gets thin and produces a high-pitched squeal. That sound is a designed warning. It means the pads are getting close to the end of their life. At this stage a brake job is typically straightforward — new pads, a look at the rotors and calipers, and you're sorted.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        If you keep driving on squealing brakes, the pad wears through completely. Then you get the grind.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="the-grind">The grind</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Metal on metal. The pad is gone and the hardware is scoring the rotor with every stop. At this point you're not just replacing pads — you're replacing rotors too, and possibly looking at caliper damage if it's gone far enough. What would have been a straightforward job is now a significantly more expensive one.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        We see this regularly. Not because people don't care about their cars — because the squeal is easy to live with, and then suddenly it isn't.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="the-shudder">The shudder</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        If the steering wheel vibrates or the whole car shakes when you apply the brakes, that's usually a warped rotor. Rotors can warp from heat cycles — repeated hard braking, or braking while the rotors are hot and then sitting in water. The shudder is the rotor running unevenly against the pad. It will get worse, and driving on warped rotors accelerates pad wear.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="the-pull">The pull</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        A car that pulls to one side under braking usually has a sticking caliper — one side is applying more braking force than the other. A sticking caliper doesn't just affect how the car stops; it causes the pad on that side to wear faster than the other. You burn through one side while the other still has plenty of life. This is the kind of thing that gets missed when a shop replaces pads without looking at the rest of the system.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="soft-pedal">The soft pedal</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        A brake pedal that feels spongy or travels further before the car responds is a fluid issue — either air in the lines or a leak somewhere. This one is not something to monitor. It means braking performance is compromised and it needs to be looked at.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="brake-job">What a brake job at Morgatech actually involves</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        We start by looking at the whole system — pads, rotors, calipers, brake lines, and brake fluid. We look at the condition of everything and tell you what we find before we start any work. If something is fine and doesn't need attention, we tell you that too.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        All brake repairs are covered by the TechNet nationwide warranty: 24 months or 24,000 miles. Morgatech Auto Repair — 6713 Ammendale Rd, Beltsville, MD 20705. Monday to Friday, 9 AM to 6 PM. Call us at (301)-477-4113.
      </p>
    `,
  },

  "suspension-repair-beltsville": {
    tags: ["Suspension", "Steering", "Beltsville"],
    sections: [
      { id: "what-it-does", heading: "What the suspension actually does", body: "" },
      { id: "symptoms", heading: "The symptoms", body: "" },
      { id: "what-we-do", heading: "What we do", body: "" },
    ],
    content: `
      <p class="text-xl text-slate-600 leading-relaxed mb-12">
        Most drivers don't think about their suspension until something goes obviously wrong. And by the time something goes obviously wrong — a clunk over bumps, a car that wanders on the highway, a steering wheel that vibrates at speed — the wear has usually been building for a long time.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        The tricky thing about suspension is that it wears gradually. Your body adjusts to the changes without registering them as problems. The ride gets a little rougher. The steering feels a little less precise. The car takes corners with a little more lean. None of it is dramatic enough to send you to a shop — until it is.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="what-it-does">What the suspension actually does</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Your suspension has one job: keep your tyres in contact with the road. Every component — shocks, struts, ball joints, tie rods, control arms, sway bar links — exists to manage how the car moves over uneven surfaces and through corners. When any of these wear out, the tyre's contact with the road becomes inconsistent. That affects stopping distance, steering response, and tyre wear.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        It also affects the components around them. Worn suspension parts don't fail in isolation. A worn ball joint puts stress on the control arm. A failing shock accelerates tyre wear and puts more load on the struts. Catching it early is almost always cheaper than waiting for it to cascade.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="symptoms">The symptoms — and what they usually mean</h2>
      <p class="text-slate-600 mb-4 leading-relaxed">
        <strong>The car pulls to one side.</strong> Not while braking — that's often a caliper issue — but consistently while driving. This usually points to worn tie rods, misalignment from suspension wear, or a strut that's lost its damping on one side.
      </p>
      <p class="text-slate-600 mb-4 leading-relaxed">
        <strong>Bumps feel sharper than they used to.</strong> Shocks and struts are supposed to absorb road impact. When they wear out, that impact transfers directly to the car body and to you. If Beltsville's roads feel rougher than they did a year ago, it might not be the roads.
      </p>
      <p class="text-slate-600 mb-4 leading-relaxed">
        <strong>The car bounces after a bump.</strong> Push down on the front of the car and let go. It should settle quickly. If it keeps bouncing, the shocks or struts aren't doing their job.
      </p>
      <p class="text-slate-600 mb-4 leading-relaxed">
        <strong>A clunk or knock over bumps.</strong> Usually a worn ball joint, sway bar end links, or a failing strut mount. These are the sounds you don't want to ignore.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        <strong>Uneven tyre wear.</strong> If one tyre is wearing faster than the others, or wearing unevenly across its width, the suspension geometry is off. It's also a fast way to destroy expensive tyres.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="what-we-do">What we do</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        When a car comes in with any of these symptoms, we go through the suspension — not just the component the symptom points to. We look at what's there, check for wear and movement in each part, and look at how the tyres are wearing. Then we tell you what we found in plain language before we start any work.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        All suspension repairs are covered by the TechNet nationwide warranty: 24 months or 24,000 miles. We're at 6713 Ammendale Rd, Beltsville, MD 20705. Monday to Friday, 9 AM to 6 PM. Call (301)-477-4113 or bring it in.
      </p>
    `,
  },

  "cooling-system-repair-beltsville": {
    tags: ["Cooling System", "Overheating", "Beltsville"],
    sections: [
      { id: "temp-gauge", heading: "Temperature gauge running high", body: "" },
      { id: "sweet-smell", heading: "The sweet smell", body: "" },
      { id: "visible-leak", heading: "The visible leak", body: "" },
      { id: "what-goes-wrong", heading: "What actually goes wrong", body: "" },
      { id: "what-we-do", heading: "What we do", body: "" },
    ],
    content: `
      <p class="text-xl text-slate-600 leading-relaxed mb-12">
        Most car problems give you some warning time. The cooling system gives you less than most people realise. A temperature gauge that creeps upward, a warning light that flickers, a sweet smell coming from the engine bay — these are signs that something is wrong and the margin for error is getting small.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="temp-gauge">The temperature gauge is running high</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        The gauge is telling you the engine is working harder than it should to stay cool. This could be a low coolant level, a failing thermostat, a water pump that isn't moving coolant efficiently, or a blockage somewhere in the system. It could also be a small leak that hasn't made itself visible yet. Any of these, caught early, is a manageable repair.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="sweet-smell">The sweet smell</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Coolant has a distinctly sweet smell. If you notice it coming from the engine bay — especially after you've been driving — it means coolant is escaping somewhere and burning off on a hot surface. It could be a hose, a connection, or the radiator itself. The smell usually shows up before the leak is obvious to the eye.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="visible-leak">The leak you can see</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        A puddle under the car that isn't oil — coolant is typically green, orange, or pink depending on the type — is a leak that needs attention. Coolant leaks don't fix themselves. A slow drip becomes a faster drip. A low coolant level puts the engine at risk on any hot day or in any traffic jam.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="what-goes-wrong">What actually goes wrong — and what it costs to ignore it</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        An engine that overheats can warp the cylinder head. It can damage the head gasket — the seal between the engine block and the head. Head gasket repairs are among the most labour-intensive jobs in auto repair. The engine has to come apart. The cost reflects that.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        We see cars come in after an overheating event that the driver thought would sort itself out. Sometimes it does. Often it doesn't, and the repair cost is many times what it would have been if the first warning sign had been taken seriously.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="what-we-do">What we do</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        When a car comes in with cooling concerns, we look at the whole system — hoses, connections, the radiator, the thermostat, the water pump. We look for where the problem is actually coming from, not just the part that triggered the warning. We'll tell you what we found and what's urgent. You decide what gets done.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        All cooling system repairs are covered by the TechNet nationwide warranty: 24 months or 24,000 miles. We're at 6713 Ammendale Rd, Beltsville, MD 20705. Monday to Friday, 9 AM to 6 PM. Call (301)-477-4113. If you've got a warning light on the dashboard, we offer a free scan with no appointment — just call before you come in.
      </p>
    `,
  },

  "engine-diagnostics-beltsville": {
    tags: ["Engine Diagnostics", "Check Engine Light", "Beltsville"],
    sections: [
      { id: "fault-code", heading: "A fault code is not a diagnosis", body: "" },
      { id: "following-fault", heading: "Following the fault to the actual cause", body: "" },
      { id: "in-practice", heading: "What this looks like in practice", body: "" },
      { id: "free-scan", heading: "The free scan", body: "" },
    ],
    content: `
      <p class="text-xl text-slate-600 leading-relaxed mb-12">
        It happens more than you'd think. A customer pulls in and explains that the check engine light has been on for months. They've been to two shops. Both replaced parts. The light came back. Nobody has been able to tell them why.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        By the time they get to us, they're frustrated, they've spent money that didn't solve anything, and they're not sure who to trust. We hear this story regularly. And while every car is different, the reason it keeps happening is usually the same.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="fault-code">A fault code is not a diagnosis</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        When your check engine light comes on, a scanner can pull a fault code from the car's computer. That code points to a system or sensor that's reporting a problem. What it does not tell you is <em>why</em> that system or sensor is reporting a problem.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        A code might say the oxygen sensor is reading incorrectly. That could mean the oxygen sensor needs replacing. It could also mean the sensor is fine but there's an exhaust leak affecting its reading. Or a vacuum leak. Or a fuel delivery issue. Replacing the part the code points to without understanding why it triggered is a guess. Sometimes the guess is right. Often it isn't.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="following-fault">Following the fault to the actual cause</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        When we look at a car with a persistent check engine light, we don't start by replacing anything. We start by understanding what the car is actually doing. That means looking at the whole picture — what the code says, how the car is running, what else might be connected to the system that's flagging.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Sometimes the fault leads somewhere unexpected. Sometimes the original repair someone else did was almost right but missed one thing. Sometimes there are two separate issues presenting as one. We tell you what we find before we do anything.
      </p>

      <div class="my-12 p-8 bg-blue-50 border-l-4 border-primary rounded-r-xl">
        <blockquote class="italic text-xl text-blue-900 font-medium leading-relaxed">
          "We'd rather spend more time getting to the actual cause than replace parts and hope for the best."
        </blockquote>
        <cite class="block mt-4 text-blue-700 font-bold">&mdash; Edwin, Owner, Morgatech Auto Repair</cite>
      </div>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="in-practice">What this looks like in practice</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        A customer came in recently with a car that had been through two shops for an intermittent misfire. Both had replaced ignition components based on the code. The misfire kept coming back. When we looked at it, we found the ignition work was fine — but there was a small vacuum leak that was causing the fuel mixture to run lean under certain conditions. That's what was triggering the misfire. It was a straightforward fix once the actual cause was found.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="free-scan">The free scan</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        If you've got a check engine light or any other warning light on the dashboard, we offer a free scan with no appointment needed. We read the codes, tell you what they mean, and give you an honest picture of what might be going on. No charge, no commitment.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Just call before you come in at (301)-477-4113. We're at 6713 Ammendale Rd, Beltsville, MD 20705. Monday to Friday, 9 AM to 6 PM.
      </p>
    `,
  },

  "car-maintenance-beltsville-md": {
    tags: ["Car Maintenance", "Inspection", "Beltsville"],
    sections: [
      { id: "hoses-belts", heading: "Hoses and belts", body: "" },
      { id: "brake-condition", heading: "Brake condition", body: "" },
      { id: "fluid-levels", heading: "Fluid levels and condition", body: "" },
      { id: "tyre-condition", heading: "Tyre condition and wear patterns", body: "" },
      { id: "underneath", heading: "Anything visible underneath", body: "" },
      { id: "how-we-tell-you", heading: "How we tell you what we find", body: "" },
    ],
    content: `
      <p class="text-xl text-slate-600 leading-relaxed mb-12">
        When a car comes in to Morgatech, we're focused on whatever brought it in — the noise, the warning light, the thing the driver noticed on the way to work. That's the job. But after seven years working on the cars in Beltsville, MD, we've learned that what brought the car in is rarely the only thing worth knowing about.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="hoses-belts">Hoses and belts</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Rubber degrades over time. Hoses dry out, stiffen, and develop small cracks before they fail visibly. Belts fray and glaze. Neither of these tends to announce itself dramatically until something goes wrong — and when a hose lets go or a belt snaps, the consequences can be significant. We look at the condition of what we can see while we're under the bonnet. If something looks like it's on its way out, we'll tell you.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="brake-condition">Brake condition</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        We look at brake wear on every car, not just ones that came in for brake work. This is one of the most common things we find on cars that came in for something unrelated. A customer comes in for a pull to one side, and while we're looking at the suspension we can see the brake pads are getting low. Better to know now than to hear the squeal in three months.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="fluid-levels">Fluid levels and condition</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Fluids tell a story. Old brake fluid darkens. Oil that's been in the engine too long gets thick and loses its protective qualities. Coolant that hasn't been refreshed loses its corrosion-inhibiting properties. We look at what's in the car and note anything that's due for attention. We don't push fluid services — but if something looks like it needs addressing, we'll say so.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="tyre-condition">Tyre condition and wear patterns</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Tyre wear patterns are one of the most useful indicators of what else might be going on with a car. Even wear across both tyres is a good sign. Wear on the inner or outer edges, or uneven wear between left and right, usually points to a suspension or alignment issue. We look at this every time. Tyre condition matters too — cracking in the sidewall, bulging, or tread that's getting close to the legal minimum.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="underneath">Anything visible underneath</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        When the car is on the lift, we look at the underside — exhaust, suspension, any signs of leaking. A weeping seal, a rusting exhaust section, a cracked heat shield. These are the kinds of things that can quietly become worse. We note what we see.
      </p>

      <h2 class="text-3xl font-extrabold text-slate-900 mt-16 mb-6" id="how-we-tell-you">How we tell you what we find</h2>
      <p class="text-slate-600 mb-8 leading-relaxed">
        After we've looked at the car, we tell you what we found — everything, not just the thing you came in for. We sort it into what needs attention now, what's worth keeping an eye on, and what looks fine. You decide what gets done. We don't start anything without your go-ahead, and we don't add work to a job without telling you first.
      </p>
      <p class="text-slate-600 mb-8 leading-relaxed">
        Morgatech Auto Repair — 6713 Ammendale Rd, Beltsville, MD 20705. Monday to Friday, 9 AM to 6 PM. Call (301)-477-4113. We offer a free scan for any dashboard warning light — no appointment needed, just call ahead.
      </p>
    `,
  },
};

// ─── Newsletter CTA ──────────────────────────────────────────────────────────

export const BLOG_NEWSLETTER: NewsletterCTA = {
  title: "Stay Engineered",
  description:
    "Join 5,000+ car enthusiasts getting monthly maintenance alerts and exclusive performance tips.",
  buttonText: "Subscribe Now",
  subscriberCount: "5,000+",
};

// ─── Search Defaults ─────────────────────────────────────────────────────────

export const DEFAULT_SEARCH_STATE: SearchResult = {
  query: "",
  totalResults: 0,
  results: [],
  suggestions: [
    "Oil Change Intervals",
    "Brake Squeaking",
    "Check Engine Light",
    "Maryland Inspection",
  ],
};
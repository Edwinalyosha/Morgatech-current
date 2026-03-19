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
  phone: "(301)-477-4113",
  email: "service@morgatech.com",
  address: "6713 Ammendale Rd, Beltsville, MD 20705",
  hours: {
    weekday: "Mon - Fri: 8:00 AM - 6:00 PM",
    saturday: "Sat: 9:00 AM - 2:00 PM",
    sunday: "Sun: Closed",
  },
  emergency: "(301)-477-4113",
  mapQuery: "6713+Ammendale+Rd+Beltsville+MD+20705",
} as const;

// ─── Services (grid cards on home & services page) ───────────────────────────

export const SERVICES: Service[] = [
  {
    slug: "car-maintenance",
    title: "Car Maintenance",
    description:
      "Complete vehicle health and longevity through precision care.",
    icon: "build_circle",
    image:
      "/services/car-maintenance.jpg",
    imageAlt: "Mechanic performing a multi-point inspection on a modern vehicle engine",
  },
  {
    slug: "brake-repair",
    title: "Brake Repair",
    description:
      "Pads, rotors, and fluid service to ensure your safety on every journey.",
    icon: "minor_crash",
    image:
      "/services/car-brake.jpg",
    imageAlt: "Mechanical inspection of metallic car brake disc and caliper",
  },
  {
    slug: "engine-diagnostics",
    title: "Engine Diagnostics",
    description:
      "Advanced computer scanning to identify and resolve complex issues quickly.",
    icon: "build_circle",
    image:
      "/services/engine.jpg",
    imageAlt: "Mechanic using a digital diagnostic tool on a modern car",
  },
  {
    slug: "transmission-service",
    title: "Transmission Service",
    description:
      "Expert service and maintenance for automatic and manual transmissions.",
    icon: "settings_input_component",
    image:
      "/services/transmission-repair.jpg",
    imageAlt: "Close up of a car gearbox and transmission components",
  },
  {
    slug: "auto-electrical-service",
    title: "Auto Electrical Service",
    description:
      "Specialized wiring, sensor, and electronic module diagnostics and repair.",
    icon: "bolt",
    image:
      "/services/auto-electrical-service.jpg",
    imageAlt: "Car battery and electrical wiring in an engine bay",
  },
  {
    slug: "exhaust-system",
    title: "Exhaust System",
    description:
      "Full-service exhaust repair to keep your vehicle quiet and eco-friendly.",
    icon: "battery_charging_full",
    image:
      "/services/exhaust-system.jpg",
    imageAlt: "Close up of a car exhaust system being replaced",
  },
  {
    slug: "ac-heating-services",
    title: "AC & Heating Services",
    description:
      "Cooling system diagnostics, recharging, and leak repairs to keep you comfortable in any weather.",
    icon: "ac_unit",
    image:
      "/services/ac-services.jpg",
    imageAlt: "Blue air conditioning coolant manifold gauges on a car engine",
  },
  {
    slug: "suspension-repair",
    title: "Suspension Repair",
    description:
      "Expert maintenance and replacement of shocks, struts, ball joints, and steering system components.",
    icon: "build_circle",
    image:
      "/services/suspension-repair.jpg",
    imageAlt: "Detailed view of a vehicle's suspension and wheel assembly",
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
    overviewTitle: "Protect Your Investment with Smart Maintenance",
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
      "Expert diagnostics and repair for complex vehicle electronics, including alternators, starters, and power accessories.",
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
    overviewTitle: "Advanced Climate Control Solutions in Beltsville",
    overviewText: [
      "In Maryland's harsh weather, a functional climate control system is more than a luxury—it is essential for a safe and focused driving experience. At Morgatech Auto Repair, we utilize advanced diagnostic equipment to pinpoint leaks and mechanical failures in your heating and cooling systems, ensuring we find the root cause before recommending a repair.",
      "Whether you are dealing with a faulty compressor, reduced airflow, or unusual odors from your vents, our skilled mechanics have the expertise to restore your vehicle’s interior environment. We use only high-quality parts and industry-standard refrigerants to ensure your system operates at peak efficiency during the hottest summer days and coldest winter nights.",
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
    overviewTitle: "Is Your Suspension Trying to Tell You Something?",
    overviewText: [
      "A compromised suspension system affects more than just ride comfort; it severely impacts steering precision, braking distance, and tire longevity. Our Beltsville technicians specialize in restoring the original handling and safety of all makes and models, with a specific focus on the tight tolerances required for European vehicles.",
      "We offer a complimentary 15-Minute 'No-Wrench' Inspection to visually and physically assess your major components. This allows us to identify the root cause of your handling issues—whether it's worn bushings or a failing rack and pinion—giving you clear information before any repair costs are committed.",
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
    value: "(301)-477-4113",
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

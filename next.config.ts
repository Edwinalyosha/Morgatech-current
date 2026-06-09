import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: ["10.0.0.88"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      // Old site service pages
      { source: "/services/auto%20electrical.html", destination: "/services/auto-electrical-service", permanent: true },
      { source: "/services/Transmission.html", destination: "/services/transmission-service", permanent: true },
      { source: "/services/brake-services.html", destination: "/services/brake-repair", permanent: true },
      { source: "/services/engine.html", destination: "/services/engine-diagnostics", permanent: true },
      { source: "/services/suspension-steering.html", destination: "/services/suspension-repair", permanent: true },
      { source: "/services/heating%20and%20Air%20conditioning.html", destination: "/services/ac-heating-services", permanent: true },
      { source: "/services/standard%20maintenance.html", destination: "/services/car-maintenance", permanent: true },
      { source: "/services/Car%20maintenance%20essentials.html", destination: "/services/car-maintenance", permanent: true },
      { source: "/services/Exhaust%20Services.html", destination: "/services/exhaust-system", permanent: true },
      { source: "/services/Tire%20Services.html", destination: "/services/car-maintenance", permanent: true },
      // Old site top-level pages
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      // Old blog pages
      { source: "/blog/common-car-problems.html", destination: "/blog", permanent: true },
      { source: "/blog/fuel-economy.html", destination: "/blog", permanent: true },
      { source: "/blog/blog.html", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;

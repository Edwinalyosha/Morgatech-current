import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { BUSINESS, NAV_LINKS, SERVICES, HOME_IMAGES } from "@/lib/constants";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 text-primary">
              <div className="relative w-18 h-18 overflow-hidden">
                <Image
                  src={HOME_IMAGES.logo}
                  alt={`${BUSINESS.name} logo`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  priority
                />
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight uppercase text-slate-900">
                {BUSINESS.shortName}
              </h2>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              Beltsville&apos;s premier automotive repair destination. We
              provide honest, transparent, and high-quality mechanical services
              for all makes and models.
            </p>
            <div className="flex gap-4">
              {["public", "camera", "video_library"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-600"
                >
                  <MaterialIcon name={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/booking"
                  className="text-slate-600 hover:text-primary text-sm transition-colors"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
              Our Services
            </h3>
            <ul className="space-y-4">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-600 hover:text-primary text-sm transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-6">
              Contact Info
            </h3>
            <div className="flex items-start gap-3">
              <MaterialIcon name="location_on" className="text-primary" />
              <span className="text-sm text-slate-600">
                {BUSINESS.address}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MaterialIcon name="call" className="text-primary" />
              <span className="text-sm text-slate-600">{BUSINESS.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <MaterialIcon name="mail" className="text-primary" />
              <span className="text-sm text-slate-600">{BUSINESS.email}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

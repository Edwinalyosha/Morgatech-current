"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { NAV_LINKS, BUSINESS, HOME_IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
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
            <h1 className="text-xl font-extrabold tracking-tight uppercase text-slate-900">
              {BUSINESS.shortName}
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-slate-700 hover:text-primary",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a
              className="hidden sm:flex items-center gap-2 text-primary font-bold"
              href={`tel:${BUSINESS.phone.replace(/[^0-9]/g, "")}`}
            >
              <MaterialIcon name="call" className="text-xl" />
              <span>{BUSINESS.phone}</span>
            </a>
            <Link
              href="/booking"
              className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all"
            >
              Schedule Service
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <MaterialIcon name={mobileOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block py-2 text-sm font-semibold transition-colors",
                pathname === link.href
                  ? "text-primary"
                  : "text-slate-700 hover:text-primary",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 transition-all mt-4"
          >
            Schedule Service
          </Link>
        </div>
      )}
    </header>
  );
}

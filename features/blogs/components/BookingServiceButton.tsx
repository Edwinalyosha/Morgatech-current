"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useBooking } from "@/hooks/useBooking";

interface BookingServiceButtonProps {
  className?: string;
  children?: ReactNode;
}

export function BookingServiceButton({
  className,
  children,
}: BookingServiceButtonProps) {
  const { openBooking } = useBooking();

  return (
    <Link
      href="/booking"
      onClick={openBooking}
      className={
        className ??
        "block w-full bg-white text-primary py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors text-center active:scale-95"
      }
    >
      {children ?? "Book Service"}
    </Link>
  );
}


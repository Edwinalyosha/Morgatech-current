"use client";

import { useCallback } from "react";
import { useBookingContext } from "@/providers/BookingContext";

export function useBooking() {
  const { openBooking: open } = useBookingContext();

  const openBooking = useCallback((e?: React.MouseEvent | React.PointerEvent) => {
    if (e) e.preventDefault();
    open();
  }, [open]);

  return { openBooking };
}

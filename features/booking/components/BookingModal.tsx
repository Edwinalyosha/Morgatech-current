"use client";

import { useEffect } from "react";
import { useBookingContext } from "@/context/BookingContext";
import { BookingForm } from "./BookingForm";

export function BookingModal() {
  const { isOpen, closeBooking } = useBookingContext();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
    >
      <div className="absolute inset-0 bg-black/50" onClick={closeBooking} />
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white shadow-2xl max-h-[90vh] overflow-y-auto">
        <BookingForm onClose={closeBooking} />
      </div>
    </div>
  );
}

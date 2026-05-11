"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface BookingContextValue {
  isOpen: boolean;
  preselectedService: string;
  openBooking: (service?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  const openBooking = useCallback((service = "") => {
    setPreselectedService(service);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <BookingContext.Provider value={{ isOpen, preselectedService, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBookingContext() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBookingContext must be used within BookingProvider");
  return ctx;
}

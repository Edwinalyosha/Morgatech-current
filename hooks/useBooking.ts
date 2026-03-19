"use client";

import { useCallback } from "react";

export function useBooking() {
  const openBooking = useCallback((e?: React.MouseEvent | React.PointerEvent) => {
    if (e) e.preventDefault();
    const portal = (window as any).AutoOps;

    if (portal) {
      portal.show();
    } else {
      console.warn("AutoOps booking script is not loaded yet.");
    }
  }, []);

  return { openBooking };
}
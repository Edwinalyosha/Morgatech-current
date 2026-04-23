"use client";

import { useState, useEffect, useRef } from "react";
import { BUSINESS } from "@/lib/constants";

export function ChatWidget() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => {
      clearTimeout(t);
      if (dismissTimer.current) clearTimeout(dismissTimer.current);
    };
  }, []);

  const handleChatClick = () => {
    if (tooltipOpen) {
      setTooltipOpen(false);
      if (dismissTimer.current) clearTimeout(dismissTimer.current);
    } else {
      setTooltipOpen(true);
      dismissTimer.current = setTimeout(() => setTooltipOpen(false), 3000);
    }
  };

  const telHref = `tel:${BUSINESS.phone.replace(/[^0-9]/g, "")}`;

  return (
    <>
      {tooltipOpen && (
        <div className="fixed bottom-[96px] right-6 z-[70] pointer-events-none">
          <div className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-200 whitespace-nowrap">
            Chat coming soon!
          </div>
          <div className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 bg-white ring-1 ring-slate-200 [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
        </div>
      )}

      <div
        className={`fixed bottom-6 right-6 z-[60] w-14 flex flex-col items-end gap-3 transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <a
          href={telHref}
          aria-label="Call us"
          className="md:hidden flex h-14 w-14 items-center justify-center rounded-full bg-blue-950 text-white shadow-lg shadow-blue-950/50 transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
          </svg>
        </a>

        <button
          onClick={handleChatClick}
          aria-label="Chat with us"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/40 transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </>
  );
}

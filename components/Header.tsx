"use client";

import React from "react";
import { Coffee, MapPin, Sparkles } from "lucide-react";

export function Header() {
  const scrollToClaim = () => {
    const el = document.getElementById("claim-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const nameInput = document.getElementById("customer-name");
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 600);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#EAE3D8] bg-[#FAF7F2]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1F1A17] text-[#FAF7F2] shadow-sm">
            <Coffee className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-semibold tracking-tight text-[#1F1A17] sm:text-xl">
                Morrow Café
              </span>
              <span className="hidden rounded-full bg-[#EAE3D8] px-2 py-0.5 text-[10px] font-medium tracking-wide text-[#7A6956] uppercase sm:inline-block">
                Artisanal Roastery
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#7A6956]">
              <MapPin className="h-3 w-3 text-[#D96B27]" />
              <span>Sector 104, Noida</span>
            </div>
          </div>
        </div>

        {/* Quick Action Button */}
        <button
          onClick={scrollToClaim}
          className="inline-flex items-center gap-1.5 rounded-full bg-[#1F1A17] px-4 py-2 text-xs font-semibold text-[#FAF7F2] shadow-sm transition hover:bg-[#332A22] hover:shadow active:scale-95 focus:ring-2 focus:ring-[#D96B27] focus:ring-offset-2 sm:text-sm"
          aria-label="Scroll to claim offer form"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#D96B27]" />
          <span>Claim ₹150 OFF</span>
        </button>
      </div>
    </header>
  );
}

"use client";

import React from "react";
import { Coffee, Sparkles } from "lucide-react";

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
    <header className="sticky top-0 z-40 w-full border-b border-warm-200 bg-warm-100/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Brand Logo & Name Only */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-warm-900 text-warm-100 shadow-xs">
            <Coffee className="h-5 w-5 text-warm-100" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-warm-900 sm:text-2xl">
            Morrow Cafe
          </span>
        </div>

        {/* Quick Action Button */}
        <button
          onClick={scrollToClaim}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-full bg-warm-900 px-4 py-2 text-xs font-semibold text-warm-100 shadow-sm transition hover:bg-warm-800 hover:shadow active:scale-95 focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2 sm:text-sm"
          aria-label="Scroll to claim offer form"
        >
          <Sparkles className="h-3.5 w-3.5 text-terracotta-500" />
          <span>Claim ₹150 OFF</span>
        </button>
      </div>
    </header>
  );
}

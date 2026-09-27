"use client";

import React, { useEffect, useState } from "react";
import { Coffee } from "lucide-react";

export function PageLoader() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 550);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !loading) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF7F2] transition-opacity duration-500 ease-out"
      style={{ opacity: loading ? 1 : 0 }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated Brand Icon */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F1A17] text-[#FAF7F2] shadow-xl animate-bounce">
          <Coffee className="h-7 w-7 text-[#D96B27]" />
        </div>

        {/* Brand Name */}
        <span className="font-serif text-2xl font-bold tracking-tight text-[#1F1A17]">
          Morrow Café
        </span>

        {/* Sleek Progress Bar */}
        <div className="h-1 w-32 overflow-hidden rounded-full bg-[#EAE3D8]">
          <div className="h-full w-full origin-left bg-[#D96B27] animate-[shimmer_1s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}

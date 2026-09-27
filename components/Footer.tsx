import React from "react";
import { Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#EAE3D8] bg-[#1F1A17] text-[#FAF7F2] py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FAF7F2]/10 text-[#D96B27]">
              <Coffee className="h-5 w-5" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-tight">
                Morrow Cafe
              </span>
              <p className="text-xs text-[#A8957F]">
                Sector 104, Noida, UP • Artisanal Roastery
              </p>
            </div>
          </div>

          <p className="text-xs text-[#A8957F] text-center sm:text-right">
            © {new Date().getFullYear()} Morrow Cafe. Campaign landing experience.
          </p>
        </div>
      </div>
    </footer>
  );
}

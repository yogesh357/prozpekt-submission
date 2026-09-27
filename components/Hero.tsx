"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Sparkles, Clock, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
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
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Top Announcement Pill */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E3D7C7] bg-[#F3ECE1] px-3.5 py-1 text-xs font-medium text-[#554739] shadow-xs sm:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D96B27] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D96B27]"></span>
          </span>
          <span className="font-semibold text-[#D96B27]">In-Café Exclusive</span>
          <span className="text-[#C9BAA7]">•</span>
          <span>Sector 104, Noida QR Perk</span>
        </div>

        {/* Hero Grid / Layout */}
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Main Copy */}
          <div className="lg:col-span-7">
            <h1 className="font-serif text-4xl leading-[1.12] font-semibold tracking-tight text-[#1F1A17] sm:text-5xl sm:leading-[1.1] md:text-6xl">
              Get <span className="text-[#D96B27] underline decoration-[#E7DDD0] decoration-wavy decoration-2 underline-offset-6">₹150 OFF</span> your next visit.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#554739] sm:mt-5 sm:text-lg">
              Thank you for visiting <strong className="font-medium text-[#1F1A17]">Morrow Café</strong>. Claim your instant digital discount pass valid across our entire specialty coffee bar, fresh sourdough bakes, and kitchen brunch menu.
            </p>

            {/* In-store Value Props */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#7A6956]">
              <div className="flex items-center gap-1.5 rounded-lg bg-[#FAF7F2] border border-[#E7DDD0] px-2.5 py-1.5 shadow-xs">
                <Zap className="h-4 w-4 text-[#D96B27]" />
                <span className="font-medium text-[#1F1A17]">10-Sec Claim</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-[#FAF7F2] border border-[#E7DDD0] px-2.5 py-1.5 shadow-xs">
                <Clock className="h-4 w-4 text-[#7A6956]" />
                <span>Valid for 14 Days</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-[#FAF7F2] border border-[#E7DDD0] px-2.5 py-1.5 shadow-xs">
                <ShieldCheck className="h-4 w-4 text-[#7A6956]" />
                <span>No OTP Needed</span>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                onClick={scrollToClaim}
                className="group relative inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1F1A17] px-8 py-4 text-base font-semibold text-[#FAF7F2] shadow-lg shadow-[#1F1A17]/15 transition-all hover:bg-[#332A22] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus:ring-4 focus:ring-[#D96B27]/30"
              >
                <Sparkles className="h-5 w-5 text-[#D96B27] transition-transform group-hover:rotate-12" />
                <span>Claim ₹150 OFF</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <span className="text-xs text-[#7A6956] sm:text-sm">
                Min. order ₹300 • Single-use voucher
              </span>
            </div>
          </div>

          {/* Hero Visual Card / Media */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-4/3 max-w-md overflow-hidden rounded-3xl border border-[#E7DDD0] bg-[#FAF7F2] shadow-xl sm:aspect-4/3 lg:aspect-square">
              <Image
                src="/images/morrow-hero.webp"
                alt="Warm and calm interior of Morrow Café in Sector 104 Noida"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17]/70 via-transparent to-transparent" />
              
              {/* Floating in-image badge */}
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/80 p-3.5 backdrop-blur-md shadow-lg sm:p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium tracking-wide text-[#7A6956] uppercase">
                      Current Table Perk
                    </p>
                    <p className="font-serif text-base font-semibold text-[#1F1A17]">
                      Flat ₹150 OFF
                    </p>
                  </div>
                  <span className="rounded-full bg-[#1F1A17] px-3 py-1 text-xs font-semibold text-[#FAF7F2]">
                    Active Today
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Sparkles, Clock, ShieldCheck, Zap, Tag } from "lucide-react";

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
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 lg:pb-20">
      {/* Decorative ambient background blur */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-96 w-[600px] -translate-x-1/2 rounded-full bg-[#E7DDD0]/40 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">

          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6">

            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E3D7C7] bg-[#F3ECE1] px-3.5 py-1 text-xs font-semibold text-[#554739] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D96B27] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D96B27]"></span>
              </span>
              <span className="text-[#D96B27]">In-Cafe Exclusive</span>
              <span className="text-[#C9BAA7]">•</span>
              <span>Sector 104, Noida</span>
            </div>

            {/* Editorial Headline */}
            <div>
              <h1 className="font-serif text-4xl leading-[1.12] font-semibold tracking-tight text-[#1F1A17] sm:text-5xl sm:leading-[1.1] md:text-6xl">
                Get <span className="text-[#D96B27] underline decoration-[#E7DDD0] decoration-wavy decoration-2 underline-offset-6">₹150 OFF</span> your next visit.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[#554739] sm:text-lg">
                Welcome to <strong className="font-semibold text-[#1F1A17]">Morrow Cafe</strong>. Scan your table QR and claim an instant digital discount pass valid across all specialty pour-overs, cold brews, artisanal sourdough toasts, and kitchen brunch plates.
              </p>
            </div>

            {/* Instant Feature Pills */}
            <div className="grid grid-cols-3 gap-2.5 pt-1 text-xs text-[#554739]">
              <div className="flex flex-col items-start gap-1 rounded-2xl border border-[#E7DDD0] bg-white p-3 shadow-xs">
                <Zap className="h-4 w-4 text-[#D96B27]" />
                <span className="font-semibold text-[#1F1A17]">10s Claim</span>
                <span className="text-[11px] text-[#7A6956]">No app needed</span>
              </div>
              <div className="flex flex-col items-start gap-1 rounded-2xl border border-[#E7DDD0] bg-white p-3 shadow-xs">
                <Tag className="h-4 w-4 text-[#D96B27]" />
                <span className="font-semibold text-[#1F1A17]">Flat ₹150 OFF</span>
                <span className="text-[11px] text-[#7A6956]">Min. order ₹300</span>
              </div>
              <div className="flex flex-col items-start gap-1 rounded-2xl border border-[#E7DDD0] bg-white p-3 shadow-xs">
                <Clock className="h-4 w-4 text-[#D96B27]" />
                <span className="font-semibold text-[#1F1A17]">14 Days</span>
                <span className="text-[11px] text-[#7A6956]">Pass validity</span>
              </div>
            </div>

            {/* CTA & Trust note */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <button
                onClick={scrollToClaim}
                className="group relative inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-2xl bg-[#1F1A17] px-8 py-4 text-base font-semibold text-[#FAF7F2] shadow-lg shadow-[#1F1A17]/15 transition-all hover:bg-[#332A22] hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus:ring-4 focus:ring-[#D96B27]/30"
              >
                <Sparkles className="h-5 w-5 text-[#D96B27] transition-transform group-hover:rotate-12" />
                <span>Claim ₹150 OFF</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <div className="flex items-center gap-1.5 text-xs text-[#7A6956]">
                <ShieldCheck className="h-4 w-4 text-[#D96B27]" />
                <span>Zero spam • Instant digital pass</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-[#E7DDD0] bg-white p-2.5 shadow-xl transition-transform hover:shadow-2xl">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl sm:aspect-square">
                <Image
                  src="/images/morrow-hero.webp"
                  alt="Morrow Cafe calm interior space in Sector 104 Noida"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17]/80 via-transparent to-transparent" />

                {/* Floating coupon card tag */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/90 p-3.5 backdrop-blur-md shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold tracking-wider text-[#D96B27] uppercase">
                        Active Table Perk
                      </span>
                      <p className="font-serif text-lg font-bold text-[#1F1A17]">
                        ₹150 OFF Voucher
                      </p>
                      <p className="text-[11px] text-[#7A6956]">
                        Show code at checkout counter
                      </p>
                    </div>
                    <span className="rounded-xl bg-[#1F1A17] px-3 py-1.5 text-xs font-semibold text-[#FAF7F2]">
                      Claim Below ↓
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

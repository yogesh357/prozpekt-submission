import React from "react";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export function LocationCard() {
  return (
    <section className="py-12 sm:py-16 bg-[#F3ECE1]/40 border-t border-[#EAE3D8]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-[#E7DDD0] bg-white p-6 sm:p-10 shadow-lg">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#D96B27] uppercase">
                  Visit Us
                </span>
                <h2 className="mt-1 font-serif text-3xl font-semibold text-[#1F1A17]">
                  Morrow Café, Sector 104
                </h2>
                <p className="mt-2 text-sm text-[#554739] leading-relaxed">
                  Located right in the bustling food hub of Sector 104, Noida. Ample parking, indoor air-conditioned seating, and open-air pet friendly deck.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FAF7F2] border border-[#EAE3D8]">
                    <MapPin className="h-4 w-4 text-[#D96B27]" />
                  </div>
                  <div>
                    <strong className="block text-[#1F1A17] font-semibold">Address</strong>
                    <span className="text-[#7A6956]">
                      Plot 14, Main Market, Sector 104, Noida, UP 201304
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FAF7F2] border border-[#EAE3D8]">
                    <Clock className="h-4 w-4 text-[#D96B27]" />
                  </div>
                  <div>
                    <strong className="block text-[#1F1A17] font-semibold">Hours</strong>
                    <span className="text-[#7A6956]">
                      Mon – Sun: 8:00 AM – 11:00 PM
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FAF7F2] border border-[#EAE3D8]">
                    <Phone className="h-4 w-4 text-[#D96B27]" />
                  </div>
                  <div>
                    <strong className="block text-[#1F1A17] font-semibold">Contact</strong>
                    <span className="text-[#7A6956]">+91 98100 00104</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Sector+104+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1F1A17] px-6 py-3 text-xs sm:text-sm font-semibold text-[#FAF7F2] transition hover:bg-[#332A22] shadow-sm"
                >
                  <Navigation className="h-4 w-4 text-[#D96B27]" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Quick Map Illustration Card */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-[#E7DDD0] bg-[#FAF7F2] p-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#1F1A17] text-[#FAF7F2]">
                  <MapPin className="h-6 w-6 text-[#D96B27]" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#1F1A17]">
                  Morrow Coffee Bar
                </h3>
                <p className="text-xs text-[#7A6956] mt-1">
                  Sector 104 • Noida Expressway Hub
                </p>
                <div className="mt-4 rounded-xl bg-white border border-[#EAE3D8] p-3 text-xs text-[#554739]">
                  ⚡ Showing voucher at billing automatically deducts ₹150 from your ticket total.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

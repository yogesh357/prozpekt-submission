import React from "react";
import { MapPin, Clock, Phone, Navigation, Wifi, Car, Dog } from "lucide-react";

export function LocationCard() {
  return (
    <section className="py-14 sm:py-20 bg-warm-100 border-t border-warm-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* Main Elevated Card */}
        <div className="relative overflow-hidden rounded-3xl border border-warm-300 bg-white p-6 sm:p-10 shadow-xl">
          {/* Subtle warm accent top bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-terracotta-500 via-terracotta-600 to-warm-900" />

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">

            {/* Location & Details Column */}
            <div className="lg:col-span-7 space-y-6">

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-800">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Open Today • 8 AM – 11 PM</span>
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-warm-900">
                  Morrow Cafe
                </h2>
                <p className="mt-2 text-sm sm:text-base text-warm-700 leading-relaxed">
                  Experience quiet artisanal dining, manual pour-overs, and fresh sourdough bakery.
                </p>
              </div>

              {/* Info Matrix */}
              <div className="grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
                <div className="rounded-2xl border border-warm-300 bg-warm-100 p-4">
                  <div className="flex items-center gap-2 text-warm-600 font-medium mb-1">
                    <MapPin className="h-4 w-4 text-terracotta-500" />
                    <span>Location</span>
                  </div>
                  <p className="font-semibold text-warm-900">
                    Plot 14, Main Market, Sector 104, Noida, UP 201304
                  </p>
                </div>

                <div className="rounded-2xl border border-warm-300 bg-warm-100 p-4">
                  <div className="flex items-center gap-2 text-warm-600 font-medium mb-1">
                    <Clock className="h-4 w-4 text-terracotta-500" />
                    <span>Operating Hours</span>
                  </div>
                  <p className="font-semibold text-warm-900">
                    Mon – Sun: 8:00 AM – 11:00 PM
                  </p>
                </div>
              </div>

              {/* Amenities Pills */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-warm-600">
                <span className="inline-flex items-center gap-1 rounded-lg bg-warm-200 px-2.5 py-1">
                  <Car className="h-3.5 w-3.5 text-warm-700" /> Ample Parking
                </span>
                <span className="inline-flex items-center gap-1 rounded-lg bg-warm-200 px-2.5 py-1">
                  <Wifi className="h-3.5 w-3.5 text-warm-700" /> High-Speed Wi-Fi
                </span>
                <span className="inline-flex items-center gap-1 rounded-lg bg-warm-200 px-2.5 py-1">
                  <Dog className="h-3.5 w-3.5 text-warm-700" /> Pet Friendly Deck
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=Sector+104+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-warm-900 px-6 py-3.5 text-xs sm:text-sm font-semibold text-warm-100 shadow-md transition hover:bg-warm-800 hover:shadow-lg active:scale-95"
                >
                  <Navigation className="h-4 w-4 text-terracotta-500" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href="tel:+919810000104"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-warm-300 bg-warm-100 px-6 py-3.5 text-xs sm:text-sm font-semibold text-warm-900 transition hover:bg-warm-200 active:scale-95"
                >
                  <Phone className="h-4 w-4 text-warm-600" />
                  <span>Call: +91 98100 00104</span>
                </a>
              </div>

            </div>

            {/* Right Side Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-warm-300 bg-linear-to-br from-warm-200 to-warm-100 p-8 text-center shadow-inner">
                <h3 className="font-serif text-2xl font-bold text-warm-900">
                  Instant Billing Perk
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-warm-600">
                  Show your active coupon code on this page when paying at the register.
                </p>

                <div className="mt-6 rounded-2xl bg-white border border-warm-200 p-4 text-xs font-medium text-warm-700 shadow-xs">
                  ☕ Discount applies directly on all handcrafted coffees, brunch plates & bakery goods.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

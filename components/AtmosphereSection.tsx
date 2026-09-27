import React from "react";
import Image from "next/image";
import { Coffee, Flame, Heart, Wifi } from "lucide-react";

export function AtmosphereSection() {
  const highlights = [
    {
      icon: <Coffee className="h-5 w-5 text-terracotta-500" />,
      title: "Specialty Micro-Lots",
      desc: "Ethically sourced Indian Arabica beans roasted in small batches for distinct flavor clarity.",
    },
    {
      icon: <Flame className="h-5 w-5 text-terracotta-500" />,
      title: "Wild Sourdough & Bakes",
      desc: "Slow-fermented artisan sourdough breads, butter croissants, and seasonal kitchen brunch.",
    },
    {
      icon: <Wifi className="h-5 w-5 text-terracotta-500" />,
      title: "Dedicated Work Nooks",
      desc: "Quiet corners with dedicated power outlets and high-speed Wi-Fi for your deep work sessions.",
    },
    {
      icon: <Heart className="h-5 w-5 text-terracotta-500" />,
      title: "Pet & Community Friendly",
      desc: "A warm, inclusive space welcoming your furry friends and weekend coffee meetups.",
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-20 border-t border-warm-200 bg-warm-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl">
          <p className="text-[11px] sm:text-xs font-semibold tracking-wider text-terracotta-500 uppercase">
            Craft & Philosophy
          </p>
          <h2 className="mt-1 font-serif text-2xl sm:text-4xl font-semibold tracking-tight text-warm-900">
            More than just coffee.
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-warm-700 sm:text-base leading-relaxed">
            Morrow Cafe was designed as a slow-living haven in Sector 104, Noida. Every pour-over is weighed, every pastry proofed with care.
          </p>
        </div>

        {/* Visual Dual-Image Grid */}
        <div className="mt-6 sm:mt-8 grid gap-4 sm:grid-cols-2 lg:gap-8">
          {/* Detail Image Card */}
          <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-warm-300 bg-white p-2.5 sm:p-3 shadow-sm hover:shadow-md transition">
            <div className="relative aspect-16/10 sm:aspect-3/2 w-full overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/images/morrow-detail.webp"
                alt="Detailed pour of specialty coffee at Morrow Cafe"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-2.5 sm:p-3">
              <p className="font-serif text-sm sm:text-base font-semibold text-warm-900">
                Single-Origin Manual Brews
              </p>
              <p className="text-[11px] sm:text-xs text-warm-700 mt-0.5">
                V60, Aeropress & Japanese Cold Brew crafted to order.
              </p>
            </div>
          </div>

          {/* Hero Ambience Card */}
          <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-warm-300 bg-white p-2.5 sm:p-3 shadow-sm hover:shadow-md transition">
            <div className="relative aspect-16/10 sm:aspect-3/2 w-full overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/images/morrow-hero.webp"
                alt="Calm dining space and coffee counter at Morrow Cafe"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-2.5 sm:p-3">
              <p className="font-serif text-sm sm:text-base font-semibold text-warm-900">
                Warm Minimalist Sanctuary
              </p>
              <p className="text-[11px] sm:text-xs text-warm-700 mt-0.5">
                Acoustic treatment, natural oak wood, and calm lighting.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Pillars Grid */}
        <div className="mt-6 sm:mt-10 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-warm-300 bg-white/80 p-3.5 sm:p-5 shadow-xs transition hover:bg-white hover:shadow-md"
            >
              <div className="mb-2.5 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-warm-200">
                {item.icon}
              </div>
              <h3 className="font-serif text-xs sm:text-base font-semibold text-warm-900 leading-snug">
                {item.title}
              </h3>
              <p className="mt-1 text-[10px] sm:text-xs text-warm-600 leading-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

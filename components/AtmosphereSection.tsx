import React from "react";
import Image from "next/image";
import { Coffee, Flame, Heart, Wifi } from "lucide-react";

export function AtmosphereSection() {
  const highlights = [
    {
      icon: <Coffee className="h-5 w-5 text-[#D96B27]" />,
      title: "Specialty Micro-Lots",
      desc: "Ethically sourced Indian Arabica beans roasted in small batches for distinct flavor clarity.",
    },
    {
      icon: <Flame className="h-5 w-5 text-[#D96B27]" />,
      title: "Wild Sourdough & Bakes",
      desc: "Slow-fermented artisan sourdough breads, butter croissants, and seasonal kitchen brunch.",
    },
    {
      icon: <Wifi className="h-5 w-5 text-[#D96B27]" />,
      title: "Dedicated Work Nooks",
      desc: "Quiet corners with dedicated power outlets and high-speed Wi-Fi for your deep work sessions.",
    },
    {
      icon: <Heart className="h-5 w-5 text-[#D96B27]" />,
      title: "Pet & Community Friendly",
      desc: "A warm, inclusive space welcoming your furry friends and weekend coffee meetups.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 border-t border-[#EAE3D8] bg-[#FAF7F2]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-wider text-[#D96B27] uppercase">
            Craft & Philosophy
          </p>
          <h2 className="mt-1 font-serif text-3xl font-semibold tracking-tight text-[#1F1A17] sm:text-4xl">
            More than just coffee.
          </h2>
          <p className="mt-3 text-sm text-[#554739] sm:text-base leading-relaxed">
            Morrow Café was designed as a slow-living haven in the heart of Sector 104, Noida. Every pour-over is weighed, every pastry proofed with care.
          </p>
        </div>

        {/* Visual Dual-Image Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {/* Detail Image Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#E7DDD0] bg-white p-3 shadow-md">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl sm:aspect-3/2">
              <Image
                src="/images/morrow-detail.webp"
                alt="Detailed pour of specialty coffee at Morrow Café"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-3">
              <p className="font-serif text-base font-semibold text-[#1F1A17]">
                Single-Origin Manual Brews
              </p>
              <p className="text-xs text-[#7A6956] mt-0.5">
                V60, Aeropress & Japanese Cold Brew crafted to order.
              </p>
            </div>
          </div>

          {/* Hero Ambience Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-[#E7DDD0] bg-white p-3 shadow-md">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl sm:aspect-3/2">
              <Image
                src="/images/morrow-hero.webp"
                alt="Calm dining space and coffee counter at Morrow Café"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-3">
              <p className="font-serif text-base font-semibold text-[#1F1A17]">
                Warm Minimalist Sanctuary
              </p>
              <p className="text-xs text-[#7A6956] mt-0.5">
                Acoustic treatment, natural oak wood, and calm lighting.
              </p>
            </div>
          </div>
        </div>

        {/* 4-Pillars Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#E7DDD0] bg-white/70 p-5 shadow-xs transition hover:bg-white hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3ECE1]">
                {item.icon}
              </div>
              <h3 className="font-serif text-base font-semibold text-[#1F1A17]">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs text-[#7A6956] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

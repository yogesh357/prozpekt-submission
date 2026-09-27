import React from "react";
import { QrCode, Smartphone, Gift, ArrowRight, ArrowDown } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <QrCode className="h-6 w-6 text-terracotta-500" />,
      title: "Enter Your Details",
      desc: "Provide your name & 10-digit mobile number above. No OTP or passwords required.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-terracotta-500" />,
      title: "Receive Voucher Pass",
      desc: "Get an instant MORROW digital coupon code generated directly on your screen.",
    },
    {
      icon: <Gift className="h-6 w-6 text-terracotta-500" />,
      title: "Save ₹150 at Checkout",
      desc: "Show your pass code to your barista or server when billing to deduct ₹150 automatically.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-warm-200/60 border-t border-warm-300">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-lg mx-auto">
          <p className="text-xs font-semibold tracking-wider text-terracotta-500 uppercase">
            Seamless Redemption
          </p>
          <h2 className="mt-1 font-serif text-3xl font-semibold text-warm-900 sm:text-4xl">
            How to redeem your offer
          </h2>
          <p className="mt-2 text-sm text-warm-700">
            Designed for quick, zero-friction redemption right from your table.
          </p>
        </div>

        {/* Connected Steps Flow */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-6">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              {/* Step Card */}
              <div className="group relative flex-1 w-full rounded-3xl border border-warm-300 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-warm-100 border border-warm-200 transition-colors group-hover:bg-warm-200">
                  {step.icon}
                </div>
                
                <h3 className="mt-5 font-serif text-lg font-semibold text-warm-900">
                  {step.title}
                </h3>
                
                <p className="mt-2 text-xs sm:text-sm text-warm-700 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Connecting Arrow between steps */}
              {idx < steps.length - 1 && (
                <div className="flex items-center justify-center py-2 md:py-0">
                  {/* Desktop Right Arrow */}
                  <div className="hidden md:flex h-9 w-9 items-center justify-center rounded-full bg-warm-300 text-warm-600 shadow-2xs">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  {/* Mobile Down Arrow */}
                  <div className="flex md:hidden h-8 w-8 items-center justify-center rounded-full bg-warm-300 text-warm-600 shadow-2xs">
                    <ArrowDown className="h-4 w-4" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}

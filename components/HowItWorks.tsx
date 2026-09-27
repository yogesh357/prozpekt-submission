import React from "react";
import { QrCode, Smartphone, Gift, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: <QrCode className="h-5 w-5 sm:h-6 sm:w-6 text-terracotta-500" />,
      title: "Enter Your Details",
      desc: "Provide your name & 10-digit mobile number. No password or OTP required.",
    },
    {
      step: "02",
      icon: <Smartphone className="h-5 w-5 sm:h-6 sm:w-6 text-terracotta-500" />,
      title: "Receive Voucher Pass",
      desc: "Get an instant MORROW digital coupon code generated on your screen.",
    },
    {
      step: "03",
      icon: <Gift className="h-5 w-5 sm:h-6 sm:w-6 text-terracotta-500" />,
      title: "Save ₹150 at Checkout",
      desc: "Show your pass code to your barista or server when billing to deduct ₹150.",
    },
  ];

  return (
    <section className="py-10 sm:py-20 bg-warm-200/60 border-t border-warm-300">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-lg mx-auto">
          <p className="text-[11px] sm:text-xs font-semibold tracking-wider text-terracotta-500 uppercase">
            Seamless Redemption
          </p>
          <h2 className="mt-1 font-serif text-2xl sm:text-4xl font-semibold text-warm-900">
            How to redeem your offer
          </h2>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-warm-700">
            Zero-friction digital redemption directly from your table.
          </p>
        </div>

        {/* Connected Steps Flow */}
        <div className="mt-8 sm:mt-12 grid gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl sm:rounded-3xl border border-warm-300 bg-white p-4 sm:p-6 shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-warm-100 border border-warm-200 transition-colors group-hover:bg-warm-200">
                  {step.icon}
                </div>
                <span className="font-mono text-xs font-bold text-warm-400">
                  {step.step}
                </span>
              </div>
              
              <h3 className="font-serif text-sm sm:text-lg font-semibold text-warm-900">
                {step.title}
              </h3>
              
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-warm-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

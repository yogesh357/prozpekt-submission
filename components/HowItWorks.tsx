import React from "react";
import { QrCode, Smartphone, Gift, ArrowRight, ArrowDown } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <QrCode className="h-6 w-6 text-[#D96B27]" />,
      title: "Enter Your Details",
      desc: "Provide your name & 10-digit mobile number above. No OTP or passwords required.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-[#D96B27]" />,
      title: "Receive Voucher Pass",
      desc: "Get an instant MORROW digital coupon code generated directly on your screen.",
    },
    {
      icon: <Gift className="h-6 w-6 text-[#D96B27]" />,
      title: "Save ₹150 at Checkout",
      desc: "Show your pass code to your barista or server when billing to deduct ₹150 automatically.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F3ECE1]/60 border-t border-[#EAE3D8]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-lg mx-auto">
          <p className="text-xs font-semibold tracking-wider text-[#D96B27] uppercase">
            Seamless Redemption
          </p>
          <h2 className="mt-1 font-serif text-3xl font-semibold text-[#1F1A17] sm:text-4xl">
            How to redeem your offer
          </h2>
          <p className="mt-2 text-sm text-[#554739]">
            Designed for quick, zero-friction redemption right from your table.
          </p>
        </div>

        {/* Connected Steps Flow */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-6">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              {/* Step Card */}
              <div className="group relative flex-1 w-full rounded-3xl border border-[#E7DDD0] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FAF7F2] border border-[#EAE3D8] transition-colors group-hover:bg-[#F3ECE1]">
                  {step.icon}
                </div>
                
                <h3 className="mt-5 font-serif text-lg font-semibold text-[#1F1A17]">
                  {step.title}
                </h3>
                
                <p className="mt-2 text-xs sm:text-sm text-[#554739] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Connecting Arrow between steps */}
              {idx < steps.length - 1 && (
                <div className="flex items-center justify-center py-2 md:py-0">
                  {/* Desktop Right Arrow */}
                  <div className="hidden md:flex h-9 w-9 items-center justify-center rounded-full bg-[#EAE3D8] text-[#7A6956] shadow-2xs">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  {/* Mobile Down Arrow */}
                  <div className="flex md:hidden h-8 w-8 items-center justify-center rounded-full bg-[#EAE3D8] text-[#7A6956] shadow-2xs">
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

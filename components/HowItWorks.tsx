import React from "react";
import { QrCode, Smartphone, Gift } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <QrCode className="h-6 w-6 text-[#D96B27]" />,
      title: "Scan Table QR & Enter Details",
      desc: "Fill in your name and 10-digit mobile number above. No OTP or login needed.",
    },
    {
      num: "02",
      icon: <Smartphone className="h-6 w-6 text-[#D96B27]" />,
      title: "Receive Instant Voucher Pass",
      desc: "Get an exclusive single-use MORROW code saved instantly to your screen.",
    },
    {
      num: "03",
      icon: <Gift className="h-6 w-6 text-[#D96B27]" />,
      title: "Redeem ₹150 at the Counter",
      desc: "Show your pass code during billing on your next visit to get ₹150 deducted immediately.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F3ECE1]/60 border-t border-[#EAE3D8]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center max-w-lg mx-auto">
          <p className="text-xs font-semibold tracking-wider text-[#D96B27] uppercase">
            Simple 3-Step Redemption
          </p>
          <h2 className="mt-1 font-serif text-3xl font-semibold text-[#1F1A17] sm:text-4xl">
            How to redeem your offer
          </h2>
          <p className="mt-2 text-sm text-[#554739]">
            Designed for zero-hassle redemption right from your table.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-[#E7DDD0] bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FAF7F2] border border-[#EAE3D8]">
                    {step.icon}
                  </div>
                  <span className="font-mono text-2xl font-bold text-[#C9BAA7]">
                    {step.num}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-[#1F1A17]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-[#554739] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

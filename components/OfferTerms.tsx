"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function OfferTerms() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Where is this voucher valid?",
      a: "This voucher is exclusively valid for dine-in and direct takeaway orders at Morrow Café, Sector 104, Noida.",
    },
    {
      q: "Is there a minimum order value?",
      a: "Yes, the ₹150 discount applies on any order with a minimum subtotal of ₹300 before taxes.",
    },
    {
      q: "How long is my voucher code valid for?",
      a: "Your claimed voucher is valid for 14 calendar days from the date of generation.",
    },
    {
      q: "Can I combine this with other offers or discounts?",
      a: "This campaign offer cannot be stacked with existing combo deals or other promotional vouchers.",
    },
    {
      q: "Can I claim multiple codes with the same phone number?",
      a: "To ensure fairness for all patrons, each phone number is eligible for one active campaign voucher.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FAF7F2] border-t border-[#EAE3D8]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#F3ECE1] px-3 py-1 text-xs font-medium text-[#7A6956] mb-2">
            <HelpCircle className="h-3.5 w-3.5 text-[#D96B27]" />
            <span>Campaign FAQ & Terms</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1A17]">
            Frequently Asked Questions
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#554739]">
            Everything you need to know about claiming and redeeming your ₹150 discount.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-[#E7DDD0] bg-white transition shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-sm font-semibold text-[#1F1A17] hover:bg-[#FAF7F2] transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#7A6956] transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#D96B27]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-[#F3ECE1] bg-[#FAF7F2]/60 px-4 py-3 sm:px-5 sm:py-4 text-xs sm:text-sm text-[#554739] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

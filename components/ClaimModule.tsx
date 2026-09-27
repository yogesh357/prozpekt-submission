"use client";

import React, { useState, useRef } from "react";
import confetti from "canvas-confetti";
import {
  Check,
  Copy,
  AlertCircle,
  Loader2,
  Sparkles,
  Ticket,
  MapPin,
  Calendar,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface ClaimResponse {
  success: boolean;
  claimCode?: string;
  message: string;
  isExisting?: boolean;
}

export function ClaimModule() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState<{ name?: boolean; phone?: boolean }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [claimData, setClaimData] = useState<{
    code: string;
    name: string;
    phone: string;
    claimedAt: string;
    expiresAt: string;
    isExisting?: boolean;
  } | null>(null);

  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Helper to sanitize & format Indian phone input visually
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits
    const raw = e.target.value.replace(/\D/g, "");
    // Cap at 10 digits
    const trimmed = raw.slice(0, 10);
    setPhone(trimmed);
  };

  // Form validations
  const isNameValid = name.trim().length >= 2;
  const rawCleanPhone = phone.replace(/\D/g, "");
  const isPhoneValid = /^[6-9]\d{9}$/.test(rawCleanPhone);

  const nameError =
    touched.name && !isNameValid
      ? "Please enter your full name (at least 2 characters)."
      : null;

  const phoneError =
    touched.phone && !isPhoneValid
      ? rawCleanPhone.length === 0
        ? "Phone number is required."
        : rawCleanPhone.length < 10
        ? `Enter 10 digits (${10 - rawCleanPhone.length} more needed)`
        : "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9."
      : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, phone: true });

    if (!isNameValid || !isPhoneValid) {
      // Focus on first invalid element
      if (!isNameValid) {
        document.getElementById("customer-name")?.focus();
      } else if (!isPhoneValid) {
        document.getElementById("customer-phone")?.focus();
      }
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: rawCleanPhone,
        }),
      });

      const data: ClaimResponse = await res.json();

      if (res.ok && data.success && data.claimCode) {
        // Calculate expiration date: 14 days from today
        const now = new Date();
        const expiryDate = new Date();
        expiryDate.setDate(now.getDate() + 14);

        const formattedExpiry = expiryDate.toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });

        setClaimData({
          code: data.claimCode,
          name: name.trim(),
          phone: rawCleanPhone,
          claimedAt: now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          expiresAt: formattedExpiry,
          isExisting: data.isExisting,
        });

        setStatus("success");

        // Trigger celebratory confetti if user does not prefer reduced motion
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!prefersReducedMotion) {
          try {
            confetti({
              particleCount: 80,
              spread: 60,
              origin: { y: 0.65 },
              colors: ["#D96B27", "#1F1A17", "#E7DDD0", "#8E5B3E"],
            });
          } catch {
            // gracefully ignore if canvas-confetti fails
          }
        }
      } else {
        setStatus("error");
        setErrorMessage(
          data.message ||
            "Unable to generate your voucher pass. Please check your details and try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network connection issue. Please ensure you are connected to internet and try again."
      );
    }
  };

  const copyClaimCode = async () => {
    if (!claimData?.code) return;
    try {
      await navigator.clipboard.writeText(claimData.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setName("");
    setPhone("");
    setTouched({});
    setClaimData(null);
    setErrorMessage("");
  };

  return (
    <section
      id="claim-section"
      className="scroll-mt-20 py-8 sm:py-12 lg:py-16"
      aria-labelledby="claim-heading"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF7F2] border border-[#E7DDD0] px-3 py-1 text-xs font-medium text-[#7A6956] mb-3">
            <Ticket className="h-3.5 w-3.5 text-[#D96B27]" />
            <span>Official Claim Portal</span>
          </div>
          <h2
            id="claim-heading"
            className="font-serif text-3xl font-semibold text-[#1F1A17] sm:text-4xl"
          >
            {status === "success"
              ? "Your Voucher is Ready!"
              : "Claim Your ₹150 OFF Voucher"}
          </h2>
          <p className="mt-2 text-sm text-[#554739] sm:text-base max-w-md mx-auto">
            {status === "success"
              ? "Present this voucher code to your barista or cashier at billing."
              : "Enter your details below to generate your instant digital discount pass."}
          </p>
        </div>

        {/* Main Interactive Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E7DDD0] bg-white p-6 shadow-xl sm:p-8">
          {/* SUCCESS STATE: VOUCHER PASS */}
          {status === "success" && claimData && (
            <div className="space-y-6" role="region" aria-label="Generated Voucher">
              {/* Voucher Ticket UI */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-[#D96B27]/40 bg-[#FAF7F2] p-5 sm:p-6 shadow-inner">
                {/* Header of pass */}
                <div className="flex items-start justify-between border-b border-[#E7DDD0] pb-4">
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-[#D96B27] uppercase">
                      In-Café Perk
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#1F1A17] sm:text-2xl">
                      ₹150 OFF Total Bill
                    </h3>
                    <p className="text-xs text-[#7A6956]">
                      Morrow Café • Sector 104, Noida
                    </p>
                  </div>
                  <div className="rounded-full bg-[#1F1A17] px-3 py-1 text-[11px] font-semibold text-[#FAF7F2]">
                    Active
                  </div>
                </div>

                {/* Claim Code Section */}
                <div className="my-5 rounded-xl bg-white border border-[#E7DDD0] p-4 text-center shadow-xs">
                  <span className="text-xs font-medium text-[#7A6956] uppercase tracking-wider block mb-1">
                    Your Voucher Code
                  </span>
                  <div className="flex items-center justify-center gap-2">
                    <span
                      className="font-mono text-2xl sm:text-3xl font-bold tracking-widest text-[#1F1A17]"
                      aria-label={`Claim code: ${claimData.code}`}
                    >
                      {claimData.code}
                    </span>
                  </div>

                  {/* Copy Button */}
                  <div className="mt-3 flex justify-center">
                    <button
                      onClick={copyClaimCode}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#1F1A17] px-4 py-2 text-xs font-semibold text-[#FAF7F2] transition hover:bg-[#332A22] active:scale-95 focus:ring-2 focus:ring-[#D96B27]"
                      aria-label="Copy voucher code to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-green-400" />
                          <span className="text-green-300">Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-[#FAF7F2]" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Pass Meta Details */}
                <div className="grid grid-cols-2 gap-3 pt-1 text-xs text-[#554739]">
                  <div className="rounded-lg bg-white/70 p-2.5 border border-[#EAE3D8]">
                    <span className="block text-[10px] uppercase tracking-wider text-[#7A6956] font-medium">
                      Claimed By
                    </span>
                    <span className="font-medium text-[#1F1A17] truncate block">
                      {claimData.name}
                    </span>
                  </div>

                  <div className="rounded-lg bg-white/70 p-2.5 border border-[#EAE3D8]">
                    <span className="block text-[10px] uppercase tracking-wider text-[#7A6956] font-medium">
                      Valid Until
                    </span>
                    <span className="font-medium text-[#1F1A17] flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-[#D96B27]" />
                      {claimData.expiresAt}
                    </span>
                  </div>
                </div>

                {/* Instructions */}
                <div className="mt-4 border-t border-[#E7DDD0] pt-3 text-center">
                  <p className="text-xs text-[#7A6956]">
                    Show this code when placing your order or asking for the check.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Sector+104+Noida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-[#E7DDD0] bg-[#FAF7F2] py-3 text-xs font-semibold text-[#1F1A17] transition hover:bg-[#F3ECE1]"
                >
                  <MapPin className="h-3.5 w-3.5 text-[#D96B27]" />
                  <span>Get Directions to Café</span>
                </a>

                <button
                  onClick={resetForm}
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-transparent px-4 py-3 text-xs font-medium text-[#7A6956] transition hover:text-[#1F1A17] hover:bg-[#FAF7F2]"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Claim another</span>
                </button>
              </div>
            </div>
          )}

          {/* FORM STATE: IDLE / LOADING / ERROR */}
          {status !== "success" && (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
              aria-label="Claim offer form"
            >
              {/* Error Banner */}
              {status === "error" && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-xs sm:text-sm text-red-900"
                >
                  <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Unable to claim offer</strong>
                    <p className="mt-0.5">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Name Input */}
              <div className="space-y-1.5">
                <label
                  htmlFor="customer-name"
                  className="block text-xs font-semibold text-[#1F1A17] uppercase tracking-wider"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="customer-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                    disabled={status === "loading"}
                    aria-invalid={!!nameError}
                    aria-describedby={nameError ? "name-error" : undefined}
                    className={`w-full rounded-xl border bg-[#FAF7F2] px-4 py-3.5 text-sm text-[#1F1A17] placeholder:text-[#A8957F] transition outline-hidden focus:bg-white ${
                      nameError
                        ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                        : "border-[#E7DDD0] focus:border-[#1F1A17] focus:ring-2 focus:ring-[#1F1A17]/10"
                    }`}
                  />
                </div>
                {nameError && (
                  <p
                    id="name-error"
                    role="alert"
                    className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1"
                  >
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    <span>{nameError}</span>
                  </p>
                )}
              </div>

              {/* Phone Input */}
              <div className="space-y-1.5">
                <label
                  htmlFor="customer-phone"
                  className="block text-xs font-semibold text-[#1F1A17] uppercase tracking-wider"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-sm font-semibold text-[#7A6956] pointer-events-none select-none">
                    +91
                  </span>
                  <input
                    id="customer-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    required
                    placeholder="98765 43210"
                    value={phone}
                    onChange={handlePhoneChange}
                    onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
                    disabled={status === "loading"}
                    aria-invalid={!!phoneError}
                    aria-describedby={phoneError ? "phone-error" : undefined}
                    className={`w-full rounded-xl border bg-[#FAF7F2] pl-14 pr-4 py-3.5 text-sm text-[#1F1A17] placeholder:text-[#A8957F] transition outline-hidden focus:bg-white font-medium ${
                      phoneError
                        ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                        : "border-[#E7DDD0] focus:border-[#1F1A17] focus:ring-2 focus:ring-[#1F1A17]/10"
                    }`}
                  />
                </div>
                {phoneError ? (
                  <p
                    id="phone-error"
                    role="alert"
                    className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1"
                  >
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    <span>{phoneError}</span>
                  </p>
                ) : (
                  <p className="text-[11px] text-[#7A6956] mt-1">
                    Your 10-digit number is used to link your voucher pass. No spam or OTP.
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1F1A17] py-4 text-sm sm:text-base font-semibold text-[#FAF7F2] shadow-md transition-all hover:bg-[#332A22] hover:shadow-lg active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed focus:ring-4 focus:ring-[#D96B27]/30"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-[#D96B27]" />
                      <span>Generating Your Voucher...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4 text-[#D96B27]" />
                      <span>Claim ₹150 OFF Voucher</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              {/* Privacy / Security Notice */}
              <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-[#7A6956]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#554739]" />
                <span>Instant voucher generation • Single-use per customer</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

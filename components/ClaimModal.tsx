"use client";

import React, { useState, useRef, useEffect } from "react";
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
  X,
  Coffee,
  User,
  Phone as PhoneIcon,
} from "lucide-react";

interface ClaimResponse {
  success: boolean;
  claimCode?: string;
  message: string;
}

interface ClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ClaimModal({ isOpen, onClose }: ClaimModalProps) {
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
  } | null>(null);

  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Helper to sanitize & format Indian phone input visually
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
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
      if (!isNameValid) {
        document.getElementById("modal-customer-name")?.focus();
      } else if (!isPhoneValid) {
        document.getElementById("modal-customer-phone")?.focus();
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
        });

        setStatus("success");

        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (!prefersReducedMotion) {
          try {
            confetti({
              particleCount: 90,
              spread: 65,
              origin: { y: 0.5 },
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-warm-900/60 backdrop-blur-sm animate-fade-in-up"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-claim-heading"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg rounded-3xl border border-warm-300 bg-white p-5 sm:p-8 shadow-2xl animate-fade-in-scale max-h-[92vh] overflow-y-auto"
      >
        {/* Top Accent Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-terracotta-500 via-terracotta-600 to-warm-900" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-warm-100 text-warm-600 transition hover:bg-warm-200 hover:text-warm-900 focus:ring-2 focus:ring-terracotta-500"
          aria-label="Close claim portal dialog"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Brand Header */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-6 pr-8">
          <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-warm-900 text-warm-100 shadow-xs">
            <Coffee className="h-4 w-4 sm:h-5 sm:w-5 text-terracotta-500" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-warm-200/80 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-terracotta-600">
              <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              <span>In-Cafe Perk</span>
            </div>
            <h2
              id="modal-claim-heading"
              className="font-serif text-lg sm:text-2xl font-bold text-warm-900 leading-tight"
            >
              {status === "success" ? "Voucher Ready! 🎉" : "Claim ₹150 OFF"}
            </h2>
          </div>
        </div>

        {/* SUCCESS STATE: VOUCHER PASS */}
        {status === "success" && claimData && (
          <div className="space-y-3 sm:space-y-4 animate-fade-in-scale" role="region" aria-label="Generated Voucher">
            {/* Ticket Pass Container */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-terracotta-500/40 bg-gradient-to-b from-warm-100 to-warm-50 p-3.5 sm:p-5 shadow-inner">

              {/* Ticket Top Info */}
              <div className="flex items-start justify-between border-b border-warm-300 pb-2.5 sm:pb-3 gap-2">
                <div className="min-w-0">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-terracotta-500 uppercase">
                    Official Pass
                  </span>
                  <h3 className="font-serif text-base sm:text-xl font-bold text-warm-900 leading-snug">
                    Flat ₹150 OFF
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-warm-600 truncate">
                    Morrow Cafe · Sector 104, Noida
                  </p>
                </div>
                <div className="shrink-0 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 sm:py-1 text-[10px] font-bold text-emerald-800 whitespace-nowrap">
                  ✓ Ready
                </div>
              </div>

              {/* Code Box */}
              <div className="my-2.5 sm:my-3.5 rounded-xl sm:rounded-2xl bg-white border border-warm-300 p-2.5 sm:p-3.5 text-center shadow-xs">
                <span className="text-[10px] sm:text-[11px] font-semibold text-warm-600 uppercase tracking-wider block mb-0.5 sm:mb-1">
                  Your Voucher Code
                </span>
                <div className="flex items-center justify-center gap-2">
                  <span
                    className="font-mono text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-warm-900 select-all break-all"
                    aria-label={`Claim code: ${claimData.code}`}
                  >
                    {claimData.code}
                  </span>
                </div>

                <div className="mt-2 sm:mt-2.5 flex justify-center">
                  <button
                    onClick={copyClaimCode}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-warm-900 px-4 py-2 text-xs font-semibold text-warm-100 transition hover:bg-warm-800 active:scale-95 focus:ring-2 focus:ring-terracotta-500 shadow-sm"
                    aria-label="Copy voucher code to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-300 font-semibold text-[11px] sm:text-xs">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-warm-100" />
                        <span className="text-[11px] sm:text-xs">Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs text-warm-700">
                <div className="rounded-xl bg-white/80 p-2 border border-warm-200">
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-warm-600 font-medium">
                    Claimed By
                  </span>
                  <span className="font-semibold text-warm-900 truncate block text-[11px] sm:text-xs">
                    {claimData.name}
                  </span>
                </div>

                <div className="rounded-xl bg-white/80 p-2 border border-warm-200">
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-warm-600 font-medium">
                    Valid Until
                  </span>
                  <span className="font-semibold text-warm-900 flex items-center gap-1 text-[11px] sm:text-xs">
                    <Calendar className="h-3 w-3 text-terracotta-500 shrink-0" />
                    <span className="truncate">{claimData.expiresAt}</span>
                  </span>
                </div>
              </div>

              <div className="mt-2 border-t border-warm-300 pt-2 text-center">
                <p className="text-[10px] sm:text-[11px] text-warm-600">
                  ⚡ Show this pass on your phone when paying at the counter.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-0.5">
              <a
                href="https://maps.google.com/?q=Sector+104+Noida"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-warm-300 bg-warm-100 py-2.5 text-xs font-semibold text-warm-900 transition hover:bg-warm-200 text-center"
              >
                <MapPin className="h-3.5 w-3.5 text-terracotta-500 shrink-0" />
                <span className="truncate">Directions</span>
              </a>

              <button
                onClick={resetForm}
                className="inline-flex cursor-pointer items-center justify-center gap-1 rounded-xl border border-warm-200 bg-white px-3 py-2.5 text-xs font-medium text-warm-700 transition hover:text-warm-900 hover:bg-warm-100 whitespace-nowrap"
              >
                <RotateCcw className="h-3.5 w-3.5 shrink-0" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        )}

        {/* FORM STATE: IDLE / LOADING / ERROR */}
        {status !== "success" && (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-4 animate-fade-in-up"
            aria-label="Claim offer form"
          >
            {/* Error Banner */}
            {status === "error" && (
              <div
                role="alert"
                className="flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-900 animate-fade-in-scale"
              >
                <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block">Unable to claim offer</strong>
                  <p className="mt-0.5">{errorMessage}</p>
                </div>
              </div>
            )}

            {/* Name Input */}
            <div className="space-y-1.5">
              <label
                htmlFor="modal-customer-name"
                className="block text-xs font-semibold text-warm-900 uppercase tracking-wider"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3.5 text-warm-500 pointer-events-none">
                  <User className="h-4 w-4" />
                </span>
                <input
                  id="modal-customer-name"
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
                  aria-describedby={nameError ? "modal-name-error" : undefined}
                  className={`w-full rounded-2xl border bg-warm-100 pl-10 pr-4 py-3.5 text-sm text-warm-900 placeholder:text-warm-500 transition outline-hidden focus:bg-white ${nameError
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                      : "border-warm-300 focus:border-warm-900 focus:ring-2 focus:ring-warm-900/10"
                    }`}
                />
              </div>
              {nameError && (
                <p
                  id="modal-name-error"
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
                htmlFor="modal-customer-phone"
                className="block text-xs font-semibold text-warm-900 uppercase tracking-wider"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3.5 flex items-center gap-1 text-sm font-semibold text-warm-700 pointer-events-none select-none">
                  <PhoneIcon className="h-3.5 w-3.5 text-warm-500" />
                  <span>+91</span>
                </span>
                <input
                  id="modal-customer-phone"
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
                  aria-describedby={phoneError ? "modal-phone-error" : undefined}
                  className={`w-full rounded-2xl border bg-warm-100 pl-16 pr-4 py-3.5 text-sm text-warm-900 placeholder:text-warm-500 transition outline-hidden focus:bg-white font-medium ${phoneError
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                      : "border-warm-300 focus:border-warm-900 focus:ring-2 focus:ring-warm-900/10"
                    }`}
                />
              </div>
              {phoneError ? (
                <p
                  id="modal-phone-error"
                  role="alert"
                  className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1"
                >
                  <AlertCircle className="h-3 w-3 shrink-0" />
                  <span>{phoneError}</span>
                </p>
              ) : (
                <p className="text-[11px] text-warm-600 mt-1">
                  10-digit number used to link your single-use voucher pass.
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-warm-900 py-4 text-sm sm:text-base font-semibold text-warm-100 shadow-lg shadow-warm-900/15 transition-all hover:bg-warm-800 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed focus:ring-4 focus:ring-terracotta-500/30"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin text-terracotta-500" />
                    <span>Generating Your Voucher...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4 text-terracotta-500" />
                    <span>Claim ₹150 OFF Voucher</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>

            {/* Security Notice */}
            <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-warm-600 pt-1">
              <ShieldCheck className="h-3.5 w-3.5 text-warm-700" />
              <span>Instant voucher generation • Single-use per customer</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

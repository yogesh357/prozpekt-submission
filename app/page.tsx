"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClaimModal } from "@/components/ClaimModal";
import { AtmosphereSection } from "@/components/AtmosphereSection";
import { HowItWorks } from "@/components/HowItWorks";
import { OfferTerms } from "@/components/OfferTerms";
import { LocationCard } from "@/components/LocationCard";
import { PageLoader } from "@/components/PageLoader";

export default function Home() {
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);

  const openClaimModal = () => setIsClaimModalOpen(true);
  const closeClaimModal = () => setIsClaimModalOpen(false);

  return (
    <div className="flex min-h-screen flex-col bg-warm-100 text-warm-900">
      {/* Initial Page Loading Transition */}
      <PageLoader />

      {/* Popup Claim Modal */}
      <ClaimModal isOpen={isClaimModalOpen} onClose={closeClaimModal} />

      {/* Header with Claim Trigger */}
      <Header onOpenClaim={openClaimModal} />

      <main id="main-content" className="flex-1">
        {/* Above-the-fold Hero */}
        <Hero onOpenClaim={openClaimModal} />

        {/* Atmosphere & Specialty Roasts Showcase */}
        <AtmosphereSection />

        {/* 3-Step Redemption Workflow */}
        <HowItWorks />

        {/* Offer Terms & FAQ Accordion */}
        <OfferTerms />

        {/* Location & Visiting Hours */}
        <LocationCard />
      </main>
    </div>
  );
}

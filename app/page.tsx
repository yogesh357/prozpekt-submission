import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ClaimModule } from "@/components/ClaimModule";
import { AtmosphereSection } from "@/components/AtmosphereSection";
import { HowItWorks } from "@/components/HowItWorks";
import { OfferTerms } from "@/components/OfferTerms";
import { LocationCard } from "@/components/LocationCard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2] text-[#1F1A17]">
      {/* Skip to Main content for keyboard accessibility */}
      <a
        href="#claim-section"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-[#1F1A17] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-[#FAF7F2] focus:shadow-lg"
      >
        Skip directly to claim form
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        {/* Above-the-fold Hero */}
        <Hero />

        {/* Claim Form & Interactive Digital Pass Section */}
        <ClaimModule />

        {/* Atmosphere & Specialty Roasts Showcase */}
        <AtmosphereSection />

        {/* 3-Step Redemption Workflow */}
        <HowItWorks />

        {/* Offer Terms & FAQ Accordion */}
        <OfferTerms />

        {/* Location & Visiting Hours */}
        <LocationCard />
      </main>

      <Footer />
    </div>
  );
}

import React from "react";
import Hero from "@/components/Hero";
import UspSection from "@/components/UspSection";
import SnapshotCarousel from "@/components/SnapshotCarousel";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import FaqAccordion from "@/components/FaqAccordion";

export default function Home() {
  return (
    <>
      <Hero />
      <UspSection />
      <SnapshotCarousel />
      <HowItWorks />
      <PricingSection />
      <FaqAccordion />
    </>
  );
}

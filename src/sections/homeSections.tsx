import type { ReactNode } from "react";

import Hero from "@/components/organism/Hero";
import QuoteSection from "@/components/organism/QuoteSection";
import EventsSection from "@/components/organism/EventsSection";
import SponsorsSection from "@/components/organism/SponsorsSection";
import ParticipaSection from "@/components/organism/ParticipaSection";
import GallerySection from "@/components/organism/GallerySection";
import ClosingSection from "@/components/organism/ClosingSection";
import FAQSection from "@/components/organism/FAQSection";
import Footer from "@/components/organism/Footer";

export type HomeSection = {
  key: string;
  node: ReactNode;
};

export const homeSections: HomeSection[] = [
  { key: "hero", node: <Hero /> },
  { key: "quote", node: <QuoteSection /> },
  { key: "events", node: <EventsSection /> },
  { key: "sponsors", node: <SponsorsSection /> },
  { key: "participa", node: <ParticipaSection /> },
  { key: "gallery", node: <GallerySection /> },
  { key: "closing", node: <ClosingSection /> },
  { key: "faq", node: <FAQSection /> },
  { key: "footer", node: <Footer /> },
];


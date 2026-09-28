import { HomepageHero } from "@/components/marketing/homepage-hero";
import { PersonalBrandIntelligence } from "@/components/marketing/personal-brand-intelligence";
import { ProblemSection } from "@/components/marketing/problem-section";
import { ProductPillars } from "@/components/marketing/product-pillars";

export default function HomePage() {
  return (
    <>
      <HomepageHero />
      <ProblemSection />
      <ProductPillars />
      <PersonalBrandIntelligence />
    </>
  );
}

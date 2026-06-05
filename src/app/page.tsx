import { Hero } from "../marketing/hero";
import { TrustBar } from "../marketing/trust-bar";
import { ServicesPreview } from "../marketing/services-preview";
import { PortfolioPreview } from "../marketing/portfolio-preview";
import { TestimonialsPreview } from "../marketing/testimonials-preview";
import { WhyChooseUs } from "../marketing/why-choose-us";
import { CTASection } from "../marketing/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <WhyChooseUs />
      <PortfolioPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";
import { caseStudies } from "../data/case-studies";
import { PortfolioCard } from "./portfolio-card";

export function PortfolioPreview() {
  return (
    <Section className="bg-muted/30">
      <Container>
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Featured Work</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Results we're proud of.</h2>
          </div>
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((cs) => (
            <PortfolioCard key={cs.title} title={cs.title} category={cs.category} result={cs.result} image={cs.image} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

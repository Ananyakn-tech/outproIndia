import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";
import { caseStudies } from "../data/case-studies";
import { PortfolioCard } from "./portfolio-card";

export function CaseStudiesGrid() {
  return (
    <Section>
      <Container>
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our Work</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Projects that drove real results.</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">Every project is measured by business outcomes — not just deliverables.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <PortfolioCard key={cs.title} title={cs.title} category={cs.category} result={cs.result} image={cs.image} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

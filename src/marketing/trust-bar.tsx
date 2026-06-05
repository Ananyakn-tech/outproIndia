import { Container } from "../components/layout/container";

export function TrustBar() {
  const clients = ["FinNova","TheraCare","ZenLog","AgriTech India","EduVista","StartupX","CloudWorks","GrowthLabs"];
  return (
    <section className="border-y border-border bg-muted/40 py-8">
      <Container>
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Trusted by ambitious Indian businesses
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {clients.map((c) => (
            <span key={c} className="text-sm font-bold tracking-widest text-muted-foreground/50 transition-colors hover:text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

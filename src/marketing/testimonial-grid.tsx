import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";
import { testimonials } from "../data/testimonials";
import { TestimonialCard } from "./testimonial-card";

export function TestimonialsGrid() {
  return (
    <Section>
      <Container>
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Client Stories</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">What our clients say.</h2>
          <p className="mt-4 text-muted-foreground">Real results from real Indian businesses.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.author} quote={t.quote} author={t.author} company={t.company} role={t.role} />
          ))}
        </div>

        {/* Video testimonials placeholder */}
        <div className="mt-16">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Video Testimonials</p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Rajesh Kumar", company: "FinNova Technologies", duration: "2:14" },
              { name: "Priya Sharma",  company: "TheraCare Group",      duration: "1:58" },
              { name: "Suresh Reddy",  company: "ZenLog Supply Chain",  duration: "3:02" },
            ].map((v) => (
              <div key={v.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-[#080b14] cursor-pointer transition-all hover:-translate-y-1 hover:border-primary/30">
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-[#111520] to-[#080b14]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/20 bg-primary text-white transition-transform group-hover:scale-110 text-xl">
                    ▶
                  </div>
                  <span className="absolute bottom-3 left-4 text-xs text-white/40">{v.duration} · Client Review</span>
                </div>
                <div className="px-5 py-4">
                  <div className="text-sm font-semibold text-white">{v.name}</div>
                  <div className="text-xs text-white/40">{v.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

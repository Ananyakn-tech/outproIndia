import Link from "next/link";
import { Container } from "../../components/layout/container";
import { Section } from "../../components/layout/section";
import { CTASection } from "../../marketing/cta-section";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Partner Program" };
const tiers = [
  { icon: "🔗", title: "Referral Partner", border: "#888888", desc: "Refer clients, earn up to 10% commission per closed project. No delivery responsibility. Ideal for consultants and freelancers." },
  { icon: "🏷️", title: "Reseller Partner", border: "#ffb347", desc: "White-label our services under your brand. Wholesale pricing and dedicated account manager. Ideal for agencies expanding their offering." },
  { icon: "🚀", title: "Strategic Partner", border: "#ff5c00", desc: "Co-deliver large projects together. Shared resources, joint pitches, revenue sharing. For established agencies seeking a technical partner." },
];
export default function PartnerPage() {
  return (
    <>
      <section className="bg-[#080b14] py-28 text-white">
        <Container>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">🤝 Partner Program</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Grow Together —<br /><span className="gradient-text">The Partner Program</span></h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400">For agencies, consultants and freelancers who want to extend their offering without building a full development team.</p>
        </Container>
      </section>
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((t) => (
              <div key={t.title} className="rounded-2xl border-t-4 border border-border bg-card p-8" style={{ borderTopColor: t.border }}>
                <div className="mb-4 text-4xl">{t.icon}</div>
                <h3 className="text-xl font-bold">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                <Link href="/contact" className="mt-6 inline-flex rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-primary/90 transition-colors">Get Started →</Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}

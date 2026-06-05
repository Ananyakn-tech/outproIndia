import Link from "next/link";
import { Container } from "../../components/layout/container";
import { Section } from "../../components/layout/section";
import { CTASection } from "../../marketing/cta-section";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Blog" };
const topics = [
  { icon: "⚡", title: "Web Performance", desc: "Core Web Vitals, Lighthouse, CDN strategy and real PageSpeed case studies from our projects." },
  { icon: "🎨", title: "UI/UX Strategy", desc: "Figma workflows, design systems, conversion-rate design decisions and mobile-first thinking." },
  { icon: "📈", title: "Digital Growth", desc: "GA4 implementation guides, SEO for Indian markets, CRM integrations and lead generation frameworks." },
  { icon: "🏗️", title: "Tech & Architecture", desc: "Next.js vs Nuxt, database choices, cloud deployment patterns and scalable code architecture." },
  { icon: "📦", title: "Case Studies", desc: "Real client project breakdowns — the brief, our approach, and the measurable outcomes." },
  { icon: "🤝", title: "Client Tips", desc: "How to brief a digital agency, evaluate proposals and get the most from your web project." },
];
export default function BlogPage() {
  return (
    <>
      <section className="bg-[#080b14] py-28 text-white">
        <Container>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">🚧 Coming Soon</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Outpro<br /><span className="gradient-text">Insights</span></h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400">In-depth articles on web performance, UI/UX strategy, digital growth, and real case studies from 150+ projects.</p>
          <div className="mt-8 flex gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white hover:bg-orange-600 transition-colors">Notify Me at Launch →</Link>
          </div>
        </Container>
      </section>
      <Section>
        <Container>
          <h2 className="mb-10 text-3xl font-bold">Topics We'll Cover</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => (
              <div key={t.title} className="rounded-2xl border border-border bg-card p-7 opacity-70">
                <div className="mb-4 text-3xl">{t.icon}</div>
                <h3 className="text-lg font-bold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}

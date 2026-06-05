import Link from "next/link";
import { Container } from "../../components/layout/container";
import { Section } from "../../components/layout/section";
import { CTASection } from "../../marketing/cta-section";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Careers" };
const jobs = [
  { dept: "Engineering", title: "Senior React.js / Next.js Developer", exp: "3+ years", type: "Full-Time", location: "Remote", salary: "₹12–22 LPA" },
  { dept: "Design", title: "UI/UX Designer — Figma Specialist", exp: "2+ years", type: "Full-Time", location: "Remote", salary: "₹8–15 LPA" },
  { dept: "Growth", title: "SEO & Analytics Strategist", exp: "2+ years", type: "Full-Time", location: "Remote / Bengaluru", salary: "₹6–12 LPA" },
  { dept: "Engineering", title: "Node.js / Laravel Backend Engineer", exp: "2+ years", type: "Contract", location: "Remote", salary: "₹10–18 LPA" },
];
const perks = [
  { icon: "🌍", title: "Remote-First", desc: "Work from anywhere in India. We care about output, not hours. Async-friendly with structured weekly syncs." },
  { icon: "📚", title: "Learning Budget", desc: "₹25,000/year for courses, tools, and conferences. We invest in your growth because it improves client outcomes." },
  { icon: "🏆", title: "Ownership Culture", desc: "No micromanagement. You own projects end-to-end, work directly with clients, and your name goes on the work." },
];
export default function CareersPage() {
  return (
    <>
      <section className="bg-[#080b14] py-28 text-white">
        <Container>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">🚀 We're Hiring</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">Join the Team<br /><span className="gradient-text">That Builds India's Web</span></h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400">Remote-first. Results-driven. We value craft over credentials. If you want to do the best work of your career, reach out.</p>
        </Container>
      </section>
      <Section>
        <Container>
          <h2 className="mb-10 text-3xl font-bold">Open Roles</h2>
          <div className="flex flex-col gap-4">
            {jobs.map((j) => (
              <div key={j.title} className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-border bg-card p-7 sm:flex-row sm:items-center">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{j.dept} · {j.type}</span>
                  <h3 className="mt-1 text-xl font-bold">{j.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{j.exp} · {j.location} · {j.salary}</p>
                </div>
                <Link href="/contact" className="shrink-0 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary/90 transition-colors">Apply Now →</Link>
              </div>
            ))}
          </div>
          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {perks.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-7">
                <div className="mb-3 text-3xl">{p.icon}</div>
                <h3 className="font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}

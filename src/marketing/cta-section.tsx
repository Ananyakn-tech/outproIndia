import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";

export function CTASection() {
  return (
    <Section>
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[#080b14] px-8 py-16 text-white md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-orange-500/10 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-orange-500/5 blur-[100px]" />
          <div className="relative max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">Ready to grow?</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Build your next digital product with us.
            </h2>
            <p className="mt-6 text-lg text-zinc-400">
              Let's discuss your goals and create a scalable website that generates leads, builds credibility, and grows with your business.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 text-sm font-bold text-white hover:bg-orange-600 hover:gap-3 transition-all">
                Start Project <ArrowRight size={18} />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-all">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

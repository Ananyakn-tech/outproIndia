import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../components/layout/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#080b14] text-white">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "linear-gradient(rgba(255,92,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,92,0,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-[120px]" />

      <Container>
        <div className="relative py-28 md:py-40">
          {/* Label */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
              India's Corporate Digital Partner
            </span>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            We Build Digital Identities{" "}
            <span className="gradient-text">That Sell.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            High-performance, scalable corporate websites designed for Indian businesses —
            built on React.js, Next.js, and deployed on enterprise cloud infrastructure.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-4 text-sm font-bold text-white transition-all hover:bg-orange-600 hover:gap-3">
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link href="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-all hover:border-orange-500/30 hover:bg-white/10">
              View Portfolio <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Metrics row */}
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/5 sm:grid-cols-4">
            {[
              { val: "150+", label: "Projects Delivered" },
              { val: "50+", label: "Active Clients" },
              { val: "99%", label: "Client Satisfaction" },
              { val: "< 2.5s", label: "Avg. Load Time" },
            ].map((m) => (
              <div key={m.label} className="bg-[#080b14] px-6 py-6 text-center">
                <div className="text-3xl font-extrabold tracking-tight text-orange-400 md:text-4xl">{m.val}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

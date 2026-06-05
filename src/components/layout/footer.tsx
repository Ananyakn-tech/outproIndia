import Link from "next/link";
import { Container } from "./container";
import { company } from "@/src/constants/company";
import { NewsletterForm } from "@/src/components/newsletter-form";

export function Footer() {
  return (
    <footer className="border-t bg-[#080b14] text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-2xl font-extrabold tracking-tight">
              <span className="text-primary">Outpro</span>.India
            </div>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">Digital Solutions</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-400">
              India's growth-focused corporate digital partner. We build high-performance websites that generate leads, build credibility, and scale with your business.
            </p>
            <div className="mt-6 flex gap-3">
              {["in","𝕏","f"].map((s) => (
                <a key={s} href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-sm text-zinc-400 transition-colors hover:border-primary hover:text-primary">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Pages</h4>
            <div className="flex flex-col gap-3">
              {["/","about","services","portfolio","testimonials","contact"].map((p) => (
                <Link key={p} href={p === "/" ? "/" : `/${p}`}
                  className="text-sm text-zinc-400 capitalize transition-colors hover:text-primary">
                  {p === "/" ? "Home" : p}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-zinc-400">
              <a href={`mailto:${company.email}`} className="hover:text-primary transition-colors">{company.email}</a>
              <a href={`tel:${company.phone}`} className="hover:text-primary transition-colors">{company.phone}</a>
              <span>{company.location}</span>
            </div>
            <div className="mt-8">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Newsletter</h4>
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 py-6 text-xs text-zinc-600 sm:flex-row">
          <span>© 2025 Outpro.India. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

import Image from "next/image";
import { LinkedinLogo, TwitterLogo } from "@phosphor-icons/react/dist/ssr";
import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";

const team = [
  { name: "Aditya Kumar",  role: "Founder & CEO",          bio: "10+ yrs in enterprise digital. IIT Bombay alumni. Previously led product at two SaaS startups.", img: "/images/team/aditya.svg",  bg: "#FF5C00" },
  { name: "Sneha Mehta",   role: "Head of Design",          bio: "Former lead designer at Zomato. Expert in Figma systems, brand identity & conversion UI. 80+ projects.", img: "/images/team/sneha.svg",   bg: "#1a1a2e" },
  { name: "Rahul Nair",    role: "Lead Developer",           bio: "Full-stack engineer in React.js/Next.js & Node.js. Open-source contributor. PageSpeed obsessed.", img: "/images/team/rahul.svg",   bg: "#0f3460" },
  { name: "Divya Pillai",  role: "SEO & Analytics Lead",    bio: "Google-certified marketer. GA4, Search Console & Core Web Vitals specialist. Tripled traffic for 12+ clients.", img: "/images/team/divya.svg",   bg: "#2d6a4f" },
  { name: "Vikram Singh",  role: "Backend Architect",        bio: "AWS-certified. Designs scalable backends with Node.js, Python & Laravel. PostgreSQL, MongoDB expert.", img: "/images/team/vikram.svg",  bg: "#533483" },
  { name: "Neha Rao",      role: "Client Success Manager",  bio: "Ensures projects run on time and clients are heard. Manages delivery, support & long-term relationships.", img: "/images/team/neha.svg",    bg: "#9c2542" },
];

export function TeamSection() {
  return (
    <Section>
      <Container>
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Our People</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">The team behind every project.</h2>
          <p className="mt-5 max-w-2xl text-muted-foreground">
            Strategy, design and engineering — combined. Every project is led by a dedicated specialist, not handed off to juniors.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
              {/* Avatar */}
              <div className="mb-5 flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-border transition-colors group-hover:border-primary/40"
                  style={{ background: m.bg }}>
                  <Image src={m.img} alt={m.name} fill className="object-cover" sizes="56px" />
                </div>
                <div>
                  <div className="font-bold">{m.name}</div>
                  <div className="text-xs font-semibold text-primary">{m.role}</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              <div className="mt-5 flex gap-3">
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  <LinkedinLogo size={15} />
                </a>
                <a href="#" className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                  <TwitterLogo size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

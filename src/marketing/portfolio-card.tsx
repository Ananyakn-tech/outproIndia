import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

interface Props { title: string; category: string; result: string; image: string; }

export function PortfolioCard({ title, category, result, image }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
      <div className="relative h-52 w-full overflow-hidden bg-muted">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute bottom-3 left-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
          {result}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">{category}</p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">{title}</h3>
        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors group-hover:text-primary">
          View Case Study <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
}

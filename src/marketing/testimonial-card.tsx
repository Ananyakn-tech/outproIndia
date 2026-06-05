import { Star } from "@phosphor-icons/react/dist/ssr";

interface Props { quote: string; author: string; company: string; role?: string; }

export function TestimonialCard({ quote, author, company, role }: Props) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-md">
      <div className="mb-5 flex gap-1">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} weight="fill" className="text-orange-400" />)}
      </div>
      <p className="flex-1 text-base leading-relaxed text-foreground">"{quote}"</p>
      <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
          {author.split(" ").map(w => w[0]).join("").slice(0,2)}
        </div>
        <div>
          <div className="text-sm font-bold">{author}</div>
          <div className="text-xs text-muted-foreground">{role ?? "Client"} · {company}</div>
        </div>
      </div>
    </div>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Container } from "./container";
import { siteConfig } from "@/src/constants/site-config";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
            <span className="text-xl font-extrabold tracking-tight">
              <span className="text-primary">Outpro</span>.India
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Digital Solutions</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {siteConfig.navigation.map((item) => (
              <Link key={item.href} href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === item.href ? "text-primary" : "text-muted-foreground"}`}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact"
              className="hidden rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90 md:inline-flex">
              Let's Talk →
            </Link>
            <button className="rounded-lg p-2 transition-colors hover:bg-muted md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X size={22} /> : <List size={22} />}
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div className="border-t bg-background md:hidden">
          <Container>
            <nav className="flex flex-col gap-1 py-4">
              {siteConfig.navigation.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-muted hover:text-primary ${pathname === item.href ? "bg-muted text-primary" : "text-muted-foreground"}`}>
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 px-4">
                <Link href="/contact" onClick={() => setOpen(false)}
                  className="block w-full rounded-xl bg-primary px-5 py-3 text-center text-sm font-bold text-white hover:bg-primary/90">
                  Let's Talk →
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

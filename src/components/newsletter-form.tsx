"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("pending");
    setError(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload?.error || res.statusText || "Request failed");
      }

      setStatus("success");
      setEmail("");
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder-zinc-600 outline-none focus:border-primary/50"
        required
      />
      <button type="submit" className="rounded-lg bg-primary px-3 py-2 text-xs font-bold text-white hover:bg-primary/90 transition-colors" disabled={status === "pending"}>
        {status === "pending" ? "…" : "→"}
      </button>

      {status === "success" && <span className="ml-2 text-green-400">Subscribed</span>}
      {status === "error" && <span className="ml-2 text-red-400">{error}</span>}
    </form>
  );
}

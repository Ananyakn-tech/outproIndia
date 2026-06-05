"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Surface } from "./surface";
import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";
import { company } from "../constants/company";

export function ContactFormSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("pending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company: companyName, message }),
      });

      if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload?.error || res.statusText || "Request failed");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setCompanyName("");
      setMessage("");
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
      setStatus("error");
    }
  }

  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <Surface className="p-10">
            <h2 className="mb-8 text-2xl font-semibold">Send an Inquiry</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="w-full rounded-xl border p-4"
                required
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full rounded-xl border p-4"
                required
              />

              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Company Name"
                className="w-full rounded-xl border p-4"
              />

              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project..."
                className="w-full rounded-xl border p-4"
                required
              />

              <Button size="lg" type="submit" disabled={status === "pending"}>
                {status === "pending" ? "Sending..." : "Submit Inquiry"}
              </Button>

              {status === "success" && (
                <p className="mt-2 text-green-600">Thank you — your inquiry was sent.</p>
              )}

              {status === "error" && (
                <p className="mt-2 text-red-600">Error: {error}</p>
              )}
            </form>
          </Surface>

          <Surface className="p-10">
            <h2 className="text-2xl font-semibold">Contact Information</h2>

            <div className="mt-8 space-y-8">
              <div>
                <p className="font-medium">Email</p>

                <p className="mt-2 text-muted-foreground">{company.email}</p>
              </div>

              <div>
                <p className="font-medium">Phone</p>

                <p className="mt-2 text-muted-foreground">{company.phone}</p>
              </div>

              <div>
                <p className="font-medium">Location</p>

                <p className="mt-2 text-muted-foreground">{company.location}</p>
              </div>
            </div>
          </Surface>
        </div>
      </Container>
    </Section>
  );
}
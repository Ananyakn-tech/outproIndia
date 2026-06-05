
import Link from "next/link";
import { Container } from "../components/layout/container";
import { Section } from "../components/layout/section";
import { serviceDetails } from "../data/service-details";
import { Surface } from "./surface";
import { slugify } from "@/src/lib/slugify";

export function ServicesList() {
  return (
    <Section>
      <Container>
        <div className="grid gap-6">
          {serviceDetails.map((service) => {
            const slug = slugify(service.title);

            return (
              <Surface key={service.title} className="p-10">
                <h2 className="text-3xl font-semibold">
                  <Link href={`/services/${slug}`} className="hover:text-primary">
                    {service.title}
                  </Link>
                </h2>

                <p className="mt-4 max-w-3xl text-muted-foreground">
                  {service.description}
                </p>
              </Surface>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
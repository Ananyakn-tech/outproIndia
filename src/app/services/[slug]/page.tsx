import { serviceDetails } from "@/src/data/service-details";
import { slugify } from "@/src/lib/slugify";
import { Container } from "@/src/components/layout/container";
import { Section } from "@/src/components/layout/section";
import { Surface } from "@/src/marketing/surface";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default function ServicePage({ params }: Props) {
  const { slug } = params;
  const service = serviceDetails.find((s) => slugify(s.title) === slug);

  if (!service) {
    return (
      <Section>
        <Container>
          <p>Service not found.</p>
          <p>
            <Link href="/services">Back to services</Link>
          </p>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <Surface className="p-10">
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <div className="prose max-w-none">
            <p>{service.description}</p>
            <p>
              For a custom quote or questions about this service, please reach out via the <Link href="/contact">contact form</Link>.
            </p>
          </div>
        </Surface>
      </Container>
    </Section>
  );
}

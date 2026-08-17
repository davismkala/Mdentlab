import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section } from "@/components/mdent/Sections";
import { EyebrowHeading } from "@/components/mdent/Eyebrow";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Our Clients | MDent: Middle East Dental Laboratory";
const description =
  "Dental clinics across the UAE, GCC and worldwide trust MDent for their restorations.";

export const Route = createFileRoute("/our-clients")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-clients" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/our-clients" }],
  }),
  component: Page,
});

const REGIONS = [
  {
    title: "United Arab Emirates",
    text: "From single-chair practices to large multi-branch groups across Dubai, Abu Dhabi, Sharjah and the Northern Emirates.",
  },
  {
    title: "GCC",
    text: "Clinics across the wider Gulf region rely on MDent for consistent quality and dependable turnaround.",
  },
  {
    title: "East Africa",
    text: "A growing base of dental practices trust MDent's digital workflow and worldwide delivery for their restorations.",
  },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Why MDent" title="Our Clients" image={IMAGES.closing} />

      <Section>
        <EyebrowHeading
          eyebrow="Who We Serve"
          heading="Trusted by Clinics of Every Size, Across the Region"
        />
        <p className="measure mt-8 text-base leading-relaxed text-muted-foreground">
          We work with clinics of every size, from single-chair practices to large multi-branch
          groups, providing the same level of care and craftsmanship regardless of order volume.
          Whatever the scale of your practice, your cases get the same standard.
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {REGIONS.map((r) => (
            <div key={r.title}>
              <h3 className="text-lg text-navy">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <PlusLink to="/booking-form" variant="solid">
            Get in Touch
          </PlusLink>
        </div>
      </Section>
    </>
  );
}

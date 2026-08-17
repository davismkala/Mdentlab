import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section } from "@/components/mdent/Sections";
import { EyebrowHeading } from "@/components/mdent/Eyebrow";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "MDent Team | MDent: Middle East Dental Laboratory";
const description =
  "Meet the dental technicians and specialists behind Middle East Dental Laboratory.";

export const Route = createFileRoute("/mdent-team")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mdentlab.com/mdent-team" },
      { property: "og:image", content: IMAGES.technicians },
      { name: "twitter:image", content: IMAGES.technicians },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mdentlab.com/mdent-team" }],
  }),
  component: Page,
});

const DEPARTMENTS = [
  {
    title: "Ceramics & Aesthetics",
    text: "Technicians specialising in shade, layering and characterisation for crowns, veneers and full smile cases.",
  },
  {
    title: "CAD/CAM Design",
    text: "Digital designers working from scan and impression data to design every restoration before it's milled or printed.",
  },
  {
    title: "Implants & Full-Arch",
    text: "A dedicated team for implant restorations, surgical guides and complex full-arch rehabilitation cases.",
  },
  {
    title: "Removables",
    text: "Specialists in dentures, chrome frameworks and removable orthodontic appliances.",
  },
  {
    title: "Quality Control",
    text: "Every case is checked for fit, shade and finish against your prescription before it leaves the lab.",
  },
  {
    title: "Client Services",
    text: "Your point of contact for case status, logistics, and anything else you need from our lab.",
  },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="People" title="MDent Team" image={IMAGES.technicians}>
        <p>
          Behind every case is a team of certified dental technicians, CAD/CAM designers and
          specialists, organised by discipline. Your case gets the attention of someone who works on
          exactly that kind of restoration every day.
        </p>
      </PageHero>

      <Section>
        <EyebrowHeading eyebrow="Our Departments" heading="A Specialist for Every Case" />
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS.map((d) => (
            <div key={d.title}>
              <h3 className="text-lg text-navy">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <PlusLink to="/careers" variant="outline">
            Join Our Team
          </PlusLink>
        </div>
      </Section>
    </>
  );
}

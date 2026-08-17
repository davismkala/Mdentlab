import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "5 Year Warranty | MDent: Middle East Dental Laboratory";
const description =
  "MDent's five year warranty on dental restorations for clinics across the UAE and GCC.";

export const Route = createFileRoute("/5-year-warranty")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/5-year-warranty" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/5-year-warranty" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Get Started" title="5 Year Warranty" image={IMAGES.crownsHero}>
        <p>
          Every restoration produced by MDent is backed by a five-year warranty against
          manufacturing defects. That's how confident we are in the materials and craftsmanship
          behind every case we produce.
        </p>
        <div className="mt-8">
          <PlusLink to="/contact-us" variant="solid">
            Contact Us
          </PlusLink>
        </div>
      </PageHero>

      <Section>
        <NumberedBenefitList
          items={[
            {
              lead: "What's Covered:",
              text: "Manufacturing defects in materials or workmanship, including fracture or delamination not attributable to trauma, bruxism, or a change in the patient's clinical situation.",
            },
            {
              lead: "Warranty Period:",
              text: "Five years from the date the completed restoration is delivered to your clinic.",
            },
            {
              lead: "How to Make a Claim:",
              text: "Contact our team with the case reference, a description of the issue, and photographs where possible. We'll advise on next steps.",
            },
            {
              lead: "What Isn't Covered:",
              text: "Damage from trauma, uncontrolled bruxism without a protective night guard, changes to the patient's occlusion or health, or restorations altered after leaving our laboratory.",
            },
          ]}
        />
        <p className="measure mt-10 text-base leading-relaxed text-muted-foreground">
          Questions about a specific case or claim? Reach out via our{" "}
          <a href="/contact-us" className="text-teal underline underline-offset-4">
            Contact Us
          </a>{" "}
          page and our team will help.
        </p>
      </Section>
    </>
  );
}

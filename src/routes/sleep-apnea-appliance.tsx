import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Sleep Apnea Appliance | MDent: Middle East Dental Laboratory";
const description = "Custom sleep apnea appliances manufactured by MDent in Dubai.";

export const Route = createFileRoute("/sleep-apnea-appliance")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sleep-apnea-appliance" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sleep-apnea-appliance" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Sleep Apnea Appliance" image={IMAGES.technicians}>
        <p>
          For patients with mild to moderate obstructive sleep apnea or snoring who aren't
          candidates for CPAP therapy, or simply can't tolerate it, a custom mandibular advancement
          device can be a well-tolerated alternative. MDent fabricates these appliances to your
          prescription from precise impressions or scans and a recorded bite in the advanced
          position.
        </p>
        <div className="mt-8">
          <PlusLink to="/booking-form" variant="solid">
            Get in Touch
          </PlusLink>
        </div>
      </PageHero>

      <Section>
        <NumberedBenefitList
          items={[
            {
              lead: "Custom-Fit to Each Patient:",
              text: "Built from an accurate impression or digital scan and a recorded protrusive bite for a comfortable, well-retained fit.",
            },
            {
              lead: "Durable, Biocompatible Materials:",
              text: "Fabricated in materials designed for nightly wear, resistant to staining and odour over time.",
            },
            {
              lead: "Adjustable Advancement:",
              text: "Many designs allow incremental titration of the mandibular advancement to fine-tune comfort and effectiveness.",
            },
          ]}
        />
      </Section>
    </>
  );
}

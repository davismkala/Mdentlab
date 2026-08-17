import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Night Guards | MDent — Middle East Dental Laboratory";
const description =
  "Custom night guards for bruxism, produced by MDent Dubai for clinics across the UAE.";

export const Route = createFileRoute("/night-guards")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/night-guards" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/night-guards" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Night Guards" image={IMAGES.technicians}>
        <p>
          Bruxism wears down teeth and restorations faster than almost anything else in daily
          practice. MDent fabricates custom night guards — hard, soft, or dual-laminate — designed
          to protect your patients' dentition and any existing restorative work while they sleep.
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
              lead: "Custom Fit, Every Time:",
              text: "Built from your patient's impression or scan for a snug, secure fit that won't shift overnight.",
            },
            {
              lead: "Material Matched to the Case:",
              text: "Hard acrylic for heavy bruxers, soft or dual-laminate for lighter clenching — we fabricate to your prescription.",
            },
            {
              lead: "Protects Restorative Investment:",
              text: "A well-fitted guard protects crowns, veneers and natural enamel alike from nightly wear.",
            },
          ]}
        />
      </Section>
    </>
  );
}

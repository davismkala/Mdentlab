import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Inlay/Onlay | MDent: Middle East Dental Laboratory";
const description =
  "Precision inlays and onlays produced by MDent, the leading dental laboratory in Dubai.";

export const Route = createFileRoute("/inlay-onlay")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/inlay-onlay" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/inlay-onlay" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Inlay/Onlay" image={IMAGES.crownsHero}>
        <p>
          When a tooth is too damaged for a filling but doesn't need a full crown, an inlay or onlay
          is often the more conservative, tooth-preserving answer. MDent produces both in zirconia
          and lithium disilicate, milled to fit precisely into the prepared cavity.
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
              lead: "Conservative by Design:",
              text: "Inlays and onlays preserve more natural tooth structure than a full crown, restoring only the damaged cusp or occlusal surface.",
            },
            {
              lead: "Strong, Long-Lasting Materials:",
              text: "Produced in zirconia or lithium disilicate (E.max) for strength and a natural, translucent appearance that blends with the surrounding tooth.",
            },
            {
              lead: "Milled for a Precise Marginal Fit:",
              text: "CAD/CAM design and milling means an accurate seat with minimal chairside adjustment.",
            },
            {
              lead: "Ideal for Posterior Restorations:",
              text: "Built to withstand the higher biting forces of molars and premolars without the added tooth reduction a crown requires.",
            },
          ]}
        />
      </Section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Shade Matching | MDent: Middle East Dental Laboratory";
const description = "Professional shade matching services at MDent's dental laboratory in Dubai.";

export const Route = createFileRoute("/shade-matching")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/shade-matching" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/shade-matching" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Shade Matching" image={IMAGES.crownsHero}>
        <p>
          A technically perfect crown that doesn't match its neighbours is still a remake. MDent
          verifies shade against your submitted reference, whether that's a physical tab, digital
          scan shade capture, or clinical photography, before a case leaves our laboratory.
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
              lead: "Multiple Reference Methods:",
              text: "We work from classic shade tabs, digital scanner shade capture, or clinical photographs. Send whichever your workflow supports.",
            },
            {
              lead: "Complex Cases Welcome:",
              text: "Multi-shade anterior cases, characterisation requests and custom staining are all handled by our ceramics team.",
            },
            {
              lead: "Verified Before Shipping:",
              text: "Shade is checked against your reference under controlled lighting before the case is finalised.",
            },
            {
              lead: "Adjustments When Needed:",
              text: "If a shade needs fine-tuning after chairside try-in, let us know and we'll work with you to get it right.",
            },
          ]}
        />
      </Section>
    </>
  );
}

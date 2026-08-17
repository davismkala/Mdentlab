import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Sports Guards | MDent: Middle East Dental Laboratory";
const description =
  "Custom-fitted sports mouth guards from MDent, Dubai's leading dental laboratory.";

export const Route = createFileRoute("/sports-guards")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sports-guards" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sports-guards" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Sports Guards" image={IMAGES.technicians}>
        <p>
          Off-the-shelf mouth guards rarely fit well and often get left in a bag. MDent fabricates
          custom sports guards from an impression or scan, built to stay in place, allow clear
          speech and breathing, and genuinely protect against impact.
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
              lead: "Custom Fit for Real-World Wear:",
              text: "A guard that fits precisely gets worn. One that's bulky or loose doesn't, no matter how protective it is on paper.",
            },
            {
              lead: "Colours and Branding on Request:",
              text: "Single or dual-colour options available for teams and individual athletes.",
            },
            {
              lead: "Durable Construction:",
              text: "Fabricated to withstand repeated impact across a full season, not just a few sessions.",
            },
          ]}
        />
      </Section>
    </>
  );
}

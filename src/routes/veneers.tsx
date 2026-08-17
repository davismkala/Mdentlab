import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { ImageTextSection, NumberedBenefitList, Section } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";

const title = "Veneers | MDent: Middle East Dental Laboratory";
const description =
  "High-quality dental veneers crafted in Dubai by MDent: fit, durability and natural beauty for every case.";

export const Route = createFileRoute("/veneers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mdentlab.com/veneers" },
      {
        property: "og:image",
        content:
          "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/veneers.jpg?w=1200&ssl=1",
      },
      {
        name: "twitter:image",
        content:
          "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/veneers.jpg?w=1200&ssl=1",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mdentlab.com/veneers" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Veneers">
        <p>
          A great veneer case comes down to two things: the material, and the technician behind it.
          MDent crafts every veneer to the exact shade, translucency and contour your case calls
          for, thin enough to preserve healthy tooth structure, strong enough to hold up for years.
        </p>
        <div className="mt-8">
          <PlusLink to="/booking-form" variant="solid">
            Get in Touch
          </PlusLink>
        </div>
      </PageHero>

      <ImageTextSection
        id="Lithiumv"
        eyebrow="Veneer Material"
        heading="Lithium Disilicate (E.Max) Veneers"
        image="https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/veneers.jpg?w=1200&ssl=1"
        alt="Lithium disilicate E.Max veneers crafted by MDent"
        cta={{ label: "Get in Touch", to: "/booking-form" }}
      >
        <p>
          E.max is our default veneer material for good reason. Its natural translucency mimics
          enamel far more convincingly than older feldspathic or pressed-ceramic options, and its
          strength gives dentists room to prep conservatively without worrying about chipping down
          the line.
        </p>
        <p>
          Every veneer is layered and characterised by hand to match the shade tab or digital scan
          you send us, then verified against your instructions before it ships. What arrives at your
          chair is what you specified, not an approximation.
        </p>
      </ImageTextSection>

      <Section tone="sand" className="pt-0">
        <NumberedBenefitList
          items={[
            {
              lead: "Minimal Prep, Maximum Aesthetics:",
              text: "E.max's strength allows for thinner veneers, meaning less enamel removal for your patient while still delivering a bright, natural result.",
            },
            {
              lead: "True-to-Sample Shade Matching:",
              text: "We match to physical shade tabs, digital scans, or reference photography, with a shade verification step before every case ships.",
            },
            {
              lead: "Consistent Fit, Case After Case:",
              text: "CAD/CAM design and milling means the fit you get on case one is the fit you get on case one hundred.",
            },
            {
              lead: "Built for Smile Design Cases:",
              text: "Veneers pair naturally with our smile design and digital impression workflows for full smile makeovers, not just single-tooth cases.",
            },
            {
              lead: "Fast, Reliable Turnaround:",
              text: "Produced in our Dubai laboratory and shipped directly to your clinic, with clear timelines communicated up front.",
            },
          ]}
        />
      </Section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { ImageTextSection, Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";

const title = "Dentures | MDent: Middle East Dental Laboratory";
const description =
  "Acrylic, flexible and chrome RPD dentures crafted by MDent in Dubai for exceptional fit and comfort.";

export const Route = createFileRoute("/dentures")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mdentlab.com/dentures" },
      {
        property: "og:image",
        content:
          "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/dentures.jpg?w=1200&ssl=1",
      },
      {
        name: "twitter:image",
        content:
          "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/dentures.jpg?w=1200&ssl=1",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mdentlab.com/dentures" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Dentures">
        <p>
          Comfort and fit are what patients remember about a denture, good or bad. MDent produces
          acrylic, flexible and chrome RPD dentures built around accurate impressions and careful
          bite registration, so your patients get a denture that fits from the first visit.
        </p>
        <div className="mt-8">
          <PlusLink to="/booking-form" variant="solid">
            Get in Touch
          </PlusLink>
        </div>
      </PageHero>

      <ImageTextSection
        id="acrylic"
        eyebrow="Denture Type"
        heading="Acrylic Dentures"
        image="https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/dentures.jpg?w=1200&ssl=1"
        alt="Acrylic denture crafted by MDent"
        cta={{ label: "Get in Touch", to: "/booking-form" }}
      >
        <p>
          Our full and partial acrylic dentures are set up with natural tooth shade, arrangement and
          gum contouring for a lifelike result. Whether it's a complete denture or an acrylic-based
          partial, each case is processed and finished to a smooth, hygienic surface your patients
          will find comfortable from day one.
        </p>
      </ImageTextSection>

      <ImageTextSection
        id="flexible"
        tone="sand"
        imageSide="right"
        eyebrow="Denture Type"
        heading="Flexible Dentures"
        cta={{ label: "Get in Touch", to: "/booking-form" }}
      >
        <p>
          Flexible partial dentures use a thermoplastic base material that flexes with the mouth's
          natural movement, without the visible metal clasps of a traditional RPD. They're a popular
          choice for patients who want a lighter, more discreet partial without compromising
          retention.
        </p>
      </ImageTextSection>

      <ImageTextSection
        id="chrome"
        eyebrow="Denture Type"
        heading="Chrome RPD (Removable Partial Denture)"
        cta={{ label: "Get in Touch", to: "/booking-form" }}
      >
        <p>
          For cases that need the strength and precision of a cast metal framework, our chrome
          cobalt RPDs are designed for accurate clasp placement and a rigid, stable fit, built to
          distribute biting forces evenly and protect the remaining natural dentition over the long
          term.
        </p>
      </ImageTextSection>

      <Section tone="sand" className="pt-0">
        <NumberedBenefitList
          items={[
            {
              lead: "Accurate Bite Registration:",
              text: "We work closely with your recorded bite and occlusal plane to avoid the most common source of denture remakes: a bite that's off.",
            },
            {
              lead: "Natural Tooth Set-Up:",
              text: "Shade, mould and arrangement are selected to suit your patient's age, facial structure and preferences, not a one-size-fits-all default.",
            },
            {
              lead: "Material Options for Every Case:",
              text: "From full acrylic dentures to flexible partials to cast chrome frameworks, we match the material to the clinical situation.",
            },
            {
              lead: "Dependable Turnaround:",
              text: "Produced in-house in our Dubai laboratory, with realistic timelines communicated at case submission.",
            },
          ]}
        />
      </Section>
    </>
  );
}

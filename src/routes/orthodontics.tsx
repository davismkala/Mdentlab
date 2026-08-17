import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { ImageTextSection, Section } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Orthodontics | MDent — Middle East Dental Laboratory";
const description =
  "Fixed and removable orthodontic appliances and retainers produced by MDent Dubai.";

export const Route = createFileRoute("/orthodontics")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/orthodontics" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/orthodontics" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Orthodontics" image={IMAGES.technicians}>
        <p>
          MDent produces fixed and removable orthodontic appliances and retainers for clinics across
          the UAE and GCC — precise, well-fitted work built to your prescription, whether the case
          calls for a traditional appliance or a clear alternative.
        </p>
        <div className="mt-8">
          <PlusLink to="/booking-form" variant="solid">
            Get in Touch
          </PlusLink>
        </div>
      </PageHero>

      <ImageTextSection
        id="fixed"
        eyebrow="Orthodontic Appliance"
        heading="Fixed Appliances"
        cta={{ label: "Get in Touch", to: "/booking-form" }}
      >
        <p>
          From space maintainers to expansion appliances, we fabricate fixed orthodontic devices to
          precise measurements taken from your impressions or scans, cemented and ready to seat at
          chairside.
        </p>
      </ImageTextSection>

      <ImageTextSection
        id="removable"
        tone="sand"
        imageSide="right"
        eyebrow="Orthodontic Appliance"
        heading="Removable Appliances"
        cta={{ label: "Get in Touch", to: "/booking-form" }}
      >
        <p>
          Removable appliances — including expansion plates and functional appliances — are built
          for a snug, comfortable fit that supports patient compliance, which is often the deciding
          factor in case success.
        </p>
      </ImageTextSection>

      <ImageTextSection
        id="retainers"
        eyebrow="Orthodontic Appliance"
        heading="Retainers"
        cta={{ label: "Get in Touch", to: "/booking-form" }}
      >
        <p>
          Hawley, essix and bonded retainers, fabricated to hold post-treatment results in place.
          Precise fit matters here more than almost anywhere else in orthodontics — a loose retainer
          is a relapse waiting to happen.
        </p>
      </ImageTextSection>

      <Section tone="sand" className="pt-0">
        <p className="measure text-base leading-relaxed text-muted-foreground">
          MDent is also a certified Inman Aligner laboratory. See our{" "}
          <a href="/inman-aligner" className="text-teal underline underline-offset-4">
            Inman Aligner
          </a>{" "}
          page for a faster route to anterior alignment cases.
        </p>
      </Section>
    </>
  );
}

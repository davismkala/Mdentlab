import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { ImageTextSection, Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Digital Products | MDent: Middle East Dental Laboratory";
const description =
  "CAD design, model printing and digital dental workflows from MDent's Dubai laboratory.";

export const Route = createFileRoute("/digital-products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mdentlab.com/digital-products" },
      { property: "og:image", content: IMAGES.technicians },
      { name: "twitter:image", content: IMAGES.technicians },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mdentlab.com/digital-products" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Digital Products" image={IMAGES.technicians}>
        <p>
          MDent's digital workflow runs from the first scan through to the finished restoration: CAD
          design, model printing, smile design and surgical guides, all produced in-house on the
          same equipment, by the same team, so nothing gets lost in translation between steps.
        </p>
        <div className="mt-8">
          <PlusLink to="/booking-form" variant="solid">
            Get in Touch
          </PlusLink>
        </div>
      </PageHero>

      <ImageTextSection
        id="cad"
        eyebrow="Digital Product"
        heading="CAD Design"
        cta={{ label: "Get in Touch", to: "/booking-form" }}
      >
        <p>
          Every crown, bridge, veneer and framework we produce starts life as a digital design. Our
          CAD technicians work from your scan or impression to design restorations with accurate
          margins, contact points and occlusion, reviewed against your instructions before anything
          is milled or printed.
        </p>
      </ImageTextSection>

      <ImageTextSection
        id="model"
        tone="sand"
        imageSide="right"
        eyebrow="Digital Product"
        heading="Model Printing"
        cta={{ label: "Get in Touch", to: "/booking-form" }}
      >
        <p>
          For clinics working digitally who still want a physical model in hand, whether for try-in,
          patient communication, or lab work that benefits from a solid cast, we 3D print
          dimensionally accurate models directly from your scan data.
        </p>
      </ImageTextSection>

      <Section className="pt-0">
        <NumberedBenefitList
          items={[
            {
              lead: "One Digital File, Start to Finish:",
              text: "Your scan drives the design, the model, and the final restoration, cutting out the compounding error that comes from multiple manual steps.",
            },
            {
              lead: "Compatible with Leading Scanners:",
              text: "We work directly with files from iTero, 3Shape, Sirona and Medit intraoral scanners.",
            },
            {
              lead: "Faster Turnaround:",
              text: "Digital workflows cut days off conventional impression-and-pour timelines for many case types.",
            },
          ]}
        />
        <p className="measure mt-10 text-base leading-relaxed text-muted-foreground">
          Looking for a full digital smile design, or an implant surgical guide? See our{" "}
          <a href="/smile-design" className="text-teal underline underline-offset-4">
            Smile Design
          </a>{" "}
          and{" "}
          <a href="/surgical-guide" className="text-teal underline underline-offset-4">
            Surgical Guide
          </a>{" "}
          pages.
        </p>
      </Section>
    </>
  );
}

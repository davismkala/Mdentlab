import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { ImageTextSection, Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Implant Restorations | MDent — Middle East Dental Laboratory";
const description =
  "Screw-retained, cemented, Toronto bridge and bar over denture implant restorations from MDent Dubai.";

export const Route = createFileRoute("/implant-restorations")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/implant-restorations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/implant-restorations" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Implant Restorations">
        <p>
          Implant work leaves little room for error — a restoration that is off by even a fraction
          of a millimetre means a remake, a delay, and an unhappy patient. MDent's implant
          restorations are designed and milled to fit precisely to your case, across every major
          implant system.
        </p>
        <div className="mt-8">
          <PlusLink to="/booking-form" variant="solid">
            Get in Touch
          </PlusLink>
        </div>
      </PageHero>

      <ImageTextSection
        id="screw"
        eyebrow="Implant Restoration Type"
        heading="Screw-Retained Restorations"
        image="https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/implant.jpg?w=1200&ssl=1"
        alt="Screw-retained implant restoration by MDent"
        cta={{ label: "Get in Touch", to: "/booking-form" }}
      >
        <p>
          Screw-retained crowns and bridges give your patients a restoration that is fully
          retrievable — essential for cases where future maintenance, hygiene access, or adjustment
          is a priority. We design each restoration around your implant system's exact screw channel
          and torque specifications for a predictable, passive fit at seating.
        </p>
      </ImageTextSection>

      <ImageTextSection
        id="cemented"
        tone="sand"
        imageSide="right"
        eyebrow="Implant Restoration Type"
        heading="Cemented Restorations"
        image={IMAGES.crownsHero}
        alt="Cemented implant restoration by MDent"
      >
        <p>
          For cases where a screw-access channel isn't practical — often in the aesthetic zone —
          cemented restorations on custom or stock abutments give you full control over emergence
          profile and shade, with the natural, unbroken occlusal surface patients prefer.
        </p>
      </ImageTextSection>

      <Section className="pt-0">
        <NumberedBenefitList
          items={[
            {
              lead: "Every Major Implant System:",
              text: "We work to the library files and specifications of the leading implant systems used across UAE and GCC clinics — send us your system and connection type and we'll take it from there.",
            },
            {
              lead: "Passive, Verified Fit:",
              text: "Frameworks and abutments are checked for passive fit before ceramic work begins, reducing chairside adjustment time.",
            },
            {
              lead: "Digital or Conventional Workflow:",
              text: "Send an intraoral scan or a physical implant-level impression — either way, the case is designed and milled to the same standard.",
            },
          ]}
        />
      </Section>

      <ImageTextSection
        id="toronto"
        tone="dark"
        eyebrow="Implant Restoration Type"
        heading="Toronto Bridge"
        cta={{ label: "Get in Touch", to: "/booking-form" }}
      >
        <p>
          For full-arch, implant-supported rehabilitation, our Toronto bridge restorations combine a
          milled titanium or zirconia framework with a pink and white aesthetic layer designed to
          replicate natural gum tissue and dentition. It's a fixed, non-removable solution built to
          restore both function and confidence for edentulous or near-edentulous patients.
        </p>
      </ImageTextSection>

      <ImageTextSection
        id="bar"
        tone="sand"
        imageSide="right"
        eyebrow="Implant Restoration Type"
        heading="Implant Bar Over Denture (Implant-Supported Denture)"
        cta={{ label: "Get in Touch", to: "/booking-form" }}
      >
        <p>
          An implant bar provides the stability of a fixed restoration with the practicality of a
          removable one. We mill precision bars designed around your chosen attachment system, so
          the finished denture seats securely and stays that way case after case.
        </p>
        <p>
          Planning an implant-supported case from the surgical stage onward? Our{" "}
          <a href="/surgical-guide" className="text-teal underline underline-offset-4">
            surgical guide service
          </a>{" "}
          plans implant position digitally before the first drill touches bone.
        </p>
      </ImageTextSection>
    </>
  );
}

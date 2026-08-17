import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Surgical Guide | MDent: Middle East Dental Laboratory";
const description =
  "3D printed implant surgical guides from MDent, the leading dental lab in Dubai.";

export const Route = createFileRoute("/surgical-guide")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mdentlab.com/surgical-guide" },
      { property: "og:image", content: IMAGES.technicians },
      { name: "twitter:image", content: IMAGES.technicians },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mdentlab.com/surgical-guide" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Surgical Guide" image={IMAGES.technicians}>
        <p>
          Implant placement is only as accurate as the plan behind it. MDent designs and 3D prints
          surgical guides from your CBCT and intraoral scan data, so implant position, angulation
          and depth are mapped out digitally before surgery begins.
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
              lead: "Digitally Planned Implant Placement:",
              text: "Position, angulation and depth are planned on your CBCT and scan data before the guide is ever printed.",
            },
            {
              lead: "3D Printed In-House:",
              text: "Guides are printed and finished in our Dubai laboratory, keeping design and production under one roof.",
            },
            {
              lead: "Works with Your Existing Data:",
              text: "Send us your CBCT (DICOM) and intraoral scan files, and we'll handle the merge and guide design from there.",
            },
            {
              lead: "Supports Predictable, Efficient Surgery:",
              text: "A well-planned guide reduces chair time and surprises during placement, for you and for your patient.",
            },
          ]}
        />
      </Section>
    </>
  );
}

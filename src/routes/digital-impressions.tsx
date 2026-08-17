import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Digital Impressions | MDent: Middle East Dental Laboratory";
const description =
  "How to send digital impressions to MDent from iTero, 3Shape, Sirona and Medit scanners.";

export const Route = createFileRoute("/digital-impressions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/digital-impressions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/digital-impressions" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Digital Impressions" image={IMAGES.technicians}>
        <p>
          MDent's laboratory is fully equipped to receive digital impressions directly from{" "}
          <a
            href="https://www.itero.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-teal-soft underline underline-offset-4"
          >
            iTero
          </a>
          ,{" "}
          <a
            href="https://www.3shape.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-teal-soft underline underline-offset-4"
          >
            3Shape
          </a>
          , Sirona and Medit scanners. No impression trays, no shipping delays, and one less
          variable between your prep and the finished restoration.
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
              lead: "Send the Scan Directly:",
              text: "Export from your scanner's software and send the case straight to our lab. No physical shipment required.",
            },
            {
              lead: "Faster Turnaround:",
              text: "Skipping courier time on the impression itself typically shaves days off the overall case timeline.",
            },
            {
              lead: "Fewer Distortion Risks:",
              text: "Digital scans avoid the material shrinkage, tearing and pour-timing issues that can affect a conventional impression.",
            },
            {
              lead: "One Workflow for Everything:",
              text: "The same scan drives CAD design, model printing and the finished restoration. See our Digital Products page for the full workflow.",
            },
          ]}
        />
      </Section>
    </>
  );
}

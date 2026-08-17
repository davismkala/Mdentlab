import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Smile Design | MDent: Middle East Dental Laboratory";
const description = "Digital smile design services for dental clinics from MDent Dubai.";

export const Route = createFileRoute("/smile-design")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/smile-design" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/smile-design" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Smile Design" image={IMAGES.technicians}>
        <p>
          For full smile makeover cases, MDent's digital smile design service lets you show your
          patient the planned outcome before a single tooth is prepared, building confidence in the
          treatment plan and giving our ceramics team a clear target to design toward.
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
              lead: "Digital Mock-Up from Your Scan:",
              text: "We design the proposed smile digitally, referencing facial proportions, lip line and your patient's preferences.",
            },
            {
              lead: "Patient Buy-In Before Prep:",
              text: "A visual mock-up helps patients understand and approve the plan before treatment begins.",
            },
            {
              lead: "Direct Line to Production:",
              text: "The approved design carries straight through into veneer or crown fabrication, keeping the final result aligned with what was agreed.",
            },
          ]}
        />
      </Section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "ClearSmile Aligners | MDent — Middle East Dental Laboratory";
const description =
  "ClearSmile clear aligners produced by MDent for dental clinics in the UAE and GCC.";

export const Route = createFileRoute("/clearsmile-aligners")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/clearsmile-aligners" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/clearsmile-aligners" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="ClearSmile Aligners" image={IMAGES.technicians}>
        <p>
          MDent produces ClearSmile clear aligners for clinics looking to offer a discreet
          orthodontic option alongside traditional appliances. From your scan, we plan the
          tooth-movement sequence and manufacture the full series of aligners for your case.
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
              lead: "Digital Treatment Planning:",
              text: "Case set-up is planned from your intraoral scan, with the movement sequence reviewed before manufacturing begins.",
            },
            {
              lead: "Discreet, Removable Treatment:",
              text: "A clear alternative to fixed appliances for suitable cases, with the flexibility patients want.",
            },
            {
              lead: "Full Series, Produced In-House:",
              text: "The complete set of aligners for a case is manufactured together, keeping your treatment timeline on track.",
            },
          ]}
        />
      </Section>
    </>
  );
}

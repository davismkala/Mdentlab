import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Inman Aligner | MDent: Middle East Dental Laboratory";
const description =
  "MDent is a certified Inman Aligner laboratory serving clinics across the UAE and GCC.";

export const Route = createFileRoute("/inman-aligner")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/inman-aligner" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/inman-aligner" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Inman Aligner" image={IMAGES.technicians}>
        <p>
          MDent is a certified{" "}
          <a
            href="https://inmanaligner.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-teal-soft underline underline-offset-4"
          >
            Inman Aligner
          </a>{" "}
          laboratory, giving UAE clinics access to a removable appliance built specifically for fast
          anterior alignment. Cases often finish in weeks, not the months a traditional appliance
          can take.
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
              lead: "Fast Anterior Alignment:",
              text: "Purpose-built for correcting mild-to-moderate anterior crowding and rotations quickly.",
            },
            {
              lead: "Removable and Comfortable:",
              text: "A spring-driven, removable appliance rather than fixed brackets and wires.",
            },
            {
              lead: "Certified Laboratory Production:",
              text: "Fabricated to Inman Aligner specifications by our certified team, from your impression or scan.",
            },
            {
              lead: "One Supplier for More Cases:",
              text: "Broaden the orthodontic and cosmetic options you can offer without adding another lab to your workflow.",
            },
          ]}
        />
      </Section>
    </>
  );
}

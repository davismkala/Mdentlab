import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Regular Impressions | MDent — Middle East Dental Laboratory";
const description = "How to send conventional impressions to MDent's dental laboratory in Dubai.";

export const Route = createFileRoute("/regular-impressions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/regular-impressions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/regular-impressions" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="Regular Impressions" image={IMAGES.technicians}>
        <p>
          Not every clinic has gone fully digital, and not every case calls for it — MDent accepts
          conventional PVS and alginate impressions from clinics across the UAE and GCC, with the
          same attention to accuracy at every step from pour to model to finished restoration.
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
              lead: "Careful Handling, Start to Finish:",
              text: "Impressions are logged, inspected for accuracy, and poured promptly on arrival to avoid material distortion.",
            },
            {
              lead: "Reliable Courier Pickup:",
              text: "Coordinate a pickup for your case, or drop it with our courier partners — either way, it's tracked from your clinic to our lab.",
            },
            {
              lead: "Clear Case Documentation:",
              text: "Include your prescription, shade, and any reference photos so nothing gets left to interpretation.",
            },
          ]}
        />
        <p className="measure mt-10 text-base leading-relaxed text-muted-foreground">
          Already scanning digitally? See our{" "}
          <a href="/digital-impressions" className="text-teal underline underline-offset-4">
            Digital Impressions
          </a>{" "}
          page for how to send a case straight from your intraoral scanner.
        </p>
      </Section>
    </>
  );
}

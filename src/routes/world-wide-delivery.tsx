import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section, NumberedBenefitList } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "World Wide Delivery | MDent: Middle East Dental Laboratory";
const description =
  "MDent ships precision dental restorations worldwide with fast, tracked logistics.";

export const Route = createFileRoute("/world-wide-delivery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/world-wide-delivery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/world-wide-delivery" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero title="World Wide Delivery" image={IMAGES.closing}>
        <p>
          MDent's Dubai laboratory serves clinics well beyond the UAE, including a growing base of
          dental practices across East Africa and the wider GCC. Every case is packed and shipped
          with tracked, reliable logistics so it arrives on schedule, wherever your clinic is.
        </p>
        <div className="mt-8">
          <PlusLink to="/contact-us" variant="solid">
            Contact Us
          </PlusLink>
        </div>
      </PageHero>

      <Section>
        <NumberedBenefitList
          items={[
            {
              lead: "Established International Client Base:",
              text: "We already ship regularly to clinics across East Africa and the GCC, alongside our UAE client base.",
            },
            {
              lead: "Tracked, Reliable Couriers:",
              text: "Every shipment moves through trusted courier partners with tracking from our lab to your clinic door.",
            },
            {
              lead: "Careful International Packing:",
              text: "Cases are packed to withstand longer transit times without compromising fit or finish on arrival.",
            },
            {
              lead: "Clear Communication on Timelines:",
              text: "We'll give you a realistic delivery estimate up front, factoring in your location and shipping method.",
            },
          ]}
        />
        <p className="measure mt-10 text-base leading-relaxed text-muted-foreground">
          Shipping to a new country or want to confirm delivery times for your clinic? Reach out via
          our{" "}
          <a href="/contact-us" className="text-teal underline underline-offset-4">
            Contact Us
          </a>{" "}
          page and we'll confirm logistics for your case.
        </p>
      </Section>
    </>
  );
}

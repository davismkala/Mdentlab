import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section } from "@/components/mdent/Sections";
import { SocialIcons } from "@/components/mdent/SocialIcons";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Upcoming Events | MDent — Middle East Dental Laboratory";
const description =
  "Upcoming CME courses and dental events hosted by Middle East Dental Laboratory.";

export const Route = createFileRoute("/upcoming-events")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/upcoming-events" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/upcoming-events" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="CME & Events" title="Upcoming Events" image={IMAGES.technicians} />

      <Section>
        <p className="measure text-base leading-relaxed text-muted-foreground">
          MDent hosts and takes part in continuing education courses and dental exhibitions across
          the UAE and GCC through the year, covering topics from digital workflows to advanced
          restorative techniques. Our events calendar is updated regularly — follow us on social
          media or contact our team directly for the latest schedule and registration details.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <PlusLink to="/contact-us" variant="solid">
            Contact Us
          </PlusLink>
          <SocialIcons size="md" />
        </div>
      </Section>
    </>
  );
}

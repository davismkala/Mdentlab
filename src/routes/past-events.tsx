import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section } from "@/components/mdent/Sections";
import { SocialIcons } from "@/components/mdent/SocialIcons";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Past Events | MDent: Middle East Dental Laboratory";
const description = "A look back at CME courses and dental events hosted by MDent in Dubai.";

export const Route = createFileRoute("/past-events")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/past-events" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/past-events" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="CME & Events" title="Past Events" image={IMAGES.closing} />

      <Section>
        <p className="measure text-base leading-relaxed text-muted-foreground">
          Over the years, MDent has hosted and participated in CME courses and dental exhibitions
          across the UAE and GCC, sharing knowledge on digital dentistry, restorative techniques and
          lab workflows with the clinics we work with. Follow our social channels for photos and
          recaps from past events, or get in touch if you'd like details on a specific course.
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

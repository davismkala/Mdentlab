import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "Message from the Founder | MDent: Middle East Dental Laboratory";
const description = "A message from the founder of Middle East Dental Laboratory.";

export const Route = createFileRoute("/message-from-the-founder")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/message-from-the-founder" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/message-from-the-founder" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Why MDent" title="Message from the Founder" image={IMAGES.closing} />

      <Section>
        <div className="prose-mdent measure text-base leading-relaxed text-muted-foreground">
          <p>
            When we opened our doors in 1995, the promise was a simple one: give every dentist who
            trusts us with a case the same thing we'd want for our own patients, a restoration that
            fits, looks right, and arrives when we say it will.
          </p>
          <p>
            Three decades later, the technology behind our work has changed enormously, from
            hand-cast metal frameworks to CAD/CAM milling and 3D printing, but that original promise
            hasn't. Every case that comes through our laboratory, whether it's a single crown or a
            full-arch rehabilitation, gets the same attention from our technicians that it did when
            we were a much smaller operation.
          </p>
          <p>
            We've grown alongside the clinics we serve, from single-chair practices across Dubai to
            multi-branch groups across the UAE, the GCC, and increasingly, clinics further afield in
            East Africa. That growth has never been the goal in itself. It's a byproduct of doing
            the work well, case after case, and earning the trust to do it again.
          </p>
          <p>
            Thank you for considering MDent as your dental laboratory partner. We look forward to
            working with you.
          </p>
        </div>
        <div className="mt-10">
          <PlusLink to="/booking-form" variant="solid">
            Get in Touch
          </PlusLink>
        </div>
      </Section>
    </>
  );
}

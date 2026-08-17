import { PageHero } from "./Hero";
import { Section } from "./Sections";
import { PlusLink } from "./PlusLink";

/** Placeholder body for pages whose copy has not been supplied yet. */
export function ContentComing({ title }: { title: string }) {
  return (
    <>
      <PageHero title={title} />
      <Section>
        <p className="measure text-base leading-relaxed text-muted-foreground">
          Content for this page is coming soon.
        </p>
        <div className="mt-8">
          <PlusLink to="/contact-us" variant="outline">
            Contact Us
          </PlusLink>
        </div>
      </Section>
    </>
  );
}

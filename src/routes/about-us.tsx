import { createFileRoute } from "@tanstack/react-router";
import { ImageTextSection } from "@/components/mdent/Sections";
import { PageHero } from "@/components/mdent/Hero";
import { PlusLink } from "@/components/mdent/PlusLink";
import { IMAGES } from "@/lib/site";

const title = "About Us | MDent: Middle East Dental Laboratory";
const description =
  "Middle East Dental Laboratory has led dental technology in the GCC since 1995.";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mdentlab.com/about-us" },
      { property: "og:image", content: IMAGES.technicians },
      { name: "twitter:image", content: IMAGES.technicians },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mdentlab.com/about-us" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Since 1995" title="About MDent">
        <p>
          Middle East Dental Laboratory has been a vanguard of the latest advancements in dental
          technology in the GCC since 1995. Three decades spent turning impressions and scans into
          restorations that fit right the first time.
        </p>
      </PageHero>

      <ImageTextSection
        eyebrow="Our Story"
        heading="Three Decades of Craftsmanship in Dubai"
        image={IMAGES.technicians}
        alt="MDent dental technicians at work in the Dubai laboratory"
        headingLevel={2}
      >
        <p>
          What started as a small laboratory on Sheikh Zayed Road has grown into one of the region's
          most trusted dental labs, serving single-chair practices and large multi-branch groups
          alike across Dubai, the wider UAE, the GCC, and clinics as far as East Africa.
        </p>
        <p>
          Our approach has always combined two things that don't always go together: the
          craftsmanship of experienced dental technicians, and continuous investment in the latest
          CAD/CAM milling, 3D printing and digital impression technology. Neither replaces the
          other. The technology gives our team precision and speed, and our team gives every case
          the judgment a machine can't provide on its own.
        </p>
      </ImageTextSection>

      <ImageTextSection
        tone="dark"
        imageSide="right"
        eyebrow="How We Work"
        heading="A Partner, Not Just a Supplier"
        image={IMAGES.closing}
        alt="MDent laboratory in Dubai"
      >
        <p>
          We work the same way with a single-chair clinic as we do with a large multi-branch group:
          consistent quality, clear communication, and cases delivered when we say they will be.
          Every crown, veneer, implant restoration and denture that leaves our lab is backed by our
          five-year warranty and produced by certified dental technicians.
        </p>
        <div className="mt-8">
          <PlusLink to="/booking-form" variant="onDark">
            Get in Touch
          </PlusLink>
        </div>
      </ImageTextSection>
    </>
  );
}

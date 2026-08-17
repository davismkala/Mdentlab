import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/mdent/Hero";
import { ImageTextSection } from "@/components/mdent/Sections";
import { ProductsSection } from "@/components/mdent/ProductCard";
import { NewsSection } from "@/components/mdent/NewsSection";
import { IMAGES } from "@/lib/site";

const title = "Dental Lab Dubai | MDent: Middle East Dental Laboratory Since 1995";
const description =
  "MDent is the leading dental lab in Dubai since 1995. Crowns, veneers, implant restorations, dentures and digital dentistry for clinics across the UAE and GCC.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mdentlab.com/" },
      { property: "og:image", content: IMAGES.technicians },
      { name: "twitter:image", content: IMAGES.technicians },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mdentlab.com/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero
        image={IMAGES.technicians}
        alt="Middle East Dental Laboratory technicians at work in Dubai"
        headline="The leading dental lab in GCC since 1995"
        subline="Precision restorations, shipped globally with care."
        ctas={[
          { label: "Contact Us", to: "/contact-us" },
          { label: "WorldWide Clients", to: "/our-clients" },
        ]}
      />

      <ImageTextSection
        image={IMAGES.technicians}
        alt="Dental Lab Dubai - Middle East Dental Laboratory technicians at work"
        heading="The Leading Dental Lab in Dubai Since 1995"
        cta={{ label: "More About Us", to: "/about-us" }}
      >
        <p>
          MDent is the leading dental lab Dubai, trusted by clinics across the UAE since 1995.
          Located on Sheikh Zayed Road, our team of highly qualified dental technicians specialises
          in crowns, veneers, implants, dentures, and digital dental solutions, combining 30 years
          of craftsmanship with CAD/CAM and 3D printing technology.
        </p>
      </ImageTextSection>

      <ProductsSection eyebrow="Our Dental Lab Dubai" />

      <ImageTextSection
        tone="dark"
        eyebrow="Why Choose Us?"
        heading="Unmatched Expertise, Unwavering Quality!"
        cta={{ label: "More About Us", to: "/about-us" }}
      >
        <p>
          The finest dental lab restorations begin with exceptional products. At Middle East Dental
          Lab we take pride in using only the best materials.
        </p>
        <p>
          The different dental materials always combine health, well-being, and aesthetics. Thanks
          to our long experience and the new innovative production techniques in our laboratory, we
          are able to meet the most diverse demands of the profession.
        </p>
        <p>
          Our services are a combination of the latest digital techniques, such as 3D printing and{" "}
          <Link
            to="/digital-products"
            hash="cad"
            className="text-teal-soft underline underline-offset-4"
          >
            CAD design
          </Link>
          , combined with over 30 years of dental laboratory craftsmanship in Dubai. You can sure
          that the dental lab products produced in our lab in Dubai, UAE will be treated with the
          passion you and your patient deserve.
        </p>
      </ImageTextSection>

      <NewsSection />

      <ImageTextSection
        tone="sand"
        imageSide="right"
        image={IMAGES.closing}
        alt="Dental Lab UAE"
        heading="Serving UAE Dentists Since 1995"
        cta={{ label: "More About Us", to: "/about-us" }}
      >
        <p>
          Our three decades of experience in the UAE dental industry means we have seen, and solved,
          virtually every restoration challenge. We work with clinics of all sizes, from
          single-chair practices to large multi-branch groups, providing the same level of care and
          craftsmanship regardless of order volume.
        </p>
        <p>
          MDent is also a certified Inman Aligner lab and works with leading digital impression
          systems, making it easy for UAE clinics to integrate our services into their existing
          workflow with minimal disruption.
        </p>
      </ImageTextSection>
    </>
  );
}

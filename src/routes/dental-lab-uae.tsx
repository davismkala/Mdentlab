import { createFileRoute } from "@tanstack/react-router";
import { ImageTextSection } from "@/components/mdent/Sections";
import { ProductsSection } from "@/components/mdent/ProductCard";
import { NewsSection } from "@/components/mdent/NewsSection";
import { IMAGES } from "@/lib/site";

const title = "Best Dental Lab UAE | Middle East Dental Laboratory Since 1995";
const description =
  "The best Dental Lab UAE since 1995. We craft crowns, veneers, implants & dentures for clinics across Dubai, Abu Dhabi & all Emirates. Contact us today.";

export const Route = createFileRoute("/dental-lab-uae")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/dental-lab-uae" },
      { property: "og:image", content: IMAGES.technicians },
      { name: "twitter:image", content: IMAGES.technicians },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/dental-lab-uae" }],
  }),
  component: Page,
});

const linkClass = "text-teal underline underline-offset-4 hover:text-navy";

function Page() {
  return (
    <>
      <ImageTextSection
        className="pt-40"
        image={IMAGES.technicians}
        alt="Dental Lab UAE - Middle East Dental Laboratory technicians at work"
        heading="Dental Lab UAE — Precision Restorations for Clinics Across the Emirates"
        headingLevel={1}
        cta={{ label: "More About Us", to: "/about-us" }}
      >
        <p>
          MDent is the dental lab UAE clinics have trusted since 1995. Headquartered on Sheikh Zayed
          Road in Dubai, our laboratory serves dental practices across all seven Emirates — Dubai,
          Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.
        </p>
        <p>
          Every crown, veneer, implant restoration, and denture is crafted by our team of certified
          dental technicians using CAD/CAM technology and 3D printing, then delivered directly to
          your clinic with fast, reliable logistics. If you are looking for the best dental lab in
          UAE for consistent quality and dependable service, MDent is where UAE dentists come first.
        </p>
      </ImageTextSection>

      <ProductsSection
        eyebrow="Our Dental Lab UAE"
        intro="Every restoration is produced in our Dubai laboratory and delivered to your UAE clinic with efficient logistics and clear communication at every step."
      />

      <ImageTextSection
        tone="dark"
        eyebrow="Why MDent Is the Best Dental Lab in UAE"
        heading="Unmatched Expertise, Unwavering Quality!"
        cta={{ label: "More About Us", to: "/about-us" }}
      >
        <p>
          Running a busy dental practice in the UAE means you cannot afford delays, remakes, or
          inconsistent fit. That is why hundreds of UAE clinics choose MDent as their dental lab
          partner. Our Dubai laboratory is fully equipped with the latest CAD/CAM milling systems, 3D
          printers, and digital impression workflows compatible with{" "}
          <a
            href="https://www.itero.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-teal-soft underline underline-offset-4"
          >
            iTero
          </a>
          ,{" "}
          <a
            href="https://www.3shape.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-teal-soft underline underline-offset-4"
          >
            3Shape
          </a>
          , Sirona, and Medit scanners — so onboarding your clinic is seamless.
        </p>
        <p>
          We have spent over 30 years mastering the specific demands of the UAE dental market. From
          the high cosmetic expectations of Dubai and Abu Dhabi patients to the clinical precision
          required for implant cases across Sharjah and the Northern Emirates, our technicians
          deliver restorations that fit right the first time.
        </p>
        <p>
          MDent is also a certified Inman Aligner lab, offering UAE clinics access to a broader range
          of orthodontic and cosmetic solutions without juggling multiple suppliers.
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
          Our three decades of experience in the UAE dental industry means we have seen — and solved
          — virtually every restoration challenge. We work with clinics of all sizes, from
          single-chair practices to large multi-branch groups, providing the same level of care and
          craftsmanship regardless of order volume.
        </p>
        <p>
          MDent is also a certified{" "}
          <a
            href="https://inmanaligner.com/"
            target="_blank"
            rel="noreferrer noopener"
            className={linkClass}
          >
            Inman Aligner lab
          </a>{" "}
          and works with leading digital impression systems, making it easy for UAE clinics to
          integrate our services into their existing workflow with minimal disruption.
        </p>
      </ImageTextSection>
    </>
  );
}
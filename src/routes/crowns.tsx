import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import {
  ImageTextSection,
  NumberedBenefitList,
  Section,
  SubHeading,
} from "@/components/mdent/Sections";
import { EyebrowHeading } from "@/components/mdent/Eyebrow";
import { PlusLink } from "@/components/mdent/PlusLink";
import { Reveal } from "@/components/mdent/Reveal";
import { IMAGES } from "@/lib/site";

const title = "Dental Crowns Dubai | Zirconia, E.Max, PFM & Gold Crowns | MDent";
const description =
  "MDent crafts layered zirconium, zircon solid multi-layered, lithium disilicate (E.Max), PFM and gold crowns in Dubai — precision fit, strength and natural aesthetics.";

export const Route = createFileRoute("/crowns")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/crowns" },
      { property: "og:image", content: IMAGES.crownsHero },
      { name: "twitter:image", content: IMAGES.crownsHero },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/crowns" }],
  }),
  component: CrownsPage,
});

function CrownsPage() {
  return (
    <>
      <PageHero title="Crowns" image={IMAGES.crownsHero}>
        <p>
          A damaged or weakened tooth can compromise not only your smile's aesthetics but also its
          functionality. At MDent, we offer a comprehensive range of high-quality crowns to restore
          your patients' smiles and ensure optimal oral health.
        </p>
        <p>
          MDent offers a variety of crown materials to best suit your patients' needs and
          preferences.
        </p>
        <div className="mt-8">
          <PlusLink to="/booking-form" variant="solid">
            Get in Touch
          </PlusLink>
        </div>
      </PageHero>

      {/* Layered Zirconium */}
      <ImageTextSection
        id="Layered"
        eyebrow="Crown Material"
        heading="Layered Zirconium Crowns"
        image="https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/layered-zirconium.jpg?resize=1024%2C1008&ssl=1"
        alt="Layered zirconium crowns crafted by MDent"
        cta={{ label: "Get in Touch", to: "/booking-form" }}
      >
        <p>
          At MDent, we specialize in creating layered zirconium crowns that combine exceptional
          strength with natural aesthetics. Using high-quality Sagemax zirconia, we deliver
          restorations that are both durable and beautifully lifelike, making them the ideal choice
          for both anterior teeth and bridges.
        </p>
        <p>
          Our layered zirconium crowns are meticulously crafted to replicate the translucency and
          color gradients of natural teeth, ensuring a seamless integration with the patient's
          smile. The use of Sagemax zirconia ensures that our crowns are not only strong and
          resistant to chipping but also biocompatible, providing long-lasting comfort and safety.
        </p>
        <p>
          With MDent's expertise in dental restorations, you can trust that our layered zirconium
          crowns will meet the highest standards of quality and precision, delivering outstanding
          results for both you and your patients.
        </p>
      </ImageTextSection>

      <Section tone="light" className="pt-0">
        <Reveal>
          <SubHeading>Why Choose MDent Layered Zirconium Crowns?</SubHeading>
        </Reveal>
        <NumberedBenefitList
          items={[
            {
              lead: "Superior Strength and Durability:",
              text: "Sagemax zirconium is renowned for its exceptional strength, making it an ideal material for dental crowns. Our layered zirconium crowns are designed to withstand the daily wear and tear of chewing, ensuring long-lasting performance.",
            },
            {
              lead: "Natural Aesthetics:",
              text: "One of the key benefits of our layered zirconium crowns is their natural appearance. The multi-layered structure of the crowns mimics the translucency and color variations of natural teeth. Combined with our highly skilled technicians layering technique a high aestehtic result is always achived.",
            },
            {
              lead: "Precision Fit:",
              text: "Our state-of-the-art CAD/CAM technology allows us to design and manufacture zirconium crowns with unparalleled precision. This ensures a perfect fit, reducing the need for adjustments and enhancing the overall patient experience.",
            },
            {
              lead: "Versatility:",
              text: "MDent layered zirconium crowns are suitable for a wide range of dental restorations, including single crowns, bridges, and implant-supported restorations. Their versatility makes them a go-to solution for various dental needs.",
            },
            {
              lead: "Stain Resistance:",
              text: "Zirconium is naturally resistant to staining, which means your crowns will maintain their pristine appearance over time. This helps keep your patients smile bright and attractive.",
            },
          ]}
        />
        <Reveal className="prose-mdent">
          <SubHeading>Our Process</SubHeading>
          <p className="mt-4 text-muted-foreground">
            At MDent, we follow a meticulous process to ensure that each layered zirconium crown
            meets our high standards of quality and aesthetics. Our skilled technicians work closely
            with dentists to design crowns that are not only functional but also aesthetically
            pleasing. From the initial consultation to the final placement, we ensure a seamless and
            comfortable experience for your patients.
          </p>
          <SubHeading>Experience the MDent Difference</SubHeading>
          <p className="mt-4 text-muted-foreground">
            Choosing MDent layered zirconium crowns means opting for the best in dental restoration.
            Our use of Sagemax zirconium ensures that you receive crowns that are strong, beautiful,
            and biocompatible. Experience the difference with MDent and enjoy a smile that is as
            resilient as it is radiant.
          </p>
        </Reveal>
      </Section>

      {/* Zircon Solid Multi-Layered */}
      <ImageTextSection
        id="Zircon"
        tone="sand"
        imageSide="right"
        eyebrow="Crown Material"
        heading="Zircon Solid Multi-Layered Crowns"
        image="https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/zernion-solid.jpg?resize=1024%2C683&ssl=1"
        alt="Zircon solid multi-layered crowns by MDent"
      >
        <p>
          At MDent, we offer premium Zirconium Multi Solid crowns using high-quality Sagemax
          zirconium. These crowns combine strength, durability, and natural aesthetics, making them
          an excellent choice for patients seeking reliable and beautiful dental restorations.
        </p>
      </ImageTextSection>

      <Section tone="sand" className="pt-0">
        <Reveal>
          <SubHeading>Why Choose MDent Zirconium Multi Solid Crowns?</SubHeading>
        </Reveal>
        <NumberedBenefitList
          items={[
            {
              lead: "Unmatched Strength:",
              text: "Crafted from Sagemax zirconium, our Multi Solid crowns are designed to withstand everyday wear and tear, ensuring long-lasting durability.",
            },
            {
              lead: "Natural Look:",
              text: "With their multi-layered structure, these crowns replicate the natural translucency and color of real teeth, providing a seamless and attractive smile.",
            },
            {
              lead: "Precision Fit:",
              text: "Using advanced CAD/CAM technology, we ensure each crown fits perfectly, reducing the need for adjustments and enhancing comfort.",
            },
            {
              lead: "Versatile Applications:",
              text: "Our Zirconium Multi Solid crowns are ideal for a variety of dental restorations, including single crowns, bridges, and implant-supported restorations.",
            },
            {
              lead: "Stain Resistance:",
              text: "Naturally resistant to staining, these crowns maintain their pristine appearance over time, keeping your smile bright.",
            },
          ]}
        />
      </Section>

      {/* E.Max */}
      <ImageTextSection
        id="Lithiumc"
        eyebrow="Crown Material"
        heading="Lithium Disilicate (E.Max): Precision, Strength, and Aesthetics"
        image="https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/lith-crown.jpg?resize=1008%2C672&ssl=1"
        alt="Lithium disilicate E.Max crowns by MDent"
        cta={{ label: "Get in Touch", to: "/booking-form" }}
      >
        <p>
          At MDent, we are committed to delivering the highest quality dental restorations using
          only the best materials. That's why we exclusively use e.max, the leading lithium
          disilicate material on the market, for our crowns. Known for its exceptional strength,
          durability, and aesthetic appeal, e.max is the gold standard in modern dental
          restorations.
        </p>
        <p>
          <strong className="text-navy">Layered e.max Crowns for Superior Aesthetics</strong> — For
          anterior restorations and cases requiring the highest level of aesthetics, we offer
          layered e.max crowns. These crowns are meticulously crafted by our skilled technicians to
          achieve a natural translucency and lifelike appearance that blends seamlessly with the
          patient's natural teeth. The layering technique allows for enhanced customization, making
          it possible to match the unique shade and texture of each patient's smile.
        </p>
        <p>
          <strong className="text-navy">Solid e.max Crowns for Posterior Strength</strong> — For
          posterior restorations where strength and durability are paramount, we provide solid e.max
          crowns. These crowns offer the same outstanding aesthetic qualities as layered crowns but
          are designed to withstand the higher biting forces typical in the posterior region. Solid
          e.max crowns ensure long-lasting performance without compromising on appearance.
        </p>
      </ImageTextSection>

      {/* PFM */}
      <ImageTextSection
        id="pfm"
        tone="sand"
        imageSide="right"
        eyebrow="Crown Material"
        heading="PFM (Porcelain-Fused-to-Metal) Crowns"
        gallery={[
          {
            src: "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/pfm-2-scaled.jpg?w=1200&ssl=1",
            alt: "PFM crown detail",
          },
          {
            src: "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/pfm-1-scaled.jpg?w=1200&ssl=1",
            alt: "PFM crown on model",
          },
          {
            src: "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/pfm-scaled.jpg?w=1200&ssl=1",
            alt: "Porcelain-fused-to-metal restoration",
          },
        ]}
      >
        <p>
          Our Porcelain-Fused-to-Metal (PFM) crowns combine durability and natural beauty. Using
          advanced 3D printing technology, we ensure precision and quality in every restoration.
        </p>
      </ImageTextSection>

      <Section tone="sand" className="pt-0">
        <NumberedBenefitList
          items={[
            {
              lead: "Exceptional Durability:",
              text: "A robust metal core provides excellent support, ideal for both front and back teeth.",
            },
            {
              lead: "Natural Appearance:",
              text: "The porcelain overlay mimics natural teeth, seamlessly blending with your smile.",
            },
            {
              lead: "Precise Fit:",
              text: "3D printing technology ensures a perfect fit, enhancing comfort and reducing adjustments.",
            },
            {
              lead: "Versatility:",
              text: "Ideal for single crowns, bridges, and complex restorations, meeting various dental needs.",
            },
            {
              lead: "Proven Reliability:",
              text: "PFM crowns are renowned for their strength and long-term success in dental restorations.",
            },
          ]}
        />
        <Reveal>
          <p className="measure mt-10 text-base leading-relaxed text-muted-foreground">
            Opt for MDent's PFM crowns for a restoration that combines the strength of metal with
            the beauty of porcelain, enhanced by 3D printing precision
          </p>
        </Reveal>
      </Section>

      {/* Gold */}
      <ImageTextSection
        id="gold"
        eyebrow="Crown Material"
        heading="Gold Crown"
        gallery={[
          {
            src: "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/crown-gold-scaled.jpg?w=1200&ssl=1",
            alt: "Gold crown crafted by MDent",
          },
          {
            src: "https://i0.wp.com/mdentlab.com/wp-content/uploads/2024/08/crown-gold-2-scaled.jpg?w=1200&ssl=1",
            alt: "Gold crown detail",
          },
        ]}
      >
        <p>
          At MDent, we specialize in providing gold crowns known for their exceptional strength and
          biocompatibility. Crafted with meticulous attention to detail, our gold crowns offer a
          reliable solution for durable dental restorations.
        </p>
      </ImageTextSection>

      <Section className="pt-0">
        <Reveal>
          <EyebrowHeading
            heading={<span className="text-2xl sm:text-3xl">Benefits of MDent Gold Crowns</span>}
          />
        </Reveal>
        <NumberedBenefitList
          items={[
            {
              lead: "Superior Durability:",
              text: "Gold crowns are renowned for their long-lasting strength, making them an excellent choice for enduring dental restorations.",
            },
            {
              lead: "Precision Fit:",
              text: "Our skilled technicians ensure each gold crown is crafted to fit precisely, enhancing comfort and functionality.",
            },
            {
              lead: "Gentle on Teeth:",
              text: "Gold crowns are less abrasive to opposing teeth, helping to preserve overall dental health.",
            },
            {
              lead: "Versatile Applications:",
              text: "Ideal for various restorations, including single crowns, bridges, and complex dental cases.",
            },
            {
              lead: "Proven Reliability:",
              text: "With a long history of success, gold crowns are trusted for their reliability and longevity.",
            },
          ]}
        />
      </Section>
    </>
  );
}

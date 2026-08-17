import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/mdent/Hero";
import { Section } from "@/components/mdent/Sections";
import { SITE, IMAGES } from "@/lib/site";

const title = "Terms and Conditions | MDent: Middle East Dental Laboratory";
const description =
  "Terms and conditions for dental clinics working with Middle East Dental Laboratory.";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mdentlab.com/terms-and-conditions" },
      { property: "og:image", content: IMAGES.closing },
      { name: "twitter:image", content: IMAGES.closing },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mdentlab.com/terms-and-conditions" }],
  }),
  component: Page,
});

const CLAUSES = [
  {
    title: "1. Case Submission",
    text: "Cases must be submitted with a completed prescription, including material selection, shade, and any special instructions. MDent is not responsible for delays or remakes arising from incomplete or unclear case information.",
  },
  {
    title: "2. Impressions, Scans & Models",
    text: "Clinics are responsible for the accuracy of impressions and digital scans submitted. Physical impressions and models remain the property of MDent unless a return is specifically requested.",
  },
  {
    title: "3. Turnaround Times",
    text: "Estimated turnaround times are communicated at case submission and depend on case complexity, material, and current lab volume. MDent will notify the clinic promptly of any expected delay.",
  },
  {
    title: "4. Remakes & Adjustments",
    text: "Remakes required due to laboratory error are provided at no additional cost. Remakes required due to clinical factors, a change in case requirements after submission, or patient-related changes may incur additional charges.",
  },
  {
    title: "5. Warranty",
    text: "Restorations are covered under MDent's five-year warranty against manufacturing defects. See our 5 Year Warranty page for full terms.",
  },
  {
    title: "6. Payment Terms",
    text: "Payment terms are agreed with each clinic at account setup. Outstanding balances may affect processing of future cases.",
  },
  {
    title: "7. Shipping & Delivery",
    text: "MDent ships completed cases via tracked courier. Risk of loss or damage in transit is covered per the terms agreed with our courier partners; please inspect cases on arrival and report any issue promptly.",
  },
  {
    title: "8. Confidentiality",
    text: "Patient information submitted with a case is used solely for the purpose of producing the requested restoration and is handled in accordance with applicable data protection requirements.",
  },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Get Started" title="Terms and Conditions" />

      <Section>
        <p className="measure text-base leading-relaxed text-muted-foreground">
          The following terms apply to all cases submitted to Middle East Dental Laboratory (MDent).
          By submitting a case, your clinic agrees to these terms. If you have questions about any
          of the below, please contact us at{" "}
          <a href={`mailto:${SITE.email}`} className="text-teal underline underline-offset-4">
            {SITE.email}
          </a>{" "}
          before submitting your case.
        </p>

        <div className="prose-mdent mt-12 space-y-8">
          {CLAUSES.map((c) => (
            <div key={c.title}>
              <h3 className="text-lg text-navy">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Our Clients | MDent — Middle East Dental Laboratory";
const description =
  "Dental clinics across the UAE, GCC and worldwide trust MDent for their restorations.";

export const Route = createFileRoute("/our-clients")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-clients" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/our-clients" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Our Clients" />;
}

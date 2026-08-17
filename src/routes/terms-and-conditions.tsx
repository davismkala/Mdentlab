import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Terms and Conditions | MDent — Middle East Dental Laboratory";
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
      { property: "og:url", content: "/terms-and-conditions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Terms and Conditions" />;
}

import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Smile Design | MDent — Middle East Dental Laboratory";
const description = "Digital smile design services for dental clinics from MDent Dubai.";

export const Route = createFileRoute("/smile-design")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/smile-design" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/smile-design" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Smile Design" />;
}

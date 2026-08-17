import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Digital Impressions | MDent — Middle East Dental Laboratory";
const description =
  "How to send digital impressions to MDent from iTero, 3Shape, Sirona and Medit scanners.";

export const Route = createFileRoute("/digital-impressions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/digital-impressions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/digital-impressions" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Digital Impressions" />;
}

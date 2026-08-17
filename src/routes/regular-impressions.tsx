import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Regular Impressions | MDent — Middle East Dental Laboratory";
const description = "How to send conventional impressions to MDent's dental laboratory in Dubai.";

export const Route = createFileRoute("/regular-impressions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/regular-impressions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/regular-impressions" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Regular Impressions" />;
}

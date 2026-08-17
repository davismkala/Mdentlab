import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Shade Matching | MDent — Middle East Dental Laboratory";
const description = "Professional shade matching services at MDent's dental laboratory in Dubai.";

export const Route = createFileRoute("/shade-matching")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/shade-matching" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/shade-matching" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Shade Matching" />;
}

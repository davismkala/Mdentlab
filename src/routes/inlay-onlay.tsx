import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Inlay/Onlay | MDent — Middle East Dental Laboratory";
const description = "Precision inlays and onlays produced by MDent, the leading dental laboratory in Dubai.";

export const Route = createFileRoute("/inlay-onlay")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/inlay-onlay" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/inlay-onlay" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Inlay/Onlay" />;
}

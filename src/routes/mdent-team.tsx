import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "MDent Team | MDent — Middle East Dental Laboratory";
const description =
  "Meet the dental technicians and specialists behind Middle East Dental Laboratory.";

export const Route = createFileRoute("/mdent-team")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mdent-team" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/mdent-team" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="MDent Team" />;
}

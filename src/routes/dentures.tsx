import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Dentures | MDent — Middle East Dental Laboratory";
const description =
  "Acrylic, flexible and chrome RPD dentures crafted by MDent in Dubai for exceptional fit and comfort.";

export const Route = createFileRoute("/dentures")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/dentures" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/dentures" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Dentures" />;
}

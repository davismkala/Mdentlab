import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Veneers | MDent — Middle East Dental Laboratory";
const description = "High-quality dental veneers crafted in Dubai by MDent — fit, durability and natural beauty for every case.";

export const Route = createFileRoute("/veneers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/veneers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/veneers" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Veneers" />;
}

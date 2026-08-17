import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Orthodontics | MDent — Middle East Dental Laboratory";
const description = "Fixed and removable orthodontic appliances and retainers produced by MDent Dubai.";

export const Route = createFileRoute("/orthodontics")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/orthodontics" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/orthodontics" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Orthodontics" />;
}

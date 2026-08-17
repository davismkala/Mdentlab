import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "World Wide Delivery | MDent — Middle East Dental Laboratory";
const description =
  "MDent ships precision dental restorations worldwide with fast, tracked logistics.";

export const Route = createFileRoute("/world-wide-delivery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/world-wide-delivery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/world-wide-delivery" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="World Wide Delivery" />;
}

import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Upcoming Events | MDent — Middle East Dental Laboratory";
const description =
  "Upcoming CME courses and dental events hosted by Middle East Dental Laboratory.";

export const Route = createFileRoute("/upcoming-events")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/upcoming-events" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/upcoming-events" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Upcoming Events" />;
}

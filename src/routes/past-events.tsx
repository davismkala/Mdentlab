import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Past Events | MDent — Middle East Dental Laboratory";
const description = "A look back at CME courses and dental events hosted by MDent in Dubai.";

export const Route = createFileRoute("/past-events")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/past-events" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/past-events" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Past Events" />;
}

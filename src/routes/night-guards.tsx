import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Night Guards | MDent — Middle East Dental Laboratory";
const description =
  "Custom night guards for bruxism, produced by MDent Dubai for clinics across the UAE.";

export const Route = createFileRoute("/night-guards")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/night-guards" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/night-guards" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Night Guards" />;
}

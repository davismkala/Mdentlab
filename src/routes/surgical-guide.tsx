import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Surgical Guide | MDent — Middle East Dental Laboratory";
const description = "3D printed implant surgical guides from MDent, the leading dental lab in Dubai.";

export const Route = createFileRoute("/surgical-guide")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/surgical-guide" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/surgical-guide" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Surgical Guide" />;
}

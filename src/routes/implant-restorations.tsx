import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Implant Restorations | MDent — Middle East Dental Laboratory";
const description =
  "Screw-retained, cemented, Toronto bridge and bar over denture implant restorations from MDent Dubai.";

export const Route = createFileRoute("/implant-restorations")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/implant-restorations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/implant-restorations" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Implant Restorations" />;
}

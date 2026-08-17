import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Sports Guards | MDent — Middle East Dental Laboratory";
const description =
  "Custom-fitted sports mouth guards from MDent, Dubai's leading dental laboratory.";

export const Route = createFileRoute("/sports-guards")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sports-guards" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sports-guards" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Sports Guards" />;
}

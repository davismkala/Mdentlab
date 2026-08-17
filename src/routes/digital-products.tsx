import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Digital Products | MDent — Middle East Dental Laboratory";
const description =
  "CAD design, model printing and digital dental workflows from MDent's Dubai laboratory.";

export const Route = createFileRoute("/digital-products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/digital-products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/digital-products" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Digital Products" />;
}

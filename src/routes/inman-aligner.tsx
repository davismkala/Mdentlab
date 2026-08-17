import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Inman Aligner | MDent — Middle East Dental Laboratory";
const description = "MDent is a certified Inman Aligner laboratory serving clinics across the UAE and GCC.";

export const Route = createFileRoute("/inman-aligner")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/inman-aligner" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/inman-aligner" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Inman Aligner" />;
}

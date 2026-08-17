import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "5 Year Warranty | MDent — Middle East Dental Laboratory";
const description = "MDent's five year warranty on dental restorations for clinics across the UAE and GCC.";

export const Route = createFileRoute("/5-year-warranty")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/5-year-warranty" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/5-year-warranty" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="5 Year Warranty" />;
}

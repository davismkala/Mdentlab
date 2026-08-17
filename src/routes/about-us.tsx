import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "About Us | MDent — Middle East Dental Laboratory";
const description = "Middle East Dental Laboratory has led dental technology in the GCC since 1995.";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about-us" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about-us" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="About Us" />;
}

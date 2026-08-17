import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "ClearSmile Aligners | MDent — Middle East Dental Laboratory";
const description = "ClearSmile clear aligners produced by MDent for dental clinics in the UAE and GCC.";

export const Route = createFileRoute("/clearsmile-aligners")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/clearsmile-aligners" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/clearsmile-aligners" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="ClearSmile Aligners" />;
}

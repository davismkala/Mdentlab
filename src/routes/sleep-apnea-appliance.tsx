import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Sleep Apnea Appliance | MDent — Middle East Dental Laboratory";
const description = "Custom sleep apnea appliances manufactured by MDent in Dubai.";

export const Route = createFileRoute("/sleep-apnea-appliance")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sleep-apnea-appliance" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sleep-apnea-appliance" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Sleep Apnea Appliance" />;
}

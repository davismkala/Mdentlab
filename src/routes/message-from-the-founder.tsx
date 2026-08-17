import { createFileRoute } from "@tanstack/react-router";
import { ContentComing } from "@/components/mdent/ContentComing";

const title = "Message from the Founder | MDent — Middle East Dental Laboratory";
const description = "A message from the founder of Middle East Dental Laboratory.";

export const Route = createFileRoute("/message-from-the-founder")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/message-from-the-founder" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/message-from-the-founder" }],
  }),
  component: Page,
});

function Page() {
  return <ContentComing title="Message from the Founder" />;
}

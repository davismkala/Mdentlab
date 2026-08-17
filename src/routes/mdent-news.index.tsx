import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { PageHero } from "@/components/mdent/Hero";
import { Section } from "@/components/mdent/Sections";
import { NewsCard, latestPostsQuery } from "@/components/mdent/NewsSection";

const title = "MDent News | Dental Lab Insights from Middle East Dental Laboratory";
const description =
  "News, digital dentistry insights and laboratory updates from MDent: Middle East Dental Laboratory in Dubai.";

export const Route = createFileRoute("/mdent-news/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mdent-news" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/mdent-news" }],
  }),
  component: NewsIndex,
});

function NewsIndex() {
  const { data, isLoading } = useQuery(latestPostsQuery(50));
  return (
    <>
      <PageHero eyebrow="Our latest" title="MDent News" />
      <Section>
        {isLoading ? (
          <div className="grid gap-10 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="aspect-4/3 w-full animate-pulse bg-sand" />
            ))}
          </div>
        ) : (data ?? []).length === 0 ? (
          <p className="text-muted-foreground">No articles published yet.</p>
        ) : (
          <div className="grid gap-12 md:grid-cols-3">
            {(data ?? []).map((post, i) => (
              <NewsCard key={post.id} post={post} delay={i * 60} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}

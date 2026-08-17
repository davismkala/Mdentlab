import { createFileRoute, notFound } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageHero } from "@/components/mdent/Hero";
import { Section } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { formatDate, type BlogPost } from "@/components/mdent/NewsSection";

function postQuery(slug: string) {
  return {
    queryKey: ["blog_post", slug],
    queryFn: async (): Promise<BlogPost | null> => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, slug, title, excerpt, body, author_name, published_at, featured_image_url")
        .eq("slug", slug)
        .eq("is_published", true)
        .maybeSingle();
      if (error) throw error;
      return (data ?? null) as BlogPost | null;
    },
  };
}

export const Route = createFileRoute("/mdent-news/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: "MDent News | Middle East Dental Laboratory" },
      {
        name: "description",
        content: "An article from MDent: Middle East Dental Laboratory, Dubai.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/mdent-news/${params.slug}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `/mdent-news/${params.slug}` }],
  }),
  component: PostPage,
  notFoundComponent: () => (
    <>
      <PageHero title="Article not found" />
      <Section>
        <PlusLink to="/mdent-news" variant="outline">
          Back to MDent News
        </PlusLink>
      </Section>
    </>
  ),
});

function PostPage() {
  const { slug } = Route.useParams();
  const { data, isLoading, isError } = useQuery(postQuery(slug));

  if (isLoading) {
    return (
      <Section className="pt-40">
        <div className="h-8 w-2/3 animate-pulse bg-sand" />
      </Section>
    );
  }

  if (isError || !data) {
    throw notFound();
  }

  return (
    <>
      <PageHero title={data.title} image={data.featured_image_url ?? undefined}>
        <p className="text-xs uppercase tracking-[0.2em] text-navy-foreground/60">
          By {data.author_name ?? "MDent Lab"} · {formatDate(data.published_at)}
        </p>
      </PageHero>
      <Section>
        <article className="prose-mdent text-base text-muted-foreground">
          {(data.body ?? "")
            .split("\n")
            .filter(Boolean)
            .map((para, i) => (
              <p key={i}>{para}</p>
            ))}
        </article>
        <div className="mt-10">
          <PlusLink to="/mdent-news" variant="outline">
            More MDent News
          </PlusLink>
        </div>
      </Section>
    </>
  );
}

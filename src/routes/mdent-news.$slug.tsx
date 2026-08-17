import { createFileRoute, notFound } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { PageHero } from "@/components/mdent/Hero";
import { Section } from "@/components/mdent/Sections";
import { PlusLink } from "@/components/mdent/PlusLink";
import { formatDate, type BlogPost } from "@/components/mdent/NewsSection";
import { IMAGES } from "@/lib/site";

async function fetchPost(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("id, slug, title, excerpt, body, author_name, published_at, featured_image_url")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();
  if (error) throw error;
  return (data ?? null) as BlogPost | null;
}

export const Route = createFileRoute("/mdent-news/$slug")({
  loader: async ({ params }) => {
    const post = await fetchPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => {
    const url = `https://mdentlab.com/mdent-news/${params.slug}`;
    const title = loaderData
      ? `${loaderData.title} | MDent News`
      : "MDent News | Middle East Dental Laboratory";
    const description =
      loaderData?.excerpt || "An article from MDent: Middle East Dental Laboratory, Dubai.";
    const image = loaderData?.featured_image_url || IMAGES.technicians;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: image },
        { name: "twitter:image", content: image },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: PostPage,
  pendingComponent: () => (
    <Section className="pt-40">
      <div className="h-8 w-2/3 animate-pulse bg-sand" />
    </Section>
  ),
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
  const data = Route.useLoaderData();

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

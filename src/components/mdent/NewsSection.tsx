import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "./Reveal";
import { EyebrowHeading } from "./Eyebrow";
import { Section } from "./Sections";
import { PlusLink } from "./PlusLink";

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  body: string | null;
  author_name: string | null;
  published_at: string | null;
  featured_image_url: string | null;
};

export function formatDate(value: string | null) {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function latestPostsQuery(limit = 3) {
  return {
    queryKey: ["blog_posts", "latest", limit],
    queryFn: async (): Promise<BlogPost[]> => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, slug, title, excerpt, body, author_name, published_at, featured_image_url")
        .eq("is_published", true)
        .order("published_at", { ascending: false })
        .limit(limit);
      if (error) throw error;
      return (data ?? []) as BlogPost[];
    },
  };
}

export function NewsCard({ post, delay = 0 }: { post: BlogPost; delay?: number }) {
  return (
    <Reveal as="article" delay={delay} className="group">
      {post.featured_image_url ? (
        <Link to="/mdent-news/$slug" params={{ slug: post.slug }} className="block overflow-hidden">
          <img
            src={post.featured_image_url}
            alt={post.title}
            loading="lazy"
            className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
      ) : null}
      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        By {post.author_name ?? "MDent Lab"} · {formatDate(post.published_at)}
      </p>
      <h3 className="mt-3 text-xl leading-snug">
        <Link
          to="/mdent-news/$slug"
          params={{ slug: post.slug }}
          className="text-navy transition-colors hover:text-teal"
        >
          {post.title}
        </Link>
      </h3>
      {post.excerpt ? (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
      ) : null}
      <div className="mt-5">
        <PlusLink to={`/mdent-news/${post.slug}`} variant="ghost">
          Read More
        </PlusLink>
      </div>
    </Reveal>
  );
}

export function NewsSection() {
  const { data, isLoading } = useQuery(latestPostsQuery(3));

  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <EyebrowHeading eyebrow="Our latest" heading="MDent News" />
        </Reveal>
        <Link
          to="/mdent-news"
          className="text-sm font-medium uppercase tracking-[0.16em] text-teal hover:text-navy"
        >
          View all
        </Link>
      </div>
      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {isLoading
          ? [0, 1, 2].map((i) => (
              <div key={i} className="aspect-4/3 w-full animate-pulse bg-sand" />
            ))
          : (data ?? []).map((post, i) => <NewsCard key={post.id} post={post} delay={i * 80} />)}
      </div>
    </Section>
  );
}

import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { PRODUCT_CARDS } from "@/lib/site";
import { EyebrowHeading } from "./Eyebrow";
import { Section } from "./Sections";

export function ProductCard({
  title,
  to,
  image,
  text,
  delay = 0,
}: {
  title: string;
  to: string;
  image: string;
  text: string;
  delay?: number | undefined;
}) {
  return (
    <Reveal as="article" delay={delay} className="group">
      <Link to={to} className="block overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <h3 className="mt-6 text-xl">
        <Link to={to} className="text-navy transition-colors hover:text-teal">
          {title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </Reveal>
  );
}

export function ProductsSection({
  eyebrow,
  intro,
}: {
  eyebrow: string;
  intro?: string | undefined;
}) {
  return (
    <Section tone="sand">
      <Reveal>
        <EyebrowHeading eyebrow={eyebrow} heading="Products" />
        {intro ? (
          <p className="measure mt-6 text-base leading-relaxed text-muted-foreground">{intro}</p>
        ) : null}
      </Reveal>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCT_CARDS.map((p, i) => (
          <ProductCard key={p.title} {...p} delay={i * 80} />
        ))}
      </div>
    </Section>
  );
}
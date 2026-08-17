import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { EyebrowHeading } from "./Eyebrow";
import { PlusLink } from "./PlusLink";

export function Section({
  children,
  tone = "light",
  className,
  id,
}: {
  children: ReactNode;
  tone?: "light" | "sand" | "dark" | undefined;
  className?: string | undefined;
  id?: string | undefined;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-32 py-20 lg:py-28",
        tone === "sand" && "bg-sand",
        tone === "dark" && "bg-navy text-navy-foreground",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

/** Full-bleed image + text, alternating sides. */
export function ImageTextSection({
  image,
  alt,
  eyebrow,
  heading,
  headingLevel = 2,
  children,
  cta,
  imageSide = "left",
  tone = "light",
  id,
  gallery,
  className,
}: {
  image?: string | undefined;
  alt?: string | undefined;
  eyebrow?: string | undefined;
  heading: ReactNode;
  headingLevel?: 1 | 2 | 3 | undefined;
  children?: ReactNode | undefined;
  cta?: { label: string; to: string } | undefined;
  imageSide?: "left" | "right" | undefined;
  tone?: "light" | "sand" | "dark" | undefined;
  id?: string | undefined;
  gallery?: { src: string; alt: string }[] | undefined;
  className?: string | undefined;
}) {
  const onDark = tone === "dark";
  const media = gallery ? (
    <div className={cn("grid gap-4", gallery.length > 2 ? "sm:grid-cols-2" : "grid-cols-1")}>
      {gallery.map((g) => (
        <img
          key={g.src}
          src={g.src}
          alt={g.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ))}
    </div>
  ) : image ? (
    <img src={image} alt={alt ?? ""} loading="lazy" className="w-full object-cover" />
  ) : null;

  return (
    <Section tone={tone} id={id} className={className}>
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {media ? (
          <Reveal className={cn(imageSide === "right" && "lg:order-2")}>{media}</Reveal>
        ) : null}
        <Reveal delay={80} className={cn(!media && "lg:col-span-2")}>
          <EyebrowHeading
            eyebrow={eyebrow}
            heading={heading}
            level={headingLevel}
            onDark={onDark}
          />
          <div
            className={cn(
              "prose-mdent mt-8 text-base",
              onDark ? "text-navy-foreground/75" : "text-muted-foreground",
            )}
          >
            {children}
          </div>
          {cta ? (
            <div className="mt-8">
              <PlusLink to={cta.to} variant={onDark ? "onDark" : "outline"}>
                {cta.label}
              </PlusLink>
            </div>
          ) : null}
        </Reveal>
      </div>
    </Section>
  );
}

export function NumberedBenefitList({
  items,
  className,
}: {
  items: { lead: string; text: string }[];
  className?: string | undefined;
}) {
  return (
    <ol className={cn("mt-8 space-y-6", className)}>
      {items.map((item, i) => (
        <Reveal as="li" key={item.lead} delay={i * 60} className="flex gap-5">
          <span className="mt-1 font-display text-sm font-semibold tabular-nums text-teal">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="measure text-base leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-navy">{item.lead}</strong> {item.text}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="mt-12 text-xl text-navy sm:text-2xl">{children}</h3>;
}
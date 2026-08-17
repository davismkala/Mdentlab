import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { PlusLink } from "./PlusLink";
import { cn } from "@/lib/utils";

/**
 * Full-viewport dark hero.
 *
 * VIDEO SLOT: the original site uses a looping background video of the lab.
 * To restore it, drop a <video> in place of the <img> below:
 *
 *   <video className="h-full w-full object-cover" autoPlay muted loop playsInline
 *          poster={image} src="<LAB_VIDEO_URL>" />
 */
export function Hero({
  image,
  alt = "",
  headline,
  subline,
  ctas = [],
  full = true,
}: {
  image: string;
  alt?: string | undefined;
  headline: ReactNode;
  subline?: string | undefined;
  ctas?: { label: string; to: string }[] | undefined;
  full?: boolean | undefined;
}) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden bg-navy",
        full ? "min-h-[92vh]" : "min-h-[52vh]",
      )}
    >
      <div className="absolute inset-0">
        {/* --- background media slot (see comment above) --- */}
        <img src={image} alt={alt} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/75" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-deep via-navy-deep/20 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 lg:pb-28">
        <Reveal>
          <h1 className="max-w-4xl text-4xl text-navy-foreground sm:text-6xl lg:text-7xl">
            {headline}
          </h1>
          {subline ? (
            <p className="measure mt-6 text-lg leading-relaxed text-navy-foreground/75">
              {subline}
            </p>
          ) : null}
          {ctas.length ? (
            <div className="mt-10 flex flex-wrap gap-4">
              {ctas.map((cta, i) => (
                <PlusLink key={cta.to} to={cta.to} variant={i === 0 ? "solid" : "onDark"}>
                  {cta.label}
                </PlusLink>
              ))}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}

/** Compact title band used by inner pages. */
export function PageHero({
  title,
  eyebrow,
  image,
  children,
}: {
  title: string;
  eyebrow?: string | undefined;
  image?: string | undefined;
  children?: ReactNode | undefined;
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      {image ? (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-navy-deep/65" />
        </div>
      ) : null}
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-40 sm:px-8 lg:pb-24">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-teal-soft">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-4xl text-4xl text-navy-foreground sm:text-5xl lg:text-6xl">{title}</h1>
        {children ? (
          <div className="prose-mdent mt-8 text-navy-foreground/75">{children}</div>
        ) : null}
      </div>
    </section>
  );
}

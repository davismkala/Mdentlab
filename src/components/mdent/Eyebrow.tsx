import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  onDark = false,
}: {
  children: React.ReactNode;
  className?: string | undefined;
  onDark?: boolean | undefined;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em]",
        onDark ? "text-teal-soft" : "text-teal",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

export function EyebrowHeading({
  eyebrow,
  heading,
  onDark = false,
  className,
  level = 2,
}: {
  eyebrow?: string | undefined;
  heading: React.ReactNode;
  onDark?: boolean | undefined;
  className?: string | undefined;
  level?: 1 | 2 | 3 | undefined;
}) {
  const Tag = (`h${level}` as const) satisfies "h1" | "h2" | "h3";
  return (
    <div className={cn("space-y-4", className)}>
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <Tag
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl",
          onDark ? "text-navy-foreground" : "text-navy",
        )}
      >
        {heading}
      </Tag>
    </div>
  );
}
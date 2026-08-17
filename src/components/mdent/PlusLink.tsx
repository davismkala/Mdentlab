import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Signature brand detail: every CTA is prefixed with a "+".
 * `to` may include a hash, e.g. "/crowns#gold".
 */
export function splitTo(to: string): { to: string; hash?: string } {
  const [path, hash] = to.split("#");
  return hash ? { to: path || "/", hash } : { to: path || "/" };
}

type Variant = "solid" | "outline" | "ghost" | "onDark";

const base =
  "inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] transition-colors duration-200";

const variants: Record<Variant, string> = {
  solid: "bg-teal px-6 py-3.5 text-navy-foreground hover:bg-navy",
  outline:
    "border border-navy/25 px-6 py-3.5 text-navy hover:border-teal hover:text-teal",
  onDark:
    "border border-navy-foreground/30 px-6 py-3.5 text-navy-foreground hover:border-teal hover:bg-teal",
  ghost: "text-teal hover:text-navy",
};

export function PlusLink({
  to,
  children,
  variant = "solid",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: Variant | undefined;
  className?: string | undefined;
}) {
  return (
    <Link {...splitTo(to)} className={cn(base, variants[variant], className)}>
      <span aria-hidden="true">+</span>
      <span>{children}</span>
    </Link>
  );
}

export function PlusButton({
  children,
  variant = "solid",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      {...props}
      className={cn(base, variants[variant], "disabled:opacity-60", className)}
    >
      <span aria-hidden="true">+</span>
      <span>{children}</span>
    </button>
  );
}
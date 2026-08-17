import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { SOCIALS } from "@/lib/site";
import { cn } from "@/lib/utils";

function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.5 3c.3 2.1 1.6 3.6 3.7 3.8v2.4c-1.3.1-2.5-.2-3.7-.9v5.9c0 4.3-4.1 6.9-7.8 5-2.4-1.3-3.3-4.3-2.3-6.8.9-2.2 3.1-3.4 5.6-3.1v2.6c-.4-.1-.8-.2-1.2-.2-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5V3h3.2Z" />
    </svg>
  );
}

const ICONS = { facebook: Facebook, instagram: Instagram, linkedin: Linkedin, youtube: Youtube };

export function SocialIcons({
  className,
  size = "sm",
}: {
  className?: string | undefined;
  size?: "sm" | "md" | undefined;
}) {
  const s = size === "md" ? "h-5 w-5" : "h-4 w-4";
  return (
    <ul className={cn("flex items-center gap-4", className)}>
      {SOCIALS.map((social) => {
        const Icon = social.icon === "tiktok" ? TikTok : ICONS[social.icon];
        return (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.name}
              className="block text-navy-foreground/70 transition-colors hover:text-teal-soft"
            >
              <Icon className={s} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

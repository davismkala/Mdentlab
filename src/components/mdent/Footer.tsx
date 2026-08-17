import { Link } from "@tanstack/react-router";
import { FOOTER_SERVICES, FOOTER_USEFUL, SITE } from "@/lib/site";
import { SocialIcons } from "./SocialIcons";
import { NewsletterForm } from "./NewsletterForm";
import { splitTo } from "./PlusLink";

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-navy-foreground">
      {children}
    </h2>
  );
}

const linkClass =
  "text-sm leading-relaxed text-navy-foreground/65 transition-colors hover:text-teal-soft";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <img src={SITE.logoFooter} alt="MDent" className="h-12 w-auto" />
            <p className="mt-6 text-sm leading-relaxed text-navy-foreground/65">
              Since 1995 Middle East Dental Laboratory has been a vanguard of the latest
              advancements in the field of dental technology in the GCC.
            </p>
            <h2 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-[0.2em]">
              Follow Us on our Socials
            </h2>
            <SocialIcons size="md" />
          </div>

          <div>
            <ColHeading>Our Services</ColHeading>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.to}>
                  <Link {...splitTo(item.to)} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColHeading>Usefull Links</ColHeading>
            <ul className="space-y-3">
              {FOOTER_USEFUL.map((item) => (
                <li key={item.to}>
                  <Link {...splitTo(item.to)} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-[0.2em]">
              Business Hours
            </h2>
            <p className="text-sm leading-relaxed text-navy-foreground/65">
              Monday to Friday 8AM - 8PM
              <br />
              Saturday to Sunday 10AM - 7PM
            </p>
          </div>

          <div>
            <ColHeading>Reach Us</ColHeading>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${SITE.email}`} className={linkClass}>
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.phoneHref} className={linkClass}>
                  Call Us {SITE.phone}
                </a>
              </li>
              <li className="text-sm leading-relaxed text-navy-foreground/65">{SITE.address}</li>
            </ul>
            <h2 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-[0.2em]">
              Sign Up to our Newsletter
            </h2>
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-xs text-navy-foreground/55 sm:px-8">
          © Copyright 2026{" "}
          <Link to="/" className="hover:text-teal-soft">
            Middle East Dental Lab
          </Link>
          . All Rights Reserved. Made with 🤍 by{" "}
          <a
            href="https://strategine.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-teal-soft"
          >
            Strategine Consulting
          </a>
        </div>
      </div>
    </footer>
  );
}

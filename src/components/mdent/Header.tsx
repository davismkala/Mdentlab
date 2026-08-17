import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { NAV, SITE, type NavGroup } from "@/lib/site";
import { PlusLink, splitTo } from "./PlusLink";
import { SocialIcons } from "./SocialIcons";
import { cn } from "@/lib/utils";

function TopBar() {
  return (
    <div className="hidden bg-navy-deep py-2.5 text-navy-foreground/70 lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 text-xs sm:px-8">
        <p className="tracking-wide">{SITE.address}</p>
        <SocialIcons />
      </div>
    </div>
  );
}

function MegaPanel({ group, onNavigate }: { group: NavGroup; onNavigate: () => void }) {
  return (
    <div className="absolute left-0 right-0 top-full border-t border-navy-foreground/10 bg-navy-deep shadow-2xl">
      <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-8 px-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {group.children?.map((child) => (
          <div key={child.label}>
            <Link
              {...splitTo(child.to)}
              onClick={onNavigate}
              className="text-sm font-semibold uppercase tracking-[0.14em] text-navy-foreground transition-colors hover:text-teal-soft"
            >
              {child.label}
            </Link>
            {child.children?.length ? (
              <ul className="mt-3 space-y-2 border-l border-navy-foreground/15 pl-4">
                {child.children.map((leaf) => (
                  <li key={leaf.label + leaf.to}>
                    <Link
                      {...splitTo(leaf.to)}
                      onClick={onNavigate}
                      className="text-sm leading-snug text-navy-foreground/65 transition-colors hover:text-teal-soft"
                    >
                      {leaf.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-deep lg:hidden">
      <div className="flex items-center justify-between px-5 py-5">
        <Link to="/" onClick={onClose}>
          <img src={SITE.logoWhite} alt="MDent" className="h-8 w-auto" />
        </Link>
        <button onClick={onClose} aria-label="Close menu" className="text-navy-foreground">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="px-5 pb-16">
        <ul className="divide-y divide-navy-foreground/10 border-y border-navy-foreground/10">
          {NAV.map((group) => (
            <li key={group.label} className="py-1">
              {group.to ? (
                <Link
                  {...splitTo(group.to)}
                  onClick={onClose}
                  className="block py-4 text-base font-semibold uppercase tracking-[0.14em] text-navy-foreground"
                >
                  {group.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => setOpen(open === group.label ? null : group.label)}
                    aria-expanded={open === group.label}
                    className="flex w-full items-center justify-between py-4 text-base font-semibold uppercase tracking-[0.14em] text-navy-foreground"
                  >
                    {group.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        open === group.label && "rotate-180",
                      )}
                    />
                  </button>
                  {open === group.label ? (
                    <ul className="space-y-3 pb-5">
                      {group.children?.map((child) => (
                        <li key={child.label}>
                          <Link
                            {...splitTo(child.to)}
                            onClick={onClose}
                            className="text-sm font-medium text-navy-foreground/85"
                          >
                            {child.label}
                          </Link>
                          {child.children?.length ? (
                            <ul className="mt-2 space-y-2 border-l border-navy-foreground/15 pl-4">
                              {child.children.map((leaf) => (
                                <li key={leaf.label + leaf.to}>
                                  <Link
                                    {...splitTo(leaf.to)}
                                    onClick={onClose}
                                    className="text-sm text-navy-foreground/60"
                                  >
                                    {leaf.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-6">
          <PlusLink to="/contact-us" variant="solid" className="justify-center">
            Get in Touch
          </PlusLink>
          <SocialIcons size="md" />
        </div>
      </nav>
    </div>
  );
}

export function Header() {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpenGroup(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <TopBar />
      <div className="bg-navy/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <Link to="/" aria-label="MDent home">
            <img
              src={SITE.logoWhite}
              alt="MDent: Middle East Dental Laboratory"
              className="h-9 w-auto lg:h-10"
            />
          </Link>
          <div className="hidden items-center gap-4 lg:flex">
            <PlusLink to="/contact-us" variant="onDark" className="px-5 py-2.5 text-xs">
              Get in Touch
            </PlusLink>
          </div>
          <button
            className="text-navy-foreground lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <nav
        className="relative hidden border-t border-navy-foreground/10 bg-navy lg:block"
        onMouseLeave={() => setOpenGroup(null)}
      >
        <ul className="mx-auto flex max-w-7xl items-stretch gap-1 px-5 sm:px-8">
          {NAV.map((group) => (
            <li
              key={group.label}
              onMouseEnter={() => setOpenGroup(group.children ? group.label : null)}
            >
              {group.to ? (
                <Link
                  {...splitTo(group.to)}
                  className="flex h-full items-center px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-navy-foreground/80 transition-colors hover:text-teal-soft"
                  activeProps={{ className: "text-teal-soft" }}
                  activeOptions={{ exact: true }}
                >
                  {group.label}
                </Link>
              ) : (
                <button
                  onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                  aria-expanded={openGroup === group.label}
                  className={cn(
                    "flex h-full items-center gap-1.5 px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors",
                    openGroup === group.label
                      ? "text-teal-soft"
                      : "text-navy-foreground/80 hover:text-teal-soft",
                  )}
                >
                  {group.label}
                  <ChevronDown className="h-3 w-3" />
                </button>
              )}
            </li>
          ))}
        </ul>
        {openGroup ? (
          <MegaPanel
            group={NAV.find((g) => g.label === openGroup)!}
            onNavigate={() => setOpenGroup(null)}
          />
        ) : null}
      </nav>

      {mobileOpen ? <MobileDrawer onClose={() => setMobileOpen(false)} /> : null}
    </header>
  );
}

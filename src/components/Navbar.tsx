import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { SITE } from "@/data/site";

const LOGO_ICON = "/logo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        transparent
          ? "bg-transparent py-5"
          : "border-b border-border/70 bg-background/85 py-3 shadow-[0_8px_30px_-20px_rgba(31,31,31,0.4)] backdrop-blur-md"
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3 leading-none">
          <img
            src={LOGO_ICON}
            alt="Ananda Fashions logo"
            className="h-11 w-11 rounded-full object-cover shadow-sm md:h-12 md:w-12"
          />
          <span className="flex flex-col">
            <span
              className={`font-display text-2xl font-semibold tracking-tight transition-colors md:text-[1.7rem] ${
                transparent ? "text-white" : "text-primary"
              }`}
            >
              Ananda<span className="text-gold"> Fashions</span>
            </span>
            <span
              className={`mt-0.5 text-[0.6rem] uppercase tracking-[0.34em] transition-colors ${
                transparent ? "text-white/70" : "text-muted-foreground"
              }`}
            >
              Tailoring Studio
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className={`group relative text-sm font-medium tracking-wide transition-colors ${
                  transparent
                    ? "text-white/90 hover:text-white"
                    : "text-foreground/80 hover:text-primary"
                }`}
                activeProps={{
                  className: transparent ? "text-white" : "text-primary",
                }}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full group-data-[status=active]:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`grid h-10 w-10 place-items-center rounded-full border transition-colors md:hidden ${
            transparent
              ? "border-white/40 text-white"
              : "border-border text-foreground"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 top-0 z-40 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`fixed inset-x-0 top-0 z-50 origin-top bg-background px-6 pb-8 pt-24 shadow-elegant transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute right-5 top-6 grid h-10 w-10 place-items-center rounded-full border border-border text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          <ul className="flex flex-col divide-y divide-border">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="block py-4 font-display text-2xl text-foreground transition-colors hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">
            {SITE.email}
          </p>
        </div>
      </div>
    </header>
  );
}


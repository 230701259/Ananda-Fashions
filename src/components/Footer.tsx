import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { SITE, whatsappLink, GENERAL_ENQUIRY } from "@/data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[var(--maroon-deep)] text-white/80">
      <div className="container-px grid gap-12 py-16 md:grid-cols-3 md:py-20">
        <div>
          <p className="font-display text-3xl font-semibold text-white">
            Anada<span className="text-gold"> Fashions</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            {SITE.tagline}. A premium tailoring studio crafting bridal wear,
            designer blouses and bespoke fashion.
          </p>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Explore</h3>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="text-sm text-white/75 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Get in Touch</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold" />
              <span className="text-white/75">{SITE.phoneDisplay}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a
                href={`mailto:${SITE.email}`}
                className="text-white/75 transition-colors hover:text-gold"
              >
                {SITE.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-gold" />
              <a
                href={whatsappLink(GENERAL_ENQUIRY)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 transition-colors hover:text-gold"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row">
          <p>© 2026 Anada Fashions. All rights reserved.</p>
          <p>Elegant Designs Crafted with Perfection</p>
        </div>
      </div>
    </footer>
  );
}

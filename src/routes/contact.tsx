import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { SITE, whatsappLink, GENERAL_ENQUIRY } from "@/data/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { btn, cls } from "@/components/ui-button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Anada Fashions" },
      {
        name: "description",
        content:
          "Get in touch with Anada Fashions. Call, email or message us on WhatsApp for enquiries, custom stitching and appointments.",
      },
      { property: "og:title", content: "Contact Anada Fashions" },
      {
        property: "og:description",
        content: "Reach us by phone, email or WhatsApp for enquiries and appointments.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background pt-28 md:pt-32">
      <section className="container-px pb-16 text-center">
        <p className="eyebrow">Get in Touch</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-foreground md:text-6xl">
          Contact Us
        </h1>
        <div className="mx-auto mt-4 gold-rule" />
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          We'd love to hear from you. Reach out for design enquiries, custom
          stitching or to book an appointment.
        </p>
      </section>

      <section className="container-px pb-24">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border shadow-soft">
          <div className="bg-[var(--maroon-deep)] px-8 py-10 text-center">
            <h2 className="font-display text-3xl font-semibold text-white">
              Anada<span className="text-gold"> Fashions</span>
            </h2>
            <p className="mt-2 text-sm text-white/70">{SITE.tagline}</p>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            <div className="flex flex-col items-center gap-3 bg-card p-10 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-secondary text-primary">
                <Phone className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-medium text-foreground">Phone</h3>
              <a
                href={`tel:${SITE.phoneDisplay.replace(/\s/g, "")}`}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
            <div className="flex flex-col items-center gap-3 bg-card p-10 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-secondary text-primary">
                <Mail className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-medium text-foreground">Email</h3>
              <a
                href={`mailto:${SITE.email}`}
                className="break-all text-muted-foreground transition-colors hover:text-primary"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          <div className="bg-secondary px-8 py-12 text-center">
            <span className="grid mx-auto h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white animate-pulse-ring">
              <WhatsAppIcon className="h-7 w-7" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-medium text-foreground">
              Chat with us instantly
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              The fastest way to reach Anada Fashions. Tap below to start a
              conversation on WhatsApp.
            </p>
            <a
              href={whatsappLink(GENERAL_ENQUIRY)}
              target="_blank"
              rel="noopener noreferrer"
              className={cls(btn.base, btn.whatsapp, "mt-7")}
            >
              <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

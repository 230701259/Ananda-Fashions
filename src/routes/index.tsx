import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Scissors,
  Sparkles,
  TrendingUp,
  Gem,
  BadgeIndianRupee,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { SITE, whatsappLink, GENERAL_ENQUIRY } from "@/data/site";
import { categories } from "@/data/categories";
import { getFeaturedDesigns } from "@/data/designs";
import { DesignCard } from "@/components/DesignCard";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { btn, cls } from "@/components/ui-button";
import heroImg from "@/assets/hero.jpg";
import showcaseImg from "@/assets/showcase.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anada Fashions — Elegant Designs Crafted with Perfection" },
      {
        name: "description",
        content:
          "Premium tailoring studio for bridal wear, designer blouses, maggam & aari work. Browse our luxury design catalogue and connect on WhatsApp.",
      },
      { property: "og:title", content: "Anada Fashions — Premium Tailoring Studio" },
      {
        property: "og:description",
        content: "Elegant Designs Crafted with Perfection. Custom tailoring & bridal couture.",
      },
    ],
  }),
  component: HomePage,
});

const WHY_CHOOSE = [
  { icon: Gem, title: "Premium Finishing", text: "Impeccable seams and hand-finished detailing on every piece." },
  { icon: Scissors, title: "Customized Stitching", text: "Made-to-measure tailoring shaped precisely to your fit." },
  { icon: TrendingUp, title: "Latest Trends", text: "Contemporary silhouettes inspired by the runway." },
  { icon: Sparkles, title: "Attention to Detail", text: "Intricate embroidery crafted with patience and care." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", text: "Luxury craftsmanship that respects your budget." },
  { icon: ShieldCheck, title: "Trusted Craftsmanship", text: "Years of expertise loved by countless happy clients." },
];

function HomePage() {
  const featured = getFeaturedDesigns(8);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Anada Fashions bridal couture"
          className="absolute inset-0 h-full w-full object-cover object-center animate-zoom-in"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-px relative z-10 pt-28 pb-16">
          <div className="max-w-2xl">
            <p className="eyebrow animate-fade-up text-gold-soft">{SITE.specialities}</p>
            <h1 className="mt-5 animate-fade-up anim-delay-100 font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl md:text-7xl">
              Anada Fashions
            </h1>
            <p className="mt-5 animate-fade-up anim-delay-200 max-w-xl font-display text-2xl italic text-white/85 sm:text-3xl">
              {SITE.tagline}
            </p>
            <div className="mt-9 flex animate-fade-up anim-delay-300 flex-wrap gap-4">
              <Link to="/gallery" className={cls(btn.base, btn.heroSolid)}>
                Explore Designs <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className={cls(btn.base, btn.heroOutline)}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-float flex-col items-center gap-2 text-white/70 md:flex">
          <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-10 w-px bg-white/40" />
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Craft"
            title="Featured Categories"
            subtitle="Explore our signature collections, each tailored with devotion to detail."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <Link
                key={cat.key}
                to="/gallery"
                search={{ cat: cat.key }}
                className={`group relative overflow-hidden rounded-xl ${
                  i === 0 ? "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className={`relative ${i === 0 ? "aspect-square lg:h-full" : "aspect-[4/5]"} overflow-hidden`}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--maroon-deep)]/85 via-[var(--maroon-deep)]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-display text-xl font-medium text-white md:text-2xl">
                      {cat.title}
                    </h3>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-gold-soft opacity-0 transition-all duration-500 group-hover:opacity-100">
                      View collection <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DESIGNS */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Handpicked"
            title="Featured Designs"
            subtitle="A curated selection from our latest catalogue."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {featured.map((design, i) => (
              <DesignCard key={design.id} design={design} priority={i < 4} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/gallery" className={cls(btn.base, btn.outline)}>
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="The Anada Promise"
            title="Why Choose Us"
            subtitle="A boutique experience built on trust, artistry and a perfect fit."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-card p-7 card-hover"
              >
                <div className="grid h-14 w-14 place-items-center rounded-full bg-secondary text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER ATTRACTION */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={showcaseImg}
                alt="Anada Fashions tailoring studio"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-gold/40 bg-background px-7 py-5 shadow-elegant sm:block">
              <p className="font-display text-4xl font-semibold text-primary">500+</p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Designs Crafted
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Luxury Showcase</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Discover Hundreds of Beautiful Designs
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              From timeless bridal couture to everyday elegance, every Anada
              Fashions creation is a celebration of artistry. Browse our gallery
              and find the design that tells your story.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/gallery" className={cls(btn.base, btn.primary)}>
                View Gallery <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="relative overflow-hidden bg-[var(--maroon-deep)] py-20 md:py-24">
        <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_20%_20%,var(--gold),transparent_45%),radial-gradient(circle_at_80%_80%,var(--gold),transparent_45%)]" />
        <div className="container-px relative z-10 text-center">
          <p className="eyebrow">Let's Create Together</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
            Have a design in mind? Let's bring it to life.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Message us directly on WhatsApp for enquiries, custom stitching and
            appointment bookings.
          </p>
          <a
            href={whatsappLink(GENERAL_ENQUIRY)}
            target="_blank"
            rel="noopener noreferrer"
            className={cls(btn.base, btn.whatsapp, "mt-8")}
          >
            <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 gold-rule" />
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

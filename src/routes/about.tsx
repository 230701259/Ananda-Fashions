import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { btn, cls } from "@/components/ui-button";
import aboutImg from "@/assets/about.jpg";

const FROCK_2 = "/images/frock/Frock_2.png";
const BLOUSE_1 = "/images/blouse/Blouse_1.png";
const HALF_SAREE_4 = "/images/half-saree/Half_Saree_4.png";
const HAND_3 = "/images/hand-design/Hand_3.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Anada Fashions" },
      {
        name: "description",
        content:
          "Discover the story behind Anada Fashions — a premium tailoring studio devoted to craftsmanship, custom stitching and elegant bridal couture.",
      },
      { property: "og:title", content: "About Anada Fashions" },
      {
        property: "og:description",
        content: "A premium tailoring studio devoted to craftsmanship and elegance.",
      },
    ],
  }),
  component: AboutPage,
});

const SERVICES = [
  "Custom Tailoring",
  "Designer Blouses",
  "Bridal Wear",
  "Aari Work",
  "Alterations",
  "Kids Wear",
];

const SHOWCASE_IMAGES = [
  {
    src: FROCK_2,
    alt: "Rose print frock design by Anada Fashions",
    className: "col-span-2 row-span-2",
  },
  {
    src: HAND_3,
    alt: "Pearl Line Hand Design",
    className: "",
  },
  {
    src: BLOUSE_1,
    alt: "Designer Blouse",
    className: "",
  },
  {
    src: HALF_SAREE_4,
    alt: "Ivory Green Half Saree",
    className: "col-span-2",
  },
];

function AboutPage() {
  return (
    <div className="bg-background pt-28 md:pt-32">
      <section className="container-px grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">
            Crafted with Passion, Worn with Pride
          </h1>
          <div className="my-6 gold-rule" />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Anada Fashions began with a simple belief — that every garment
              should be as unique as the person who wears it. Founded by
              <strong className="text-foreground"> Ananda Selvi G</strong>, what
              started as a small tailoring studio has grown into a trusted name
              for bridal couture, designer blouses, and bespoke fashion.
            </p>
            <p>
              Her vision continues through every stitch, combining traditional
              handwork like aari and refined embroidery with silhouettes that
              feel elegant, wearable, and timeless for today’s clients.
            </p>
            <p>
              We don&apos;t just stitch fabric; we craft confidence, celebrate
              milestones, and bring your vision to life with thoughtful detail
              and care.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-elegant">
            <img
              src={aboutImg}
              alt="Artisan embroidering gold detailing at Anada Fashions"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">What We Offer</p>
            <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
              Our Services
            </h2>
            <div className="mx-auto mt-4 gold-rule" />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <div
                key={service}
                className="group flex items-center gap-5 rounded-xl border border-border bg-card p-6 card-hover"
              >
                <span className="font-display text-3xl font-semibold text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-medium text-foreground">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Gallery Preview</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
            Fashion Showcase
          </h2>
          <div className="mx-auto mt-4 gold-rule" />
        </div>
        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {SHOWCASE_IMAGES.map((item) => (
            <div
              key={item.src}
              className={cls("overflow-hidden rounded-2xl", item.className)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--maroon-deep)] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10 [background:radial-gradient(circle_at_15%_20%,var(--gold),transparent_40%),radial-gradient(circle_at_85%_75%,var(--gold),transparent_40%)]" />
        <div className="container-px relative z-10 mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our Vision</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
            A Commitment to Quality & Your Happiness
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            We envision Anada Fashions as more than a tailoring studio — a place
            where craftsmanship meets care, where every customer feels heard, and
            where each design leaves you feeling beautiful. Our promise is simple:
            uncompromising quality and complete satisfaction, every single time.
          </p>
          <Link to="/gallery" className={cls(btn.base, btn.heroSolid, "mt-9")}>
            Explore Our Designs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}


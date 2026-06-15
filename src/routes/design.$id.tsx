import { useState } from "react";
import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  getDesignById,
  getRelatedDesigns,
  CATEGORY_LABELS,
} from "@/data/designs";
import { whatsappLink, designEnquiryMessage } from "@/data/site";
import { DesignCard } from "@/components/DesignCard";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { btn, cls } from "@/components/ui-button";

export const Route = createFileRoute("/design/$id")({
  head: ({ params }) => {
    const design = getDesignById(params.id);
    return {
      meta: design
        ? [
            { title: `${design.title} (${design.code}) — Anada Fashions` },
            { name: "description", content: design.description.slice(0, 155) },
            { property: "og:title", content: `${design.title} — Anada Fashions` },
            { property: "og:description", content: design.description.slice(0, 155) },
            { property: "og:image", content: design.image },
            { name: "twitter:image", content: design.image },
          ]
        : [{ title: "Design — Anada Fashions" }],
    };
  },
  component: DesignDetailPage,
});

function DesignDetailPage() {
  const { id } = useParams({ from: "/design/$id" });
  const design = getDesignById(id);
  const [activeImage, setActiveImage] = useState(0);

  if (!design) {
    return (
      <div className="container-px flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
        <p className="eyebrow">Not Found</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-foreground">
          Design unavailable
        </h1>
        <p className="mt-3 text-muted-foreground">
          We couldn't find the design you're looking for.
        </p>
        <Link to="/gallery" className={cls(btn.base, btn.primary, "mt-8")}>
          Back to Gallery
        </Link>
      </div>
    );
  }

  const related = getRelatedDesigns(design, 4);
  const images = design.images.length ? design.images : [design.image];

  return (
    <div className="bg-background pt-24 md:pt-28">
      <div className="container-px py-8">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Gallery
        </Link>
      </div>

      <section className="container-px grid gap-10 pb-20 lg:grid-cols-2 lg:gap-16">
        {/* LEFT — gallery */}
        <div>
          <div className="overflow-hidden rounded-2xl shadow-elegant">
            <img
              src={images[activeImage]}
              alt={`${design.title} — view ${activeImage + 1}`}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          {images.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`overflow-hidden rounded-lg border-2 transition-all ${
                    activeImage === i
                      ? "border-gold"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${design.title} thumbnail ${i + 1}`}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — info */}
        <div className="lg:pt-4">
          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            {CATEGORY_LABELS[design.category]}
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            {design.title}
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-gold">
            Design Code · {design.code}
          </p>

          <div className="my-8 gold-rule" />

          <h2 className="font-display text-xl font-medium text-foreground">
            Description
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {design.description}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-border bg-secondary/60 p-6">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Design Code
              </dt>
              <dd className="mt-1 font-display text-lg text-foreground">{design.code}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Category
              </dt>
              <dd className="mt-1 font-display text-lg text-foreground">
                {CATEGORY_LABELS[design.category]}
              </dd>
            </div>
          </dl>

          <a
            href={whatsappLink(designEnquiryMessage(design.code))}
            target="_blank"
            rel="noopener noreferrer"
            className={cls(btn.base, btn.whatsapp, "mt-8 w-full sm:w-auto")}
          >
            <WhatsAppIcon className="h-5 w-5" /> Enquire on WhatsApp
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Tap to start a chat with a prefilled message about {design.code}.
          </p>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="border-t border-border bg-secondary py-16 md:py-20">
          <div className="container-px">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow">You May Also Like</p>
                <h2 className="mt-2 font-display text-3xl font-semibold text-foreground md:text-4xl">
                  Related Designs
                </h2>
              </div>
              <Link
                to="/gallery"
                className="hidden items-center gap-1.5 text-sm text-primary hover:text-gold sm:inline-flex"
              >
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((d) => (
                <DesignCard key={d.id} design={d} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

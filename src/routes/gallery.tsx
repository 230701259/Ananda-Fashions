import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { designs, type CategoryKey } from "@/data/designs";
import { CategoryFilter } from "@/components/CategoryFilter";
import { DesignCard } from "@/components/DesignCard";

type Filter = "All" | CategoryKey;

const VALID: Filter[] = [
  "All",
  "PavadaiSattai",
  "HalfSaree",
  "Frock",
  "AariBlouse",
  "DesignerBlouse",
  "HandDesign",
];

export const Route = createFileRoute("/gallery")({
  validateSearch: (search): { cat?: Filter } => {
  const cat = search.cat as Filter;

  return {
    cat: VALID.includes(cat) ? cat : "All",
  };
},
  head: () => ({
    meta: [
      { title: "Design Gallery — Anada Fashions" },
      {
        name: "description",
        content:
          "Browse the full Anada Fashions catalogue — aari blouses, designer blouses, half sarees, pavadai sattai, frocks and hand designs.",
      },
      { property: "og:title", content: "Design Gallery — Anada Fashions" },
      {
        property: "og:description",
        content: "Explore our complete collection of premium tailoring designs.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { cat } = Route.useSearch();
  const [active, setActive] = useState<Filter>(cat ?? "All");

  const filtered =
    active === "All" ? designs : designs.filter((d) => d.category === active);

  return (
    <div className="bg-background pt-28 md:pt-32">
      <section className="container-px pb-12 text-center">
        <p className="eyebrow">Our Catalogue</p>
        <h1 className="mt-3 font-display text-5xl font-semibold text-foreground md:text-6xl">
          Design Gallery
        </h1>
        <div className="mx-auto mt-4 gold-rule" />
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Every piece is hand-crafted with precision. Filter by category to find
          your perfect design, then enquire on WhatsApp.
        </p>
      </section>

      <section className="container-px sticky top-[68px] z-30 -mx-5 bg-background/85 px-5 py-4 backdrop-blur-md md:top-[76px]">
        <CategoryFilter active={active} onChange={setActive} />
      </section>

      <section className="container-px py-12 md:py-16">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((design, i) => (
              <DesignCard key={design.id} design={design} priority={i < 4} />
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-muted-foreground">
            No designs found in this category yet.
          </p>
        )}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Showing {filtered.length} design{filtered.length !== 1 ? "s" : ""}
        </p>
      </section>
    </div>
  );
}

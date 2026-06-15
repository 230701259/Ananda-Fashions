import { Link } from "@tanstack/react-router";
import type { Design } from "@/data/designs";

interface DesignCardProps {
  design: Design;
  priority?: boolean;
}

export function DesignCard({ design, priority }: DesignCardProps) {
  return (
    <Link
      to="/design/$id"
      params={{ id: design.id }}
      className="group block overflow-hidden rounded-xl bg-card card-hover"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={design.image}
          alt={`${design.title} — ${design.categoryLabel} (${design.code})`}
          loading={priority ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
          {design.code}
        </span>
        <span className="absolute bottom-4 left-4 translate-y-3 text-sm font-medium tracking-wide text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          View Design →
        </span>
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-4">
        <div className="min-w-0">
          <h3 className="truncate font-display text-lg font-medium text-foreground">
            {design.title}
          </h3>
          <p className="mt-0.5 text-xs uppercase tracking-[0.2em] text-gold">
            {design.categoryLabel}
          </p>
        </div>
      </div>
    </Link>
  );
}

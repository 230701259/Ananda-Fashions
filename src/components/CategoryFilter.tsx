import { FILTERS, type CategoryKey } from "@/data/designs";

interface CategoryFilterProps {
  active: "All" | CategoryKey;
  onChange: (key: "All" | CategoryKey) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
      {FILTERS.map((filter) => {
        const isActive = active === filter.key;
        return (
          <button
            key={filter.key}
            type="button"
            onClick={() => onChange(filter.key)}
            aria-pressed={isActive}
            className={`rounded-full border px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
              isActive
                ? "border-primary bg-primary text-primary-foreground shadow-elegant"
                : "border-border bg-background text-foreground/75 hover:border-gold hover:text-primary"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

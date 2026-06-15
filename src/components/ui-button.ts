/** Shared luxury button class presets (used on Link/anchor/button elements). */
export const btn = {
  base: "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  primary:
    "bg-primary text-primary-foreground shadow-elegant hover:-translate-y-0.5 hover:bg-[var(--maroon-deep)]",
  gold:
    "bg-[var(--gradient-gold)] text-[var(--maroon-deep)] shadow-gold hover:-translate-y-0.5",
  outline:
    "border border-primary/30 bg-background text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground",
  heroSolid:
    "bg-gold text-[var(--maroon-deep)] shadow-gold hover:-translate-y-0.5",
  heroOutline:
    "border border-white/60 text-white hover:bg-white hover:text-[var(--maroon-deep)]",
  whatsapp:
    "bg-[#25D366] text-white shadow-[0_14px_30px_-10px_rgba(37,211,102,0.7)] hover:-translate-y-0.5 hover:bg-[#20bd5a]",
} as const;

/** Compose button classes: cls(btn.base, btn.primary). */
export function cls(...parts: (string | false | undefined)[]): string {
  return parts.filter(Boolean).join(" ");
}

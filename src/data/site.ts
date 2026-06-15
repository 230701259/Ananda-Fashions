// Central business information for Anada Fashions.
// Update these values with the real business contact details.

// WhatsApp number in international format, digits only (no +, spaces or dashes).
// Replace with the real number to make WhatsApp links functional.
export const WHATSAPP_NUMBER = "918148095782";

export const SITE = {
  name: "Anada Fashions",
  tagline: "Elegant Designs Crafted with Perfection",
  specialities: "Custom Tailoring • Bridal Wear • Designer Blouses • Fashion Stitching",
  phoneDisplay: "+91 81480 95782",
  email: "vinnarasiramathulasi@gmail.com",
  whatsappNumber: WHATSAPP_NUMBER,
} as const;

/** Build a wa.me link with an optional prefilled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Prefilled message for a specific design enquiry. */
export function designEnquiryMessage(code: string): string {
  return `Hello Anada Fashions,\n\nI am interested in Design ${code}.\n\nPlease share more details.`;
}

export const GENERAL_ENQUIRY = `Hello Anada Fashions,\n\nI would like to know more about your designs and tailoring services.`;

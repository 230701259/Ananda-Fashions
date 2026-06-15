import { whatsappLink, GENERAL_ENQUIRY } from "@/data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Fixed, always-visible WhatsApp action shown on every page. */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(GENERAL_ENQUIRY)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Anada Fashions on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-105 animate-pulse-ring md:bottom-7 md:right-7"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm font-medium tracking-wide sm:inline">
        Chat with us
      </span>
    </a>
  );
}

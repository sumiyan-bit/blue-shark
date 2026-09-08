import { BookOpenText, ShoppingBag } from "lucide-react";
import { deliveryUrl } from "../data/siteConfig";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-ink/95 backdrop-blur-md lg:hidden">
      <a
        href="#cardapio"
        className="flex flex-1 flex-col items-center gap-1 py-3 font-body text-[11px] font-medium uppercase tracking-wider text-paper/70"
      >
        <BookOpenText size={20} strokeWidth={1.6} />
        Cardápio
      </a>
      <a
        href={deliveryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-[1.4] items-center justify-center gap-2 bg-ocean py-3 font-body text-[11px] font-bold uppercase tracking-wider text-ink"
      >
        <ShoppingBag size={18} strokeWidth={1.8} />
        Pedir Delivery
      </a>
    </div>
  );
}

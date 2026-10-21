import { MessageCircle, ShoppingBag } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/Eyebrow";
import { OpenBadge } from "./ui/OpenBadge";
import { images } from "../data/images";
import { siteConfig, ifoodUrl, whatsappUrl, phoneUrl } from "../data/siteConfig";

export function Delivery() {
  return (
    <section id="delivery" className="scroll-mt-24 relative overflow-hidden bg-ocean-deep py-24 text-paper lg:py-32">
      <img
        src={images.delivery}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep via-ocean-deep/95 to-ocean-deep/70" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <Eyebrow>Delivery</Eyebrow>
          <h2 className="text-balance mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Blue Shark onde você estiver.
          </h2>
          <p className="mt-5 font-body text-base text-paper/80">
            Peça seus pratos favoritos e receba a experiência Blue Shark no conforto da sua
            casa, com a mesma qualidade e cuidado de sempre, prontos para chegar até você.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={ifoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-ocean px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.2em] text-ink transition-transform hover:scale-[1.03] hover:bg-ocean-light"
            >
              <ShoppingBag size={18} strokeWidth={1.6} />
              Pedir no iFood
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-paper/30 px-8 py-4 font-body text-sm font-bold uppercase tracking-[0.2em] text-paper transition-colors hover:border-ocean-light hover:text-ocean-light"
            >
              <MessageCircle size={18} strokeWidth={1.6} />
              Pedir pelo WhatsApp
            </a>
          </div>

          <p className="mt-6 font-body text-sm text-paper/60">
            Prefere ligar?{" "}
            <a href={phoneUrl} className="underline decoration-ocean-light/60 underline-offset-4">
              {siteConfig.phoneDisplay}
            </a>
          </p>
          <div className="mt-4">
            <OpenBadge />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

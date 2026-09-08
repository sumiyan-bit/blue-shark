import { MapPin, Phone, Clock } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { Eyebrow } from "./ui/Eyebrow";
import { siteConfig, mapsEmbedUrl, mapsDirectionsUrl, whatsappUrl } from "../data/siteConfig";

export function Location() {
  return (
    <section id="localizacao" className="scroll-mt-24 bg-paper py-24 text-ink lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <Eyebrow tone="dark">Localização</Eyebrow>
          <h2 className="text-balance mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            Venha viver essa experiência.
          </h2>

          <div className="mt-10 space-y-8">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-ocean-deep" size={22} strokeWidth={1.6} />
              <div className="font-body text-base text-ink/75">
                <p>{siteConfig.address.street}</p>
                <p>{siteConfig.address.neighborhood}</p>
                <p>
                  {siteConfig.address.cityState} · {siteConfig.address.zip}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 shrink-0 text-ocean-deep" size={22} strokeWidth={1.6} />
              <a href={whatsappUrl} className="font-body text-base text-ink/75 hover:text-ocean-deep">
                {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 shrink-0 text-ocean-deep" size={22} strokeWidth={1.6} />
              <div className="font-body text-base text-ink/75">
                <p>
                  {siteConfig.hours.days} · {siteConfig.hours.time}
                </p>
                <p className="mt-1 text-sm text-ink/50">{siteConfig.hours.exception}</p>
              </div>
            </div>
          </div>

          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-sm bg-ink px-8 py-4 font-body text-xs font-bold uppercase tracking-[0.2em] text-paper transition-transform hover:scale-[1.03]"
          >
            Como Chegar
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-ink/10 lg:aspect-auto lg:h-full">
            <iframe
              title="Localização do Blue Shark no mapa"
              src={mapsEmbedUrl}
              className="h-full w-full grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
